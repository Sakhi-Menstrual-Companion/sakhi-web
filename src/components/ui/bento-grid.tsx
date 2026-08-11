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
        "grid grid-flow-row-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[16rem]",
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
        "group/bento relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6",
        "transition-[border-color,box-shadow,transform] duration-300 ease-(--ease-out-soft) will-change-transform",
        "hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover",
        className
      )}
    >
      {header && <div className="mb-4 flex-1 overflow-hidden rounded-xl">{header}</div>}
      <div>
        {icon && (
          <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-accent-faint text-secondary transition-colors duration-300 group-hover/bento:bg-secondary group-hover/bento:text-white">
            {icon}
          </div>
        )}
        <div className="text-h4 font-semibold text-foreground">{title}</div>
        <div className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}
