import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContributorsTree, { type Contributor } from "@/components/ui/ContributorsTree";

export const metadata: Metadata = {
  title: "Contributors — Sakhi",
  description: "The people who built Sakhi and everyone who contributes to the mission of making women's health accessible in India.",
};

const pill: React.CSSProperties = {
  background: "rgba(246,24,135,0.08)",
  color: "#F61887",
  padding: "6px 16px",
  borderRadius: 999,
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  display: "inline-block",
  marginBottom: 24,
};

const contributors: Contributor[] = [
  // Founders
  {
    id: "karan",
    name: "Karan Kumar",
    role: "Co-founder & Product",
    initials: "KK",
    level: "founder",
    since: "Jan 2024",
    contributions: "Product strategy, iOS development, AI integration, brand vision, full architecture",
  },
  {
    id: "arpita",
    name: "Arpita Gupta",
    role: "Co-founder & iOS Dev",
    initials: "AG",
    level: "founder",
    since: "Jan 2024",
    contributions: "iOS development, Swift/SwiftUI, backend integration, TestFlight, App Store launch",
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
  {
    id: "leaf-1", name: "Early User", role: "App Store",    initials: "EU", level: "community", since: "Jun 2025", contributions: "Downloaded, used, and shared Sakhi",
  },
  {
    id: "leaf-2", name: "Early User", role: "App Store",    initials: "EU", level: "community", since: "Jun 2025", contributions: "Downloaded, used, and shared Sakhi",
  },
  {
    id: "leaf-3", name: "Early User", role: "App Store",    initials: "EU", level: "community", since: "Jun 2025", contributions: "Downloaded, used, and shared Sakhi",
  },
  {
    id: "leaf-4", name: "Partner",    role: "B2B",          initials: "P",  level: "community", since: "2026",     contributions: "Campus and corporate wellness partnerships",
  },
  {
    id: "leaf-5", name: "Early User", role: "App Store",    initials: "EU", level: "community", since: "Jun 2025", contributions: "Downloaded, used, and shared Sakhi",
  },
  {
    id: "leaf-6", name: "Supporter",  role: "Community",    initials: "S",  level: "community", since: "2024",     contributions: "Believed in the mission from the beginning",
  },
];

const teamDetailed = [
  {
    id: "karan",
    name: "Karan Kumar",
    role: "Co-founder & Product Lead",
    title: "iOS Developer · Product Strategist",
    since: "January 2024",
    initials: "KK",
    bio: "Karan started Sakhi as Team 07 at the ISDP Bootcamp, Galgotias University, in January 2024. He leads product strategy, iOS development, AI integration, and the overall direction of Sakhi. He exited in August 2025 and returned by request on May 10, 2026 to lead the v2 launch.",
    quote: "Product is not what you build. It's the problem you solve.",
    contributions: ["iOS App (Swift/SwiftUI)", "Claude AI Integration", "Product Strategy", "Brand Vision", "Sakhi Design System", "v2 Architecture"],
    highlight: true,
  },
  {
    id: "arpita",
    name: "Arpita Gupta",
    role: "Co-founder & iOS Developer",
    title: "Swift · SwiftUI · Firebase",
    since: "January 2024",
    initials: "AG",
    bio: "Arpita has been building Sakhi's iOS codebase from the very first line of code. She manages iOS development, backend integration with Firebase, and has shepherded the app through every TestFlight build, Apple review, and App Store launch.",
    quote: "Every line of code is written for someone who needed this.",
    contributions: ["iOS Development", "Firebase Integration", "TestFlight Management", "App Store Launch", "SwiftUI Components", "Backend Architecture"],
    highlight: false,
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
    <div style={{ overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: "#F8F2F4", padding: "120px 24px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <AnimatedSection delay={0}>
            <span style={pill}>The People Behind Sakhi</span>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-1px", lineHeight: 1.1, margin: "0 0 24px" }}>
              Every great thing is built by{" "}
              <span style={{ color: "#F61887" }}>people who care.</span>
            </h1>
            <p style={{ fontSize: 18, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>
              Sakhi is the sum of everyone who believed in it — from the founders who started with nothing, to every woman who downloaded and trusted it. This tree grows with every contribution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── THE CONTRIBUTORS TREE ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <AnimatedSection delay={0}>
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <span style={pill}>The Tree</span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", margin: "0 0 12px" }}>
                The Sakhi contribution tree.
              </h2>
              <p style={{ fontSize: 16, fontWeight: 300, color: "#5A5A5A", margin: "0 0 40px" }}>
                Founders at the heart. Community at the edges. Everyone matters.
              </p>
            </div>
          </AnimatedSection>

          {/* Legend */}
          <AnimatedSection delay={100}>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 24, marginBottom: 52 }}>
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
                    <span style={{ fontSize: 12, fontWeight: 300, color: "#9A9A9A", marginLeft: 6 }}>— {l.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* The Tree */}
          <AnimatedSection delay={200}>
            <ContributorsTree contributors={contributors} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CORE TEAM DETAIL ── */}
      <section style={{ backgroundColor: "#F8F2F4", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection delay={0}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={pill}>Core Team</span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", margin: 0 }}>
                The people who built it.
              </h2>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 0, border: "1px solid rgba(0,0,0,0.07)" }}>
            {teamDetailed.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 100}>
                <div style={{
                  padding: "40px 32px",
                  backgroundColor: "#FFFFFF",
                  borderRight: i < teamDetailed.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  height: "100%",
                  boxSizing: "border-box" as const,
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 20,
                }}>
                  {/* Avatar */}
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: member.highlight ? "#F61887" : "rgba(246,24,135,0.08)",
                      border: member.highlight ? "none" : "1px solid rgba(246,24,135,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      fontWeight: 400,
                      color: member.highlight ? "#FFFFFF" : "#F61887",
                      flexShrink: 0,
                    }}>
                      {member.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 500, color: "#1A1A1A" }}>{member.name}</div>
                      <div style={{ fontSize: 13, fontWeight: 300, color: "#F61887" }}>{member.role}</div>
                      <div style={{ fontSize: 12, fontWeight: 300, color: "#9A9A9A" }}>Since {member.since}</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote style={{
                    margin: 0,
                    paddingLeft: 16,
                    borderLeft: "2px solid rgba(246,24,135,0.3)",
                    fontStyle: "italic",
                    fontSize: 15,
                    fontWeight: 300,
                    color: "#5A5A5A",
                    lineHeight: 1.7,
                  }}>
                    &ldquo;{member.quote}&rdquo;
                  </blockquote>

                  {/* Bio */}
                  <p style={{ fontSize: 15, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.75, margin: 0 }}>
                    {member.bio}
                  </p>

                  {/* Contribution tags */}
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginTop: "auto" }}>
                    {member.contributions.map(c => (
                      <span key={c} style={{
                        fontSize: 11,
                        fontWeight: 400,
                        color: "#F61887",
                        background: "rgba(246,24,135,0.07)",
                        padding: "4px 10px",
                        borderRadius: 999,
                        letterSpacing: "0.02em",
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

      {/* ── FOUNDING PARTNER ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <AnimatedSection delay={0}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <div>
                <span style={pill}>Founding Partner</span>
                <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", margin: "0 0 20px", lineHeight: 1.2 }}>
                  Galgotias University
                </h2>
                <p style={{ fontSize: 16, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.75, margin: "0 0 20px" }}>
                  Sakhi exists because of Galgotias University. Not as a customer — as a founding patron. The ISDP Bootcamp gave Sakhi its first moment. The campus gave it its first users. The institution gave it the credibility to walk into Apple.
                </p>
                <p style={{ fontSize: 16, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.75, margin: 0 }}>
                  We are grateful for every part of that support, and we carry it forward in everything we build.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
                {[
                  { label: "ISDP Bootcamp", desc: "Where Sakhi was born — Jan 2024" },
                  { label: "Apple Developer Program", desc: "University-custodian model — May 2024" },
                  { label: "Campus Promotion", desc: "v2 launch partner — Jun 2026" },
                  { label: "B2B Pathway", desc: "First institutional customer — Nov 2026" },
                ].map((item, i) => (
                  <div key={i} style={{ paddingLeft: 16, borderLeft: "2px solid rgba(246,24,135,0.2)" }}>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "#1A1A1A" }}>{item.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 300, color: "#9A9A9A" }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BECOME A CONTRIBUTOR ── */}
      <section style={{ backgroundColor: "#F8F2F4", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <AnimatedSection delay={0}>
            <span style={pill}>Your Leaf on the Tree</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", margin: "0 0 20px" }}>
              Add yourself to this tree.
            </h2>
            <p style={{ fontSize: 17, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.75, margin: "0 0 40px" }}>
              Every person who downloads Sakhi, shares it, tests it, reports a bug, gives feedback, or simply believes in what we&rsquo;re building — they&rsquo;re part of this tree. Your leaf is waiting.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" as const }}>
              <a href="https://apps.apple.com/app/id6742219623" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-block", backgroundColor: "#F61887", color: "#FFFFFF", padding: "14px 28px", borderRadius: 999, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>
                Download Sakhi →
              </a>
              <Link href="/contribute"
                style={{ display: "inline-flex", alignItems: "center", color: "#5A5A5A", textDecoration: "none", fontSize: 15, fontWeight: 300, padding: "14px 0" }}>
                More ways to contribute →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
