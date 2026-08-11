# Sakhi Web Design Language

Derived from Google's "Glue" design system as shipped on `learning.google`, then
mapped onto Sakhi's own brand tokens.

**Source of every number in this file:** the live stylesheet
`https://learning.google/static/css/index.min.css` (402 KB, fetched 2026-08-10)
and the rendered pages `learning.google/`, `learning.google/school`, and the
Google Workspace for Education product page. Values were extracted from the CSS
by frequency and media-query context, not estimated by eye.

---

## 0. How to use this file

If you are an AI or a developer building a new Sakhi page, read sections 1 and 2
first. They carry most of the quality. Then use section 9 as a build recipe.

**The one rule that matters most:** copy Google's *structure, restraint and
typography*. Do not copy Google's *colour*. Sakhi is pink and Lato. Google is
blue and Google Sans. Every Google value in this file has a Sakhi equivalent in
section 10. Use the Sakhi column when you write code.

Two numbers in this file deliberately differ from Google, because the Sakhi site
already made a different choice and consistency beats imitation:

- Content width is **1120px** on Sakhi (`Container` in `src/components/ui/section.tsx`), not Google's 1296px.
- Body font is **Inter**, headings **Lato** (`src/app/layout.tsx`), not Google Sans.

---

## 1. The ten rules that make it look designed, not generated

These are the observable differences between Google's pages and a typical
AI-generated marketing page. This section is the whole point of the file.

**1. Headlines are weight 400, not bold.**
Google's 60px h1 is `font-weight:400`. Across the entire stylesheet, weight 400
appears 74 times, weight 500 appears 38 times, weight 700 appears only 5 times.
Bold headlines are the single strongest "template" signal. Set headlines light
and large, let size carry the hierarchy.

**2. One accent colour, on almost nothing.**
`#1a73e8` appears on: text links, the primary button, the active tab underline,
and stat numbers. That is all. It is never a background wash, never a border
tint, never a decorative glow. Sakhi's pink currently appears on eyebrows, chips,
icons, buttons, card fills and shadows at the same time. Cut it back to links,
one CTA per section, and active states.

**3. Cards are flat. The shadow is a hover state, not a look.**
Default card: white, `border-radius:8px`, a 1px `#dadce0` hairline, and
`box-shadow:0 0 0 0 transparent`. On hover the shadow fades in *and the border
fades out*. Static shadows on every card is the most common giveaway.

**4. Small radii.**
Buttons 4px. Cards 8px. Pills 100px only for genuine pills. The big friendly
20-40px radius appears exactly once, on a full-bleed tinted section panel.
Rounding everything to 24px reads as a template.

**5. Real photography, at generous size.**
Every module on those pages leads with a photo of a person. There are no
icon-in-a-tinted-circle rows. Where Sakhi has no photo, use a plain typographic
block or the real product UI. Do not fill the gap with a decorative icon.

**6. Whitespace is the layout.**
80px top and bottom on a tinted section. 60px row gap in the grid. 48-64px
column gap. If a page feels cramped, the fix is space, not a border.

**7. Text columns are narrow even when the page is wide.**
The page frame is 1296px but body copy sits in a 4 to 6 column span. Never run a
paragraph the full width of the container.

**8. Eyebrows are plain uppercase text, not pill badges.**
`.glue-label` is 11px, weight 500, `letter-spacing:.5px`, uppercase, in grey.
No border, no background, no sparkle icon. A sparkles icon above a heading is a
strong AI tell. Sakhi's current `Eyebrow` component uses a bordered pink pill
with a `Sparkles` icon, which is exactly the pattern to move away from.

**9. Links look like links.**
Plain accent-coloured text, no underline until hover, no arrow chip, no button.
Google uses a text link far more often than a button. Buttons are reserved for
the one real action in a section.

**10. Two greys carry the whole page.**
`#ffffff` and `#f8f9fa` alternate as section backgrounds. There is no third
surface, no gradient, no glass. All separation comes from that 1.1:1 tonal step
plus spacing.

---

## 2. Layout system

### Page frame

| Property | Mobile (<600) | Tablet (600-1023) | Desktop (1024-1439) | XL (1440+) |
|---|---|---|---|---|
| Side margin | 28px | 40px | 72px | 72px |
| Max content width | none | none | 1296px | 1296px |

