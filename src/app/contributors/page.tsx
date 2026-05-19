import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContributorsTree, { type Contributor } from "@/components/ui/ContributorsTree";

export const metadata: Metadata = {
  title: "Contributors — Sakhi",
  description: "The people who built Sakhi and everyone who contributes to the mission of making women's health accessible in India.",
};

const container: React.CSSProperties = { maxWidth: 1160, margin: "0 auto" };
const sectionPad: React.CSSProperties = { padding: "96px 24px" };
const label = (mb = 16): React.CSSProperties => ({
  fontSize: 13, fontWeight: 400, color: "#F61887",
  letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: mb, display: "block",
});

const contributors: Contributor[] = [
  // Founders
  {
    id: "karan",
    name: "Karan Kumar",
    role: "Founder & Product",
    initials: "KK",
    level: "founder",
    since: "Jan 2024",
    contributions: "Product strategy, iOS development, AI integration, brand vision, full architecture",
  },
  // Core
  {
    id: "shruti",
    name: "Shruti Sachdeva",
    role: "Design Lead",
    initials: "SS",
    level: "core",
    since: "Jan 2024",
    contributions: "Visual identity, design system, UI/UX, brand guidelines, logo design",
  },
  {
    id: "galgotias",
    name: "Galgotias University",
    role: "Founding Partner",
    initials: "GU",
    level: "core",
    since: "Jan 2024",
    contributions: "ISDP program, campus support, Apple Developer Program, institutional backing",
  },
  // Contributors
  {
    id: "you-1",
    name: "User Researcher",
    role: "Field Research",
    initials: "UR",
    level: "contributor",
    since: "Feb 2024",
    contributions: "49 user interviews, campus research, gynaecologist consultations",
  },
  {
    id: "you-2",
    name: "Medical Advisor",
    role: "Health Accuracy",
    initials: "MA",
    level: "contributor",
    since: "Q3 2024",
    contributions: "Medical content review, PCOD research, health condition documentation",
  },
  {
    id: "you-3",
    name: "Beta Tester",
    role: "TestFlight Users",
    initials: "BT",
    level: "contributor",
    since: "Mar 2025",
    contributions: "Early feedback, bug reports, feature requests, real-world usage testing",
  },
  {
    id: "you-4",
    name: "Campus Ambassador",
    role: "Community Growth",
    initials: "CA",
    level: "contributor",
    since: "2025",
    contributions: "Campus promotion, word-of-mouth, user onboarding, feedback collection",
  },
  // Community
  { id: "leaf-1", name: "Early User", role: "App Store",  initials: "EU", level: "community", since: "Jun 2025", contributions: "Downloaded, used, and shared Sakhi" },
  { id: "leaf-2", name: "Early User", role: "App Store",  initials: "EU", level: "community", since: "Jun 2025", contributions: "Downloaded, used, and shared Sakhi" },
  { id: "leaf-3", name: "Early User", role: "App Store",  initials: "EU", level: "community", since: "Jun 2025", contributions: "Downloaded, used, and shared Sakhi" },
  { id: "leaf-4", name: "Partner",    role: "B2B",        initials: "P",  level: "community", since: "2026",     contributions: "Campus and corporate wellness partnerships" },
  { id: "leaf-5", name: "Early User", role: "App Store",  initials: "EU", level: "community", since: "Jun 2025", contributions: "Downloaded, used, and shared Sakhi" },
  { id: "leaf-6", name: "Supporter",  role: "Community",  initials: "S",  level: "community", since: "2024",     contributions: "Believed in the mission from the beginning" },
];

