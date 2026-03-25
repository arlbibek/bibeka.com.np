"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { createEchoMessage } from "../../../lib/echo/actions";

const initialState = { ok: false as const, error: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700 disabled:opacity-60"
    >
      {pending ? "Creating…" : "Create link"}
    </button>
  );
}

export default function EchoCreateClient() {
  const [state, action] = useActionState(createEchoMessage, initialState);
  const [customSlug, setCustomSlug] = useState("");
  const [content, setContent] = useState("");
  const [cautionText, setCautionText] = useState("");

  return (
    <div className="rounded-xl p-6 drop-shadow-xl bg-white/90 backdrop-blur transition duration-500 dark:bg-gradient-to-r from-slate-800/80 to-slate-900/80 hover:to-slate-800/80">
      <form action={action} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">
            Custom link (optional)
          </label>
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
              /echo/
            </span>
            <input
              name="custom_slug"
              className="w-full rounded-lg p-3 bg-slate-100 dark:bg-slate-700/40 dark:text-gray-100 focus:outline-none font-mono"
              placeholder="e.g. iw83n9f or my_link-1"
              inputMode="text"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              value={customSlug}
              onChange={(e) => setCustomSlug(e.target.value)}
            />
          </div>
          {state.ok === false && (state as any).fieldErrors?.custom_slug?.[0] && (
            <p className="mt-1 text-sm text-pink-500">
              {(state as any).fieldErrors.custom_slug[0]}
            </p>
          )}
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            6–16 chars, lowercase letters/numbers, - or _.
          </p>
        </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                name="content"
                rows={6}
                className="w-full rounded-lg p-3 bg-slate-100 dark:bg-slate-700/40 dark:text-gray-100 focus:outline-none"
                placeholder="Write your message…"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              {state.ok === false && (state as any).fieldErrors?.content?.[0] && (
                <p className="mt-1 text-sm text-pink-500">
                  {(state as any).fieldErrors.content[0]}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <label className="inline-flex items-center gap-2">
                <input name="is_blurred" type="checkbox" className="h-4 w-4" />
                <span className="text-sm font-semibold">Blur with caution</span>
              </label>

              <label className="inline-flex items-center gap-2">
                <input
                  name="author_wants_status"
                  type="checkbox"
                  className="h-4 w-4"
                />
                <span className="text-sm font-semibold">Request read receipt</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Caution text (shown before reveal)
              </label>
              <input
                name="caution_text"
                className="w-full rounded-lg p-3 bg-slate-100 dark:bg-slate-700/40 dark:text-gray-100 focus:outline-none"
                placeholder="e.g. Sensitive message — only read if you're alone."
                value={cautionText}
                onChange={(e) => setCautionText(e.target.value)}
              />
              {state.ok === false &&
                (state as any).fieldErrors?.caution_text?.[0] && (
                  <p className="mt-1 text-sm text-pink-500">
                    {(state as any).fieldErrors.caution_text[0]}
                  </p>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-1">
                <label className="block text-sm font-semibold mb-1">
                  Expiration mode
                </label>
                <select
                  name="expiration_mode"
                  className="w-full rounded-lg p-3 bg-slate-100 dark:bg-slate-700/40 dark:text-gray-100 focus:outline-none"
                  defaultValue="views"
                >
                  <option value="views">Views</option>
                  <option value="time">Time</option>
                </select>
              </div>

              <div className="sm:col-span-1">
                <label className="block text-sm font-semibold mb-1">Max views</label>
                <select
                  name="max_views"
                  className="w-full rounded-lg p-3 bg-slate-100 dark:bg-slate-700/40 dark:text-gray-100 focus:outline-none"
                  defaultValue="1"
                >
                  <option value="1">1 view</option>
                  <option value="2">2 views</option>
                  <option value="3">3 views</option>
                  <option value="5">5 views</option>
                  <option value="10">10 views</option>
                </select>
                {state.ok === false && (state as any).fieldErrors?.max_views?.[0] && (
                  <p className="mt-1 text-sm text-pink-500">
                    {(state as any).fieldErrors.max_views[0]}
                  </p>
                )}
              </div>

              <div className="sm:col-span-1">
                <label className="block text-sm font-semibold mb-1">Expires in</label>
                <select
                  name="expires_in"
                  className="w-full rounded-lg p-3 bg-slate-100 dark:bg-slate-700/40 dark:text-gray-100 focus:outline-none"
                  defaultValue="1h"
                >
                  <option value="1h">1 hour</option>
                  <option value="2h">2 hours</option>
                  <option value="6h">6 hours</option>
                  <option value="12h">12 hours</option>
                  <option value="1d">1 day</option>
                  <option value="2d">2 days</option>
                  <option value="7d">7 days</option>
                </select>
                {state.ok === false &&
                  (state as any).fieldErrors?.expires_in?.[0] && (
                    <p className="mt-1 text-sm text-pink-500">
                      {(state as any).fieldErrors.expires_in[0]}
                    </p>
                  )}
              </div>
            </div>

            {state.ok === false && state.error && (
              <p className="text-sm text-pink-500">{state.error}</p>
            )}

            <SubmitButton />
      </form>

      {(state as any).ok === true && (
        <div className="mt-6 rounded-lg bg-slate-100 dark:bg-slate-700/40 p-4">
          <p className="text-sm font-semibold">Your unique link</p>
          <a
            className="mt-1 block font-mono text-sm text-indigo-600 dark:text-indigo-400 hover:underline break-all"
            href={(state as any).url}
          >
            {(state as any).url}
          </a>
        </div>
      )}
    </div>
  );
}