Google: `.glue-page { margin:0 28px }` stepping to `40px`, then `72px`, with
`margin:0 auto; max-width:1296px`.

**Sakhi:** keep the existing `Container` (`max-width:1120px`, 24px gutter). Do
not introduce a second width. Consistency with the shipped homepage matters more
than matching Google's exact figure.

### Breakpoints

Only three, and they are the only ones in the entire stylesheet.

```
600px    mobile  ->  tablet
1024px   tablet  ->  desktop
1440px   desktop ->  xl
```

Write `min-width` queries. Do not invent 768px or 1280px breakpoints.

### Grid

| | Columns | Column gap | Row gap |
|---|---|---|---|
| <600 | 4 | 28px | — |
| 600+ | 12 | 40px | — |
| 1024+ | 12 | 48px | 60px |
| 1440+ | 12 | 64px | 60px |

`display:grid; grid-template-columns:repeat(12, minmax(5px, 1fr))`.

Common spans observed on the live pages:

- Full-width heading block: centred, span 8 to 10, offset 2
- Three-up card row: 4 + 4 + 4
- Two-up card row: 6 + 6
- 50/50 image and text: 6 + 6, image side often 5 with a 1 column gutter
- Body paragraph inside a wide section: span 4 to 6

### Section rhythm

| Section type | Padding |
|---|---|
| Tinted background band | 80px top, 80px bottom |
| Rounded inset panel, mobile | 32px vertical, 16px horizontal, radius 20px |
| Rounded inset panel, tablet | 60px vertical, 24px horizontal, radius 40px |
| Rounded inset panel, desktop | 80px vertical, 48px horizontal, radius 40px |

Bands alternate white and grey-50. Sakhi's `Section` component already does this
with `tone="white" | "blush"`, keep using it.

---

## 3. Spacing scale

A single 8-based ramp, with the top four steps growing on desktop. Use these
numbers and nothing between them.

| Step | Mobile | Desktop |
|---|---|---|
| 1 | 8px | 8px |
| 2 | 16px | 16px |
| 3 | 24px | 24px |
| 4 | 36px | 36px |
| 5 | 48px | 60px |
| 6 | 60px | 80px |
| 7 | 92px | 120px |
| 8 | 136px | 180px |

Typical usage seen in the markup: `spacer-2-bottom` (16px) under a heading inside
a card, `spacer-5`/`spacer-6` between major blocks, `spacer-7`/`spacer-8` around
a full-page hero.

---

## 4. Typography

### Google's three faces

| Face | Used for |
|---|---|
| Google Sans Display | h1, and h2 at desktop only |
| Google Sans | h2 to h4, buttons |
| Google Sans Text | body, caption, label, h5, h6 |

### The scale, exactly as shipped

| Role | Mobile | Tablet 600+ | Desktop 1024+ | Weight | Letter-spacing |
|---|---|---|---|---|---|
| headline-1 | 28 / 40 | 48 / 56 | 60 / 72 | 400 | -0.5px |
| headline-2 | 28 / 36 | 40 / 48 | 48 / 56 | 400 | -0.5px |
| headline-3 | 24 / 32 | 32 / 40 | 36 / 44 | 400 | -0.25px |
| headline-4 | 20 / 28 | 24 / 32 | 28 / 36 | 400 | normal |
| headline-5 | 18 / 28 | 20 / 28 | 20 / 28 | 400 | normal |
| headline-6 | 16 / 24 | 16 / 24 | 16 / 24 | 500 | normal |
| body | 16 / 24 | — | — | 400 | +0.1px |
| body large | 18 / 28 | — | — | 400 | normal |
| caption | 14 / 24 | — | — | 400 | +0.15px |
| label | 11 / 16 | — | — | 500 | +0.5px, uppercase |

Read as `size / line-height` in px.

Three things to copy exactly:

- **Negative tracking on large type only.** -0.5px at 48px and above, -0.25px at
  36px, normal below 28px. Never track out a headline.
- **Line-height 1.2 on headlines, 1.5 on body.** 60px type gets 72px leading.
- **Positive tracking on small type.** Body gets +0.1px, caption +0.15px, label
  +0.5px. This is what makes small text feel calm rather than cramped.

