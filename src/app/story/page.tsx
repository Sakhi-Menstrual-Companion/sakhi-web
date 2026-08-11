import type { Metadata } from "next";
import { ImageIcon } from "lucide-react";

import { Container, GradientText, PageHero, Section } from "@/components/ui/section";
import { FinalCTA } from "@/components/ui/final-cta";
import { Timeline } from "@/components/ui/timeline";
import { Spotlight } from "@/components/ui/spotlight";

export const metadata: Metadata = {
  title: "Our Story, Sakhi",
  description:
    "From a friend's bad cramps to the App Store. The honest, sourced story of how and why Sakhi was built.",
};

/** Marks where a real photograph belongs. The caption sits outside the frame so nothing shifts once a photo lands. */
function Photo({ caption, aspect = "aspect-video" }: { caption: string; aspect?: string }) {
  return (
    <figure>
      <div
        className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-gradient-to-br from-muted to-background-blush text-muted-foreground`}
      >
        <ImageIcon className="size-6" aria-hidden="true" />
        <span className="eyebrow">Photo</span>
      </div>
      <figcaption className="mt-3 max-w-[520px] text-[13.5px] leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-[32px] leading-none font-semibold text-transparent tabular-nums sm:text-[40px]">
        {value}
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-foreground">{label}</p>
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
  },
  {
    date: "Jan to Apr 2024",
    title: "49 interviews, one clear gap",
    body: "The team talks to 49 women across campuses, homes and communities, and consults gynaecologists. Most had never tracked their health with intention. They weren't managing it. They were surviving it.",
  },
  {
    date: "May 2024",
    title: "Apple Developer Program",
    body: "Sakhi is accepted into the Apple Developer Program under a university-custodian model, with Galgotias University as founding institutional partner.",
  },
  {
    date: "Mid 2024",
    title: "Going native",
    body: "Flutter is dropped for Swift and SwiftUI, full native iOS, with HealthKit integration. Native performance, native feel, native privacy.",
  },
  {
    date: "Q4 2024",
    title: "The world notices",
    body: "The Times of India covers Sakhi. The team presents at the UP International Trade Show. Then Sakhi is presented to seven Apple delegates, including Greg Joswiak, Apple's Senior Vice President of Worldwide Marketing.",
  },
  {
    date: "Mar 2025",
    title: "First real users",
    body: "TestFlight opens. Women outside the team log real cycles and ask Sakhi AI real questions. The feedback is honest, detailed, and hard to ignore.",
  },
  {
    date: "Jun 14, 2025",
    title: "She's live",
    body: "Sakhi launches on the App Store. After a year and a half of research and rebuilds, women start downloading it because they need it, not because they know the team.",
  },
  {
    date: "Sep 2025",
    title: "Apple's Success Story",
    body: "Apple selects Sakhi for its College Students: Success Stories feature and runs a full-day photoshoot on the Galgotias campus.",
  },
  {
    date: "May 2026",
    title: "Back to build v2",
    body: "With Galgotias University's continued backing, Karan returns to lead the product full-time. There is a lot still to build.",
  },
  {
    date: "2026",
    title: "v2 is underway",
    body: "Android support, a Doctor Report PDF export, and the full Be Her Sakhi relationship layer are all in progress.",
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
      <PageHero
        eyebrow="Origin story"
        title="She was in pain, and I had nothing real to give her"
        lead="Karan Kumar · Founder · January 2024 to today"
      />

      {/* ------------------------------------------------------------- essay */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_360px]">
            <div className="max-w-[640px] space-y-6 text-[17px] leading-relaxed text-foreground">
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
              <p className="text-muted-foreground italic">That is where Sakhi began.</p>
            </div>
            <Photo caption="Team 07 at the ISDP Bootcamp, Galgotias University, early 2024." aspect="aspect-square" />
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------------------- the numbers */}
      <Section tone="blush">
        <Container>
          <div className="mx-auto max-w-[42rem] text-center">
            <span className="eyebrow">The measured version</span>
            <h2 className="text-h2 mt-4 text-foreground">
              What I saw in one friend turned out to be <GradientText>the norm</GradientText>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Stat value="70.2%" label="Have disruptive period pain" />
            <Stat value="14.2%" label="Have told a doctor about it" />
            <Stat value="56pt" label="The gap between those numbers" />
            <Stat value="1 in 5" label="Have PCOD or PCOS" />
          </div>
          <p className="mx-auto mt-10 max-w-[42rem] text-center text-[13px] text-muted-foreground">
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
        </Container>
      </Section>

      {/* ---------------------------------------------------------- reflection */}
      <Section>
        <Container>
          <div className="mx-auto max-w-[640px] space-y-6 text-[17px] leading-relaxed text-muted-foreground">
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
        </Container>
      </Section>

      {/* ------------------------------------------------------------ ink band */}
      <section className="relative overflow-hidden bg-ink px-6 py-28 sm:px-8 sm:py-32">
        <Spotlight className="top-0 left-1/2 -translate-x-1/2" fill="var(--secondary)" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-[46rem] text-center">
            <p className="text-h2 text-white">
              Period is not a taboo. <GradientText tone="ink">Not here.</GradientText>
            </p>
            <p className="text-lead mx-auto mt-8 max-w-[36rem] text-white/65">
              We built Sakhi because the silence around women&rsquo;s health in India is
              deafening. 49 interviews. Dozens of conversations with gynaecologists. One
              consistent finding: women weren&rsquo;t being heard. So we built the thing that
              would hear them.
            </p>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ timeline */}
      <Section>
        <Container className="max-w-[52rem]">
          <span className="eyebrow">The journey</span>
          <h2 className="text-h2 mt-4 text-foreground">2024 to 2026</h2>
          <div className="mt-14">
            <Timeline
              data={timelineEntries.map((entry) => ({
                title: entry.date,
                content: (
                  <div>
                    <h3 className="text-h4 text-foreground">{entry.title}</h3>
                    <p className="mt-2 max-w-lg text-[14.5px] leading-relaxed text-muted-foreground">
                      {entry.body}
                    </p>
                  </div>
                ),
              }))}
            />
          </div>
          <Photo caption="Karan presenting to Greg Joswiak and the Apple delegation, Q4 2024." />
        </Container>
      </Section>

      {/* -------------------------------------------------------- what it means */}
      <Section tone="blush">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_300px]">
            <div>
              <span className="eyebrow">What we learned</span>
              <p className="text-h2 mt-4 max-w-[22ch] text-foreground">
                A girl&rsquo;s health is not just her data. It is something her people want to
                understand, and act on.
              </p>
              <div className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
                {closingStats.map((s) => (
                  <div key={s.label}>
                    <div className="text-[26px] leading-none font-semibold tracking-[-0.02em] text-foreground tabular-nums">
                      {s.value}
                    </div>
                    <p className="mt-2 text-[13.5px] text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 lg:mt-14">
              <div className="size-14 rounded-full bg-gradient-to-br from-primary to-secondary" aria-hidden="true" />
              <p className="mt-5 text-[15px] font-semibold text-foreground">Karan Kumar</p>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                Founder. Started this in a bootcamp in January 2024. Back building v2.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA
        title="Add your chapter"
        emphasis="to this one"
        lead="Sakhi is free, has no ads, and never sells her data."
      />
    </div>
  );
}
