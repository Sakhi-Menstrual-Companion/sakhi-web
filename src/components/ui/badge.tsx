import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * The small pill used for section labels, metric chips and goal tags.
 *
 * `soft` is the brand one: blush fill with Deep Pink type. Deep Pink, not
 * Primary Pink, because Primary only reaches 3.22:1 on a blush field while
 * Deep Pink reaches 4.33:1.
 */
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 rounded-full whitespace-nowrap transition-colors [&>svg]:pointer-events-none [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground",
        soft: "bg-accent-faint text-secondary font-bold tracking-[0.02em]",
        muted: "bg-chip text-chip-foreground font-semibold tracking-[-0.006em]",
        outline: "border border-border text-foreground",
        /* On a dark section */
        glass: "bg-white/[0.13] text-white/90 font-semibold tracking-[-0.006em]",
      },
      size: {
        default: "min-h-[34px] px-3.5 text-[12.5px]",
        lg: "min-h-[38px] gap-2 px-4 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "soft",
      size: "default",
    },
  }
)

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant ?? "soft"}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
