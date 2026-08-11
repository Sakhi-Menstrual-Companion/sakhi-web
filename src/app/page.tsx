import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  Check,
  CloudOff,
  FileText,
  Heart,
  LockKeyhole,
  MapPin,
  MessageCircleHeart,
  NotebookPen,
  Plus,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Spotlight } from "@/components/ui/spotlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { CardRail } from "@/components/ui/card-rail";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const appStoreUrl = "https://apps.apple.com/app/id6742219623";

// PLACEHOLDER, swap in the real Play Store link.
// Derived from the applicationId in 02-Android/app/build.gradle.kts
// ("com.galgotiasuniversity.rachnasakhi") so it is a sane default, but it has
// not been checked against the live listing.
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.galgotiasuniversity.rachnasakhi";

const trustRow = [
  { icon: NotebookPen, label: "Log your day in one tap" },
  { icon: ShieldCheck, label: "No ads, no data selling" },
  { icon: CloudOff, label: "Works offline" },
  { icon: Users, label: "Invite one trusted person" },
];

/* Reused from the Health Library page, so the two pages never disagree.
   Icons are pinned to --secondary rather than inheriting the chip's text
   colour, so they stay the same warm pink pop whichever tone the marquee
   band ends up in. */
const marqueeStats = [
  { icon: <Users className="size-3.5 text-secondary" aria-hidden="true" />, label: "252M women in Sakhi's India" },
  { icon: <Activity className="size-3.5 text-secondary" aria-hidden="true" />, label: "16 conditions tracked" },
  { icon: <ShieldCheck className="size-3.5 text-secondary" aria-hidden="true" />, label: "Zero ads. Ever." },
  { icon: <CloudOff className="size-3.5 text-secondary" aria-hidden="true" />, label: "100% offline-first" },
  { icon: <MapPin className="size-3.5 text-secondary" aria-hidden="true" />, label: "Built in India" },
  { icon: <Smartphone className="size-3.5 text-secondary" aria-hidden="true" />, label: "Live on the App Store" },
];

const steps = [
  {
    n: "01",
    icon: NotebookPen,
    title: "Log what happened today",
    body: "Period days, pain, mood, sleep, energy and notes. One tap is enough for an ordinary day.",
  },
  {
    n: "02",
    icon: MessageCircleHeart,
    title: "Ask Sakhi what it means",
    body: "Sakhi reads her own logs and answers plainly, including when a doctor should be involved.",
  },
  {
    n: "03",
    icon: LockKeyhole,
    title: "Share only if she wants to",
    body: "Export a doctor report, or invite one trusted person. Both are her choice, and reversible.",
  },
];

/* `items` stays the single source of truth for the condition names: the card
   copy reads them out as a sentence rather than repeating them in `desc`, so
   the list and the "16 conditions" claim can never drift apart. `desc` is only
   the trailing line about what Sakhi actually does with them. */
const conditionGroups = [
  {
    group: "Hormonal",
    note: "When the signal itself is off.",
    items: ["PCOD / PCOS", "Amenorrhea", "Thyroid Disorders"],
    desc: "Sakhi logs the cycle changes that point to them, month after month.",
  },
  {
    group: "Pain",
    note: "The pain she was told to expect.",
    items: ["Endometriosis", "Dysmenorrhea", "Adenomyosis", "Menorrhagia"],
    desc: "Every episode gets a date and a severity, so it becomes evidence instead of memory.",
  },
  {
    group: "Mental",
    note: "Mood that moves with the cycle.",
    items: ["PMDD", "Hormonal Mental Health", "Postpartum Depression"],
    desc: "Mood is tracked beside the cycle, so the two can be read together.",
  },
  {
    group: "Reproductive",
    note: "What a scan often finds years too late.",
    items: ["Uterine Fibroids", "Ovarian Cysts", "Fertility Challenges", "Cervical Health"],
    desc: "The history is ready before the appointment, not written in the waiting room.",
  },
  {
    group: "Systemic",
    note: "What the cycle quietly costs her body.",
    items: ["Anemia", "Bone Health"],
    desc: "Tracked alongside the cycle, because that is where the cost shows up.",
  },
];

