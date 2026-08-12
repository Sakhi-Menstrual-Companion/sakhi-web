import type { Metadata } from "next";
import { Download, Handshake, Mail, Megaphone } from "lucide-react";

import { Container, GradientText, PageHero, Section, SectionHeading } from "@/components/ui/section";
import { SectionNav } from "@/components/ui/section-nav";
import { HeroPillLinks, HeroTagRow } from "@/components/ui/page-hero-variants";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Timeline } from "@/components/ui/timeline";

export const metadata: Metadata = {
  title: "Resources, Sakhi",
  description:
    "How to help, the Sakhi brand system, and where Sakhi has been covered. Ways to contribute, brand guidelines for press, and press coverage.",
};

/*
 * Was three pages: /contribute, /brand, /press. Merged as one page for
 * everyone who is not just here to use the app, someone deciding whether to
 * partner, cover, or help spread it.
 *
 * All three of those pages ended in their own version of the same ask, write
 * to contact@sakhiapp.in and we will send brand assets, a press kit, or get
 * back to you about partnering. Keeping three near-identical closing bands on
 * one page would read as a mistake, so this keeps that ask once, at the end,
 * covering all three reasons someone might be writing in. Nothing else was
 * shortened, that closing band is the only place three became one.
 *
 * Old URLs redirect here with an anchor (next.config.ts), including the three
 * in-page ids the Contribute cards used to be (#download, #ambassador,
 * #partner), which still resolve to the same cards below.
 */

const ways = [
  {
    id: "download",
    icon: Download,
    num: "01",
    title: "Download & use",
    body: "Be an early user. Your experience shapes the future of Sakhi. Every log, every bug report, every moment of 'this doesn't feel right' makes Sakhi better for the next woman.",
    cta: "Download Sakhi",
    href: "https://apps.apple.com/app/id6742219623",
    external: true,
  },
  {
    id: "ambassador",
    icon: Megaphone,
    num: "02",
    title: "Campus ambassador",
    body: "Bring Sakhi to your campus. Every college has women who need this. We support our campus ambassadors with resources, recognition, and a community building something meaningful together.",
    cta: "Become an ambassador",
    href: "mailto:contact@sakhiapp.in",
    external: false,
  },
  {
    id: "partner",
    icon: Handshake,
    num: "03",
    title: "Partner with us",
    body: "For institutions, companies, and brands. Sakhi works with universities and corporations to bring women's health infrastructure to campuses and workplaces.",
    cta: "Get in touch",
    href: "mailto:contact@sakhiapp.in",
    external: false,
  },
];

/**
 * Reference data, not styling. `hex` is printed on the page as the swatch's
 * label, so every value here has to stay a literal colour — a `var(--token)`
 * would render the page showing the string "var(--foreground)" where a hex
 * code belongs. Do not fold these into the semantic tokens.
 */
const colors = [
  { name: "Primary Pink", hex: "#F61887", rgb: "246 · 24 · 135", bg: "#F61887", text: "#fff", usage: "CTA buttons, active states, key icons. The color of action and care." },
  { name: "Deep Pink", hex: "#D4006E", rgb: "212 · 0 · 110", bg: "#D4006E", text: "#fff", usage: "Hover states, pressed buttons, and any pink carrying white text." },
  { name: "Deep Burgundy", hex: "#6D1743", rgb: "109 · 23 · 67", bg: "#6D1743", text: "#fff", usage: "Rich dark accents, bold headings, brand identity moments." },
  { name: "Background Blush", hex: "#F8F2F4", rgb: "248 · 242 · 244", bg: "#F8F2F4", text: "#1D1D1F", usage: "Primary background. Warm near-white that gives Sakhi its warmth." },
  { name: "Soft Blush", hex: "#F8E5EC", rgb: "248 · 229 · 236", bg: "#F8E5EC", text: "#1D1D1F", usage: "Card surfaces, modal backgrounds, secondary highlights." },
  { name: "Text Black", hex: "#1D1D1F", rgb: "29 · 29 · 31", bg: "#1D1D1F", text: "#fff", usage: "All headings, primary body text." },
  { name: "Body Gray", hex: "#68686D", rgb: "104 · 104 · 109", bg: "#68686D", text: "#fff", usage: "Subtext, labels, secondary information, captions." },
  { name: "Light Gray", hex: "#EAD8E0", rgb: "234 · 216 · 224", bg: "#EAD8E0", text: "#1D1D1F", usage: "Inactive UI states, dividers, unselected backgrounds." },
];

