import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Sakhi's button is a pill.
 *
 * Two decisions worth keeping straight:
 *
 * 1. Shape. The full pill is the most identifiable thing about an Apple
 *    control, so it is the default here. (design-reference/DESIGN-LANGUAGE.md
 *    specifies a 4px rectangle, taken from Google's system — that is the one
 *    place this redesign deliberately follows Apple over that document.)
 *
 * 2. Size. Default height is 44px, the HIG minimum touch target. It was 40px
 *    with a 13px label, which is under the bar on touch and reads timid next
 *    to the new display type.
 *
 * Hover darkens rather than lifts. A button that jumps toward the cursor is a
 * template flourish; Apple's controls stay put and change tone.
 *
 * `light` and `glass` exist for the dark hero and final band, where the pink
 * fill would sit too hot against near-black and a white or translucent pill
 * reads better.
 */
const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-full",
    "font-semibold tracking-[-0.01em] whitespace-nowrap no-underline",
    "transition-[background-color,border-color,color,opacity,box-shadow]",
    "duration-(--duration-fast) ease-(--ease-out-soft)",
    "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary",
    "disabled:pointer-events-none disabled:opacity-45",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        /* Deep Pink, not Primary. White on Primary is 3.89:1, under the 4.5:1
           that button text needs. Deep Pink carries white at 5.22:1. */
        default: "bg-secondary text-secondary-foreground hover:bg-[#b8005f] active:bg-[#9d0051]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-[#b8005f] active:bg-[#9d0051]",
        /* White pill on a dark section. Hover/active step down the same
           surface ladder the cards use, rather than inventing two more greys. */
        light: "bg-white text-ink hover:bg-muted active:bg-surface-sunken",
        /* Translucent pill on a dark section, sits beside `light` */
        glass:
          "bg-white/[0.13] text-white backdrop-blur-[18px] hover:bg-white/20 active:bg-white/25",
        /* The quiet companion to `default`. One filled button per section, and
           this next to it. */
        outline:
          "border border-border bg-background text-foreground hover:border-foreground/25 hover:bg-muted active:bg-surface-sunken",
        ghost: "text-foreground hover:bg-muted active:bg-surface-sunken",
        /* Links look like links: accent text, underline on hover, no chip. */
        link: "h-auto rounded-none px-0 text-secondary underline-offset-[3px] hover:underline",
        destructive: "bg-destructive text-white hover:brightness-90",
      },
      size: {
        default: "h-11 px-5 text-[15px] [&_svg:not([class*='size-'])]:size-4",
        sm: "h-9 px-4 text-[13px] [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 px-7 text-[16px] [&_svg:not([class*='size-'])]:size-[18px]",
        icon: "size-11 [&_svg:not([class*='size-'])]:size-[18px]",
      },
      /* The pill is the default now. `rect` is kept for anything that has to
         sit flush inside a rectangular container. */
      shape: {
        default: "",
        pill: "rounded-full",
        rect: "rounded-lg",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
      block: false,
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  shape,
  block,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, shape, block, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