/** ["A", "B", "C"] -> "A, B and C", so a list can be read out as a sentence. */
function toSentenceList(items: string[]) {
  if (items.length < 2) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

/* ₹49/month is the figure in 12-Finance/Business-Plans/Sakhi-Business-Plan-v2.md.
   It is an internal plan, not a live price: nothing is purchasable in the app
   today, so the tier is labelled as planned rather than available. */
const plans = [
  {
    name: "Free",
    tagline: "Everything she needs to understand her body",
    price: "₹0",
    unit: "always",
    featured: true,
    ribbon: "Available now",
    features: [
      "Cycle, symptom and mood logging",
      "Calendar and cycle predictions",
      "Sakhi AI, with her own context",
      "Doctor-ready health report",
      "Be Her Sakhi, one trusted person",
      "Works fully offline",
    ],
    cta: { label: "Download Sakhi", href: appStoreUrl, variant: "default" as const },
  },
  {
    name: "Sakhi Plus",
    tagline: "Deeper guidance, for those who want it",
    price: "₹49",
    unit: "/ month, planned",
    featured: false,
    ribbon: "Not live yet",
    features: [
      "Everything in Free",
      "Deeper cycle and symptom insight",
      "Guidance on diet and routine",
      "Longer report history",
    ],
    cta: { label: "Not available yet", href: null, variant: "outline" as const },
  },
  {
    name: "Campus & NGO",
    tagline: "For institutions running health programmes",
    price: "Let's talk",
    unit: "",
    featured: false,
    ribbon: null,
    features: [
      "Awareness sessions and workshops",
      "Onboarding support for students",
      "Aggregate, anonymised programme reporting",
    ],
    cta: { label: "Start a conversation", href: "/contribute", variant: "outline" as const },
  },
];

const faqs = [
  {
    q: "Is Sakhi free?",
    a: "Yes. Cycle logging, symptoms, the calendar, Sakhi AI, the doctor report and Be Her Sakhi are all free, and there are no ads.",
  },
  {
    q: "Can Sakhi diagnose a condition?",
    a: "No. Sakhi is not a doctor and does not diagnose anything. It helps her notice patterns and carry a clear history into an appointment, so a qualified doctor has better information to work with.",
  },
  {
    q: "Who can see what she logs?",
    a: "Only her. Nothing is shared with anyone unless she chooses to invite one trusted person through Be Her Sakhi, and she can remove that access at any time.",
  },
  {
    q: "What is Be Her Sakhi?",
    a: "It is an optional way for one person she trusts to understand her better. It is entirely her decision, it is never required, and it can be turned off whenever she wants.",
  },
  {
    q: "Does it work without internet?",
    a: "Yes. Sakhi is built offline-first, so logging never depends on signal and her history stays on her device first.",
  },
  {
    q: "Which conditions does Sakhi help track?",
    a: "Sixteen, across hormonal, pain, mental health, reproductive and systemic categories, including PCOD, endometriosis, PMDD, fibroids and anemia.",
  },
];

function AppleMark({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/* Redrawn Google Play mark: the play triangle split into four colour regions
   by its spine midpoint and fold point. */
function PlayMark({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="3.5,1.6 3.5,12 13.4,12" fill="#00D95F" />
      <polygon points="3.5,12 3.5,22.4 13.4,12" fill="#00A0FF" />
      <polygon points="3.5,1.6 13.4,12 20.7,12" fill="#FFCE00" />
      <polygon points="3.5,22.4 13.4,12 20.7,12" fill="#FF3A44" />
    </svg>
  );
}


/**
 * Used on both the white hero and the dark closing band, and only ever
 * styled for the dark one — the Google Play button's border/text/hover were
 * all white-on-white on the light background, effectively invisible but for
 * the Play triangle icon. `tone` picks the readable variant for wherever
 * it's actually placed.
 */
function StoreButtons({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      {/* Plain black pill, no gradient ring: the store buttons sit directly
          under the headline and the animated border was pulling attention off
          the copy. */}
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
      >
        <AppleMark /> App Store
      </a>
      <Button
        asChild
        size="lg"
        variant="outline"
        className={cn(
          "w-full sm:w-auto",
          tone === "dark" && "border-white/15 bg-transparent text-white hover:bg-white/10"
        )}
      >
        <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
          <PlayMark /> Google Play
        </a>
      </Button>
    </div>
  );
}

/** The faint dot-grid ambience behind the hero, radially masked so it fades toward the edges. */
function DotGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 select-none ${className ?? ""}`}
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
 * A step marker on the "how it works" flow line: white rounded pentagon,
 * brand-pink icon, soft shadow.
 *
 * The five corners are rounded by stroking the polygon in its own fill colour
 * with a round linejoin, rather than hand-writing five arc segments. One
 * `points` list stays the single source of truth for the shape, and the
 * stroke width is the corner radius.
 */
function StepBadge({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <div className={cn("relative grid size-16 place-items-center", className)}>
      {/* Soft pink bloom behind the pentagon, so a node reads as sitting on
          the line with a little light around it rather than pasted on top. */}
      <span
        aria-hidden="true"
        className="absolute size-16 rounded-full bg-primary/15 blur-lg"
      />
      <svg
        viewBox="0 0 56 56"
        className="absolute inset-0 size-full drop-shadow-[0_12px_22px_rgba(163,22,84,0.16)]"
        aria-hidden="true"
      >
        <polygon
          points="28,8 47,21.8 39.8,44.2 16.2,44.2 9,21.8"
          fill="var(--card)"
          stroke="var(--card)"
          strokeWidth="14"
          strokeLinejoin="round"
        />
      </svg>
      {/* 1.6 rather than lucide's default 2: a lighter stroke keeps the mark
          delicate at this size instead of blocky. */}
      <Icon className="relative size-6 text-secondary" strokeWidth={1.6} aria-hidden="true" />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* ---------------------------------------------------------------- hero */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <DotGrid className="opacity-70" />
        <Spotlight className="-top-40 left-0 lg:-top-24 lg:left-40" fill="var(--primary)" />
        <Spotlight className="top-10 right-0 lg:top-0 lg:right-20" fill="var(--secondary)" />

        {/* pb-0, not the usual section padding: the hand mockup is meant to run
            all the way down to the marquee bar and sit flush on that divider,
            so the wrist is cut by the border rather than floating above it. */}
        <Container className="relative z-10 flex flex-col items-center pt-[calc(var(--nav-clearance)+3.5rem)] pb-0 text-center sm:pt-[calc(var(--nav-clearance)+5.5rem)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-[13px] font-medium text-muted-foreground backdrop-blur-sm">
            <span aria-hidden="true">🇮🇳</span>
            Developed in India
          </div>

          <h1 className="text-display mt-7 max-w-[16ch] text-foreground">
            Sakhi knows{" "}
            <span className="animate-gradient-x bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              your body
            </span>
          </h1>

          <p className="text-lead mt-7 max-w-[46ch] text-muted-foreground">
            Log your cycle, ask the questions you would never Google, and keep one
            trusted person close when you choose.
          </p>

          <div className="mt-10">
            <StoreButtons />
          </div>

          <ul className="mt-10 flex list-none flex-wrap items-center justify-center gap-x-7 gap-y-3 p-0 text-[13px] text-muted-foreground">
            {trustRow.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-4 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          {/* hero visual: the real app on a real phone in a real hand. No card
              frame around it — the PNG already carries its own phone bezel
              and hand silhouette on a transparent background, so a bordered
              container would just clip the hand. */}
          <div className="mt-20 flex w-full items-center justify-center sm:mt-24">
            {/* translate-x-[9%]: the phone itself sits left-of-centre inside
                the source PNG's own canvas (the wrist runs off the right edge
                to fill the frame), so centring the <img> box centres the hand,
                not the phone. This nudges the phone's bezel to true centre;
                the extra wrist that runs past the right edge is caught by the
                section's overflow-hidden. */}
            <Image
              src="/assets/phone-mockup.png"
              alt="A hand holding an iPhone showing the Sakhi app open on the Day view: day 1 of period, August 2026 calendar, and a mood check-in prompt"
              width={802}
              height={1212}
              priority
              quality={100}
              className="h-auto w-90 translate-x-8 select-none drop-shadow-[0_35px_45px_rgba(163,22,84,0.22)] sm:w-md sm:translate-x-10 lg:w-125 lg:translate-x-11"
              sizes="(max-width: 640px) 360px, (max-width: 1024px) 448px, 500px"
            />
          </div>
        </Container>
      </section>

      {/* --------------------------------------------------------------- marquee
          First pass was a flat --ink black band; second pass swapped that for
          a painted pastel gradient strip — which was worse, because a solid
          colour banner isn't how depth reads anywhere else on this site. Every
          other section gets its depth from a soft blurred glow plus a faint
          dot-grid behind plain white. This uses that same recipe instead of
          inventing a new one. */}
      <section className="relative overflow-hidden border-y border-border bg-background py-4">
        <DotGrid className="opacity-50" />
        <Spotlight className="top-1/2 left-1/2 h-64 w-2xl -translate-x-1/2 -translate-y-1/2" fill="var(--primary)" />
        <div className="relative z-10">
          <InfiniteMovingCards items={marqueeStats} speed="slow" tone="light" />
        </div>
      </section>

      {/* ------------------------------------------------------------ features */}
      <section className="border-b border-border bg-background px-6 py-24 sm:px-8 sm:py-28">
        <Container>
          <div className="mx-auto max-w-[42rem] text-center">
            <span className="eyebrow">What Sakhi does</span>
            <h2 className="text-h2 mt-4 text-foreground">Six things done well, nothing done behind her back</h2>
            <p className="text-lead mx-auto mt-5 max-w-[36rem] text-muted-foreground">
              A calm, private companion for her cycle, not another app competing for her attention.
            </p>
          </div>

          <BentoGrid className="mt-16">
            <BentoGridItem
              className="sm:col-span-2 lg:col-span-2 lg:row-span-4"
              header={<ImagePlaceholder />}
              icon={<NotebookPen className="size-4" aria-hidden="true" />}
              title="Cycle logs"
              description="Period, pain, mood, sleep, energy and symptoms in one place, so the pattern becomes visible."
            />
            <BentoGridItem
              className="sm:col-span-2 lg:col-span-2 lg:row-span-3"
              header={<ImagePlaceholder />}
              icon={<MessageCircleHeart className="size-4" aria-hidden="true" />}
              title="Sakhi AI"
              description="Answers drawn from what she has actually logged, not a generic script."
            />
            <BentoGridItem
              className="lg:row-span-3"
              icon={<FileText className="size-4" aria-hidden="true" />}
              title="Doctor report"
              description="A clean health history to take into the ten-minute appointment."
            />
            <BentoGridItem
              className="lg:row-span-3"
              icon={<Heart className="size-4" aria-hidden="true" />}
              title="Be Her Sakhi"
              description="One trusted person can understand her better, only if and when she chooses."
            />
            <BentoGridItem
              className="lg:col-span-2 lg:row-span-2"
              icon={<CloudOff className="size-4" aria-hidden="true" />}
              title="Works offline"
              description="Logging never depends on signal. Her history stays on her device first, always."
            />
          </BentoGrid>
        </Container>
      </section>

      {/* -------------------------------------------------------- how it works */}
      <section className="border-b border-border bg-background-blush px-6 py-24 sm:px-8 sm:py-28">
        <Container>
          <div className="mx-auto max-w-[42rem] text-center">
            <span className="eyebrow">How it works</span>
            <h2 className="text-h2 mt-4 text-foreground">Three steps, and none of them rush her</h2>
            <p className="text-lead mx-auto mt-5 max-w-[36rem] text-muted-foreground">
              Sakhi is built to be opened for thirty seconds a day, not to demand attention.
            </p>
          </div>

          {/* One S-curve climbing left to right, each stage a white pentagon
              node riding it at its own height. Sakhi's own primary→secondary
              pink runs the length of the line, and it fades to transparent at
              both ends so the flow reads as passing through the section
              rather than starting and stopping inside it.

              Geometry is authored in the SVG's own 1200x480 coordinate space
              and mirrored into the node positions as percentages of the same
              box (168/1200 = 14%, 340/480 = 70.83%, and so on). That is the
              one thing holding the nodes on the line: the SVG stretches with
              `preserveAspectRatio="none"` while the container height is
              fixed, so both scale identically and a node stays on the curve
              at every width. `vectorEffect="non-scaling-stroke"` keeps the
              stroke an even weight under that non-uniform stretch, which it
              otherwise would not be.

              Labels hang off their own node (bottom-full / top-full) rather
              than sitting in a shared row, so each one follows its node's
              height. Step 1's goes above because nothing is below it; steps
              2 and 3 go below, into the space the rising curve vacates.

              The box holds a 5:2 aspect rather than a fixed height, so the
              curve keeps the exact sweep it was drawn with at every width
              instead of being squashed steeper as the container narrows —
              a fixed height did exactly that and cost the line its long,
              gentle rise. min-h-96 is the floor that keeps step 2's label
              inside the box once the ratio would otherwise go too short.

              Below md the line is dropped entirely: a diagonal needs real
              width to read as one, so phones get a plain stacked list using
              the same pentagon nodes. */}
          <div className="relative mt-20 hidden aspect-5/2 min-h-96 md:block">
            <svg
              viewBox="0 0 1200 480"
              preserveAspectRatio="none"
              className="absolute inset-0 size-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="stepFlow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                  <stop offset="12%" stopColor="var(--primary)" stopOpacity="1" />
                  <stop offset="70%" stopColor="var(--secondary)" stopOpacity="1" />
                  <stop offset="93%" stopColor="var(--secondary)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
                </linearGradient>
                <filter id="stepGlow" x="-10%" y="-60%" width="120%" height="220%">
                  <feGaussianBlur stdDeviation="10" />
                </filter>
              </defs>
              {/* Same path twice: a blurred copy underneath for the soft pink
                  halo, the crisp line on top. */}
              <path
                d="M0,350 C60,350 110,344 168,340 C260,334 430,312 552,290 C630,270 810,50 900,40 C1000,30 1110,26 1200,24"
                fill="none"
                stroke="url(#stepFlow)"
                strokeWidth="10"
                strokeLinecap="round"
                filter="url(#stepGlow)"
                opacity="0.4"
              />
              <path
                d="M0,350 C60,350 110,344 168,340 C260,334 430,312 552,290 C630,270 810,50 900,40 C1000,30 1110,26 1200,24"
                fill="none"
                stroke="url(#stepFlow)"
                strokeWidth="6"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Step 1 — low on the line, label above it. */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "14%", top: "70.8333%" }}>
              <StepBadge icon={steps[0].icon} />
              <div className="absolute bottom-full left-1/2 mb-5 w-52 -translate-x-9 text-left lg:w-60">
                <h3 className="text-h4 text-foreground">{steps[0].title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{steps[0].body}</p>
              </div>
            </div>

            {/* Step 2 — start of the climb, label below. */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "46%", top: "60.4167%" }}>
              <StepBadge icon={steps[1].icon} />
              <div className="absolute top-full left-1/2 mt-5 w-52 -translate-x-9 text-left lg:w-60">
                <h3 className="text-h4 text-foreground">{steps[1].title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{steps[1].body}</p>
              </div>
            </div>

            {/* Step 3 — crest, label below. Held at 75% rather than further
                right so the label still clears the container at md. */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "75%", top: "8.3333%" }}>
              <StepBadge icon={steps[2].icon} />
              <div className="absolute top-full left-1/2 mt-5 w-52 -translate-x-9 text-left lg:w-60">
                <h3 className="text-h4 text-foreground">{steps[2].title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{steps[2].body}</p>
              </div>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col gap-10 text-center md:hidden">
            {steps.map(({ n, icon, title, body }) => (
              <div key={n} className="flex flex-col items-center">
                <StepBadge icon={icon} className="mb-4" />
                <h3 className="text-h4 text-foreground">{title}</h3>
                <p className="mt-2 max-w-88 text-[14.5px] leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------- conditions
          Header left, link right, then a scrolling rail of equal-height cards:
          the heading block is left-aligned here rather than centred like every
          other section on the page, because a centred heading over a row that
          deliberately runs off the right edge reads as a mistake rather than
          an invitation to scroll.

          The old "All 16 conditions" card at the end of the grid is gone. Its
          job — get to the health library — is the header link now, which is
          where a reader looks for it before scrolling through five cards. */}
      {/* overflow-x-clip because the rail inside bleeds to the viewport edges
          using vw units, and vw counts the vertical scrollbar's width while the
          content box does not. That leaves the bleed a couple of pixels wider
          than the page on a classic-scrollbar browser, which was enough to give
          the whole document a horizontal scrollbar. Clipping here absorbs it;
          `clip` rather than `hidden` so this never becomes a scroll container.
          Card alignment is unaffected: the rail's padding uses the same value
          as its negative margin, so the first card still lands on the container
          edge exactly. */}
      <section className="border-b border-border bg-background-shell px-6 py-24 overflow-x-clip sm:px-8 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <span className="eyebrow">Behind the cycle</span>
              <h2 className="text-h2 mt-4 text-foreground">Built for the conditions behind the cycle</h2>
              <p className="mt-5 text-[15.5px] leading-relaxed text-muted-foreground">
                A cycle is rarely just a cycle. Sakhi tracks the patterns underneath it, so a doctor sees
                months of evidence instead of one bad day.
              </p>
            </div>
            <Link
              href="/health"
              className="inline-flex shrink-0 items-center gap-1.5 text-[15px] font-semibold text-secondary no-underline underline-offset-[3px] hover:underline"
            >
              Explore all 16 conditions <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <CardRail label="Condition groups Sakhi tracks" className="mt-14">
            {conditionGroups.map((g) => (
              <article
                key={g.group}
                className="flex w-80 shrink-0 snap-start flex-col rounded-2xl border border-border bg-card p-7"
              >
                <p className="text-[13px] font-semibold tracking-tight text-foreground">{g.group}</p>
                <h3 className="mt-2 text-[1.3rem] leading-snug font-semibold tracking-tight text-foreground">
                  {g.note}
                </h3>

                <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                  {toSentenceList(g.items)}. {g.desc}
                </p>

                {/* mt-auto pins the image well to the bottom of whichever card
                    is tallest, so the wells line up across the rail however
                    long each group's copy runs. */}
                <div className="mt-auto pt-8">
                  <ImagePlaceholder className="aspect-4/3" />
                </div>

                <div className="mt-6 flex justify-end">
                  <Link
                    href="/health"
                    aria-label={`Read about ${g.group.toLowerCase()} conditions`}
                    className="grid size-9 place-items-center rounded-full bg-ink text-white transition-transform duration-200 hover:scale-105"
                  >
                    <Plus className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </CardRail>
        </Container>
      </section>

      {/* ------------------------------------------------------------- pricing */}
      <section id="pricing" className="border-b border-border bg-background-blush px-6 py-24 sm:px-8 sm:py-28">
        <Container>
          <div className="mx-auto max-w-[42rem] text-center">
            <span className="eyebrow">Pricing</span>
            <h2 className="text-h2 mt-4 text-foreground">Free, and honest about it</h2>
            <p className="text-lead mx-auto mt-5 max-w-[38rem] text-muted-foreground">
              Everything a woman needs to understand her own body is free, with no ads and nothing sold on.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative flex flex-col justify-between gap-8 rounded-2xl border border-border bg-card px-8 py-9"
              >
                <PricingBody plan={plan} />
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-[52ch] text-center text-[13px] leading-relaxed text-muted-foreground">
            Sakhi Plus is planned, not released. Nothing in the app can be bought today, and the
            free tier is not time-limited.
          </p>
        </Container>
      </section>

      {/* ----------------------------------------------------------------- faq */}
      <section className="border-b border-border bg-background px-6 py-24 sm:px-8 sm:py-28">
        <Container>
          <div className="mx-auto max-w-[42rem] text-center">
            <span className="eyebrow">Questions</span>
            <h2 className="text-h2 mt-4 text-foreground">The things people ask first</h2>
            <p className="text-lead mx-auto mt-5 max-w-[36rem] text-muted-foreground">
              Straight answers, including the one about what Sakhi cannot do.
            </p>
          </div>
          <div className="mx-auto mt-14 max-w-[46rem]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------------- final cta */}
      <section className="relative overflow-hidden bg-ink px-6 py-24 sm:px-8 sm:py-32">
        <Spotlight className="top-0 left-1/2 -translate-x-1/2" fill="var(--secondary)" />
        <Container className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-h2 max-w-[18ch] text-white">
            Your body deserves{" "}
            <span className="animate-gradient-x bg-gradient-to-r from-primary via-secondary to-primary-soft bg-clip-text text-transparent">
              to be understood
            </span>
          </h2>
          <p className="text-lead mx-auto mt-5 max-w-[40ch] text-white/65">
            Start with her own logs. Share only when it feels right.
          </p>
          <div className="mt-10">
            <StoreButtons tone="dark" />
          </div>
        </Container>
      </section>
    </div>
  );
}

function PricingBody({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <>
      {/* In-flow, not an absolute -top ribbon: it would clip against the
          card's own overflow-hidden edge. */}
      <div>
        {plan.ribbon && (
          <Badge
            variant={plan.featured ? "default" : "muted"}
            className="mb-4 h-auto min-h-0 self-start px-3 py-1 text-[10px] tracking-[0.06em] uppercase"
          >
            {plan.ribbon}
          </Badge>
        )}
        <h3 className="text-h4 text-foreground">{plan.name}</h3>
        <p className="mt-1.5 text-[13px] text-muted-foreground">{plan.tagline}</p>
        <div className="mt-6 flex items-baseline gap-2">
          <span
            className={
              plan.price.startsWith("₹")
                ? "text-[44px] leading-none font-normal tracking-[-0.03em] text-foreground"
                : "text-[26px] leading-tight font-normal tracking-[-0.02em] text-foreground"
            }
          >
            {plan.price}
          </span>
          {plan.unit && <span className="text-[13px] text-muted-foreground">{plan.unit}</span>}
        </div>

        <ul className="mt-8 space-y-3 border-t border-border pt-7 text-[13px] text-muted-foreground">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <Check className="mt-px size-4 shrink-0 text-primary" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {plan.cta.href ? (
          <Button asChild block variant={plan.cta.variant}>
            {plan.cta.href.startsWith("http") ? (
              <a href={plan.cta.href} target="_blank" rel="noopener noreferrer">
                {plan.cta.label}
              </a>
            ) : (
              <Link href={plan.cta.href}>{plan.cta.label}</Link>
            )}
          </Button>
        ) : (
          <Button block variant="outline" disabled>
            {plan.cta.label}
          </Button>
        )}
      </div>
    </>
  );
}
