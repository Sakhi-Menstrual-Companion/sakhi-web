import type { Metadata } from "next";
import {
  Download,
  FileText,
  Handshake,
  ImageIcon,
  Mail,
  Megaphone,
  Palette,
  Type,
} from "lucide-react";

import { Container, GradientText, PageHero, Section, SectionHeading } from "@/components/ui/section";
import { SectionNav } from "@/components/ui/section-nav";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Timeline } from "@/components/ui/timeline";

export const metadata: Metadata = {
  title: "Resources, Sakhi",
  description:
    "Ways to get involved with Sakhi, the media kit for press and partners, and where Sakhi has been covered.",
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
 * covering all three reasons someone might be writing in.
 *
 * What this page is NOT is the design system. It used to carry the full
 * internal brand documentation — an eight-card colour grid with usage prose,
 * the type scale table, voice-and-tone traits with do/don't columns, and the
 * tagline library. That is reference material for people building the product,
 * and most of it (brand colours, type scale, surface ladder, motion, spacing)
 * is already documented as live specimens on /design-system. A visitor here is
 * a journalist, a partner or someone who wants to help; they need assets and
 * the rules for using them, not the system that produced them. The brand
 * documentation is preserved in git history if any of it is ever wanted back.
 *
 * Old URLs redirect here with an anchor (next.config.ts), including the three
 * in-page ids the Contribute cards used to be (#download, #ambassador,
 * #partner), which still resolve to the same cards below. /brand now lands on
 * #media-kit, the closest public equivalent of what that page offered.
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
 *
 * Trimmed to the four colours someone reproducing the brand actually needs.
 * The full palette with per-token usage notes lives on /design-system.
 */
const kitColors = [
  { name: "Primary Pink", hex: "#F61887", bg: "#F61887", onDark: true },
  { name: "Deep Pink", hex: "#D4006E", bg: "#D4006E", onDark: true },
  { name: "Background Blush", hex: "#F8F2F4", bg: "#F8F2F4", onDark: false },
  { name: "Text Black", hex: "#1D1D1F", bg: "#1D1D1F", onDark: true },
];

const logoSwatches = [
  { bg: "var(--background-blush)", label: "On Blush, preferred", textColor: "var(--primary)" },
  { bg: "#FFFFFF", label: "On White, acceptable", textColor: "var(--primary)" },
  { bg: "var(--primary)", label: "On Pink, reversed white", textColor: "#FFFFFF" },
];

/* What we can actually send. Deliberately described rather than linked: there
   is no asset bundle hosted on this site, so a download button here would be
   a dead end. The contact band at the foot of the page is the real route. */
const kitContents = [
  {
    icon: ImageIcon,
    title: "Logo files",
    body: "The sakhi. logotype as SVG, plus PNG exports at common sizes, in all three approved colourways.",
  },
  {
    icon: Palette,
    title: "Brand colours",
    body: "Hex, RGB and usage notes for the full palette, so Sakhi reproduces correctly in print and on screen.",
  },
  {
    icon: FileText,
    title: "Founder bio & fact sheet",
    body: "Short and long bios, the founding story, and the numbers behind Sakhi with their sources.",
  },
  {
    icon: Type,
    title: "Product screenshots",
    body: "High-resolution captures of the app, including the screens most often used in coverage.",
  },
];

const logoUsage = [
  "Clear space: minimum equal to the height of the 'S' on all four sides.",
  "Approved colours: Primary Pink on Blush, White on dark, Black on white.",
  "Never stretch, rotate, recolour, or add effects.",
  "Never place on a busy background or photo without a clear container.",
  "SVG is the master format. Export PNG or PDF from SVG.",
  "Never add drop shadows, glows, or outlines to the logo.",
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

/**
 * The opener for each of the page's three chapters. The numbered token is
 * what carries the structure — it tells you which of three subjects you have
 * reached without needing a divider or a colour change to do that job.
 */
function ZoneHeading({
  num,
  eyebrow,
  title,
  lead,
}: {
  num: string;
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
}) {
  return (
    <div className="mb-16 max-w-[46rem]">
      <div className="flex items-center gap-3">
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-[11px] font-bold text-white">
          {num}
        </span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="text-h2 mt-5 text-foreground">{title}</h2>
      <p className="text-lead mt-4 text-muted-foreground">{lead}</p>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Everything you need to <GradientText>work with Sakhi</GradientText>
          </>
        }
        lead="Ways to get involved, the media kit for press and partners, and where Sakhi has been covered."
      >
        <SectionNav
          items={[
            { href: "#contribute", label: "Get Involved" },
            { href: "#media-kit", label: "Media Kit" },
            { href: "#press", label: "Press" },
          ]}
        />
      </PageHero>

      {/* ============================================================ CONTRIBUTE */}
      <Section id="contribute">
        <Container>
          <ZoneHeading
            num="01"
            eyebrow="Get involved"
            title="How you can help"
            lead="Three ways to be part of something that genuinely matters, for women across India."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {ways.map((w) => (
              <div
                key={w.title}
                id={w.id}
                className="group flex scroll-mt-[calc(var(--nav-clearance)+1rem)] flex-col rounded-2xl border border-border bg-card p-8 transition-[transform,border-color,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover"
              >
                <span className="inline-flex size-10 w-fit items-center justify-center rounded-xl bg-accent-faint text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                  <w.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="mt-5 bg-gradient-to-br from-primary to-secondary bg-clip-text text-[12px] font-bold text-transparent">
                  {w.num}
                </span>
                <h3 className="text-h4 mt-1.5 text-foreground">{w.title}</h3>
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

      {/* ---------------------------------------------------------- partnerships
          Universities and companies were previously a full-height section each,
          holding one centred card apiece. They are the same offer to two
          audiences, so they sit side by side and read as a choice. */}
      <Section tone="blush">
        <Container>
          <SectionHeading
            eyebrow="Partnerships"
            title="Bring Sakhi to your people"
            lead="Whether that is a campus of students or a floor of employees, the programme is the same: real health infrastructure, not a wellness newsletter."
            align="left"
          />
          <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
            <HoverBorderGradient
              as="div"
              duration={2200}
              containerClassName="rounded-2xl p-[1.5px] w-full h-full"
              className="flex h-full w-full flex-col items-stretch rounded-2xl bg-card px-9 py-10 text-left"
            >
              <span className="eyebrow">For universities</span>
              <h3 className="text-h3 mt-4 text-foreground">Sakhi for your campus</h3>
              <p className="mt-3 text-[15px] font-medium text-secondary">₹50,000 – ₹1,00,000 per year</p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
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

            <div className="flex flex-col rounded-2xl border border-border bg-card px-9 py-10">
              <span className="eyebrow">For companies</span>
              <h3 className="text-h3 mt-4 text-foreground">Healthy employees build better companies</h3>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                Bring Sakhi to your female employees. Real health support, not generic wellness noise.
                Women who understand their health take fewer unplanned sick days, communicate better
                about their needs, and feel more supported at work. Sakhi is wellness that actually
                works.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex w-fit items-center gap-1.5 text-[14.5px] font-semibold text-secondary no-underline underline-offset-[3px] hover:underline"
              >
                Corporate enquiry →
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================================ MEDIA KIT */}
      <Section id="media-kit">
        <Container>
          <ZoneHeading
            num="02"
            eyebrow="Media kit"
            title="Everything you need to write about Sakhi"
            lead="Logo files, brand colours, screenshots and the founding story, ready to send. Write to us and it is with you the same day."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {kitContents.map((item) => (
              <div
                key={item.title}
                className="group flex gap-4 rounded-2xl border border-border bg-card p-7 transition-[transform,border-color,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-faint text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-h4 text-foreground">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ---- the logo, and the rules that come with it ---- */}
          <div className="mt-20">
            <SectionHeading
              eyebrow="The logotype"
              title="sakhi. in Primary Pink"
              lead="The logotype is the brand. Clear space, no effects, approved colours only."
              align="left"
            />
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {logoSwatches.map((v) => (
                <div key={v.label}>
                  <div
                    className="flex items-center justify-center rounded-2xl py-11"
                    style={{
                      background: v.bg,
                      border: v.bg === "#FFFFFF" ? "1px solid var(--border)" : "none",
                    }}
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
              <div className="mb-4 text-[13px] font-medium text-foreground">
                Logo usage rules
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {logoUsage.map((r) => (
                  <div key={r} className="flex items-start gap-2.5">
                    <div className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-[13px] leading-relaxed text-muted-foreground">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---- colours, at the depth press actually needs ---- */}
          <div className="mt-20">
            <SectionHeading
              eyebrow="Brand colours"
              title="Four colours to get right"
              lead="Sakhi is warm, pink and human. Never purple, never dark by default. These are the values to reproduce from."
              align="left"
            />
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {kitColors.map((c) => (
                <div
                  key={c.hex}
                  className="overflow-hidden rounded-2xl border border-border bg-card transition-[transform,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div
                    className="flex h-24 items-end p-4"
                    style={{ background: c.bg }}
                  >
                    <span
                      className="font-mono text-[12px] font-medium"
                      style={{ color: c.onDark ? "#fff" : "#1D1D1F" }}
                    >
                      {c.hex}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="text-[13px] font-medium text-foreground">{c.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* =============================================================== PRESS */}
      <Section tone="blush" id="press">
        <Container className="max-w-[52rem]">
          <ZoneHeading
            num="03"
            eyebrow="Press"
            title="Sakhi in the world"
            lead="We didn't chase press. We built something worth talking about. Here's where the world has noticed."
          />
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
        </Container>
      </Section>

      {/* ================================================ ONE CLOSING CONTACT
          Replaces three near-identical "email us and we'll send it over" bands
          (Contribute's, Brand's, Press's). Same address, same 24-hour promise,
          worded to cover all three reasons someone ends up here: partnering,
          brand assets, or a press kit. The anchor links above ("Talk to us",
          "Corporate enquiry") point at this section rather than each opening
          mail directly, so every enquiry lands in the same place. */}
      <section
        id="contact"
        className="relative scroll-mt-[calc(var(--nav-clearance)+1rem)] overflow-hidden bg-ink px-6 py-24 text-center sm:px-8 sm:py-28"
      >
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
