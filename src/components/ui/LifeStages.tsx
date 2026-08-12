"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "next-view-transitions";

interface Stage {
  id: string;
  age: string;
  label: string;
  tagline: string;
  body: string;
  stat: string;
  statLabel: string;
  conditions: string[];
  sakhiRole: string;
  color: string;
  bg: string;
}

const stages: Stage[] = [
  {
    id: "teen",
    age: "11–17",
    label: "Her First Period",
    tagline: "No one prepares her for it. She figures it out alone.",
    body: "The first period happens before anyone has given her the vocabulary to talk about it. 70.2% of Indian girls have period pain severe enough to disrupt school. Half miss class every month. Only 14.2% ever see a doctor. She learns to manage — alone, silently, with a hot water bag and the assumption that this is just how it is.",
    stat: "50%",
    statLabel: "miss school every month because of period pain",
    conditions: ["Dysmenorrhea", "Early PCOD onset", "Anemia", "Menstrual Irregularity"],
    sakhiRole: "Track cycles from the very first one. Understand what's normal for her — not for everyone. Flag patterns that should go to a doctor. Give her language for what she's feeling.",
    color: "var(--secondary)",
    bg: "#F8F2F4",
  },
  {
    id: "young",
    age: "18–28",
    label: "Living Alone",
    tagline: "Away from home. Managing everything. No one to call at 2am.",
    body: "She moves to a new city for college or work. Her mother isn't there. Her partner doesn't know what to say. She has an iPhone, a 4G connection, and has still never had a real conversation about what's happening in her own body. PCOD, PMDD, thyroid disorders — most go undiagnosed through these years. She adapts around the symptoms. She calls it stress.",
    stat: "1 in 5",
    statLabel: "Indian women has PCOD — and 70% don't know it",
    conditions: ["PCOD / PCOS", "PMDD", "Thyroid Disorders", "Hormonal Mental Health", "Anemia"],
    sakhiRole: "Sakhi AI that answers what she'd never Google out loud. Symptom patterns documented for a doctor she's finally ready to see. Be Her Sakhi — so the person she loves most, 500km away, knows when to call.",
    color: "var(--secondary)",
    bg: "#F8E5EC",
  },
  {
    id: "fertility",
    age: "25–35",
    label: "Trying to Conceive",
    tagline: "When a cycle becomes more than tracking.",
    body: "1 in 6 people globally experience infertility. In India, 8% of women aged 15–49 are affected — and infertility falls under no national health programme. Endometriosis, PCOD, thyroid disorders, and ovarian cysts are the leading treatable causes. Most women don't know they have them until they've been trying for years.",
    stat: "25–50%",
    statLabel: "of women with infertility have endometriosis",
    conditions: ["Fertility Challenges", "Endometriosis", "Ovarian Cysts", "Thyroid Disorders", "PCOD / PCOS"],
    sakhiRole: "Detailed cycle tracking for fertility windows. Three months of documented symptoms for a specialist consultation — the evidence that makes a 10-minute appointment count. Not a fertility tool. A health record that makes the right conversation possible.",
    color: "var(--secondary)",
    bg: "#F8F2F4",
  },
  {
    id: "postpartum",
    age: "After birth",
    label: "Pregnancy & Postpartum",
    tagline: "The hardest months nobody talks about.",
    body: "22% of Indian women experience postpartum depression — above the global average of 12.9% for high-income countries. 91.49% of Indian women have never heard of it. It isn't screened for in most obstetric settings. She presents with fatigue, physical complaints. It's attributed to new motherhood. She adapts. Alone.",
    stat: "22%",
    statLabel: "of Indian women experience postpartum depression",
    conditions: ["Postpartum Depression", "Hormonal Mental Health", "Anemia", "Thyroid Disorders"],
    sakhiRole: "Mood and symptom tracking through the postpartum window. PPD awareness before the moment of crisis. Be Her Sakhi — so someone sees when she's having a hard week, before she has to say it herself.",
    color: "var(--secondary)",
    bg: "#F8E5EC",
  },
  {
    id: "midlife",
    age: "38–55",
    label: "Midlife & Menopause",
    tagline: "The transition nobody starts a conversation about.",
    body: "Indian women reach menopause at 46.2 — five years earlier than women in Western populations. That means bone loss begins in the early 40s. Perimenopausal depression affects 42% of Indian women. 82% of postmenopausal women have some form of bone density loss. It starts quietly, with a few missed periods and mood changes that are called 'age.'",
    stat: "46.2",
    statLabel: "mean age of menopause in India (vs. 51 in the West)",
    conditions: ["Bone Health", "Hormonal Mental Health", "Thyroid Disorders", "Menorrhagia", "Amenorrhea"],
    sakhiRole: "Track cycle changes through perimenopause. Recognise the early window for bone health conversations. Understand the hormonal mental health connection — so her low weeks have a name, not a blame.",
    color: "var(--secondary)",
    bg: "#F8F2F4",
  },
];

