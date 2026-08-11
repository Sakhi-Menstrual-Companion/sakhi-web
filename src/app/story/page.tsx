import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Our Story, Sakhi",
  description:
    "From a friend's bad cramps to the App Store. The honest, sourced story of how and why Sakhi was built.",
};

const appStoreUrl = "https://apps.apple.com/app/id6742219623";

/* ---------------------------------------------------------------------------
   This page follows design-reference/DESIGN-LANGUAGE.md.

   The rules that shape everything below, and that are easy to undo by accident:

   - Display type is weight 400, never 700. globals.css sets `h1, h2` to 700 in
     @layer base, so every heading here carries `font-normal` to win from
     @layer utilities. Removing that class is the single fastest way to make
     this page look generic again.
   - One accent, on almost nothing: inline links, the closing button, and four
     timeline dots. Not on eyebrows, not on icons, not as a surface tint.
   - Eyebrows are plain 11px uppercase grey text. No pill, no border, no
     sparkles icon.
   - Photo frames are flat: one hairline, 8px radius, no gradient, no icon.
   - Two surfaces only, white and Background Blush, plus one ink band.
   --------------------------------------------------------------------------- */

function AppleMark({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/** 11px uppercase grey. The section eyebrow, in place of a badge pill. */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] leading-4 font-medium tracking-[0.5px] text-muted-foreground uppercase">
      {children}
    </p>
  );
}

/**
 * Marks where a real photograph belongs. Flat fill, one hairline, 8px radius.
 * The caption sits outside the frame in 14px grey, which is how a real photo
 * will be captioned once it lands, so nothing shifts when it does.
 */
