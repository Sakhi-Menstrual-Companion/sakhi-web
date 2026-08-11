import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Check,
  CloudOff,
  Droplet,
  FileText,
  Heart,
  Lock,
  LockKeyhole,
  MapPin,
  MessageCircleHeart,
  Moon,
  NotebookPen,
  ShieldCheck,
  Smile,
  Sparkles,
  UserRound,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const appStoreUrl = "https://apps.apple.com/app/id6742219623";

// PLACEHOLDER, swap in the real Play Store link.
// Derived from the applicationId in 02-Android/app/build.gradle.kts
// ("com.galgotiasuniversity.rachnasakhi") so it is a sane default, but it has
// not been checked against the live listing.
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.galgotiasuniversity.rachnasakhi";

/* Each of these is already claimed elsewhere on the site. Nothing new here. */
const promises = [
  { icon: NotebookPen, label: "Log your day in one tap" },
  { icon: ShieldCheck, label: "No ads, no data selling" },
  { icon: CloudOff, label: "Works offline" },
  { icon: MapPin, label: "Made in India" },
];

/* What the Track screen actually captures, mirrored in the hero mockup. */
const trackedItems = [
  { icon: Droplet, label: "Period flow" },
  { icon: Zap, label: "Cramps & pain" },
  { icon: Smile, label: "Mood" },
  { icon: Moon, label: "Sleep" },
  { icon: BedDouble, label: "Energy" },
  { icon: Heart, label: "Symptoms" },
];

const features = [
  {
    icon: NotebookPen,
    title: "Cycle logs",
    body: "Period, pain, mood, sleep, energy and symptoms in one place, so the pattern becomes visible.",
  },
  {
    icon: MessageCircleHeart,
    title: "Sakhi AI",
    body: "Answers drawn from what she has actually logged, not a generic script.",
  },
  {
    icon: FileText,
    title: "Doctor report",
    body: "A clean health history to take into the ten-minute appointment.",
  },
  {
    icon: Heart,
    title: "Be Her Sakhi",
    body: "One trusted person can understand her better, only if and when she chooses.",
  },
  {
    icon: LockKeyhole,
    title: "Private by default",
    body: "No ads. No selling. Sharing stays consent-controlled and can be withdrawn.",
  },
  {
    icon: CloudOff,
    title: "Works offline",
    body: "Logging never depends on signal. Her history stays on her device first.",
  },
];

const steps = [
  {
    n: "01",
    title: "Log what happened today",
    body: "Period days, pain, mood, sleep, energy and notes. One tap is enough for an ordinary day.",
  },
  {
    n: "02",
    title: "Ask Sakhi what it means",
    body: "Sakhi reads her own logs and answers plainly, including when a doctor should be involved.",
  },
  {
    n: "03",
    title: "Share only if she wants to",
    body: "Export a doctor report, or invite one trusted person. Both are her choice, and reversible.",
  },
];

// Grouped by the same `category` field each condition already carries in
// components/ui/HealthConditions.tsx, which powers the /health page.
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

function StoreButtons() {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <Button asChild size="lg" className="w-full sm:w-auto">
        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
          <AppleMark /> App Store
        </a>
      </Button>
      <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
        <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
          <PlayMark /> Google Play
        </a>
      </Button>
    </div>
  );
}

