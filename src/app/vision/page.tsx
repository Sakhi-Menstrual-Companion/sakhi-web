import type { Metadata } from "next";

import { Container, GradientText, Section, SectionHeading } from "@/components/ui/section";
import { FinalCTA } from "@/components/ui/final-cta";
import { Timeline } from "@/components/ui/timeline";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export const metadata: Metadata = {
  title: "Vision & Roadmap, Sakhi",
  description: "Where Sakhi is going. Our mission, values, and the roadmap to 1 billion users.",
};

const roadmapItems = [
  { period: "Now, 2026", headline: "100,000 downloads · Android beta · Premium subscription · B2B campus contracts", detail: "v2 launches June 2, 2026 with Android support. Premium subscription in August. First campus B2B partnerships starting November." },
  { period: "2027", headline: "3 million users · Doctor network · Hindi and regional languages", detail: "Crossing 3M users. Full doctor network integration. Hindi, Tamil, Bengali, Marathi, Telugu support." },
  { period: "2028", headline: "Profitability · Sakhi Watch · 7 million users", detail: "First profitable year. Sakhi Watch brings passive tracking to your wrist. 7M users across India." },
  { period: "2029", headline: "Doctor consultations · Insurance integration · 15 million users", detail: "Book gynaecologist consultations inside Sakhi. Insurance partnerships. 15M users." },
  { period: "2034+", headline: "1 billion MAU · 100+ languages · IPO-ready", detail: "The long game. Full lifecycle coverage from first period to menopause. Every woman. Every language." },
];

const values = [
  { num: "01", title: "Genuinely help the user", body: "This is the only reason Sakhi exists. Not growth. Not revenue. Not recognition. Does this genuinely help the woman using it? If yes, we build it.", big: true },
  { num: "02", title: "Earn and keep trust", body: "Trust is the product. Health data is intimate. We treat it that way, encrypted, private, never sold, always under her control." },
  { num: "03", title: "Sustain the mission", body: "Revenue is fuel. Without it, we can't keep building. We earn it by being genuinely useful, not by compromising the first two values." },
  { num: "04", title: "Grow", body: "More users means more women helped. We grow because the problem is large, not because growth is the goal." },
  { num: "05", title: "Be recognised", body: "Press, awards, Apple features, these are outputs of doing good work, not things we chase. They come when the first four are right." },
];

const northStar = [
  { n: "3B", label: "downloads, the long game" },
  { n: "1B", label: "monthly active users" },
  { n: "100+", label: "languages supported" },
];

export default function VisionPage() {
  return (
    <div>
      {/* Hero, variant: "mesh gradient minimal" (Linear style) — no dot-grid,
          no card, no stat row: three soft overlapping colour fields behind
          nothing but an eyebrow, a headline and a lead line. The confidence
          is in the emptiness, not in what's added. */}
      <section className="relative overflow-hidden border-b border-border bg-background px-6 py-32 sm:px-8 sm:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(38% 45% at 22% 15%, rgba(246,24,135,0.16), transparent 65%)," +
              "radial-gradient(32% 40% at 82% 20%, rgba(212,0,110,0.13), transparent 60%)," +
              "radial-gradient(45% 50% at 50% 100%, rgba(109,23,67,0.08), transparent 65%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <Container className="relative z-10 flex flex-col items-center text-center">
          <span className="eyebrow">The vision</span>
          <h1 className="text-h1 mt-7 max-w-[18ch] text-foreground">
            We&rsquo;re not building <GradientText>an app</GradientText>
          </h1>
          <p className="text-lead mx-auto mt-7 max-w-[38rem] text-muted-foreground">
            We&rsquo;re building a relationship between a woman and her health. 252 million Indian
            women deserve a companion, not just a tracker. This is what we&rsquo;re working toward.
          </p>
        </Container>
      </section>

      {/* ------------------------------------------------------ mission & vision */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background-blush p-10">
              <span className="eyebrow">Mission</span>
              <h3 className="text-h3 mt-5 text-foreground">
                To be the health companion every Indian woman deserves.
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Every feature we build, every decision we make, every trade-off we accept, it starts with
                this. Are we genuinely helping the user?
              </p>
            </div>

            <HoverBorderGradient
              as="div"
              duration={2000}
              containerClassName="rounded-2xl p-[1.5px] w-full h-full"
              className="flex h-full w-full flex-col items-stretch rounded-2xl bg-secondary px-10 py-10 text-left"
            >
              <span className="eyebrow text-white/75">Vision</span>
              <h3 className="text-h3 mt-5 text-white">
                A world where no Indian woman manages her health alone.
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/85">
                Not a metric. Not a tagline. A real state of the world we&rsquo;re working toward, one
                woman, one cycle, one conversation at a time.
              </p>
            </HoverBorderGradient>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- roadmap */}
      <Section tone="blush">
        <Container className="max-w-[54rem]">
          <SectionHeading
            eyebrow="Roadmap"
            title="The journey ahead"
            lead="Where we are and where we're going, transparently."
            align="left"
          />
          <div className="mt-14">
            <Timeline
              data={roadmapItems.map((item) => ({
                title: item.period,
                content: (
                  <div>
                    <h3 className="text-h4 max-w-lg text-foreground">{item.headline}</h3>
                    <p className="mt-2 max-w-lg text-[14.5px] leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                ),
              }))}
            />
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------------------- core values */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="Five things that never change"
            lead="When features conflict, when revenue tempts, when growth pressures, these are what we come back to."
            align="left"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.num}
                className={`group rounded-2xl border border-border bg-card p-7 transition-[transform,border-color,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover ${v.big ? "sm:col-span-2" : ""}`}
              >
                <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-[13px] font-bold text-transparent">
                  {v.num}
                </span>
                <h3 className="text-h4 mt-3 text-foreground">{v.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ north star */}
      <Section tone="blush">
        <Container>
          <div className="mx-auto max-w-[46rem] text-center">
            <span className="eyebrow">North star</span>
            <h2 className="text-h2 mt-4 text-foreground">The number was never the goal</h2>
            <p className="text-lead mx-auto mt-5 max-w-[38rem] text-muted-foreground">
              The goal was that no woman faces her body alone. The number is just how we&rsquo;ll know
              we got there.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-[42rem] grid-cols-1 gap-4 sm:grid-cols-3">
            {northStar.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-7 text-center">
                <div className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-[36px] leading-none font-semibold text-transparent">
                  {s.n}
                </div>
                <p className="mt-3 text-[13px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA title="Be part of" emphasis="the journey" lead="Free. No ads. Her data stays hers." />
    </div>
  );
}