const teamDetailed = [
  {
    id: "karan",
    name: "Karan Kumar",
    role: "Founder & Product Lead",
    title: "iOS Developer · Product Strategist",
    since: "January 2024",
    initials: "KK",
    bio: "Karan started Sakhi as Team 07 at the ISDP Bootcamp, Galgotias University, in January 2024. He leads product strategy, iOS development, AI integration, and the overall direction of Sakhi. Returned full-time on May 10, 2026 to lead the v2 launch.",
    quote: "Product is not what you build. It's the problem you solve.",
    contributions: ["iOS App (Swift/SwiftUI)", "Claude AI Integration", "Product Strategy", "Brand Vision", "Sakhi Design System", "v2 Architecture"],
    highlight: true,
  },
  {
    id: "shruti",
    name: "Shruti Sachdeva",
    role: "Design Lead",
    title: "UI/UX · Brand · Visual Identity",
    since: "January 2024",
    initials: "SS",
    bio: "Shruti is the visual mind behind Sakhi. She designed the logo, the brand system, the design language, and every screen of the app. The warmth and clarity that makes Sakhi feel trusted is Shruti's work.",
    quote: "Design is not decoration. It is the experience.",
    contributions: ["Logo & Brand Identity", "Design System", "UI/UX Design", "App Screens", "Brand Guidelines", "Visual Communication"],
    highlight: false,
  },
];

const levelLegend = [
  { level: "founder"     as const, label: "Founders",     desc: "Built Sakhi from the ground up" },
  { level: "core"        as const, label: "Core Partners", desc: "Institutional and key contributors" },
  { level: "contributor" as const, label: "Contributors",  desc: "Research, testing, and growth" },
  { level: "community"   as const, label: "Community",     desc: "Early users and supporters" },
];

const levelColors = {
  founder:     "#F61887",
  core:        "#F61887",
  contributor: "rgba(246,24,135,0.6)",
  community:   "rgba(246,24,135,0.3)",
};

