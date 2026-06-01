import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Vision & Roadmap — Sakhi",
  description: "Where Sakhi is going. Our mission, values, and the roadmap to 1 billion users.",
};

const container: React.CSSProperties = { maxWidth: 1160, margin: "0 auto" };
const sectionPad: React.CSSProperties = { padding: "96px 24px" };
const label = (mb = 16): React.CSSProperties => ({
  fontSize: 13, fontWeight: 400, color: "#F61887",
  letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: mb, display: "block",
});

const roadmapItems = [
  { period: "NOW — 2026", headline: "100,000 downloads · Android beta · Premium subscription · B2B campus contracts", detail: "v2 launches June 2, 2026 with Android support. Premium subscription in August. First campus B2B partnerships starting November." },
  { period: "2027",       headline: "3 million users · Doctor network · Hindi and regional languages",                  detail: "Crossing 3M users. Full doctor network integration. Hindi, Tamil, Bengali, Marathi, Telugu support." },
  { period: "2028",       headline: "Profitability · Sakhi Watch · 7 million users",                                    detail: "First profitable year. Sakhi Watch brings passive tracking to your wrist. 7M users across India." },
  { period: "2029",       headline: "Doctor consultations · Insurance integration · 15 million users",                  detail: "Book gynaecologist consultations inside Sakhi. Insurance partnerships. 15M users." },
  { period: "2034+",      headline: "1 billion MAU · 100+ languages · IPO-ready",                                       detail: "The long game. Full lifecycle coverage from first period to menopause. Every woman. Every language." },
];

const values = [
  { num: "01", title: "Genuinely Help the User",  body: "This is the only reason Sakhi exists. Not growth. Not revenue. Not recognition. Does this genuinely help the woman using it? If yes, we build it." },
  { num: "02", title: "Earn and Keep Trust",       body: "Trust is the product. Health data is intimate. We treat it that way — encrypted, private, never sold, always under her control." },
  { num: "03", title: "Sustain the Mission",       body: "Revenue is fuel. Without it, we can't keep building. We earn it by being genuinely useful, not by compromising the first two values." },
  { num: "04", title: "Grow",                      body: "More users means more women helped. We grow because the problem is large, not because growth is the goal." },
  { num: "05", title: "Be Recognized",             body: "Press, awards, Apple features — these are outputs of doing good work, not things we chase. They come when the first four are right." },
];

