"use client";

import { useEffect, useRef, useState } from "react";
import { readerAct } from "../../../lib/echo/actions";

type Props = {
  slug: string;
  is_blurred: boolean;
  caution_text: string | null;
  unavailableReason: string | null;
};

export default function EchoReaderClient({
  slug,
  is_blurred,
  caution_text,
  unavailableReason,
}: Props) {
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<"read" | "destroy" | null>(null);
  const didAutoRead = useRef(false);

  const doAction = async (intent: "read" | "destroy") => {
    setError(null);
    setPending(intent);
    try {
      const fd = new FormData();
      fd.set("slug", slug);
      fd.set("intent", intent);
      const res = await readerAct(fd);
      if (!res.ok) {
        setError(res.error);
        return;
      }
      if (intent === "read") setContent(res.content || "");
    } finally {
      setPending(null);
    }
  };

  const shouldAutoRead = !unavailableReason && (!is_blurred || !caution_text);

  useEffect(() => {
    if (!shouldAutoRead) return;
    if (didAutoRead.current) return;
    didAutoRead.current = true;
    void doAction("read");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldAutoRead, slug]);

  return (
    <div className="min-h-screen dark:bg-slate-900 text-gray-800 dark:text-gray-200 p-6">
      <div className="mx-auto max-w-3xl pt-10">
        <div className="rounded-xl p-6 drop-shadow-xl bg-white transition duration-500 dark:bg-gradient-to-r from-slate-800 to-slate-900 hover:to-slate-800">
          <h1 className="text-3xl font-bold">/echo</h1>

          {unavailableReason ? (
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              {unavailableReason}
            </p>
          ) : content !== null ? (
            <div className="mt-6">
              <p className="text-sm font-semibold">Message</p>
              <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-slate-100 dark:bg-slate-700/40 p-4 text-sm">
                {content}
              </pre>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                This message may disappear after your view limit.
              </p>
            </div>
          ) : is_blurred ? (
            <div className="mt-6">
              <div className="rounded-lg border border-indigo-500/30 bg-indigo-500/10 p-4">
                <p className="text-sm font-semibold">Caution</p>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">
                  {caution_text || "This message is blurred."}
                </p>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => doAction("read")}
                  disabled={pending !== null}
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700 disabled:opacity-60"
                >
                  {pending === "read" ? "Reading…" : "Read message"}
                </button>
                <button
                  onClick={() => doAction("destroy")}
                  disabled={pending !== null}
                  className="inline-flex items-center justify-center rounded-lg border border-pink-500 px-4 py-2 text-sm font-semibold text-pink-500 transition hover:bg-pink-500 hover:text-white disabled:opacity-60"
                >
                  {pending === "destroy" ? "Destroying…" : "Ignore & destroy"}
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Loading message…
              </p>
            </div>
          )}

          {error && <p className="mt-4 text-sm text-pink-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}