export default function LifeStages() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>

      {/* Header */}
      <div style={{ marginBottom: 52 }}>
        <div style={{
          fontSize: 11, fontWeight: 400, color: "var(--secondary)",
          letterSpacing: "0.14em", textTransform: "uppercase",
          marginBottom: 16,
        }}>
          Every stage. Every time.
        </div>
        <h2 style={{
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 300,
          color: "var(--foreground)",
          letterSpacing: "-0.5px",
          lineHeight: 1.12,
          margin: "0 0 16px",
          maxWidth: 600,
        }}>
          Sakhi is with her<br />
          <span style={{ color: "var(--secondary)" }}>through all of it.</span>
        </h2>
        <p style={{ fontSize: 16, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: 500, margin: 0 }}>
          Her body changes across a lifetime. Her need for someone who understands her doesn&rsquo;t.
        </p>
      </div>

      {/* Stage Tabs */}
      <div style={{
        display: "flex",
        gap: 8,
        marginBottom: 32,
        flexWrap: "wrap",
      }}>
        {stages.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              border: active === i ? `1.5px solid ${s.color}` : "1px solid rgba(0,0,0,0.1)",
              background: active === i ? s.color : "#fff",
              color: active === i ? "#fff" : "var(--muted-foreground)",
              fontSize: 13,
              fontWeight: active === i ? 500 : 400,
              cursor: "pointer",
              transition: "all 0.2s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <span style={{ fontSize: 10, opacity: 0.75 }}>{s.age}</span>
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      {/* Stage Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stage.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          style={{
            background: stage.bg,
            border: `1.5px solid ${stage.color}22`,
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: 0,
          }}>
            {/* Left — main content */}
            <div style={{ padding: "48px 48px 48px 48px" }}>
              {/* Age pill */}
              <div style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: 999,
                background: `${stage.color}18`,
                fontSize: 12.5,
                fontWeight: 600,
                color: stage.color,
                letterSpacing: "-0.006em",
                marginBottom: 20,
              }}>
                {stage.age}
              </div>

              <h3 style={{
                fontSize: 32,
                fontWeight: 300,
                color: "var(--foreground)",
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
                margin: "0 0 12px",
              }}>
                {stage.label}
              </h3>

              <p style={{
                fontSize: 16,
                fontWeight: 400,
                color: stage.color,
                fontStyle: "italic",
                lineHeight: 1.5,
                margin: "0 0 24px",
              }}>
                &ldquo;{stage.tagline}&rdquo;
              </p>

              <p style={{
                fontSize: 15,
                fontWeight: 400,
                color: "var(--muted-foreground)",
                lineHeight: 1.85,
                margin: "0 0 32px",
                maxWidth: 520,
              }}>
                {stage.body}
              </p>

              {/* Sakhi role */}
              <div style={{
                background: "#fff",
                border: `1px solid ${stage.color}20`,
                borderRadius: 16,
                padding: "20px 24px",
                maxWidth: 520,
              }}>
                <div style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: stage.color,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}>
                  Sakhi&rsquo;s role at this stage
                </div>
                <p style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "var(--muted-foreground)",
                  lineHeight: 1.75,
                  margin: 0,
                }}>
                  {stage.sakhiRole}
                </p>
              </div>
            </div>

            {/* Right — stat + conditions */}
            <div style={{
              background: `${stage.color}10`,
              borderLeft: `1px solid ${stage.color}18`,
              padding: "48px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 36,
            }}>
              {/* Stat */}
              <div>
                <div style={{
                  fontSize: 60,
                  fontWeight: 300,
                  color: stage.color,
                  letterSpacing: "-2px",
                  lineHeight: 1,
                  marginBottom: 8,
                }}>
                  {stage.stat}
                </div>
                <div style={{
                  fontSize: 13,
                  fontWeight: 400,
                  color: "var(--muted-foreground)",
                  lineHeight: 1.5,
                  maxWidth: 200,
                }}>
                  {stage.statLabel}
                </div>
              </div>

              {/* Conditions */}
              <div>
                <div style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "var(--muted-foreground)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}>
                  Conditions Sakhi tracks
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {stage.conditions.map(c => (
                    <div key={c} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}>
                      <div style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: stage.color,
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontSize: 13,
                        fontWeight: 400,
                        color: "var(--foreground)",
                      }}>
                        {c}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Health library link */}
              <Link
                href="/product#health"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 500,
                  color: stage.color,
                  textDecoration: "none",
                  marginTop: "auto",
                }}
              >
                Read the research →
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Stage progress dots */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 8,
        marginTop: 24,
      }}>
        {stages.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            style={{
              width: active === i ? 24 : 8,
              height: 8,
              borderRadius: 999,
              background: active === i ? s.color : "rgba(0,0,0,0.12)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.25s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
