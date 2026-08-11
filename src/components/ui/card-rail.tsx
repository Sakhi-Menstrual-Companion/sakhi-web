"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * A horizontally scrolling row of equal-height cards with paging arrows.
 *
 * The row is a real scroll container, not a transform-based carousel: trackpad,
 * touch swipe and keyboard all work with no JS at all, and the arrows are an
 * enhancement on top rather than the only way through. That also means the
 * cards stay in normal document order for screen readers.
 *
 * Children are passed in from the server component that owns the data, so the
 * card markup itself never has to become client-side.
 */
export function CardRail({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  /** Names the scrollable region for assistive tech, e.g. "Condition groups". */
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const sync = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    // 1px of slack: scrollLeft is fractional at non-integer zoom levels, so an
    // exact comparison would leave an arrow enabled at a hard end.
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    sync();
    // Width changes (viewport resize, font swap) change what "at the end"
    // means, and neither fires a scroll event.
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, [sync]);

  const page = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    // Step by one card plus its gap, read off the DOM rather than hard-coded,
    // so the card width stays a styling decision in one place.
    const first = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
    const step = first ? first.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div
        ref={ref}
        onScroll={sync}
        role="group"
        aria-label={label}
        tabIndex={0}
        className={cn(
          "flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto py-1",
          // --rail-gutter is the distance from the centred container's edge to
          // the viewport's. Negative margins of that size pull the rail out to
          // both screen edges so cards run off-screen on the way in and out,
          // and matching padding puts the first and last card back in line with
          // the heading above. scroll-px keeps snapping aligned to the padded
          // edge rather than the bleed, so resting at scroll 0 is still a valid
          // snap position and the first card never jerks out of alignment.
          //
          // 560px is half of Container's max-width (1120px) and the rem values
          // are the section's own px-6 / sm:px-8. Percentages cannot be used
          // here: they would resolve against the scrollport for scroll-padding
          // but the containing block for margin, giving two different numbers.
          "[--rail-gutter:max(1.5rem,calc(50vw-560px))] sm:[--rail-gutter:max(2rem,calc(50vw-560px))]",
          "-mx-(--rail-gutter) px-(--rail-gutter) scroll-px-(--rail-gutter)",
          // The scrollbar is redundant next to the arrows and adds a grey band
          // under the cards on Windows.
          "[-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
        )}
      >
        {children}
      </div>

      <div className="mt-4 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => page(-1)}
          disabled={atStart}
          aria-label="Previous"
          className="grid size-10 place-items-center rounded-full bg-muted text-foreground transition-colors duration-200 hover:bg-surface-sunken disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => page(1)}
          disabled={atEnd}
          aria-label="Next"
          className="grid size-10 place-items-center rounded-full bg-muted text-foreground transition-colors duration-200 hover:bg-surface-sunken disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
