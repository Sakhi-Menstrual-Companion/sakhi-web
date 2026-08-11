"use client"

import * as React from "react"
import { Separator as SeparatorPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/** `tone="light"` is for dark sections, where --border would be invisible. */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  tone = "dark",
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root> & {
  tone?: "dark" | "light"
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        tone === "light" ? "bg-white/12" : "bg-border",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