/** 1120px max including the 24px gutter, so 1072px of content. Site-wide rule. */
function Container({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1120px] ${className}`}>{children}</div>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-accent bg-accent-faint px-3 py-1 text-xs font-semibold text-secondary">
      <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
}) {
  return (
    <div className="mx-auto max-w-xl space-y-3 text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
      <p className="text-base leading-relaxed text-muted-foreground">{lead}</p>
    </div>
  );
}

/** The soft grid the hero sits on, so the white does not read as empty. */
function HeroPattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none opacity-60"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 70% 55% at 50% 0%, #000 10%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 0%, #000 10%, transparent 75%)",
      }}
    />
  );
}

/**
 * The hero showpiece: an app window holding a real screenshot, with the
 * things Sakhi actually tracks either side of it. The chrome bar and the
 * 12-column interior follow the reference layout.
 */
function AppWindow() {
  return (
    <div className="relative mx-auto w-full overflow-hidden rounded-[24px] border border-border bg-card shadow-2xl shadow-foreground/10">
      {/* chrome */}
      <div className="flex items-center justify-between border-b border-border bg-background-blush/90 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-[#EF4444]" />
            <div className="size-3 rounded-full bg-[#F59E0B]" />
            <div className="size-3 rounded-full bg-[#10B981]" />
          </div>
          <div className="hidden items-center gap-2 border-l border-border pl-3 text-xs text-muted-foreground sm:flex">
            <Lock className="size-3 text-emerald-600" aria-hidden="true" />
            <span>Private to her</span>
          </div>
        </div>
        <span className="text-xs font-semibold text-muted-foreground">Sakhi, Summary</span>
      </div>

      {/* interior */}
      <div className="grid min-h-[460px] grid-cols-12 bg-background-blush/50">
        <div className="col-span-3 hidden border-r border-border bg-card p-3 sm:block lg:col-span-3">
          <div className="px-1 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
            What she logs
          </div>
          <div className="mt-3 space-y-1">
            {trackedItems.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium ${
                  i === 0 ? "bg-accent-faint text-secondary" : "text-muted-foreground"
                }`}
              >
                <Icon className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                <span className="truncate">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 flex items-end justify-center px-4 pt-6 sm:col-span-9 lg:col-span-6">
          <Image
            className="h-auto w-full max-w-[260px] rounded-t-[20px] border border-border border-b-0 shadow-xl"
            src="/assets/sakhi-app-summary-iphone.png"
            alt="The Sakhi Summary screen, showing the current cycle day, the current phase, and the month calendar"
            width={671}
            height={1321}
            sizes="(max-width: 640px) 70vw, 260px"
            priority
          />
        </div>

        <div className="col-span-3 hidden border-l border-border bg-card p-3.5 lg:block">
          <div className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
            Today
          </div>
          <div className="mt-3 space-y-3">
            <div>
              <div className="text-[11px] font-medium text-muted-foreground">Cycle day</div>
              <div className="mt-1 flex h-8 items-center rounded-md border border-border bg-background-blush px-2.5 text-xs font-bold text-foreground">
                Day 2
              </div>
            </div>
            <div>
              <div className="text-[11px] font-medium text-muted-foreground">Current phase</div>
              <div className="mt-1 flex h-8 items-center rounded-md border border-border bg-card px-2.5 text-xs text-muted-foreground">
                Menstrual
              </div>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-medium text-foreground">Share with Maa</span>
              <div className="flex h-4 w-8 justify-end rounded-full bg-primary p-0.5">
                <div className="size-3 rounded-full bg-white" />
              </div>
            </div>
            <div className="space-y-1.5 border-t border-border pt-3">
              <div className="flex items-center gap-1 text-[11px] font-bold text-secondary">
                <Sparkles className="size-3" aria-hidden="true" /> Sakhi
              </div>
              <div className="text-[11px] leading-tight text-muted-foreground">
                Rest is worth prioritising today.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* ---------------------------------------------------------------- hero */}
      {/* The navbar is position:fixed over y=18..68, so the hero needs real top
          clearance rather than the reference's in-flow pt-20. */}
      <section className="relative overflow-hidden border-b border-border bg-background px-4 pt-32 pb-20 sm:px-6 sm:pt-40">
        <HeroPattern />
        <Container className="relative z-10 flex flex-col items-center space-y-8 text-center">
          <Eyebrow>More than a period tracker</Eyebrow>

          <h1 className="max-w-4xl text-5xl leading-[1.06] font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Sakhi knows <span className="text-primary">your body</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Log your cycle, ask the questions you would never Google, and keep one
            trusted person close when you choose.
          </p>

          <div className="pt-2">
            <StoreButtons />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-1 text-xs text-muted-foreground">
            {promises.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5">
                <Icon className="size-3.5 text-primary" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <div className="w-full pt-10 sm:pt-14">
            <AppWindow />
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ features */}
      <section className="border-b border-border bg-background-blush px-4 py-24 sm:px-6">
        <Container className="space-y-16">
          <SectionHeading
            eyebrow="What Sakhi does"
            title="Calm, private, and built around her"
            lead="Six things the app does well, and nothing it does behind her back."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, body }) => (
              <Card key={title} variant="flat" interactive className="gap-4">
                <span className="flex size-10 items-center justify-center rounded-lg bg-accent-faint">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <CardTitle size="sm" className="mb-1.5 text-lg">
                    {title}
                  </CardTitle>
                  <CardDescription size="sm" className="text-[13px] leading-relaxed">
                    {body}
                  </CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------- how it works */}
      <section className="border-b border-border bg-background px-4 py-24 sm:px-6">
        <Container className="space-y-16">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps, and none of them rush her"
            lead="Sakhi is built to be opened for thirty seconds a day, not to demand attention."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map(({ n, title, body }) => (
              <Card key={n} variant="flat" className="gap-3">
                <span className="text-2xl font-bold tracking-tight text-primary">{n}</span>
                <CardTitle size="sm" className="mb-0 text-lg">
                  {title}
                </CardTitle>
                <CardDescription size="sm" className="text-[13px] leading-relaxed">
                  {body}
                </CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------- conditions */}
      <section className="border-b border-border bg-background-blush px-4 py-24 sm:px-6">
        <Container className="space-y-16">
          <SectionHeading
            eyebrow="Behind the cycle"
            title="Built for the conditions behind the cycle"
            lead="A cycle is rarely just a cycle. Sakhi helps her track the patterns underneath it, so a doctor sees months of evidence instead of one bad day."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {conditionGroups.map((g) => (
              <Card key={g.group} variant="flat" interactive className="gap-3">
                <CardTitle size="sm" className="mb-0 text-lg">
                  {g.group}
                </CardTitle>
                <CardDescription size="sm" className="text-[13px]">
                  {g.note}
                </CardDescription>
                <ul className="space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                  {g.items.map((i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check className="size-4 shrink-0 text-primary" aria-hidden="true" /> {i}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}

            <Card variant="flat" className="justify-between gap-3 bg-accent-faint">
              <div>
                <CardTitle size="sm" className="mb-1.5 text-lg">
                  All 16 conditions
                </CardTitle>
                <CardDescription size="sm" className="text-[13px] leading-relaxed">
                  What each one is, why it gets missed, and how Sakhi helps her track it.
                </CardDescription>
              </div>
              <Button asChild variant="outline" block className="mt-6">
                <Link href="/health">
                  Read the detail <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- pricing */}
      <section id="pricing" className="border-b border-border bg-background px-4 py-24 sm:px-6">
        <Container className="space-y-16">
          <SectionHeading
            eyebrow="Pricing"
            title="Free, and honest about it"
            lead="Everything a woman needs to understand her own body is free, with no ads and nothing sold on."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between space-y-8 rounded-xl p-8 ${
                  plan.featured
                    ? "border-2 border-primary bg-card shadow-xs"
                    : "border border-border bg-background-blush"
                }`}
              >
                {plan.ribbon && (
                  <span
                    /* Deep Pink, not Primary: at 10px this is small text and
                       needs 4.5:1. White on Primary reaches only 3.89:1. */
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-bold tracking-wider uppercase ${
                      plan.featured
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-chip text-chip-foreground"
                    }`}
                  >
                    {plan.ribbon}
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{plan.tagline}</p>
                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span className="text-4xl font-bold tracking-tight text-foreground">
                        {plan.price}
                      </span>
                      {plan.unit && (
                        <span className="text-xs text-muted-foreground">{plan.unit}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

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
            ))}
          </div>

          <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
            Sakhi Plus is planned, not released. Nothing in the app can be bought today, and the
            free tier is not time-limited.
          </p>
        </Container>
      </section>

      {/* ------------------------------------------------------------- privacy */}
      <section className="border-b border-border bg-background-blush px-4 py-24 sm:px-6">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div className="space-y-5">
              <Eyebrow>Private by design</Eyebrow>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Sharing is <span className="text-primary">always her choice</span>
              </h2>
              <p className="max-w-[520px] text-base leading-relaxed text-muted-foreground">
                Be Her Sakhi is for one trusted person, not a feed and not a group. She decides what
                they see, and she can remove access at any time.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  { icon: ShieldCheck, label: "No ads" },
                  { icon: LockKeyhole, label: "Data stays hers" },
                  { icon: UserRound, label: "One trusted person" },
                ].map(({ icon: Icon, label }) => (
                  <Badge key={label} variant="soft" className="gap-1.5">
                    <Icon className="size-3.5" aria-hidden="true" />
                    {label}
                  </Badge>
                ))}
              </div>
              <Card variant="flat" className="mt-2 gap-2 bg-card">
                <strong className="text-[15px] font-bold text-foreground">
                  Consent is the product rule.
                </strong>
                <span className="text-[13px] leading-relaxed text-muted-foreground">
                  Be Her Sakhi works only when she wants it, with one person she trusts.
                </span>
              </Card>
            </div>

            <Card variant="flat" inset="none" className="overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-3">
                <div className="size-3 rounded-full bg-[#EF4444]" />
                <div className="size-3 rounded-full bg-[#F59E0B]" />
                <div className="size-3 rounded-full bg-[#10B981]" />
                <span className="ml-2 text-xs font-semibold text-muted-foreground">
                  Track, today
                </span>
              </div>
              <Image
                className="h-auto w-full"
                src="/assets/sakhi-track-log.png"
                alt="The Sakhi Track screen showing a logged day: period flow and cramps, plus mood, breast tenderness, pelvic pain, skin, discharge and energy level"
                width={545}
                height={400}
                sizes="(max-width: 1024px) 92vw, 520px"
              />
            </Card>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------------------- faq */}
      <section className="border-b border-border bg-background px-4 py-24 sm:px-6">
        <Container className="space-y-16">
          <SectionHeading
            eyebrow="Questions"
            title="The things people ask first"
            lead="Straight answers, including the one about what Sakhi cannot do."
          />
          <div className="mx-auto max-w-3xl">
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
      <section className="bg-background-blush px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl space-y-6 rounded-xl border border-border bg-card p-10 text-center md:p-14">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your body deserves <span className="text-primary">to be understood</span>
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
            Start with her own logs. Share only when it feels right.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
            <StoreButtons />
          </div>
        </div>
      </section>
    </div>
  );
}
