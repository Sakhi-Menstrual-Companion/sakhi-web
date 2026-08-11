import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import * as kit from "@/components/ui/pageKit";

export const metadata: Metadata = {
  title: "Brand, Sakhi",
  description: "Sakhi's brand system: colors, typography, voice, and design principles. Everything that makes Sakhi feel like Sakhi.",
};

const sectionPad = kit.sectionPad;
const container = kit.container;
const label: React.CSSProperties = {
  fontSize: 12, fontWeight: 400, color: "var(--primary)",
  marginBottom: 12, display: "block",
};

const colors = [
  { name: "Primary Pink",    hex: "var(--primary)", rgb: "246 · 24 · 135",  bg: "var(--primary)", text: "#fff",    usage: "CTA buttons, active states, key icons. The color of action and care." },
  { name: "Deep Pink",       hex: "#D4006E", rgb: "187 · 41 · 104",  bg: "#D4006E", text: "#fff",    usage: "Hover states, pressed buttons, gradient endpoints." },
  { name: "Deep Burgundy",   hex: "#D4006E", rgb: "109 · 23 · 67",   bg: "#D4006E", text: "#fff",    usage: "Rich dark accents, bold headings, brand identity moments." },
  { name: "Background Blush",hex: "#F8F2F4", rgb: "248 · 242 · 244", bg: "#F8F2F4", text: "#1A1A1A", usage: "Primary background. Warm near-white that gives Sakhi its warmth." },
  { name: "Soft Blush",      hex: "#F8E5EC", rgb: "248 · 229 · 236", bg: "#F8E5EC", text: "#1A1A1A", usage: "Card surfaces, modal backgrounds, secondary highlights." },
  { name: "Text Black",      hex: "#1A1A1A", rgb: "28 · 28 · 30",    bg: "#1A1A1A", text: "#fff",    usage: "All headings, primary body text." },
  { name: "Body Gray",       hex: "#6B6B6B", rgb: "107 · 107 · 122", bg: "#6B6B6B", text: "#fff",    usage: "Subtext, labels, secondary information, captions." },
  { name: "Light Gray",      hex: "#EAD8E0", rgb: "229 · 228 · 234", bg: "#EAD8E0", text: "#1A1A1A", usage: "Inactive UI states, dividers, unselected backgrounds." },
];

const typeScale = [
  { role: "Display / Screen Title", weight: "Semibold or Bold", size: "28-34pt",  usage: "Main heading on each screen. Make it large and direct." },
  { role: "Section Heading",        weight: "Semibold",         size: "20-22pt",  usage: "Section labels, modal titles." },
  { role: "Body",                   weight: "Regular",          size: "15-17pt",  usage: "All body copy and subtitles." },
  { role: "Label",                  weight: "Medium",           size: "13-15pt",  usage: "Button text, navigation labels, captions." },
  { role: "Caption",                weight: "Regular",          size: "11-13pt",  usage: "Fine print, timestamps, helper text." },
];

const voiceTraits = [
  { trait: "Warm",     desc: "Speaks like a person, not a product.", example: "\"That sounds really rough. Your body has been dealing with a lot this week.\"" },
  { trait: "Honest",   desc: "Does not overclaim. Says clearly when something needs a doctor.", example: "\"You have logged cramps for 5 days in a row. That is worth mentioning to your doctor.\"" },
  { trait: "Calm",     desc: "No exclamation marks when things are okay. No alarm when uncertain.", example: "\"Late periods can have many causes. Worth keeping an eye on.\"" },
  { trait: "Direct",   desc: "One clear sentence is always better than three vague ones.", example: "\"Your report is ready. Hand it to your doctor before the appointment.\"" },
  { trait: "Intimate", desc: "Responds from what you actually logged, not a generic script.", example: "\"You usually log lower energy in your luteal phase, that fits what you are feeling now.\"" },
];

const taglines = [
  { line: "She knows your body.",               context: "Primary headline, hero, App Store" },
  { line: "Because she has been paying attention.", context: "Italic sub-headline paired with the above" },
  { line: "The conversation that was never had.", context: "For the relationship / Be Her Sakhi layer" },
  { line: "Some questions are too personal to Google.", context: "For Sakhi AI marketing" },
  { line: "Period is not a taboo. Not here.",    context: "Brand manifesto, pink sections" },
  { line: "A world where no Indian woman manages her health alone.", context: "Vision statement" },
];

const dos = [
  "\"Tell me your cycle length\"",
  "\"Our Secret Code\"",
  "\"How are you feeling today?\"",
  "\"She invited you in. That is not a small thing.\"",
  "\"You have been logging cramps for 4 days. Worth mentioning to your doctor.\"",
  "Write it the way you would say it to a friend. Then make it shorter.",
];

