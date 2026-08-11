import type { Metadata } from "next";

import { Container, DotGrid, GradientText, Section, SectionHeading } from "@/components/ui/section";
import { FinalCTA } from "@/components/ui/final-cta";
import { Timeline } from "@/components/ui/timeline";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const metadata: Metadata = {
  title: "Press, Sakhi",
  description: "Sakhi in the press. Times of India, Apple Success Story, UP International Trade Show, and more.",
};

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

export default function PressPage() {
  return (
    <div>
      {/* Hero, variant: "as seen in" marquee (Stripe / Notion trusted-by
          style) — the outlets that covered Sakhi scroll past directly under
          the claim, standing in for logos we don't have image rights to
          reproduce here. */}
      <section className="relative overflow-hidden border-b border-border bg-background px-6 pb-16 sm:px-8 sm:pb-20">
        <DotGrid />
        <Container className="relative z-10 flex flex-col items-center pt-[calc(var(--nav-clearance)+3.5rem)] text-center sm:pt-[calc(var(--nav-clearance)+5.5rem)]">
          <span className="eyebrow">Press</span>
          <h1 className="text-h1 mt-5 max-w-[16ch] text-foreground">
            Sakhi in <GradientText>the world</GradientText>
          </h1>
          <p className="text-lead mt-6 max-w-[40rem] text-muted-foreground">
            We didn&rsquo;t chase press. We built something worth talking about. Here&rsquo;s where
            the world has noticed.
          </p>
        </Container>
        <div className="relative z-10 mt-12">
          <InfiniteMovingCards
            tone="light"
            speed="normal"
            items={pressItems.map((item) => ({ label: item.publication }))}
          />
        </div>
      </section>

      {/* -------------------------------------------------------------- coverage */}
      <Section>
        <Container className="max-w-[52rem]">
          <SectionHeading eyebrow="Coverage" title="Where we've been featured" align="left" />
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

      {/* ------------------------------------------------------------- media note */}
      <Section tone="blush" divided={false}>
        <Container>
          <div className="mx-auto max-w-[42rem] text-center">
            <span className="eyebrow">Media</span>
            <h2 className="text-h2 mt-4 text-foreground">For journalists and media</h2>
            <p className="text-lead mx-auto mt-5 max-w-[36rem] text-muted-foreground">
              Brand assets, product screenshots, founder bios, and the full Sakhi story, ready for press
              use. Reach out below and we&rsquo;ll send everything over.
            </p>
          </div>
        </Container>
      </Section>

      <FinalCTA
        title="Try it"
        emphasis="yourself"
        lead="Free. No ads. Her data stays hers."
        secondaryLabel="Request press kit"
        secondaryHref="mailto:contact@sakhiapp.in"
      />
    </div>
  );
}
