import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LifeStages from "@/components/ui/LifeStages";

const container: React.CSSProperties = { maxWidth: 1160, margin: "0 auto" };
const sectionPad: React.CSSProperties = { padding: "96px 24px" };

export default function HomePage() {
  return (
    <div style={{ overflowX: "hidden", fontFamily: "var(--font-lato), Lato, sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #F8F2F4 0%, #F8E5EC 50%, #F8F2F4 100%)",
        display: "flex",
        alignItems: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Stage color orbs */}
        <div style={{ position: "absolute", top: -80, right: -60, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,24,135,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -100, right: 200, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,24,135,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 160, right: 80, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,24,135,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 40, left: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,24,135,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ ...container, width: "100%", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>

            {/* Left */}
            <div>
              <AnimatedSection delay={0}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(246,24,135,0.08)", border: "1px solid rgba(246,24,135,0.15)",
                  borderRadius: 999, padding: "6px 14px", marginBottom: 32,
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F61887" }} />
                  <span style={{ fontSize: 12, fontWeight: 400, color: "#F61887", letterSpacing: "0.06em" }}>Available on the App Store · Free</span>
                </div>

                <h1 style={{ fontSize: "clamp(48px, 6vw, 82px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-2px", lineHeight: 1.04, margin: "0 0 10px" }}>
                  She knows
                </h1>
                <h1 style={{ fontSize: "clamp(48px, 6vw, 82px)", fontWeight: 300, color: "#F61887", letterSpacing: "-2px", lineHeight: 1.04, margin: "0 0 14px" }}>
                  your body.
                </h1>
                <h2 style={{ fontSize: "clamp(18px, 2.2vw, 26px)", fontWeight: 300, color: "#A0A0A0", letterSpacing: "-0.3px", lineHeight: 1.2, margin: "0 0 32px", fontStyle: "italic" }}>
                  Because she has been paying attention.
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={120}>
                <p style={{ fontSize: 17, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.85, margin: "0 0 40px", maxWidth: 440 }}>
                  Sakhi is India&rsquo;s first women&rsquo;s health companion built for Indian women — not adapted for them. Log your cycle, talk to Sakhi AI, and let one trusted person be there on the days you need it most.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={220}>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" as const, marginBottom: 48 }}>
                  <a href="https://apps.apple.com/app/id6742219623" target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: "#F61887", color: "#FFFFFF", padding: "15px 28px", borderRadius: 999, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    Download Free
                  </a>
                  <Link href="/story" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#A0A0A0", textDecoration: "none", fontSize: 15, fontWeight: 400, padding: "15px 0" }}>
                    Our story →
                  </Link>
                </div>

                <div style={{ borderTop: "1px solid rgba(246,24,135,0.12)", paddingTop: 28 }}>
                  <div style={{ display: "flex", gap: 0, flexWrap: "wrap" as const }}>
                    {[
                      { num: "4.5★", label: "App Store rating" },
                      { num: "252M", label: "Women in India" },
                      { num: "Free", label: "Always" },
                    ].map((s, i, arr) => (
                      <div key={i} style={{ paddingRight: 28, paddingLeft: i > 0 ? 28 : 0, borderRight: i < arr.length - 1 ? "1px solid rgba(246,24,135,0.12)" : "none" }}>
                        <div style={{ fontSize: 22, fontWeight: 400, color: "#F61887", letterSpacing: "-0.5px", lineHeight: 1.2 }}>{s.num}</div>
                        <div style={{ fontSize: 12, fontWeight: 400, color: "#A0A0A0", marginTop: 3 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Sakhi AI conversation */}
            <AnimatedSection delay={180}>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 0 }}>
                <div style={{ background: "#FFFFFF", border: "1px solid rgba(246,24,135,0.1)", borderRadius: 28, padding: "24px 0 0", overflow: "hidden" }}>

                  {/* Top bar */}
                  <div style={{ padding: "0 24px 20px", borderBottom: "1px solid rgba(246,24,135,0.08)", display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(246,24,135,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 14, fontWeight: 500, color: "#F61887" }}>S</span>
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: "#1A1A1A" }}>Sakhi AI</div>
                      <div style={{ fontSize: 12, fontWeight: 400, color: "#A0A0A0" }}>Day 14 · Ovulation phase</div>
                    </div>
                    <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F61887" }} />
                      <span style={{ fontSize: 11, color: "#A0A0A0", fontWeight: 400 }}>Active</span>
                    </div>
                  </div>

                  {/* Chat */}
                  <div style={{ padding: "20px", display: "flex", flexDirection: "column" as const, gap: 16, background: "#F8F2F4" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(246,24,135,0.1)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: 10, color: "#F61887", fontWeight: 500 }}>S</span>
                      </div>
                      <div style={{ maxWidth: "78%", background: "#FFFFFF", border: "1px solid rgba(246,24,135,0.1)", borderRadius: "18px 18px 18px 4px", padding: "12px 16px" }}>
                        <p style={{ fontSize: 14, fontWeight: 400, color: "#1A1A1A", lineHeight: 1.6, margin: 0 }}>You&rsquo;re on Day 14. This is usually when your energy is highest. Your pattern shows you sleep better this week too.</p>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div style={{ maxWidth: "70%", background: "#F61887", borderRadius: "18px 18px 4px 18px", padding: "12px 16px" }}>
                        <p style={{ fontSize: 14, fontWeight: 400, color: "#FFFFFF", lineHeight: 1.6, margin: 0 }}>Why do I always get headaches right before my period?</p>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(246,24,135,0.1)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: 10, color: "#F61887", fontWeight: 500 }}>S</span>
                      </div>
                      <div style={{ maxWidth: "82%", background: "#FFFFFF", border: "1px solid rgba(246,24,135,0.1)", borderRadius: "18px 18px 18px 4px", padding: "12px 16px" }}>
                        <p style={{ fontSize: 14, fontWeight: 400, color: "#1A1A1A", lineHeight: 1.6, margin: 0 }}>Your logs show this on Days 25–27 for 4 cycles in a row. Progesterone drops before your period and that affects blood vessels. Worth mentioning to your doctor — it&rsquo;s common and treatable.</p>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div style={{ maxWidth: "65%", background: "rgba(246,24,135,0.08)", border: "1px solid rgba(246,24,135,0.15)", borderRadius: "18px 18px 4px 18px", padding: "12px 16px" }}>
                        <p style={{ fontSize: 14, fontWeight: 400, color: "#F61887", lineHeight: 1.6, margin: 0 }}>Can you make me a doctor report?</p>
                      </div>
                    </div>

                    {/* Typing */}
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(246,24,135,0.1)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: 10, color: "#F61887", fontWeight: 500 }}>S</span>
                      </div>
                      <div style={{ background: "#FFFFFF", border: "1px solid rgba(246,24,135,0.1)", borderRadius: "18px 18px 18px 4px", padding: "14px 18px", display: "flex", gap: 5, alignItems: "center" }}>
                        {[0, 1, 2].map(i => (
                          <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(246,24,135,0.35)" }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div style={{ padding: "12px 16px 18px", borderTop: "1px solid rgba(246,24,135,0.08)", display: "flex", alignItems: "center", gap: 10, background: "#FFFFFF" }}>
                    <div style={{ flex: 1, background: "#F8F2F4", borderRadius: 999, padding: "10px 16px" }}>
                      <span style={{ fontSize: 14, fontWeight: 400, color: "#A0A0A0" }}>Ask Sakhi anything...</span>
                    </div>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#F61887", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 16, display: "flex", justifyContent: "center" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(246,24,135,0.06)", border: "1px solid rgba(246,24,135,0.1)", borderRadius: 999, padding: "8px 16px" }}>
                    <span style={{ fontSize: 12, fontWeight: 400, color: "#A0A0A0" }}>Powered by Claude AI · Knows your body, not the internet</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── MANIFESTO ────────────────────────────────────────────────────────── */}
      <section style={{ background: "#1A1A1A", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        {/* Stage color accents */}
        <div style={{ position: "absolute", top: -40, left: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,24,135,0.25) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -40, right: 100, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,24,135,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 20, right: 200, width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,24,135,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 20, left: 300, width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,24,135,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 30, right: 40, width: 100, height: 100, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,24,135,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ ...container, width: "100%", position: "relative" }}>
          <AnimatedSection delay={0}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
              <div>
                <p style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 20 }}>Why Sakhi exists</p>
                <h2 style={{ fontSize: "clamp(36px, 5vw, 66px)", fontWeight: 300, color: "#FFFFFF", letterSpacing: "-1.5px", lineHeight: 1.06, margin: "0 0 24px" }}>
                  Period is not a taboo.<br />
                  <span style={{ opacity: 0.4 }}>Not here.</span>
                </h2>
                {/* Stage dots row */}
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  {[
                    { color: "#F61887", label: "Teen" },
                    { color: "#F61887", label: "Young adult" },
                    { color: "#F61887", label: "Fertility" },
                    { color: "#F61887", label: "Postpartum" },
                    { color: "#F61887", label: "Midlife" },
                  ].map(s => (
                    <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color }} />
                      <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.7)", lineHeight: 1.85, margin: "0 0 24px" }}>
                  In India, most girls learn about their first period after it happens. Most women manage pain alone. Most cycles go untracked, most symptoms go unnamed. Not because women don&rsquo;t care. Because no one made it easy enough to care.
                </p>
                <p style={{ fontSize: 20, fontWeight: 400, color: "#FFFFFF", lineHeight: 1.5, margin: 0 }}>
                  Sakhi does. <span style={{ color: "#F61887" }}>At every stage.</span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── LIFE STAGES ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF", ...sectionPad }}>
        <LifeStages />
      </section>

      {/* ── THE REAL INDIA ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF", ...sectionPad }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 64 }}>
              <p style={{ fontSize: 13, fontWeight: 400, color: "#F61887", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 16 }}>The reality she lives in</p>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: "0 0 16px", maxWidth: 600 }}>
                She has been managing this alone.
              </h2>
              <p style={{ fontSize: 16, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, maxWidth: 460, margin: 0 }}>
                Not because she is weak. Because no one gave her the right tools.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
              {[
                { num: "1 in 5",  desc: "Indian women has PCOD",                        detail: "And 70% of them don't know it. They blame themselves for weight, mood, and fatigue that has a name and a treatment.", color: "#F61887", bg: "#F8E5EC" },
                { num: "50M",     desc: "never spoke to anyone about their period",      detail: "Fifty million women carrying this alone. Not a statistic. Someone's mother. Someone's sister.",                       color: "#F61887", bg: "#F8F2F4" },
                { num: "83%",     desc: "manage period pain with rest alone",            detail: "No guidance, no support, no care. A hot water bag and silence is not healthcare.",                                     color: "#F61887", bg: "#F8E5EC" },
                { num: "14.2%",   desc: "ever see a doctor for period pain",             detail: "The rest manage alone. Sakhi doesn't replace a doctor. But it helps her have that conversation for the first time.",    color: "#F61887", bg: "#F8F2F4" },
              ].map((s, i) => (
                <div key={i} style={{ background: s.bg, padding: "40px 36px" }}>
                  <div style={{ fontSize: "clamp(36px, 4vw, 54px)", fontWeight: 300, color: s.color, letterSpacing: "-1.5px", lineHeight: 1, marginBottom: 10 }}>{s.num}</div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: "#1A1A1A", marginBottom: 12, lineHeight: 1.4 }}>{s.desc}</div>
                  <div style={{ fontSize: 14, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.7 }}>{s.detail}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHAT SAKHI DOES ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F8F2F4", ...sectionPad }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p style={{ fontSize: 13, fontWeight: 400, color: "#F61887", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 16 }}>What she gets</p>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: "0 0 16px" }}>
                Everything she needs.
              </h2>
              <p style={{ fontSize: 17, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, maxWidth: 460, margin: "0 auto" }}>
                Sakhi puts together three things no other app has combined.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>

            {/* Feature 01 — Health Log */}
            <AnimatedSection delay={0}>
              <div style={{ background: "#FFFFFF", borderRadius: 24, padding: "48px", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, alignItems: "center", borderTop: "3px solid #F61887" }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 400, color: "#F61887", letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 12 }}>01</div>
                  <h3 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.2, margin: "0 0 16px" }}>
                    Know your body.
                  </h3>
                  <p style={{ fontSize: 15, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, margin: "0 0 24px" }}>
                    Period, mood, pain, sleep, energy, cramps, weight. Every day you log is a day Sakhi understands you better. Over time the pattern becomes visible.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
                    {["Cycle prediction that learns your rhythm", "Doctor Report PDF — one tap", "Offline-first, no internet needed", "Follicular, ovulation, and luteal phase tracking"].map(e => (
                      <div key={e} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#F61887", flexShrink: 0 }} />
                        <span style={{ fontSize: 13, fontWeight: 400, color: "#6B6B6B" }}>{e}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: "#F8F2F4", borderRadius: 20, padding: "28px" }}>
                  <div style={{ fontSize: 12, fontWeight: 400, color: "#A0A0A0", letterSpacing: "0.04em", textTransform: "uppercase" as const, marginBottom: 16 }}>Today · Day 8 · Follicular</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 14 }}>
                    {[
                      { label: "Flow", value: "Light", active: true },
                      { label: "Mood", value: "Good",  active: true },
                      { label: "Energy", value: "High", active: true },
                      { label: "Sleep", value: "7h",   active: false },
                    ].map(item => (
                      <div key={item.label} style={{ background: item.active ? "rgba(246,24,135,0.07)" : "#FFFFFF", border: `1px solid ${item.active ? "rgba(246,24,135,0.18)" : "rgba(0,0,0,0.06)"}`, borderRadius: 12, padding: "12px", textAlign: "center" as const }}>
                        <div style={{ fontSize: 11, fontWeight: 400, color: "#A0A0A0", marginBottom: 4 }}>{item.label}</div>
                        <div style={{ fontSize: 14, fontWeight: 500, color: item.active ? "#F61887" : "#1A1A1A" }}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: "#FFFFFF", border: "1px solid rgba(246,24,135,0.1)", borderRadius: 14, padding: "14px 16px" }}>
                    <div style={{ fontSize: 12, fontWeight: 400, color: "#A0A0A0", marginBottom: 6 }}>Sakhi says</div>
                    <div style={{ fontSize: 14, fontWeight: 400, color: "#1A1A1A", lineHeight: 1.6 }}>Your energy is usually highest in days 7–14. Good time to exercise or start something you&rsquo;ve been putting off.</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Feature 02 — Sakhi AI */}
            <AnimatedSection delay={80}>
              <div style={{ background: "#F8F2F4", borderRadius: 24, padding: "48px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "center", border: "1px solid rgba(246,24,135,0.1)", borderTop: "3px solid #F61887" }}>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(246,24,135,0.1)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 10, color: "#F61887", fontWeight: 500 }}>S</span>
                    </div>
                    <div style={{ background: "#FFFFFF", border: "1px solid rgba(246,24,135,0.12)", borderRadius: "18px 18px 18px 4px", padding: "12px 16px", maxWidth: "80%" }}>
                      <p style={{ fontSize: 14, fontWeight: 400, color: "#1A1A1A", lineHeight: 1.6, margin: 0 }}>You&rsquo;ve had cramps for 6 days this cycle. Last cycle it was 3. That&rsquo;s worth mentioning to a doctor.</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{ background: "#F61887", borderRadius: "18px 18px 4px 18px", padding: "12px 16px", maxWidth: "65%" }}>
                      <p style={{ fontSize: 14, fontWeight: 400, color: "#FFFFFF", lineHeight: 1.6, margin: 0 }}>Is this normal for PCOS?</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(246,24,135,0.1)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 10, color: "#F61887", fontWeight: 500 }}>S</span>
                    </div>
                    <div style={{ background: "#FFFFFF", border: "1px solid rgba(246,24,135,0.12)", borderRadius: "18px 18px 18px 4px", padding: "12px 16px", maxWidth: "85%" }}>
                      <p style={{ fontSize: 14, fontWeight: 400, color: "#1A1A1A", lineHeight: 1.6, margin: 0 }}>In PCOS, cycles can be irregular and cramps more intense — but prolonged cramping beyond your period days is something to flag. Your symptom history is ready to share with your doctor.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 400, color: "#F61887", letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 12 }}>02</div>
                  <h3 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.2, margin: "0 0 16px" }}>
                    Ask what you&rsquo;d never Google.
                  </h3>
                  <p style={{ fontSize: 15, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, margin: "0 0 16px" }}>
                    Powered by Claude AI. Sakhi answers questions about your body using your actual data — your cycle, your patterns, your symptoms. Every answer is about you.
                  </p>
                  <div style={{ fontSize: 13, fontWeight: 400, color: "#A0A0A0", fontStyle: "italic" }}>
                    Always private. Never stored for ads. Never sold.
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Feature 03 — Be Her Sakhi */}
            <AnimatedSection delay={160}>
              <div style={{ background: "#FFFFFF", borderRadius: 24, padding: "48px", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, alignItems: "center", borderTop: "3px solid #F61887" }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 400, color: "#F61887", letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 12 }}>03</div>
                  <h3 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.2, margin: "0 0 16px" }}>
                    Never face it alone.
                  </h3>
                  <p style={{ fontSize: 15, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, margin: "0 0 20px" }}>
                    She chooses one person — a mother, a partner, a best friend — and they see what matters. When Day 2 hits, they already know. Built on consent. Built on love.
                  </p>
                  <div style={{ fontSize: 13, fontWeight: 400, color: "#A0A0A0", fontStyle: "italic" }}>
                    She controls everything — what they see, when, and for how long.
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <div style={{ background: "#F8F2F4", borderRadius: 18, padding: "24px", gridColumn: "span 2" }}>
                    <div style={{ fontSize: 11, fontWeight: 400, color: "#A0A0A0", marginBottom: 10, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>Notification · Trusted Person</div>
                    <div style={{ fontSize: 15, fontWeight: 500, color: "#1A1A1A", lineHeight: 1.5, marginBottom: 14 }}>&ldquo;Riya is on Day 2. She might need you today.&rdquo;</div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <div style={{ background: "#F61887", color: "#FFFFFF", borderRadius: 999, padding: "8px 18px", fontSize: 13, fontWeight: 500 }}>Call her</div>
                      <div style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 999, padding: "8px 18px", fontSize: 13, fontWeight: 400, color: "#6B6B6B" }}>Send care</div>
                    </div>
                  </div>
                  <div style={{ background: "#F8F2F4", borderRadius: 18, padding: "20px" }}>
                    <div style={{ fontSize: 28, fontWeight: 300, color: "#F61887", letterSpacing: "-0.5px", marginBottom: 6 }}>1</div>
                    <div style={{ fontSize: 13, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.5 }}>Trusted person only. Not a group. Not a feed.</div>
                  </div>
                  <div style={{ background: "#F8F2F4", borderRadius: 18, padding: "20px" }}>
                    <div style={{ fontSize: 28, fontWeight: 300, color: "#F61887", letterSpacing: "-0.5px", marginBottom: 6 }}>100%</div>
                    <div style={{ fontSize: 13, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.5 }}>Consent-controlled by her, always.</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── BUILT FOR INDIA ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF", ...sectionPad }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

            <AnimatedSection delay={0}>
              <p style={{ fontSize: 13, fontWeight: 400, color: "#F61887", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 16 }}>Built for India</p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: "0 0 24px" }}>
                For the girl in Lucknow. The student in Pune. The woman in Bangalore managing everything alone.
              </h2>
              <p style={{ fontSize: 17, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.85, margin: "0 0 20px" }}>
                Sakhi was not adapted for India. It was made here. Understanding that talking about periods is still difficult, that most women navigate their health without the right support, and that the person you need most is often 500km away.
              </p>
              <p style={{ fontSize: 17, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.85, margin: 0 }}>
                One app, one companion, made for the way Indian women actually live.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
                {[
                  { city: "Lucknow",   story: "Where Sakhi was born. A student project that became something real.", highlight: true },
                  { city: "Mumbai",    story: "Working women who needed PCOD answers without a doctor appointment.", highlight: false },
                  { city: "Delhi",     story: "Students away from home for the first time, managing alone.", highlight: false },
                  { city: "Bangalore", story: "Women who wanted AI health insights without sharing data with big tech.", highlight: false },
                  { city: "Pune",      story: "Mothers and daughters using Sakhi together, 300km apart.", highlight: false },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: item.highlight ? "#F61887" : "#F8F2F4",
                    padding: "20px 24px",
                    borderRadius: i === 0 ? "14px 14px 0 0" : i === 4 ? "0 0 14px 14px" : 0,
                    display: "flex", alignItems: "center", gap: 20,
                  }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: item.highlight ? "#FFFFFF" : "#1A1A1A", minWidth: 90 }}>{item.city}</div>
                    <div style={{ fontSize: 14, fontWeight: 400, color: item.highlight ? "rgba(255,255,255,0.85)" : "#6B6B6B", lineHeight: 1.5 }}>{item.story}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── REAL WOMEN ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F8F2F4", ...sectionPad }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 56 }}>
              <p style={{ fontSize: 13, fontWeight: 400, color: "#F61887", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 16 }}>Real women</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }}>
                <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.15, margin: 0 }}>
                  Their stories.
                </h2>
                <p style={{ fontSize: 16, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, margin: 0 }}>
                  Real experiences from real women across India — the ones who needed this most.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              {
                initials: "PS", name: "Priya S.", role: "Engineering student", city: "Lucknow", age: 21,
                story: "I always had irregular cycles but thought it was stress. Sakhi's Doctor Report showed my pattern clearly over 6 months. When I showed my gynaecologist, she diagnosed PCOD immediately. Sakhi changed my health.",
                detail: "Diagnosed with PCOD after 3 years.",
              },
              {
                initials: "KR", name: "Kavya R.", role: "Product manager", city: "Bangalore", age: 28,
                story: "I used to blame mood swings on work stress. Sakhi showed me it happened every cycle, Days 25–27, without exception. I shared the log with my partner. He finally understood. That one thing changed our relationship.",
                detail: "Found the pattern. Partner now understands.",
              },
              {
                initials: "RM", name: "Riya M.", role: "First-year student", city: "Pune", age: 20,
                story: "I moved away from home at 18. My mother wasn't there anymore. I added her on Sakhi. She gets a notification on Day 2. She called me last month before I even said anything. That meant everything.",
                detail: "Mother, 500km away, now knows when to call.",
              },
            ].map((story, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div style={{ background: "#FFFFFF", borderRadius: 20, padding: "36px 28px", display: "flex", flexDirection: "column" as const, gap: 20, height: "100%", boxSizing: "border-box" as const }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(246,24,135,0.08)", border: "1px solid rgba(246,24,135,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 500, color: "#F61887", flexShrink: 0 }}>{story.initials}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>{story.name}, {story.age}</div>
                      <div style={{ fontSize: 12, fontWeight: 400, color: "#A0A0A0" }}>{story.role} · {story.city}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 15, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.8, fontStyle: "italic", margin: 0, flexGrow: 1 }}>
                    &ldquo;{story.story}&rdquo;
                  </p>
                  <div style={{ paddingTop: 16, borderTop: "1px solid rgba(246,24,135,0.1)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#F61887", flexShrink: 0 }} />
                      <span style={{ fontSize: 13, fontWeight: 400, color: "#A0A0A0" }}>{story.detail}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVACY ───────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF", ...sectionPad }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <AnimatedSection delay={0}>
              <p style={{ fontSize: 13, fontWeight: 400, color: "#F61887", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 16 }}>Your data. Only yours.</p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", lineHeight: 1.2, margin: "0 0 20px" }}>
                This is a safe space.
              </h2>
              <p style={{ fontSize: 17, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.85, margin: "0 0 32px" }}>
                Health data is not a product. It is one of the most intimate things about a person. Sakhi treats it that way. Your data is never sold. Sharing is always your decision.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                {[
                  "Never sold or shared without your choice",
                  "Offline-first — core features work without internet",
                  "DPDP Act compliant — India's data protection law",
                  "End-to-end encrypted cloud backup, optional",
                  "No ads. No tracking. No selling.",
                ].map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(246,24,135,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#F61887" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 400, color: "#6B6B6B" }}>{p}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div style={{ background: "#F8F2F4", borderRadius: 24, padding: "36px", display: "flex", flexDirection: "column" as const, gap: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 400, color: "#A0A0A0", letterSpacing: "0.04em", textTransform: "uppercase" as const, marginBottom: 4 }}>Your privacy choice</div>
                <div style={{ background: "#FFFFFF", border: "1.5px solid #F61887", borderRadius: 16, padding: "20px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(246,24,135,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6L12 2z" fill="#F61887"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#F61887", marginBottom: 6 }}>Back up securely</div>
                    <div style={{ fontSize: 13, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.6 }}>Create an account to back up your health data and access it across devices. Encrypted.</div>
                  </div>
                </div>
                <div style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 16, padding: "20px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(0,0,0,0.04)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="3" stroke="#A0A0A0" strokeWidth="1.5"/><circle cx="12" cy="16" r="1" fill="#A0A0A0"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#6B6B6B", marginBottom: 6 }}>Stay on this device only</div>
                    <div style={{ fontSize: 13, fontWeight: 400, color: "#A0A0A0", lineHeight: 1.6 }}>Your data stays here. Never leaves your phone.</div>
                  </div>
                </div>
                <div style={{ paddingTop: 4, fontSize: 13, fontWeight: 400, color: "#A0A0A0", lineHeight: 1.7, fontStyle: "italic" }}>
                  This choice is yours. You can change it at any time from settings.
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── RECOGNITION ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F8F2F4", ...sectionPad }}>
        <div style={container}>
          <AnimatedSection delay={0}>
            <div style={{ marginBottom: 48 }}>
              <p style={{ fontSize: 13, fontWeight: 400, color: "#F61887", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 16 }}>Recognition</p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, color: "#1A1A1A", letterSpacing: "-0.5px", margin: 0 }}>
                Sakhi in the world.
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
              {[
                { org: "Times of India",            when: "Q4 2024",        desc: "National coverage for a student-built women's health app making waves in India's health tech space." },
                { org: "Apple Success Story",        when: "September 2025", desc: "Apple selected Sakhi for a global Success Story feature. Photoshoot on the Galgotias campus. Publication pending." },
                { org: "UP International Trade Show",when: "Q4 2024",        desc: "Sakhi represented the next generation of Indian health technology at India's most prominent innovation showcase." },
                { org: "Apple SVP Greg Joswiak",     when: "Q4 2024",        desc: "Sakhi was presented directly to Apple's Senior Vice President. A student app from UP, on the world's biggest stage." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#FFFFFF", borderRadius: 16, padding: "32px" }}>
                  <div style={{ fontSize: 16, fontWeight: 600, color: "#1A1A1A", marginBottom: 6 }}>{item.org}</div>
                  <div style={{ fontSize: 12, fontWeight: 400, color: "#F61887", marginBottom: 12, letterSpacing: "0.04em" }}>{item.when}</div>
                  <p style={{ fontSize: 15, fontWeight: 400, color: "#6B6B6B", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── DOWNLOAD CTA ──────────────────────────────────────────────────── */}
      <section style={{ background: "#1A1A1A", padding: "100px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Stage color orbs */}
        <div style={{ position: "absolute", top: -60, left: "10%",  width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,24,135,0.3) 0%, transparent 70%)",  pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -40, right: "12%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,24,135,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 40, right: "8%",   width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,24,135,0.15) 0%, transparent 70%)",  pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 30, left: "15%", width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,24,135,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 60, left: "30%",   width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,24,135,0.12) 0%, transparent 70%)",  pointerEvents: "none" }} />

        <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
          <AnimatedSection delay={0}>
            <p style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 24 }}>Free. Always.</p>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, color: "#FFFFFF", letterSpacing: "-1.5px", lineHeight: 1.08, margin: "0 0 24px" }}>
              Your body deserves<br />
              <span style={{ color: "#F61887" }}>
                to be understood.
              </span>
            </h2>
            <p style={{ fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: "0 0 44px" }}>
              Free. No ads. Your data stays yours. Just you and your health.
            </p>
            <a href="https://apps.apple.com/app/id6742219623" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: "#F61887", color: "#FFFFFF", padding: "18px 40px", borderRadius: 999, textDecoration: "none", fontSize: 16, fontWeight: 500 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download on App Store
            </a>
            <p style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.3)", marginTop: 20 }}>
              Free · No ads · Your data stays yours · iOS
            </p>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
