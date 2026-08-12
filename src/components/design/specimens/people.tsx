import { ArrowRight, AtSign, Globe, Play } from "lucide-react";

import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/section";
import SakhiLogo from "@/components/ui/SakhiLogo";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import type { SpecimenGroup } from "./types";

/**
 * People, and the media that shows them.
 *
 * Sakhi's team pages name real contributors, so these specimens leave room for
 * a role and a joining date rather than a job title alone: on a project built
 * through a bootcamp, when someone joined is part of the credit.
 */

export const peopleSpecimens: SpecimenGroup = {
  id: "people",
  label: "People and team",
  blurb:
    "Contributor credit. Initials tiles stand in for photographs throughout, which keeps the pages honest when a headshot does not exist rather than reaching for a stock face.",
  items: [
    {
      id: "people-01",
      name: "Initials card",
      note: "The base tile. Initials on brand pink for a lead, on card white for everyone else.",
      preview: (
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { i: "KK", n: "Karan Kumar", r: "Founder, iOS and product", h: true },
            { i: "SS", n: "Shruti Sachdeva", r: "Design Lead", h: false },
            { i: "T07", n: "ISDP Team 07", r: "Where Sakhi began", h: false },
          ].map((m) => (
            <div key={m.i} className="rounded-2xl border border-border bg-card p-5 text-center">
              <span
                className={`mx-auto grid size-14 place-items-center rounded-full text-[16px] font-semibold ${
                  m.h ? "bg-secondary text-white" : "bg-accent-faint text-secondary"
                }`}
              >
                {m.i}
              </span>
              <p className="mt-3 text-[14.5px] font-semibold text-foreground">{m.n}</p>
              <p className="mt-0.5 text-[12.5px] text-muted-foreground">{m.r}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="rounded-2xl border border-border bg-card p-5 text-center">
  <span className={cn("mx-auto grid size-14 place-items-center rounded-full text-[16px] font-semibold",
    m.highlight ? "bg-secondary text-white" : "bg-accent-faint text-secondary")}>{m.initials}</span>
  <p className="mt-3 text-[14.5px] font-semibold text-foreground">{m.name}</p>
</div>`,
    },
    {
      id: "people-02",
      name: "Profile row",
      note: "Horizontal, with room for a sentence. Better than a grid tile when each person's contribution needs explaining.",
      preview: (
        <div className="divide-y divide-border border-y border-border">
          {[
            { i: "KK", n: "Karan Kumar", r: "Founder, iOS and product", s: "Since Jan 2024" },
            { i: "SS", n: "Shruti Sachdeva", r: "Design Lead, brand and UI", s: "Since Jan 2024" },
            { i: "T07", n: "ISDP Team 07", r: "The original bootcamp cohort", s: "Jan 2024" },
          ].map((m) => (
            <div key={m.i} className="flex items-center gap-4 py-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-faint text-[14px] font-semibold text-secondary">
                {m.i}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[14.5px] font-semibold text-foreground">{m.n}</p>
                <p className="text-[12.5px] text-muted-foreground">{m.r}</p>
              </div>
              <span className="shrink-0 text-[12px] text-muted-foreground">{m.s}</span>
            </div>
          ))}
        </div>
      ),
      code: `<div className="flex items-center gap-4 py-4">
  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-faint text-[14px] font-semibold text-secondary">{m.initials}</span>
  <div className="min-w-0 flex-1">
    <p className="text-[14.5px] font-semibold text-foreground">{m.name}</p>
    <p className="text-[12.5px] text-muted-foreground">{m.role}</p>
  </div>
</div>`,
    },
    {
      id: "people-03",
      name: "Featured contributor",
      note: "One person given a whole panel: portrait tile, bio, a quote, and what they built. For a founder or a lead.",
      preview: (
        <div className="rounded-panel border border-border bg-card p-7">
          <div className="flex flex-wrap items-center gap-4">
            <span className="grid size-16 place-items-center rounded-full bg-secondary text-[18px] font-semibold text-white">
              KK
            </span>
            <div>
              <p className="text-h4 text-foreground">Karan Kumar</p>
              <p className="text-[13px] text-muted-foreground">Founder, since January 2024</p>
            </div>
          </div>
          <blockquote className="mt-5 border-l-2 border-primary pl-4 text-[14.5px] leading-relaxed text-foreground">
            Product is not what you build. It is the problem you solve.
          </blockquote>
          <div className="mt-5 flex flex-wrap gap-2">
            {["iOS App", "Product Strategy", "Brand Vision"].map((c) => (
              <span
                key={c}
                className="rounded-full bg-accent-faint px-3 py-1 text-[11.5px] font-medium text-secondary"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      ),
      code: `<div className="rounded-panel border border-border bg-card p-7">
  <div className="flex flex-wrap items-center gap-4">{/* avatar + name */}</div>
  <blockquote className="mt-5 border-l-2 border-primary pl-4 text-[14.5px] leading-relaxed text-foreground">{m.quote}</blockquote>
  <div className="mt-5 flex flex-wrap gap-2">{m.contributions.map(...)}</div>
</div>`,
    },
    {
      id: "people-04",
      name: "Overlapping cluster",
      note: "The header add-on, reusable in the body. Rotated tiles reading as a handful of people rather than a grid.",
      preview: (
        <div className="flex items-center -space-x-4">
          {["KK", "SS", "AB"].map((i, n) => (
            <span
              key={i}
              className={`grid size-14 place-items-center rounded-full border-4 border-background text-[14px] font-semibold shadow-card ${
                n === 0 ? "bg-secondary text-white" : "bg-card text-secondary"
              }`}
              style={{ transform: `rotate(${n % 2 === 0 ? -6 : 6}deg)`, zIndex: 3 - n }}
            >
              {i}
            </span>
          ))}
        </div>
      ),
      code: `import { HeroAvatarCluster } from "@/components/ui/page-hero-variants";

<HeroAvatarCluster people={teamMembers} />`,
    },
    {
      id: "people-05",
      name: "Credit with links",
      note: "Contributor plus their links. Generic globe and at-sign marks, because lucide dropped its brand icons and drawing an approximate GitHub logo would be worse than not using one.",
      preview: (
        <div className="flex items-center gap-4">
          <span className="grid size-11 place-items-center rounded-full bg-accent-faint text-[14px] font-semibold text-secondary">
            KK
          </span>
          <div className="flex-1">
            <p className="text-[14.5px] font-semibold text-foreground">Karan Kumar</p>
            <p className="text-[12.5px] text-muted-foreground">Founder</p>
          </div>
          <div className="flex gap-1.5">
            {[Globe, AtSign].map((Icon, i) => (
              <span
                key={i}
                className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-4" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      ),
      code: `<a href={m.site} aria-label={\`\${m.name}, personal site\`}
   className="grid size-8 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground">
  <Globe className="size-4" aria-hidden="true" />
</a>`,
    },
    {
      id: "people-06",
      name: "Tiered contributor list",
      note: "Groups by level of involvement. The label column names the tier so nobody has to infer it from position.",
      preview: (
        <div className="space-y-5">
          {[
            { t: "Core team", p: ["Karan Kumar", "Shruti Sachdeva"] },
            { t: "Contributors", p: ["ISDP Team 07"] },
          ].map((g) => (
            <div key={g.t} className="grid gap-3 sm:grid-cols-[9rem_minmax(0,1fr)]">
              <p className="eyebrow pt-1">{g.t}</p>
              <div className="flex flex-wrap gap-2">
                {g.p.map((n) => (
                  <span
                    key={n}
                    className="rounded-full border border-border bg-card px-3.5 py-1.5 text-[13px] text-foreground"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
      code: `<div className="grid gap-3 sm:grid-cols-[9rem_minmax(0,1fr)]">
  <p className="eyebrow pt-1">{tier.label}</p>
  <div className="flex flex-wrap gap-2">{tier.people.map((n) => <span key={n} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-[13px] text-foreground">{n}</span>)}</div>
</div>`,
    },
    {
      id: "people-07",
      name: "Thank you band",
      note: "Acknowledgement without ranking. Names set as running text, deliberately unstyled, so nobody reads a hierarchy into it.",
      preview: (
        <div className="rounded-panel bg-background-blush p-7 text-center">
          <span className="eyebrow">With thanks</span>
          <p className="mx-auto mt-3 max-w-[52ch] text-[14.5px] leading-relaxed text-foreground">
            Galgotias University, the ISDP Bootcamp cohort, every tester who logged a real cycle,
            and everyone who told us what was still wrong.
          </p>
        </div>
      ),
      code: `<div className="rounded-panel bg-background-blush p-7 text-center">
  <span className="eyebrow">With thanks</span>
  <p className="mx-auto mt-3 max-w-[52ch] text-[14.5px] leading-relaxed text-foreground">{names.join(", ")}</p>
</div>`,
    },
    {
      id: "people-08",
      name: "Join the team",
      note: "An open invitation rather than a job listing, which is honest while there are no funded roles.",
      preview: (
        <div className="rounded-2xl border border-border bg-card p-7 text-center">
          <h4 className="text-h4 text-foreground">
            Would you like to <GradientText>build with us</GradientText>
          </h4>
          <p className="mx-auto mt-2 max-w-[46ch] text-[13.5px] text-muted-foreground">
            There is a lot still to build. If this is the kind of problem you would like to work on,
            we would love to hear from you.
          </p>
          <a
            href="#people"
            className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-secondary no-underline hover:underline"
          >
            Say hello <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      ),
      code: `<div className="rounded-2xl border border-border bg-card p-7 text-center">
  <h2 className="text-h4 text-foreground">Would you like to <GradientText>build with us</GradientText></h2>
  <Link href="/contribute" className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-secondary no-underline hover:underline">
    Say hello <ArrowRight className="size-4" aria-hidden="true" />
  </Link>
</div>`,
    },
    {
      id: "people-09",
      name: "Contributor with portrait",
      note: "For when a real photograph exists. Same row as people-02, with the image well replacing the initials tile.",
      preview: (
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { n: "Karan Kumar", r: "Founder, iOS and product" },
            { n: "Shruti Sachdeva", r: "Design Lead, brand and UI" },
          ].map((m) => (
            <div key={m.n} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
              <ImagePlaceholder className="size-16 shrink-0 rounded-full" label="Photo" />
              <div className="min-w-0">
                <p className="text-[14.5px] font-semibold text-foreground">{m.n}</p>
                <p className="mt-0.5 text-[12.5px] leading-snug text-muted-foreground">{m.r}</p>
              </div>
            </div>
          ))}
        </div>
      ),
      code: `<div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
  <Image src={m.photo} alt={m.name} width={64} height={64} className="size-16 shrink-0 rounded-full object-cover" />
  <div className="min-w-0">
    <p className="text-[14.5px] font-semibold text-foreground">{m.name}</p>
  </div>
</div>`,
    },
    {
      id: "people-10",
      name: "Roles grid",
      note: "What each person owns, rather than who they are. Useful on a page answering who to contact about what.",
      preview: (
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { r: "Product and iOS", p: "Karan Kumar" },
            { r: "Design and brand", p: "Shruti Sachdeva" },
            { r: "Partnerships", p: "Write to the team" },
          ].map((x) => (
            <div key={x.r} className="rounded-2xl border border-border bg-card p-5">
              <p className="eyebrow">{x.r}</p>
              <p className="mt-2 text-[14.5px] font-semibold text-foreground">{x.p}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="rounded-2xl border border-border bg-card p-5">
  <p className="eyebrow">{x.area}</p>
  <p className="mt-2 text-[14.5px] font-semibold text-foreground">{x.person}</p>
</div>`,
    },
  ],
};

export const mediaSpecimens: SpecimenGroup = {
  id: "media",
  label: "Media and gallery",
  blurb:
    "Screenshots, mockups and video. Every well here is sized by aspect ratio rather than a fixed height, so a real asset drops in without the layout shifting.",
  items: [
    {
      id: "media-01",
      name: "Device mockup",
      note: "A single app screenshot at its natural aspect. Export at twice the rendered width or it will look soft on a retina screen.",
      preview: (
        <ImagePlaceholder
          className="mx-auto aspect-9/16 max-w-40"
          label="Hand holding the Sakhi day view"
        />
      ),
      code: `<Image src="/assets/hero-phone-in-hand.png" alt="Descriptive alt" width={1600} height={2186}
  quality={100} sizes="(max-width: 640px) 320px, 480px"
  className="h-auto w-80 sm:w-120" />`,
    },
    {
      id: "media-02",
      name: "Two up comparison",
      note: "Before and after, or two screens side by side. Captions sit under each rather than floating between them.",
      preview: (
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { l: "v1, June 2025", c: "Summary screen" },
            { l: "v2, June 2026", c: "Redesigned day view" },
          ].map((f) => (
            <figure key={f.l}>
              <ImagePlaceholder className="aspect-4/3" label={f.c} />
              <figcaption className="mt-2 text-[12.5px] text-muted-foreground">{f.l}</figcaption>
            </figure>
          ))}
        </div>
      ),
      code: `<figure>
  <ImagePlaceholder className="aspect-4/3" />
  <figcaption className="mt-2 text-[12.5px] text-muted-foreground">{caption}</figcaption>
</figure>`,
    },
    {
      id: "media-03",
      name: "Gallery grid",
      note: "Several screens at once. Equal aspect keeps the rows aligned however many land in each.",
      preview: (
        <div className="grid grid-cols-2 items-start gap-3 sm:grid-cols-4">
          {["Day view", "Calendar", "Sakhi AI", "Health report"].map((l) => (
            <ImagePlaceholder key={l} className="aspect-square" label={l} />
          ))}
        </div>
      ),
      code: `<div className="grid grid-cols-2 items-start gap-3 sm:grid-cols-4">
  {shots.map((s) => <ImagePlaceholder key={s.id} className="aspect-square" />)}
</div>`,
    },
    {
      id: "media-04",
      name: "Video well",
      note: "A poster frame with a play affordance. Never autoplay with sound, and always ship captions.",
      preview: (
        <div className="relative">
          <ImagePlaceholder className="aspect-video" label="Poster frame, Apple Success Story film" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-12 place-items-center rounded-full bg-ink text-white shadow-card">
              <Play className="size-5" aria-hidden="true" />
            </span>
          </span>
        </div>
      ),
      code: `<div className="relative grid aspect-video place-items-center rounded-panel bg-muted">
  <button type="button" aria-label="Play the film" className="grid size-12 place-items-center rounded-full bg-ink text-white">
    <Play className="size-5" aria-hidden="true" />
  </button>
</div>`,
    },
    {
      id: "media-05",
      name: "Full-bleed band",
      note: "One image edge to edge, breaking the container. Use once per page at most, for something genuinely worth the interruption.",
      bleed: true,
      preview: (
        <ImagePlaceholder
          className="h-40 rounded-none border-x-0"
          label="Full-bleed campus photograph, Galgotias University"
        />
      ),
      code: `{/* Inside a padded section, break out with the rail gutter technique: */}
<div className="-mx-(--rail-gutter)">
  <Image ... className="h-auto w-full" />
</div>`,
    },
    {
      id: "media-06",
      name: "Captioned figure",
      note: "An image that is making a point. The caption carries the source, which is required for anything research-derived.",
      preview: (
        <figure className="max-w-lg">
          <ImagePlaceholder className="aspect-video" label="Chart, conditions by category" />
          <figcaption className="mt-2.5 text-[12.5px] leading-relaxed text-muted-foreground">
            What the figure shows, in one line.{" "}
            <span className="text-foreground">Source needed, verify before publishing.</span>
          </figcaption>
        </figure>
      ),
      code: `<figure className="max-w-lg">
  <ImagePlaceholder className="aspect-video" />
  <figcaption className="mt-2.5 text-[12.5px] leading-relaxed text-muted-foreground">
    Description. <a href={sourceUrl} className="text-secondary no-underline hover:underline">{sourceName}</a>
  </figcaption>
</figure>`,
    },
    {
      id: "media-07",
      name: "Screenshot carousel",
      note: "Several app screens in a scrolling rail. Better than a grid when each screen deserves to be seen at size.",
      preview: (
        <div className="-mx-1 flex gap-4 overflow-x-auto px-1 pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
          {["Day view", "Calendar", "Sakhi AI", "Health report"].map((l) => (
            <div key={l} className="w-32 shrink-0">
              <ImagePlaceholder className="aspect-9/16" label={l} />
              <p className="mt-2 text-center text-[12px] text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      ),
      code: `<CardRail label="App screens">
  {screens.map((s) => (
    <div key={s.label} className="w-40 shrink-0 snap-start">
      <Image src={s.src} alt={s.alt} width={402} height={874} className="h-auto w-full" />
    </div>
  ))}
</CardRail>`,
    },
    {
      id: "media-08",
      name: "Image with overlay caption",
      note: "Caption sitting on the image rather than under it. Only where the image has a quiet area to hold text.",
      preview: (
        <div className="relative max-w-lg overflow-hidden rounded-panel">
          <ImagePlaceholder className="aspect-video rounded-panel" label="Campus photography" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-5 py-4">
            <p className="text-[13px] font-medium text-white">
              Galgotias University, where Sakhi began
            </p>
          </div>
        </div>
      ),
      code: `<div className="relative overflow-hidden rounded-panel">
  <Image src={src} alt={alt} className="h-auto w-full" />
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-5 py-4">
    <p className="text-[13px] font-medium text-white">{caption}</p>
  </div>
</div>`,
    },
    {
      id: "media-09",
      name: "Logo and asset downloads",
      note: "For a brand page. Each asset previewed on the surface it is meant for, with the format stated.",
      preview: (
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { l: "Logo, pink on white", b: "bg-card" },
            { l: "Logo, light on ink", b: "bg-ink" },
            { l: "Mark only", b: "bg-background-blush" },
          ].map((x) => (
            <div key={x.l} className="overflow-hidden rounded-2xl border border-border">
              <div className={cn("grid h-20 place-items-center", x.b)}>
                <SakhiLogo size={22} tone={x.b === "bg-ink" ? "light" : "pink"} />
              </div>
              <div className="border-t border-border bg-card px-4 py-3">
                <p className="text-[12.5px] font-medium text-foreground">{x.l}</p>
                <p className="mt-0.5 text-[11.5px] text-muted-foreground">SVG and PNG</p>
              </div>
            </div>
          ))}
        </div>
      ),
      code: `<div className="overflow-hidden rounded-2xl border border-border">
  <div className="grid h-20 place-items-center bg-card"><SakhiLogo size={22} tone="pink" /></div>
  <div className="border-t border-border bg-card px-4 py-3">
    <p className="text-[12.5px] font-medium text-foreground">{asset.label}</p>
  </div>
</div>`,
    },
    {
      id: "media-10",
      name: "Aspect ratio reference",
      note: "The ratios this site uses, so a new asset is exported at one of them rather than a fourth.",
      preview: (
        <div className="grid grid-cols-2 items-start gap-4 sm:grid-cols-4">
          {[
            { c: "aspect-9/16", l: "Phone screen" },
            { c: "aspect-4/3", l: "Split visual" },
            { c: "aspect-video", l: "Cover, 16:9" },
            { c: "aspect-square", l: "Gallery tile" },
          ].map((x) => (
            <div key={x.c}>
              <ImagePlaceholder className={x.c} label={x.l} />
              <p className="mt-2 text-center font-mono text-[11px] text-muted-foreground">{x.c}</p>
            </div>
          ))}
        </div>
      ),
      code: `className="aspect-9/16"   /* phone screen */
className="aspect-4/3"    /* split visual */
className="aspect-video"  /* cover image */
className="aspect-square" /* gallery tile */`,
    },
  ],
};
