import { cn } from "@/lib/utils";

/**
 * The jump-link row under a merged page's hero.
 *
 * Three pages used to be three separate URLs; now each is one long page with
 * several former-pages'-worth of content stacked in it. Without this, getting
 * to the fourth section means scrolling past three. Plain anchor links, not a
 * client-side scrollspy: the content below is what carries the page, this is
 * just a table of contents for it.
 */
export function SectionNav({
  items,
  align = "center",
}: {
  items: { href: string; label: string }[];
  align?: "center" | "left";
}) {
  return (
    <nav
      aria-label="Sections on this page"
      className={cn(
        "mt-10 flex flex-wrap gap-2",
        align === "left" ? "justify-start" : "justify-center"
      )}
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-full border border-border bg-card px-4 py-2 text-[13px] font-medium text-foreground no-underline transition-colors duration-200 hover:border-secondary/40 hover:text-secondary"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
