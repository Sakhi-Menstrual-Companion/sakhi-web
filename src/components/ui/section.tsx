import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * The page shell every page shares: one content column, one band rhythm, one
 * heading block. Pages used to declare these inline, which is how the site
 * ended up with several different hero treatments and heading scales.
 *
 * The band rhythm is white and Background Blush alternating, each split by a
 * hairline border. Section padding is py-24, the hero clears the fixed navbar.
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

/** Bordered pill above a heading. Deep Pink type, it needs 4.5:1 at 12px. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-accent bg-accent-faint px-3 py-1 text-xs font-semibold text-secondary",
        className
      )}
    >
      <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

/**
 * A page band. `tone="blush"` is the alternate fill; `divided` draws the
 * hairline that actually separates one band from the next, since the two
 * fills only differ by 1.1:1.
 */
export function Section({
  tone = "white",
  divided = true,
  id,
  className,
  children,
}: {
  tone?: "white" | "blush";
  divided?: boolean;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 py-24 sm:px-6",
        tone === "blush" ? "bg-background-blush" : "bg-background",
        divided && "border-b border-border",
        className
      )}
    >
      {children}
    </section>
  );
}

/** Centred heading block: eyebrow, 30px heading, one line of lead copy. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "mx-auto max-w-xl text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
      {lead && <p className="text-base leading-relaxed text-muted-foreground">{lead}</p>}
    </div>
  );
}

/** The soft grid a hero sits on, so white does not read as empty. */
export function HeroPattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none opacity-60"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 70% 55% at 50% 0%, #000 10%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 0%, #000 10%, transparent 75%)",
      }}
    />
  );
}

/**
 * Page hero. Light, like the homepage: the site used to open every inner page
 * on a near-black gradient, which no longer matches anything else.
 *
 * pt clears the fixed navbar, which occupies y=18..68.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "center" | "left";
  children?: React.ReactNode;
}) {
  const centred = align === "center";
  return (
    <section className="relative overflow-hidden border-b border-border bg-background px-4 pt-32 pb-20 sm:px-6 sm:pt-40">
      <HeroPattern />
      <Container
        className={cn(
          "relative z-10 space-y-6",
          centred && "flex flex-col items-center text-center"
        )}
      >
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1
          className={cn(
            "text-4xl leading-[1.06] font-bold tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl",
            centred ? "max-w-4xl" : "max-w-3xl"
          )}
        >
          {title}
        </h1>
        {lead && (
          <p
            className={cn(
              "text-base leading-relaxed text-muted-foreground sm:text-lg",
              centred ? "max-w-2xl" : "max-w-[620px]"
            )}
          >
            {lead}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
