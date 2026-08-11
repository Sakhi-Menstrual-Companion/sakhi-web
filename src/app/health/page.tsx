import type { Metadata } from "next";
import { Lock } from "lucide-react";

import HealthConditions from "@/components/ui/HealthConditions";
import { Container, DotGrid, GradientText } from "@/components/ui/section";
import { Spotlight } from "@/components/ui/spotlight";

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
      {/* Hero, variant: "data-bar" (Ahrefs / Similarweb style) — the numbers
          sit directly in the hero's reading line, not boxed off in cards, so
          the page opens on evidence rather than on a decorative panel. */}
      <section className="relative overflow-hidden border-b border-border bg-background px-6 pb-16 sm:px-8 sm:pb-20">
        <DotGrid />
        <Spotlight className="-top-32 left-0 lg:left-20" fill="var(--primary)" />
        <Container className="relative z-10 pt-[calc(var(--nav-clearance)+3.5rem)] sm:pt-[calc(var(--nav-clearance)+5.5rem)]">
          <span className="eyebrow">Health library</span>
          <h1 className="text-h1 mt-5 max-w-[16ch] text-foreground">
            What your body has been trying <GradientText>to tell you</GradientText>
          </h1>
          <p className="text-lead mt-6 max-w-[42rem] text-muted-foreground">
            Most women know something feels off years before they get an answer. This library covers
            the 16 conditions Sakhi helps her understand, real research, real numbers, no medical
            jargon.
          </p>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-y border-border py-7">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-[34px] leading-none font-semibold text-transparent tabular-nums">
                  {s.n}
                </div>
                <div className="mt-2 max-w-[18ch] text-[13px] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 inline-flex max-w-[520px] items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-card">
            <Lock size={15} strokeWidth={2} className="mt-1 shrink-0 text-muted-foreground" aria-hidden="true" />
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">Sakhi does not diagnose.</strong>{" "}
              It tracks patterns and tells her when to see a doctor. Everything here is educational,
              not a substitute for medical care.
            </p>
          </div>
        </Container>
      </section>

      <Container className="px-6 pb-28 sm:px-8">
        <HealthConditions />
      </Container>
    </main>
  );
}