### Sakhi's version

Sakhi has Lato for headings and Inter for body. Lato at weight 400 is lighter
than Google Sans at 400, so headlines can take **weight 400 for display sizes
(36px and up) and weight 700 only for h3 and below**. Keep the size, line-height
and tracking values above unchanged, they are face-independent.

The existing `globals.css` sets `h1, h2 { font-weight:700 }`. For a page built to
this language, override to 400 on the display headline. That single change does
more for perceived quality than any layout edit.

---

## 5. Colour

### Google's palette, by frequency in the stylesheet

**Neutrals, the backbone**

| Hex | Count | Role |
|---|---|---|
| `#202124` | 73 | Primary text |
| `#3c4043` | 5 | Text, slightly softer |
| `#5f6368` | 45 | Secondary text |
| `#80868b` | 3 | Tertiary text |
| `#9aa0a6` | 15 | Disabled, placeholder |
| `#dadce0` | 56 | Borders, dividers |
| `#e8eaed` | 10 | Heavier divider |
| `#f1f3f4` | 23 | Grey-100 surface |
| `#f8f9fa` | 36 | Grey-50, alternate band |
| `#ffffff` | 72 | Page, cards |

**Accent**

| Hex | Count | Role |
|---|---|---|
| `#1a73e8` | 82 | Links, primary button, active state |
| `#174ea6` | 29 | Hover, pressed |
| `#185abc` | 8 | Focus fill |
| `#1967d2` | 5 | Tonal button text |
| `#4285f4` | 7 | Brand blue |
| `#e8f0fe` | 7 | Tonal button background |

**Status**, used sparingly: `#d93025` red, `#188038` green, `#f9ab00` amber.

Note the ratio: 82 uses of the accent against 73 + 45 + 56 + 36 uses of the four
core neutrals. The page is overwhelmingly grey and white. The accent is the
exception.

### Sakhi mapping

| Google role | Google | Sakhi token | Sakhi value |
|---|---|---|---|
| Primary text | `#202124` | `--foreground` | `#1d1d1f` |
| Secondary text | `#5f6368` | `--muted-foreground` | `#68686d` |
| Border, divider | `#dadce0` | `--border` | `#ece7ea` |
| Grey-100 surface | `#f1f3f4` | `--muted` | `#f1ecf0` |
| Grey-50 band | `#f8f9fa` | `--background-blush` | `#f8f2f4` |
| Page, card | `#ffffff` | `--background`, `--card` | `#ffffff` |
| Accent, links | `#1a73e8` | `--primary` | `#f61887` |
| Accent hover, text on light | `#174ea6` | `--secondary` | `#d4006e` |
| Tonal fill | `#e8f0fe` | `--accent-faint` | `#fdeff6` |
| Dark band | — | `--ink` | `#050406` |

**Contrast warning.** Sakhi's `--primary` (`#f61887`) carries white at only
3.89:1, below the 4.5:1 needed for button text. This is already documented in
`button.tsx`. Use `--secondary` (`#d4006e`, 5.22:1) for any pink surface with
white text on it, and for pink text on white. Reserve `--primary` for larger
elements and non-text accents.

---

## 6. Elevation, radius, borders

### Shadows, Material's ladder

```css
/* e1  resting card hover, button hover */
box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);

/* e2  pressed, raised button */
box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15);

/* e3  menus, popovers */
box-shadow: 0 2px 3px 0 rgba(60,64,67,.3), 0 6px 10px 4px rgba(60,64,67,.15);

/* focus ring, never a browser outline */
box-shadow: 0 0 0 2px #1a73e8;
```

Note the shadow colour is `rgba(60,64,67,...)`, a warm dark grey, not black.
Sakhi's `--elevation-card` already does the equivalent tinted toward deep pink.
Keep that.

### Radius

| Value | Used on |
|---|---|
| 4px | Buttons |
| 8px | Cards, image thumbnails |
| 50% / 100% | Avatars, icon buttons, carousel arrows |
| 100px | True pills only, for example a tab chip group |
| 20px / 40px | One rounded full-bleed inset panel, mobile / desktop |

