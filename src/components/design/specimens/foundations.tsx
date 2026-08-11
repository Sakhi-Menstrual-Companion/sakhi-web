import { GradientText } from "@/components/ui/section";
import type { SpecimenGroup } from "./types";

/**
 * The layer everything else is built from. These are not section designs, they
 * are the tokens, so a variant that ignores them will look off no matter how
 * good its layout is.
 */
export const foundationSpecimens: SpecimenGroup = {
  id: "foundations",
  label: "Foundations",
  blurb: "Colour, type, radius, elevation. Components reference these roles by name and never a raw hex, so a palette change is one edit in globals.css.",
  items: [
    {
      id: "token-01",
      name: "Brand colours",
      note: "Primary pink for accent, deep pink where text needs 4.5:1 on light. Ink is the dark band fill.",
      preview: (
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            { n: "--primary", v: "#F61887" },
            { n: "--secondary", v: "#D4006E" },
            { n: "--accent-faint", v: "#FDEFF6" },
            { n: "--ink", v: "#050406" },
          ].map((c) => (
            <div key={c.n} className="overflow-hidden rounded-xl border border-border">
              <div className="h-14 w-full" style={{ background: c.v }} />
              <div className="bg-card px-3 py-2">
                <p className="font-mono text-[11px] text-foreground">{c.n}</p>
                <p className="font-mono text-[10.5px] text-muted-foreground">{c.v}</p>
              </div>
            </div>
          ))}
        </div>
      ),
      code: `/* globals.css */
--primary: #f61887;   /* brand accent */
--secondary: #d4006e; /* text on light, hover/pressed */
--ink: #050406;       /* dark bands */

/* usage */
className="bg-primary text-primary-foreground"
className="text-secondary"`,
    },
    {
      id: "token-02",
      name: "Surface ladder",
      note: "White, shell, blush, muted. Bands alternate white and blush, split by a hairline, because the two only differ by 1.1:1.",
      preview: (
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            { n: "--background", v: "#FFFFFF" },
            { n: "--background-shell", v: "#FBF9FB" },
            { n: "--background-blush", v: "#F8F2F4" },
            { n: "--muted", v: "#F1ECF0" },
          ].map((c) => (
            <div key={c.n} className="overflow-hidden rounded-xl border border-border">
              <div className="h-14 w-full" style={{ background: c.v }} />
              <div className="bg-card px-3 py-2">
                <p className="font-mono text-[11px] text-foreground">{c.n}</p>
              </div>
            </div>
          ))}
        </div>
      ),
      code: `<Section tone="white">   {/* --background */}
<Section tone="blush">   {/* --background-blush */}
<Section tone="ink">     {/* --ink, light text */}`,
    },
    {
      id: "token-03",
      name: "Type scale",
      note: "Fluid clamps, weight 500 on display and headings. A bold display headline is the strongest generated-template signal there is.",
      preview: (
        <div className="space-y-3">
          <p className="text-h2 text-foreground">Heading two, 28 to 44</p>
          <p className="text-h3 text-foreground">Heading three, 22 to 28</p>
          <p className="text-h4 text-foreground">Heading four, 19</p>
          <p className="text-lead text-muted-foreground">Lead, 17 to 21</p>
          <p className="text-[15px] text-muted-foreground">Body, 15</p>
          <p className="eyebrow">Eyebrow, 11 uppercase</p>
        </div>
      ),
      code: `className="text-display"  /* 44 -> 72 */
className="text-h1"       /* 36 -> 56 */
className="text-h2"       /* 28 -> 44 */
className="text-h3"       /* 22 -> 28 */
className="text-h4"       /* 19 */
className="text-lead"     /* 17 -> 21 */
className="eyebrow"       /* 11, uppercase, tracked */`,
    },
    {
      id: "token-04",
      name: "Gradient text",
      note: "One clause per page, never a whole headline. Drifts slowly via the gradient-x keyframe.",
      preview: (
        <p className="text-h3 text-foreground">
          Built by people <GradientText>who care</GradientText>
        </p>
      ),
      code: `import { GradientText } from "@/components/ui/section";

<h1 className="text-h1">Built by people <GradientText>who care</GradientText></h1>`,
    },
    {
      id: "token-05",
      name: "Radius and elevation",
      note: "Cards at 14px, the one full-bleed panel at 28px. 24px on everything is called out as a template tell in the design reference.",
      preview: (
        <div className="flex flex-wrap gap-4">
          <div className="grid size-24 place-items-center rounded-[14px] border border-border bg-card text-[11px] text-muted-foreground">
            14px
          </div>
          <div className="grid size-24 place-items-center rounded-panel border border-border bg-card text-[11px] text-muted-foreground">
            28px
          </div>
          <div className="grid size-24 place-items-center rounded-[14px] bg-card text-[11px] text-muted-foreground shadow-card">
            shadow-card
          </div>
        </div>
      ),
      code: `className="rounded-2xl border border-border bg-card"  /* standard card */
className="rounded-panel"                            /* 28px, full-bleed panel */
className="shadow-card"                              /* warm, pink-tinted elevation */`,
    },
    {
      id: "token-06",
      name: "Motion",
      note: "Apple-style long decelerate. Durations stay in the 180 to 560ms band; anything faster reads mechanical.",
      preview: (
        <div className="flex flex-wrap gap-3">
          {[
            ["--duration-fast", "180ms"],
            ["--duration-base", "300ms"],
            ["--duration-slow", "560ms"],
          ].map(([n, v]) => (
            <div key={n} className="rounded-xl border border-border bg-card px-4 py-3">
              <p className="font-mono text-[11px] text-foreground">{n}</p>
              <p className="font-mono text-[10.5px] text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      ),
      code: `className="transition-transform duration-300 ease-(--ease-out-soft)"

/* All motion is disabled under prefers-reduced-motion in globals.css. */`,
    },
    {
      id: "token-07",
      name: "Text colour roles",
      note: "Four roles, each with a contrast job. Never pick a grey by eye: muted-foreground was darkened specifically to clear 4.5:1 on the muted fill.",
      preview: (
        <div className="space-y-2">
          {[
            { c: "text-foreground", l: "Primary text, headings and body emphasis" },
            { c: "text-muted-foreground", l: "Secondary text, captions and lead copy" },
            { c: "text-secondary", l: "Links and accents on light surfaces" },
            { c: "text-headline-muted", l: "The de-emphasised clause in a headline" },
          ].map((x) => (
            <p key={x.c} className={`text-[14px] ${x.c}`}>
              <span className="font-mono text-[12px] opacity-70">{x.c}</span> {x.l}
            </p>
          ))}
        </div>
      ),
      code: `className="text-foreground"        /* primary */
className="text-muted-foreground" /* secondary, 4.5:1 on white and muted */
className="text-secondary"        /* links and accents */
className="text-primary-soft"     /* accents on the ink fill, where primary fails */`,
    },
    {
      id: "token-08",
      name: "Focus and selection",
      note: "One focus treatment site-wide, two-tone so the ring stays visible on both white and pink. Never remove it.",
      preview: (
        <div className="flex flex-wrap items-center gap-4">
          <span className="rounded-lg bg-card px-4 py-2 text-[13.5px] text-foreground outline-2 outline-offset-2 outline-secondary">
            Focus ring
          </span>
          <span className="rounded-lg bg-[rgba(246,24,135,0.12)] px-4 py-2 text-[13.5px] text-foreground">
            Selected text
          </span>
        </div>
      ),
      code: `/* globals.css, applied once for the whole site */
:focus-visible {
  outline: 2px solid var(--secondary);
  outline-offset: 2px;
  border-radius: 4px;
}
::selection { background: rgba(246, 24, 135, 0.12); }`,
    },
    {
      id: "token-09",
      name: "Spacing rhythm",
      note: "Band padding is deliberately large. Where a page feels cramped the fix is space, not another border or another tint.",
      preview: (
        <div className="space-y-2">
          {[
            { l: "Section padding", v: "py-24 sm:py-28 lg:py-32" },
            { l: "Between blocks", v: "mt-14 to mt-20" },
            { l: "Card padding", v: "p-6 to p-7" },
            { l: "Heading to lead", v: "mt-5" },
          ].map((x) => (
            <div key={x.l} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-border py-2">
              <span className="text-[13.5px] text-foreground">{x.l}</span>
              <span className="font-mono text-[12px] text-muted-foreground">{x.v}</span>
            </div>
          ))}
        </div>
      ),
      code: `<Section>            {/* px-6 py-24 sm:px-8 sm:py-28 lg:py-32 */}
  <Container>        {/* mx-auto w-full max-w-[1120px] */}
    <SectionHeading eyebrow="..." title="..." lead="..." />
    <div className="mt-14">{content}</div>
  </Container>
</Section>`,
    },
    {
      id: "token-10",
      name: "Band rhythm",
      note: "White and blush alternating, split by a hairline. The two fills differ by about 1.1:1, so the border is what actually separates them.",
      bleed: true,
      preview: (
        <div>
          {[
            { c: "bg-background", l: "tone=\"white\"" },
            { c: "bg-background-blush", l: "tone=\"blush\"" },
            { c: "bg-ink text-ink-foreground", l: "tone=\"ink\"" },
          ].map((x) => (
            <div key={x.l} className={`border-b border-border px-8 py-7 ${x.c}`}>
              <span className="font-mono text-[12px] opacity-70">{x.l}</span>
            </div>
          ))}
        </div>
      ),
      code: `<Section tone="white">...</Section>
<Section tone="blush">...</Section>
<Section tone="ink">...</Section>   /* light text, no bottom border */`,
    },
  ],
};
