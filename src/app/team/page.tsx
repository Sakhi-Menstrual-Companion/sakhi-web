import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Team — Sakhi",
  description: "The people building Sakhi. Three students who refused to look away from a real problem.",
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

const teamMembers = [
  {
    initials: "KK",
    name: "Karan Kumar",
    role: "Co-founder & Product Lead, iOS Developer",
    quote: "Product is not what you build. It's the problem you solve.",
    bio: "Returned May 10, 2026. Karan leads product strategy, iOS development, and everything in between. He started Sakhi at Galgotias University in January 2024 and has been building it since.",
  },
  {
    initials: "AG",
    name: "Arpita Gupta",
    role: "Co-founder & iOS Developer",
    quote: "Every line of code is written for someone who needed this.",
    bio: "Building Sakhi from Day 1. Arpita manages iOS development and has kept the product alive and growing through every chapter of this journey.",
  },
  {
    initials: "SS",
    name: "Shruti Sachdeva",
    role: "Design Lead",
    quote: "Design is not decoration. It is the experience.",
    bio: "Shruti shapes how Sakhi looks and feels — the visual system, the interactions, the moments of care embedded in the design.",
  },
];

export default function TeamPage() {
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
            <span style={pill}>The Team</span>
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
              Built by people who refused to look away.
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
              Sakhi began as Team 07. Three students. One assignment.
              Something that became impossible to walk away from.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 300,
                  color: "#1A1A1A",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.15,
                  margin: "0 0 12px",
                }}
              >
                The people building Sakhi.
              </h2>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 300,
                  color: "#9A9A9A",
                  margin: 0,
                }}
              >
                Small team, deep conviction.
              </p>
            </div>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              border: "1px solid rgba(0,0,0,0.07)",
            }}
          >
            {teamMembers.map((member, i, arr) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div
                  style={{
                    padding: "40px 32px",
                    borderRight: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Initials circle */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      backgroundColor: "rgba(246,24,135,0.08)",
                      border: "1px solid rgba(246,24,135,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#F61887",
                      fontWeight: 400,
                      fontSize: 18,
                    }}
                  >
                    {member.initials}
                  </div>

                  {/* Name + role */}
                  <div>
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#1A1A1A",
                        marginBottom: 4,
                      }}
                    >
                      {member.name}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 300,
                        color: "#9A9A9A",
                        lineHeight: 1.5,
                      }}
                    >
                      {member.role}
                    </div>
                  </div>

                  {/* Quote */}
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "#5A5A5A",
                      lineHeight: 1.65,
                      margin: 0,
                      paddingLeft: 14,
                      borderLeft: "2px solid rgba(246,24,135,0.3)",
                    }}
                  >
                    &ldquo;{member.quote}&rdquo;
                  </p>

                  {/* Bio */}
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 300,
                      color: "#5A5A5A",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORIGIN ────────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#F8F2F4" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection delay={0}>
            <span style={pill}>Where It Began</span>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 300,
                color: "#1A1A1A",
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
                margin: "0 0 24px",
              }}
            >
              January 9, 2024. Galgotias University.
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
              The ISDP Bootcamp assigned Team 07 a problem. They chose women&rsquo;s health.
              Nobody told them to. They did 49 interviews, consulted gynaecologists, and
              found a gap so large it couldn&rsquo;t be ignored. Sakhi was the answer.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── GALGOTIAS ─────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection delay={0}>
            <span style={pill}>Founding Partner</span>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 300,
                color: "#1A1A1A",
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
                margin: "0 0 24px",
              }}
            >
              Galgotias University
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
              Sakhi exists because of Galgotias University. Not as a customer or a client —
              as a founding patron. The ISDP program, the campus, the relationships, the Apple
              Developer enrollment, the institutional credibility — all of it comes from GU.
              We are grateful for every bit of it.
            </p>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
