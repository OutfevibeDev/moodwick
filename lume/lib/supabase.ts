import { createClient } from "@supabase/supabase-js";

// Public, read-only client (anon key + RLS). Safe in server components.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
