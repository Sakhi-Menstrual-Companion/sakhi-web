import type { Metadata } from "next";

import { Container, GradientText, PageHero, Section } from "@/components/ui/section";
import { HeroAvatarCluster } from "@/components/ui/page-hero-variants";
import { FinalCTA } from "@/components/ui/final-cta";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export const metadata: Metadata = {
  title: "Team, Sakhi",
  description: "The people building Sakhi. The story of how a university bootcamp became a real women's health product.",
};

const teamMembers = [
  {
    initials: "KK",
    name: "Karan Kumar",
    role: "Founder & Product Lead",
    quote: "Product is not what you build. It's the problem you solve.",
    bio: "Karan started Sakhi at the ISDP Bootcamp, Galgotias University, in January 2024. He leads product strategy, iOS development, AI integration, and the overall direction of where Sakhi goes. Returned full-time on May 10, 2026 to build v2.",
    highlight: true,
  },
  {
    initials: "SS",
    name: "Shruti Sachdeva",
    role: "Design Lead",
    quote: "Design is not decoration. It is the experience.",
    bio: "Shruti is the visual mind behind Sakhi. She designed the logo, the brand system, the design language, and every screen of the app. The warmth and clarity that makes Sakhi feel trusted is Shruti's work.",
    highlight: false,
  },
];

function TeamCardBody({ member }: { member: (typeof teamMembers)[number] }) {
  return (
    <>
      <div
        className={`grid size-14 shrink-0 place-items-center rounded-full text-[18px] font-semibold ${
          member.highlight
            ? "bg-secondary text-secondary-foreground"
            : "border border-border bg-card text-secondary"
        }`}
      >
        {member.initials}
      </div>
      <div className="mt-5">
        <div className="text-[20px] font-medium text-foreground">{member.name}</div>
        <div className="mt-1 text-[13.5px] text-secondary">{member.role}</div>
      </div>
      <p className="mt-6 border-l-2 border-secondary/30 pl-4 text-[15px] leading-relaxed text-muted-foreground italic">
        &ldquo;{member.quote}&rdquo;
      </p>
      <p className="mt-5 text-[14.5px] leading-relaxed text-muted-foreground">{member.bio}</p>
    </>
  );
}

export default function TeamPage() {
  return (
    <div>
      <PageHero
        eyebrow="The team"
        title={
          <>
            Built by people <GradientText>who care</GradientText>
          </>
        }
        lead="Sakhi began as Team 07. A university bootcamp. One assignment. Something that became impossible to walk away from."
      >
        <HeroAvatarCluster people={teamMembers} className="justify-center" />
      </PageHero>

      {/* -------------------------------------------------------------- people */}
      <Section>
        <Container>
          <div className="mx-auto max-w-[46rem] text-center">
            <span className="eyebrow">The people</span>
            <h2 className="text-h2 mt-4 text-foreground">Small team. Deep conviction.</h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {teamMembers.map((member) =>
              member.highlight ? (
                <HoverBorderGradient
                  key={member.name}
                  as="div"
                  duration={2200}
                  containerClassName="rounded-2xl p-[1.5px] w-full h-full"
                  className="flex h-full w-full flex-col items-stretch rounded-2xl bg-card px-9 py-9 text-left"
                >
                  <TeamCardBody member={member} />
                </HoverBorderGradient>
              ) : (
                <div key={member.name} className="rounded-2xl border border-border bg-card px-9 py-9">
                  <TeamCardBody member={member} />
                </div>
              )
            )}
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------------- origin & partner */}
      <Section tone="blush">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Where it began</span>
              <h2 className="text-h3 mt-4 text-foreground">January 9, 2024. Galgotias University.</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                The ISDP Bootcamp assigned Team 07 a problem. They chose women&rsquo;s health, not because
                they were told to, but because it felt unaddressed. 49 user interviews. Gynaecologist
                consultations. A gap so large it couldn&rsquo;t be ignored. Sakhi was the answer.
              </p>
            </div>
            <div>
              <span className="eyebrow">Founding partner</span>
              <h2 className="text-h3 mt-4 text-foreground">Galgotias University</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                Sakhi exists because of Galgotias University, not as a customer, but as a founding
                patron. The ISDP program, the campus, the Apple Developer Program enrollment, the
                institutional credibility, all of it comes from GU. We carry that forward in everything
                we build.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA title="Join" emphasis="the journey" lead="Free. No ads. Her data stays hers." />
    </div>
  );
}
