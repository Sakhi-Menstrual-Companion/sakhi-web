"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Condition {
  id: string;
  name: string;
  category: "hormonal" | "pain" | "mental" | "reproductive" | "systemic";
  stat: string;
  statLabel: string;
  tagline: string;
  what: string;
  symptoms: string[];
  silence: string;
  sakhi: string;
}

const conditions: Condition[] = [
  {
    id: "pcod",
    name: "PCOD / PCOS",
    category: "hormonal",
    stat: "1 in 5",
    statLabel: "Indian women has it",
    tagline: "The most common endocrine disorder in women, and 70% don't know they have it.",
    what: "A hormonal imbalance where the ovaries produce excess androgens, disrupting the menstrual cycle and often causing cysts on the ovaries. In India, 11.33% prevalence across studies, the most common endocrine disorder in women of reproductive age.",
    symptoms: ["Irregular or missed periods", "Unexplained weight gain", "Persistent acne", "Excessive facial or body hair", "Hair thinning on scalp", "Fatigue", "Mood swings and anxiety"],
    silence: "70% of Indian women with PCOD are undiagnosed. Left unmanaged, it increases risk of Type 2 diabetes (4x), cardiovascular disease, and infertility. Depression and anxiety are 2-3x more common.",
    sakhi: "Sakhi's cycle logging and symptom tracking can surface patterns she has never had language for. The Doctor Report gives her documented evidence when she walks into a clinic where she hasn't historically been believed.",
  },
  {
    id: "endometriosis",
    name: "Endometriosis",
    category: "pain",
    stat: "42 million",
    statLabel: "women in India affected",
    tagline: "Her pain is not normal. It took her 4 to 12 years to hear that.",
    what: "Tissue similar to the uterine lining grows outside the uterus, causing chronic pain and inflammation. India has one of the highest global burdens, 42 million women. Among women with infertility, 25-50% have endometriosis.",
    symptoms: ["Severe period pain beyond what feels normal", "Chronic pelvic pain", "Pain during sex", "Heavy menstrual bleeding", "Bloating and nausea", "Fatigue", "Difficulty conceiving"],
    silence: "The average diagnosis delay is 4 to 12 years, driven not by access, but by dismissal. Her pain is treated as normal. Women with untreated pelvic pain are 2.5x more likely to develop chronic pain conditions.",
    sakhi: "Sakhi tracks pain patterns over time. The Doctor Report shows a gynaecologist the pattern across months, what a 10-minute appointment almost never captures.",
  },
  {
    id: "dysmenorrhea",
    name: "Dysmenorrhea",
    category: "pain",
    stat: "70.2%",
    statLabel: "of Indian girls affected",
    tagline: "50% miss school every month. Only 14% ever see a doctor.",
    what: "Severe period pain that significantly disrupts daily life. In a study of 1,000 Indian female students, 70.2% had dysmenorrhea, yet only 14.2% had ever sought medical advice. It is one of the leading causes of recurrent school absenteeism globally.",
    symptoms: ["Cramping pain 1-2 days before or at period start", "Lower back pain", "Nausea and headache", "Tiredness", "Irritability", "Missed school or work"],
    silence: "Dysmenorrhea is the primary symptom of endometriosis and adenomyosis. When normalised, those conditions go undiagnosed for years. Severe dysmenorrhea causes quality-of-life impairment comparable to chronic migraine.",
    sakhi: "Pain logging in Sakhi is the first step in a pattern that could flag whether something more serious is happening, pain that's escalating, or unusual in a way a single clinic visit won't catch.",
  },
  {
    id: "pmdd",
    name: "PMDD",
    category: "mental",
    stat: "8%",
    statLabel: "of Indian women (vs. 1.6% globally)",
    tagline: "Cyclical mood episodes so severe they disappear, then return. Every month.",
    what: "Premenstrual Dysphoric Disorder causes severe mood and physical symptoms in the week before menstruation that resolve once the period begins. An Oxford 2024 meta-analysis confirmed a global prevalence of 1.6%; an Indian meta-analysis found 8%.",
    symptoms: ["Severe irritability or anger", "Depressed mood or hopelessness", "Marked anxiety and tension", "Sudden mood shifts, crying without reason", "Difficulty concentrating", "Extreme fatigue", "Bloating and breast tenderness"],
    silence: "Women with PMDD are nearly 4x more likely to experience suicidal ideation and nearly 7x more likely to attempt suicide (PMC meta-analysis, 2022). Lifetime comorbidity with major depression is 30-70%.",
    sakhi: "PMDD is invisible until it is tracked. Sakhi's cycle-aware AI is one of the few places where mood data is viewed in relation to where she is in her cycle, not in isolation. That connection can change her life.",
  },
  {
    id: "amenorrhea",
    name: "Amenorrhea",
    category: "hormonal",
    stat: "3-4%",
    statLabel: "of reproductive-age women",
    tagline: "When periods stop, and everyone assumes it's fine.",
    what: "Absent periods in a woman who should be menstruating. Secondary amenorrhea (periods that stop after being established) affects 3-4% globally. Functional hypothalamic amenorrhea, caused by stress, low body weight, or excessive exercise, accounts for 20-35% of cases.",
    symptoms: ["No period for 3+ months", "Unexplained weight changes", "Excessive exercise or dieting", "Hair loss", "Headaches", "Vision changes", "Difficulty sleeping"],
    silence: "Amenorrhea signals the body is under stress it cannot manage. Untreated, it leads to estrogen deficiency, bone density loss, and infertility. In many cases, it overlaps with PCOD and thyroid dysfunction.",
    sakhi: "Tracking cycle absence is the first step. Sakhi can recognise when a user hasn't logged a period in an unusual number of cycles and gently prompt her to check in with a doctor.",
  },
  {
    id: "anemia",
    name: "Anemia",
    category: "systemic",
    stat: "57%",
    statLabel: "of Indian women of reproductive age",
    tagline: "The most common health condition affecting Indian women, and most don't know they have it.",
    what: "Iron deficiency anemia in women is directly linked to menstrual blood loss. 57% of Indian women of reproductive age are anemic (NFHS-5, 2019-21), up from 53% five years earlier. Among adolescent women, the rate is 58.9%.",
    symptoms: ["Fatigue and weakness", "Shortness of breath during activity", "Headaches", "Pale skin and pale inside of eyelids", "Rapid heartbeat", "Dizziness when standing", "Irritability and difficulty concentrating"],
    silence: "Anemia is linked to impaired cognition, worsened period symptoms, and increased complications during pregnancy, including preterm birth, low birth weight, and maternal mortality. Iron deficiency anemia costs India approximately 1.2% of GDP annually.",
    sakhi: "Heavy flow plus persistent fatigue plus low energy between cycles is a symptom cluster. Sakhi AI can recognise this pattern and suggest a hemoglobin test, something she would never have connected on her own.",
  },
  {
    id: "thyroid",
    name: "Thyroid Disorders",
    category: "hormonal",
    stat: "15.86%",
    statLabel: "of Indian women (3x more than men)",
    tagline: "She thinks it's stress. Her doctor didn't test for it. It's her thyroid.",
    what: "Hypothyroidism, an underactive thyroid, affects 15.86% of Indian women vs. 5.02% of Indian men (8-city epidemiological study). 35% of women presenting with menstrual irregularities had elevated TSH in a clinical study. Most don't know they have it.",
    symptoms: ["Fatigue that doesn't improve with rest", "Unexpected weight gain", "Feeling cold when others are comfortable", "Hair thinning or loss", "Dry skin", "Brain fog", "Irregular or heavier periods"],
    silence: "Unmanaged hypothyroidism causes infertility, miscarriage risk, poor fetal development, cardiovascular disease, and depression. Despite 15.86% clinical prevalence, only 2.9% of Indian women self-report thyroid disorders, the vast majority are undiagnosed.",
    sakhi: "Thyroid-related symptom clusters, fatigue, irregular cycles, mood changes, show up in Sakhi's logs. Sakhi AI can recognise these patterns and flag a thyroid test as something worth asking a doctor about.",
  },
  {
    id: "fibroids",
    name: "Uterine Fibroids",
    category: "reproductive",
    stat: "70%",
    statLabel: "of women affected globally by lifetime",
    tagline: "She thought heavy bleeding was normal. She had fibroids for years.",
    what: "Non-cancerous growths in the uterus that cause heavy bleeding, pelvic pressure, and pain. Globally, 70% of women develop fibroids by reproductive age, clinically significant in ~25%. Indian cross-sectional data shows 21.1% prevalence. Awareness in India is described as 'exceedingly low'.",
    symptoms: ["Heavy or prolonged menstrual bleeding", "Pelvic pain or pressure", "Frequent urination", "Difficulty emptying the bladder", "Constipation", "Lower back pain", "Enlarged abdomen"],
    silence: "Untreated fibroids cause severe anemia (heavy bleeding depleting iron stores), pregnancy complications, and in some cases require hysterectomy. The normalisation of heavy bleeding delays care by years.",
    sakhi: "Sakhi tracks flow heaviness over time. A pattern of worsening heavy bleeding across cycles is something that can be documented and brought to a doctor, rather than normalised month after month.",
  },
  {
    id: "cysts",
    name: "Ovarian Cysts",
    category: "reproductive",
    stat: "1 in 5",
    statLabel: "women develop a significant pelvic mass",
    tagline: "Most are benign. Some aren't. The difference matters.",
    what: "Fluid-filled sacs on the ovaries found in nearly all premenopausal women on ultrasound. Most functional cysts resolve naturally within 1-3 cycles. The critical distinction is between functional (benign, self-resolving) and pathological cysts (endometriomas, dermoids), which require monitoring.",
    symptoms: ["Pelvic pain or pressure", "Pain during sex", "Irregular periods", "Bloating or fullness", "Frequent urination", "Pain during bowel movements", "Nausea (if cyst ruptures)"],
    silence: "Pathological cysts, especially endometriomas, are linked to endometriosis, which has a 4-12 year diagnosis delay. PCOS, which involves multiple cysts alongside hormonal dysfunction, affects 11-19% of Indian women and has its own downstream risks.",
    sakhi: "Cycle tracking can flag changes in pain patterns or cycle irregularities that correlate with ovarian cyst activity, prompting a timely ultrasound rather than years of unexplained discomfort.",
  },
  {
    id: "adenomyosis",
    name: "Adenomyosis",
    category: "pain",
    stat: "41-49%",
    statLabel: "of women with gynae symptoms",
    tagline: "Called 'the missed disease'. Diagnosis delay: 6 to 11 years.",
    what: "Uterine tissue grows into the muscular wall of the uterus, causing the uterus to enlarge and leading to severe pain and heavy bleeding. A 2025 study found 74.3% of adenomyosis patients had experienced a prior misdiagnosis. No national prevalence data exists for India.",
    symptoms: ["Severe period pain", "Heavy or prolonged bleeding", "Uterine enlargement", "Pelvic pressure", "Pain during sex", "Bloating", "Spotting between periods"],
    silence: "The 6-11 year diagnosis delay means years of untreated pain, unnecessary treatments, and for many women, fertility consequences. A Lancet paper (2025) specifically named India as lacking the diagnostic infrastructure to identify this condition.",
    sakhi: "Pain patterns that persist, worsen, or match a specific cycle timing are what Sakhi is built to catch, and document, before a woman walks into a clinic where her pain is dismissed again.",
  },
  {
    id: "fertility",
    name: "Fertility Challenges",
    category: "reproductive",
    stat: "1 in 6",
    statLabel: "people globally experience infertility",
    tagline: "Infertility has no national health programme in India.",
    what: "In India, 8% of women aged 15-49 experience infertility (primary: 5%, secondary: 2%). WHO 2023 data shows 1 in 6 people globally are affected. Access to fertility care in India is restricted to private tertiary facilities unaffordable for most women.",
    symptoms: ["Unable to conceive after 12 months of trying", "Irregular or absent periods", "Very painful periods", "Known hormonal conditions (PCOS, thyroid)", "Prior pregnancy loss", "Pain during sex"],
    silence: "In India's social context, infertility carries stigma, relationship consequences, and loss of standing. Secondary infertility, where a woman has conceived before but cannot again, is often not recognised as a medical condition until years have passed.",
    sakhi: "Sakhi cannot diagnose fertility issues. But it can track the cycles, symptoms, and patterns that make a conversation with a specialist more productive, and give her the documentation to have that conversation sooner.",
  },
  {
    id: "mental",
    name: "Hormonal Mental Health",
    category: "mental",
    stat: "43%",
    statLabel: "of Indian women experience PMS",
    tagline: "It's not her personality. It's her hormones. And it's cyclical.",
    what: "Women have heightened vulnerability to depression and anxiety during every period of significant hormonal change: puberty, the premenstrual phase, postpartum, and perimenopause. In Indian women, perimenopausal depression prevalence is 42.47%. PMS affects 43%; PMDD affects 8%.",
    symptoms: ["Mood swings tied to cycle phase", "Depression or low mood before period", "Anxiety during hormonal transitions", "Irritability", "Fatigue and low energy", "Sleep disruption", "Difficulty concentrating"],
    silence: "Because symptoms appear and disappear on a cycle, they are explained as personality, stress, or weakness, not physiology. This is why women carry these experiences for years without a name for them.",
    sakhi: "Cycle-aware mood tracking is Sakhi's core offering. Showing a woman that her low days consistently fall in the same cycle window, and improving after her period, is information that transforms how she understands herself.",
  },
  {
    id: "menorrhagia",
    name: "Menorrhagia",
    category: "pain",
    stat: "~45%",
    statLabel: "in Indian cities (Lancet Global Health 2023)",
    tagline: "Half of all women think soaking through pads every hour is normal.",
    what: "Heavy menstrual bleeding (soaking a pad or tampon every hour for several hours, passing large clots, bleeding lasting more than 7 days). A Lancet Global Health 2023 study found 44-47% prevalence in three Indian cities. A quality-of-life study found 52.9% had it for more than a year before seeking care.",
    symptoms: ["Soaking through pads or tampons hourly", "Large blood clots", "Bleeding lasting more than 7 days", "Restricting activities due to bleeding", "Fatigue and shortness of breath", "Signs of anemia"],
    silence: "Heavy bleeding causes anemia, which makes it harder to tolerate the next cycle's heavy bleeding, a reinforcing loop. Only 34.8% of women with menorrhagia had ever received any treatment. The awareness gap is near total.",
    sakhi: "Flow logging is the most direct signal Sakhi has for menorrhagia. Patterns of consistently heavy flow, combined with fatigue and energy data, build the picture that a doctor needs to investigate the cause.",
  },
  {
    id: "cervical",
    name: "Cervical Health",
    category: "reproductive",
    stat: "127,526",
    statLabel: "new cervical cancer cases in India (2022)",
    tagline: "One of the most preventable cancers in the world. India screens only 1.9% of women.",
    what: "India accounts for 79,906 of global cervical cancer deaths annually, more than any other country. India's mortality rate (11.2 per 100,000) is 57% higher than the global average. HPV prevalence in Indian women over 30 is greater than 10%. 4 in 5 cervical cancers are caused by HPV types 16 and 18.",
    symptoms: ["Often no early symptoms", "Abnormal vaginal bleeding (after sex, between periods, post-menopause)", "Unusual vaginal discharge", "Pelvic pain", "Pain during sex"],
    silence: "Cervical cancer develops slowly over years. With regular Pap smear or HPV screening, precancerous lesions are caught and treated before they become cancer. Without screening, women present at advanced stage. Only 1.9% of Indian women aged 30-49 have ever been screened.",
    sakhi: "Sakhi can prompt users to get their first Pap smear at the right age and remind them of screening timelines, the simplest intervention that could save the most lives.",
  },
  {
    id: "bone",
    name: "Bone Health",
    category: "systemic",
    stat: "46.2 years",
    statLabel: "mean age of menopause in India (5 years earlier than West)",
    tagline: "Bone loss begins earlier for Indian women than any published guidelines assume.",
    what: "Postmenopausal bone loss begins in perimenopause, when estrogen starts to fluctuate. Indian women reach menopause at 46.2 years on average, 5 years earlier than women in Western populations. 82.2% of postmenopausal Indian women in a Northern India study had some form of bone density loss.",
    symptoms: ["No symptoms until a fracture occurs", "Gradually shrinking height", "Back pain from vertebral fractures", "Stooped posture", "Bones that fracture more easily than expected"],
    silence: "Postmenopausal women lose 3-5% of bone mass annually for up to 7 years after menopause. Because bone loss is invisible and painless until a fracture, it is almost never acted on until significant damage has occurred.",
    sakhi: "As Sakhi's user base ages, tracking perimenopausal symptom onset, cycle changes, mood shifts, hot flashes, becomes the early signal for when bone health conversations should begin with a doctor.",
  },
  {
    id: "ppd",
    name: "Postpartum Depression",
    category: "mental",
    stat: "22%",
    statLabel: "pooled prevalence in India",
    tagline: "The most common complication of childbirth. 91% of Indian women have never heard of it.",
    what: "PPD affects 22% of Indian women who give birth (vs. 12.9% in high-income countries). It is the most common complication of childbirth globally. Yet 91.49% of pregnant and postpartum women surveyed in India had no awareness of the condition.",
    symptoms: ["Persistent low mood or emptiness", "Loss of interest in the baby", "Exhaustion beyond normal new-parent tiredness", "Crying spells", "Anxiety or panic", "Difficulty bonding with baby", "Thoughts of self-harm"],
    silence: "PPD is not screened for in most Indian obstetric settings. Only 35% of nurses supported depression screening postpartum. A woman experiencing PPD is likely to present with physical complaints, attributed to new motherhood, while the condition goes unrecognised.",
    sakhi: "Mood tracking through the postpartum window, if Sakhi knows the user has recently given birth, creates the data for an early PPD flag. A question at the right moment can be the first time she hears the words 'this has a name.'",
  },
];

