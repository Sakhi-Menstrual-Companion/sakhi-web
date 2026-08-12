import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Check,
  CloudOff,
  Heart,
  LockKeyhole,
  MapPin,
  MessageCircleHeart,
  NotebookPen,
  Plus,
  Send,
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
import { IndiaFlag } from "@/components/ui/india-flag";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { CardRail } from "@/components/ui/card-rail";
import { SakhiLogoMark } from "@/components/ui/SakhiLogo";

/* Imported rather than referenced by a /public path so the emitted filename
   carries a content hash. A fixed public URL is why a replaced image kept
   showing the old picture: nothing in the URL told any cache it had changed. */
import heroPhone from "@/assets/hero-phone-in-hand.png";
import photoDayOne from "@/assets/lifestyle-day-one-calendar.jpg";
import photoChat from "@/assets/lifestyle-sakhi-ai-chat.jpg";
import condHormonal from "@/assets/condition-hormonal.jpg";
import condPain from "@/assets/condition-pain.jpg";
import condMental from "@/assets/condition-mental.jpg";
import condReproductive from "@/assets/condition-reproductive.jpg";
import condSystemic from "@/assets/condition-systemic.jpg";
import AnimatedSection from "@/components/ui/AnimatedSection";

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
  { icon: <Users className="size-3.5 text-secondary" aria-hidden="true" />, label: "150M women in Sakhi's India" },
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
    screen: "Day view, logging",
    title: "Log what happened today",
    body: "Period days, pain, mood, sleep, energy and notes. One tap is enough for an ordinary day.",
  },
  {
    n: "02",
    icon: MessageCircleHeart,
    screen: "Sakhi AI conversation",
    title: "Ask Sakhi what it means",
    body: "Sakhi reads her own logs and answers plainly, including when a doctor should be involved.",
  },
  {
    n: "03",
    icon: LockKeyhole,
    screen: "Doctor report export",
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
    image: condHormonal,
    imageAlt: "A woman looking out of a window in soft daylight, hand resting near her chin",
    note: "When the signal itself is off.",
    items: ["PCOD / PCOS", "Amenorrhea", "Thyroid Disorders"],
    desc: "Sakhi logs the cycle changes that point to them, month after month.",
  },
  {
    group: "Pain",
    image: condPain,
    imageAlt: "A woman sitting curled forward on a bed in bright daylight, holding her middle",
    note: "The pain she was told to expect.",
    items: ["Endometriosis", "Dysmenorrhea", "Adenomyosis", "Menorrhagia"],
    desc: "Every episode gets a date and a severity, so it becomes evidence instead of memory.",
  },
  {
    group: "Mental",
    image: condMental,
    imageAlt: "A woman indoors with her brow drawn, mid expression",
    note: "Mood that moves with the cycle.",
    items: ["PMDD", "Hormonal Mental Health", "Postpartum Depression"],
    desc: "Mood is tracked beside the cycle, so the two can be read together.",
  },
  {
    group: "Reproductive",
    image: condReproductive,
    imageAlt: "A doctor listening to a patient with a stethoscope during an appointment",
    note: "What a scan often finds years too late.",
    items: ["Uterine Fibroids", "Ovarian Cysts", "Fertility Challenges", "Cervical Health"],
    desc: "The history is ready before the appointment, not written in the waiting room.",
  },
  {
    group: "Systemic",
    image: condSystemic,
    imageAlt: "A woman lying down on a bed with an arm across her forehead in soft daylight",
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
   Shown here as a live tier for the website showcase, per product decision
   (2026-08-12). Billing itself is not wired up yet: iOS's RazorpayManager is
   an intentional stub ("Payments are not live in this release"). Re-check that
   file before this copy is treated as a real purchase flow. */
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
    unit: "/ month",
    featured: false,
    ribbon: "Available now",
    features: [
      "Everything in Free",
      "Deeper cycle and symptom insight",
      "Guidance on diet and routine",
      "Longer report history",
    ],
    cta: { label: "Get Sakhi Plus", href: appStoreUrl, variant: "outline" as const },
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
 * Used on both the white hero and the dark closing band. `tone` picks the
 * readable variant for wherever it's actually placed — on `dark`, the App
 * Store pill flips to a solid white fill. It used to stay `bg-ink` on both,
 * which was invisible-on-invisible against the closing band's own `bg-ink`
 * section: a black pill has no edge against a black page. White-on-black is
 * also just the correct read for a dark-mode primary action, not only a fix.
 */
function StoreButtons({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-transform duration-300 hover:-translate-y-0.5",
          tone === "dark"
            ? "bg-white text-ink shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "bg-ink text-white"
        )}
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

/** Doctor report tile header: the export acted out on a single object. The
    Generate button is pressed and becomes the sheet, the sheet fills in and
    is ticked off, then it lifts and becomes a share mark before settling
    back into the button — nothing ever sits beside anything else, so the
    whole loop reads as one continuous motion. Decorative, so it is hidden
    from screen readers; the card's own title and description already say
    what it is. Sizes and timings are in globals.css under `.doc-scene`,
    since the morph animates the box itself. */
function DoctorReportIllustration() {
  return (
    <div className="doc-scene flex h-full items-center justify-center" aria-hidden="true">
      <div className="doc-morph flex items-center justify-center">
        <span className="doc-label absolute inset-0 flex items-center justify-center text-[9px] font-semibold whitespace-nowrap text-white">
          Generate
        </span>

        <div className="doc-body absolute inset-0 flex flex-col justify-center gap-2 px-3">
          <div className="doc-line h-1 w-full rounded-full bg-border" style={{ "--i": 0 } as React.CSSProperties} />
          <div className="doc-line h-1 w-full rounded-full bg-border" style={{ "--i": 1 } as React.CSSProperties} />
          <div className="doc-line h-1 w-3/5 rounded-full bg-border" style={{ "--i": 2 } as React.CSSProperties} />
        </div>

        <div className="doc-share absolute inset-0 flex items-center justify-center text-white">
          {/* Nudged a hair down-left: the paper plane's own artwork sits
              high-right inside its viewBox, so a dead-centred icon reads
              off-centre inside the circle. */}
          <Send className="size-3.5 translate-x-px translate-y-px" />
          <span className="doc-share-ring absolute inset-0 rounded-full border border-secondary" />
        </div>

        <div className="doc-tick absolute -right-2.5 -bottom-2.5 flex size-7 items-center justify-center rounded-full bg-secondary text-white">
          <Check className="size-3.5" strokeWidth={3} />
          <span className="doc-tick-ring absolute inset-0 rounded-full border border-secondary" />
        </div>
      </div>
    </div>
  );
}

/** Be Her Sakhi tile header. Deliberately a different idea from the doctor
    report above rather than the same button-morph twice: her heartbeat draws
    itself across to the one person she chooses, that person fills in and
    takes the heart, then the line withdraws back to her. The reset is the
    meaning, not just a loop — this is hers to give and hers to take back.

    The SVG is rendered at exactly 120x40 CSS px so the viewBox maps 1:1 and
    the heart can be pinned over the second circle by its own coordinates.
    Decorative, so hidden from screen readers. Timings are in globals.css
    under `.sakhi-scene`. */
function TrustedPersonIllustration() {
  return (
    <div className="sakhi-scene flex h-full items-center justify-center" aria-hidden="true">
      <div className="relative h-10 w-30">
        <svg viewBox="0 0 120 40" className="h-10 w-30 overflow-visible">
          {/* her */}
          <circle cx="14" cy="20" r="9" fill="var(--secondary)" />

          {/* the beat travelling across */}
          <path
            className="sakhi-link"
            d="M26 20 H42 L48 11 L54 29 L60 20 H94"
            pathLength={100}
            strokeDasharray={100}
            fill="none"
            stroke="var(--secondary)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* the one person she chooses */}
          <circle
            className="sakhi-guest"
            cx="106"
            cy="20"
            r="9"
            stroke="var(--border)"
            strokeWidth={1.5}
          />
        </svg>

        {/* Pinned to the second circle's centre (106, 20) in the same units. */}
        <div className="sakhi-ring absolute top-5 left-[106px] size-[18px] rounded-full border border-secondary" />
        {/* Deep pink, not white: the heart lands on the light --primary-soft
            fill, where white barely reads at this size. */}
        <div className="sakhi-heart absolute top-5 left-[106px] text-secondary">
          <Heart className="size-3.5" fill="currentColor" />
        </div>
      </div>
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
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-[11.5px] font-medium text-muted-foreground backdrop-blur-sm">
            <IndiaFlag className="animate-flag-wave h-3 w-4.25 shrink-0 drop-shadow-[0_1px_2px_rgba(163,22,84,0.18)]" />
            Made in India
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
            {/* No centring transform any more. The asset itself was padded so
                the phone bezel sits on the canvas centre, which means the image
                centres naturally in the flex row. The old transform shoved the
                whole picture right to compensate, and that read as an off-centre
                hero even though the phone was technically centred.

                The canvas is 29.7% phone and the rest transparent hand, wrist
                and air, so these widths are larger than they look: at lg the
                phone renders about 228px wide. */}
            <Image
              src={heroPhone}
              alt="A hand holding a phone showing the Sakhi app on day 1 of a period, with the August calendar below"
              priority
              quality={100}
              className="h-auto w-115 select-none drop-shadow-[0_35px_45px_rgba(163,22,84,0.22)] sm:w-155 lg:w-192"
              sizes="(max-width: 640px) 460px, (max-width: 1024px) 620px, 768px"
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
              header={
                <Image
                  src={photoDayOne}
                  alt="A woman resting on a sofa, looking at the Sakhi day view showing day 1 of her period"
                  className="h-full w-full rounded-xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              }
              title="Cycle logs"
              description="Period, pain, mood, sleep, energy and symptoms in one place, so the pattern becomes visible."
            />
            <BentoGridItem
              className="sm:col-span-2 lg:col-span-2 lg:row-span-3"
              header={
                <Image
                  src={photoChat}
                  alt="A woman typing a message to Sakhi about cramps and a fever, and being told to see a doctor today"
                  className="h-full w-full rounded-xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              }
              title="Sakhi AI"
              description="Answers drawn from what she has actually logged, not a generic script."
            />
            <BentoGridItem
              className="lg:row-span-3"
              header={<DoctorReportIllustration />}
              title="Doctor report"
              description="A clean health history to take into the ten-minute appointment."
            />
            <BentoGridItem
              className="lg:row-span-3"
              header={<TrustedPersonIllustration />}
              title="Be Her Sakhi"
              description="One trusted person can understand her better, only if and when she chooses."
            />
            {/* No header on this one: "keeps working with no signal" has no
                scene worth staging, so it takes the plain icon chip that sits
                directly above the title instead of a centred illustration. */}
            <BentoGridItem
              className="lg:col-span-2 lg:row-span-2"
              icon={<CloudOff className="size-5" aria-hidden="true" />}
              title="Works offline"
              description="Logging never depends on signal. Her history stays on her device first, always."
            />
          </BentoGrid>
        </Container>
      </section>

      {/* -------------------------------------------------------- how it works */}
      <section className="border-b border-border bg-background-blush px-6 py-24 sm:px-8 sm:py-28">
        <Container>
          {/* Centred mark, heading, lead. The mark stands in for the small
              decorative glyph the reference sets above its title; using the
              Sakhi mark keeps that beat without inventing a new ornament. */}
          <div className="mx-auto max-w-[42rem] text-center">
            <span className="inline-flex" aria-hidden="true">
              <SakhiLogoMark size={30} />
            </span>
            <h2 className="text-h2 mt-5 text-foreground">Three steps, and none of them rush her</h2>
            <p className="text-lead mx-auto mt-4 max-w-[36rem] text-muted-foreground">
              Sakhi is built to be opened for thirty seconds a day, not to demand attention.
            </p>
          </div>

          {/* Three nodes on one line, joined by dashed connectors that alternate
              valley and hill. The connectors are absolutely positioned at the
              circles' vertical centre (top-16, half of the size-32 node) and sit
              at the one-third and two-thirds marks, which is exactly midway
              between adjacent column centres in a three-column grid. They are
              decorative, so they are hidden rather than reflowed on phones,
              where the steps stack and a horizontal joint would be meaningless.

              The first node is filled and lifted, the rest are dashed outlines:
              that is the reference's own way of showing where the sequence
              starts, and it costs nothing to keep. */}
          <div className="relative mt-16 grid grid-cols-1 gap-14 sm:mt-20 sm:grid-cols-3 sm:gap-8">
            <svg
              aria-hidden="true"
              viewBox="0 0 160 60"
              preserveAspectRatio="none"
              className="absolute top-16 left-1/3 hidden h-14 w-[18%] -translate-x-1/2 -translate-y-1/2 sm:block"
            >
              <path
                d="M0,10 C45,56 115,56 160,10"
                fill="none"
                stroke="var(--primary)"
                strokeOpacity="0.4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="5 8"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 160 60"
              preserveAspectRatio="none"
              className="absolute top-16 left-2/3 hidden h-14 w-[18%] -translate-x-1/2 -translate-y-1/2 sm:block"
            >
              <path
                d="M0,50 C45,4 115,4 160,50"
                fill="none"
                stroke="var(--primary)"
                strokeOpacity="0.4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="5 8"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {steps.map(({ n, icon: Icon, title, body }, i) => (
              <div key={n} className="relative z-10 flex flex-col items-center text-center">
                <div className="relative">
                  {/* Pulled clear of the ring at eleven o'clock. At a smaller
                      offset it sat on the dashed border and read as part of it. */}
                  <span className="absolute -top-3 -left-3 z-10 grid size-7 place-items-center rounded-full border border-border bg-card text-[11px] font-semibold text-foreground">
                    {i + 1}
                  </span>

                  {/* Three identical white discs, no ring and no shadow. The
                      numbered badges carry the sequence on their own, so nothing
                      needs to mark one node as different from the others. */}
                  <div className="grid size-32 place-items-center rounded-full bg-card">
                    <Icon className="size-10 text-secondary" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                </div>

                <h3 className="text-h4 mt-8 text-foreground">{title}</h3>
                <p className="mx-auto mt-2.5 max-w-[30ch] text-[14px] leading-relaxed text-muted-foreground">
                  {body}
                </p>
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
              href="/product#health"
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

                {/* mt-auto pins the photograph to the bottom of whichever card
                    is tallest, so the images line up across the rail however
                    long each group's copy runs. `fill` with object-cover keeps
                    every card on the same 4:3 crop whatever the source. */}
                <div className="mt-auto pt-8">
                  <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={g.image}
                      alt={g.imageAlt}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <Link
                    href="/product#health"
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

      {/* ----------------------------------------------------------- final cta
          The page's closing statement, so it gets the hero's own type scale
          back (text-display, not text-h2) as a deliberate bookend to "Sakhi
          knows your body" up top — and more room around it than any other
          band on the page, since nothing follows it. The emphasis clause
          used to share the hero's animate-gradient-x sweep; here it is a
          single static --primary-soft (the token this file already
          documents for accent text on a dark fill) so the last thing a
          visitor reads is confident rather than in motion. */}
      <section className="relative overflow-hidden bg-ink px-6 py-28 sm:px-8 sm:py-36 lg:py-44">
        <Spotlight className="top-0 left-1/2 -translate-x-1/2" fill="var(--secondary)" />
        <Container className="relative z-10 flex flex-col items-center text-center">
          <AnimatedSection className="flex flex-col items-center">
            <h2 className="text-display max-w-[15ch] text-white">
              Your body deserves <span className="text-primary-soft">to be understood</span>
            </h2>
            <p className="text-lead mx-auto mt-7 max-w-[40ch] text-white/65">
              Start with her own logs. Share only when it feels right.
            </p>
            <div className="mt-12">
              <StoreButtons tone="dark" />
            </div>
          </AnimatedSection>
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
