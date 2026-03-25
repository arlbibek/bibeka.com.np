"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { incrementGlobalClickCount } from "../../lib/click/actions";
import { supabaseBrowser } from "../../lib/supabase/browser";

function format(n: number) {
  return new Intl.NumberFormat().format(n);
}

function playClick() {
  // Small “click” using WebAudio (no file).
  const Ctx: typeof AudioContext | undefined =
    (window as any).AudioContext || (window as any).webkitAudioContext;
  if (!Ctx) return;

  const ctx = new Ctx();
  const o = ctx.createOscillator();
  const g = ctx.createGain();

  o.type = "square";
  o.frequency.value = 880;
  g.gain.value = 0.0001;

  o.connect(g);
  g.connect(ctx.destination);

  const t = ctx.currentTime;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.06, t + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.045);

  o.start(t);
  o.stop(t + 0.055);

  setTimeout(() => {
    try {
      ctx.close();
    } catch {
      // ignore
    }
  }, 120);
}

export default function ClickClient({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);
  const [blocked, setBlocked] = useState<string | null>(null);
  const [bump, setBump] = useState(0);
  const inflight = useRef(0);
  const [syncing, setSyncing] = useState(false);

  const subtitle = useMemo(() => {
    if (blocked) return blocked;
    return `This button has been clicked ${format(count)} time${
      count === 1 ? "" : "s"
    }.`;
  }, [blocked, count]);

  useEffect(() => {
    // Realtime sync across tabs/users (requires anon keys + realtime enabled).
    try {
      const supabase = supabaseBrowser();
      const channel = supabase
        .channel("click-global")
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "click_counters",
            filter: "name=eq.global",
          },
          (payload: any) => {
            const next = payload?.new?.count;
            if (typeof next === "number") setCount(next);
            else if (typeof next === "string") setCount(Number(next));
          },
        )
        .subscribe();

      return () => {
        void supabase.removeChannel(channel);
      };
    } catch {
      // No public envs set -> no realtime, optimistic still works.
      return;
    }
  }, []);

  const onPointerDown = async (e: React.PointerEvent<HTMLButtonElement>) => {
    setBlocked(null);

    // Best-effort "human with a mouse" gating.
    if (!e.isTrusted) {
      setBlocked("Nice try. Real clicks only.");
      return;
    }
    if (e.pointerType !== "mouse") {
      setBlocked("Mouse clicks only for this one.");
      return;
    }
    if (e.button !== 0) {
      setBlocked("Left click only.");
      return;
    }

    playClick();
    // Instant local update for “realtime” feel.
    setCount((c) => c + 1);
    setBump((x) => x + 1);

    inflight.current += 1;
    setSyncing(true);
    try {
      // Keep the server as source of truth; this just reconciles.
      const next = await incrementGlobalClickCount();
      if (Number.isFinite(next)) setCount(next);
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Could not count that click.";
      setBlocked(msg);
      // rollback one optimistic click
      setCount((c) => Math.max(0, c - 1));
    } finally {
      inflight.current -= 1;
      if (inflight.current <= 0) setSyncing(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl p-6 drop-shadow-xl bg-white/80 backdrop-blur transition duration-500 dark:bg-gradient-to-r from-slate-800/70 to-slate-900/70 hover:to-slate-800/70">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-sky-400/30 blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-violet-400/30 blur-2xl" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
      </div>

      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative">
          <div
            key={bump}
            className="pointer-events-none absolute inset-0 -m-6 rounded-full opacity-0 animate-ping bg-indigo-400/20"
          />
          <div className="pointer-events-none absolute inset-0 -m-10 rounded-full border border-indigo-500/20" />
          <div className="pointer-events-none absolute inset-0 -m-16 rounded-full border border-sky-500/10" />

          <button
            type="button"
            onPointerDown={onPointerDown}
            onKeyDown={(e) => e.preventDefault()}
            aria-label="Click counter button"
            className={[
              "group select-none w-44 h-44 rounded-full",
              "shadow-[0_20px_60px_rgba(79,70,229,0.35)]",
              "ring-1 ring-white/30 dark:ring-white/10",
              "bg-gradient-to-b from-slate-50/80 to-slate-200/60 dark:from-slate-200/10 dark:to-slate-900/30",
              "border border-slate-900/10 dark:border-white/10",
              "hover:brightness-105 active:scale-[0.98]",
              "relative overflow-hidden",
            ].join(" ")}
          >
            {/* button “cap” */}
            <span className="pointer-events-none absolute inset-3 rounded-full bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-500 shadow-[inset_0_2px_12px_rgba(255,255,255,0.35)]" />
            {/* inner highlight */}
            <span className="pointer-events-none absolute inset-0 opacity-60">
              <span className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-white/30 blur-xl" />
              <span className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-white/10 blur-xl" />
            </span>
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.55),transparent_55%)]" />
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18),transparent_60%)]" />
          </button>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-200">{subtitle}</p>

        <p className="text-xs text-gray-500 dark:text-gray-400 max-w-prose">
          {syncing ? "Syncing…" : "No message. No reward. Just click."}
        </p>
      </div>
    </div>
  );
}

