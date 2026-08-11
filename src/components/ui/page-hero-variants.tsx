import type { LucideIcon } from "lucide-react";
import { Lock } from "lucide-react";

import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

/**
 * Saved page-header treatments.
 *
 * Before the site standardised on one header, each page carried its own hero
 * variant. Those treatments were good, they were just inconsistent across the
 * nav, so `PageHero` now owns the frame (backdrop, eyebrow, headline, lead) and
 * every variant's distinctive part lives here as a named add-on.
 *
 * To put one back on a page, pass it as `children` to `PageHero`:
 *
 *   <PageHero eyebrow="Health library" title={...} lead={...}>
 *     <HeroStatBar stats={stats} />
 *   </PageHero>
 *
 * Nothing here is page-specific: each takes its content as props, so any of
 * them can be used on any page, or more than one at a time.
 */

/**
 * Variant "data-bar" (Ahrefs / Similarweb). Numbers sit directly in the hero's
 * reading line, rule above and below, rather than boxed off in cards, so the
 * page opens on evidence instead of on a decorative panel.
 *
 * Originally the Health Library header.
 */
export function HeroStatBar({
  stats,
  className,
}: {
  stats: { n: string; label: string }[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-x-10 gap-y-6 border-y border-border py-7", className)}>
      {stats.map((s) => (
        <div key={s.label}>
          <div className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-[34px] leading-none font-semibold text-transparent tabular-nums">
            {s.n}
          </div>
          <div className="mt-2 max-w-[18ch] text-[13px] text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/**
 * Variant "avatar cluster" (Ramp / Notion team page). An overlapping stack of
 * initials, each tile rotated a few degrees in alternating directions so the
 * row reads as a handful of people rather than a grid of chips. The trailing
 * ellipsis tile stands in for everyone not listed.
 *
 * Originally the Team header, where it sat above the headline rather than
 * below it.
 */
export function HeroAvatarCluster({
  people,
  showOverflowTile = true,
  className,
}: {
  people: { initials: string; highlight?: boolean }[];
  showOverflowTile?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center -space-x-4", className)}>
      {people.map((m, i) => (
        <div
          key={m.initials}
          className={cn(
            "grid size-16 place-items-center rounded-full border-4 border-background text-[16px] font-semibold shadow-card",
            m.highlight ? "bg-secondary text-secondary-foreground" : "bg-card text-secondary"
          )}
          style={{ transform: `rotate(${i % 2 === 0 ? -6 : 6}deg)`, zIndex: people.length - i }}
        >
          {m.initials}
        </div>
      ))}
      {showOverflowTile && (
        <div
          className="grid size-16 place-items-center rounded-full border-4 border-background bg-muted text-[20px] font-semibold text-muted-foreground shadow-card"
          style={{ transform: "rotate(-4deg)", zIndex: 0 }}
          aria-label="and more contributors"
        >
          &middot;&middot;&middot;
        </div>
      )}
    </div>
  );
}

/**
 * Variant "segmented wayfinding" (pricing-page tabs). The page's own sections
 * as pill links right in the header, so a visitor picks a lane before they
 * scroll instead of after.
 *
 * Originally the Contribute header. `href` is an in-page anchor.
 */
export function HeroPillLinks({
  links,
  className,
}: {
  links: { id: string; title: string; icon: LucideIcon }[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-3", className)}>
      {links.map((w) => (
        <a
          key={w.id}
          href={`#${w.id}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-[13.5px] font-semibold text-foreground no-underline transition-colors duration-200 hover:border-secondary/40 hover:text-secondary"
        >
          <w.icon className="size-4 text-secondary" aria-hidden="true" />
          {w.title}
        </a>
      ))}
    </div>
  );
}

/**
 * A row of flat blush tags. Quieter than HeroPillLinks: these are attributes,
 * not destinations, so they carry no border and no icon.
 *
 * Originally the Brand header's voice descriptors.
 */
export function HeroTagRow({ tags, className }: { tags: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-full bg-accent-faint px-3.5 py-1.5 text-[12px] font-medium text-secondary"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

/**
 * Variant "swatch ribbon" (Radix Themes / shadcn docs). The palette itself as
 * hero art: a full-bleed strip of real fills, each revealing its hex on hover,
 * rather than colour described in prose.
 *
 * Originally the Brand header. This one is full-bleed by design, so it belongs
 * directly inside the hero `<section>` rather than in the `children` slot,
 * which sits inside the padded container.
 */
export function HeroSwatchRibbon({
  colors,
  className,
}: {
  colors: { hex: string; bg: string }[];
  className?: string;
}) {
  return (
    <div className={cn("relative z-10 flex h-16 w-full border-y border-border sm:h-20", className)}>
      {colors.map((c) => (
        <div key={c.hex} className="group relative flex-1" style={{ background: c.bg }}>
          <span className="absolute inset-x-0 bottom-0 translate-y-full bg-ink px-2 py-1 text-center font-mono text-[10px] text-white opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-y-0 group-hover:opacity-100">
            {c.hex}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * Variant "live feature strip" / "as seen in" (Superhuman, Arc, Stripe). The
 * proof scrolls past directly under the claim: the real feature set on
 * Features, the outlets that covered Sakhi on Press.
 *
 * Full-bleed like the swatch ribbon, so it also belongs inside the hero
 * `<section>` rather than the padded container.
 */
export function HeroMarquee({
  items,
  speed = "slow",
  className,
}: {
  items: { label: string; icon?: React.ReactNode }[];
  speed?: "slow" | "normal" | "fast";
  className?: string;
}) {
  return (
    <div className={cn("relative z-10 mt-14", className)}>
      <InfiniteMovingCards tone="light" speed={speed} items={items} />
    </div>
  );
}

/**
 * The bordered caveat card. Sakhi is a health product, so the "this is not
 * medical advice" line has to be legible in the header rather than buried in a
 * footer, and it is deliberately styled as information, not as a warning.
 *
 * Originally the Health Library header.
 */
export function HeroNoticeCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex max-w-[520px] items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-card",
        className
      )}
    >
      <Lock size={15} strokeWidth={2} className="mt-1 shrink-0 text-muted-foreground" aria-hidden="true" />
      <p className="text-[13px] leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
