"use server";

import { redirect } from "next/navigation";
import { supabaseAdmin } from "../supabase/admin";
import { createMessageSchema, readerActionSchema } from "./schemas";

type MessageStatus = "active" | "seen" | "destroyed";

type CreateState =
  | { ok: true; url: string; slug: string }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

function appUrl() {
  return (process.env.APP_URL || "http://localhost:3000").replace(/\/+$/, "");
}

function randomSlug(len = 7) {
  // base36 lowercase, trimmed to len
  return Array.from({ length: len }, () =>
    Math.floor(Math.random() * 36).toString(36),
  ).join("");
}

function addDuration(now: Date, expiresIn: string) {
  const msMap: Record<string, number> = {
    "1h": 60 * 60 * 1000,
    "2h": 2 * 60 * 60 * 1000,
    "6h": 6 * 60 * 60 * 1000,
    "12h": 12 * 60 * 60 * 1000,
    "1d": 24 * 60 * 60 * 1000,
    "2d": 2 * 24 * 60 * 60 * 1000,
    "7d": 7 * 24 * 60 * 60 * 1000,
  };
  const ms = msMap[expiresIn];
  if (!ms) return null;
  return new Date(now.getTime() + ms).toISOString();
}

export async function createEchoMessage(
  _prevState: CreateState,
  formData: FormData,
): Promise<CreateState> {
  const parsed = createMessageSchema.safeParse({
    custom_slug: formData.get("custom_slug"),
    content: formData.get("content"),
    caution_text: formData.get("caution_text"),
    is_blurred: formData.get("is_blurred") === "on",
    expiration_mode: formData.get("expiration_mode"),
    max_views: formData.get("max_views"),
    expires_in: formData.get("expires_in"),
    author_wants_status: formData.get("author_wants_status") === "on",
  });

  if (!parsed.success) {
    return {
      ok: false,
      error: "Please fix the form errors.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const v = parsed.data;
  const now = new Date();
  const expires_at =
    v.expiration_mode === "time" && v.expires_in
      ? addDuration(now, v.expires_in)
      : null;

  const max_views = v.expiration_mode === "views" ? (v.max_views ?? 1) : 1;

  const supabase = supabaseAdmin();

  const desired = v.custom_slug?.trim();
  for (let attempt = 0; attempt < 8; attempt++) {
    const slug = desired && attempt === 0 ? desired : randomSlug(7);
    const { error } = await supabase.from("messages").insert({
      slug,
      content: v.content,
      caution_text: v.is_blurred ? v.caution_text?.trim() : null,
      is_blurred: v.is_blurred,
      expires_at,
      max_views,
      view_count: 0,
      author_wants_status: v.author_wants_status,
      status: "active" satisfies MessageStatus,
    });

    if (!error) {
      const url = `${appUrl()}/echo/${slug}`;
      return { ok: true, url, slug };
    }

    // Unique violation on slug -> retry
    if ((error as any)?.code === "23505") {
      if (desired && attempt === 0) {
        return {
          ok: false,
          error: "That custom link is already taken.",
          fieldErrors: { custom_slug: ["That custom link is already taken."] },
        };
      }
      continue;
    }
    return { ok: false, error: error.message };
  }

  return { ok: false, error: "Failed to generate a unique link. Try again." };
}

export type EchoMessagePublic =
  | {
      ok: true;
      slug: string;
      is_blurred: boolean;
      caution_text: string | null;
      status: MessageStatus;
      expired: boolean;
      view_count: number;
      max_views: number;
      content: string | null; // null unless revealed
    }
  | { ok: false; error: string };

export async function fetchEchoMessagePublic(slug: string): Promise<EchoMessagePublic> {
  const supabase = supabaseAdmin();

  const { data, error } = await supabase
    .from("messages")
    .select(
      "slug, content, caution_text, is_blurred, expires_at, max_views, view_count, status",
    )
    .eq("slug", slug)
    .maybeSingle();

  if (error) return { ok: false, error: error.message };
  if (!data) return { ok: false, error: "Not found" };

  const expired = data.expires_at ? new Date(data.expires_at) <= new Date() : false;
  const status = data.status as MessageStatus;

  const shouldHide =
    expired || status === "destroyed" || status === "seen" || data.view_count >= data.max_views;

  return {
    ok: true,
    slug: data.slug,
    is_blurred: data.is_blurred,
    caution_text: data.caution_text,
    status,
    expired,
    view_count: data.view_count,
    max_views: data.max_views,
    content: shouldHide ? null : null, // revealed via action only
  };
}

export async function readerAct(formData: FormData) {
  const parsed = readerActionSchema.safeParse({
    slug: formData.get("slug"),
    intent: formData.get("intent"),
  });
  if (!parsed.success) {
    return { ok: false as const, error: "Invalid request." };
  }

  const { slug, intent } = parsed.data;
  const supabase = supabaseAdmin();

  const { data, error } = await supabase
    .from("messages")
    .select("id, content, expires_at, max_views, view_count, status")
    .eq("slug", slug)
    .maybeSingle();

  if (error) return { ok: false as const, error: error.message };
  if (!data) return { ok: false as const, error: "Not found" };

  const expired = data.expires_at ? new Date(data.expires_at) <= new Date() : false;
  if (expired || data.status === "destroyed" || data.status === "seen") {
    return { ok: false as const, error: "Message is no longer available." };
  }

  if (intent === "destroy") {
    const { error: destroyError } = await supabase
      .from("messages")
      .update({
        status: "destroyed" satisfies MessageStatus,
        content: "",
        caution_text: null,
      })
      .eq("id", data.id);

    if (destroyError) return { ok: false as const, error: destroyError.message };
    redirect(`/echo/${slug}?d=1`);
  }

  // intent === "read"
  const nextCount = (data.view_count ?? 0) + 1;
  const nextStatus: MessageStatus =
    nextCount >= (data.max_views ?? 1) ? "seen" : "active";

  const { error: updateError } = await supabase
    .from("messages")
    .update({
      view_count: nextCount,
      status: nextStatus,
    })
    .eq("id", data.id);

  if (updateError) return { ok: false as const, error: updateError.message };

  // If this read consumes the last view, "burn" the content.
  if (nextStatus === "seen") {
    await supabase
      .from("messages")
      .update({ content: "" })
      .eq("id", data.id);
  }

  return { ok: true as const, content: data.content };
}

