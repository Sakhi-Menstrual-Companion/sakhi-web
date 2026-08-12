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
import journeyDesignEvolution from "@/assets/journey-06-design-evolution.png";
import journeyFlowSosMap from "@/assets/journey-flow-sos-map.png";
import journeyFlowTrustNetwork from "@/assets/journey-flow-trust-network.png";
import journeyFlowTrackingEmergency from "@/assets/journey-flow-tracking-emergency.png";
import journeyFlowHelperResponse from "@/assets/journey-flow-helper-response.png";
import journeyLogoLayerDrops from "@/assets/journey-logo-layer-1-drops.png";
import journeyLogoLayerReproductive from "@/assets/journey-logo-layer-2-reproductive.png";
import journeyLogoLayerForm from "@/assets/journey-logo-layer-3-form.png";
import journeyLogoLayerFinal from "@/assets/journey-logo-layer-4-final.png";
import mayaOnboarding from "@/assets/maya-onboarding.png";
import mayaTrack from "@/assets/maya-track.png";
import mayaEmergency from "@/assets/maya-emergency.png";
import mayaSummary from "@/assets/maya-summary.png";
import { Container, GradientText, PageHero, Section, SectionHeading } from "@/components/ui/section";
import { SectionNav } from "@/components/ui/section-nav";
import { TeamCards } from "@/components/ui/team-cards";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import ContributorsTiers, { type Contributor } from "@/components/ui/ContributorsTiers";
import JourneyTimeline from "@/components/ui/JourneyTimeline";
import IndiaMap from "@/components/ui/IndiaMap";

export const metadata: Metadata = {
  title: "Our Story - Sakhi",
  description:
    "The story, the vision, and the people behind Sakhi. Why it was built, where it is going, and everyone who made it real.",
  alternates: { canonical: "/about" },
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
  shadow = true,
}: {
  src: StaticImageData;
  alt: string;
  caption: string;
  aspect?: string;
  shadow?: boolean;
}) {
  return (
    <figure>
      <div
        className={`overflow-hidden ${aspect} w-full rounded-2xl border border-border ${shadow ? "shadow-card" : ""}`}
      >
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
    <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-8 text-center">
      <div className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-[36px] leading-none font-semibold text-transparent tabular-nums">
        {value}
      </div>
      <p className="mt-3 max-w-[18ch] text-[13px] leading-relaxed text-muted-foreground">{label}</p>
    </div>
  );
}

/* One frame style for every photo in "The build, in pictures" below, so a
   4-image row and a single wide hero both read as the same photo essay.

   Nothing here is cropped. Every caller used to pass an `aspect` and the
   image was object-cover'd into it, and not one of those aspects matched its
   source: aspect-square on the 16:9 flow diagrams cut the title off the left
   of every one, aspect-[4/5] on the 566x800 logo slides sliced the header off
   the top, aspect-[4/3] on the 16:9 photographs trimmed both sides. These are
   documents, diagrams and screenshots, not photographs with margin to spare,
   so a crop is not a crop, it is deleted content. The image now renders at
   its own ratio and the row stays even because the sources within each row
   are the same size.

   `frame` is the exception, for the one row whose sources do not share a
   ratio. It letterboxes into a shared box with object-contain, so nothing is
   lost and every card is still the same height. `fill` must be the artwork's
   own background colour, which is what makes the letterbox invisible rather
   than a pair of grey bars. */
