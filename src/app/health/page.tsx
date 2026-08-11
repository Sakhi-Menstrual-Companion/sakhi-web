import type { Metadata } from "next";

import HealthConditions from "@/components/ui/HealthConditions";
import { Container, GradientText, PageHero } from "@/components/ui/section";
import { HeroNoticeCard, HeroStatBar } from "@/components/ui/page-hero-variants";

export const metadata: Metadata = {
  title: "Health Library, Sakhi",
  description: "Real research on the health conditions affecting 252 million Indian women. Sakhi tracks your patterns and helps you understand your body.",
};

const stats = [
  { n: "16", label: "conditions covered" },
  { n: "252M", label: "women in Sakhi's India" },
  { n: "57%", label: "have a condition they don't know about" },
];

export default function HealthPage() {
  return (
    <main className="bg-background-shell">
      <PageHero
        eyebrow="Health library"
        title={
          <>
            What your body has been trying <GradientText>to tell you</GradientText>
          </>
        }
        lead="Most women know something feels off years before they get an answer. This library covers the 16 conditions Sakhi helps her understand, real research, real numbers, no medical jargon."
      >
        <HeroStatBar stats={stats} />
        <HeroNoticeCard className="mt-8">
          <strong className="font-semibold text-foreground">Sakhi does not diagnose.</strong>{" "}
          It tracks patterns and tells her when to see a doctor. Everything here is educational,
          not a substitute for medical care.
        </HeroNoticeCard>
      </PageHero>

      <Container className="px-6 pb-28 sm:px-8">
        <HealthConditions />
      </Container>
    </main>
  );
}
