import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Story — Sakhi",
  description: "From a university bootcamp to the App Store. The honest story of how Sakhi came to be.",
};

const container: React.CSSProperties = { maxWidth: 1160, margin: "0 auto" };
const sectionPad: React.CSSProperties = { padding: "96px 24px" };
const label = (mb = 16): React.CSSProperties => ({
  fontSize: 13, fontWeight: 400, color: "#F61887",
  letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: mb, display: "block",
});

const timelineEntries = [
  {
    date: "Jan 9, 2024",
    title: "A Spark in a Bootcamp",
    body: "Team 07 forms at the ISDP Bootcamp, Galgotias University. The team is assigned a problem statement. They choose women's health — not because they were told to, but because it felt unaddressed.",
    highlight: false,
  },
  {
    date: "Jan – Apr 2024",
    title: "49 Women. One Clear Gap.",
    body: "The team conducts 49 user interviews across campuses, homes, and communities. They consult gynaecologists. The finding: most women had never tracked their health with intention. PCOD was widespread and massively underdiagnosed. Women weren't managing their health — they were surviving it.",
    highlight: true,
  },
  {
    date: "May 2024",
    title: "Apple Developer Program",
    body: "Sakhi is accepted into the Apple Developer Program under a university-custodian model. Galgotias University becomes the founding institutional partner. The tools to build natively on iOS are now in hand.",
    highlight: false,
  },
  {
    date: "Mid 2024",
    title: "Going Native — The Critical Pivot",
    body: "Flutter is abandoned. The team moves to Swift and SwiftUI — full native iOS. The decision is deliberate: native performance, native feel, native privacy. HealthKit integration. This is the Sakhi that women would actually use.",
    highlight: false,
  },
  {
    date: "Q4 2024",
    title: "The World Notices",
    body: "Times of India features Sakhi. The team presents at the UP International Trade Show. Then, the moment that still feels unreal: Sakhi is presented to Greg Joswiak, Apple's Senior Vice President. A student-built app from UP, in front of one of the most powerful people in tech.",
    highlight: true,
  },
  {
    date: "March 2025",
    title: "First Real Users",
    body: "TestFlight opens. The first women outside the team use Sakhi for real. Real period logs. Real questions to Sakhi AI. Real moments of 'I've never felt understood like this before.' The feedback is honest, detailed, and deeply motivating.",
    highlight: false,
  },
  {
    date: "June 14, 2025",
    title: "She's Live.",
    body: "Sakhi launches on the App Store. App ID: 6742219623. Years of research, 49 interviews, countless builds — for this moment. Women download Sakhi not because they know the team, but because they need it.",
    highlight: true,
  },
  {
    date: "September 2025",
    title: "Apple's Story",
    body: "Apple selects Sakhi for a Success Story feature. The photoshoot takes place on the Galgotias campus. The team that started in a bootcamp is now being featured by the world's most valuable company.",
    highlight: false,
  },
  {
    date: "May 10, 2026",
    title: "A New Chapter",
    body: "Karan returns to lead the product full-time. With v2 to build and the product's future demanding attention, there was only one direction: forward.",
    highlight: true,
  },
  {
    date: "June 2, 2026",
    title: "v2 is Coming",
    body: "Android support, premium subscription, Doctor Report PDF export, and the full relationship layer — all coming in v2. The work continues.",
    highlight: false,
  },
];

