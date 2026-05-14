import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Story — Sakhi",
  description: "From a university bootcamp to the App Store. The honest story of how Sakhi came to be.",
};

const container: React.CSSProperties = { maxWidth: 1200, margin: "0 auto" };
const sectionPad: React.CSSProperties = { padding: "96px 24px" };

const pill: React.CSSProperties = {
  background: "rgba(246,24,135,0.08)",
  color: "#F61887",
  padding: "6px 16px",
  borderRadius: 999,
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  display: "inline-block",
  marginBottom: 28,
};

const timelineEntries = [
  {
    date: "Jan 9, 2024",
    title: "A Spark in a Bootcamp",
    body: "Team 07 forms at the ISDP Bootcamp, Galgotias University. Karan, Arpita, and Shruti are assigned a problem statement. They choose women's health — not because they were told to, but because it felt unaddressed.",
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
    date: "August 2025",
    title: "A Difficult Chapter",
    body: "Karan exits due to personal circumstances. The IP is formally transferred. This chapter is acknowledged honestly — not hidden. Sakhi's story includes the hard parts too. The app continues. The mission continues.",
    highlight: false,
  },
  {
    date: "September 2025",
    title: "Apple's Story",
    body: "Apple selects Sakhi for a Success Story feature. The photoshoot takes place on the Galgotias campus. The team that started in a bootcamp is now being featured by the world's most valuable company.",
    highlight: false,
  },
  {
    date: "May 10, 2026",
    title: "Back, By Request",
    body: "Karan returns. Not by obligation — by choice. With the product's future requiring attention and v2 to build, there was only one direction: forward. A new chapter begins.",
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
    <div style={{ overflowX: "hidden" }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#F8F2F4",
          padding: "160px 24px 96px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <AnimatedSection delay={0}>
            <span style={pill}>Origin Story</span>
            <h1
              style={{
                fontSize: "clamp(48px, 6vw, 72px)",
                fontWeight: 300,
                color: "#1A1A1A",
                letterSpacing: "-1px",
                lineHeight: 1.1,
                margin: "0 0 24px",
              }}
            >
              The Story of Sakhi
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: "#5A5A5A",
                lineHeight: 1.75,
                margin: "0 0 20px",
              }}
            >
              What began as a university assignment became something none of us
              could walk away from. This is the honest account of how Sakhi came to be.
            </p>
            <p
              style={{
                fontSize: 13,
                fontWeight: 300,
                color: "#9A9A9A",
                letterSpacing: "0.03em",
                margin: 0,
              }}
            >
              January 2024 — Present &nbsp;&middot;&nbsp; Galgotias University, Greater Noida
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── OPENING QUOTE ─────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <AnimatedSection delay={0}>
            <div
              style={{
                fontSize: 80,
                fontWeight: 300,
                color: "#F61887",
                lineHeight: 0.8,
                marginBottom: 28,
                fontFamily: "Georgia, serif",
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontSize: 24,
                fontWeight: 300,
                color: "#3D3D3D",
                fontStyle: "italic",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              In a world where periods are still a taboo, Sakhi was created to
              break the silence — with empathy, dignity, and support.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#F8F2F4" }}>
        <div style={{ ...container, padding: "0 24px" }}>
          <AnimatedSection delay={0}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={pill}>The Journey</span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 300,
                  color: "#1A1A1A",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                From bootcamp to App Store.
              </h2>
            </div>
          </AnimatedSection>

          <div
            style={{
              maxWidth: 720,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {timelineEntries.map((entry, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 20px 1fr",
                    gap: "0 16px",
                    paddingBottom: 40,
                  }}
                >
                  {/* Date */}
                  <div style={{ paddingTop: 4, textAlign: "right" }}>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 400,
                        color: "#F61887",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {entry.date}
                    </span>
                  </div>

                  {/* Vertical line + dot */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: entry.highlight ? "#F61887" : "rgba(246,24,135,0.35)",
                        marginTop: 6,
                        flexShrink: 0,
                      }}
                    />
                    <div
                      style={{
                        flex: 1,
                        width: 1,
                        backgroundColor: "rgba(246,24,135,0.15)",
                        marginTop: 4,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      paddingBottom: 8,
                      paddingLeft: entry.highlight ? 14 : 0,
                      borderLeft: entry.highlight ? "2px solid rgba(246,24,135,0.35)" : "none",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 400,
                        color: "#1A1A1A",
                        margin: "0 0 8px",
                        lineHeight: 1.3,
                      }}
                    >
                      {entry.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 300,
                        color: "#5A5A5A",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {entry.body}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHT BLOCK ─────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <AnimatedSection delay={0}>
            <div
              style={{
                fontSize: 60,
                fontWeight: 300,
                color: "#F61887",
                lineHeight: 0.8,
                marginBottom: 24,
                fontFamily: "Georgia, serif",
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontSize: 22,
                fontWeight: 300,
                color: "#3D3D3D",
                fontStyle: "italic",
                lineHeight: 1.65,
                margin: "0 0 56px",
              }}
            >
              A girl&rsquo;s health is not just her data. It is something her people
              want to understand, and act on.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                borderTop: "1px solid rgba(0,0,0,0.07)",
                paddingTop: 40,
              }}
            >
              {[
                { num: "49", label: "Interviews" },
                { num: "12+", label: "Conditions Researched" },
                { num: "June 2025", label: "App Store Launch" },
                { num: "281+", label: "Downloads" },
              ].map((s, i, arr) => (
                <div
                  key={i}
                  style={{
                    padding: "0 24px",
                    borderRight: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 300,
                      color: "#F61887",
                      letterSpacing: "-0.5px",
                      lineHeight: 1.2,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 300,
                      color: "#9A9A9A",
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
