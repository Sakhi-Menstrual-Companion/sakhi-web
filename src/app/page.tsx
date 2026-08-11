import Image from "next/image";
import Link from "next/link";
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
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

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
  { icon: MapPin, label: "Made in India" },
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

const conditionGroups = [
  { group: "Hormonal", note: "When the signal itself is off.", items: ["PCOD / PCOS", "Amenorrhea", "Thyroid Disorders"] },
  { group: "Pain", note: "The pain she was told to expect.", items: ["Endometriosis", "Dysmenorrhea", "Adenomyosis", "Menorrhagia"] },
  { group: "Mental", note: "Mood that moves with the cycle.", items: ["PMDD", "Hormonal Mental Health", "Postpartum Depression"] },
  { group: "Reproductive", note: "What a scan often finds years too late.", items: ["Uterine Fibroids", "Ovarian Cysts", "Fertility Challenges", "Cervical Health"] },
  { group: "Systemic", note: "What the cycle quietly costs her body.", items: ["Anemia", "Bone Health"] },
];

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

/** A compact, code-drawn calendar preview for the Cycle Logs bento tile. Not real data. */
function CalendarPreview() {
  return (
    <div className="flex h-full flex-col justify-center rounded-xl bg-ink p-5">
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 21 }).map((_, i) => (
          <div
            key={i}
            className={
              i === 13
                ? "aspect-square rounded-[5px] bg-gradient-to-br from-primary to-secondary"
                : i > 8 && i < 14
                  ? "aspect-square rounded-[5px] bg-white/[0.16]"
                  : "aspect-square rounded-[5px] bg-white/[0.05]"
            }
          />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-[11px] text-white/50">
        <span className="size-2 rounded-full bg-gradient-to-br from-primary to-secondary" /> Period logged
        <span className="ml-3 size-2 rounded-full bg-white/[0.16]" /> Symptom noted
      </div>
    </div>
  );
}

