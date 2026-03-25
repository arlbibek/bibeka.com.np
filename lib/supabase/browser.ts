import { createClient } from "@supabase/supabase-js";

function requiredPublicEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

export function supabaseBrowser() {
  const url = requiredPublicEnv("NEXT_PUBLIC_SUPABASE_URL");
  const anonKey = requiredPublicEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");
  return createClient(url, anonKey);
}

