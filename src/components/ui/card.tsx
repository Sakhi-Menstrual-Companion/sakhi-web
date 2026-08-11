import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * One card for the whole site.
 *
 * This replaces the two hand-written families that used to live in
 * globals.css, `.bento-card` and `.condition-card`, which had drifted apart
 * (different fills, radii, hover behaviour and heading sizes) despite being
 * the same object.
 *
 * The fills follow the measured surface ladder. Do not flatten it: a card sits
 * on white, a media panel sits on the card, and white UI sits inside the media
 * panel. When every level was the same blush, white elements sat at 1.10:1 and
 * disappeared.
 *
 *   default   white card, warm shadow          (bento)
 *   muted     flat blush card, darkens on hover (condition groups)
 *   accent    brand pink fill, white type       (the anchor card in a grid)
 *   inverted  near-black fill, white type       (the CTA card in a grid)
 *
 * Variant also drives the colour of every child slot, so `CardTitle` and
 * `CardDescription` never need to know which card they are sitting in.
 */
const cardVariants = cva(
  "flex min-w-0 flex-col rounded-xl no-underline",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground shadow-card",
        /* Hairline border, no elevation. The quieter card for dense grids
           sitting on an off-white band, where a shadow per card is noise. */
        flat: "border border-border bg-card text-card-foreground",
        muted: "bg-muted text-card-foreground",
        /* Deep Pink, not Primary Pink. White type on Primary reaches only
           3.89:1, and the dimmed description 2.77:1, so the card failed AA
           twice over. Deep Pink carries solid white at 5.22:1. Hierarchy here
           comes from size and weight rather than from dimming the copy. */
        accent: [
          "bg-secondary text-secondary-foreground",
          "[&_[data-slot=card-title]]:text-secondary-foreground",
          "[&_[data-slot=card-description]]:text-secondary-foreground",
          "[&_[data-slot=card-list]_li]:text-secondary-foreground",
          "[&_[data-slot=card-icon]]:bg-white/20 [&_[data-slot=card-icon]]:text-secondary-foreground",
        ],
        inverted: [
          "bg-ink-raised text-ink-foreground",
          "[&_[data-slot=card-title]]:text-ink-foreground",
          "[&_[data-slot=card-description]]:text-white/62",
          "[&_[data-slot=card-list]_li]:text-ink-foreground",
          "[&_[data-slot=card-icon]]:bg-white/10 [&_[data-slot=card-icon]]:text-primary-soft",
        ],
      },
      inset: {
        default: "p-6",
        lg: "p-8",
        media: "p-3.5",
        none: "p-0",
      },
      interactive: {
        true: "transition-[background-color,box-shadow] duration-[260ms] ease-out",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        interactive: true,
        class: "hover:shadow-card-hover",
      },
      {
        variant: "flat",
        interactive: true,
        class: "duration-300 hover:border-primary/40",
      },
      {
        variant: "muted",
        interactive: true,
        class: "hover:bg-surface-sunken",
      },
      {
        variant: "inverted",
        interactive: true,
        class: "hover:bg-ink-raised-hover",
      },
    ],
    defaultVariants: {
      variant: "default",
      inset: "default",
      interactive: false,
    },
  }
)

function Card({
  className,
  variant,
  inset,
  interactive,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="card"
      data-variant={variant ?? "default"}
      className={cn(cardVariants({ variant, inset, interactive }), className)}
      {...props}
    />
  )
}

/**
 * The tinted panel a card's visual sits in, one rung below the card itself.
 * `flush` is for a real screenshot that should bleed to the panel edge, where
 * padding would just frame the image twice.
 */
const cardMediaVariants = cva(
  "flex flex-col rounded-2xl bg-surface-sunken",
  {
    variants: {
      flush: {
        false: "justify-center gap-3 p-[26px]",
        true: "items-center overflow-hidden p-0",
      },
      height: {
        default: "min-h-[196px]",
        none: "",
      },
    },
    defaultVariants: { flush: false, height: "default" },
  }
)

function CardMedia({
  className,
  flush,
  height,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardMediaVariants>) {
  return (
    <div
      data-slot="card-media"
      /* Responsive rules key off this to leave screenshot panels unpadded. */
      data-flush={flush ? "" : undefined}
      className={cn(cardMediaVariants({ flush, height }), className)}
      {...props}
    />
  )
}

/** The copy block under a media panel. Optically centred against the 14px inset. */
function CardBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-body"
      className={cn("px-4 pt-5 pb-3.5", className)}
      {...props}
    />
  )
}

/** The 40px rounded chip that leads a condition card. */
function CardIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="card-icon"
      aria-hidden="true"
      className={cn(
        "mb-[18px] grid size-10 place-items-center rounded-[13px] bg-accent-soft text-primary",
        className
      )}
      {...props}
    />
  )
}

const cardTitleVariants = cva(
  "font-sans font-bold tracking-[-0.021em] text-foreground",
  {
    variants: {
      size: {
        default: "mb-2 text-[22px] leading-[1.22]",
        sm: "mb-[7px] text-[20px] leading-[1.2]",
      },
    },
    defaultVariants: { size: "default" },
  }
)

function CardTitle({
  className,
  size,
  ...props
}: React.ComponentProps<"h3"> & VariantProps<typeof cardTitleVariants>) {
  return (
    <h3
      data-slot="card-title"
      className={cn(cardTitleVariants({ size }), className)}
      {...props}
    />
  )
}

const cardDescriptionVariants = cva(
  "tracking-[-0.008em] text-muted-foreground",
  {
    variants: {
      size: {
        default: "text-[15.5px] leading-[1.5]",
        sm: "text-[14.5px] leading-[1.5]",
      },
    },
    defaultVariants: { size: "default" },
  }
)

function CardDescription({
  className,
  size,
  ...props
}: React.ComponentProps<"p"> & VariantProps<typeof cardDescriptionVariants>) {
  return (
    <p
      data-slot="card-description"
      className={cn(cardDescriptionVariants({ size }), className)}
      {...props}
    />
  )
}

/** Plain list of named items, e.g. the conditions inside a group. */
function CardList({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="card-list"
      className={cn(
        "mt-5 grid list-none gap-[9px] p-0",
        "[&>li]:text-[14.5px] [&>li]:leading-[1.3] [&>li]:font-semibold [&>li]:tracking-[-0.01em] [&>li]:text-foreground",
        className
      )}
      {...props}
    />
  )
}

/** Trailing action row, pinned to the bottom of a card of any height. */
function CardAction({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="card-action"
      className={cn(
        "mt-auto inline-flex items-center gap-[7px] pt-6 text-[14.5px] font-semibold tracking-[-0.008em] text-primary-soft",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardMedia,
  CardBody,
  CardIcon,
  CardTitle,
  CardDescription,
  CardList,
  CardAction,
  cardVariants,
}
