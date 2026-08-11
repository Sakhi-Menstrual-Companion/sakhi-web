# Website design reference

> **Start with [DESIGN-LANGUAGE.md](DESIGN-LANGUAGE.md).** That file is the
> build spec for new pages: exact grid, spacing, type scale, component specs and
> page recipes, extracted from Google's shipped stylesheet and mapped to Sakhi's
> tokens. This file below is an older, looser set of observations from a
> different reference set. Where the two disagree, DESIGN-LANGUAGE.md wins. In
> particular, the serif display face suggested below was never adopted, the site
> is on Lato and Inter.

Reference set reviewed 2026-08-09 (InsightLoop / Custora style landing pages).
Image files to be added here by Karan — see "Missing files" at the bottom.

These are my observations of the patterns worth borrowing, written so the
reference is still usable before the screenshots land.

## What makes these read as premium

### 1. Serif display type, mixed roman + italic
The single strongest signal. Headlines use a high-contrast **serif**, and the
second half of the sentence switches to **italic in a lighter grey**:

> "Stop Guessing." (near-black roman) → "Start Building What Customers
> Actually Want" (grey italic)

Two weights of emphasis inside one sentence. Every section headline uses this
same device. Sakhi currently uses Lato Black throughout — geometric sans,
single weight, no italic contrast.

### 2. One saturated accent, used sparingly
A single acid yellow (`#d8f34a`-ish) appears only on:
- the primary CTA pill
- one highlighted card out of six
- small circular arrow buttons

Everything else is near-neutral. The accent never appears as a surface tint.

### 3. Deep green as the "dark" instead of black
Dark sections use a forest green (`#254a2a`-ish), not black. Warmer and more
distinctive than a neutral dark. Used for the closing CTA band and one
highlighted card.

### 4. Near-white surfaces, very low chroma
Cards sit on `#faf9f7`-ish warm off-white with a barely-there border. The page
is white. Separation comes from a hairline + tiny radius shift, not shadow.

### 5. Small pill eyebrow above every section headline
A low-contrast rounded chip ("Our Platform", "Why InsightLoop", "How It Works",
"Impact", "Customer Story") centred above the headline. Consistent on every
section — it is the connective tissue of the page.

### 6. Numbered process grid
The "How It Works" grid numbers each card (1–6) with a small coloured dot, and
highlights exactly one card in the dark green. Same trick as the accent rule:
one item breaks the pattern.

### 7. Big stat cards
Huge serif numerals (`97%`, `4M+`, `82%`) with a small caption underneath and a
tiny circular arrow in the corner. One card's arrow is the yellow accent.

## What this suggests for Sakhi

Honest read — most of this is **already** how the Sakhi site is structured
(pill eyebrows, section headline + lead, card grids, one dark closing band).
The gap is not layout, it is **typography and restraint**:

1. **Type is the biggest lever.** A serif display face with a roman/italic
   split would change the character more than any layout change. This is a
   brand decision, not a CSS one — needs Karan's call, and should be checked
   against `04-Design/Branding/` before anything changes.
2. **Accent discipline.** These pages use their accent on roughly 3 elements
   per screen. Sakhi's pink currently appears on eyebrows, chips, icons,
   buttons, card fills and glows simultaneously.
3. **Warmer dark.** Sakhi's dark sections are near-black; a warm deep tone
   (in the brand's burgundy family, e.g. `#6d1743` from the Figma palette)
   would be more distinctive than `#050505`.
4. **Photography.** Every reference leans on real photos of people. Sakhi has
   none on the homepage. This is likely the single biggest perceived quality
   gap, and it needs real assets, not CSS.

## Missing files

The reference images were pasted into a chat rather than saved to disk, so they
could not be written here automatically. To add them:

1. Save all 9 screenshots into this folder
2. Suggested naming:
   - `01-insightloop-hero.png`
   - `02-insightloop-video-logos.png`
   - `03-insightloop-platform-cards.png`
   - `04-insightloop-why-split.png`
   - `05-insightloop-how-it-works.png`
   - `06-insightloop-customer-story.png`
   - `07-insightloop-stats.png`
   - `08-insightloop-cta-footer.png`
   - `09-custora-full-page.png`

Note: these are third-party marketing pages kept for design reference only.
Do not copy their copy, imagery, or brand assets into Sakhi.
