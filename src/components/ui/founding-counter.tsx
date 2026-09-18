"use client";

import { useEffect, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  FOUNDING_CAPACITY,
  fetchFoundingCount,
  joinFoundingWaitlist,
  subscribeFoundingCount,
} from "@/lib/founding";

type Status = "idle" | "sending" | "joined" | "invalid" | "failed";

/**
 * The live count of founding members, and the way to join them.
 *
 * The number is the real row in `founding_members_stats`, read on load and then pushed by
 * Postgres Changes. Nothing here is a placeholder or an estimate: until the first read
 * lands, no number is drawn at all, and if the read fails the block simply asks her to join
 * without a count. At zero it says "Be one of the first" instead of "0 of 500", which is
 * true and does not read as an empty room.
 */
export function FoundingCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    let alive = true;
    fetchFoundingCount()
      .then((n) => alive && setCount(n))
      .catch(() => {});
    const unsubscribe = subscribeFoundingCount((n) => alive && setCount(n));
    return () => {
      alive = false;
      unsubscribe();
    };
  }, []);

  const full = count !== null && count >= FOUNDING_CAPACITY;
  const shown = count === null ? 0 : Math.min(count, FOUNDING_CAPACITY);
  const percent = Math.round((shown / FOUNDING_CAPACITY) * 100);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const result = await joinFoundingWaitlist(contact);
    if (result.ok) {
      setCount(result.count);
      setStatus("joined");
      setContact("");
    } else {
      setStatus(result.reason === "invalid" ? "invalid" : "failed");
    }
  }

  return (
    <div className="mx-auto mt-12 max-w-[38rem] rounded-2xl bg-card px-6 py-8 text-center shadow-[0_1px_3px_rgba(0,0,0,0.06)] sm:px-10">
      <span className="eyebrow">Founding members</span>
      <h3 className="text-h4 mt-3 text-foreground">The first 500 families get everything free</h3>

      <div aria-live="polite" className="mt-5 text-[15px] text-foreground">
        {full ? (
          <p>All {FOUNDING_CAPACITY} founding spots are taken. Thank you.</p>
        ) : count === null || count === 0 ? (
          <p>Be one of the first {FOUNDING_CAPACITY}.</p>
        ) : (
          <p>
            <span className="font-semibold">{count}</span> of {FOUNDING_CAPACITY} founding spots claimed
          </p>
        )}
      </div>

      <div
        role="progressbar"
        aria-label="Founding spots claimed"
        aria-valuemin={0}
        aria-valuemax={FOUNDING_CAPACITY}
        aria-valuenow={shown}
        className="mx-auto mt-4 h-2 w-full max-w-[28rem] overflow-hidden rounded-full bg-muted"
      >
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      {status === "joined" ? (
        <p className="mt-6 text-[14px] text-foreground">
          You are on the list. We will write to you when Sakhi is ready to download.
        </p>
      ) : full ? null : (
        <form onSubmit={onSubmit} className="mx-auto mt-6 flex max-w-[28rem] flex-col gap-3 sm:flex-row">
          <label htmlFor="founding-contact" className="sr-only">
            Your email or phone number
          </label>
          <input
            id="founding-contact"
            type="text"
            inputMode="email"
            autoComplete="email"
            placeholder="Email or phone number"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
              if (status === "invalid" || status === "failed") setStatus("idle");
            }}
            className="h-11 w-full rounded-full border border-border bg-background px-5 text-[15px] text-foreground outline-none placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          />
          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Joining" : "Join the list"}
          </Button>
        </form>
      )}

      {status === "invalid" && (
        <p role="alert" className="mt-3 text-[13px] text-foreground">
          Would you check that email or phone number once more?
        </p>
      )}
      {status === "failed" && (
        <p role="alert" className="mt-3 text-[13px] text-foreground">
          That did not go through. Would you try again in a moment?
        </p>
      )}

      <p className="mt-5 text-[12px] text-muted-foreground">
        We use it only to tell you when Sakhi is ready. It is never shown to anyone, and never sold.
      </p>
    </div>
  );
}
