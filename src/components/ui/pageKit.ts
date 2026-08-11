import type { CSSProperties } from "react";

/**
 * Shared inline-style tokens for the inner pages.
 *
 * Two rules hold here:
 *
 * 1. Every colour resolves to a `var(--token)` from the semantic layer in
 *    globals.css. There is one palette on the site, not two.
 *
 * 2. The scale matches the homepage, which is the reference for the whole
 *    site: 30px section headings, 12px label pills, p-6 cards at radius 12,
 *    and rounded-lg buttons rather than full pills.
 *
 * `heroSection` is LIGHT now. Every inner page used to open on a near-black
 * gradient while the homepage opened on white, which was the single biggest
 * reason the site looked like two different products.
 *
 * New work should prefer the components in `section.tsx` (Container, Section,
 * PageHero, SectionHeading) over these objects. These remain so the existing
 * pages keep working without a rewrite of every element.
 */

export const ink = "var(--foreground)";
export const muted = "var(--muted-foreground)";
export const pink = "var(--primary)";
export const pinkDeep = "var(--secondary)";
/* Was --primary-soft (#ff77b9), which existed for the old dark heroes. On a
   white hero it falls to about 2:1. It is only used for a headline emphasis
   span, so it now points at the same Primary Pink the homepage uses there. */
export const pinkSoft = "var(--primary)";
export const blush = "var(--accent)";
export const blushFaint = "var(--accent-faint)";
export const surface = "var(--background-blush)";
export const border = "var(--border)";

/** Same box as the homepage: 1120 max INCLUDING the 24px gutter. */
export const container: CSSProperties = {
  width: "min(100%, 1120px)",
  margin: "0 auto",
  padding: "0 24px",
};

/** Vertical only. The gutter belongs to `container`. */
export const sectionPad: CSSProperties = {
  padding: "96px 0",
};

/** Light hero, matching the homepage. pt clears the fixed navbar (y=18..68). */
export const heroSection: CSSProperties = {
  background: "var(--background)",
  borderBottom: "1px solid var(--border)",
  padding: "160px 0 80px",
  color: "var(--foreground)",
};

/**
 * The bordered label pill above a heading.
 *
 * `tone` used to mean "this sits on a dark background". Now that no page has
 * a dark hero, both tones resolve to the same readable Deep Pink on blush;
 * the argument is kept so existing call sites do not need editing.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const eyebrow = (_tone: "light" | "dark" = "dark"): CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "4px 12px",
  borderRadius: 999,
  border: "1px solid var(--accent)",
  background: "var(--accent-faint)",
  color: "var(--secondary)",
  fontSize: 12,
  lineHeight: 1.4,
  fontWeight: 600,
  letterSpacing: 0,
  marginBottom: 16,
});

/**
 * Weight is deliberately unset on h1/h2: globals.css puts every heading on
 * Lato 700 through the `h1, h2` type selector, and an inline weight would
 * override it and desynchronise the pages again.
 */
export const h1: CSSProperties = {
  fontSize: "clamp(36px, 5.4vw, 60px)",
  lineHeight: 1.06,
  letterSpacing: "-0.025em",
  color: "var(--foreground)",
  textWrap: "balance",
  margin: 0,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const h2 = (_tone: "light" | "dark" = "dark"): CSSProperties => ({
  fontSize: "clamp(26px, 3vw, 30px)",
  lineHeight: 1.15,
  letterSpacing: "-0.025em",
  color: "var(--foreground)",
  textWrap: "balance",
  margin: 0,
});

/** h3 is not part of the display selector, so it keeps its own weight. */
export const h3: CSSProperties = {
  fontSize: 18,
  lineHeight: 1.3,
  fontWeight: 600,
  letterSpacing: "-0.015em",
  color: ink,
  margin: "0 0 6px",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const lead = (_tone: "light" | "dark" = "dark"): CSSProperties => ({
  fontSize: 17,
  lineHeight: 1.65,
  letterSpacing: 0,
  color: muted,
  maxWidth: 620,
  margin: 0,
});

export const body: CSSProperties = {
  fontSize: 14,
  lineHeight: 1.65,
  letterSpacing: 0,
  color: muted,
  margin: 0,
};

/** Flat bordered card, radius 12, 24px padding. */
export const card = (fill: string = "var(--card)"): CSSProperties => ({
  background: fill,
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: 24,
  height: "100%",
  boxSizing: "border-box",
});

export const chip: CSSProperties = {
  minHeight: 30,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "0 12px",
  borderRadius: 999,
  border: "1px solid var(--accent)",
  background: blushFaint,
  color: "var(--secondary)",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: 0,
};

/** Rounded rectangle, 40px tall, matching <Button> in components/ui/button. */
export const pillButton = (variant: "solid" | "light" = "solid"): CSSProperties => ({
  height: 40,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: "0 16px",
  borderRadius: 8,
  border: variant === "light" ? "1px solid var(--border)" : "1px solid transparent",
  background: variant === "light" ? "var(--card)" : pinkDeep,
  color: variant === "light" ? "var(--foreground)" : "var(--primary-foreground)",
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: "-0.01em",
  textDecoration: "none",
});
