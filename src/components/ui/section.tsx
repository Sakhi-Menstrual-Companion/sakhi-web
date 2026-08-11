import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

/**
 * The page shell every page shares: one content column, one band rhythm, one
 * heading block. Pages used to declare these inline, which is how the site
 * ended up with several different hero treatments and heading scales.
 *
 * The band rhythm is white and Background Blush alternating, each split by a
 * hairline border. Separation comes from that tonal step plus whitespace —
 * there is no third surface, no gradient wash and no decorative background.
 */

/** 1120px max including the 24px gutter, so 1072px of content. Site-wide rule. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("mx-auto w-full max-w-[1120px]", className)}>{children}</div>;
}

/**
 * The label above a heading.
 *
 * This was a bordered pink pill with a `Sparkles` icon in it, which is the
 * single most recognisable "generated marketing page" signal there is, and is
 * called out by name in design-reference/DESIGN-LANGUAGE.md. It is now plain
 * uppercase grey text: 11px, weight 600, tracked out. The `.eyebrow` class
 * lives in globals.css so the inline-styled pages can share it.
 */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("eyebrow", className)}>{children}</span>;
}

/**
 * The one moving accent phrase every hero gets, at most once per page. A
 * pink-to-secondary gradient, clipped to the text, drifting slowly via the
 * `gradient-x` keyframe. Never wrap a whole headline in it — one clause only,
 * the same rule the old `hl-em` grey emphasis followed.
 */
export function GradientText({
  children,
  className,
  tone = "brand",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "brand" | "ink";
}) {
  return (
    <span
      className={cn(
        "animate-gradient-x bg-clip-text text-transparent",
        tone === "brand"
          ? "bg-gradient-to-r from-primary via-secondary to-primary"
          : "bg-gradient-to-r from-primary via-secondary to-primary-soft",
        className
      )}
    >
      {children}
    </span>
  );
}

/**
 * Hero backdrop, variant "mesh gradient minimal" (Linear style). Three soft
 * overlapping colour fields plus a barely-there noise grain, and nothing else.
 * This is the site's default page header: the confidence is in the emptiness,
 * not in what is added.
 *
 * Kept as its own export so a section that is not a page hero can borrow the
 * same wash without re-declaring the three radial stops.
 */
export function MeshGradientBackdrop({ className }: { className?: string }) {
  return (
    <>
      <div
        aria-hidden="true"
        className={cn("pointer-events-none absolute inset-0", className)}
        style={{
          background:
            "radial-gradient(38% 45% at 22% 15%, rgba(246,24,135,0.16), transparent 65%)," +
            "radial-gradient(32% 40% at 82% 20%, rgba(212,0,110,0.13), transparent 60%)," +
            "radial-gradient(45% 50% at 50% 100%, rgba(109,23,67,0.08), transparent 65%)",
        }}
      />
      {/* Grain, at 3.5% opacity. Enough to stop the gradient banding on a wide
          screen, not enough to read as texture. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
}

/** The faint dot-grid ambience behind a hero, radially masked toward the edges. */
export function DotGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 select-none opacity-70", className)}
      style={{
        backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage: "radial-gradient(ellipse 65% 55% at 50% 20%, #000 10%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 20%, #000 10%, transparent 75%)",
      }}
    />
  );
}

/**
 * A page band. `tone="blush"` is the alternate fill; `divided` draws the
 * hairline that actually separates one band from the next, since the two
 * fills only differ by 1.1:1.
 *
 * Padding is deliberately large. Where a page feels cramped the fix is space,
 * not another border or another tint.
 */
export function Section({
  tone = "white",
  divided = true,
  id,
  className,
  children,
}: {
  tone?: "white" | "blush" | "ink";
  divided?: boolean;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-6 py-24 sm:px-8 sm:py-28 lg:py-32",
        tone === "blush" && "bg-background-blush",
        tone === "ink" && "bg-ink text-ink-foreground",
        tone === "white" && "bg-background",
        divided && tone !== "ink" && "border-b border-border",
        className
      )}
    >
      {children}
    </section>
  );
}

/**
 * Centred heading block: eyebrow, heading, one line of lead copy. Nothing
 * else — no button, no chips. The measure stays narrow even on a wide page.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const centred = align === "center";
  return (
    <div className={cn(centred ? "mx-auto max-w-[46rem] text-center" : "max-w-[42rem]", className)}>
      {eyebrow && <Eyebrow className={cn("mb-4", centred && "text-center")}>{eyebrow}</Eyebrow>}
      <h2 className="text-h2 text-foreground">{title}</h2>
      {lead && (
        <p
          className={cn(
            "text-lead mt-5 text-muted-foreground",
            centred ? "mx-auto max-w-[38rem]" : "max-w-[34rem]"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/**
 * The page header every nav page shares.
 *
 * `backdrop="mesh"` is the default and is the site's standard header: the
 * mesh-gradient-minimal treatment first written for the Vision page. The
 * per-page hero treatments that came before it (data bar, avatar cluster,
 * swatch ribbon, and so on) are not deleted — they live on as named add-ons in
 * `page-hero-variants.tsx` and are passed in through `children`, so any of them
 * can be dropped back onto any page without rebuilding a hero from scratch.
 *
 * `backdrop="dotgrid"` keeps the older dot-grid-and-spotlight wash available
 * for a page that wants the busier treatment.
 *
 * `visual` puts content in a right-hand column at lg+, for pages carrying a
 * strong image; without it the hero is centred. Top padding clears the fixed
 * navbar via --nav-clearance.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  align = "left",
  visual,
  backdrop = "mesh",
  spotlightFill = "var(--primary)",
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "center" | "left";
  /** Optional right-column content at lg+; centred layouts ignore this. */
  visual?: React.ReactNode;
  backdrop?: "mesh" | "dotgrid";
  spotlightFill?: string;
  children?: React.ReactNode;
}) {
  const centred = align === "center" || !visual;
  return (
    <section className="relative overflow-hidden border-b border-border bg-background px-6 pb-24 sm:px-8 sm:pb-28">
      {backdrop === "mesh" ? (
        <MeshGradientBackdrop />
      ) : (
        <>
          <DotGrid />
          <Spotlight className="-top-32 left-0 lg:left-20" fill={spotlightFill} />
        </>
      )}
      <Container
        className={cn(
          "relative z-10 pt-[calc(var(--nav-clearance)+3.5rem)] sm:pt-[calc(var(--nav-clearance)+5.5rem)]",
          centred
            ? "flex flex-col items-center text-center"
            : "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        )}
      >
        <div className={cn(!centred && "max-w-none")}>
          {eyebrow && (
            <Eyebrow className={cn("mb-5 inline-block", centred && "text-center")}>{eyebrow}</Eyebrow>
          )}
          <h1 className={cn("text-h1 text-foreground", centred ? "mx-auto max-w-[20ch]" : "max-w-[16ch]")}>
            {title}
          </h1>
          {lead && (
            <p
              className={cn(
                "text-lead mt-6 text-muted-foreground",
                centred ? "mx-auto max-w-[42rem]" : "max-w-[38rem]"
              )}
            >
              {lead}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
        {!centred && visual && <div className="hidden lg:block">{visual}</div>}
      </Container>
    </section>
  );
}
