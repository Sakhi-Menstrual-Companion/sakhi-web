"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * Aceternity UI's HoverBorderGradient, reproduced against its documented
 * prop surface (children, containerClassName, className, as, duration,
 * clockwise). A soft radial highlight rotates around the border on a timer;
 * hovering swaps it for a full conic sweep, then hands back to the rotation
 * on mouse-leave.
 */
const DIRECTIONS = ["TOP", "LEFT", "BOTTOM", "RIGHT"] as const;
type Direction = (typeof DIRECTIONS)[number];

const MOVING_MAP: Record<Direction, string> = {
  TOP: "radial-gradient(20.7% 50% at 50% 0%, var(--primary) 0%, rgba(255,255,255,0) 100%)",
  LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, var(--primary) 0%, rgba(255,255,255,0) 100%)",
  BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, var(--secondary) 0%, rgba(255,255,255,0) 100%)",
  RIGHT: "radial-gradient(16.2% 41.199999999999996% at 100% 50%, var(--secondary) 0%, rgba(255,255,255,0) 100%)",
};

const HIGHLIGHT =
  "radial-gradient(75% 181% at 50% 50%, var(--primary) 0%, var(--secondary) 50%, rgba(255,255,255,0) 100%)";

export function HoverBorderGradient<C extends React.ElementType = "button">({
  as,
  children,
  containerClassName,
  className,
  duration = 1200,
  clockwise = true,
  animate = true,
  ...props
}: {
  as?: C;
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  /** Set false to keep the border static (no ambient rotation) until hovered. */
  animate?: boolean;
} & Omit<React.ComponentPropsWithoutRef<C>, "as" | "className" | "children">) {
  const Tag = (as || "button") as React.ElementType;
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const next = (current: Direction): Direction => {
    const i = DIRECTIONS.indexOf(current);
    return clockwise
      ? DIRECTIONS[(i - 1 + DIRECTIONS.length) % DIRECTIONS.length]
      : DIRECTIONS[(i + 1) % DIRECTIONS.length];
  };

  useEffect(() => {
    if (!animate) return;
    intervalRef.current = setInterval(() => setDirection((d) => next(d)), duration);
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, clockwise, animate]);

  return (
    // The border thickness is the container's own padding (p-[1.5px]): the
    // gradient layer is absolute and fills the whole box, the content span is
    // a normal flex child sized to its own content, so the gradient only
    // shows through the 1.5px ring the padding leaves around it. No second
    // masking layer needed — one padding value is one source of truth for
    // the border width instead of two that can drift out of sync.
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1.5px] transition-transform duration-300 hover:-translate-y-0.5",
        containerClassName
      )}
      {...props}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        initial={{ background: MOVING_MAP.TOP }}
        animate={{ background: hovered ? HIGHLIGHT : MOVING_MAP[direction] }}
        transition={{ ease: "linear", duration: hovered ? 0.4 : 1.1 }}
      />
      <span
        className={cn(
          "relative z-10 flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white",
          className
        )}
      >
        {children}
      </span>
    </Tag>
  );
}
