import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Sakhi's button is a pill, not shadcn's default rounded rectangle.
 * The measurements come from the homepage store buttons that were already
 * shipped and reviewed: 54px tall, fully rounded, 15px/700 at -0.01em.
 *
 * `light` and `glass` exist for the dark hero and final band, where the pink
 * fill would sit too hot against near-black and a white or translucent pill
 * reads better.
 */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-semibold tracking-[-0.01em] whitespace-nowrap no-underline transition-[background-color,border-color,opacity,box-shadow] duration-200 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* Deep Pink, not Primary. White on Primary is 3.89:1, under the 4.5:1
           that button text needs. Deep Pink carries white at 5.22:1. */
        default: "bg-secondary text-secondary-foreground hover:brightness-90",
        secondary: "bg-secondary text-secondary-foreground hover:brightness-90",
        /* White pill on a dark section. Hover/active step down the same
           surface ladder the cards use, rather than inventing two more greys. */
        light: "bg-white text-ink hover:bg-muted active:bg-surface-sunken",
        /* Translucent pill on a dark section, sits beside `light` */
        glass:
          "bg-white/[0.13] text-white backdrop-blur-[18px] hover:bg-white/20 active:bg-white/25",
        outline:
          "border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-secondary underline-offset-4 hover:underline",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-4 text-[13px] [&_svg:not([class*='size-'])]:size-4",
        sm: "h-9 px-3 text-[12px] [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 px-6 text-[14px] [&_svg:not([class*='size-'])]:size-4",
        icon: "size-10 [&_svg:not([class*='size-'])]:size-4",
      },
      /* The site used full pills before. Kept so anything that still wants
         one can ask, but the default is now the quieter rounded rectangle. */
      shape: {
        default: "",
        pill: "rounded-full",
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
