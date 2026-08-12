import type { Metadata } from "next";

import { Container, GradientText, PageHero, Section } from "@/components/ui/section";
import { HeroNoticeCard, HeroStatBar } from "@/components/ui/page-hero-variants";
import HealthConditions from "@/components/ui/HealthConditions";
import { healthLibraryJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Health Library - Sakhi",
  description:
    "The 16 health conditions Sakhi helps her understand, real research, real numbers, no medical jargon, from PCOD to postpartum depression.",
  alternates: { canonical: "/health" },
};

const healthStats = [
  { n: "16", label: "conditions covered" },
  { n: "150M", label: "women in Sakhi's India" },
  { n: "57%", label: "have a condition they don't know about" },
];

/* Kept in sync by hand with HealthConditions.tsx's `name` fields, same
   order the page renders them in. A build-time import from that component's
   data would be tidier, but its export isn't public data, it's paired with
   icons and colour tokens the schema has no use for. */
const conditionNames = [
  "PCOD / PCOS",
  "Endometriosis",
  "Dysmenorrhea",
  "PMDD",
  "Amenorrhea",
  "Anemia",
  "Thyroid Disorders",
  "Uterine Fibroids",
  "Ovarian Cysts",
  "Adenomyosis",
  "Fertility Challenges",
  "Hormonal Mental Health",
  "Menorrhagia",
  "Cervical Health",
  "Bone Health",
  "Postpartum Depression",
];

export default function HealthPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(healthLibraryJsonLd(conditionNames)) }}
      />
      <PageHero
        eyebrow="Health library"
        title={
          <>
            What your body has been trying <GradientText>to tell you</GradientText>
          </>
        }
        lead="Most women know something feels off years before they get an answer. This library covers the 16 conditions Sakhi helps her understand, real research, real numbers, no medical jargon."
      >
        <HeroStatBar className="justify-center" stats={healthStats} />
      </PageHero>

      <Section>
        <Container>
          <HeroNoticeCard>
            <strong className="font-semibold text-foreground">Sakhi does not diagnose.</strong>{" "}
            It tracks patterns and tells her when to see a doctor. Everything here is educational,
            not a substitute for medical care.
          </HeroNoticeCard>

          <div className="mt-14">
            <HealthConditions />
          </div>
        </Container>
      </Section>
    </div>
  );
}