const typeScale = [
  { role: "Display / Screen Title", weight: "Semibold or Bold", size: "28-34pt", usage: "Main heading on each screen. Make it large and direct." },
  { role: "Section Heading", weight: "Semibold", size: "20-22pt", usage: "Section labels, modal titles." },
  { role: "Body", weight: "Regular", size: "15-17pt", usage: "All body copy and subtitles." },
  { role: "Label", weight: "Medium", size: "13-15pt", usage: "Button text, navigation labels, captions." },
  { role: "Caption", weight: "Regular", size: "11-13pt", usage: "Fine print, timestamps, helper text." },
];

const voiceTraits = [
  { trait: "Warm", desc: "Speaks like a person, not a product.", example: "\"That sounds really rough. Your body has been dealing with a lot this week.\"" },
  { trait: "Honest", desc: "Does not overclaim. Says clearly when something needs a doctor.", example: "\"You have logged cramps for 5 days in a row. That is worth mentioning to your doctor.\"" },
  { trait: "Calm", desc: "No exclamation marks when things are okay. No alarm when uncertain.", example: "\"Late periods can have many causes. Worth keeping an eye on.\"" },
  { trait: "Direct", desc: "One clear sentence is always better than three vague ones.", example: "\"Your report is ready. Hand it to your doctor before the appointment.\"" },
  { trait: "Intimate", desc: "Responds from what you actually logged, not a generic script.", example: "\"You usually log lower energy in your luteal phase, that fits what you are feeling now.\"" },
];

const taglines = [
  { line: "She knows your body.", context: "Primary headline, hero, App Store" },
  { line: "Because she has been paying attention.", context: "Italic sub-headline paired with the above" },
  { line: "The conversation that was never had.", context: "For the relationship / Be Her Sakhi layer" },
  { line: "Some questions are too personal to Google.", context: "For Sakhi AI marketing" },
  { line: "Period is not a taboo. Not here.", context: "Brand manifesto, pink sections" },
  { line: "A world where no Indian woman manages her health alone.", context: "Vision statement" },
];

const dos = [
  "\"Tell me your cycle length\"",
  "\"Our Secret Code\"",
  "\"How are you feeling today?\"",
  "\"She invited you in. That is not a small thing.\"",
  "\"You have been logging cramps for 4 days. Worth mentioning to your doctor.\"",
  "Write it the way you would say it to a friend. Then make it shorter.",
];

const donts = [
  "\"We are committed to empowering women through holistic health solutions.\"",
  "\"Our AI-powered insights provide clinically validated predictions.\"",
  "\"Congratulations! You have completed your health profile!\"",
  "\"Enter cycle duration\", say \"Tell me your cycle length\"",
  "Lead with the technology. Lead with the feeling instead.",
  "\"Wellness\", \"Empowering\", \"Holistic\", \"AI-powered\" as a lead.",
];

const colorRules = [
  "Never use purple. That is Flo's color.",
  "Never use dark backgrounds as default. That is Clue.",
  "Red is for errors only, never decorative.",
  "No gradients as the primary visual device.",
  "Primary Pink never on large background blocks.",
  "All text on Blush must be Text Black or Body Gray.",
];

const typeRules = [
  "One dominant heading per screen. Make it large and direct.",
  "Never more than two weights on a single screen.",
  "No italic except for Hindi/foreign terms or pull quotes.",
  "Line height: 1.4x for body, 1.1x for headings.",
  "Never use thin weights for headings, they undercut the brand.",
  "Letter spacing: none for headings, 0.02em for small caps only.",
];