/** A compact, code-drawn chat preview for the Sakhi AI bento tile. Illustrative copy, not a real transcript. */
function ChatPreview() {
  return (
    <div className="flex h-full flex-col justify-end gap-2 rounded-xl bg-ink p-5">
      <div className="ml-auto max-w-[78%] rounded-2xl rounded-tr-sm bg-white/[0.08] px-3.5 py-2.5 text-[12px] text-white/75">
        Why do I feel this tired before my period?
      </div>
      <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-gradient-to-br from-primary to-secondary px-3.5 py-2.5 text-[12px] text-white">
        Your logs show lower energy in the luteal phase most months, that is common and usually not a concern.
      </div>
    </div>
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
      <HoverBorderGradient as="a" href={appStoreUrl} target="_blank" rel="noopener noreferrer">
        <AppleMark /> App Store
      </HoverBorderGradient>
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

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* ---------------------------------------------------------------- hero */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <DotGrid className="opacity-70" />
        <Spotlight className="-top-40 left-0 lg:-top-24 lg:left-40" fill="var(--primary)" />
        <Spotlight className="top-10 right-0 lg:top-0 lg:right-20" fill="var(--secondary)" />

        <Container className="relative z-10 flex flex-col items-center pt-[calc(var(--nav-clearance)+3.5rem)] pb-20 text-center sm:pt-[calc(var(--nav-clearance)+5.5rem)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-[13px] font-medium text-muted-foreground backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Live on the App Store
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

          {/* hero visual: the real app on a real phone in a real hand, tilted
              toward the cursor. No card frame around it — the PNG already
              carries its own phone bezel and hand silhouette on a transparent
              background, so a bordered container would just clip the hand.

              The floating chips sit in wrappers positioned at the image's own
              edge (left-0 / right-0) and pushed fully clear of it with a
              percentage transform (-translate-x-full, not a fixed px offset):
              a chip's rendered width varies with its text, and a guessed px
              value was landing short and leaving the chip sitting on top of
              the phone screen instead of beside it. The transform lives on
              this wrapper rather than on CardItem itself, because CardItem
              drives its own `transform` imperatively for the hover tilt — a
              transform utility class on that element would just get
              overwritten every time the pointer moves. */}
          <div className="mt-20 flex w-full items-center justify-center sm:mt-24">
            <CardContainer containerClassName="py-0">
              <CardBody>
                <CardItem translateZ={60}>
                  <Image
                    src="/assets/sakhi-app-hand-mockup.png"
                    alt="A hand holding an iPhone showing the Sakhi Summary screen: on period, day 2, current phase menstrual, and the June calendar"
                    width={1200}
                    height={1732}
                    priority
                    className="h-auto w-70 select-none drop-shadow-[0_35px_45px_rgba(163,22,84,0.22)] sm:w-85 lg:w-95"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                  />
                </CardItem>

                <div className="absolute top-8 left-0 hidden -translate-x-[calc(100%+2rem)] xl:block">
                  <CardItem
                    translateZ={80}
                    className="rounded-2xl border border-border bg-card/90 px-4 py-3 text-left shadow-card backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 text-[12px] font-semibold whitespace-nowrap text-foreground">
                      <LockKeyhole className="size-3.5 text-secondary" aria-hidden="true" /> Private by default
                    </div>
                    <div className="mt-0.5 max-w-56 text-[11.5px] text-muted-foreground">
                      Nothing leaves her device unless she says so
                    </div>
                  </CardItem>
                </div>

                <div className="absolute right-0 bottom-14 hidden translate-x-[calc(100%+2rem)] xl:block">
                  <CardItem
                    translateZ={80}
                    className="rounded-2xl border border-border bg-card/90 px-4 py-3 text-left shadow-card backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 text-[12px] font-semibold whitespace-nowrap text-foreground">
                      <CloudOff className="size-3.5 text-secondary" aria-hidden="true" /> Works offline
                    </div>
                    <div className="mt-0.5 max-w-56 text-[11.5px] text-muted-foreground">
                      Logging never waits for signal
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </Container>
      </section>

      {/* --------------------------------------------------------------- marquee
          First pass was a flat --ink black band; second pass swapped that for
          a painted pastel gradient strip — which was worse, because a solid
          colour banner isn't how depth reads anywhere else on this site. Every
          other section gets its depth from a soft blurred glow plus a faint
          dot-grid behind plain white, with glass-card chips floating on top
          (exactly what the hero's "Private by default" chip is). This uses
          that same recipe instead of inventing a new one. */}
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
              className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
              header={<CalendarPreview />}
              icon={<NotebookPen className="size-4" aria-hidden="true" />}
              title="Cycle logs"
              description="Period, pain, mood, sleep, energy and symptoms in one place, so the pattern becomes visible."
            />
            <BentoGridItem
              className="sm:col-span-2 lg:col-span-2"
              header={<ChatPreview />}
              icon={<MessageCircleHeart className="size-4" aria-hidden="true" />}
              title="Sakhi AI"
              description="Answers drawn from what she has actually logged, not a generic script."
            />
            <BentoGridItem
              icon={<FileText className="size-4" aria-hidden="true" />}
              title="Doctor report"
              description="A clean health history to take into the ten-minute appointment."
            />
            <BentoGridItem
              icon={<Heart className="size-4" aria-hidden="true" />}
              title="Be Her Sakhi"
              description="One trusted person can understand her better, only if and when she chooses."
            />
            <BentoGridItem
              className="lg:col-span-2"
              icon={<LockKeyhole className="size-4" aria-hidden="true" />}
              title="Private by default"
              description="No ads. No selling. Sharing stays consent-controlled and can be withdrawn at any time."
            />
            <BentoGridItem
              className="lg:col-span-2"
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

          <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div
              aria-hidden="true"
              className="absolute inset-x-16 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
            />
            {steps.map(({ n, icon: Icon, title, body }) => (
              <div
                key={n}
                className="group relative flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-[transform,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative grid size-14 place-items-center">
                  <span className="absolute text-[13px] font-bold text-border select-none">{n}</span>
                  <div className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-[0_8px_20px_rgba(246,24,135,0.28)]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-h4 mt-5 text-foreground">{title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------- conditions */}
      <section className="border-b border-border bg-background px-6 py-24 sm:px-8 sm:py-28">
        <Container>
          <div className="mx-auto max-w-[42rem] text-center">
            <span className="eyebrow">Behind the cycle</span>
            <h2 className="text-h2 mt-4 text-foreground">Built for the conditions behind the cycle</h2>
            <p className="text-lead mx-auto mt-5 max-w-[40rem] text-muted-foreground">
              A cycle is rarely just a cycle. Sakhi tracks the patterns underneath it, so a doctor sees
              months of evidence instead of one bad day.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {conditionGroups.map((g) => (
              <div
                key={g.group}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-7 transition-[transform,border-color,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover"
              >
                <h3 className="text-h4 text-foreground">{g.group}</h3>
                <p className="text-[13.5px] text-muted-foreground">{g.note}</p>
                <ul className="mt-1 space-y-2.5 border-t border-border pt-5 text-[13px] text-muted-foreground">
                  {g.items.map((i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check className="size-4 shrink-0 text-primary" aria-hidden="true" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-gradient-to-br from-accent-faint to-background p-7">
              <div>
                <h3 className="text-h4 text-foreground">All 16 conditions</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  What each one is, why it gets missed, and how Sakhi helps her track it.
                </p>
              </div>
              <Link
                href="/health"
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-secondary no-underline underline-offset-[3px] hover:underline"
              >
                Read the detail <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
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
            {plans.map((plan) =>
              plan.featured ? (
                <HoverBorderGradient
                  key={plan.name}
                  as="div"
                  duration={2200}
                  containerClassName="rounded-2xl p-[1.5px] w-full h-full"
                  className="flex h-full w-full flex-col items-stretch justify-between gap-8 rounded-2xl bg-card px-8 py-9 text-left"
                >
                  <PricingBody plan={plan} />
                </HoverBorderGradient>
              ) : (
                <div
                  key={plan.name}
                  className="relative flex flex-col justify-between gap-8 rounded-2xl border border-border bg-card px-8 py-9"
                >
                  <PricingBody plan={plan} />
                </div>
              )
            )}
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
      {/* In-flow, not an absolute -top ribbon: the featured card's border is
          drawn by HoverBorderGradient's own overflow-hidden wrapper, which
          would clip anything poking above the content box's top edge. */}
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
