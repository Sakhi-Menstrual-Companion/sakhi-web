import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { CheckCircle2 } from "lucide-react";

import photoDoor from "@/assets/photo-sakhi-door.jpg";
import photoBooth from "@/assets/photo-apple-infosys-booth.jpg";
import journeyNotebook from "@/assets/journey-01-notebook.jpg";
import journeyName from "@/assets/journey-02-name.jpg";
import journeySketch from "@/assets/journey-03-sketch.jpg";
import journeyIconFigma from "@/assets/journey-03-icon-figma.jpg";
import journeyKanban from "@/assets/journey-04-kanban.jpg";
import journeyTrackScreen from "@/assets/journey-04-track-screen.jpg";
import journeyHighlightsScreen from "@/assets/journey-04-highlights-screen.jpg";
import journeyBuildingIt from "@/assets/journey-04-building-it.jpg";
import journeyExhibition from "@/assets/journey-05-exhibition.jpg";
import { Container, GradientText, PageHero, Section, SectionHeading } from "@/components/ui/section";
import { SectionNav } from "@/components/ui/section-nav";
import { FinalCTA } from "@/components/ui/final-cta";
import { Timeline } from "@/components/ui/timeline";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import ContributorsTiers, { type Contributor } from "@/components/ui/ContributorsTiers";
import JourneyTimeline from "@/components/ui/JourneyTimeline";
import IndiaMap from "@/components/ui/IndiaMap";

export const metadata: Metadata = {
  title: "About, Sakhi",
  description:
    "The story, the vision, and the people behind Sakhi. Why it was built, where it is going, and everyone who made it real.",
};

/*
 * Was four pages: /story, /vision, /team, /contributors. Merged as one
 * narrative — why it started, where it is going, who built it — rather than
 * four routes a reader had to know to click through in order.
 *
 * Team and Contributors overlapped almost entirely: both carried the same
 * Karan-and-Shruti bios and the same Galgotias founding-partner note, Team's
 * version shorter than Contributors'. Repeating the same two facts twice on
 * one page is not thoroughness, so this keeps Contributors' fuller telling of
 * each (the one with the contribution tags and the dated partner checklist)
 * once, plus Team's own "Small team. Deep conviction." framing as the
 * section's lead-in, and folds in everything from Contributors that Team
 * never had: the full tiered contributor list, the founding-partner detail,
 * and the India-wide journey visual. Nothing here is a fact that existed on
 * only one of the four old pages and is missing now.
 *
 * Old URLs redirect here with an anchor (next.config.ts).
 */

