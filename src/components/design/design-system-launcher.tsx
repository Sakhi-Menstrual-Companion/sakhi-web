"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Shapes, X } from "lucide-react";

/**
 * The floating design-system shortcut and the modal it opens.
 *
 * Lives in the root layout, so the catalogue is reachable from any page without
 * navigating away from the page being worked on.
 *
 * The browser is loaded with `next/dynamic` and only mounted once the modal has
 * been opened. That matters: the catalogue pulls in every specimen on the site,
 * and paying for that on every page load to power a button most visitors never
 * press would be indefensible. `ssr: false` because it is never part of the
 * server-rendered page.
 */
const DesignSystemBrowser = dynamic(
  () => import("./design-system-browser").then((m) => m.DesignSystemBrowser),
  {
    ssr: false,
    loading: () => (
      <p className="p-8 text-[13.5px] text-muted-foreground">Loading the catalogue…</p>
    ),
  }
);

export function DesignSystemLauncher() {
  const [open, setOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    // Lock the page behind the dialog so a scroll gesture over the overlay does
    // not move the page underneath it.
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        title="Design system"
        aria-label="Open the design system"
        aria-haspopup="dialog"
        className="fixed right-5 bottom-5 z-90 grid size-12 place-items-center rounded-full bg-ink text-white shadow-[0_10px_30px_rgba(5,4,6,0.28)] transition-transform duration-200 hover:scale-105 sm:right-7 sm:bottom-7"
      >
        <Shapes className="size-5" aria-hidden="true" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Sakhi design system"
          className="fixed inset-0 z-120 flex items-center justify-center p-0 sm:p-6"
        >
          <button
            type="button"
            aria-label="Close the design system"
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-ink/45 backdrop-blur-[2px]"
          />

          <div className="relative flex h-full w-full max-w-350 flex-col overflow-hidden rounded-none border border-border bg-background-shell shadow-[0_30px_80px_rgba(5,4,6,0.35)] sm:h-[92vh] sm:rounded-panel">
            <header className="flex shrink-0 items-center justify-between gap-4 border-b border-border bg-background px-5 py-3.5">
              <div className="min-w-0">
                <p className="text-[14.5px] font-semibold text-foreground">Sakhi design system</p>
                <p className="truncate text-[12.5px] text-muted-foreground">
                  Quote an id, like <code className="font-mono text-secondary">header-01</code>, to
                  ask for a layout.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                <Link
                  href="/design-system"
                  onClick={() => setOpen(false)}
                  title="Open as a full page"
                  aria-label="Open as a full page"
                  className="grid size-9 place-items-center rounded-lg text-muted-foreground no-underline transition-colors hover:bg-muted hover:text-foreground"
                >
                  <ExternalLink className="size-4.5" aria-hidden="true" />
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="size-4.5" aria-hidden="true" />
                </button>
              </div>
            </header>

            <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto px-5 py-6">
              <DesignSystemBrowser scrollRoot={scrollRef} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
