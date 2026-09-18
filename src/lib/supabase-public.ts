import { createClient } from "@supabase/supabase-js";

/*
 * The one Supabase client the public website ever needs, using the anon/publishable key.
 *
 * That key is designed to be public: it can only do what Row Level Security on the linked
 * project allows an anonymous visitor to do, which today is exactly two things --
 * `founding_members_stats` is readable, and `join_founding_waitlist` is callable. It cannot
 * read a phone number or an email back; see 01-iOS/supabase/migrations/
 * 066_founding_members_waitlist.sql for why.
 *
 * There is no server-only key anywhere in this file, and there must never be one added here:
 * this module ships to the browser.
 */
const supabaseUrl = "https://vzfkhvdbjvaoponfwxyu.supabase.co";
const supabaseAnonKey = "sb_publishable_9mkKIsLl0zNk-NYyVmMrRw_kyu_ARAB";

export const supabasePublic = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false },
});
