import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import * as kit from "@/components/ui/pageKit";

export const metadata: Metadata = {
  title: "Team, Sakhi",
  description: "The people building Sakhi. The story of how a university bootcamp became a real women's health product.",
};

const container = kit.container;
const sectionPad = kit.sectionPad;
const label = (mb = 16): React.CSSProperties => ({ ...kit.eyebrow(), marginBottom: mb });

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

export default function TeamPage() {
  return (
    <div style={{ overflowX: "hidden", fontFamily: "var(--font-lato), Lato, sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{
        background: "var(--background)", borderBottom: "1px solid var(--border)",
        padding: "160px 0 96px",
      }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <span style={label(20)}>The Team</span>
            <h1 style={{ fontSize: "clamp(48px, 6vw, 76px)", color: "var(--foreground)", letterSpacing: "-0.02em", lineHeight: 1.05, margin: "0 0 28px" }}>
              Built by people<br />who care.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p style={{ fontSize: 18, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.8, maxWidth: 540, margin: 0 }}>
              Sakhi began as Team 07. A university bootcamp. One assignment. Something that became impossible to walk away from.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 52 }}>
              <span style={label()}>The People</span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--foreground)", letterSpacing: "-0.018em", lineHeight: 1.15, margin: "0 0 12px" }}>
                The people building Sakhi.
              </h2>
              <p style={{ fontSize: 17, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, margin: 0 }}>Small team. Deep conviction.</p>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {teamMembers.map((member, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div style={{
                  background: "#F8F2F4",
                  borderRadius: 24,
                  padding: "40px 32px",
                  height: "100%",
                  boxSizing: "border-box" as const,
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 20,
                }}>
                  {/* Avatar */}
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: member.highlight ? "var(--primary)" : "rgba(246,24,135,0.08)",
                    border: member.highlight ? "none" : "1.5px solid rgba(246,24,135,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    fontWeight: 400,
                    color: member.highlight ? "#FFFFFF" : "var(--primary)",
                    flexShrink: 0,
                  }}>
                    {member.initials}
                  </div>

                  {/* Name + role */}
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 500, color: "var(--foreground)", marginBottom: 4 }}>{member.name}</div>
                    <div style={{ fontSize: 14, fontWeight: 400, color: "var(--primary)" }}>{member.role}</div>
                  </div>

                  {/* Quote */}
                  <p style={{
                    fontSize: 15, fontWeight: 400, fontStyle: "italic",
                    color: "#6B6B6B", lineHeight: 1.65, margin: 0,
                    paddingLeft: 14, borderLeft: "2px solid rgba(246,24,135,0.3)",
                  }}>
                    &ldquo;{member.quote}&rdquo;
                  </p>

                  {/* Bio */}
                  <p style={{ fontSize: 15, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, margin: 0 }}>
                    {member.bio}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORIGIN ───────────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#fbf9fb" }}>
        <div style={kit.container}>
          <AnimatedSection delay={0}>
            <span style={label()}>Where It Began</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "var(--foreground)", letterSpacing: "-0.018em", lineHeight: 1.2, margin: "0 0 24px" }}>
              January 9, 2024. Galgotias University.
            </h2>
            <p style={{ fontSize: 17, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, margin: 0 }}>
              The ISDP Bootcamp assigned Team 07 a problem. They chose women&rsquo;s health, not because they were told to, but because it felt unaddressed. 49 user interviews. Gynaecologist consultations. A gap so large it couldn&rsquo;t be ignored. Sakhi was the answer.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── GALGOTIAS ────────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div style={kit.container}>
          <AnimatedSection delay={0}>
            <span style={label()}>Founding Partner</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "var(--foreground)", letterSpacing: "-0.018em", lineHeight: 1.2, margin: "0 0 24px" }}>
              Galgotias University
            </h2>
            <p style={{ fontSize: 17, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, margin: 0 }}>
              Sakhi exists because of Galgotias University, not as a customer, but as a founding patron. The ISDP program, the campus, the Apple Developer Program enrollment, the institutional credibility, all of it comes from GU. We carry that forward in everything we build.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--background-blush)", borderTop: "1px solid var(--border)", padding: "80px 0", textAlign: "center" }}>
        <div style={kit.container}>
          <AnimatedSection delay={0}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--foreground)", letterSpacing: "-0.018em", lineHeight: 1.1, margin: "0 0 20px" }}>
              Join the journey.
            </h2>
            <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.8, margin: "0 0 36px" }}>
              Free. No ads. Your data stays yours.
            </p>
            <a href="https://apps.apple.com/app/id6742219623" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)", padding: "0 22px", height: 44, borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary)"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download on App Store
            </a>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