export default function StoryPage() {
  return (
    <div style={{ overflowX: "hidden", fontFamily: "var(--font-lato), Lato, sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(160deg, #FDF0F5 0%, #F8F2F4 50%, #FFF5F8 100%)",
        padding: "160px 24px 96px",
      }}>
        <div style={{ ...container, maxWidth: 760 }}>
          <AnimatedSection delay={0}>
            <span style={label(20)}>Origin Story</span>
            <h1 style={{ fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-1.5px", lineHeight: 1.05, margin: "0 0 28px" }}>
              The Story<br />of Sakhi.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p style={{ fontSize: 18, fontWeight: 400, color: "#5A5A5A", lineHeight: 1.8, margin: "0 0 16px", maxWidth: 580 }}>
              What began as a university assignment became something none of us could walk away from. This is the honest account of how Sakhi came to be.
            </p>
            <p style={{ fontSize: 13, fontWeight: 400, color: "#B0889A", letterSpacing: "0.03em", margin: 0 }}>
              January 2024 — Present · Galgotias University, Greater Noida
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── OPENING STATEMENT ────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#F61887" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection delay={0}>
            <p style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.6, margin: "0 0 24px", fontStyle: "italic" }}>
              &ldquo;Period is not a taboo. Not here.&rdquo;
            </p>
            <p style={{ fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.8)", lineHeight: 1.85, margin: 0 }}>
              We built Sakhi because the silence around women's health in India is deafening. 49 interviews. Dozens of gynaecologist conversations. One consistent finding: women weren't being heard. We decided to build the thing that would hear them.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={{ ...container, padding: "0 24px" }}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 64 }}>
              <span style={label()}>The Journey</span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: 0 }}>
                From bootcamp to App Store.
              </h2>
            </div>
          </AnimatedSection>

          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column" as const }}>
            {timelineEntries.map((entry, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div style={{ display: "grid", gridTemplateColumns: "140px 20px 1fr", gap: "0 16px", paddingBottom: 40 }}>
                  {/* Date */}
                  <div style={{ paddingTop: 4, textAlign: "right" }}>
                    <span style={{ fontSize: 13, fontWeight: 400, color: "#F61887", letterSpacing: "0.02em" }}>{entry.date}</span>
                  </div>
                  {/* Line + dot */}
                  <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: entry.highlight ? "#F61887" : "rgba(246,24,135,0.3)", marginTop: 6, flexShrink: 0 }} />
                    <div style={{ flex: 1, width: 1, backgroundColor: "rgba(246,24,135,0.15)", marginTop: 4 }} />
                  </div>
                  {/* Content */}
                  <div style={{ paddingBottom: 8, paddingLeft: entry.highlight ? 14 : 0, borderLeft: entry.highlight ? "2px solid rgba(246,24,135,0.3)" : "none" }}>
                    <h3 style={{ fontSize: 18, fontWeight: 500, color: "#1A1A1A", margin: "0 0 8px", lineHeight: 1.3 }}>{entry.title}</h3>
                    <p style={{ fontSize: 15, fontWeight: 400, color: "#5A5A5A", lineHeight: 1.8, margin: 0 }}>{entry.body}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IT MEANS ────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#F8F2F4" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection delay={0}>
            <span style={label()}>What we learned</span>
            <p style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 300, color: "#1A1A1A", fontStyle: "italic", lineHeight: 1.6, margin: "0 0 48px" }}>
              &ldquo;A girl&rsquo;s health is not just her data. It is something her people want to understand, and act on.&rdquo;
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div style={{ display: "flex", flexWrap: "wrap" as const, borderTop: "1px solid rgba(246,24,135,0.15)", paddingTop: 40, gap: 0 }}>
              {[
                { num: "49",        label: "Interviews" },
                { num: "12+",       label: "Conditions Researched" },
                { num: "June 2025", label: "App Store Launch" },
                { num: "281+",      label: "Downloads" },
              ].map((s, i, arr) => (
                <div key={i} style={{ padding: "0 28px", paddingLeft: i === 0 ? 0 : 28, borderRight: i < arr.length - 1 ? "1px solid rgba(246,24,135,0.15)" : "none" }}>
                  <div style={{ fontSize: 24, fontWeight: 300, color: "#F61887", letterSpacing: "-0.5px", lineHeight: 1.2 }}>{s.num}</div>
                  <div style={{ fontSize: 12, fontWeight: 400, color: "#B0889A", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(160deg, #F61887 0%, #D4127A 100%)", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <AnimatedSection delay={0}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, color: "#FFFFFF", letterSpacing: "-1px", lineHeight: 1.1, margin: "0 0 20px" }}>
              Be part of the story.
            </h2>
            <p style={{ fontSize: 17, fontWeight: 400, color: "rgba(255,255,255,0.8)", lineHeight: 1.8, margin: "0 0 36px" }}>
              Download Sakhi and add your chapter to this journey.
            </p>
            <a href="https://apps.apple.com/app/id6742219623" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: "#FFFFFF", color: "#F61887", padding: "16px 36px", borderRadius: 999, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F61887"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download Free
            </a>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
