import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import * as kit from "@/components/ui/pageKit";

export const metadata: Metadata = {
  title: "Press, Sakhi",
  description: "Sakhi in the press. Times of India, Apple Success Story, UP International Trade Show, and more.",
};

const container = kit.container;
const sectionPad = kit.sectionPad;
const label = (mb = 16): React.CSSProperties => ({ ...kit.eyebrow(), marginBottom: mb });

const pressItems = [
  {
    publication: "Times of India",
    date: "Q4 2024",
    description: "National coverage of a student-built women's health app from Galgotias University making waves in India's health tech space.",
  },
  {
    publication: "Apple Success Story",
    date: "September 2025",
    description: "Apple selected Sakhi's journey for a global Success Story feature. Photoshoot on the Galgotias campus. A student app, recognised by the world's most valuable company.",
  },
  {
    publication: "UP International Trade Show",
    date: "Q4 2024",
    description: "Sakhi represented the next generation of Indian health technology at one of India's most prominent trade and innovation showcases.",
  },
  {
    publication: "Greg Joswiak, Apple SVP",
    date: "Q4 2024",
    description: "Sakhi was presented directly to Greg Joswiak, Apple's Senior Vice President. A student app from UP, standing in front of one of the most powerful people in tech.",
  },
];

export default function PressPage() {
  return (
    <div style={{ overflowX: "hidden", fontFamily: "var(--font-lato), Lato, sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{
        background: "var(--background)", borderBottom: "1px solid var(--border)",
        padding: "160px 0 96px",
      }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <span style={label(20)}>Press</span>
            <h1 style={{ fontSize: "clamp(48px, 6vw, 76px)", color: "var(--foreground)", letterSpacing: "-0.02em", lineHeight: 1.05, margin: "0 0 28px" }}>
              Sakhi in<br />the world.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p style={{ fontSize: 18, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.8, maxWidth: 540, margin: 0 }}>
              We didn&rsquo;t chase press. We built something worth talking about. Here&rsquo;s where the world has noticed.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PRESS LIST ────────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 52 }}>
              <span style={label()}>Coverage</span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--foreground)", letterSpacing: "-0.018em", lineHeight: 1.15, margin: 0 }}>
                Where we&rsquo;ve been featured.
              </h2>
            </div>
          </AnimatedSection>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
            {pressItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div style={{
                  background: "#F8F2F4",
                  borderRadius: i === 0 ? "8px 8px 0 0" : i === pressItems.length - 1 ? "0 0 8px 8px" : 0,
                  display: "grid", gridTemplateColumns: "200px 1fr", gap: 0,
                }}>
                  <div style={{ padding: "28px 0", borderRight: "1px solid rgba(246,24,135,0.1)", display: "flex", flexDirection: "column" as const, gap: 6 }}>
                    <span style={{ fontSize: 15, fontWeight: 500, color: "var(--foreground)", lineHeight: 1.3 }}>{item.publication}</span>
                    <span style={{ fontSize: 12, fontWeight: 400, color: "var(--primary)" }}>{item.date}</span>
                  </div>
                  <div style={{ padding: "28px 28px", display: "flex", alignItems: "center" }}>
                    <p style={{ fontSize: 15, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.75, margin: 0 }}>{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS KIT ────────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#fbf9fb" }}>
        <div style={kit.container}>
          <AnimatedSection delay={0}>
            <span style={label()}>Media</span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--foreground)", letterSpacing: "-0.018em", lineHeight: 1.15, margin: "0 0 20px" }}>
              For journalists and media.
            </h2>
            <p style={{ fontSize: 17, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, margin: "0 0 36px" }}>
              Brand assets, product screenshots, founder bios, and the full Sakhi story, ready for press use. Reach out and we&rsquo;ll send everything over.
            </p>
            <a href="mailto:contact@sakhiapp.in"
              style={{ display: "inline-block", color: "var(--primary)", padding: "14px 28px", borderRadius: 999, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>
              Request Press Kit →
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--background-blush)", borderTop: "1px solid var(--border)", padding: "80px 0", textAlign: "center" }}>
        <div style={kit.container}>
          <AnimatedSection delay={0}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--foreground)", letterSpacing: "-0.018em", lineHeight: 1.1, margin: "0 0 20px" }}>
              Try it yourself.
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
