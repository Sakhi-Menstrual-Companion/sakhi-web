import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import ContributorsTiers, { type Contributor } from "@/components/ui/ContributorsTiers";
import JourneyTimeline from "@/components/ui/JourneyTimeline";
import IndiaMap from "@/components/ui/IndiaMap";
import { Container, GradientText, PageHero, Section, SectionHeading } from "@/components/ui/section";
import { FinalCTA } from "@/components/ui/final-cta";

export const metadata: Metadata = {
  title: "Contributors, Sakhi",
  description: "The people who built Sakhi and everyone who contributes to the mission of making women's health accessible in India.",
};

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
  { n: "252M", l: "Women we build for" },
];

export default function ContributorsPage() {
  return (
    <div>
      <PageHero
        eyebrow="The people behind Sakhi"
        title={
          <>
            Every great thing is built <GradientText>by people who care</GradientText>
          </>
        }
        lead="Sakhi began in Lucknow and reached every corner of India, because the problem it solves lives everywhere. From classrooms to boardrooms, from mothers to daughters."
        visual={<IndiaMap />}
      >
        <div className="flex flex-wrap gap-x-7 gap-y-4">
          {heroStats.map((s) => (
            <div key={s.l} className="border-r border-border pr-7 last:border-0 last:pr-0">
              <div className="text-[20px] leading-tight font-bold text-secondary">{s.n}</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[13px] text-muted-foreground italic">
          Hover the map to explore Sakhi&rsquo;s presence across India →
        </p>
      </PageHero>

      {/* ------------------------------------------------------- contributors */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Everyone who made this"
            title="From a classroom to India"
            lead="Every person who contributed to Sakhi, organised by role and depth of involvement."
            align="left"
          />
          <div className="mt-14">
            <ContributorsTiers contributors={contributors} />
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ core team */}
      <Section tone="blush">
        <Container>
          <SectionHeading eyebrow="Core team" title="The people who built it" align="left" />
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
      <Section>
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

      {/* ---------------------------------------------------------------- journey */}
      <Section tone="blush">
        <Container>
          <SectionHeading
            eyebrow="The journey"
            title="From idea to India"
            lead="Every milestone in Sakhi's story, from a bootcamp classroom to the App Store."
          />
          <div className="mt-16">
            <JourneyTimeline />
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
