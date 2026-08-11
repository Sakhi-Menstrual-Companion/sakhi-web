import { cn } from "@/lib/utils";

/**
 * Aceternity UI's BentoGrid / BentoGridItem, reproduced against its
 * documented prop surface (className; items with header/icon/title/
 * description). `grid-flow-row-dense` is what lets a mix of 1-span and
 * 2-span tiles pack without manual row math per item.
 */
export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        // 8rem base track: half the original 16rem row. row-span-2 reproduces
        // that original row exactly, row-span-4 reproduces the old row-span-2
        // tile, and row-span-3 is what gets a genuine "1.5 rows" (24rem) out
        // of a unit system that otherwise only has whole rows to work with.
        "grid grid-flow-row-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[8rem]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6",
        // With a header, the header (flex-1) already claims the leftover
        // height, so justify-between just pins the text block under it. A
        // header-less tile has only the text block as a flex child, and
        // justify-between degenerates to flex-start for a single child —
        // that pushed all the leftover height below the text instead of
        // above it once these tiles grew taller than their content.
        header ? "justify-between" : "justify-end",
        className
      )}
    >
      {header && <div className="mb-4 flex-1 overflow-hidden rounded-xl">{header}</div>}
      <div>
        {icon && (
          <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-accent-faint text-secondary">
            {icon}
          </div>
        )}
        <div className="text-h4 font-semibold text-foreground">{title}</div>
        <div className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}