Sakhi's tokens are larger (`--radius-card:24px`, `--radius-panel:32px`). For a
page built to this language, prefer 8px on cards and 8px on buttons. If that
clashes too hard with the existing homepage, use 12px, but do not go to 24px.

### Borders

One border in the whole system: `1px solid #dadce0`. Dividers are the same
colour at 1px. There are no 2px borders, no dashed borders, no coloured borders
except the accent underline on an active tab.

---

## 7. Components, exact specs

### Button

```
font-family : Google Sans        ->  Sakhi: Lato
font-size   : 16px
font-weight : 500
line-height : 24px
letter-spacing : 0.5px
min-height  : 48px
padding     : 12px 24px
border-radius : 4px
max-width   : 380px
text-align  : center
```

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| High emphasis | `#1a73e8` | `#fff` | none | shadow e1, fill `#185abc` on focus |
| Medium emphasis | `#fff` | `#1a73e8` | `1px #dadce0` | background `#f6f9fe` |
| Low emphasis | transparent | `#1a73e8` | none | background `rgba(26,115,232,.04)` |
| Tonal | `#e8f0fe` | `#1967d2` | `1px transparent` | shadow e1 |

One high-emphasis button per section, at most. Everything else is a text link.

Sakhi note: the existing `Button` component is 40px tall with a 13px label and
8px radius. It is close enough. If you want the Google feel exactly, use
`size="lg"` and set `min-height:48px`.

### Card

```css
.card {
  background: #fff;
  border-radius: 8px;
  min-height: 96px;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;   /* flat at rest */
}
/* the hairline lives on a pseudo-element so it can cross-fade */
.card__inner::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid #dadce0;
  border-radius: 8px;
  transition: border .25s;
}
.card:hover {
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
}
.card:hover .card__inner::before {
  border-color: rgba(218,220,224,0);   /* border fades as shadow arrives */
}
.card:focus {
  box-shadow: 0 0 0 2px #1a73e8;
  outline: 2px solid transparent;
}
```

That cross-fade is the detail worth copying. Border and shadow never show at the
same time.

Card interior order, top to bottom: image or icon, then a 14px uppercase label,
then an h4 title, then body copy, then a text link. Divider rules between stacked
items inside a card are `1px #dadce0`.

### Text link

Accent colour, no underline at rest, underline on hover, no icon. For a
navigational "read more", Google uses plain text. An arrow only appears inside a
circular icon button on carousels.

### Eyebrow / label

```
font-size: 11px; font-weight: 500; letter-spacing: .5px;
text-transform: uppercase; color: #5f6368;   /* grey, not accent */
line-height: 16px;
```

No pill, no border, no background, no icon.

### Stat block

Seen in the "Our impact and reach" grid. Structure: small product logo, then a
very large number in headline-1 size at weight 400, then a short accent-coloured
or plain caption, then 14px grey supporting text, then a text link. On hover the
number takes the section's accent colour.

### 50/50 module

The workhorse. Image on one side, text on the other, 6 + 6. Variants observed in
the class names: `--image-left`, `--image-right`, `--image-square`,
`--image-rectangular`, `--wide`, `--within-tab`. Text side holds: an 11px label,
an h4 heading, body copy, then one to three stacked text links. Image gets an
8px radius and a 14px grey caption underneath when it is a real photograph.

### Tabs

A row of plain text labels, centred, with a 1px `#dadce0` rule under the full
row. The active tab has a 3px accent underline and darker text. No pill, no
background fill.

### Accordion / FAQ

Question in 16px regular on the left, a circular accent-filled `+` icon button on
the right, a `1px #dadce0` divider between rows. No card, no background fill, no
chevron.

### Footer

Two zones. First a link farm, four columns of grouped links with a 13px grey
heading and 15px links. Then a grey-50 bar with the wordmark, four utility links,
and a language selector. Divider between them is 1px.

---

## 8. Motion

Almost none. The only transitions in the stylesheet are:

- `border .25s` on the card hairline
- box-shadow on hover, same duration class
- carousel slide transforms

There is no scroll-triggered fade-up on Google's pages. Sakhi's
`AnimatedSection` fades content in on scroll. Keep it if you like it, but use it
on whole sections only, never staggered per card. Staggered card reveals read as
a template.

Respect `prefers-reduced-motion`, already handled in `globals.css`.