const donts = [
  "\"We are committed to empowering women through holistic health solutions.\"",
  "\"Our AI-powered insights provide clinically validated predictions.\"",
  "\"Congratulations! You have completed your health profile!\"",
  "\"Enter cycle duration\", say \"Tell me your cycle length\"",
  "Lead with the technology. Lead with the feeling instead.",
  "\"Wellness\", \"Empowering\", \"Holistic\", \"AI-powered\" as a lead.",
];

export default function BrandPage() {
  return (
    <div style={{ overflowX: "hidden", fontFamily: "var(--font-lato), Lato, sans-serif" }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{
        background: "var(--background)", borderBottom: "1px solid var(--border)",
        padding: "160px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ ...kit.container, position: "relative" }}>
          <AnimatedSection delay={0}>
            <span style={label}>Brand System</span>
            <h1 style={{ fontSize: "clamp(44px, 6vw, 74px)", color: "var(--foreground)", letterSpacing: "-0.02em", lineHeight: 1.06, margin: "0 0 28px" }}>
              Built on clear design.<br />
              <span style={{ color: "var(--primary)" }}>Guided by honest voice.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <p style={{ fontSize: 18, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.85, maxWidth: 520, margin: "0 0 40px" }}>
              Every color, every word, every decision in Sakhi&rsquo;s design comes from one place, making a woman feel understood, not processed. This page documents how we do that.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" as const }}>
              {["Warm", "Honest", "Calm", "Direct", "Intimate"].map(t => (
                <span key={t} style={{ fontSize: 12, fontWeight: 400, color: "var(--primary)", background: "rgba(246,24,135,0.08)", padding: "5px 14px", borderRadius: 999 }}>
                  {t}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── COLOR PALETTE ─────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 52 }}>
              <span style={label}>Color Palette</span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--foreground)", letterSpacing: "-0.018em", lineHeight: 1.15, margin: "0 0 14px" }}>
                The palette of care.
              </h2>
              <p style={{ fontSize: 16, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, maxWidth: 520, margin: 0 }}>
                Never purple, that&rsquo;s Flo. Never dark backgrounds by default, that&rsquo;s Clue. Sakhi owns warm, pink, and human.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {colors.map((c, i) => (
              <AnimatedSection key={c.hex} delay={i * 50}>
                <div style={{ borderRadius: 24, overflow: "hidden" }}>
                  <div style={{ height: 72, background: c.bg }} />
                  <div style={{ padding: "16px 18px", background: "#F8F2F4" }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "var(--foreground)", marginBottom: 3 }}>{c.name}</div>
                    <div style={{ fontSize: 12, fontWeight: 400, color: "var(--primary)", fontFamily: "monospace", marginBottom: 8 }}>{c.hex}</div>
                    <div style={{ fontSize: 10, fontWeight: 400, color: "#A0A0A0", marginBottom: 8 }}>RGB {c.rgb}</div>
                    <div style={{ fontSize: 11, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.5 }}>{c.usage}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0}>
            <div style={{ marginTop: 32, background: "#F8F2F4", borderRadius: 24, padding: "24px 28px" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--foreground)", marginBottom: 12 }}>Color rules, never break these</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {[
                  "Never use purple. That is Flo's color.",
                  "Never use dark backgrounds as default. That is Clue.",
                  "Red is for errors only, never decorative.",
                  "No gradients as the primary visual device.",
                  "Primary Pink never on large background blocks.",
                  "All text on Blush must be Text Black or Body Gray.",
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--primary)", flexShrink: 0, marginTop: 5 }} />
                    <span style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.5 }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TYPOGRAPHY ────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#fbf9fb" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 52 }}>
              <span style={label}>Typography</span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--foreground)", letterSpacing: "-0.018em", lineHeight: 1.15, margin: "0 0 14px" }}>
                General Sans.
              </h2>
              <p style={{ fontSize: 16, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, maxWidth: 540, margin: 0 }}>
                Clean, geometric, warm. Not clinical. Not cute. It pairs confidence with enough roundness to feel approachable. Free for commercial use via{" "}
                <a href="https://www.fontshare.com/fonts/general-sans" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "none" }}>fontshare.com</a>.
              </p>
            </div>
          </AnimatedSection>

          {/* Type specimen */}
          <AnimatedSection delay={80}>
            <div style={{ background: "#fff", borderRadius: 24, padding: "48px", marginBottom: 24 }}>
              <div style={{ fontSize: 14, color: "#6e6e73", fontWeight: 600, letterSpacing: "-0.008em", marginBottom: 32 }}>Type specimen</div>
              <div style={{ borderBottom: "1px solid rgba(246,24,135,0.1)", paddingBottom: 24, marginBottom: 24 }}>
                <p style={{ fontSize: 42, fontWeight: 700, color: "var(--foreground)", lineHeight: 1.1, margin: 0 }}>Tell me your cycle length.</p>
                <p style={{ fontSize: 13, color: "#A0A0A0", marginTop: 8 }}>Display / 42pt Semibold</p>
              </div>
              <div style={{ borderBottom: "1px solid rgba(246,24,135,0.1)", paddingBottom: 24, marginBottom: 24 }}>
                <p style={{ fontSize: 22, fontWeight: 600, color: "var(--foreground)", lineHeight: 1.2, margin: 0 }}>You have been logging cramps for 5 days.</p>
                <p style={{ fontSize: 13, color: "#A0A0A0", marginTop: 8 }}>Section Heading / 22pt Semibold</p>
              </div>
              <div style={{ borderBottom: "1px solid rgba(246,24,135,0.1)", paddingBottom: 24, marginBottom: 24 }}>
                <p style={{ fontSize: 16, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.75, margin: 0 }}>That sounds really rough. Your body has been dealing with a lot this week. Looking at what you have logged, you are on day 26, which is often the hardest part of the cycle for mood.</p>
                <p style={{ fontSize: 13, color: "#A0A0A0", marginTop: 8 }}>Body / 16pt Regular</p>
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 500, color: "var(--primary)", margin: 0, letterSpacing: "0.02em" }}>OVULATION PHASE · DAY 14</p>
                <p style={{ fontSize: 13, color: "#A0A0A0", marginTop: 8 }}>Label / 13pt Medium · loose tracking</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Type scale table */}
          <AnimatedSection delay={100}>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
              {typeScale.map((t, i) => (
                <div key={i} style={{
                  background: "#fff",
                  borderRadius: i === 0 ? "14px 14px 0 0" : i === typeScale.length - 1 ? "0 0 14px 14px" : 0,
                  display: "grid", gridTemplateColumns: "220px 120px 80px 1fr", gap: 0,
                  padding: "18px 0", alignItems: "center",
                }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "var(--foreground)" }}>{t.role}</div>
                  <div style={{ fontSize: 12, color: "#A0A0A0" }}>{t.weight}</div>
                  <div style={{ fontSize: 12, color: "var(--primary)", fontFamily: "monospace" }}>{t.size}</div>
                  <div style={{ fontSize: 12, color: "#6B6B6B" }}>{t.usage}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0}>
            <div style={{ marginTop: 24, background: "#fff", borderRadius: 24, padding: "24px 28px" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--foreground)", marginBottom: 12 }}>Typography rules</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  "One dominant heading per screen. Make it large and direct.",
                  "Never more than two weights on a single screen.",
                  "No italic except for Hindi/foreign terms or pull quotes.",
                  "Line height: 1.4x for body, 1.1x for headings.",
                  "Never use thin weights for headings, they undercut the brand.",
                  "Letter spacing: none for headings, 0.02em for small caps only.",
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--primary)", flexShrink: 0, marginTop: 5 }} />
                    <span style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.5 }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── VOICE & TONE ──────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 52 }}>
              <span style={label}>Voice & Tone</span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--foreground)", letterSpacing: "-0.018em", lineHeight: 1.15, margin: "0 0 14px" }}>
                One voice. Five traits.
              </h2>
              <p style={{ fontSize: 16, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, maxWidth: 520, margin: 0 }}>
                Sakhi is the friend who is always honest with you. Warm but not soft. Direct but not cold. She never judges. She remembers everything you told her and brings it up at the right moment.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 48 }}>
            {voiceTraits.map((t, i) => (
              <AnimatedSection key={t.trait} delay={i * 60}>
                <div style={{ background: "#F8F2F4", borderRadius: 24, padding: "28px 0", height: "100%", boxSizing: "border-box" as const }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--primary)", marginBottom: 10 }}>{t.trait}</div>
                  <p style={{ fontSize: 13, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.7, margin: "0 0 16px" }}>{t.desc}</p>
                  <p style={{ fontSize: 12, fontWeight: 400, color: "#A0A0A0", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{t.example}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Do / Don't */}
          <AnimatedSection delay={0}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "#F8F2F4", borderRadius: 24, padding: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--primary)" }} />
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.008em" }}>Sakhi sounds like this</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                  {dos.map((d, i) => (
                    <div key={i} style={{ fontSize: 13, fontWeight: 400, color: "var(--foreground)", lineHeight: 1.6, paddingLeft: 14, borderLeft: "2px solid rgba(246,24,135,0.25)" }}>
                      {d}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "#F8E5EC", borderRadius: 24, padding: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#A0A0A0" }} />
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#6e6e73", letterSpacing: "-0.008em" }}>Sakhi never sounds like this</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                  {donts.map((d, i) => (
                    <div key={i} style={{ fontSize: 13, fontWeight: 400, color: "#A0A0A0", lineHeight: 1.6, paddingLeft: 14, borderLeft: "2px solid #EAD8E0", textDecoration: i < 4 ? "line-through" : "none" }}>
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0}>
            <div style={{ marginTop: 24, background: "#1A1A1A", borderRadius: 24, padding: "28px 32px" }}>
              <p style={{ fontSize: 18, fontWeight: 500, color: "var(--primary)", fontStyle: "italic", margin: "0 0 8px" }}>
                The single test for every piece of copy:
              </p>
              <p style={{ fontSize: 22, fontWeight: 400, color: "var(--foreground)", margin: 0, lineHeight: 1.4 }}>
                Would a real friend say this? If no, rewrite it.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TAGLINES ──────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "#fbf9fb" }}>
        <div style={kit.container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 48 }}>
              <span style={label}>Key Lines</span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--foreground)", letterSpacing: "-0.018em", lineHeight: 1.15, margin: "0 0 14px" }}>
                The words that define Sakhi.
              </h2>
              <p style={{ fontSize: 16, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, margin: 0 }}>
                These lines are not taglines written by a copywriter. They came from understanding the problem deeply and saying it honestly.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
            {taglines.map((t, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div style={{
                  background: "#fff",
                  borderRadius: i === 0 ? "8px 8px 0 0" : i === taglines.length - 1 ? "0 0 8px 8px" : 0,
                  padding: "24px 28px",
                  display: "grid",
                  gridTemplateColumns: "1fr 260px",
                  gap: 24,
                  alignItems: "center",
                }}>
                  <div style={{ fontSize: 18, fontWeight: 400, color: "var(--foreground)", lineHeight: 1.4, fontStyle: "italic" }}>
                    &ldquo;{t.line}&rdquo;
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 400, color: "#A0A0A0", lineHeight: 1.5 }}>
                    {t.context}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOGO RULES ────────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, backgroundColor: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div style={kit.container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 48 }}>
              <span style={label}>Logo</span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--foreground)", letterSpacing: "-0.018em", lineHeight: 1.15, margin: "0 0 14px" }}>
                sakhi. in Primary Pink.
              </h2>
              <p style={{ fontSize: 16, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, maxWidth: 480, margin: 0 }}>
                The logotype is the brand. Clear space, no effects, approved colors only.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
            {[
              { bg: "#F8F2F4", label: "On Blush, preferred",     textColor: "var(--primary)" },
              { bg: "#FFFFFF", label: "On White, acceptable",     textColor: "var(--primary)" },
              { bg: "var(--primary)", label: "On Pink, reversed white",  textColor: "#FFFFFF" },
            ].map((v, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div style={{ background: v.bg, borderRadius: 24, padding: "40px 28px", textAlign: "center" as const, border: v.bg === "#FFFFFF" ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: v.textColor, letterSpacing: 0, marginBottom: 16 }}>sakhi.</div>
                  <div style={{ fontSize: 11, fontWeight: 400, color: v.textColor === "#FFFFFF" ? "rgba(255,255,255,0.6)" : "#A0A0A0", letterSpacing: "0.06em" }}>{v.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0}>
            <div style={{ background: "#F8F2F4", borderRadius: 24, padding: "24px 28px" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--foreground)", marginBottom: 12 }}>Logo usage rules</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  "Clear space: minimum equal to the height of the 'S' on all four sides.",
                  "Approved colors: Primary Pink on Blush, White on dark, Black on white.",
                  "Never stretch, rotate, recolor, or add effects.",
                  "Never place on a busy background or photo without a clear container.",
                  "SVG is the master format. Export PNG or PDF from SVG.",
                  "Never add drop shadows, glows, or outlines to the logo.",
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--primary)", flexShrink: 0, marginTop: 5 }} />
                    <span style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.5 }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PRESS & PARTNERSHIPS ──────────────────────────────────────────── */}
      <section style={{ background: "var(--background-blush)", borderTop: "1px solid var(--border)", padding: "80px 0", textAlign: "center" as const }}>
        <div style={kit.container}>
          <AnimatedSection delay={0}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--foreground)", letterSpacing: "-0.018em", lineHeight: 1.1, margin: "0 0 20px" }}>
              For press and partnerships.
            </h2>
            <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.8, margin: "0 0 40px" }}>
              Logos, screenshots, founder bios, and the full brand story, ready for media use. Write to us and we&rsquo;ll send everything over.
            </p>
            <a
              href="mailto:contact@sakhiapp.in"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)", padding: "0 22px", height: 44, borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 600, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
            >
              contact@sakhiapp.in →
            </a>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
