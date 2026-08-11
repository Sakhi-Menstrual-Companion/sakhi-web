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
 *    site. The homepage now runs on the fluid display scale in globals.css
 *    (`--text-h1`, `--text-h2`, `--text-lead`), so these objects point at the
 *    same custom properties rather than restating pixel values that would
 *    drift the moment the scale changes.
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
  padding: "clamp(72px, 9vw, 128px) 0",
};

/**
 * A responsive grid, in one call.
 *
 * Every inner page declared `gridTemplateColumns: "repeat(3, 1fr)"` with no
 * media query behind it, so a three-up card row stayed three-up at 390px:
 * roughly 90px per column, headings breaking one word per line, and the
 * overflow swallowed by the `overflowX: hidden` on the page wrapper. Nine
 * cards became an unreadable stripe.
 *
 * `auto-fit` + `minmax` drops the column count on its own, and the
 * `min(100%, ...)` guard is what stops the track from being wider than the
 * screen on the narrowest phones.
 *
 * @param minWidth the narrowest a column may be before the grid reflows
 */
export const gridAuto = (minWidth = 260, gap = 16): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minWidth}px), 1fr))`,
  gap,
});

/** Light hero, matching the homepage. Top padding clears the fixed navbar. */
export const heroSection: CSSProperties = {
  background: "var(--background)",
  borderBottom: "1px solid var(--border)",
  padding: "calc(var(--nav-clearance) + clamp(48px, 7vw, 88px)) 0 clamp(64px, 8vw, 112px)",
  color: "var(--foreground)",
};

/**
 * The label above a heading.
 *
 * This was a bordered pink pill with a background fill. It is plain uppercase
 * grey text now, matching the `Eyebrow` component and `.eyebrow` class — a
 * coloured chip above every single heading was the site's most repetitive
 * visual habit, and it spent the brand accent on decoration.
 *
 * `tone` is vestigial (no page has a dark hero any more) and is kept only so
 * existing call sites do not need editing.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const eyebrow = (_tone: "light" | "dark" = "dark"): CSSProperties => ({
  display: "block",
  fontSize: "var(--text-label)",
  lineHeight: 1.45,
  fontWeight: 600,
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  color: "var(--muted-foreground)",
  marginBottom: 16,
});

/**
 * Weight is deliberately unset on h1/h2: globals.css puts every display
 * heading on Lato 500 through the `h1, h2` type selector, and an inline weight
 * would override it and desynchronise the pages again.
 */
export const h1: CSSProperties = {
  fontSize: "var(--text-h1)",
  lineHeight: 1.08,
  letterSpacing: "-0.028em",
  color: "var(--foreground)",
  textWrap: "balance",
  margin: 0,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const h2 = (_tone: "light" | "dark" = "dark"): CSSProperties => ({
  fontSize: "var(--text-h2)",
  lineHeight: 1.12,
  letterSpacing: "-0.024em",
  color: "var(--foreground)",
  textWrap: "balance",
  margin: 0,
});

/** h3 is not part of the display selector, so it keeps its own weight. */
export const h3: CSSProperties = {
  fontSize: 19,
  lineHeight: 1.35,
  fontWeight: 600,
  letterSpacing: "-0.012em",
  color: ink,
  margin: "0 0 8px",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const lead = (_tone: "light" | "dark" = "dark"): CSSProperties => ({
  fontSize: "var(--text-lead)",
  lineHeight: 1.5,
  letterSpacing: "-0.011em",
  color: muted,
  maxWidth: "38ch",
  margin: 0,
});

export const body: CSSProperties = {
  fontSize: 14.5,
  lineHeight: 1.6,
  letterSpacing: 0,
  color: muted,
  margin: 0,
};

/** Flat bordered card. Radius 14 and no resting shadow, matching <Card>. */
export const card = (fill: string = "var(--card)"): CSSProperties => ({
  background: fill,
  border: "1px solid var(--border)",
  borderRadius: 14,
  padding: 28,
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

/** Pill, 44px tall, matching <Button> in components/ui/button. */
export const pillButton = (variant: "solid" | "light" = "solid"): CSSProperties => ({
  minHeight: 44,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: "0 22px",
  borderRadius: 999,
  border: variant === "light" ? "1px solid var(--border)" : "1px solid transparent",
  background: variant === "light" ? "var(--card)" : pinkDeep,
  color: variant === "light" ? "var(--foreground)" : "var(--primary-foreground)",
  fontSize: 15,
  fontWeight: 600,
  letterSpacing: "-0.01em",
  textDecoration: "none",
});