---

## 9. Page build recipe

A Google page is a vertical stack of six or seven modules, alternating white and
grey-50. Compose from this list. Do not invent new module types.

```
1.  Masthead        centred logo mark, h1 at headline-1, optional short lead
2.  Three-up intro  three columns, each: photo, then 2-3 label + text + link
                    groups separated by 1px rules, then one medium button
3.  50/50           image one side, label + h4 + body + links the other
4.  Tinted band     grey-50, 80px padding, holds tabs or a feature grid
5.  Card grid       3-up or 2-up flat cards
6.  Stat grid       3-up, large numbers at weight 400
7.  Quote           photo left, large light-weight quote right, attribution
8.  Footer          link farm, then grey-50 utility bar
```

Rules for composing:

- Every module gets a centred heading block above it: 11px label, then h2, then
  one line of lead copy at body-large. Nothing else.
- Alternate white and grey-50. Never two tinted bands in a row.
- One high-emphasis button per page, in the primary conversion spot. Everywhere
  else, text links.
- Leave 80px between modules minimum, 120px around the masthead.

### Applying this to the Sakhi Story page

The Story page is a founder essay, not a product page, so use the narrower of
these patterns:

- Masthead: 11px uppercase dateline, h1 at weight 400, then a 1px rule with
  byline metadata under it
- Essay body: single column, span 6 of 12, `body large` at 18/28
- Pull data into a stat grid rather than inline
- One dark band for the single strongest quote, `--ink`
- Timeline as a plain left-ruled list, 1px `--border`, no cards
- Close with the footer CTA band

Keep the existing copy. It is good, and it follows the Sakhi voice rules in the
repo. This language governs how it is set, not what it says.

---

## 10. Quick token reference for code

```css
/* spacing */
--sp-1: 8px;   --sp-2: 16px;  --sp-3: 24px;  --sp-4: 36px;
--sp-5: 48px;  --sp-6: 60px;  --sp-7: 92px;  --sp-8: 136px;
/* desktop: sp-5 60, sp-6 80, sp-7 120, sp-8 180 */

/* type, size/line-height */
--h1: 60px/72px;  --h2: 48px/56px;  --h3: 36px/44px;
--h4: 28px/36px;  --h5: 20px/28px;  --h6: 16px/24px;
--body: 16px/24px;  --body-lg: 18px/28px;
--caption: 14px/24px;  --label: 11px/16px;

/* shape */
--radius-button: 4px;
--radius-card: 8px;
--border-hairline: 1px solid var(--border);

/* breakpoints */
--bp-tablet: 600px;  --bp-desktop: 1024px;  --bp-xl: 1440px;
```

Colours: use the existing semantic tokens in `src/app/globals.css`. Do not add
new colour values. If a design seems to need one, it is usually a spacing or
weight problem instead.

---

## 11. Anti-patterns

Things that will make a Sakhi page look AI-generated. Each one is the inverse of
something Google does.

- Bold (700 or 900) display headlines
- A sparkles or wand icon anywhere near a heading
- Coloured pill badges used as section eyebrows
- Gradient text, gradient buttons, gradient section backgrounds
- A static drop shadow on every card
- 24px or larger radius on small elements
- Three or more surface tints on one page
- Icon-in-a-tinted-circle rows standing in for real imagery
- Emoji used as interface icons
- Every card the same size in a perfectly even grid with no hierarchy
- Paragraphs running the full container width
- An arrow chip on every link
- Staggered fade-up animation on individual cards

---

## 12. Provenance

| Item | Source |
|---|---|
| All colour, type, spacing, grid, shadow, radius values | `learning.google/static/css/index.min.css`, fetched 2026-08-10 |
| Module inventory and section composition | rendered `learning.google/`, `learning.google/school`, Google Workspace for Education product page |
| Sakhi token values | `src/app/globals.css`, `src/components/ui/pageKit.ts`, `src/components/ui/button.tsx` |
| Sakhi container width, band rhythm | `src/components/ui/section.tsx` |

These are third-party marketing pages, kept as a structural reference only.
Google's colour, typefaces, imagery, copy and logo are theirs and are not to be
copied into Sakhi. What transfers is the system: the scale, the restraint, the
rhythm.