function Photo({
  caption,
  aspect = "aspect-[16/9]",
}: {
  caption: string;
  aspect?: string;
}) {
  return (
    <figure>
      <div
        className={`flex ${aspect} w-full items-center justify-center rounded-[8px] border border-border bg-muted`}
      >
        <span className="text-[11px] font-medium tracking-[0.5px] text-muted-foreground uppercase">
          Photo
        </span>
      </div>
      <figcaption className="mt-3 max-w-[520px] text-[14px] leading-6 tracking-[0.15px] text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

/** Large number at weight 400, then a plain label. No card, no border, no icon. */
function Stat({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: string;
}) {
  return (
    <div>
      <div className="text-[36px] leading-[44px] font-normal tracking-[-0.25px] text-foreground tabular-nums sm:text-[44px] sm:leading-[52px]">
        {value}
      </div>
      <p className="mt-3 text-[16px] leading-6 tracking-[0.1px] text-foreground">{label}</p>
      {note && (
        <p className="mt-1.5 text-[14px] leading-6 tracking-[0.15px] text-muted-foreground">
          {note}
        </p>
      )}
    </div>
  );
}

/* Dates and events cross-checked against 01-AI/Timeline.md. The most sensitive
   stretch of that record (Aug 2025 exit, IP transfer) is deliberately left out:
   it names someone who is no longer on the team and does not belong on a
   public page, per this repo's standing rule. */
const timelineEntries = [
  {
    date: "Jan 9, 2024",
    title: "A spark in a bootcamp",
    body: "Team 07 forms at the ISDP Bootcamp, Galgotias University. Handed a problem statement, the team chooses women's health, not because they were told to, but because it felt unaddressed.",
    pivotal: false,
  },
  {
    date: "Jan to Apr 2024",
    title: "49 interviews, one clear gap",
    body: "The team talks to 49 women across campuses, homes and communities, and consults gynaecologists. Most had never tracked their health with intention. They weren't managing it. They were surviving it.",
    pivotal: true,
  },
  {
    date: "May 2024",
    title: "Apple Developer Program",
    body: "Sakhi is accepted into the Apple Developer Program under a university-custodian model, with Galgotias University as founding institutional partner.",
    pivotal: false,
  },
  {
    date: "Mid 2024",
    title: "Going native",
    body: "Flutter is dropped for Swift and SwiftUI, full native iOS, with HealthKit integration. Native performance, native feel, native privacy.",
    pivotal: false,
  },
  {
    date: "Q4 2024",
    title: "The world notices",
    body: "The Times of India covers Sakhi. The team presents at the UP International Trade Show. Then Sakhi is presented to seven Apple delegates, including Greg Joswiak, Apple's Senior Vice President of Worldwide Marketing.",
    pivotal: true,
  },
  {
    date: "Mar 2025",
    title: "First real users",
    body: "TestFlight opens. Women outside the team log real cycles and ask Sakhi AI real questions. The feedback is honest, detailed, and hard to ignore.",
    pivotal: false,
  },
  {
    date: "Jun 14, 2025",
    title: "She's live",
    body: "Sakhi launches on the App Store. After a year and a half of research and rebuilds, women start downloading it because they need it, not because they know the team.",
    pivotal: true,
  },
  {
    date: "Sep 2025",
    title: "Apple's Success Story",
    body: "Apple selects Sakhi for its College Students: Success Stories feature and runs a full-day photoshoot on the Galgotias campus.",
    pivotal: false,
  },
  {
    date: "May 2026",
    title: "Back to build v2",
    body: "With Galgotias University's continued backing, Karan returns to lead the product full-time. There is a lot still to build.",
    pivotal: true,
  },
  {
    date: "2026",
    title: "v2 is underway",
    body: "Android support, a Doctor Report PDF export, and the full Be Her Sakhi relationship layer are all in progress.",
    pivotal: false,
  },
];

const closingStats = [
  { value: "49", label: "Interviews conducted" },
  { value: "16", label: "Conditions researched" },
  { value: "Jun 2025", label: "App Store launch" },
  { value: "Free", label: "No subscription required" },
];

export default function StoryPage() {
  return (
    <div>
      {/* ---------------------------------------------------------- masthead */}
      {/* A dateline, the thesis line as the headline, then a rule and a byline.
          This is how an essay opens. It is deliberately not the site's usual
          eyebrow-pill hero. pt clears the fixed navbar at y=18..68. */}
      <header className="bg-background px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-20">
        <Container>
          <AnimatedSection delay={0}>
            <Label>Origin story</Label>

            <h1 className="mt-6 max-w-[15ch] text-[28px] leading-[40px] font-normal tracking-[-0.25px] text-foreground sm:max-w-[20ch] sm:text-[48px] sm:leading-[56px] sm:tracking-[-0.5px] lg:text-[60px] lg:leading-[72px]">
              She was in pain, and I had nothing real to give her.
            </h1>

            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-6 text-[14px] leading-6 tracking-[0.15px] text-muted-foreground">
              <span className="text-foreground">Karan Kumar</span>
              <span aria-hidden="true">·</span>
              <span>Founder</span>
              <span aria-hidden="true">·</span>
              <span>January 2024 to today</span>
            </div>
          </AnimatedSection>
        </Container>
      </header>

      {/* ------------------------------------------------------------- essay */}
      {/* Not <Section>: this continues the masthead's white zone, so it carries
          the bottom padding and the divider but no top padding. */}
      <section className="border-b border-border bg-background px-4 pb-24 sm:px-6">
        <Container>
          <AnimatedSection delay={0}>
            <div className="max-w-[640px] space-y-6 text-[18px] leading-[28px] text-foreground">
              <p>
                When I was in college, one of my close friends was having really bad period
                cramps. She had already taken medicine that morning, but by the middle of the day
                the pain still hadn&rsquo;t gone, and she was thinking about taking another one.
              </p>
              <p>
                I didn&rsquo;t even know if that was safe. I told her the few things I knew, rest
                a little, use a hot water bag, try to eat something. But deep down I knew I was
                just giving generic advice. I didn&rsquo;t really know what would help her.
              </p>
              <p>
                That stayed with me. Every girl experiences these things differently. What feels
                normal for one person may not feel normal for someone else. And most of the time,
                they are figuring it out completely alone.
              </p>
              <p className="text-muted-foreground">That is where Sakhi began.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={80} className="mt-14 sm:mt-20">
            <Photo caption="Team 07 at the ISDP Bootcamp, Galgotias University, early 2024." />
          </AnimatedSection>
        </Container>
      </section>

      {/* --------------------------------------------------------- the numbers */}
      <Section tone="blush">
        <Container>
          <AnimatedSection delay={0}>
            <Label>The measured version</Label>
            <h2 className="mt-4 max-w-[20ch] text-[24px] leading-[32px] font-normal tracking-[-0.25px] text-foreground sm:text-[32px] sm:leading-[40px] lg:text-[36px] lg:leading-[44px]">
              What I saw in one friend turned out to be the norm.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 sm:mt-16 lg:grid-cols-4 lg:gap-x-12">
              <Stat value="70.2%" label="Have disruptive period pain" />
              <Stat value="14.2%" label="Have told a doctor about it" />
              <Stat value="56pt" label="The gap between those two numbers" />
              <Stat value="1 in 5" label="Have PCOD or PCOS" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <p className="mt-14 border-t border-border pt-6 text-[14px] leading-6 tracking-[0.15px] text-muted-foreground">
              Sources:{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5016343/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline underline-offset-2"
              >
                PMC, 1,000 Indian students
              </a>
              ,{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9826643/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline underline-offset-2"
              >
                PMC meta-analysis, 2023
              </a>
              , and the Indian Journal of Medical Research, 2019.
            </p>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ---------------------------------------------------------- reflection */}
      <Section tone="white">
        <Container>
          <AnimatedSection delay={0}>
            <div className="max-w-[640px] space-y-6 text-[18px] leading-[28px] text-muted-foreground">
              <p>
                This is not a story about rural India or poor India. This is the girl at an
                engineering college in Lucknow. The woman managing a team at a startup in
                Bangalore. The student in a Pune hostel with an iPhone and 4G, who has still
                never had a real conversation about what is happening in her own body.
              </p>
              <p className="text-foreground">
                I truly cared. And I had nothing real to offer. Not because I didn&rsquo;t want
                to help, but because I had no way in.
              </p>
              <p>
                Her mother senses something is off, calls every Sunday, and hears
                &ldquo;fine.&rdquo; Her partner wants to help and doesn&rsquo;t know how. Her
                best friend would show up if she knew. The loneliest part isn&rsquo;t the pain
                itself. It is managing it surrounded by people who love her and cannot reach her.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ ink band */}
      {/* The one dark passage. All the boldness on the page is spent here, on
          the line that carries the most weight, rather than scattered as
          decoration across the piece. */}
      <section className="bg-ink px-4 py-28 sm:px-6 sm:py-32">
        <Container>
          <AnimatedSection delay={0}>
            <div className="max-w-[760px]">
              <p className="text-[28px] leading-[40px] font-normal tracking-[-0.25px] text-ink-foreground sm:text-[40px] sm:leading-[52px] sm:tracking-[-0.5px]">
                Period is not a taboo. Not here.
              </p>
              <p className="mt-8 max-w-[560px] text-[18px] leading-[28px] text-ink-muted">
                We built Sakhi because the silence around women&rsquo;s health in India is
                deafening. 49 interviews. Dozens of conversations with gynaecologists. One
                consistent finding: women weren&rsquo;t being heard. So we built the thing that
                would hear them.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ------------------------------------------------------------ timeline */}
      <Section tone="white">
        <Container>
          <AnimatedSection delay={0}>
            <Label>The journey</Label>
            <h2 className="mt-4 text-[24px] leading-[32px] font-normal tracking-[-0.25px] text-foreground sm:text-[32px] sm:leading-[40px] lg:text-[36px] lg:leading-[44px]">
              2024 to 2026
            </h2>
          </AnimatedSection>

          <div className="mt-14 border-l border-border pl-8 sm:mt-16 sm:pl-10">
            <div className="space-y-12">
              {timelineEntries.map((entry, i) => (
                <AnimatedSection key={entry.date} delay={i * 30} className="relative">
                  <span
                    aria-hidden="true"
                    className={`absolute top-[5px] -left-[35px] size-[7px] rounded-full sm:-left-[43px] ${
                      entry.pivotal ? "bg-primary" : "bg-border"
                    }`}
                  />
                  <p className="text-[11px] leading-4 font-medium tracking-[0.5px] text-muted-foreground uppercase">
                    {entry.date}
                  </p>
                  <h3 className="mt-2.5 text-[20px] leading-[28px] font-normal text-foreground">
                    {entry.title}
                  </h3>
                  <p className="mt-2 max-w-[560px] text-[16px] leading-6 tracking-[0.1px] text-muted-foreground">
                    {entry.body}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection delay={0} className="mt-16">
            <Photo caption="Karan presenting to Greg Joswiak and the Apple delegation, Q4 2024." />
          </AnimatedSection>
        </Container>
      </Section>

      {/* -------------------------------------------------------- what it means */}
      <Section tone="blush">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_300px] lg:gap-20">
            <div>
              <AnimatedSection delay={0}>
                <Label>What we learned</Label>
                <p className="mt-4 max-w-[22ch] text-[24px] leading-[34px] font-normal tracking-[-0.25px] text-foreground sm:text-[32px] sm:leading-[44px]">
                  A girl&rsquo;s health is not just her data. It is something her people want to
                  understand, and act on.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-10 sm:grid-cols-4">
                  {closingStats.map((s) => (
                    <div key={s.label}>
                      <div className="text-[28px] leading-[36px] font-normal tracking-[-0.25px] text-foreground tabular-nums">
                        {s.value}
                      </div>
                      <p className="mt-2 text-[14px] leading-6 tracking-[0.15px] text-muted-foreground">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection
              delay={140}
              className="border-t border-border pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
            >
              <div className="size-16 rounded-full border border-border bg-muted" aria-hidden="true" />
              <p className="mt-5 text-[16px] leading-6 tracking-[0.1px] text-foreground">
                Karan Kumar
              </p>
              <p className="mt-1.5 text-[14px] leading-6 tracking-[0.15px] text-muted-foreground">
                Founder. Started this in a bootcamp in January 2024. Back building v2.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* ----------------------------------------------------------------- cta */}
      {/* The one high-emphasis button on the page. */}
      <Section tone="white" divided={false}>
        <Container>
          <AnimatedSection delay={0}>
            <div className="max-w-[560px]">
              <h2 className="text-[24px] leading-[32px] font-normal tracking-[-0.25px] text-foreground sm:text-[32px] sm:leading-[40px]">
                Add your chapter to this one.
              </h2>
              <p className="mt-4 text-[18px] leading-[28px] text-muted-foreground">
                Sakhi is free, has no ads, and never sells your data.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="h-12 rounded-[8px] px-6 text-[16px]">
                  <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                    <AppleMark /> Download on the App Store
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </div>
  );
}