export default function ContributorsPage() {
  return (
    <div style={{ overflowX: "hidden", fontFamily: "var(--font-lato), Lato, sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(160deg, #FDF0F5 0%, #F8F2F4 50%, #FFF5F8 100%)",
        padding: "160px 24px 96px",
      }}>
        <div style={{ ...container, maxWidth: 760 }}>
          <AnimatedSection delay={0}>
            <span style={label(20)}>The People Behind Sakhi</span>
            <h1 style={{ fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-1.5px", lineHeight: 1.05, margin: "0 0 28px" }}>
              Every great thing is built by people who care.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p style={{ fontSize: 18, fontWeight: 400, color: "#5A5A5A", lineHeight: 1.8, maxWidth: 560, margin: 0 }}>
              Sakhi is the sum of everyone who believed in it — from the founders who started with nothing, to every woman who downloaded and trusted it. This tree grows with every contribution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CONTRIBUTORS TREE ────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 52 }}>
              <span style={label()}>The Tree</span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: "0 0 12px" }}>
                The Sakhi contribution tree.
              </h2>
              <p style={{ fontSize: 17, fontWeight: 400, color: "#7A7A7A", lineHeight: 1.8, margin: 0 }}>
                Founders at the heart. Community at the edges. Everyone matters.
              </p>
            </div>
          </AnimatedSection>

          {/* Legend */}
          <AnimatedSection delay={100}>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 24, marginBottom: 52 }}>
              {levelLegend.map(l => (
                <div key={l.level} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: l.level === "founder" ? 16 : l.level === "core" ? 13 : l.level === "contributor" ? 11 : 9,
                    height: l.level === "founder" ? 16 : l.level === "core" ? 13 : l.level === "contributor" ? 11 : 9,
                    borderRadius: "50%",
                    background: l.level === "founder" ? "#F61887" : "transparent",
                    border: `2px solid ${levelColors[l.level]}`,
                    flexShrink: 0,
                  }} />
                  <div>
                    <span style={{ fontSize: 13, fontWeight: 500, color: "#1A1A1A" }}>{l.label}</span>
                    <span style={{ fontSize: 12, fontWeight: 400, color: "#9A9A9A", marginLeft: 6 }}>— {l.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <ContributorsTree contributors={contributors} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CORE TEAM ────────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#F8F2F4" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 52 }}>
              <span style={label()}>Core Team</span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: 0 }}>
                The people who built it.
              </h2>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, maxWidth: 880 }}>
            {teamDetailed.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 100}>
                <div style={{
                  background: "#FFFFFF",
                  borderRadius: 20,
                  padding: "40px 32px",
                  height: "100%",
                  boxSizing: "border-box" as const,
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 20,
                }}>
                  {/* Avatar */}
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: "50%",
                      background: member.highlight ? "#F61887" : "rgba(246,24,135,0.08)",
                      border: member.highlight ? "none" : "1.5px solid rgba(246,24,135,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 18, fontWeight: 400,
                      color: member.highlight ? "#FFFFFF" : "#F61887",
                      flexShrink: 0,
                    }}>
                      {member.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 500, color: "#1A1A1A" }}>{member.name}</div>
                      <div style={{ fontSize: 13, fontWeight: 400, color: "#F61887" }}>{member.role}</div>
                      <div style={{ fontSize: 12, fontWeight: 400, color: "#9A9A9A" }}>Since {member.since}</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote style={{
                    margin: 0, paddingLeft: 16,
                    borderLeft: "2px solid rgba(246,24,135,0.3)",
                    fontStyle: "italic", fontSize: 15, fontWeight: 400,
                    color: "#5A5A5A", lineHeight: 1.7,
                  }}>
                    &ldquo;{member.quote}&rdquo;
                  </blockquote>

                  {/* Bio */}
                  <p style={{ fontSize: 15, fontWeight: 400, color: "#5A5A5A", lineHeight: 1.8, margin: 0 }}>
                    {member.bio}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginTop: "auto" }}>
                    {member.contributions.map(c => (
                      <span key={c} style={{
                        fontSize: 11, fontWeight: 400, color: "#F61887",
                        background: "rgba(246,24,135,0.07)",
                        padding: "4px 10px", borderRadius: 999, letterSpacing: "0.02em",
                      }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDING PARTNER ─────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection delay={0}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <div>
                <span style={label()}>Founding Partner</span>
                <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", margin: "0 0 20px", lineHeight: 1.2 }}>
                  Galgotias University
                </h2>
                <p style={{ fontSize: 16, fontWeight: 400, color: "#5A5A5A", lineHeight: 1.8, margin: "0 0 16px" }}>
                  Sakhi exists because of Galgotias University — not as a customer, but as a founding patron. The ISDP Bootcamp gave Sakhi its first moment. The campus gave it its first users.
                </p>
                <p style={{ fontSize: 16, fontWeight: 400, color: "#5A5A5A", lineHeight: 1.8, margin: 0 }}>
                  We are grateful for every part of that support, and we carry it forward in everything we build.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
                {[
                  { label: "ISDP Bootcamp",          desc: "Where Sakhi was born — Jan 2024" },
                  { label: "Apple Developer Program", desc: "University-custodian model — May 2024" },
                  { label: "Campus Promotion",        desc: "v2 launch partner — Jun 2026" },
                  { label: "B2B Pathway",             desc: "First institutional partner — Nov 2026" },
                ].map((item, i) => (
                  <div key={i} style={{ paddingLeft: 16, borderLeft: "2px solid rgba(246,24,135,0.2)" }}>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "#1A1A1A" }}>{item.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 400, color: "#9A9A9A", marginTop: 2 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(160deg, #F61887 0%, #D4127A 100%)", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <AnimatedSection delay={0}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, color: "#FFFFFF", letterSpacing: "-1px", lineHeight: 1.1, margin: "0 0 20px" }}>
              Add your leaf to the tree.
            </h2>
            <p style={{ fontSize: 17, fontWeight: 400, color: "rgba(255,255,255,0.8)", lineHeight: 1.8, margin: "0 0 36px" }}>
              Every download, every share, every conversation — you become part of this.
            </p>
            <a href="https://apps.apple.com/app/id6742219623" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: "#FFFFFF", color: "#F61887", padding: "16px 36px", borderRadius: 999, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F61887"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download Sakhi
            </a>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
