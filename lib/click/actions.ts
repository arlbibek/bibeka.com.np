"use server";

import { supabaseAdmin } from "../supabase/admin";

export async function getGlobalClickCount(): Promise<number> {
  const supabase = supabaseAdmin();
  const { data, error } = await supabase
    .from("click_counters")
    .select("count")
    .eq("name", "global")
    .maybeSingle();

  // During local dev/build before migrations are applied, Supabase can error:
  // "Could not find the table ... in the schema cache"
  if (error) return 0;
  return Number(data?.count ?? 0);
}

export async function incrementGlobalClickCount(): Promise<number> {
  const supabase = supabaseAdmin();
  const { data, error } = await supabase.rpc("increment_click_counter", {
    counter_name: "global",
  });

  if (error) {
    // Bubble up details so UI can show the real cause.
    throw new Error(`Supabase RPC error: ${error.message}`);
  }
  return Number(data ?? 0);
}

