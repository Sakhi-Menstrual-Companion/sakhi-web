import { Activity, ArrowRight, Check, CloudOff, Heart, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import type { SpecimenGroup } from "./types";

/**
 * The body of a page: what the product does, how it works, and the numbers
 * behind it. Every specimen here uses the site's own tokens (--radius-card,
 * the accent-faint chip fill, the primary-to-secondary ramp) so a variant can
 * be lifted onto a page without bringing new styling with it.
 */

const feats = [
  { icon: Heart, title: "Cycle tracking", body: "Period days, pain, mood, sleep and energy. One tap is enough for an ordinary day." },
  { icon: Activity, title: "Sakhi AI", body: "Answers read from her own logs, in plain language, including when to see a doctor." },
  { icon: ShieldCheck, title: "Doctor report", body: "A clean PDF history to carry into an appointment, exported whenever she wants it." },
  { icon: CloudOff, title: "Works offline", body: "Logging never waits for signal. Her history stays on her device first." },
  { icon: Check, title: "No ads, ever", body: "Nothing is sold, nothing is advertised, and nothing is shared without her." },
  { icon: ArrowRight, title: "Be Her Sakhi", body: "One trusted person can understand her better, only if and when she chooses." },
];

export const featureSpecimens: SpecimenGroup = {
  id: "features",
  label: "Feature sections",
  blurb: "Blocks that say what the product does. Pick by how much each item has to carry: a grid for parity, a list for hierarchy, a split when one item needs a visual.",
  items: [
    {
      id: "feature-01",
      name: "Icon grid, three up",
      note: "The default. Equal weight across items, collapses to one column on phones.",
      preview: (
        <div className="grid gap-5 sm:grid-cols-3">
          {feats.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-white">
                <f.icon className="size-5" aria-hidden="true" />
              </div>
              <h4 className="text-h4 mt-4 text-foreground">{f.title}</h4>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="grid gap-5 sm:grid-cols-3">
  {items.map((f) => (
    <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
      <div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-white">
        <f.icon className="size-5" aria-hidden="true" />
      </div>
      <h4 className="text-h4 mt-4 text-foreground">{f.title}</h4>
      <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{f.body}</p>
    </div>
  ))}
</div>`,
    },
    {
      id: "feature-02",
      name: "Flat list, ruled",
      note: "No cards. Hairlines between rows. Use when there are many items and cards would read as noise.",
      preview: (
        <div className="divide-y divide-border border-y border-border">
          {feats.map((f) => (
            <div key={f.title} className="flex gap-4 py-5">
              <f.icon className="mt-0.5 size-5 shrink-0 text-secondary" aria-hidden="true" />
              <div>
                <h4 className="text-h4 text-foreground">{f.title}</h4>
                <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      ),
      code: `<div className="divide-y divide-border border-y border-border">
  {items.map((f) => (
    <div key={f.title} className="flex gap-4 py-5">
      <f.icon className="mt-0.5 size-5 shrink-0 text-secondary" aria-hidden="true" />
      <div>
        <h4 className="text-h4 text-foreground">{f.title}</h4>
        <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">{f.body}</p>
      </div>
    </div>
  ))}
</div>`,
    },
    {
      id: "feature-03",
      name: "Split, copy and visual",
      note: "One feature that deserves the whole band. Alternate the visual's side down the page.",
      preview: (
        <div className="grid items-center gap-8 sm:grid-cols-2">
          <div>
            <span className="eyebrow">Sakhi AI</span>
            <h4 className="text-h3 mt-3 text-foreground">Answers from her own logs</h4>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
              Not a general chatbot. It reads what she recorded and answers plainly.
            </p>
            <a
              href="#features"
              className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-secondary no-underline hover:underline"
            >
              Read the detail <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <ImagePlaceholder className="aspect-4/3" label="Sakhi AI chat screen" />
        </div>
      ),
      code: `<div className="grid items-center gap-8 sm:grid-cols-2">
  <div>
    <span className="eyebrow">Sakhi AI</span>
    <h3 className="text-h3 mt-3 text-foreground">Answers from her own logs</h3>
    <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">...</p>
  </div>
  <ImagePlaceholder className="aspect-4/3" />
</div>`,
    },
    {
      id: "feature-04",
      name: "Bento grid",
      note: "Unequal tiles, for when one or two features genuinely outrank the rest. Uses the shared BentoGrid.",
      preview: (
        <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-[auto_auto]">
          <div className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:col-span-2 sm:row-span-2">
            <h4 className="text-h4 text-foreground">Cycle logs</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
              Period days, pain, mood, sleep and energy, kept in one place so a pattern can show
              itself over months rather than one bad week.
            </p>
            <ImagePlaceholder className="mt-4 min-h-32 flex-1" label="Calendar screen" />
          </div>
          {[
            { t: "Sakhi AI", b: "Answers read from her own logs, never a general chatbot." },
            { t: "Works offline", b: "Logging never waits for signal, so a weak connection never costs her a day." },
          ].map((x) => (
            <div key={x.t} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <h4 className="text-h4 text-foreground">{x.t}</h4>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{x.b}</p>
            </div>
          ))}
        </div>
      ),
      code: `import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

<BentoGrid>
  <BentoGridItem className="sm:col-span-2 sm:row-span-2" title="Cycle tracking" description="..." header={<ImagePlaceholder />} />
  <BentoGridItem title="Sakhi AI" description="..." />
</BentoGrid>`,
    },
    {
      id: "feature-05",
      name: "Scrolling card rail",
      note: "Cards that run off the right edge. Good for five or more peers where a grid would wrap awkwardly.",
      preview: (
        <div className="-mx-1 flex gap-4 overflow-x-auto px-1 pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
          {[
            { g: "Hormonal", n: "When the signal itself is off.", i: "PCOD / PCOS, Amenorrhea and Thyroid Disorders." },
            { g: "Pain", n: "The pain she was told to expect.", i: "Endometriosis, Dysmenorrhea, Adenomyosis and Menorrhagia." },
            { g: "Mental", n: "Mood that moves with the cycle.", i: "PMDD, Hormonal Mental Health and Postpartum Depression." },
            { g: "Reproductive", n: "What a scan often finds years too late.", i: "Uterine Fibroids, Ovarian Cysts and Cervical Health." },
          ].map((c) => (
            <article key={c.g} className="flex w-60 shrink-0 flex-col rounded-2xl border border-border bg-card p-5">
              <p className="text-[12.5px] font-semibold text-foreground">{c.g}</p>
              <h4 className="mt-1.5 text-[16px] leading-snug font-semibold text-foreground">{c.n}</h4>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{c.i}</p>
              <ImagePlaceholder className="mt-auto aspect-4/3 pt-0" label="Condition art" />
            </article>
          ))}
        </div>
      ),
      code: `import { CardRail } from "@/components/ui/card-rail";

<CardRail label="Condition groups">
  {groups.map((g) => (
    <article key={g.group} className="flex w-80 shrink-0 snap-start flex-col rounded-2xl border border-border bg-card p-7">
      ...
    </article>
  ))}
</CardRail>`,
    },
    {
      id: "feature-06",
      name: "Checklist columns",
      note: "Dense capability list. Two or three columns of ticked lines, no cards, no icons beyond the tick.",
      preview: (
        <ul className="grid list-none gap-x-8 gap-y-3 p-0 sm:grid-cols-2">
          {[
            "Cycle, symptom and mood logging",
            "Calendar and cycle predictions",
            "Sakhi AI, with her own context",
            "Doctor-ready health report",
            "Works fully offline",
            "No ads and no data selling",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-[14px] text-muted-foreground">
              <Check className="mt-px size-4 shrink-0 text-primary" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      ),
      code: `<ul className="grid list-none gap-x-8 gap-y-3 p-0 sm:grid-cols-2">
  {features.map((t) => (
    <li key={t} className="flex items-start gap-2.5 text-[14px] text-muted-foreground">
      <Check className="mt-px size-4 shrink-0 text-primary" aria-hidden="true" />
      {t}
    </li>
  ))}
</ul>`,
    },
    {
      id: "feature-07",
      name: "Alternating splits",
      note: "Several features stacked, the visual swapping sides each time. Keeps a long page moving without new patterns.",
      preview: (
        <div className="space-y-8">
          {[
            { e: "Cycle logs", t: "One tap is enough for an ordinary day", b: "Period days, pain, mood, sleep and energy, without a form to fill in.", r: false },
            { e: "Doctor report", t: "A history she can hand over", b: "A clean PDF of months of logs, exported whenever she wants it.", r: true },
          ].map((f) => (
            <div key={f.e} className="grid items-center gap-6 sm:grid-cols-2">
              <div className={f.r ? "sm:order-2" : ""}>
                <span className="eyebrow">{f.e}</span>
                <h4 className="text-h4 mt-2 text-foreground">{f.t}</h4>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{f.b}</p>
              </div>
              <ImagePlaceholder className={cn("aspect-4/3", f.r && "sm:order-1")} label={f.e} />
            </div>
          ))}
        </div>
      ),
      code: `{features.map((f, i) => (
  <div key={f.title} className="grid items-center gap-6 sm:grid-cols-2">
    <div className={i % 2 ? "sm:order-2" : ""}>...</div>
    <ImagePlaceholder className={cn("aspect-4/3", i % 2 && "sm:order-1")} />
  </div>
))}`,
    },
    {
      id: "feature-08",
      name: "Two column with lead",
      note: "A standing heading on the left, the feature list on the right. Gives a long list a landing point.",
      preview: (
        <div className="grid gap-8 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <span className="eyebrow">What Sakhi does</span>
            <h4 className="text-h3 mt-2 text-foreground">Six things done well</h4>
            <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
              A calm, private companion for her cycle, not another app competing for her attention.
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {feats.slice(0, 4).map((f) => (
              <div key={f.title} className="flex gap-3 py-4">
                <f.icon className="mt-0.5 size-4.5 shrink-0 text-secondary" aria-hidden="true" />
                <div>
                  <p className="text-[14px] font-semibold text-foreground">{f.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      code: `<div className="grid gap-8 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
  <div><span className="eyebrow">What Sakhi does</span><h2 className="text-h3 mt-2">Six things done well</h2></div>
  <div className="divide-y divide-border border-y border-border">{features.map(...)}</div>
</div>`,
    },
    {
      id: "feature-09",
      name: "Numbered feature cards",
      note: "For a set where reading order helps. The counter is quiet so it guides without implying a ranking.",
      preview: (
        <div className="grid gap-4 sm:grid-cols-3">
          {feats.slice(0, 3).map((f, i) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-mono text-[12px] text-primary/60 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="text-h4 mt-2 text-foreground">{f.title}</h4>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="rounded-2xl border border-border bg-card p-6">
  <span className="font-mono text-[12px] text-primary/60 tabular-nums">01</span>
  <h3 className="text-h4 mt-2 text-foreground">{f.title}</h3>
</div>`,
    },
    {
      id: "feature-10",
      name: "Icon row, compact",
      note: "A trust strip rather than a feature section. Four short claims in one line, for directly under a hero.",
      preview: (
        <ul className="flex list-none flex-wrap items-center gap-x-7 gap-y-3 p-0 text-[13px] text-muted-foreground">
          {feats.slice(0, 4).map((f) => (
            <li key={f.title} className="flex items-center gap-2">
              <f.icon className="size-4 text-primary" aria-hidden="true" />
              {f.title}
            </li>
          ))}
        </ul>
      ),
      code: `<ul className="flex list-none flex-wrap items-center justify-center gap-x-7 gap-y-3 p-0 text-[13px] text-muted-foreground">
  {trustRow.map(({ icon: Icon, label }) => (
    <li key={label} className="flex items-center gap-2">
      <Icon className="size-4 text-primary" aria-hidden="true" /> {label}
    </li>
  ))}
</ul>`,
    },
  ],
};

export const processSpecimens: SpecimenGroup = {
  id: "process",
  label: "Process and steps",
  blurb: "Ordered sequences. Only use a numbered treatment when the order genuinely carries meaning, otherwise a feature grid is the honest choice.",
  items: [
    {
      id: "process-01",
      name: "Climbing flow line",
      note: "An SVG curve with nodes riding it at rising heights. The homepage treatment. Needs real width, so it drops to a stack below md.",
      preview: (
        <div className="relative h-44">
          <svg viewBox="0 0 600 160" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
            <defs>
              <linearGradient id="specFlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                <stop offset="14%" stopColor="var(--primary)" />
                <stop offset="86%" stopColor="var(--secondary)" />
                <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,130 C90,126 180,118 260,104 C330,92 380,30 470,20 C520,14 560,12 600,10"
              fill="none"
              stroke="url(#specFlow)"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {[
            { l: "12%", t: "78%" },
            { l: "45%", t: "62%" },
            { l: "78%", t: "12%" },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-[12px] font-semibold text-secondary shadow-card"
              style={{ left: p.l, top: p.t }}
            >
              {i + 1}
            </div>
          ))}
        </div>
      ),
      code: `// See the "How it works" section on src/app/page.tsx for the full
// implementation: an SVG path plus percentage-positioned StepBadge nodes,
// both authored in one 1200x480 coordinate space so nodes stay on the curve.`,
    },
    {
      id: "process-02",
      name: "Numbered rail, horizontal",
      note: "A hairline with numbered nodes across it. Calmer than the flow line and works at any width.",
      preview: (
        <div className="relative grid gap-6 sm:grid-cols-3">
          <div aria-hidden="true" className="absolute inset-x-12 top-5 hidden h-px bg-border sm:block" />
          {[
            { t: "Log what happened today", b: "Period days, pain, mood, sleep and energy." },
            { t: "Ask Sakhi what it means", b: "Answers read from her own logs, in plain language." },
            { t: "Share only if she wants to", b: "Export a report, or invite one trusted person." },
          ].map((s2, i) => (
            <div key={s2.t} className="relative text-center">
              <div className="mx-auto grid size-10 place-items-center rounded-full border border-border bg-card text-[13px] font-semibold text-secondary">
                {i + 1}
              </div>
              <h4 className="text-h4 mt-4 text-foreground">{s2.t}</h4>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{s2.b}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="relative grid gap-6 sm:grid-cols-3">
  <div aria-hidden="true" className="absolute inset-x-12 top-5 hidden h-px bg-border sm:block" />
  {steps.map((s, i) => (
    <div key={s.title} className="relative text-center">
      <div className="mx-auto grid size-10 place-items-center rounded-full border border-border bg-card text-[13px] font-semibold text-secondary">{i + 1}</div>
      <h4 className="text-h4 mt-4 text-foreground">{s.title}</h4>
    </div>
  ))}
</div>`,
    },
    {
      id: "process-03",
      name: "Vertical timeline",
      note: "For dated history rather than instructions. Uses the shared Timeline component.",
      preview: (
        <div className="border-l border-border pl-6">
          {[
            { d: "Jan 2024", t: "Where it began", b: "Sakhi starts as Team 07 in the ISDP Bootcamp at Galgotias University." },
            { d: "Jun 14, 2025", t: "She's live", b: "Sakhi launches on the App Store after a year and a half of research and rebuilds." },
            { d: "Sep 2025", t: "Apple's Success Story", b: "Apple selects Sakhi for its College Students: Success Stories feature." },
          ].map((m) => (
            <div key={m.d} className="relative pb-6 last:pb-0">
              <span className="absolute -left-[1.9rem] top-1.5 size-2.5 rounded-full bg-primary" />
              <p className="font-mono text-[11.5px] tracking-wide text-muted-foreground">{m.d}</p>
              <h4 className="text-h4 mt-1 text-foreground">{m.t}</h4>
              <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">{m.b}</p>
            </div>
          ))}
        </div>
      ),
      code: `import { Timeline } from "@/components/ui/timeline";

<Timeline items={roadmapItems} />`,
    },
    {
      id: "process-04",
      name: "Single panel, divided",
      note: "One bordered vessel split by hairlines. Reads as one process rather than three separate cards.",
      preview: (
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div aria-hidden="true" className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary" />
          <div className="grid sm:grid-cols-3">
            {[
              { t: "Log what happened today", b: "One tap is enough for an ordinary day." },
              { t: "Ask Sakhi what it means", b: "Answers read from her own logs, not the internet." },
              { t: "Share only if she wants to", b: "Both are her choice, and reversible." },
            ].map((s2, i) => (
              <div key={s2.t} className={`p-6 ${i > 0 ? "border-t border-border sm:border-t-0 sm:border-l" : ""}`}>
                <p className="text-[12px] font-semibold text-muted-foreground">0{i + 1}</p>
                <h4 className="text-h4 mt-2 text-foreground">{s2.t}</h4>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{s2.b}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      code: `<div className="overflow-hidden rounded-2xl border border-border bg-card">
  <div aria-hidden="true" className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary" />
  <div className="grid sm:grid-cols-3">
    {steps.map((s, i) => (
      <div key={s.title} className={cn("p-6", i > 0 && "border-t border-border sm:border-t-0 sm:border-l")}>...</div>
    ))}
  </div>
</div>`,
    },
    {
      id: "process-05",
      name: "Ghost numerals",
      note: "Oversized translucent digits behind the copy. Loud, so use it once on a page at most.",
      preview: (
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { t: "Log what happened today", b: "Period days, pain, mood, sleep and energy." },
            { t: "Ask Sakhi what it means", b: "Answers read from her own logs, in plain language." },
            { t: "Share only if she wants to", b: "A doctor report, or one trusted person." },
          ].map((s2, i) => (
            <div key={s2.t} className="relative pt-6">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 text-[4rem] leading-none font-bold text-primary/10 select-none"
              >
                0{i + 1}
              </span>
              <h4 className="text-h4 relative text-foreground">{s2.t}</h4>
              <p className="relative mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{s2.b}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="relative pt-6">
  <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 text-[4rem] leading-none font-bold text-primary/10 select-none">01</span>
  <h4 className="text-h4 relative text-foreground">Log</h4>
</div>`,
    },
    {
      id: "process-06",
      name: "Vertical steps with rule",
      note: "A single line down the left with numbered nodes on it. Reads well on a phone, where a horizontal rail cannot.",
      preview: (
        <div className="relative pl-11">
          <div aria-hidden="true" className="absolute top-2 bottom-2 left-4 w-px bg-border" />
          {[
            { t: "Log what happened today", b: "Period days, pain, mood, sleep and energy." },
            { t: "Ask Sakhi what it means", b: "Answers read from her own logs, in plain language." },
            { t: "Share only if she wants to", b: "Export a report, or invite one trusted person." },
          ].map((x, i) => (
            <div key={x.t} className="relative pb-6 last:pb-0">
              <span className="absolute top-0 -left-11 grid size-8 place-items-center rounded-full border border-border bg-card text-[12px] font-semibold text-secondary">
                {i + 1}
              </span>
              <h4 className="text-h4 text-foreground">{x.t}</h4>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{x.b}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="relative pl-11">
  <div aria-hidden="true" className="absolute top-2 bottom-2 left-4 w-px bg-border" />
  {steps.map((x, i) => (
    <div key={x.title} className="relative pb-6 last:pb-0">
      <span className="absolute top-0 -left-11 grid size-8 place-items-center rounded-full border border-border bg-card text-[12px] font-semibold text-secondary">{i + 1}</span>
    </div>
  ))}
</div>`,
    },
    {
      id: "process-07",
      name: "Steps with screenshots",
      note: "Each step paired with the screen it happens on. The most literal way to show a flow, and the most convincing.",
      preview: (
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { t: "Log", b: "One tap for an ordinary day.", l: "Day view" },
            { t: "Ask", b: "Answers from her own logs.", l: "Sakhi AI" },
            { t: "Share", b: "A report, only if she wants.", l: "Report export" },
          ].map((x, i) => (
            <div key={x.t} className="flex flex-col">
              <ImagePlaceholder className="aspect-9/16" label={x.l} />
              <p className="mt-3 font-mono text-[11.5px] text-primary/60 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h4 className="text-h4 mt-1 text-foreground">{x.t}</h4>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{x.b}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="flex flex-col">
  <ImagePlaceholder className="aspect-9/16" label={step.screen} />
  <p className="mt-3 font-mono text-[11.5px] text-primary/60 tabular-nums">01</p>
  <h3 className="text-h4 mt-1 text-foreground">{step.title}</h3>
</div>`,
    },
    {
      id: "process-08",
      name: "Before and after",
      note: "Two states rather than a sequence. Honest framing for a problem the product changes, not a feature it adds.",
      preview: (
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { l: "Without a record", b: "One remembered bad week, described from memory in a ten minute appointment.", m: true },
            { l: "With months of logs", b: "A dated history the doctor can read, showing the pattern rather than the worst day.", m: false },
          ].map((x) => (
            <div
              key={x.l}
              className={cn(
                "rounded-2xl border p-6",
                x.m ? "border-border bg-muted/40" : "border-secondary bg-card shadow-card"
              )}
            >
              <p className="eyebrow">{x.l}</p>
              <p className="mt-2.5 text-[14px] leading-relaxed text-foreground">{x.b}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className={cn("rounded-2xl border p-6", muted ? "border-border bg-muted/40" : "border-secondary bg-card shadow-card")}>
  <p className="eyebrow">{state.label}</p>
  <p className="mt-2.5 text-[14px] leading-relaxed text-foreground">{state.body}</p>
</div>`,
    },
    {
      id: "process-09",
      name: "Checklist progress",
      note: "A sequence where some steps are already done. Ticked rows are muted so the next action is the loudest thing.",
      preview: (
        <ol className="list-none space-y-3 p-0">
          {[
            { t: "Download Sakhi", d: true },
            { t: "Log your first day", d: true },
            { t: "Ask Sakhi about a pattern", d: false },
            { t: "Export a report before an appointment", d: false },
          ].map((x) => (
            <li key={x.t} className="flex items-center gap-3">
              <span
                className={cn(
                  "grid size-6 shrink-0 place-items-center rounded-full border",
                  x.d ? "border-primary bg-primary text-white" : "border-border bg-card"
                )}
              >
                {x.d && <Check className="size-3.5" aria-hidden="true" />}
              </span>
              <span className={cn("text-[14px]", x.d ? "text-muted-foreground line-through" : "text-foreground")}>
                {x.t}
              </span>
            </li>
          ))}
        </ol>
      ),
      code: `<li className="flex items-center gap-3">
  <span className={cn("grid size-6 shrink-0 place-items-center rounded-full border", done ? "border-primary bg-primary text-white" : "border-border bg-card")}>
    {done && <Check className="size-3.5" aria-hidden="true" />}
  </span>
  <span className={cn("text-[14px]", done ? "text-muted-foreground line-through" : "text-foreground")}>{step}</span>
</li>`,
    },
    {
      id: "process-10",
      name: "Roadmap by year",
      note: "Dated phases rather than instructions. Each year gets a headline and a detail line, so a plan can be read at two depths.",
      preview: (
        <div className="divide-y divide-border border-y border-border">
          {[
            { y: "Now, 2026", h: "Android beta, premium subscription, first campus contracts", d: "v2 launches with Android support. Premium in August. First partnerships from November." },
            { y: "2027", h: "Doctor network, Hindi and regional languages", d: "Full doctor network integration, with Hindi, Tamil, Bengali, Marathi and Telugu." },
          ].map((r) => (
            <div key={r.y} className="grid gap-2 py-5 sm:grid-cols-[8rem_minmax(0,1fr)]">
              <p className="font-mono text-[12px] tracking-wide text-secondary">{r.y}</p>
              <div>
                <p className="text-[14.5px] font-semibold text-foreground">{r.h}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      ),
      code: `import { Timeline } from "@/components/ui/timeline";

<Timeline items={roadmapItems} />`,
    },
  ],
};

export const statSpecimens: SpecimenGroup = {
  id: "stats",
  label: "Stats and metrics",
  blurb: "Numbers. Every one on a Sakhi page needs a real source behind it, so prefer treatments that leave room for a caption.",
  items: [
    {
      id: "stat-01",
      name: "Ruled bar",
      note: "In the reading line, hairline above and below. The lightest possible treatment.",
      preview: (
        <div className="flex flex-wrap gap-x-10 gap-y-6 border-y border-border py-6">
          {[
            { n: "16", l: "conditions covered" },
            { n: "252M", l: "women in Sakhi's India" },
            { n: "49", l: "interviews conducted" },
          ].map((s) => (
            <div key={s.l}>
              <div className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-[30px] leading-none font-semibold text-transparent tabular-nums">
                {s.n}
              </div>
              <div className="mt-2 text-[13px] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      ),
      code: `import { HeroStatBar } from "@/components/ui/page-hero-variants";

<HeroStatBar stats={[{ n: "16", label: "conditions covered" }]} />`,
    },
    {
      id: "stat-02",
      name: "Card grid",
      note: "Boxed figures. Use when stats are the section rather than support for it.",
      preview: (
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { n: "49", l: "Interviews conducted" },
            { n: "16", l: "Conditions researched" },
            { n: "Jun 2025", l: "App Store launch" },
            { n: "Free", l: "No subscription required" },
          ].map((x) => (
            <div key={x.l} className="rounded-2xl border border-border bg-card p-5 text-center">
              <div className="text-[24px] leading-none font-semibold text-secondary tabular-nums">
                {x.n}
              </div>
              <div className="mt-2 text-[12.5px] leading-snug text-muted-foreground">{x.l}</div>
            </div>
          ))}
        </div>
      ),
      code: `<div className="grid gap-4 sm:grid-cols-4">
  {stats.map((s) => (
    <div key={s.label} className="rounded-2xl border border-border bg-card p-5 text-center">
      <div className="text-[26px] leading-none font-semibold text-secondary tabular-nums">{s.value}</div>
      <div className="mt-2 text-[12.5px] text-muted-foreground">{s.label}</div>
    </div>
  ))}
</div>`,
    },
    {
      id: "stat-03",
      name: "Scrolling marquee",
      note: "An endless strip of stat chips. Ambient proof, not something to read closely.",
      preview: (
        <div className="flex gap-2.5 overflow-hidden">
          {[
            { i: Heart, l: "252M women in Sakhi's India" },
            { i: Activity, l: "16 conditions tracked" },
            { i: ShieldCheck, l: "Zero ads. Ever." },
            { i: CloudOff, l: "100% offline-first" },
            { i: Check, l: "Built in India" },
          ].map((chip) => (
            <span
              key={chip.l}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[12.5px] text-foreground"
            >
              <chip.i className="size-3.5 text-secondary" aria-hidden="true" /> {chip.l}
            </span>
          ))}
        </div>
      ),
      code: `import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

<InfiniteMovingCards tone="light" speed="slow" items={marqueeStats} />`,
    },
    {
      id: "stat-04",
      name: "One big number",
      note: "A single figure carrying a whole band. The most emphatic option, so the number had better be worth it.",
      preview: (
        <div className="text-center">
          <div className="text-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tabular-nums">
            252M
          </div>
          <p className="mx-auto mt-3 max-w-[34ch] text-[14.5px] text-muted-foreground">
            Women in Sakhi&rsquo;s India. One number, one caption, nothing else in the band.
          </p>
        </div>
      ),
      code: `<div className="text-center">
  <div className="text-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tabular-nums">252M</div>
  <p className="mx-auto mt-3 max-w-[34ch] text-[14.5px] text-muted-foreground">Caption with the source.</p>
</div>`,
    },
    {
      id: "stat-05",
      name: "Labelled rows",
      note: "Figure and label on one line, ruled between. Best when the labels are long enough to need the width.",
      preview: (
        <div className="divide-y divide-border border-y border-border">
          {[
            { n: "252M", l: "menstruating women in India, the population Sakhi is built for" },
            { n: "16", l: "conditions covered in the health library, from PCOS to anemia" },
            { n: "49", l: "user interviews conducted before the first line of v2 was written" },
          ].map((row) => (
            <div key={row.l} className="flex items-baseline gap-5 py-4">
              <span className="w-20 shrink-0 text-[22px] font-semibold text-secondary tabular-nums">
                {row.n}
              </span>
              <span className="text-[14px] leading-relaxed text-muted-foreground">{row.l}</span>
            </div>
          ))}
        </div>
      ),
      code: `<div className="divide-y divide-border border-y border-border">
  {stats.map((s) => (
    <div key={s.label} className="flex items-baseline gap-5 py-4">
      <span className="w-20 shrink-0 text-[22px] font-semibold text-secondary tabular-nums">{s.n}</span>
      <span className="text-[14px] text-muted-foreground">{s.label}</span>
    </div>
  ))}
</div>`,
    },
    {
      id: "stat-06",
      name: "Split, claim and figures",
      note: "A sentence carrying the meaning, the numbers supporting it. Stops a stat block reading as decoration.",
      preview: (
        <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <span className="eyebrow">Why this matters</span>
            <h4 className="text-h3 mt-2 text-foreground">A cycle is rarely just a cycle</h4>
            <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
              Most women know something feels off years before they get an answer.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { n: "16", l: "conditions covered" },
              { n: "252M", l: "women in Sakhi's India" },
              { n: "49", l: "interviews conducted" },
              { n: "10+", l: "cities reached" },
            ].map((x) => (
              <div key={x.l}>
                <p className="text-[22px] leading-none font-semibold text-secondary tabular-nums">{x.n}</p>
                <p className="mt-1.5 text-[12.5px] leading-snug text-muted-foreground">{x.l}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      code: `<div className="grid gap-8 sm:grid-cols-2">
  <div><span className="eyebrow">Why this matters</span><h2 className="text-h3 mt-2">Claim</h2></div>
  <div className="grid grid-cols-2 gap-5">{stats.map(...)}</div>
</div>`,
    },
    {
      id: "stat-07",
      name: "Comparison pair",
      note: "Two figures set against each other. The contrast is the point, so they share a rule rather than sitting in separate cards.",
      preview: (
        <div className="grid divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {[
            { n: "7 years", l: "commonly cited delay before an endometriosis diagnosis", s: true },
            { n: "3 months", l: "of logs is often enough to show a pattern to a doctor", s: false },
          ].map((x) => (
            <div key={x.l} className="px-0 py-6 sm:px-6 sm:first:pl-0">
              <p
                className={cn(
                  "text-[28px] leading-none font-semibold tabular-nums",
                  x.s ? "text-muted-foreground" : "text-secondary"
                )}
              >
                {x.n}
              </p>
              <p className="mt-2 max-w-[30ch] text-[13px] leading-relaxed text-muted-foreground">{x.l}</p>
              {x.s && (
                <p className="mt-2 text-[11.5px] text-muted-foreground">
                  Source needed, verify before publishing.
                </p>
              )}
            </div>
          ))}
        </div>
      ),
      code: `<div className="grid divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
  {pair.map((x) => <div key={x.label} className="py-6 sm:px-6 sm:first:pl-0">...</div>)}
</div>`,
    },
    {
      id: "stat-08",
      name: "Progress meter",
      note: "A figure with its share shown as a bar. Only use where a proportion is genuinely meaningful, never for decoration.",
      preview: (
        <div className="max-w-md space-y-4">
          {[
            { l: "Conditions documented", v: 16, m: 16 },
            { l: "Languages supported", v: 1, m: 5 },
          ].map((x) => (
            <div key={x.l}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[13.5px] text-foreground">{x.l}</span>
                <span className="font-mono text-[12.5px] text-muted-foreground tabular-nums">
                  {x.v} / {x.m}
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                  style={{ width: `${(x.v / x.m) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      ),
      code: `<div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
  <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" style={{ width: \`\${pct}%\` }} />
</div>`,
    },
    {
      id: "stat-09",
      name: "Figure with source link",
      note: "The only correct way to publish a research number on this site. The citation sits with the figure, not in a footer.",
      preview: (
        <div className="max-w-md rounded-2xl border border-border bg-card p-6">
          <p className="text-[30px] leading-none font-semibold text-secondary tabular-nums">252M</p>
          <p className="mt-2.5 text-[14px] leading-relaxed text-foreground">
            Menstruating women in India, the population Sakhi is built for.
          </p>
          <p className="mt-3 border-l-2 border-border pl-3 text-[12px] leading-relaxed text-muted-foreground">
            Source needed, verify before pitching.
          </p>
        </div>
      ),
      code: `<p className="mt-3 border-l-2 border-border pl-3 text-[12px] leading-relaxed text-muted-foreground">
  <a href={source.url} className="text-secondary no-underline hover:underline">{source.name}</a>, {source.year}
</p>`,
    },
    {
      id: "stat-10",
      name: "Dark stat band",
      note: "Figures on the ink fill, for a page that needs one moment of weight. Uses primary-soft, since primary fails contrast on dark.",
      bleed: true,
      preview: (
        <div className="grid gap-6 bg-ink px-8 py-10 sm:grid-cols-3">
          {[
            { n: "3B", l: "downloads, the long game" },
            { n: "1B", l: "monthly active users" },
            { n: "100+", l: "languages supported" },
          ].map((x) => (
            <div key={x.l} className="text-center">
              <p className="text-[30px] leading-none font-semibold text-primary-soft tabular-nums">{x.n}</p>
              <p className="mt-2 text-[12.5px] text-ink-muted">{x.l}</p>
            </div>
          ))}
        </div>
      ),
      code: `<Section tone="ink">
  <div className="grid gap-6 sm:grid-cols-3">
    {northStar.map((x) => (
      <div key={x.label} className="text-center">
        <p className="text-[30px] leading-none font-semibold text-primary-soft tabular-nums">{x.n}</p>
        <p className="mt-2 text-[12.5px] text-ink-muted">{x.label}</p>
      </div>
    ))}
  </div>
</Section>`,
    },
  ],
};

export const proseSpecimens: SpecimenGroup = {
  id: "prose",
  label: "Long-form and blog",
  blurb: "Article layouts. Measure is the whole game here: body copy never runs the full container width.",
  items: [
    {
      id: "prose-01",
      name: "Article header",
      note: "Kicker, title, byline row. Left-aligned and narrow, unlike a page header.",
      preview: (
        <div className="max-w-[46ch]">
          <span className="eyebrow">Research</span>
          <h3 className="text-h3 mt-3 text-foreground">What 49 interviews actually told us</h3>
          <div className="mt-4 flex items-center gap-3 text-[13px] text-muted-foreground">
            <span className="grid size-7 place-items-center rounded-full bg-secondary text-[11px] font-semibold text-white">
              KK
            </span>
            Karan Kumar
            <span aria-hidden="true">&middot;</span>
            <time>12 Aug 2026</time>
          </div>
        </div>
      ),
      code: `<div className="max-w-[46ch]">
  <span className="eyebrow">Research</span>
  <h1 className="text-h1 mt-3 text-foreground">Title</h1>
  <div className="mt-4 flex items-center gap-3 text-[13px] text-muted-foreground">
    <span className="grid size-7 place-items-center rounded-full bg-secondary text-[11px] font-semibold text-white">KK</span>
    Karan Kumar <span aria-hidden="true">&middot;</span> <time>12 Aug 2026</time>
  </div>
</div>`,
    },
    {
      id: "prose-02",
      name: "Body measure",
      note: "The reading column. 66ch maximum, generous leading, no justification.",
      preview: (
        <div className="max-w-[66ch] text-[15.5px] leading-[1.75] text-muted-foreground">
          <p>
            A cycle is rarely just a cycle. Most women know something feels off years before anyone
            measures it, and the gap between noticing and being believed is where the harm happens.
          </p>
          <p className="mt-4">
            Sakhi does not close that gap by itself. It closes the evidence half of it.
          </p>
        </div>
      ),
      code: `<div className="max-w-[66ch] text-[15.5px] leading-[1.75] text-muted-foreground">
  <p>First paragraph.</p>
  <p className="mt-4">Second paragraph.</p>
</div>`,
    },
    {
      id: "prose-03",
      name: "Pull quote",
      note: "A rule on the left, larger type, no quotation marks. Breaks a long article without shouting.",
      preview: (
        <blockquote className="max-w-[52ch] border-l-2 border-primary pl-5">
          <p className="text-[18px] leading-relaxed text-foreground">
            Product is not what you build. It is the problem you solve.
          </p>
          <footer className="mt-2 text-[13px] text-muted-foreground">Karan Kumar, Founder</footer>
        </blockquote>
      ),
      code: `<blockquote className="max-w-[52ch] border-l-2 border-primary pl-5">
  <p className="text-[18px] leading-relaxed text-foreground">Quote text.</p>
  <footer className="mt-2 text-[13px] text-muted-foreground">Attribution</footer>
</blockquote>`,
    },
    {
      id: "prose-04",
      name: "Post card grid",
      note: "Index of articles. Image well, kicker, title, date. Titles wrap to two lines, so cards are equal height by design.",
      preview: (
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { k: "Research", t: "What 49 interviews actually told us about tracking", d: "12 Aug 2026" },
            { k: "Product", t: "Why Sakhi is built offline first", d: "28 Jul 2026" },
            { k: "Story", t: "From a bootcamp assignment to the App Store", d: "02 Jul 2026" },
          ].map((post) => (
            <article key={post.t} className="flex flex-col rounded-2xl border border-border bg-card p-5">
              <ImagePlaceholder className="aspect-16/9" label="Cover image" />
              <p className="eyebrow mt-4">{post.k}</p>
              <h4 className="text-h4 mt-2 leading-snug text-foreground">{post.t}</h4>
              <time className="mt-auto pt-3 text-[12.5px] text-muted-foreground">{post.d}</time>
            </article>
          ))}
        </div>
      ),
      code: `<article className="flex flex-col rounded-2xl border border-border bg-card p-5">
  <ImagePlaceholder className="aspect-16/9" />
  <p className="eyebrow mt-4">{post.kicker}</p>
  <h3 className="text-h4 mt-2 text-foreground">{post.title}</h3>
  <time className="mt-auto pt-3 text-[12.5px] text-muted-foreground">{post.date}</time>
</article>`,
    },
    {
      id: "prose-05",
      name: "Featured post, split",
      note: "One lead article across the top of an index, image beside copy.",
      preview: (
        <article className="grid items-center gap-6 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2">
          <ImagePlaceholder className="aspect-4/3" label="Cover image" />
          <div>
            <p className="eyebrow">Featured</p>
            <h4 className="text-h3 mt-2 leading-snug text-foreground">
              What 49 interviews told us about tracking
            </h4>
            <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
              Most women we spoke to had tried an app before and left it. The reasons were
              remarkably consistent, and almost none of them were about features.
            </p>
            <time className="mt-3 block text-[12.5px] text-muted-foreground">12 Aug 2026</time>
          </div>
        </article>
      ),
      code: `<article className="grid items-center gap-6 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2">
  <ImagePlaceholder className="aspect-4/3" />
  <div>
    <p className="eyebrow">Featured</p>
    <h2 className="text-h3 mt-2 text-foreground">{post.title}</h2>
  </div>
</article>`,
    },
    {
      id: "prose-06",
      name: "Article with side rail",
      note: "Body copy beside a sticky contents list. For anything long enough that a reader needs to know where they are.",
      preview: (
        <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_12rem]">
          <div className="max-w-[62ch] text-[15px] leading-[1.75] text-muted-foreground">
            <p>
              Most women we spoke to had tried a tracking app before and left it. The reasons were
              remarkably consistent, and almost none of them were about missing features.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-2">On this page</p>
            <ul className="list-none space-y-1 p-0 text-[13px] text-muted-foreground">
              {["What we asked", "What they said", "What we changed"].map((t, i) => (
                <li key={t} className={i === 0 ? "font-semibold text-secondary" : ""}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
      code: `<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_12rem]">
  <article className="max-w-[66ch]">{children}</article>
  <nav className="sticky top-[calc(var(--nav-clearance)+1.5rem)] self-start">{toc}</nav>
</div>`,
    },
    {
      id: "prose-07",
      name: "Key takeaway box",
      note: "A summary lifted out of the flow. Blush fill so it reads as a pause rather than a warning.",
      preview: (
        <div className="max-w-[60ch] rounded-2xl bg-accent-faint p-6">
          <p className="eyebrow">In short</p>
          <p className="mt-2 text-[14.5px] leading-relaxed text-foreground">
            Women did not leave their tracking apps because a feature was missing. They left because
            the app asked more of them than it gave back.
          </p>
        </div>
      ),
      code: `<div className="max-w-[60ch] rounded-2xl bg-accent-faint p-6">
  <p className="eyebrow">In short</p>
  <p className="mt-2 text-[14.5px] leading-relaxed text-foreground">{summary}</p>
</div>`,
    },
    {
      id: "prose-08",
      name: "Compact post list",
      note: "An index without images. Faster to scan than cards once there are more than about eight posts.",
      preview: (
        <div className="divide-y divide-border border-y border-border">
          {[
            { k: "Research", t: "What 49 interviews told us about tracking", d: "12 Aug 2026" },
            { k: "Product", t: "Why Sakhi is built offline first", d: "28 Jul 2026" },
            { k: "Story", t: "From a bootcamp assignment to the App Store", d: "02 Jul 2026" },
          ].map((post) => (
            <a
              key={post.t}
              href="#prose"
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 no-underline transition-colors hover:bg-muted/40"
            >
              <span className="min-w-0">
                <span className="text-[14.5px] font-semibold text-foreground">{post.t}</span>
                <span className="mt-0.5 block text-[12.5px] text-muted-foreground">{post.k}</span>
              </span>
              <time className="shrink-0 font-mono text-[12px] text-muted-foreground">{post.d}</time>
            </a>
          ))}
        </div>
      ),
      code: `<div className="divide-y divide-border border-y border-border">
  {posts.map((p) => (
    <Link key={p.slug} href={p.href} className="flex flex-wrap items-baseline justify-between gap-x-6 py-4 no-underline hover:bg-muted/40">
      <span className="text-[14.5px] font-semibold text-foreground">{p.title}</span>
      <time className="shrink-0 font-mono text-[12px] text-muted-foreground">{p.date}</time>
    </Link>
  ))}
</div>`,
    },
    {
      id: "prose-09",
      name: "Reference list",
      note: "Sources at the foot of an article. Numbered, each linking out, so a claim in the body can point at one.",
      preview: (
        <div className="max-w-[62ch]">
          <p className="eyebrow mb-3">Sources</p>
          <ol className="list-none space-y-2.5 p-0">
            {[
              "Study or report title, publisher, year.",
              "Second reference, publisher, year.",
            ].map((r, i) => (
              <li key={r} className="grid grid-cols-[1.75rem_minmax(0,1fr)] text-[13px]">
                <span className="font-mono text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-muted-foreground">{r}</span>
              </li>
            ))}
          </ol>
        </div>
      ),
      code: `<ol className="list-none space-y-2.5 p-0">
  {sources.map((r, i) => (
    <li key={r.url} className="grid grid-cols-[1.75rem_minmax(0,1fr)] text-[13px]">
      <span className="font-mono text-muted-foreground tabular-nums">{String(i + 1).padStart(2, "0")}</span>
      <a href={r.url} className="leading-relaxed text-secondary no-underline hover:underline">{r.title}</a>
    </li>
  ))}
</ol>`,
    },
    {
      id: "prose-10",
      name: "Author footer",
      note: "Who wrote it and why they would know. Closes an article without asking the reader for anything.",
      preview: (
        <div className="flex max-w-xl items-start gap-4 border-t border-border pt-6">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-[14px] font-semibold text-white">
            KK
          </span>
          <div>
            <p className="text-[14px] font-semibold text-foreground">Karan Kumar</p>
            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
              Founder of Sakhi. Has been building it since the ISDP Bootcamp in January 2024.
            </p>
          </div>
        </div>
      ),
      code: `<div className="flex items-start gap-4 border-t border-border pt-6">
  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-[14px] font-semibold text-white">{author.initials}</span>
  <div>
    <p className="text-[14px] font-semibold text-foreground">{author.name}</p>
    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{author.bio}</p>
  </div>
</div>`,
    },
  ],
};
