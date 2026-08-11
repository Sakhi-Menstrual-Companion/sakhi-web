import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Stand-in for a real screenshot, to be dropped in later.
 *
 * One component for every empty image well on the site, so they all look the
 * same and they all get replaced the same way. Size it with an aspect utility
 * (`aspect-4/3`, `aspect-video`) rather than a fixed height, so swapping in a
 * real asset does not shift the layout around it.
 *
 * `label` names what belongs in the slot. Worth setting on a design-system
 * specimen, where "Summary screen" tells you far more than "Image placeholder".
 */
export function ImagePlaceholder({
  className,
  label = "Image placeholder",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/40 px-3 text-center",
        className
      )}
    >
      <ImageIcon className="size-5 text-muted-foreground/60" aria-hidden="true" />
      <span className="text-[11.5px] leading-tight text-muted-foreground/70">{label}</span>
    </div>
  );
}
