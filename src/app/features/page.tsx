import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Features — Sakhi",
  description: "Everything Sakhi does. Cycle tracking, Sakhi AI, Be Her Sakhi, Doctor Report, and more.",
};

const container: React.CSSProperties = { maxWidth: 1160, margin: "0 auto" };
const sectionPad: React.CSSProperties = { padding: "96px 24px" };
const label = (mb = 16): React.CSSProperties => ({
  fontSize: 13, fontWeight: 400, color: "#F61887",
  letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: mb, display: "block",
});

const features = [
  { num: "01", title: "Cycle Tracking",        desc: "Period start and end, cycle length prediction, phase tracking (follicular, ovulation, luteal, menstrual), PMS alerts. Know where you are in your cycle, always." },
  { num: "02", title: "Body Logging",           desc: "Cramps, headache, bloating, fever, energy levels, weight. Log any symptom, any day. Over time, patterns emerge that your body has been trying to tell you." },
  { num: "03", title: "Mood & Mental Health",   desc: "Mood tracking, stress levels, anxiety, irritability, sleep quality. Understand the deep connection between your cycle phase and how you feel." },
  { num: "04", title: "Lifestyle",              desc: "Exercise, diet notes, water intake, any custom symptom you define. Sakhi adapts to your life, not the other way around." },
  { num: "05", title: "Doctor Report",          desc: "All your logs compile into a clean PDF report for gynaecologist visits. Free to export. Bring your complete health history to every appointment." },
  { num: "06", title: "Sakhi AI",               desc: "Personalized answers from Claude AI, based on your actual cycle data and symptom history. Not generic health tips — answers that are actually about you." },
  { num: "07", title: "Safety Features",        desc: "Washroom locator and nearby public spaces finder using MapKit. Small features that matter when you're out and need them." },
  { num: "08", title: "Be Her Sakhi",           desc: "Consent-based one-to-one sharing with a trusted person. They see curated health updates and receive care guidance. She decides what they see and when." },
  { num: "09", title: "Offline First",          desc: "Core logging, cycle predictions, and Doctor Report all work completely offline. Your health doesn't wait for WiFi." },
];

const coming = [
  { title: "Sakhi Watch",        desc: "Passive health tracking. No logging required. Your wrist, working for you." },
  { title: "Doctor Network",     desc: "Book consultations directly inside Sakhi. Your full health history, ready to share. (2029)" },
  { title: "Android Beta",       desc: "Full Sakhi experience on Android. (December 2026)" },
  { title: "Regional Languages", desc: "Hindi and 4+ regional languages. Because your language is her language. (2027)" },
];

export default function FeaturesPage() {
  return (
    <div style={{ overflowX: "hidden", fontFamily: "var(--font-lato), Lato, sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(160deg, #FDF0F5 0%, #F8F2F4 50%, #FFF5F8 100%)",
        padding: "160px 24px 96px",
      }}>
        <div style={{ ...container, maxWidth: 760 }}>
          <AnimatedSection delay={0}>
            <span style={label(20)}>The App</span>
            <h1 style={{ fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-1.5px", lineHeight: 1.05, margin: "0 0 28px" }}>
              Built for the way<br />women actually live.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p style={{ fontSize: 18, fontWeight: 400, color: "#5A5A5A", lineHeight: 1.8, maxWidth: 560, margin: 0 }}>
              Not just a period tracker. A complete health companion that understands your body, learns from your data, and helps the people who love you support you better.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FEATURES GRID ────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 52 }}>
              <span style={label()}>Features</span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: 0 }}>
                Everything in one place.
              </h2>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={(i % 3) * 80}>
                <div style={{ background: "#F8F2F4", borderRadius: 20, padding: "32px 28px", height: "100%", boxSizing: "border-box" as const }}>
                  <div style={{ fontSize: 11, fontWeight: 400, color: "#F61887", letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 14 }}>{f.num}</div>
                  <div style={{ borderTop: "2px solid #F61887", paddingTop: 16 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 500, color: "#1A1A1A", margin: "0 0 10px" }}>{f.title}</h3>
                    <p style={{ fontSize: 14, fontWeight: 400, color: "#5A5A5A", lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVACY ──────────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#F8F2F4" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span style={label()}>Privacy First</span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: "0 0 20px" }}>
                Your privacy comes first. Always.
              </h2>
              <p style={{ fontSize: 17, fontWeight: 400, color: "#5A5A5A", lineHeight: 1.8, maxWidth: 560, margin: "0 auto" }}>
                Sakhi was designed from day one with privacy as a core value, not a feature. You control your data. Always.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, maxWidth: 720, margin: "0 auto" }}>
              <div style={{ background: "#FFFFFF", border: "1.5px solid #F61887", borderRadius: 20, padding: "32px 28px" }}>
                <div style={{ marginBottom: 20 }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 3L5 8v8c0 6.6 4.7 12.8 11 14.4C22.3 28.8 27 22.6 27 16V8L16 3z" fill="rgba(246,24,135,0.1)" stroke="#F61887" strokeWidth="1.5"/>
                    <path d="M11 16l3.5 3.5L21 12" stroke="#F61887" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#F61887", margin: "0 0 10px" }}>Back up securely</h3>
                <p style={{ fontSize: 14, fontWeight: 400, color: "#5A5A5A", lineHeight: 1.7, margin: "0 0 20px" }}>
                  Create an account to safely back up your health data and access it across devices. Encrypted.
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 400, color: "#F61887", background: "rgba(246,24,135,0.08)", padding: "4px 12px", borderRadius: 999 }}>
                  Selected
                </div>
              </div>

              <div style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 20, padding: "32px 28px" }}>
                <div style={{ marginBottom: 20 }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="8" y="4" width="16" height="24" rx="3" fill="rgba(90,90,90,0.08)" stroke="#9A9A9A" strokeWidth="1.5"/>
                    <circle cx="16" cy="20" r="2" fill="#9A9A9A"/>
                    <line x1="11" y1="10" x2="21" y2="10" stroke="#9A9A9A" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="11" y1="14" x2="21" y2="14" stroke="#9A9A9A" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#5A5A5A", margin: "0 0 10px" }}>Stay on device only</h3>
                <p style={{ fontSize: 14, fontWeight: 400, color: "#5A5A5A", lineHeight: 1.7, margin: 0 }}>
                  Your data stays on this device. Never leaves. Won&rsquo;t be available if you change phones.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── COMING SOON ──────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 52 }}>
              <span style={label()}>Roadmap Preview</span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: "0 0 12px" }}>
                What&rsquo;s coming.
              </h2>
              <p style={{ fontSize: 17, fontWeight: 400, color: "#7A7A7A", lineHeight: 1.8, margin: 0 }}>Sakhi is just getting started.</p>
            </div>
          </AnimatedSection>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
            {coming.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div style={{ background: "#F8F2F4", borderRadius: i === 0 ? "16px 16px 0 0" : i === coming.length - 1 ? "0 0 16px 16px" : 0, padding: "24px 28px", display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <span style={{ fontSize: 16, color: "#F61887", fontWeight: 400, flexShrink: 0, marginTop: 2 }}>→</span>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 500, color: "#1A1A1A", marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 15, fontWeight: 400, color: "#5A5A5A", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(160deg, #F61887 0%, #D4127A 100%)", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <AnimatedSection delay={0}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, color: "#FFFFFF", letterSpacing: "-1px", lineHeight: 1.1, margin: "0 0 20px" }}>
              Try it for yourself.
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