const categories = [
  { id: "all",          label: "All Conditions" },
  { id: "hormonal",    label: "Hormonal" },
  { id: "pain",        label: "Pain & Cycles" },
  { id: "mental",      label: "Mental Health" },
  { id: "reproductive",label: "Reproductive" },
  { id: "systemic",    label: "Systemic" },
];

/**
 * `categoryColor` used to be a five-key record that mapped every category to
 * the same #F61887, so it decided nothing. What it did do was scatter raw hex
 * through the component, which is how the two contrast failures below got in.
 *
 * There are two values now because they do different jobs:
 *
 *   ACCENT  a token, for anything that carries text or reads as a solid fill.
 *           Deep Pink, because Primary Pink is 3.89:1 on white and most of
 *           these uses are 11-13px type, which needs 4.5:1.
 *   TINT    a raw hex, because the alpha-suffixed tints (`${TINT}12`) are
 *           string concatenation and cannot take a var().
 */
const ACCENT = "var(--secondary)";
const TINT = "#F61887";

function ConditionCard({ c }: { c: Condition }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      /* No per-card stagger. Sixteen cards arriving one after another reads as
         a template; the grid now arrives as one block. */
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        background: "var(--card)",
        border: `1px solid ${open ? `${TINT}33` : "var(--border)"}`,
        borderRadius: 14,
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        /* Flat at rest. The shadow is the open state, not the look. */
        boxShadow: open ? `0 8px 32px ${TINT}15` : "none",
      }}
      onClick={() => setOpen(!open)}
    >
      {/* Card Header */}
      <div style={{
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}>
        {/* Category + Toggle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Neutral, not pink. Sixteen pink chips sat directly above sixteen
              pink stat numbers, so the accent stopped meaning anything. The
              number is the thing worth looking at; the category is metadata. */}
          <span style={{
            fontSize: 11,
            fontWeight: 600,
            color: "var(--chip-foreground)",
            background: "var(--chip)",
            padding: "4px 10px",
            borderRadius: 999,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
          }}>
            {c.category}
          </span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              width: 24, height: 24, borderRadius: "50%",
              background: open ? ACCENT : "rgba(0,0,0,0.06)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1v8M1 5h8" stroke={open ? "var(--secondary-foreground)" : "var(--muted-foreground)"} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>

        {/* Stat */}
        <div>
          <div style={{
            fontSize: 38,
            fontWeight: 700,
            color: ACCENT,
            lineHeight: 1,
            letterSpacing: 0,
            marginBottom: 4,
          }}>
            {c.stat}
          </div>
          <div style={{ fontSize: 12, fontWeight: 400, color: "var(--muted-foreground)" }}>
            {c.statLabel}
          </div>
        </div>

        {/* Name + Tagline */}
        <div>
          <div style={{ fontSize: 18, fontWeight: 500, color: "var(--foreground)", marginBottom: 8, lineHeight: 1.25 }}>
            {c.name}
          </div>
          <div style={{ fontSize: 13, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.6 }}>
            {c.tagline}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{
              padding: "0 28px 28px",
              borderTop: `1px solid ${TINT}18`,
              paddingTop: 24,
            }}>
              {/* What it is */}
              <div style={{ marginBottom: 22 }}>
                <div style={{ fontSize: 11, fontWeight: 500, color: ACCENT, marginBottom: 10 }}>
                  What it is
                </div>
                <p style={{ fontSize: 13, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.75, margin: 0 }}>
                  {c.what}
                </p>
              </div>

              {/* Symptoms */}
              <div style={{ marginBottom: 22 }}>
                <div style={{ fontSize: 11, fontWeight: 500, color: ACCENT, marginBottom: 10 }}>
                  What she experiences
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {c.symptoms.map(s => (
                    <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: ACCENT, flexShrink: 0, marginTop: 6,
                      }} />
                      <span style={{ fontSize: 13, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.6 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What the silence costs */}
              <div style={{
                background: `${TINT}08`,
                border: `1px solid ${TINT}18`,
                borderRadius: 14,
                padding: "16px 18px",
                marginBottom: 16,
              }}>
                <div style={{ fontSize: 11, fontWeight: 500, color: ACCENT, marginBottom: 8 }}>
                  What the silence costs
                </div>
                <p style={{ fontSize: 13, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.75, margin: 0 }}>
                  {c.silence}
                </p>
              </div>

              {/* Sakhi */}
              <div style={{
                background: "var(--accent)",
                borderRadius: 14,
                padding: "16px 18px",
              }}>
                <div style={{ fontSize: 11, fontWeight: 500, color: ACCENT, marginBottom: 8 }}>
                  How Sakhi helps
                </div>
                <p style={{ fontSize: 13, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.75, margin: 0 }}>
                  {c.sakhi}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HealthConditions() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? conditions
    : conditions.filter(c => c.category === activeCategory);

  return (
    <div>
      {/* The 16 / 252M / 57% stat trio now lives in the page hero's data-bar
         (src/app/health/page.tsx), directly under the headline. Repeating it
         here as a second block put the same three numbers on screen twice in
         a row. The "0 diagnoses made" line moved into the closing band below,
         next to the sentence it actually supports. */}

      {/* Category Filter */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 40,
      }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              padding: "8px 18px",
              borderRadius: 999,
              border: activeCategory === cat.id
                ? `1px solid ${ACCENT}`
                : "1px solid rgba(0,0,0,0.1)",
              background: activeCategory === cat.id ? ACCENT : "var(--card)",
              color: activeCategory === cat.id ? "var(--secondary-foreground)" : "var(--muted-foreground)",
              fontSize: 13,
              fontWeight: activeCategory === cat.id ? 500 : 400,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {cat.label}
            <span style={{
              marginLeft: 8,
              fontSize: 11,
              opacity: 0.7,
            }}>
              {cat.id === "all"
                ? conditions.length
                : conditions.filter(c => c.category === cat.id).length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
          gap: 16,
        }}
      >
        {filtered.map((c) => (
          <ConditionCard key={c.id} c={c} />
        ))}
      </motion.div>

      {/* Bottom disclaimer */}
      <div style={{
        marginTop: 64,
        background: "var(--foreground)",
        borderRadius: 14,
        padding: "40px 48px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: "var(--ink-foreground)", letterSpacing: 0 }}>
            Sakhi tracks. Doctors diagnose.
          </div>
          <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.55)" }}>
            0 diagnoses made by Sakhi, ever
          </span>
        </div>
        <p style={{ fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.82)", lineHeight: 1.8, margin: 0, maxWidth: 640 }}>
          Everything on this page is educational research. Sakhi is a tracking and awareness tool,
          not a medical device, not a diagnostic system. If something in what you&apos;ve read resonates,
          bring it to a gynaecologist. Sakhi&apos;s Doctor Report is built to help you have that conversation.
        </p>
        <div style={{ paddingTop: 8 }}>
          <a
            href="https://apps.apple.com/app/sakhi"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              background: ACCENT,
              color: "var(--ink-foreground)",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
          >
            Start tracking with Sakhi
          </a>
        </div>
      </div>
    </div>
  );
}