function Photo({
  src,
  alt,
  caption,
  aspect = "aspect-video",
}: {
  src: StaticImageData;
  alt: string;
  caption: string;
  aspect?: string;
}) {
  return (
    <figure>
      <div className={`overflow-hidden ${aspect} w-full rounded-2xl border border-border shadow-card`}>
        <Image src={src} alt={alt} className="h-full w-full object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
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

/* One frame style for every photo in "The build, in pictures" below, so a
   4-image row and a single wide hero both read as the same photo essay. */
function JourneyPhoto({
  src,
  alt,
  caption,
  aspect = "aspect-video",
}: {
  src: StaticImageData;
  alt: string;
  caption: string;
  aspect?: string;
}) {
  return (
    <figure>
      <div className={`overflow-hidden ${aspect} w-full rounded-2xl border border-border shadow-card`}>
        <Image src={src} alt={alt} className="h-full w-full object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
      <figcaption className="mt-2.5 text-[12.5px] leading-relaxed text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

/* Chapter wrapper: an eyebrow date, a short headline, one paragraph. The
   photo layout that follows each chapter varies (one photo, a hero, a grid
   of four), so it's rendered as a sibling in the page rather than a prop
   here, one <JourneyChapter> shape for every chapter regardless of how many
   photos come after it. */
function JourneyChapter({
  date,
  title,
  children,
}: {
  date: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className="eyebrow">{date}</span>
      <h3 className="text-h3 mt-3 max-w-[24ch] text-foreground">{title}</h3>
      <p className="mt-4 max-w-[42rem] text-[15px] leading-relaxed text-muted-foreground">{children}</p>
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

const teamDetailed = [
  {
    id: "karan",
    name: "Karan Kumar",
    role: "Founder & Product Lead",
    since: "January 2024",
    initials: "KK",
    bio: "Karan started Sakhi as Team 07 at the ISDP Bootcamp, Galgotias University, in January 2024. He leads product strategy, iOS development, AI integration, and the overall direction of Sakhi. Returned full-time on May 10, 2026 to lead the v2 launch.",
    quote: "Product is not what you build. It is the problem you solve.",
    contributions: ["iOS App (Swift/SwiftUI)", "Claude AI Integration", "Product Strategy", "Brand Vision", "Sakhi Design System", "v2 Architecture"],
    highlight: true,
  },
  {
    id: "shruti",
    name: "Shruti Sachdeva",
    role: "Design Lead",
    since: "January 2024",
    initials: "SS",
    bio: "Shruti is the visual mind behind Sakhi. She designed the logo, the brand system, the design language, and every screen of the app. The warmth and clarity that makes Sakhi feel trusted is Shruti's work.",
    quote: "Design is not decoration. It is the experience.",
    contributions: ["Logo & Brand Identity", "Design System", "UI/UX Design", "App Screens", "Brand Guidelines", "Visual Communication"],
    highlight: false,
  },
];

const founderPartnerItems = [
  { label: "ISDP Bootcamp", desc: "Where Sakhi was born, Jan 2024" },
  { label: "Apple Developer Program", desc: "University-custodian model, May 2024" },
  { label: "Campus Promotion", desc: "v2 launch partner, Jun 2026" },
  { label: "B2B Pathway", desc: "First institutional partner, Nov 2026" },
];

const heroStats = [
  { n: "Jan 2024", l: "Where it began" },
  { n: "49", l: "User interviews" },
  { n: "10+", l: "Cities reached" },
  { n: "150M", l: "Women we build for" },
];

const contributors: Contributor[] = [
  {
    id: "karan",
    name: "Karan Kumar",
    role: "Founder & Product",
    initials: "KK",
    level: "founder",
    since: "Jan 2024",
    contributions: "Product strategy, iOS development, AI integration, brand vision, full architecture",
  },
  {
    id: "shruti",
    name: "Shruti Sachdeva",
    role: "Design Lead",
    initials: "SS",
    level: "core",
    since: "Jan 2024",
    contributions: "Visual identity, design system, UI/UX, brand guidelines, logo design",
  },
  {
    id: "galgotias",
    name: "Galgotias University",
    role: "Founding Partner",
    initials: "GU",
    level: "core",
    since: "Jan 2024",
    contributions: "ISDP program, campus support, Apple Developer Program, institutional backing",
  },
  {
    id: "you-1",
    name: "User Researcher",
    role: "Field Research",
    initials: "UR",
    level: "contributor",
    since: "Feb 2024",
    contributions: "49 user interviews, campus research, gynaecologist consultations",
  },
  {
    id: "you-2",
    name: "Medical Advisor",
    role: "Health Accuracy",
    initials: "MA",
    level: "contributor",
    since: "Q3 2024",
    contributions: "Medical content review, PCOD research, health condition documentation",
  },
  {
    id: "you-3",
    name: "Beta Tester",
    role: "TestFlight Users",
    initials: "BT",
    level: "contributor",
    since: "Mar 2025",
    contributions: "Early feedback, bug reports, feature requests, real-world usage testing",
  },
  {
    id: "you-4",
    name: "Campus Ambassador",
    role: "Community Growth",
    initials: "CA",
    level: "contributor",
    since: "2025",
    contributions: "Campus promotion, word-of-mouth, user onboarding, feedback collection",
  },
  { id: "leaf-1", name: "Early User", role: "App Store", initials: "EU", level: "community", since: "Jun 2025", contributions: "Downloaded, used, and shared Sakhi" },
  { id: "leaf-2", name: "Early User", role: "App Store", initials: "EU", level: "community", since: "Jun 2025", contributions: "Downloaded, used, and shared Sakhi" },
  { id: "leaf-3", name: "Early User", role: "App Store", initials: "EU", level: "community", since: "Jun 2025", contributions: "Downloaded, used, and shared Sakhi" },
  { id: "leaf-4", name: "Partner", role: "B2B", initials: "P", level: "community", since: "2026", contributions: "Campus and corporate wellness partnerships" },
  { id: "leaf-5", name: "Early User", role: "App Store", initials: "EU", level: "community", since: "Jun 2025", contributions: "Downloaded, used, and shared Sakhi" },
  { id: "leaf-6", name: "Supporter", role: "Community", initials: "S", level: "community", since: "2024", contributions: "Believed in the mission from the beginning" },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Origin story"
        title="She was in pain, and I had nothing real to give her"
        lead="Karan Kumar · Founder · January 2024 to today"
      >
        <SectionNav
          items={[
            { href: "#story", label: "Our Story" },
            { href: "#vision", label: "Vision" },
            { href: "#people", label: "People" },
            { href: "#journey", label: "Journey" },
          ]}
        />
      </PageHero>

      {/* ================================================================ STORY */}
      {/* ------------------------------------------------------------- essay */}
      <Section id="story">
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
            <Photo
              src={photoDoor}
              alt="The Sakhi team's studio door at Galgotias University, hand-lettered with the Sakhi name and a heart"
              caption="The team's door, Galgotias University, mid-2024."
              aspect="aspect-square"
            />
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
          <SectionHeading
            eyebrow="The company timeline"
            title="From a bootcamp room to the App Store"
            lead="Every milestone that took Sakhi from a problem statement in January 2024 to a product women use today."
            align="left"
          />
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
          <Photo
            src={photoBooth}
            alt="Team Sakhi at the Apple and Infosys-powered iOS Development Centre exhibition booth, Galgotias University, with the Sakhi app open on screen"
            caption="Team Sakhi at the Apple and Infosys-powered iOS Development Centre showcase, Galgotias University, September 2024."
          />
        </Container>
      </Section>

      {/* -------------------------------------------------------- what it means */}
      <Section tone="blush">
        <Container>
          <span className="eyebrow">What we learned</span>
          <p className="text-h2 mt-4 max-w-[26ch] text-foreground">
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
        </Container>
      </Section>

      {/* =============================================================== VISION */}
      <Section id="vision">
        <Container>
          <div className="mx-auto max-w-[46rem] text-center">
            <span className="eyebrow">The vision</span>
            <h2 className="text-h2 mt-4 text-foreground">
              We&rsquo;re not building <GradientText>an app</GradientText>
            </h2>
            <p className="text-lead mx-auto mt-5 max-w-[38rem] text-muted-foreground">
              We&rsquo;re building a relationship between a woman and her health. 150 million
              Indian women deserve a companion, not just a tracker.
            </p>
            <p className="mt-4 text-[12.5px] text-muted-foreground">
              Source:{" "}
              <a
                href="https://www.unicef.org/india/press-releases/menstrual-hygiene-awareness-and-access-remains-low"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline underline-offset-2"
              >
                UNICEF India
              </a>{" "}
              and{" "}
              <a
                href="https://main.mohfw.gov.in/sites/default/files/NFHS-5_Phase-II_0.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline underline-offset-2"
              >
                MoHFW NFHS-5
              </a>
              .
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
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

      {/* =============================================================== PEOPLE */}
      <Section id="people">
        <Container>
          <div className="mx-auto max-w-[46rem] text-center">
            <span className="eyebrow">The people</span>
            <h2 className="text-h2 mt-4 text-foreground">Small team. Deep conviction.</h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {teamDetailed.map((member) => (
              <div
                key={member.id}
                className={`relative overflow-hidden rounded-2xl border bg-card p-9 ${member.highlight ? "border-secondary/25" : "border-border"}`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] ${member.highlight ? "bg-gradient-to-r from-primary to-secondary" : "bg-border"}`}
                  aria-hidden="true"
                />
                <div className="flex items-center gap-4">
                  <div
                    className={`grid size-15 shrink-0 place-items-center rounded-full text-[18px] font-semibold ${
                      member.highlight
                        ? "bg-secondary text-secondary-foreground"
                        : "border border-border bg-card text-secondary"
                    }`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <div className="text-[18px] font-medium text-foreground">{member.name}</div>
                    <div className="mt-0.5 text-[12.5px] text-secondary">{member.role}</div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground">Since {member.since}</div>
                  </div>
                </div>

                <blockquote className="mt-6 border-l-2 border-secondary/25 pl-4 text-[15px] leading-relaxed text-muted-foreground italic">
                  &ldquo;{member.quote}&rdquo;
                </blockquote>

                <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">{member.bio}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {member.contributions.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-accent-faint px-2.5 py-1 text-[11px] font-medium text-secondary"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------ founding partner */}
      <Section tone="blush">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Founding partner</span>
              <h2 className="text-h3 mt-4 text-foreground">Galgotias University</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                Sakhi exists because of Galgotias University, not as a customer, but as a founding
                patron. The ISDP Bootcamp gave Sakhi its first moment. The campus gave it its first
                users.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                We carry that support forward in everything we build.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {founderPartnerItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                  <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <div className="text-[14px] font-medium text-foreground">{item.label}</div>
                    <div className="mt-0.5 text-[12.5px] text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------- reach + tiers */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Everyone who made this</span>
              <h2 className="text-h2 mt-4 text-foreground">From a classroom to India</h2>
              <p className="text-lead mt-5 text-muted-foreground">
                Sakhi began in Lucknow and reached every corner of India, because the problem it
                solves lives everywhere. From classrooms to boardrooms, from mothers to daughters.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                {heroStats.map((s) => (
                  <div key={s.l} className="border-r border-border pr-7 last:border-0 last:pr-0">
                    <div className="text-[20px] leading-tight font-bold text-secondary">{s.n}</div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <IndiaMap />
              <p className="mt-6 text-center text-[13px] text-muted-foreground italic">
                Hover the map to explore Sakhi&rsquo;s presence across India →
              </p>
            </div>
          </div>

          <div className="mt-16">
            <ContributorsTiers contributors={contributors} />
          </div>
        </Container>
      </Section>

      {/* ============================================================== JOURNEY */}
      <Section id="journey" tone="blush">
        <Container>
          <SectionHeading
            eyebrow="The journey"
            title="From idea to India"
            lead="Every milestone in Sakhi's story, from a bootcamp classroom to the App Store."
          />

          {/* ---------------------------------------------- the build, in pictures
              Nine real photos pulled from the team's own archive, not stock. Laid
              out as five short chapters rather than one long grid: a single photo
              for the quiet early moments, more photos once there was more to show,
              bookended by two wide "hero" shots at the two moments the essay is
              really about, the name landing, and the world noticing. */}
          <div className="mt-16 flex flex-col gap-16">
            <JourneyChapter date="January 2024" title="Before it had a name">
              It started as a page in a notebook. Domain: community. Stakeholders: women, 15 to
              45. The problems were simple to write down and hard to admit out loud: uncomfortable
              to talk about, nobody to share it with, no guidance when it actually mattered. Team
              07 didn&rsquo;t have a name for any of this yet. Just a blank page and a question
              worth answering.
            </JourneyChapter>
            <div className="mx-auto max-w-[32rem]">
              <JourneyPhoto
                src={journeyNotebook}
                alt="Handwritten notebook page reading Domain, Community, Stakeholders, Females from age 15 to 45 years old, and a list of menstruation-related problems"
                caption="The first page: domain, stakeholders, the problems worth solving. January 2024."
                aspect="aspect-[4/5]"
              />
            </div>

            <JourneyChapter date="February 2024" title="The name">
              Sakhi. A Hindi word for a trusted female companion, chosen because it already meant
              something before a single screen existed. The line the team wrote that day has been
              on every pitch deck since: &ldquo;That&rsquo;s why we brought you Sakhi, your
              confidante and champion for menstrual health. With Sakhi, you&rsquo;re never
              alone.&rdquo;
            </JourneyChapter>
            <JourneyPhoto
              src={journeyName}
              alt="Presentation slide showing the pink SAKHI wordmark and speaker notes about bringing users a confidante and champion for menstrual health"
              caption="The name, and the line that&rsquo;s been on every pitch since."
            />

            <JourneyChapter date="2024" title="Designing her">
              Every screen started as a pencil sketch before it became a pixel. Mood check-ins,
              back-pain tips, a calendar that counted down instead of just marking dates, all
              worked out on paper first. Shruti built the icon in Figma layer by layer: a
              woman&rsquo;s face inside a circle, warm pink, simple enough to recognise at a
              glance.
            </JourneyChapter>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <JourneyPhoto
                src={journeySketch}
                alt="Hand-drawn wireframes for Sakhi's mood check-in screen and a back pain solutions screen"
                caption="An early sketch of how Sakhi checks in on you, mood by mood."
                aspect="aspect-[4/3]"
              />
              <JourneyPhoto
                src={journeyIconFigma}
                alt="The Sakhi app icon being designed in Figma, a pink square with a woman's face inside a circle"
                caption="The icon, built layer by layer in Figma."
                aspect="aspect-[4/3]"
              />
            </div>

            <JourneyChapter date="Mid to late 2024" title="Building it">
              A whiteboard split into &ldquo;Need to Done&rdquo; and &ldquo;Completed,&rdquo;
              filled with sticky notes that read Track Flow, Period Cycle Flow, PCOD Level Flow,
              Emergency Assistance Flow. Each one got built, tested, and moved across the board.
              What had been a notebook page became a working app, with a calendar, symptom
              logging, and predictions that were actually right.
            </JourneyChapter>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              <JourneyPhoto
                src={journeyKanban}
                alt="A whiteboard Kanban board split into Need to Done and Completed, with sticky notes for Track Flow, Period Cycle Flow, PCOD Level Flow, Emergency Assistance Flow and more"
                caption="Every feature, tracked from &ldquo;need to do&rdquo; to done."
                aspect="aspect-square"
              />
              <JourneyPhoto
                src={journeyTrackScreen}
                alt="An early build of the Sakhi Track screen, showing days to next period and a calendar"
                caption="An early build of the Track screen."
                aspect="aspect-square"
              />
              <JourneyPhoto
                src={journeyHighlightsScreen}
                alt="An early build of the Sakhi Highlights screen, showing PCOD level and cycle overview"
                caption="Highlights: PCOD level and cycle overview."
                aspect="aspect-square"
              />
              <JourneyPhoto
                src={journeyBuildingIt}
                alt="A member of Team Sakhi at an iMac during the build"
                caption="Building it, one screen at a time."
                aspect="aspect-square"
              />
            </div>

            <JourneyChapter date="September 2024" title="The world notices">
              Uttar Pradesh&rsquo;s first and only iOS Development Centre, powered by Apple and
              Infosys, opened its doors, and Team Sakhi stood at the booth with the app open on
              screen for anyone who walked past. Weeks later, seven Apple delegates, including
              Greg Joswiak, Apple&rsquo;s Senior Vice President of Worldwide Marketing, heard the
              same pitch.
            </JourneyChapter>
            <JourneyPhoto
              src={journeyExhibition}
              alt="Team Sakhi's exhibition booth at a technology showcase, under a banner reading Uttar Pradesh's 1st and only iOS Development Centre powered by Apple and Infosys in university, with the Sakhi app open on a laptop"
              caption="Sakhi on screen at the Apple and Infosys-powered iOS Development Centre, September 2024."
            />
          </div>

          <div className="mt-24">
            <span className="eyebrow">The dates, at a glance</span>
            <div className="mt-10">
              <JourneyTimeline />
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA
        title="Add your leaf"
        emphasis="to the tree"
        lead="Every download, every share, every conversation, she becomes part of this."
      />
    </div>
  );
}