function JourneyPhoto({
  src,
  alt,
  caption,
  frame,
}: {
  src: StaticImageData;
  alt: string;
  caption: string;
  frame?: { aspect: string; fill: string };
}) {
  return (
    <figure>
      <div
        className={`w-full overflow-hidden rounded-2xl ${frame ? `${frame.aspect} ${frame.fill}` : ""}`}
      >
        <Image
          src={src}
          alt={alt}
          className={frame ? "h-full w-full object-contain" : "h-auto w-full"}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <figcaption className="mx-auto mt-4 max-w-[46ch] text-center text-[13.5px] leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

/* The Maya row is the only set whose sources disagree on ratio: three of the
   mockups are 316x621 and the emergency one is 300x641. Left to size
   naturally that one card runs about 8% taller than its neighbours and the
   captions stop lining up, so this row letterboxes into the tallest of the
   four instead. The fill is the exact background baked into all four PNGs,
   sampled at rgb(255,233,241), which is why the bars do not show. It is a raw
   hex rather than a token on purpose: it is matching a colour inside an image
   file, not taking part in the palette, and it must not move when the palette
   does. */
const mayaFrame = { aspect: "aspect-[300/641]", fill: "bg-[#ffe9f1]" };

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
      {/* Full width, no measure cap. The chapters that sit in a two-column
          grid (the notebook and the name) get their measure from the column;
          the ones that run on their own from "Designing her" down take the
          whole container, which is the other half of the site's half-or-full
          rule. 18px because 15px is small for the one paragraph each chapter
          gets to make its point in. */}
      <p className="mt-4 text-[18px] leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

const closingStats = [
  { value: "49", label: "Interviews conducted" },
  { value: "16", label: "Conditions researched" },
  { value: "Jun 2025", label: "App Store launch" },
  { value: "Free", label: "No subscription required" },
];

const values = [
  { num: "01", title: "Genuinely help the user", body: "This is the only reason Sakhi exists. Not growth. Not revenue. Not recognition. Does this genuinely help the woman using it? If yes, we build it.", big: true },
  { num: "02", title: "Earn and keep trust", body: "Trust is the product. Health data is intimate. We treat it that way, encrypted, private, never sold, always under her control." },
  { num: "03", title: "Sustain the mission", body: "Revenue is fuel. Without it, we can't keep building. We earn it by being genuinely useful, not by compromising the first two values." },
  { num: "04", title: "Grow", body: "More users means more women helped. We grow because the problem is large, not because growth is the goal." },
  { num: "05", title: "Be recognised", body: "Press, awards, Apple features, these are outputs of doing good work, not things we chase. They come when the first four are right." },
];

/* These used to be growth numbers, 3B downloads, 1B MAU, 100+ languages,
   pulled straight from the End Goal doc's "Users" table. Right after a
   headline that says the number was never the goal, three download and
   engagement targets said the opposite. What replaces them is the actual
   Mission line ("every woman on the planet... not some women, every
   woman") and the two numbers on this page that are already about who
   Sakhi is for, not how big it got: the 150M figure from the map section
   above, and the 16 conditions from the Health Library. */
const northStar = [
  { n: "150M", label: "women in India she's building for" },
  { n: "16", label: "conditions she no longer faces alone" },
  { n: "100%", label: "not just the women who can afford it" },
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
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Origin story"
        title={
          <>
            She was in pain, and I had <GradientText>nothing real</GradientText> to give her
          </>
        }
        lead="Karan Kumar · Founder · January 2024 to today"
      >
        <SectionNav
          items={[
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
            <div className="max-w-160 space-y-6 text-[17px] leading-relaxed text-foreground">
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
            <Photo
              src={photoDoor}
              alt="The Sakhi team's studio door at Galgotias University, hand-lettered with the Sakhi name and a heart"
              caption="The team's door, Galgotias University, mid-2024."
              shadow={false}
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
          {/* One column, running the full width of the section rather than
              the 640px it used to sit in. The type goes up with the measure:
              at the old 17px, a 1120px line is around 130 characters, roughly
              double what is comfortable to read. text-lead carries it to
              about 105, and a passage this size reading large is the point of
              the section anyway. */}
          <div className="text-lead space-y-7 leading-relaxed text-muted-foreground">
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

      {/* -------------------------------------------------------- world notices */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_360px]">
            <div>
              <span className="eyebrow">Along the way</span>
              <h2 className="text-h3 mt-4 text-foreground">The world started to notice</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
                The Times of India covered Sakhi. The team presented at the UP International
                Trade Show. Then Sakhi was shown to seven Apple delegates, including Greg
                Joswiak, Apple&rsquo;s Senior Vice President of Worldwide Marketing.
              </p>
            </div>
            <Photo
              src={photoBooth}
              alt="Team Sakhi at the Apple and Infosys-powered iOS Development Centre exhibition booth, Galgotias University, with the Sakhi app open on screen"
              caption="Team Sakhi at the Apple and Infosys-powered iOS Development Centre showcase, Galgotias University, September 2024."
              shadow={false}
            />
          </div>
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

      {/* --------------------------------------------------------- core values */}
      <Section className="bg-background-shell">
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
                className={`group rounded-2xl border border-border bg-card p-7 transition-transform duration-300 ease-(--ease-out-soft) hover:-translate-y-1 ${v.big ? "sm:col-span-2" : ""}`}
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

          <TeamCards className="mt-14" />
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
            {/* No aspect prop on the photo, so it takes JourneyPhoto's
                aspect-video default. The source is 4000x2252, already 16:9;
                the aspect-[4/5] this used to force meant object-cover threw
                away most of the notebook page to make a landscape photo
                portrait. */}
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <JourneyChapter date="January 2024" title="Before it had a name">
                It started as a page in a notebook. Domain: community. Stakeholders: women, 15 to
                45. The problems were simple to write down and hard to admit out loud:
                uncomfortable to talk about, nobody to share it with, no guidance when it actually
                mattered. Team 07 didn&rsquo;t have a name for any of this yet. Just a blank page
                and a question worth answering.
              </JourneyChapter>
              <JourneyPhoto
                src={journeyNotebook}
                alt="Handwritten notebook page reading Domain, Community, Stakeholders, Females from age 15 to 45 years old, and a list of menstruation-related problems"
                caption="The first page: domain, stakeholders, the problems worth solving. January 2024."
              />
            </div>

            {/* Photo left, chapter right, so this alternates against the
                notebook chapter above it. lg:order-first rather than a
                reordered source: the date and title still come before the
                picture for a screen reader and on a stacked phone layout. */}
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
              <JourneyChapter date="February 2024" title="The name">
                Sakhi. A Hindi word for a trusted female companion, chosen because it already
                meant something before a single screen existed. The line the team wrote that day
                has been on every pitch deck since: &ldquo;That&rsquo;s why we brought you Sakhi,
                your confidante and champion for menstrual health. With Sakhi, you&rsquo;re never
                alone.&rdquo;
              </JourneyChapter>
              <div className="lg:order-first">
                <JourneyPhoto
                  src={journeyName}
                  alt="Presentation slide showing the pink SAKHI wordmark and speaker notes about bringing users a confidante and champion for menstrual health"
                  caption="The name, and the line that&rsquo;s been on every pitch since."
                />
              </div>
            </div>

            <JourneyChapter date="2024" title="Designing her">
              Every screen started as a pencil sketch before it became a pixel. Mood check-ins,
              back-pain tips, a calendar that counted down instead of just marking dates, all
              worked out on paper first. Shruti built the icon in Figma layer by layer.
            </JourneyChapter>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <JourneyPhoto
                src={journeySketch}
                alt="Hand-drawn wireframes for Sakhi's mood check-in screen and a back pain solutions screen"
                caption="An early sketch of how Sakhi checks in on you, mood by mood."
              />
              <JourneyPhoto
                src={journeyIconFigma}
                alt="The Sakhi app icon being designed in Figma"
                caption="The icon, built layer by layer in Figma."
              />
            </div>

            {/* ------------------------------------------------ the layers behind the mark
                The icon wasn't drawn in one pass. Each concept layer the team explored
                is a real slide from Shruti's own logo-design deck, kept in the order
                the reasoning actually built up: a period drop, then the anatomy it
                comes from, then the woman it's for, then the mark that held all three
                at once. Captions are the team's own lines, not paraphrased. */}
            <div>
              <p className="text-[18px] leading-relaxed text-muted-foreground">
                The icon wasn&rsquo;t one decision. It was three ideas layered until they became
                one mark: a drop, the body it comes from, the woman living it, and finally, a
                friend drawn simply enough to recognise at a glance.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
                <JourneyPhoto
                  src={journeyLogoLayerDrops}
                  alt="Logo design slide: Inspired From Period Drops. The twin downward shapes echo menstrual drops, forming a heart to symbolise comfort and care during periods."
                  caption="Layer one: a period drop, echoed twice, forming a heart."
                />
                <JourneyPhoto
                  src={journeyLogoLayerReproductive}
                  alt="Logo design slide: Inspired From Female Reproductive System. The abstract form subtly mirrors the female reproductive system, honouring the source of menstruation."
                  caption="Layer two: the anatomy the drop comes from, honoured, not hidden."
                />
                <JourneyPhoto
                  src={journeyLogoLayerForm}
                  alt="Logo design slide: Inspired From Female Form (Sakhi). The entire shape gently outlines a female figure, symbolising warmth, support and the emotional presence every woman deserves."
                  caption="Layer three: the woman herself, outlined in the same shape."
                />
                <JourneyPhoto
                  src={journeyLogoLayerFinal}
                  alt="Logo design slide: Final Logo. The final logo emerged not as a compromise but as a culmination, one that is both conceptually meaningful and visually timeless."
                  caption="All three layers, held in one small icon."
                />
              </div>
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
              />
              <JourneyPhoto
                src={journeyTrackScreen}
                alt="An early build of the Sakhi Track screen, showing days to next period and a calendar"
                caption="An early build of the Track screen."
              />
              <JourneyPhoto
                src={journeyHighlightsScreen}
                alt="An early build of the Sakhi Highlights screen, showing PCOD level and cycle overview"
                caption="Highlights: PCOD level and cycle overview."
              />
              <JourneyPhoto
                src={journeyBuildingIt}
                alt="A member of Team Sakhi at an iMac during the build"
                caption="Building it, one screen at a time."
              />
            </div>
            <div>
              <JourneyPhoto
                src={journeyDesignEvolution}
                alt="Six real versions of the Sakhi Summary screen side by side, numbered 1 through 5 and Now, showing the design evolving from an early illustrated greeting to the current calendar and cycle summary"
                caption="The Summary screen alone went through six real versions before it looked like this. Nothing here shipped on the first try."
              />
            </div>

            <JourneyChapter date="2024" title="What the flows actually look like">
              Behind every screen is a flow someone had to design on paper before it was code:
              what happens when she taps Track, what happens when she taps the emergency button
              at 2am with no one around. Four of those flows, mapped the way the team actually
              mapped them.
            </JourneyChapter>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <JourneyPhoto
                src={journeyFlowTrackingEmergency}
                alt="Two flow diagrams: Daily Tracking Start, going from Open App through Track Tab, Log Period Start, Select Flow Level, Save, to an updated calendar with insights; and Emergency Assistance Crisis, going from Emergency Button through location and requirement selection to contacting a nearby Sakhi, coordination, resolution and feedback"
                caption="The everyday flow, and the crisis flow, side by side."
              />
              <JourneyPhoto
                src={journeyFlowHelperResponse}
                alt="Helper Response Notification flow diagram: a notification arrives, the helper requests details, then either declines back to home or accepts, navigates to the location, provides assistance, and finishes"
                caption="What happens on the other end, for the person who says yes."
              />
              <JourneyPhoto
                src={journeyFlowTrustNetwork}
                alt="Trust Based Helper Network diagram showing four tiers: Caring for new users with basic verification, Kind after successful helps with positive feedback, Very Kind for consistent availability, and Angel for helpers with community recognition"
                caption="Helping isn&rsquo;t anonymous. Trust is earned, one request at a time."
              />
              <JourneyPhoto
                src={journeyFlowSosMap}
                alt="A map visualisation of the emergency assistance feature: a woman requests pads nearby, two people decline, one nearby helper accepts and is on the way"
                caption="Nearby help, shown the way it actually appears on the map."
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

          {/* ------------------------------------------------- one journey, in the app
              That was the team's journey building Sakhi. This is the other half: what
              the app is actually designed to carry someone through. Not a real user's
              logged data, an illustrative path through the product, the same way Brand
              already introduces Priya, Kavya and Riya as "someone like this uses Sakhi,"
              not as real named people. */}
          <div className="mt-24">
            <span className="eyebrow">And the journey it was built for</span>
            <h3 className="text-h3 mt-3 max-w-[28ch] text-foreground">
              One path through the app, start to a good ending
            </h3>
            <p className="mt-4 text-[18px] leading-relaxed text-muted-foreground">
              She finds Sakhi through a friend, in the middle of a period emergency at college.
              Setup takes a minute: her name, a login, roughly where her cycle stands, nothing
              forced. A few days later her period starts without warning. She opens Track, logs
              the flow and the cramps, and Sakhi starts showing her the pattern underneath it. A
              few weeks in, caught out at a restaurant with nothing on her, she taps Need Help.
              Two Sakhi users are nearby. Someone accepts, and pads arrive in six minutes. A month
              later, someone else needs help the way she once did, and this time, she&rsquo;s the
              one who shows up.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              <JourneyPhoto
                src={mayaOnboarding}
                alt="Sakhi onboarding screen asking for weight, with a skip option, part of a gentle setup that doesn't force precise data"
                caption="Setting up takes a minute. Nothing is forced."
                frame={mayaFrame}
              />
              <JourneyPhoto
                src={mayaTrack}
                alt="Sakhi Track screen for logging period flow, cramps and mood in a few taps"
                caption="Logging a period: flow, cramps, mood."
                frame={mayaFrame}
              />
              <JourneyPhoto
                src={mayaEmergency}
                alt="Sakhi's community help screen, showing nearby Sakhi users and a request sheet for pads, tampons, a hot water bag or medicines"
                caption="Caught out with nothing on her, she asks the community nearby."
                frame={mayaFrame}
              />
              <JourneyPhoto
                src={mayaSummary}
                alt="Sakhi Summary screen with a calendar and cycle phase insight"
                caption="Weeks in, Sakhi already knows the pattern."
                frame={mayaFrame}
              />
            </div>
          </div>

          {/* A real heading, not a bare eyebrow. `eyebrow` is 11px uppercase
              grey and exists to sit above a heading; used on its own it was
              labelling the whole timeline in the smallest type on the page,
              which is why it read as a stray caption floating in blush. */}
          <div className="mt-24">
            <h3 className="text-h3 text-foreground">The dates, at a glance</h3>
            <div className="mt-10">
              <JourneyTimeline />
            </div>
          </div>
        </Container>
      </Section>

      {/* This page used to close on its own dark FinalCTA ("Add your leaf to
          the tree"). The site now has one shared closing band, rendered once
          in the root layout above the footer, so a second one here would
          stack two dark sections back to back. */}
    </div>
  );
}
