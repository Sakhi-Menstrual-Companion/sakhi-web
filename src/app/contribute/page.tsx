import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import * as kit from "@/components/ui/pageKit";

export const metadata: Metadata = {
  title: "Join Us, Sakhi",
  description: "Three ways to support Sakhi, download and use, become a campus ambassador, or partner with us.",
};

const container = kit.container;
const sectionPad = kit.sectionPad;

const pill: React.CSSProperties = {
  background: "rgba(246,24,135,0.08)",
  color: "var(--primary)",
  padding: "6px 16px",
  borderRadius: 999,
  fontSize: 16,
  fontWeight: 600,
  letterSpacing: "-0.008em",
  display: "inline-block",
  marginBottom: 22,
};

export default function ContributePage() {
  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--background)", borderBottom: "1px solid var(--border)",
          padding: "160px 0 96px",
          textAlign: "center",
        }}
      >
        <div style={kit.container}>
          <AnimatedSection delay={0}>
            <span style={pill}>Join the Mission</span>
            <h1
              style={{
                fontSize: "clamp(48px, 6vw, 80px)",
                color: "var(--foreground)",
                letterSpacing: 0,
                lineHeight: 1.1,
                margin: "0 0 24px",
              }}
            >
              Join the Sakhi mission.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p
              style={{
                fontSize: 18,
                fontWeight: 400,
                color: "var(--muted-foreground)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Three ways to be part of something that genuinely matters, for women across India.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── THREE WAYS ────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  color: "var(--foreground)",
                  letterSpacing: 0,
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                How you can help.
              </h2>
            </div>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {[
              {
                num: "01",
                title: "Download & Use",
                body: "Be an early user. Your experience shapes the future of Sakhi. Every log, every bug report, every moment of 'this doesn't feel right' makes Sakhi better for the next woman. The most direct form of support: use it and share what you think.",
                cta: "Download Sakhi →",
                href: "https://apps.apple.com/app/id6742219623",
                external: true,
              },
              {
                num: "02",
                title: "Campus Ambassador",
                body: "Bring Sakhi to your campus. Every college has women who need this. Help them find it. We support our campus ambassadors with resources, recognition, and a community of people building something meaningful together.",
                cta: "Become an Ambassador →",
                href: "mailto:contact@sakhiapp.in",
                external: false,
              },
              {
                num: "03",
                title: "Partner With Us",
                body: "For institutions, companies, and brands. Sakhi works with universities and corporations to bring women's health infrastructure to campuses and workplaces.",
                cta: "Get in Touch →",
                href: "mailto:contact@sakhiapp.in",
                external: false,
              },
            ].map((col, i, arr) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div
                  style={{
                    padding: "40px 32px",
                    borderRight: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 400,
                      color: "var(--primary)",
                      letterSpacing: "0.06em",
                      marginBottom: 16,
                    }}
                  >
                    {col.num}
                  </div>
                  <div
                    style={{
                      paddingTop: 20,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 20,
                        fontWeight: 400,
                        color: "var(--foreground)",
                        margin: 0,
                      }}
                    >
                      {col.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 400,
                        color: "#6B6B6B",
                        lineHeight: 1.75,
                        margin: 0,
                        flex: 1,
                      }}
                    >
                      {col.body}
                    </p>
                    <a
                      href={col.href}
                      target={col.external ? "_blank" : undefined}
                      rel={col.external ? "noopener noreferrer" : undefined}
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: "var(--primary)",
                        textDecoration: "none",
                      }}
                    >
                      {col.cta}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS BLOCK ──────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#fbf9fb" }}>
        <div style={kit.container}>
          <AnimatedSection delay={0}>
            <span style={pill}>For Universities</span>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                color: "var(--foreground)",
                letterSpacing: 0,
                lineHeight: 1.15,
                margin: "0 0 8px",
              }}
            >
              Sakhi for your campus.
            </h2>
            <p
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: "var(--primary)",
                margin: "0 0 20px",
              }}
            >
              ₹50,000 - ₹1,00,000 per year
            </p>
            <p
              style={{
                fontSize: 17,
                fontWeight: 400,
                color: "#6B6B6B",
                lineHeight: 1.75,
                margin: "0 0 36px",
              }}
            >
              A complete women&rsquo;s health program for your institution. Cycle tracking, AI-powered
              insights, Doctor Reports, and care infrastructure built for college life. Over 50,000
              women across India study at campuses with no structured menstrual health support.
              Sakhi changes that.
            </p>
            <a
              href="mailto:contact@sakhiapp.in"
              style={{
                display: "inline-block",
                backgroundColor: "var(--background-blush)",
                color: "var(--foreground)",
                padding: "14px 28px",
                borderRadius: 999,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              Talk to Us →
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CORPORATE BLOCK ───────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div style={kit.container}>
          <AnimatedSection delay={0}>
            <span style={pill}>For Companies</span>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                color: "var(--foreground)",
                letterSpacing: 0,
                lineHeight: 1.15,
                margin: "0 0 20px",
              }}
            >
              Healthy employees build better companies.
            </h2>
            <p
              style={{
                fontSize: 17,
                fontWeight: 400,
                color: "#6B6B6B",
                lineHeight: 1.75,
                margin: "0 0 36px",
              }}
            >
              Bring Sakhi to your female employees. Real health support, not generic wellness noise.
              Women who understand their health take fewer unplanned sick days, communicate better
              about their needs, and feel more supported at work. Sakhi is wellness that actually works.
            </p>
            <a
              href="mailto:contact@sakhiapp.in"
              style={{
                display: "inline-block",
                color: "var(--primary)",
                padding: "14px 28px",
                borderRadius: 999,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 400,
              }}
            >
              Corporate Enquiry →
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#fbf9fb" }}>
        <div style={{ ...kit.container, textAlign: "center" }}>
          <AnimatedSection delay={0}>
            <p
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: "#A0A0A0",
                margin: "0 0 16px",
              }}
            >
              Questions? Partnerships? Just want to talk?
            </p>
            <a
              href="mailto:contact@sakhiapp.in"
              style={{
                display: "block",
                fontSize: "clamp(22px, 3vw, 28px)",
                fontWeight: 400,
                color: "var(--primary)",
                textDecoration: "none",
                marginBottom: 12,
              }}
            >
              contact@sakhiapp.in
            </a>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#A0A0A0",
                margin: 0,
              }}
            >
              We respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