const logoUsage = [
  "Clear space: minimum equal to the height of the 'S' on all four sides.",
  "Approved colors: Primary Pink on Blush, White on dark, Black on white.",
  "Never stretch, rotate, recolor, or add effects.",
  "Never place on a busy background or photo without a clear container.",
  "SVG is the master format. Export PNG or PDF from SVG.",
  "Never add drop shadows, glows, or outlines to the logo.",
];

const logoSwatches = [
  { bg: "var(--background-blush)", label: "On Blush, preferred", textColor: "var(--primary)" },
  { bg: "#FFFFFF", label: "On White, acceptable", textColor: "var(--primary)" },
  { bg: "var(--primary)", label: "On Pink, reversed white", textColor: "#FFFFFF" },
];

const pressItems = [
  {
    publication: "Times of India",
    date: "Q4 2024",
    description: "National coverage of a student-built women's health app from Galgotias University making waves in India's health tech space.",
  },
  {
    publication: "Apple Success Story",
    date: "September 2025",
    description: "Apple selected Sakhi's journey for a global Success Story feature. Photoshoot on the Galgotias campus. A student app, recognised by the world's most valuable company.",
  },
  {
    publication: "UP International Trade Show",
    date: "Q4 2024",
    description: "Sakhi represented the next generation of Indian health technology at one of India's most prominent trade and innovation showcases.",
  },
  {
    publication: "Greg Joswiak, Apple SVP",
    date: "Q4 2024",
    description: "Sakhi was presented directly to Greg Joswiak, Apple's Senior Vice President. A student app from UP, standing in front of one of the most powerful people in tech.",
  },
];

