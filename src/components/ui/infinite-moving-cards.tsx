"use client";

import { cn } from "@/lib/utils";

/**
 * Aceternity UI's Infinite Moving Cards, reproduced against its documented
 * prop surface (items, direction, speed, pauseOnHover, className).
 *
 * Loop mechanics, and why they are not Aceternity's:
 * the original renders the item list twice and shifts the track by
 * `-50% - <half the gap>`. That only reads as endless while one copy of the
 * list is wider than the viewport, and it only lands exactly when the gap
 * correction matches the row gap. Both assumptions break on a wide screen:
 * the track stops covering the band and the reset shows as a hard jump with
 * empty space behind it.
 *
 * So the track holds `copies` self-contained groups instead. Each group is
 * one full pass of the list with its own internal gap plus a trailing gap of
 * padding, which makes every group exactly the same width and lets the track
 * carry no gap of its own. Shifting the track by `-100% / copies` is then
 * exactly one group, whatever the items are, so the reset is invisible and
 * the belt never runs out of chips at any width.
 */
export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  /** `dark` is the original chip (for an ink band); `light` sits on a white/blush hero. */
  tone = "dark",
  /**
   * Groups on the belt. The track only has to stay covered while one group has
   * scrolled away, i.e. `viewport <= (copies - 1) * group`, so the safe count
   * depends on how wide a single pass of the list is. Eight clears an
   * ultrawide monitor even for the shortest list we run through here (the four
   * bare publication names on /press), and extra chips cost nothing but DOM.
   */
  copies = 8,
  className,
}: {
  items: { label: string; icon?: React.ReactNode }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  tone?: "dark" | "light";
  copies?: number;
  className?: string;
}) {
  // One cycle is one group passing, so the on-screen speed stays the same
  // whatever `copies` is set to.
  const duration = speed === "fast" ? "20s" : speed === "slow" ? "60s" : "36s";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          // py-1 was tighter than shadow-card's blur radius (34px), so the
          // chip shadow hit this element's own overflow-hidden edge and cut
          // off in a hard horizontal line instead of fading out. The
          // overflow-hidden itself has to stay — it's what hides the groups
          // waiting off to the right — but the box now has enough vertical
          // room for the shadow to fully render before it reaches that edge.
          //
          // No `gap` and no `min-w-full` here on purpose: a gap would make the
          // groups uneven against the -100%/copies shift, and min-w-full would
          // stretch the track past its content on a wide screen and throw that
          // same percentage off.
          "animate-scroll flex w-max flex-nowrap py-8",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={
          {
            "--marquee-duration": duration,
            "--marquee-copies": copies,
            animationDirection: direction === "right" ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {Array.from({ length: copies }, (_, copy) => (
          <ul
            key={copy}
            // Only the first pass is real content; the rest are the belt.
            aria-hidden={copy > 0 || undefined}
            className="flex shrink-0 flex-nowrap gap-3 pr-3"
          >
            {items.map((item, i) => (
              <li
                key={i}
                className={cn(
                  "flex shrink-0 items-center gap-2.5 rounded-full px-5 py-2.5 text-[13.5px] font-medium whitespace-nowrap backdrop-blur-sm",
                  tone === "dark"
                    ? "border border-white/10 bg-white/5 text-white/85"
                    : "border border-border bg-card text-foreground shadow-card"
                )}
              >
                {item.icon}
                {item.label}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