export default function VisionPage() {
  return (
    <div style={{ overflowX: "hidden", fontFamily: "var(--font-lato), Lato, sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(160deg, #FDF0F5 0%, #F8F2F4 50%, #FFF5F8 100%)",
        padding: "160px 24px 96px",
      }}>
        <div style={{ ...container, maxWidth: 760 }}>
          <AnimatedSection delay={0}>
            <span style={label(20)}>The Vision</span>
            <h1 style={{ fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-1.5px", lineHeight: 1.05, margin: "0 0 28px" }}>
              We&rsquo;re not building<br />an app.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p style={{ fontSize: 18, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, maxWidth: 560, margin: 0 }}>
              We&rsquo;re building a relationship between a woman and her health. 252 million Indian women deserve a companion — not just a tracker. This is what we&rsquo;re working toward.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <AnimatedSection delay={0}>
              <div style={{ background: "#F8F2F4", borderRadius: "20px 0 0 20px", padding: "48px 40px", height: "100%", boxSizing: "border-box" as const }}>
                <div style={{ fontSize: 11, fontWeight: 400, color: "#F61887", letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 20 }}>Mission</div>
                <h3 style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 300, color: "#1A1A1A", lineHeight: 1.3, margin: "0 0 16px" }}>
                  To be the health companion every Indian woman deserves.
                </h3>
                <p style={{ fontSize: 16, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, margin: 0 }}>
                  Every feature we build, every decision we make, every trade-off we accept — it starts with this. Are we genuinely helping the user?
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div style={{ background: "#F61887", borderRadius: "0 20px 20px 0", padding: "48px 40px", height: "100%", boxSizing: "border-box" as const }}>
                <div style={{ fontSize: 11, fontWeight: 400, color: "rgba(255,255,255,0.65)", letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 20 }}>Vision</div>
                <h3 style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.3, margin: "0 0 16px" }}>
                  A world where no Indian woman manages her health alone.
                </h3>
                <p style={{ fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.82)", lineHeight: 1.8, margin: 0 }}>
                  Not a metric. Not a tagline. A real state of the world we&rsquo;re working toward — one woman, one cycle, one conversation at a time.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── ROADMAP ──────────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#F8F2F4" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 52 }}>
              <span style={label()}>Roadmap</span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: "0 0 12px" }}>
                The journey ahead.
              </h2>
              <p style={{ fontSize: 17, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, margin: 0 }}>
                Where we are and where we&rsquo;re going — transparently.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
            {roadmapItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div style={{
                  background: "#FFFFFF",
                  borderRadius: i === 0 ? "16px 16px 0 0" : i === roadmapItems.length - 1 ? "0 0 16px 16px" : 0,
                  display: "grid", gridTemplateColumns: "160px 1fr", gap: 0,
                }}>
                  <div style={{ padding: "28px 24px", borderRight: "1px solid rgba(246,24,135,0.1)", display: "flex", alignItems: "flex-start" }}>
                    <span style={{ fontSize: 13, fontWeight: 400, color: "#F61887", letterSpacing: "0.02em" }}>{item.period}</span>
                  </div>
                  <div style={{ padding: "28px 28px" }}>
                    <div style={{ fontSize: 16, fontWeight: 500, color: "#1A1A1A", marginBottom: 8, lineHeight: 1.4 }}>{item.headline}</div>
                    <div style={{ fontSize: 14, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.7 }}>{item.detail}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 52 }}>
              <span style={label()}>What We Stand For</span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: "0 0 12px" }}>
                Five things that never change.
              </h2>
              <p style={{ fontSize: 17, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, maxWidth: 560, margin: 0 }}>
                When features conflict, when revenue tempts, when growth pressures — these are what we come back to.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 2, maxWidth: 800 }}>
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div style={{
                  background: "#F8F2F4",
                  borderRadius: i === 0 ? "16px 16px 0 0" : i === values.length - 1 ? "0 0 16px 16px" : 0,
                  display: "grid", gridTemplateColumns: "56px 1fr",
                }}>
                  <div style={{ padding: "28px 20px", borderRight: "1px solid rgba(246,24,135,0.1)", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                    <span style={{ fontSize: 13, fontWeight: 400, color: "#F61887" }}>{v.num}</span>
                  </div>
                  <div style={{ padding: "28px 28px" }}>
                    <div style={{ fontSize: 17, fontWeight: 500, color: "#1A1A1A", marginBottom: 8 }}>{v.title}</div>
                    <div style={{ fontSize: 15, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8 }}>{v.body}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── NORTH STAR ───────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#F8F2F4" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection delay={0}>
            <span style={label()}>North Star</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.25, margin: "0 0 24px" }}>
              3 billion downloads. 1 billion MAU. 100+ languages.
            </h2>
            <p style={{ fontSize: 18, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.85, margin: 0 }}>
              But the goal was never the number. The goal was that no woman faces her body alone. The number is just how we know we got there.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(160deg, #F61887 0%, #D4127A 100%)", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <AnimatedSection delay={0}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, color: "#FFFFFF", letterSpacing: "-1px", lineHeight: 1.1, margin: "0 0 20px" }}>
              Be part of the journey.
            </h2>
            <p style={{ fontSize: 17, fontWeight: 400, color: "rgba(255,255,255,0.8)", lineHeight: 1.8, margin: "0 0 36px" }}>
              Free. No ads. Your data stays yours.
            </p>
            <a href="https://apps.apple.com/app/id6742219623" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: "#FFFFFF", color: "#F61887", padding: "16px 36px", borderRadius: 999, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F61887"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download on App Store
            </a>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