function RuleList({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((r) => (
        <div key={r} className="flex items-start gap-2.5">
          <div className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
          <span className="text-[13px] leading-relaxed text-muted-foreground">{r}</span>
        </div>
      ))}
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Join the mission"
        title={
          <>
            Join the <GradientText>Sakhi mission</GradientText>
          </>
        }
        lead="Three ways to be part of something that genuinely matters, for women across India."
      >
        <HeroPillLinks links={ways} />
        <SectionNav
          items={[
            { href: "#contribute", label: "Get Involved" },
            { href: "#brand", label: "Brand" },
            { href: "#press", label: "Press" },
          ]}
        />
      </PageHero>

      {/* ============================================================ CONTRIBUTE */}
      <Section id="contribute">
        <Container>
          <SectionHeading title="How you can help" />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {ways.map((w) => (
              <div
                key={w.title}
                id={w.id}
                className="flex scroll-mt-[calc(var(--nav-clearance)+1rem)] flex-col rounded-2xl border border-border bg-card p-8 transition-[transform,border-color,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover"
              >
                <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-[13px] font-bold text-transparent">
                  {w.num}
                </span>
                <h3 className="text-h4 mt-4 text-foreground">{w.title}</h3>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-muted-foreground">{w.body}</p>
                <a
                  href={w.href}
                  target={w.external ? "_blank" : undefined}
                  rel={w.external ? "noopener noreferrer" : undefined}
                  className="mt-6 text-[14px] font-semibold text-secondary no-underline underline-offset-[3px] hover:underline"
                >
                  {w.cta} →
                </a>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- for campuses */}
      <Section tone="blush">
        <Container>
          <div className="mx-auto max-w-[42rem]">
            <HoverBorderGradient
              as="div"
              duration={2200}
              containerClassName="rounded-2xl p-[1.5px] w-full"
              className="flex w-full flex-col items-stretch rounded-2xl bg-card px-9 py-10 text-left sm:px-12 sm:py-12"
            >
              <span className="eyebrow">For universities</span>
              <h2 className="text-h3 mt-4 text-foreground">Sakhi for your campus</h2>
              <p className="mt-3 text-[15px] font-medium text-secondary">₹50,000 – ₹1,00,000 per year</p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                A complete women&rsquo;s health program for your institution. Cycle tracking, AI-powered
                insights, Doctor Reports, and care infrastructure built for college life. Over 50,000
                women across India study at campuses with no structured menstrual health support. Sakhi
                changes that.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-6 py-3 text-[14px] font-semibold text-secondary-foreground no-underline transition-colors duration-200 hover:bg-[#b8005f]"
              >
                Talk to us →
              </a>
            </HoverBorderGradient>
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- for companies */}
      <Section>
        <Container>
          <div className="mx-auto max-w-[42rem] rounded-2xl border border-border bg-card p-9 sm:p-12">
            <span className="eyebrow">For companies</span>
            <h2 className="text-h3 mt-4 text-foreground">Healthy employees build better companies</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Bring Sakhi to your female employees. Real health support, not generic wellness noise.
              Women who understand their health take fewer unplanned sick days, communicate better
              about their needs, and feel more supported at work. Sakhi is wellness that actually
              works.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-secondary no-underline underline-offset-[3px] hover:underline"
            >
              Corporate enquiry →
            </a>
          </div>
        </Container>
      </Section>

      {/* =============================================================== BRAND */}
      <Section id="brand" tone="blush">
        <Container>
          <div className="mx-auto max-w-[46rem] text-center">
            <span className="eyebrow">Brand system</span>
            <h2 className="text-h2 mt-4 text-foreground">
              Built on clear design. <GradientText>Guided by honest voice.</GradientText>
            </h2>
            <p className="text-lead mx-auto mt-5 max-w-[38rem] text-muted-foreground">
              Every color, every word, every decision in Sakhi&rsquo;s design comes from one place,
              making a woman feel understood, not processed.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <HeroTagRow tags={["Warm", "Honest", "Calm", "Direct", "Intimate"]} />
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------------------- color palette */}
      <Section tone="blush" divided={false}>
        <Container>
          <SectionHeading
            eyebrow="Color palette"
            title="The palette of care"
            lead="Never purple, that's Flo. Never dark backgrounds by default, that's Clue. Sakhi owns warm, pink, and human."
            align="left"
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {colors.map((c) => (
              <div key={c.hex} className="overflow-hidden rounded-2xl border border-border transition-transform duration-300 ease-(--ease-out-soft) hover:-translate-y-1">
                <div className="h-16" style={{ background: c.bg }} />
                <div className="bg-card p-4">
                  <div className="text-[13px] font-medium text-foreground">{c.name}</div>
                  <div className="mt-0.5 font-mono text-[12px] text-secondary">{c.hex}</div>
                  <div className="mt-1.5 text-[10px] text-muted-foreground">RGB {c.rgb}</div>
                  <div className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">{c.usage}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-7">
            <div className="mb-4 text-[13px] font-medium text-foreground">Color rules, never break these</div>
            <RuleList items={colorRules} />
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ typography */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Typography"
            title="General Sans"
            align="left"
            lead={
              <>
                Clean, geometric, warm. Not clinical. Not cute. It pairs confidence with enough
                roundness to feel approachable. Free for commercial use via{" "}
                <a
                  href="https://www.fontshare.com/fonts/general-sans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary underline underline-offset-2"
                >
                  fontshare.com
                </a>
                .
              </>
            }
          />

          <div className="mt-14 rounded-2xl border border-border bg-card p-8 sm:p-12">
            <div className="mb-8 text-[13px] font-semibold text-muted-foreground">Type specimen</div>
            <div className="space-y-6 divide-y divide-border [&>div]:pt-6 [&>div]:first:pt-0">
              <div>
                <p className="text-[32px] leading-tight font-semibold text-foreground sm:text-[42px]">
                  Tell me your cycle length.
                </p>
                <p className="mt-2 text-[13px] text-muted-foreground">Display / 42pt Semibold</p>
              </div>
              <div>
                <p className="text-[20px] leading-snug font-semibold text-foreground sm:text-[22px]">
                  You have been logging cramps for 5 days.
                </p>
                <p className="mt-2 text-[13px] text-muted-foreground">Section Heading / 22pt Semibold</p>
              </div>
              <div>
                <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
                  That sounds really rough. Your body has been dealing with a lot this week. Looking at
                  what you have logged, you are on day 26, which is often the hardest part of the cycle
                  for mood.
                </p>
                <p className="mt-2 text-[13px] text-muted-foreground">Body / 16pt Regular</p>
              </div>
              <div>
                <p className="text-[13px] font-medium tracking-[0.02em] text-secondary">
                  OVULATION PHASE · DAY 14
                </p>
                <p className="mt-2 text-[13px] text-muted-foreground">Label / 13pt Medium · loose tracking</p>
              </div>
            </div>
          </div>

          {/* A real table: the four columns line up across rows and that alignment
              is the information. Scrolls inside its own container so the page
              itself never scrolls sideways. */}
          <div className="mt-6 overflow-x-auto">
            <div className="flex min-w-[620px] flex-col divide-y divide-border rounded-2xl border border-border bg-card">
              {typeScale.map((t) => (
                <div
                  key={t.role}
                  className="grid grid-cols-[minmax(150px,220px)_110px_80px_minmax(200px,1fr)] items-center gap-0 px-5 py-4"
                >
                  <div className="text-[13px] font-medium text-foreground">{t.role}</div>
                  <div className="text-[12px] text-muted-foreground">{t.weight}</div>
                  <div className="font-mono text-[12px] text-secondary">{t.size}</div>
                  <div className="text-[12px] text-muted-foreground">{t.usage}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-card p-7">
            <div className="mb-4 text-[13px] font-medium text-foreground">Typography rules</div>
            <RuleList items={typeRules} />
          </div>
        </Container>
      </Section>

      {/* ----------------------------------------------------------- voice & tone */}
      <Section tone="blush">
        <Container>
          <SectionHeading
            eyebrow="Voice & tone"
            title="One voice. Five traits."
            lead="Sakhi is the friend who is always honest with you. Warm but not soft. Direct but not cold. She never judges. She remembers everything you told her and brings it up at the right moment."
            align="left"
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {voiceTraits.map((t) => (
              <div key={t.trait} className="rounded-2xl border border-border bg-card p-6 transition-[transform,border-color,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover">
                <div className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-[15px] font-bold text-transparent">
                  {t.trait}
                </div>
                <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">{t.desc}</p>
                <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground italic">{t.example}</p>
              </div>
            ))}
          </div>

          {/* Do / Don't */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-accent bg-accent-faint p-7">
              <div className="mb-5 flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary" />
                <span className="text-[14px] font-semibold text-foreground">Sakhi sounds like this</span>
              </div>
              <div className="flex flex-col gap-3">
                {dos.map((d) => (
                  <div key={d} className="border-l-2 border-secondary/25 pl-3.5 text-[13px] leading-relaxed text-foreground">
                    {d}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-muted p-7">
              <div className="mb-5 flex items-center gap-2">
                <div className="size-2 rounded-full bg-muted-foreground" />
                <span className="text-[14px] font-semibold text-muted-foreground">Sakhi never sounds like this</span>
              </div>
              <div className="flex flex-col gap-3">
                {donts.map((d, i) => (
                  <div
                    key={d}
                    className={`border-l-2 border-border pl-3.5 text-[13px] leading-relaxed text-muted-foreground ${i < 4 ? "line-through" : ""}`}
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-ink px-8 py-7">
            <p className="text-[15px] font-semibold tracking-[0.02em] text-primary-soft">
              The single test for every piece of copy:
            </p>
            <p className="mt-2.5 text-[20px] leading-snug text-white sm:text-[22px]">
              Would a real friend say this? If no, rewrite it.
            </p>
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- taglines */}
      <Section>
        <Container className="max-w-[52rem]">
          <SectionHeading
            eyebrow="Key lines"
            title="The words that define Sakhi"
            lead="These lines are not taglines written by a copywriter. They came from understanding the problem deeply and saying it honestly."
            align="left"
          />
          <div className="mt-14 flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
            {taglines.map((t) => (
              <div key={t.line} className="grid grid-cols-1 items-center gap-2 px-6 py-5 sm:grid-cols-[1fr_240px] sm:gap-6">
                <div className="text-[17px] leading-snug text-foreground italic">&ldquo;{t.line}&rdquo;</div>
                <div className="text-[12px] leading-relaxed text-muted-foreground">{t.context}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- logo rules */}
      <Section tone="blush">
        <Container>
          <SectionHeading
            eyebrow="Logo"
            title="sakhi. in Primary Pink"
            lead="The logotype is the brand. Clear space, no effects, approved colors only."
            align="left"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {logoSwatches.map((v) => (
              <div key={v.label}>
                <div
                  className="flex items-center justify-center rounded-2xl py-11"
                  style={{ background: v.bg, border: v.bg === "#FFFFFF" ? "1px solid var(--border)" : "none" }}
                >
                  <div className="text-[28px] font-bold" style={{ color: v.textColor }}>
                    sakhi.
                  </div>
                </div>
                <div className="eyebrow mt-2.5 text-center">{v.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-background-blush p-7">
            <div className="mb-4 text-[13px] font-medium text-foreground">Logo usage rules</div>
            <RuleList items={logoUsage} />
          </div>
        </Container>
      </Section>

      {/* =============================================================== PRESS */}
      <Section id="press">
        <Container className="max-w-[52rem]">
          <SectionHeading eyebrow="Press" title="Sakhi in the world" lead="We didn't chase press. We built something worth talking about. Here's where the world has noticed." align="left" />
          <div className="mt-14">
            <Timeline
              data={pressItems.map((item) => ({
                title: item.date,
                content: (
                  <div>
                    <h3 className="text-h4 text-foreground">{item.publication}</h3>
                    <p className="mt-2 max-w-lg text-[14.5px] leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ),
              }))}
            />
          </div>
        </Container>
      </Section>

      {/* ================================================ ONE CLOSING CONTACT
          Replaces three near-identical "email us and we'll send it over" bands
          (Contribute's, Brand's, Press's). Same address, same 24-hour promise,
          worded to cover all three reasons someone ends up here: partnering,
          brand assets, or a press kit. The two anchor links above ("Talk to
          us", "Corporate enquiry") point at this section rather than each
          opening mail directly, so every enquiry lands in the same place. */}
      <section id="contact" className="relative scroll-mt-[calc(var(--nav-clearance)+1rem)] overflow-hidden bg-ink px-6 py-24 text-center sm:px-8 sm:py-28">
        <Spotlight className="top-0 left-1/2 -translate-x-1/2" fill="var(--secondary)" />
        <Container className="relative z-10 flex flex-col items-center">
          <h2 className="text-h2 max-w-[24ch] text-white">
            Questions, partnerships, <GradientText tone="ink">or press?</GradientText>
          </h2>
          <p className="text-lead mx-auto mt-5 max-w-[42ch] text-white/65">
            Brand assets, product screenshots, founder bios, and the full Sakhi story, ready to send
            over. Write to us for any of it.
          </p>
          <a
            href="mailto:contact@sakhiapp.in"
            className="mt-10 inline-flex items-center gap-2.5 text-[26px] font-medium text-white no-underline transition-colors duration-200 hover:text-primary-soft sm:text-[32px]"
          >
            <Mail className="size-6" aria-hidden="true" /> contact@sakhiapp.in
          </a>
          <p className="mt-4 text-[13px] text-white/50">We respond within 24 hours.</p>
          <a
            href="https://apps.apple.com/app/id6742219623"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-[14px] font-semibold text-secondary-foreground no-underline transition-colors duration-200 hover:bg-[#b8005f]"
          >
            Or just download Sakhi →
          </a>
        </Container>
      </section>
    </div>
  );
}
