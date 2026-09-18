"use client";

import { supabasePublic } from "@/lib/supabase-public";

/**
 * "First 500 members, everything free" (Karan, 2026-09-18).
 *
 * The number itself, so the pricing copy and the progress bar never disagree about what
 * they are counting toward.
 */
export const FOUNDING_CAPACITY = 500;

/** The current count, read once. Used for the first paint before realtime attaches. */
export async function fetchFoundingCount(): Promise<number> {
  const { data, error } = await supabasePublic
    .from("founding_members_stats")
    .select("count")
    .eq("id", 1)
    .single();
  if (error || !data) return 0;
  return data.count as number;
}

/**
 * Live updates after the first paint. Postgres Changes on the one public row, not the
 * broadcast-from-database pattern the app uses for a partner's private walk: that exists to
 * get around RLS blocking a different user's row, and every visitor here reads the same one.
 *
 * Returns an unsubscribe function.
 */
export function subscribeFoundingCount(onChange: (count: number) => void): () => void {
  const channel = supabasePublic
    .channel("founding-count")
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "founding_members_stats", filter: "id=eq.1" },
      (payload) => {
        const next = (payload.new as { count?: number } | null)?.count;
        if (typeof next === "number") onChange(next);
      }
    )
    .subscribe();

  return () => {
    supabasePublic.removeChannel(channel);
  };
}

export type JoinWaitlistResult =
  | { ok: true; count: number }
  | { ok: false; reason: "invalid" | "unknown" };

/** Joins the waitlist. Deduped server-side, so calling this twice with the same contact is safe. */
export async function joinFoundingWaitlist(contact: string): Promise<JoinWaitlistResult> {
  const trimmed = contact.trim();
  if (trimmed.length < 5) return { ok: false, reason: "invalid" };

  const { data, error } = await supabasePublic.rpc("join_founding_waitlist", {
    p_contact: trimmed,
  });

  if (error) {
    return { ok: false, reason: error.message?.includes("INVALID_CONTACT") ? "invalid" : "unknown" };
  }
  return { ok: true, count: data as number };
}
