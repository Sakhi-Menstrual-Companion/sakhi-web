"use client";

import { cn } from "@/lib/utils";

/**
 * Aceternity UI's Infinite Moving Cards, reproduced against its documented
 * prop surface (items, direction, speed, pauseOnHover, className) and its
 * real `scroll` keyframe (translate(calc(-50% - 0.75rem)), defined once in
 * globals.css — that -50% is what makes a doubled item list loop seamlessly.
 *
 * The original clones the list into the DOM directly; this renders two
 * copies through React instead, which is the same visual result without
 * reaching past React for a DOM mutation.
 */
export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  /** `dark` is the original chip (for an ink band); `light` sits on a white/blush hero. */
  tone = "dark",
  className,
}: {
  items: { label: string; icon?: React.ReactNode }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  tone?: "dark" | "light";
  className?: string;
}) {
  const duration = speed === "fast" ? "20s" : speed === "slow" ? "60s" : "36s";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <ul
        className={cn(
          // py-1 was tighter than shadow-card's blur radius (34px), so the
          // chip shadow hit this element's own overflow-hidden edge and cut
          // off in a hard horizontal line instead of fading out. The
          // overflow-hidden itself has to stay — it's what hides the second,
          // duplicated copy of the list this component scrolls through —
          // but the box now has enough vertical room for the shadow to
          // fully render before it reaches that edge.
          "animate-scroll flex w-max min-w-full shrink-0 flex-nowrap gap-3 py-8",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={
          {
            "--marquee-duration": duration,
            animationDirection: direction === "right" ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {[...items, ...items].map((item, i) => (
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
    </div>
  );
}
