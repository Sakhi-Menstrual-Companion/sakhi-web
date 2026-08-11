import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { Container, GradientText, PageHero, Section, SectionHeading } from "@/components/ui/section";
import { HeroTagRow } from "@/components/ui/page-hero-variants";
import { Spotlight } from "@/components/ui/spotlight";

export const metadata: Metadata = {
  title: "Brand, Sakhi",
  description: "Sakhi's brand system: colors, typography, voice, and design principles. Everything that makes Sakhi feel like Sakhi.",
};

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

export default function BrandPage() {
  return (
    <div>
      <PageHero
        eyebrow="Brand system"
        title={
          <>
            Built on clear design. <GradientText>Guided by honest voice.</GradientText>
          </>
        }
        lead={<>Every color, every word, every decision in Sakhi&rsquo;s design comes from one place, making a woman feel understood, not processed. This page documents how we do that.</>}
      >
        <HeroTagRow tags={["Warm", "Honest", "Calm", "Direct", "Intimate"]} />
      </PageHero>

      {/* --------------------------------------------------------- color palette */}
      <Section>
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

          <div className="mt-8 rounded-2xl border border-border bg-background-blush p-7">
            <div className="mb-4 text-[13px] font-medium text-foreground">Color rules, never break these</div>
            <RuleList items={colorRules} />
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ typography */}
      <Section tone="blush">
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
      <Section>
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
      <Section tone="blush">
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
      <Section>
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

      {/* --------------------------------------------------- press & partnerships */}
      <section className="relative overflow-hidden bg-ink px-6 py-24 sm:px-8 sm:py-28">
        <Spotlight className="top-0 left-1/2 -translate-x-1/2" fill="var(--secondary)" />
        <Container className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-h2 max-w-[22ch] text-white">
            For press <GradientText tone="ink">and partnerships</GradientText>
          </h2>
          <p className="text-lead mx-auto mt-5 max-w-[38ch] text-white/65">
            Logos, screenshots, founder bios, and the full brand story, ready for media use. Write to
            us and we&rsquo;ll send everything over.
          </p>
          <a
            href="mailto:contact@sakhiapp.in"
            className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-secondary px-7 py-3.5 text-[15px] font-semibold text-secondary-foreground no-underline transition-colors duration-200 hover:bg-[#b8005f]"
          >
            <Mail className="size-4" aria-hidden="true" /> contact@sakhiapp.in
          </a>
        </Container>
      </section>
    </div>
  );
}
