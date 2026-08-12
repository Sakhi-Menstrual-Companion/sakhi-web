"use client";

import { ArrowRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

/**
 * Sixteen conditions, as a reference library.
 *
 * This was a sixteen-card grid with a pill filter above it, and each card
 * expanded in place. Three things made it hard to look at:
 *
 * 1. Sixteen cards each led with a 32px pink statistic, so the page was
 *    sixteen competing numbers and no way in. The stat is the hook for one
 *    condition; repeated sixteen times it is wallpaper.
 * 2. Expanding a card in a three-column grid pushed every card after it down
 *    the page, so reading one condition moved everything the reader had just
 *    been looking at.
 * 3. The opened card was four blocks of 11px uppercase pink labels, which is
 *    the most templated way to set a heading there is.
 *
 * It is a grouped list now, five sections by category, one row per condition.
 * A row is scannable at a glance and the full entry opens in the same dialog
 * the feature gallery and the team cards use, so the page never reflows and
 * the site has one way of showing detail rather than three.
 *
 * The category filter is gone with the grid. Grouping answers the same
 * question the filter did, permanently and without a click.
 *
 * Copy rule: every number on this page is from the research in 02-Research and
 * carries its own source there. Do not add, round, or soften a figure here.
 */
const groups = [
  { id: "hormonal", label: "Hormonal" },
  { id: "pain", label: "Pain & Cycles" },
  { id: "mental", label: "Mental Health" },
  { id: "reproductive", label: "Reproductive" },
  { id: "systemic", label: "Systemic" },
] as const;

/** A labelled block inside the dialog. */
function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 first:mt-0">
      <h4 className="text-[13.5px] font-semibold tracking-[-0.01em] text-foreground">{title}</h4>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

function ConditionRow({ c, group }: { c: Condition; group: string }) {
  return (
    <Dialog>
      {/* The whole row is the control. grid rather than flex so the stat
          column lines up down the list instead of floating wherever each
          tagline happens to end. */}
      <DialogTrigger
        className={
          "group grid w-full cursor-pointer grid-cols-1 items-baseline gap-x-8 gap-y-2 py-6 text-left " +
          "transition-colors duration-(--duration-fast) hover:bg-accent-faint/40 " +
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary " +
          "sm:grid-cols-[minmax(0,1fr)_13rem_1.5rem] sm:px-4"
        }
      >
        <div className="min-w-0">
          <p className="text-[1.0625rem] leading-snug font-medium text-foreground">{c.name}</p>
          <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">{c.tagline}</p>
        </div>

        <div className="min-w-0">
          <p className="text-[1.25rem] leading-none font-semibold tracking-tight tabular-nums text-secondary">
            {c.stat}
          </p>
          <p className="mt-1.5 text-[12.5px] leading-snug text-muted-foreground">{c.statLabel}</p>
        </div>

        <ArrowRight
          className="hidden size-4 self-center text-muted-foreground transition-transform duration-(--duration-fast) group-hover:translate-x-0.5 group-hover:text-secondary sm:block"
          aria-hidden="true"
        />
      </DialogTrigger>

      <DialogContent className="max-h-[85vh] max-w-none overflow-y-auto p-10 sm:max-w-[50vw] sm:p-12">
        <p className="text-[15px] font-semibold tracking-tight text-secondary">{group}</p>
        <DialogTitle className="text-h2 mt-3 font-semibold text-foreground">{c.name}</DialogTitle>

        <div className="mt-6 flex items-baseline gap-3 border-y border-border py-5">
          <span className="text-[2rem] leading-none font-semibold tracking-tight tabular-nums text-secondary">
            {c.stat}
          </span>
          <span className="text-[14px] text-muted-foreground">{c.statLabel}</span>
        </div>

        <div className="mt-8">
          <Block title="What it is">
            <DialogDescription className="text-[15.5px] leading-relaxed text-muted-foreground">
              {c.what}
            </DialogDescription>
          </Block>

          <Block title="What she experiences">
            <ul className="flex flex-col gap-2">
              {c.symptoms.map((sym) => (
                <li key={sym} className="flex items-start gap-3">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary"
                    aria-hidden="true"
                  />
                  <span className="text-[15px] leading-relaxed text-muted-foreground">{sym}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="What the silence costs">
            <p className="text-[15.5px] leading-relaxed text-muted-foreground">{c.silence}</p>
          </Block>

          {/* The one tinted block in the dialog, because it is the only part
              that is about Sakhi rather than about the condition. */}
          <section className="mt-8 rounded-2xl bg-accent-faint p-6">
            <h4 className="text-[13.5px] font-semibold tracking-[-0.01em] text-foreground">
              How Sakhi helps
            </h4>
            <p className="mt-2.5 text-[15.5px] leading-relaxed text-muted-foreground">{c.sakhi}</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function HealthConditions() {
  return (
    <div>
      <div className="flex flex-col gap-16">
        {groups.map((g) => {
          const items = conditions.filter((c) => c.category === g.id);
          return (
            <section key={g.id}>
              <h3 className="text-h4 text-foreground">{g.label}</h3>
              <div className="mt-5 divide-y divide-border border-y border-border sm:-mx-4">
                {items.map((c) => (
                  <ConditionRow key={c.id} c={c} group={g.label} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Closing disclaimer. Plain and flat, same surface as the section
          around it: the page's one dark CTA band follows right after this, so
          this stays quiet rather than competing with it. */}
      <div className="mt-20 rounded-2xl border border-border bg-card p-8 sm:p-10">
        <h3 className="text-h4 text-foreground">Sakhi tracks. Doctors diagnose.</h3>
        <p className="mt-3 max-w-140 text-[15px] leading-relaxed text-muted-foreground">
          Everything on this page is educational research. Sakhi is a tracking and awareness tool,
          not a medical device and not a diagnostic system. If something you have read here
          resonates, please bring it to a gynaecologist. Sakhi&rsquo;s Doctor Report is built to
          help you have that conversation.
        </p>
      </div>
    </div>
  );
}
