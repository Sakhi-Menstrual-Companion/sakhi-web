import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Vision & Roadmap — Sakhi",
  description: "Where Sakhi is going. Our mission, values, and the roadmap to 1 billion users.",
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

const roadmapItems = [
  {
    period: "NOW — 2026",
    headline: "1 lakh downloads · Android beta · Premium subscription · B2B campus contracts",
    detail:
      "v2 launches June 2, 2026 with Android support. Premium subscription in August. First campus B2B partnerships starting November.",
  },
  {
    period: "2027",
    headline: "3 million users · Doctor network · Hindi and regional languages",
    detail:
      "Crossing 3M users. Full doctor network integration. Hindi, Tamil, Bengali, Marathi, Telugu support.",
  },
  {
    period: "2028",
    headline: "Profitability · Sakhi Watch · 7 million users",
    detail:
      "First profitable year. Sakhi Watch brings passive tracking to your wrist. 7M users across India.",
  },
  {
    period: "2029",
    headline: "Doctor consultations · Insurance integration · 15 million users",
    detail: "Book gynaecologist consultations inside Sakhi. Insurance partnerships. 15M users.",
  },
  {
    period: "2034+",
    headline: "1 billion MAU · 100+ languages · IPO-ready",
    detail:
      "The long game. Full lifecycle coverage from first period to menopause. Every woman. Every language.",
  },
];

const values = [
  {
    num: "01",
    title: "Genuinely Help the User",
    body: "This is the only reason Sakhi exists. Not growth. Not revenue. Not recognition. Does this genuinely help the woman using it? If yes, we build it.",
  },
  {
    num: "02",
    title: "Earn and Keep Trust",
    body: "Trust is the product. Health data is intimate. We treat it that way — encrypted, private, never sold, always under her control.",
  },
  {
    num: "03",
    title: "Sustain the Mission",
    body: "Revenue is fuel. Without it, we can't keep building. We earn it by being genuinely useful, not by compromising the first two values.",
  },
  {
    num: "04",
    title: "Grow",
    body: "More users means more women helped. We grow because the problem is large, not because growth is the goal.",
  },
  {
    num: "05",
    title: "Be Recognized",
    body: "Press, awards, Apple features — these are outputs of doing good work, not things we chase. They come when the first four are right.",
  },
];

export default function VisionPage() {
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
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <AnimatedSection delay={0}>
            <span style={pill}>The Vision</span>
            <h1
              style={{
                fontSize: "clamp(48px, 6vw, 80px)",
                fontWeight: 300,
                color: "#1A1A1A",
                letterSpacing: "-1px",
                lineHeight: 1.1,
                margin: "0 0 24px",
              }}
            >
              We&rsquo;re not building an app.
              <br />
              We&rsquo;re building a relationship.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: "#5A5A5A",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Sakhi exists because 252 million Indian women deserve a health companion —
              not just a tracker. This is what we&rsquo;re working toward.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={container}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 0,
              border: "1px solid rgba(0,0,0,0.07)",
            }}
          >
            <AnimatedSection delay={0}>
              <div
                style={{
                  padding: "48px 40px",
                  borderRight: "1px solid rgba(0,0,0,0.07)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#F61887",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 20,
                  }}
                >
                  Mission
                </div>
                <h3
                  style={{
                    fontSize: 28,
                    fontWeight: 300,
                    color: "#1A1A1A",
                    lineHeight: 1.3,
                    margin: "0 0 16px",
                  }}
                >
                  To be the health companion every Indian woman deserves.
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 300,
                    color: "#5A5A5A",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  Every feature we build, every decision we make, every trade-off we accept —
                  it starts with this. Are we genuinely helping the user?
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div style={{ padding: "48px 40px" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#F61887",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 20,
                  }}
                >
                  Vision
                </div>
                <h3
                  style={{
                    fontSize: 28,
                    fontWeight: 300,
                    color: "#1A1A1A",
                    lineHeight: 1.3,
                    margin: "0 0 16px",
                  }}
                >
                  A world where no Indian woman manages her health alone.
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 300,
                    color: "#5A5A5A",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  Not a metric. Not a tagline. A real state of the world that we&rsquo;re
                  working toward — one woman, one cycle, one conversation at a time.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── ROADMAP ───────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#F8F2F4" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span style={pill}>Roadmap</span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 300,
                  color: "#1A1A1A",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.15,
                  margin: "0 0 16px",
                }}
              >
                The journey ahead.
              </h2>
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 300,
                  color: "#5A5A5A",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Where we are and where we&rsquo;re going — transparently.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            {roadmapItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "160px 1fr",
                    gap: 0,
                    borderTop: i > 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  }}
                >
                  <div
                    style={{
                      padding: "28px 24px",
                      borderRight: "1px solid rgba(0,0,0,0.07)",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 400,
                        color: "#F61887",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                  <div style={{ padding: "28px 28px" }}>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: "#1A1A1A",
                        marginBottom: 8,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.headline}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 300,
                        color: "#5A5A5A",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.detail}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span style={pill}>What We Stand For</span>
              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 300,
                  color: "#1A1A1A",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.15,
                  margin: "0 0 16px",
                }}
              >
                Five things that never change.
              </h2>
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 300,
                  color: "#5A5A5A",
                  lineHeight: 1.75,
                  maxWidth: 560,
                  margin: "0 auto",
                }}
              >
                When features conflict, when revenue tempts, when growth pressures — these are what we come back to.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ border: "1px solid rgba(0,0,0,0.07)", maxWidth: 800, margin: "0 auto" }}>
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "56px 1fr",
                    borderTop: i > 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  }}
                >
                  <div
                    style={{
                      padding: "28px 20px",
                      borderRight: "1px solid rgba(0,0,0,0.07)",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 300,
                        color: "#F61887",
                      }}
                    >
                      {v.num}
                    </span>
                  </div>
                  <div style={{ padding: "28px 28px" }}>
                    <div
                      style={{
                        fontSize: 17,
                        fontWeight: 400,
                        color: "#1A1A1A",
                        marginBottom: 8,
                      }}
                    >
                      {v.title}
                    </div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 300,
                        color: "#5A5A5A",
                        lineHeight: 1.75,
                      }}
                    >
                      {v.body}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── NORTH STAR ────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#F8F2F4" }}>
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <AnimatedSection delay={0}>
            <div
              style={{
                fontSize: 72,
                fontWeight: 300,
                color: "#F61887",
                lineHeight: 0.8,
                marginBottom: 28,
                fontFamily: "Georgia, serif",
              }}
            >
              &ldquo;
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 300,
                color: "#1A1A1A",
                letterSpacing: "-0.5px",
                lineHeight: 1.25,
                margin: "0 0 24px",
              }}
            >
              3 billion downloads. 1 billion MAU. 100+ languages.
            </h2>
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                color: "#5A5A5A",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              But the goal was never the number. The goal was that no woman faces
              her body alone. The number is just how we know we got there.
            </p>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
