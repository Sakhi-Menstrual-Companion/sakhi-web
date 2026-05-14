import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Press — Sakhi",
  description: "Sakhi in the press. Times of India, Apple Success Story, UP International Trade Show, and more.",
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

const pressItems = [
  {
    publication: "Times of India",
    date: "Q4 2024",
    description:
      "National coverage of a student-built women's health app from Galgotias University making waves in India's health tech space.",
  },
  {
    publication: "Apple Success Story",
    date: "September 2025",
    description:
      "Apple selected Sakhi's journey for a global Success Story feature. Photoshoot took place on the Galgotias campus. Publication pending.",
  },
  {
    publication: "UP International Trade Show",
    date: "Q4 2024",
    description:
      "Sakhi represented the next generation of Indian health technology at one of India's most prominent trade and innovation showcases.",
  },
  {
    publication: "Apple SVP — Greg Joswiak",
    date: "Q4 2024",
    description:
      "Sakhi was presented directly to Greg Joswiak, Apple's Senior Vice President. A student app from UP, on the world's biggest technology stage.",
  },
];

export default function PressPage() {
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
            <span style={pill}>Press</span>
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
              Sakhi in the world.
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
              We didn&rsquo;t chase press. We built something worth talking about.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PRESS LIST ────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 40 }}>
              <span style={pill}>Coverage</span>
            </div>
          </AnimatedSection>

          <div style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            {pressItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "240px 1fr",
                    gap: 0,
                    borderTop: i > 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  }}
                >
                  <div
                    style={{
                      padding: "32px 28px",
                      borderRight: "1px solid rgba(0,0,0,0.07)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: "#1A1A1A",
                        marginBottom: 6,
                      }}
                    >
                      {item.publication}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 300,
                        color: "#9A9A9A",
                      }}
                    >
                      {item.date}
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "32px 28px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 300,
                        color: "#5A5A5A",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ─────────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#F8F2F4" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <AnimatedSection delay={0}>
            <div
              style={{
                fontSize: 72,
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
                margin: 0,
              }}
            >
              We didn&rsquo;t chase press. We built something worth talking about.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PRESS KIT ─────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection delay={0}>
            <span style={pill}>Media</span>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 300,
                color: "#1A1A1A",
                letterSpacing: "-0.5px",
                lineHeight: 1.15,
                margin: "0 0 20px",
              }}
            >
              For journalists and media.
            </h2>
            <p
              style={{
                fontSize: 17,
                fontWeight: 300,
                color: "#5A5A5A",
                lineHeight: 1.75,
                margin: "0 0 36px",
              }}
            >
              Brand assets, product screenshots, founder bios, and the full story of
              Sakhi — ready for press use.
            </p>
            <a
              href="mailto:contact@sakhiapp.in"
              style={{
                display: "inline-block",
                border: "1px solid #F61887",
                color: "#F61887",
                padding: "14px 28px",
                borderRadius: 999,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 400,
                transition: "all 0.2s ease",
              }}
            >
              Download Press Kit →
            </a>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
