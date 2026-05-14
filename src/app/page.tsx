import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const container: React.CSSProperties = { maxWidth: 1160, margin: "0 auto" };
const sectionPad: React.CSSProperties = { padding: "96px 24px" };

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

export default function HomePage() {
  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        backgroundColor: "#F8F2F4",
        display: "flex",
        alignItems: "center",
        padding: "120px 24px 80px",
      }}>
        <div style={{ ...container, width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

            {/* Left */}
            <div>
              <AnimatedSection delay={0}>
                <span style={pill}>Now on App Store · Free</span>
                <h1 style={{
                  fontSize: "clamp(44px, 5.5vw, 76px)",
                  fontWeight: 300,
                  color: "#1A1A1A",
                  letterSpacing: "-1.5px",
                  lineHeight: 1.08,
                  margin: "0 0 28px",
                }}>
                  Your Health,<br />
                  <span style={{ color: "#F61887" }}>Finally</span> Understood.
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={120}>
                <p style={{
                  fontSize: 18,
                  fontWeight: 300,
                  color: "#5A5A5A",
                  lineHeight: 1.8,
                  margin: "0 0 36px",
                  maxWidth: 460,
                }}>
                  In a world where periods are still a taboo, Sakhi was created to break the silence — with empathy, dignity, and support. A small step each day helps Sakhi understand your body like no one else can.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={240}>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" as const, marginBottom: 52 }}>
                  <a href="https://apps.apple.com/app/id6742219623" target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: "#F61887", color: "#FFFFFF", padding: "15px 28px", borderRadius: 999, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    Download on App Store
                  </a>
                  <Link href="/story" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#5A5A5A", textDecoration: "none", fontSize: 15, fontWeight: 300, padding: "15px 0" }}>
                    Our Story →
                  </Link>
                </div>

                <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: 32 }}>
                  <div style={{ display: "flex", gap: 0, flexWrap: "wrap" as const }}>
                    {[
                      { num: "252M", label: "Women in India" },
                      { num: "1 in 5", label: "Has PCOD" },
                      { num: "50M+", label: "Unheard voices" },
                      { num: "4.5★", label: "App Rating" },
                    ].map((s, i, arr) => (
                      <div key={i} style={{ paddingRight: 28, paddingLeft: i > 0 ? 28 : 0, borderRight: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none" }}>
                        <div style={{ fontSize: 24, fontWeight: 400, color: "#F61887", letterSpacing: "-0.5px", lineHeight: 1.2 }}>{s.num}</div>
                        <div style={{ fontSize: 12, fontWeight: 300, color: "#9A9A9A", marginTop: 3 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Image */}
            <AnimatedSection delay={200}>
              <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", aspectRatio: "4/5" }}>
                <Image
                  src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=800&q=80&auto=format&fit=crop"
                  alt="Indian woman using Sakhi health app"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Floating stat badge */}
                <div style={{ position: "absolute", bottom: 24, left: 24, background: "rgba(255,255,255,0.95)", borderRadius: 14, padding: "14px 20px", backdropFilter: "blur(8px)" }}>
                  <div style={{ fontSize: 11, fontWeight: 300, color: "#9A9A9A", marginBottom: 4, letterSpacing: "0.04em" }}>SAKHI AI</div>
                  <div style={{ fontSize: 14, fontWeight: 400, color: "#1A1A1A" }}>&ldquo;Your cycle is 29 days. You&rsquo;re in your follicular phase.&rdquo;</div>
                </div>
                <div style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.95)", borderRadius: 12, padding: "10px 16px", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F61887", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, fontWeight: 400, color: "#1A1A1A" }}>Day 8 · Follicular</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 56 }}>
              <span style={pill}>The Reality</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }}>
                <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: 0 }}>
                  She&rsquo;s been managing her health alone.
                </h2>
                <p style={{ fontSize: 17, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.8, margin: 0 }}>
                  Across India, millions of women navigate their bodies in silence — without support, without diagnosis, and without the tools to understand what they&rsquo;re experiencing. The numbers are sobering. The silence is deafening.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid rgba(0,0,0,0.07)", borderLeft: "1px solid rgba(0,0,0,0.07)" }}>
              {[
                { num: "252M",  desc: "menstruating women in India",                  context: "The size of the opportunity — and the responsibility." },
                { num: "1 in 5", desc: "has PCOD — 70% undiagnosed",                 context: "The most common hormonal disorder, largely invisible." },
                { num: "50M",   desc: "never spoke to anyone about menstrual health", context: "50 million women carrying this alone." },
                { num: "83.2%", desc: "manage period pain with rest alone",           context: "Without guidance, without support, without care." },
              ].map((s, i) => (
                <div key={i} style={{ padding: "36px 28px", borderRight: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                  <div style={{ fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 300, color: "#F61887", letterSpacing: "-1px", lineHeight: 1, marginBottom: 10 }}>{s.num}</div>
                  <div style={{ fontSize: 14, fontWeight: 400, color: "#1A1A1A", marginBottom: 8, lineHeight: 1.4 }}>{s.desc}</div>
                  <div style={{ fontSize: 13, fontWeight: 300, color: "#9A9A9A", lineHeight: 1.5 }}>{s.context}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, padding: "40px 0", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#F61887", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: 12 }}>The PCOD Problem</div>
                <p style={{ fontSize: 16, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.8, margin: 0 }}>
                  1 in 5 Indian women has PCOD. But 70% of them don&rsquo;t know it. They blame themselves — for weight gain, irregular cycles, low energy, skin changes. Sakhi&rsquo;s Doctor Report has helped women walk into their gynaecologist&rsquo;s office with a complete picture for the first time.
                </p>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#F61887", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: 12 }}>The Silence Problem</div>
                <p style={{ fontSize: 16, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.8, margin: 0 }}>
                  Only 14.2% of Indian women with period pain ever speak to a doctor. The rest manage alone — hot water bags, rest, silence. Sakhi doesn&rsquo;t replace a doctor. But it helps her understand her body well enough to finally have the conversation.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHAT IS SAKHI ── */}
      <section style={{ ...sectionPad, backgroundColor: "#F8F2F4" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={pill}>The Product</span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: "0 0 20px" }}>
                Everything she needs. Nothing she doesn&rsquo;t.
              </h2>
              <p style={{ fontSize: 17, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.8, maxWidth: 580, margin: "0 auto" }}>
                Sakhi is built for Indian women — combining complete health logging, AI-powered insights from Claude, and a relationship layer that lets one trusted person truly understand and support her.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid rgba(0,0,0,0.07)" }}>
            {[
              {
                num: "01", title: "Health Log",
                short: "Everything in one place.",
                desc: "Period tracking, cycle phases, flow levels, mood, sleep quality, cramps, headache, fever, energy levels, weight, custom symptoms — every aspect of her health, logged with intention. Your body has a pattern. Sakhi helps you see it clearly for the first time.",
                extras: ["Cycle prediction", "Phase tracking", "Doctor Report PDF", "Offline first"],
              },
              {
                num: "02", title: "Sakhi AI",
                short: "Answers about you, not the internet.",
                desc: "Powered by Claude AI, Sakhi AI responds to her questions based on her actual cycle data, symptom history, and patterns — not generic health advice. Ask what you would never search. Get answers that are actually about your body.",
                extras: ["Context-aware responses", "Cycle-phase insights", "Symptom correlation", "Always private"],
              },
              {
                num: "03", title: "Be Her Sakhi",
                short: "One trusted person. Full care.",
                desc: "The only women&rsquo;s health app with a built-in relationship layer. She shares her health with one trusted person — her mother, partner, sister, or friend. They see what matters, get care guidance, and know when to reach out. Built on consent. Built on love.",
                extras: ["Consent-gated", "Curated updates", "Care guidance", "One-to-one only"],
              },
            ].map((col, i, arr) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div style={{ padding: "40px 32px", borderRight: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none", height: "100%", boxSizing: "border-box" as const, backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column" as const, gap: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 300, color: "#F61887", letterSpacing: "0.06em" }}>{col.num}</div>
                  <div style={{ borderTop: "2px solid rgba(246,24,135,0.3)", paddingTop: 20 }}>
                    <h3 style={{ fontSize: 22, fontWeight: 400, color: "#1A1A1A", margin: "0 0 6px" }}>{col.title}</h3>
                    <p style={{ fontSize: 14, fontWeight: 500, color: "#F61887", margin: "0 0 16px" }}>{col.short}</p>
                    <p style={{ fontSize: 15, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.8, margin: "0 0 24px" }}>{col.desc}</p>
                    <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
                      {col.extras.map(e => (
                        <div key={e} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#F61887", flexShrink: 0 }} />
                          <span style={{ fontSize: 13, fontWeight: 300, color: "#5A5A5A" }}>{e}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── BE HER SAKHI DEEP DIVE ── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

            {/* Image side */}
            <AnimatedSection delay={0}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop"
                    alt="Woman logging health in Sakhi"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="25vw"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 16, paddingTop: 32 }}>
                  <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
                    <Image
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format&fit=crop"
                      alt="Two women talking and caring for each other"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="25vw"
                    />
                  </div>
                  <div style={{ background: "#F8F2F4", borderRadius: 16, padding: "20px 20px", border: "1px solid rgba(246,24,135,0.1)" }}>
                    <div style={{ fontSize: 11, fontWeight: 300, color: "#9A9A9A", marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>Trusted Person</div>
                    <div style={{ fontSize: 14, fontWeight: 400, color: "#1A1A1A", lineHeight: 1.5 }}>&ldquo;She needs you today.&rdquo;</div>
                    <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F61887" }} />
                      <span style={{ fontSize: 12, fontWeight: 300, color: "#9A9A9A" }}>Day 2 · High pain</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Text side */}
            <AnimatedSection delay={150}>
              <span style={pill}>Be Her Sakhi</span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: "0 0 20px" }}>
                You don&rsquo;t have to face it alone.
              </h2>
              <p style={{ fontSize: 17, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.8, margin: "0 0 28px" }}>
                Add someone who&rsquo;ll always be there. One tap and they know you need them. The relationship layer in Sakhi is built on consent — she controls exactly what is shared, with whom, and when. It&rsquo;s not surveillance. It&rsquo;s care.
              </p>
              <p style={{ fontSize: 17, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.8, margin: "0 0 32px" }}>
                People pay for Sakhi Premium not for themselves — but for the woman they love. A mother who wants to understand her daughter. A partner who wants to be there. A friend who always shows up. This is the feature that makes Sakhi irreplaceable.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 14, marginBottom: 36 }}>
                {[
                  "She decides what they see — full consent control",
                  "Trusted person gets care guidance, not just data",
                  "Real-time updates on days she needs support most",
                  "Works for mothers, partners, siblings, best friends",
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, paddingLeft: 14, borderLeft: "2px solid rgba(246,24,135,0.25)" }}>
                    <p style={{ fontSize: 15, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.6, margin: 0 }}>{point}</p>
                  </div>
                ))}
              </div>
              <a href="https://apps.apple.com/app/id6742219623" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-block", backgroundColor: "#F61887", color: "#FFFFFF", padding: "14px 28px", borderRadius: 999, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>
                Download Sakhi →
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── USER STORIES ── */}
      <section style={{ ...sectionPad, backgroundColor: "#F8F2F4" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 56 }}>
              <span style={pill}>Real Women</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }}>
                <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: 0 }}>
                  Their Stories
                </h2>
                <p style={{ fontSize: 16, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.8, margin: 0 }}>
                  Sakhi was built for these moments. Real experiences from real women across India — the ones who needed this most.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid rgba(0,0,0,0.07)" }}>
            {[
              {
                initials: "PS", name: "Priya S.", role: "Engineering Student", city: "Lucknow", age: 21,
                story: "I always had irregular cycles but never thought much of it. I just assumed it was stress. Sakhi's Doctor Report showed my pattern clearly over 6 months. When I showed it to my gynaecologist, she said PCOD immediately. Sakhi quite literally changed my health.",
                detail: "Diagnosed with PCOD after 3 years of irregular cycles.",
              },
              {
                initials: "KR", name: "Kavya R.", role: "Product Manager", city: "Bangalore", age: 28,
                story: "I used to blame my mood swings entirely on work stress. Sakhi showed me the clear correlation with my cycle phases — I was irritable 3 days before every period, without exception. I shared my log with my partner and he finally understood. That one thing changed our relationship.",
                detail: "Found pattern: mood tied to luteal phase, not just work.",
              },
              {
                initials: "RM", name: "Riya M.", role: "First-Year Student", city: "Pune", age: 20,
                story: "I moved away from home at 18 and felt completely alone with my health. My mother wasn't there to notice things anymore. I added her on Sakhi. She now gets a notification when I'm in pain. She called me on Day 2 last month before I even said anything. That meant everything.",
                detail: "Shared Sakhi with her mother 500km away. She calls now.",
              },
            ].map((story, i, arr) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div style={{ padding: "36px 28px", borderRight: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column" as const, gap: 20, height: "100%", boxSizing: "border-box" as const }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(246,24,135,0.08)", border: "1px solid rgba(246,24,135,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 400, color: "#F61887", flexShrink: 0 }}>{story.initials}</div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 500, color: "#1A1A1A" }}>{story.name}, {story.age}</div>
                      <div style={{ fontSize: 13, fontWeight: 300, color: "#9A9A9A" }}>{story.role} · {story.city}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 15, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.8, fontStyle: "italic", margin: 0, flexGrow: 1 }}>
                    &ldquo;{story.story}&rdquo;
                  </p>
                  <div style={{ paddingTop: 16, borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F61887", flexShrink: 0 }} />
                      <span style={{ fontSize: 13, fontWeight: 300, color: "#9A9A9A" }}>{story.detail}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={pill}>How It Works</span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: "0 0 16px" }}>
                Three steps. One companion.
              </h2>
              <p style={{ fontSize: 17, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.8, maxWidth: 520, margin: "0 auto" }}>
                Sakhi takes 30 seconds a day. Over time, those seconds add up to something that feels like being truly understood.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid rgba(0,0,0,0.07)" }}>
            {[
              {
                step: "1", title: "Log your day",
                desc: "Period, mood, pain, sleep, energy. Takes 30 seconds. Sakhi makes it frictionless — a few taps and you're done. Do it long enough and a pattern emerges that will surprise you.",
                note: "Offline-first. Works without internet.",
              },
              {
                step: "2", title: "Sakhi learns",
                desc: "Every log deepens Sakhi's understanding of your body. Cycle length, luteal phase patterns, symptom correlations — it all builds into a picture that is uniquely yours, not pulled from a generic database.",
                note: "The longer you use it, the smarter it gets.",
              },
              {
                step: "3", title: "Get real answers",
                desc: "Ask Sakhi AI anything — about your symptoms, your mood, your cycle. Get answers that reference your actual data. Or export a Doctor Report that puts your complete health history in one clean PDF.",
                note: "Powered by Claude AI. Always personal.",
              },
            ].map((item, i, arr) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div style={{ padding: "40px 32px", borderRight: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none", display: "flex", flexDirection: "column" as const, gap: 16 }}>
                  <div style={{ fontSize: 40, fontWeight: 200, color: "#F61887", lineHeight: 1, letterSpacing: "-1px" }}>{item.step}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 400, color: "#1A1A1A", margin: 0 }}>{item.title}</h3>
                  <p style={{ fontSize: 15, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                  <p style={{ fontSize: 13, fontWeight: 300, color: "#9A9A9A", fontStyle: "italic", margin: 0 }}>{item.note}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVACY ── */}
      <section style={{ ...sectionPad, backgroundColor: "#F8F2F4" }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <AnimatedSection delay={0}>
              <span style={pill}>Privacy First</span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.2, margin: "0 0 20px" }}>
                Your privacy comes first. Always.
              </h2>
              <p style={{ fontSize: 17, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.8, margin: "0 0 32px" }}>
                Sakhi was designed with privacy as a core value — not a feature. Health data is intimate. We treat it that way. Your data is never sold. Sharing is always your choice.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                {["Never sold or shared without explicit consent", "Offline-first — core features work without internet", "DPDP Act compliant — India's data protection law", "End-to-end encrypted cloud backup (optional)"].map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(246,24,135,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#F61887" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 300, color: "#5A5A5A" }}>{p}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Privacy choice cards — from app screenshots */}
            <AnimatedSection delay={150}>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
                {/* Selected */}
                <div style={{ background: "#FFFFFF", border: "1.5px solid #F61887", borderRadius: 16, padding: "24px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(246,24,135,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6L12 2z" fill="#F61887"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 500, color: "#F61887", marginBottom: 6 }}>Secure my data</div>
                    <div style={{ fontSize: 14, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.6 }}>Create an account to safely back up your journey and access it anytime, across your devices.</div>
                  </div>
                </div>
                {/* Unselected */}
                <div style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 16, padding: "24px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(0,0,0,0.04)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="3" stroke="#9A9A9A" strokeWidth="1.5"/><circle cx="12" cy="16" r="1" fill="#9A9A9A"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 500, color: "#5A5A5A", marginBottom: 6 }}>Keep data on this device only</div>
                    <div style={{ fontSize: 14, fontWeight: 300, color: "#9A9A9A", lineHeight: 1.6 }}>Your data stays on this device and won&rsquo;t be available if you change or lose your phone.</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── RECOGNITION ── */}
      <section style={{ ...sectionPad, backgroundColor: "#FFFFFF" }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={pill}>Recognition</span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", margin: 0 }}>
                Sakhi in the world.
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", border: "1px solid rgba(0,0,0,0.07)" }}>
              {[
                { org: "Times of India", when: "Q4 2024", desc: "National coverage for a student-built women's health app making waves in India's health tech space." },
                { org: "Apple Success Story", when: "September 2025", desc: "Apple selected Sakhi for a global Success Story feature. Photoshoot on the Galgotias campus. Publication pending." },
                { org: "UP International Trade Show", when: "Q4 2024", desc: "Sakhi represented the next generation of Indian health technology at India's most prominent innovation showcase." },
                { org: "Apple SVP — Greg Joswiak", when: "Q4 2024", desc: "Sakhi was presented directly to Apple's Senior Vice President. A student app from UP, on the world's biggest tech stage." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "32px 32px", borderRight: i % 2 === 0 ? "1px solid rgba(0,0,0,0.07)" : "none", borderBottom: i < 2 ? "1px solid rgba(0,0,0,0.07)" : "none" }}>
                  <div style={{ fontSize: 16, fontWeight: 500, color: "#1A1A1A", marginBottom: 6 }}>{item.org}</div>
                  <div style={{ fontSize: 12, fontWeight: 300, color: "#F61887", marginBottom: 12, letterSpacing: "0.04em" }}>{item.when}</div>
                  <p style={{ fontSize: 15, fontWeight: 300, color: "#5A5A5A", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── DOWNLOAD CTA ── */}
      <section style={{ ...sectionPad, backgroundColor: "#F61887", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection delay={0}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#FFFFFF", letterSpacing: "-0.5px", lineHeight: 1.15, margin: "0 0 20px" }}>
              Ready to understand your body?
            </h2>
            <p style={{ fontSize: 18, fontWeight: 300, color: "rgba(255,255,255,0.85)", lineHeight: 1.8, margin: "0 0 40px" }}>
              Sakhi is free. Always will be. Download on the App Store and take your first step today. No ads. No data selling. Just you and your health.
            </p>
            <a href="https://apps.apple.com/app/id6742219623" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: "#FFFFFF", color: "#1A1A1A", padding: "16px 36px", borderRadius: 999, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
            <p style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.6)", marginTop: 20 }}>
              Free · No ads · Your data stays yours · Available on iOS
            </p>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
