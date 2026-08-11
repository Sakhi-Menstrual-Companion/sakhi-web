import { ArrowRight, Check, Mail, Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/section";
import type { SpecimenGroup } from "./types";

/**
 * Sections that ask the reader for something, plus the social proof that earns
 * the right to ask.
 *
 * Sakhi's tone rules apply hard here: every CTA is phrased as an invitation,
 * never an instruction, and nothing on this page may pressure anyone into
 * adding a trusted person on Be Her Sakhi. Specimen copy follows that so it can
 * be lifted verbatim without reintroducing the wrong voice.
 */

export const proofSpecimens: SpecimenGroup = {
  id: "proof",
  label: "Social proof",
  blurb: "Testimonials, coverage and endorsement. Attribution is mandatory: an unattributed quote on a health product reads as invented.",
  items: [
    {
      id: "proof-01",
      name: "Quote cards, three up",
      note: "The default. Equal cards, mark at the top, attribution pinned to the bottom.",
      preview: (
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              q: "I had been tracking for years without ever seeing a pattern. Sakhi showed me one in two months.",
              a: "Ananya",
              r: "TestFlight tester, Lucknow",
            },
            {
              q: "I walked into my appointment with a printed history instead of trying to remember dates. The doctor actually read it.",
              a: "Priya",
              r: "TestFlight tester, Delhi",
            },
            {
              q: "It does not buzz at me or ask me to keep a streak. That is the reason I still have it installed.",
              a: "Meera",
              r: "TestFlight tester, Pune",
            },
          ].map((t) => (
            <figure key={t.a} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <Quote className="size-5 text-primary/40" aria-hidden="true" />
              <blockquote className="mt-3 text-[14px] leading-relaxed text-foreground">
                {t.q}
              </blockquote>
              <figcaption className="mt-auto pt-4">
                <span className="block text-[13px] font-semibold text-foreground">{t.a}</span>
                <span className="block text-[12px] text-muted-foreground">{t.r}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      ),
      code: `<figure className="flex flex-col rounded-2xl border border-border bg-card p-6">
  <Quote className="size-5 text-primary/40" aria-hidden="true" />
  <blockquote className="mt-3 text-[14.5px] leading-relaxed text-foreground">{t.quote}</blockquote>
  <figcaption className="mt-auto pt-4 text-[12.5px] text-muted-foreground">{t.author}</figcaption>
</figure>`,
    },
    {
      id: "proof-02",
      name: "Single large quote",
      note: "One testimonial carrying a whole band, centred. Use the strongest thing anyone has said.",
      preview: (
        <figure className="mx-auto max-w-[46ch] text-center">
          <blockquote className="text-h3 text-foreground">
            It was the first app that <GradientText>felt like a friend</GradientText>
          </blockquote>
          <figcaption className="mt-5 text-[13px] text-muted-foreground">
            TestFlight tester, March 2025
          </figcaption>
        </figure>
      ),
      code: `<figure className="mx-auto max-w-[46ch] text-center">
  <blockquote className="text-h3 text-foreground">Quote with a <GradientText>highlighted clause</GradientText></blockquote>
  <figcaption className="mt-5 text-[13px] text-muted-foreground">Attribution</figcaption>
</figure>`,
    },
    {
      id: "proof-03",
      name: "Coverage list",
      note: "Press mentions as ruled rows: outlet, headline, date. Honest when logo rights are not held.",
      preview: (
        <div className="divide-y divide-border border-y border-border">
          {[
            {
              p: "The Times of India",
              h: "Galgotias students build a menstrual health companion",
              d: "Q4 2024",
            },
            {
              p: "Apple",
              h: "Selected for College Students: Success Stories",
              d: "Sep 2025",
            },
            {
              p: "UP International Trade Show",
              h: "Sakhi presented on the state innovation floor",
              d: "Q4 2024",
            },
          ].map((r) => (
            <a
              key={r.p}
              href="#proof"
              className="flex items-center justify-between gap-4 py-4 no-underline transition-colors hover:bg-muted/40"
            >
              <span className="min-w-0">
                <span className="block text-[14.5px] font-semibold text-foreground">{r.p}</span>
                <span className="block text-[13px] text-muted-foreground">{r.h}</span>
              </span>
              <span className="flex shrink-0 items-center gap-3 text-[12.5px] text-muted-foreground">
                {r.d} <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      ),
      code: `<div className="divide-y divide-border border-y border-border">
  {press.map((r) => (
    <a key={r.publication} href={r.url} className="flex items-center justify-between gap-4 py-4 no-underline hover:bg-muted/40">
      <span className="text-[14.5px] font-semibold text-foreground">{r.publication}</span>
      <span className="text-[12.5px] text-muted-foreground">{r.date}</span>
    </a>
  ))}
</div>`,
    },
    {
      id: "proof-04",
      name: "Rating summary",
      note: "Store rating with a count. Only ship this once the count is real, and never round it up.",
      preview: (
        <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5">
          <span className="flex gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-primary text-primary" />
            ))}
          </span>
          <span className="text-[13.5px] text-muted-foreground">
            <strong className="font-semibold text-foreground">4.8</strong> on the App Store
          </span>
        </div>
      ),
      code: `<div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5">
  <span className="flex gap-0.5" aria-hidden="true">{stars}</span>
  <span className="text-[13.5px] text-muted-foreground"><strong className="font-semibold text-foreground">4.8</strong> on the App Store</span>
</div>`,
    },
    {
      id: "proof-05",
      name: "Partner strip",
      note: "Institutional backing as flat wordmarks on a ruled strip. Never imply a partnership that is not documented.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-y border-border py-6">
          {["Galgotias University", "ISDP Bootcamp", "Apple Developer Program"].map((n) => (
            <span key={n} className="text-[13.5px] font-semibold text-muted-foreground">
              {n}
            </span>
          ))}
        </div>
      ),
      code: `<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-y border-border py-6">
  {partners.map((n) => <span key={n} className="text-[13.5px] font-semibold text-muted-foreground">{n}</span>)}
</div>`,
    },
    {
      id: "proof-06",
      name: "Quote with avatar",
      note: "Testimonial led by the person rather than the mark. Initials tile keeps it honest when there is no photograph.",
      preview: (
        <figure className="max-w-xl rounded-2xl border border-border bg-card p-6">
          <blockquote className="text-[15px] leading-relaxed text-foreground">
            I had been tracking for years without ever seeing a pattern. Sakhi showed me one in two
            months, and I took it to my doctor instead of trying to describe it from memory.
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-accent-faint text-[13px] font-semibold text-secondary">
              A
            </span>
            <span>
              <span className="block text-[13.5px] font-semibold text-foreground">Ananya</span>
              <span className="block text-[12.5px] text-muted-foreground">TestFlight tester, Lucknow</span>
            </span>
          </figcaption>
        </figure>
      ),
      code: `<figure className="max-w-xl rounded-2xl border border-border bg-card p-6">
  <blockquote className="text-[15px] leading-relaxed text-foreground">{t.quote}</blockquote>
  <figcaption className="mt-5 flex items-center gap-3">
    <span className="grid size-10 place-items-center rounded-full bg-accent-faint text-[13px] font-semibold text-secondary">{t.initial}</span>
    <span><span className="block text-[13.5px] font-semibold text-foreground">{t.name}</span></span>
  </figcaption>
</figure>`,
    },
    {
      id: "proof-07",
      name: "Alternating quote rows",
      note: "Full-width testimonials separated by hairlines. Gives each quote room to breathe when there are only a few worth showing.",
      preview: (
        <div className="divide-y divide-border border-y border-border">
          {[
            { q: "It does not buzz at me or ask me to keep a streak. That is why I still have it.", a: "Meera, Pune" },
            { q: "The report saved my appointment. The doctor actually read it.", a: "Priya, Delhi" },
          ].map((t) => (
            <figure key={t.a} className="py-5">
              <blockquote className="text-[15px] leading-relaxed text-foreground">{t.q}</blockquote>
              <figcaption className="mt-2 text-[12.5px] text-muted-foreground">{t.a}</figcaption>
            </figure>
          ))}
        </div>
      ),
      code: `<div className="divide-y divide-border border-y border-border">
  {quotes.map((t) => (
    <figure key={t.author} className="py-5">
      <blockquote className="text-[15px] leading-relaxed text-foreground">{t.quote}</blockquote>
      <figcaption className="mt-2 text-[12.5px] text-muted-foreground">{t.author}</figcaption>
    </figure>
  ))}
</div>`,
    },
    {
      id: "proof-08",
      name: "Recognition card",
      note: "A single award or feature, with the awarding body named. Only ship this for something documented.",
      preview: (
        <div className="flex max-w-lg items-start gap-4 rounded-2xl border border-border bg-accent-faint p-6">
          <Star className="mt-0.5 size-5 shrink-0 fill-secondary text-secondary" aria-hidden="true" />
          <div>
            <p className="text-[14.5px] font-semibold text-foreground">
              Apple, College Students: Success Stories
            </p>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
              Sakhi was selected for Apple&rsquo;s feature in September 2025, with a full day of
              photography on the Galgotias campus.
            </p>
          </div>
        </div>
      ),
      code: `<div className="flex items-start gap-4 rounded-2xl border border-border bg-accent-faint p-6">
  <Star className="mt-0.5 size-5 shrink-0 fill-secondary text-secondary" aria-hidden="true" />
  <div>
    <p className="text-[14.5px] font-semibold text-foreground">{award.body}</p>
    <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{award.detail}</p>
  </div>
</div>`,
    },
    {
      id: "proof-09",
      name: "Numbers as proof",
      note: "Reach stated plainly, each figure captioned with what it counts. Never round these upward.",
      preview: (
        <div className="grid gap-6 border-y border-border py-7 sm:grid-cols-3">
          {[
            { n: "49", l: "women interviewed before v2 was designed" },
            { n: "10+", l: "cities reached across India" },
            { n: "Jun 2025", l: "on the App Store, and free since day one" },
          ].map((x) => (
            <div key={x.l}>
              <p className="text-[24px] leading-none font-semibold text-secondary tabular-nums">{x.n}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{x.l}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="grid gap-6 border-y border-border py-7 sm:grid-cols-3">
  {facts.map((x) => (
    <div key={x.label}>
      <p className="text-[24px] leading-none font-semibold text-secondary tabular-nums">{x.n}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{x.label}</p>
    </div>
  ))}
</div>`,
    },
    {
      id: "proof-10",
      name: "Founding patron note",
      note: "For an institution that made the work possible rather than bought it. Worded as gratitude, never as a customer logo.",
      preview: (
        <div className="rounded-panel border border-border bg-card p-7 text-center">
          <span className="eyebrow">Founding patron</span>
          <p className="mx-auto mt-3 max-w-[54ch] text-[14.5px] leading-relaxed text-foreground">
            Sakhi exists because of Galgotias University, where it began as an ISDP Bootcamp project
            in January 2024 and has been supported ever since.
          </p>
        </div>
      ),
      code: `<div className="rounded-panel border border-border bg-card p-7 text-center">
  <span className="eyebrow">Founding patron</span>
  <p className="mx-auto mt-3 max-w-[54ch] text-[14.5px] leading-relaxed text-foreground">...</p>
</div>`,
    },
  ],
};

export const pricingSpecimens: SpecimenGroup = {
  id: "pricing",
  label: "Pricing",
  blurb: "Sakhi is free, and the paid tier is planned rather than live, so every specimen here has room for a status ribbon that says so plainly.",
  items: [
    {
      id: "pricing-01",
      name: "Three tiers, one featured",
      note: "The standard table. The featured column is lifted by border and ribbon, not by scale, so the three stay comparable at a glance.",
      preview: (
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              n: "Free",
              t: "Everything she needs to understand her body",
              p: "\u20b90",
              u: "always",
              f: true,
              r: "Available now",
              feats: [
                "Cycle, symptom and mood logging",
                "Calendar and cycle predictions",
                "Sakhi AI, with her own context",
                "Doctor-ready health report",
                "Works fully offline",
              ],
              cta: "Download Sakhi",
            },
            {
              n: "Sakhi Plus",
              t: "Deeper guidance, for those who want it",
              p: "\u20b949",
              u: "/ month, planned",
              f: false,
              r: "Not live yet",
              feats: [
                "Everything in Free",
                "Deeper cycle and symptom insight",
                "Guidance on diet and routine",
                "Longer report history",
              ],
              cta: "Not available yet",
            },
            {
              n: "Campus & NGO",
              t: "For institutions running health programmes",
              p: "Let's talk",
              u: "",
              f: false,
              r: null,
              feats: [
                "Awareness sessions and workshops",
                "Onboarding support for students",
                "Aggregate, anonymised reporting",
              ],
              cta: "Start a conversation",
            },
          ].map((t) => (
            <div
              key={t.n}
              className={cn(
                "flex flex-col rounded-2xl border bg-card p-6",
                t.f ? "border-secondary shadow-card" : "border-border"
              )}
            >
              {t.r && (
                <span
                  className={cn(
                    "eyebrow",
                    t.f ? "text-secondary" : "text-muted-foreground"
                  )}
                >
                  {t.r}
                </span>
              )}
              <h4 className="text-h4 mt-1.5 text-foreground">{t.n}</h4>
              <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">{t.t}</p>
              <p className="mt-4 flex items-baseline gap-1.5">
                <span className="text-[26px] leading-none font-semibold text-foreground">{t.p}</span>
                <span className="text-[12px] text-muted-foreground">{t.u}</span>
              </p>
              <ul className="mt-5 list-none space-y-2 p-0 text-[13px] text-muted-foreground">
                {t.feats.map((x) => (
                  <li key={x} className="flex gap-2">
                    <Check className="mt-px size-3.5 shrink-0 text-primary" aria-hidden="true" /> {x}
                  </li>
                ))}
              </ul>
              <span
                className={cn(
                  "mt-6 block rounded-full px-4 py-2.5 text-center text-[13.5px] font-semibold",
                  t.f
                    ? "bg-ink text-white"
                    : "border border-border text-muted-foreground"
                )}
              >
                {t.cta}
              </span>
            </div>
          ))}
        </div>
      ),
      code: `<div className={cn("flex flex-col rounded-2xl border bg-card p-6", plan.featured ? "border-secondary shadow-card" : "border-border")}>
  {plan.ribbon && <span className="eyebrow text-secondary">{plan.ribbon}</span>}
  <h3 className="text-h4 mt-1.5 text-foreground">{plan.name}</h3>
  <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">{plan.tagline}</p>
  <p className="mt-4 flex items-baseline gap-1.5">
    <span className="text-[26px] leading-none font-semibold text-foreground">{plan.price}</span>
    <span className="text-[12px] text-muted-foreground">{plan.unit}</span>
  </p>
  <ul className="mt-5 list-none space-y-2 p-0 text-[13px] text-muted-foreground">{plan.features.map(...)}</ul>
  <Button asChild className="mt-6">{plan.cta.label}</Button>
</div>`,
    },
    {
      id: "pricing-02",
      name: "Single free plan",
      note: "The honest treatment while there is only one live tier. One panel, the list, one action.",
      preview: (
        <div className="mx-auto max-w-md rounded-2xl border border-secondary bg-card p-7 text-center">
          <span className="eyebrow text-secondary">Available now</span>
          <p className="mt-2 text-display leading-none text-foreground">₹0</p>
          <p className="mt-3 text-[14px] text-muted-foreground">
            Everything she needs to understand her body, always free.
          </p>
        </div>
      ),
      code: `<div className="mx-auto max-w-md rounded-2xl border border-secondary bg-card p-7 text-center">
  <span className="eyebrow text-secondary">Available now</span>
  <p className="mt-2 text-display leading-none text-foreground">₹0</p>
</div>`,
    },
    {
      id: "pricing-03",
      name: "Comparison rows",
      note: "Feature-by-feature table. Better than columns of cards once the list runs past six items.",
      preview: (
        <div className="overflow-x-auto">
          <table className="w-full min-w-104 border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="py-2.5 font-medium">Feature</th>
                <th className="py-2.5 font-medium">Free</th>
                <th className="py-2.5 font-medium">Plus</th>
              </tr>
            </thead>
            <tbody>
              {["Cycle logging", "Doctor report", "Deeper insight"].map((f, i) => (
                <tr key={f} className="border-b border-border">
                  <td className="py-2.5 text-foreground">{f}</td>
                  <td className="py-2.5">{i < 2 ? <Check className="size-4 text-primary" /> : "—"}</td>
                  <td className="py-2.5">
                    <Check className="size-4 text-primary" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
      code: `<div className="overflow-x-auto">
  <table className="w-full min-w-104 border-collapse text-[13.5px]">
    <thead><tr className="border-b border-border text-left text-muted-foreground">...</tr></thead>
    <tbody>{rows.map((r) => <tr key={r.feature} className="border-b border-border">...</tr>)}</tbody>
  </table>
</div>`,
    },
    {
      id: "pricing-04",
      name: "Planned tier notice",
      note: "A tier that is not purchasable yet. Muted fill, disabled action, and the status said out loud.",
      preview: (
        <div className="rounded-2xl border border-border bg-muted/40 p-6">
          <span className="eyebrow">Not live yet</span>
          <h4 className="text-h4 mt-1 text-foreground">Sakhi Plus</h4>
          <p className="mt-2 text-[14px] text-muted-foreground">
            Planned at ₹49 a month. Nothing is purchasable in the app today.
          </p>
          <button
            type="button"
            disabled
            className="mt-4 cursor-not-allowed rounded-full border border-border px-5 py-2 text-[13.5px] font-semibold text-muted-foreground opacity-70"
          >
            Not available yet
          </button>
        </div>
      ),
      code: `<div className="rounded-2xl border border-border bg-muted/40 p-6">
  <span className="eyebrow">Not live yet</span>
  <button type="button" disabled className="mt-4 cursor-not-allowed rounded-full border border-border px-5 py-2 text-[13.5px] font-semibold text-muted-foreground opacity-70">
    Not available yet
  </button>
</div>`,
    },
    {
      id: "pricing-05",
      name: "Two tier split",
      note: "Free beside one paid plan, nothing else. Honest while there is exactly one thing to upgrade to.",
      preview: (
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { n: "Free", p: "\u20b90", u: "always", f: true, b: "Everything she needs to understand her body. No ads, no data selling, no limits on logging." },
            { n: "Sakhi Plus", p: "\u20b949", u: "/ month, planned", f: false, b: "Deeper cycle and symptom insight, guidance on diet and routine, and a longer report history." },
          ].map((t) => (
            <div key={t.n} className={cn("rounded-2xl border bg-card p-7", t.f ? "border-secondary shadow-card" : "border-border")}>
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="text-h4 text-foreground">{t.n}</h4>
                <span className="eyebrow">{t.f ? "Available now" : "Not live yet"}</span>
              </div>
              <p className="mt-4 flex items-baseline gap-1.5">
                <span className="text-[30px] leading-none font-semibold text-foreground">{t.p}</span>
                <span className="text-[12.5px] text-muted-foreground">{t.u}</span>
              </p>
              <p className="mt-4 text-[13.5px] leading-relaxed text-muted-foreground">{t.b}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="grid gap-5 sm:grid-cols-2">
  {plans.map((t) => (
    <div key={t.name} className={cn("rounded-2xl border bg-card p-7", t.featured ? "border-secondary shadow-card" : "border-border")}>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-h4 text-foreground">{t.name}</h3>
        <span className="eyebrow">{t.ribbon}</span>
      </div>
    </div>
  ))}
</div>`,
    },
    {
      id: "pricing-06",
      name: "Institutional enquiry",
      note: "For a B2B lane where the price is a conversation. States what is included instead of a number, and asks rather than sells.",
      preview: (
        <div className="rounded-panel border border-border bg-background-blush p-7">
          <span className="eyebrow">Campus and NGO</span>
          <h4 className="text-h3 mt-2 text-foreground">For institutions running health programmes</h4>
          <p className="mt-3 max-w-[52ch] text-[14px] leading-relaxed text-muted-foreground">
            We would love to hear what your programme needs. Nothing here is a fixed package, and we
            would rather shape it with you than sell you a tier.
          </p>
          <ul className="mt-5 grid list-none gap-2 p-0 text-[13.5px] text-muted-foreground sm:grid-cols-2">
            {[
              "Awareness sessions and workshops",
              "Onboarding support for students",
              "Aggregate, anonymised reporting",
              "A named point of contact",
            ].map((x) => (
              <li key={x} className="flex gap-2">
                <Check className="mt-px size-3.5 shrink-0 text-primary" aria-hidden="true" /> {x}
              </li>
            ))}
          </ul>
          <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-secondary">
            Start a conversation <ArrowRight className="size-4" aria-hidden="true" />
          </span>
        </div>
      ),
      code: `<div className="rounded-panel border border-border bg-background-blush p-7">
  <span className="eyebrow">Campus and NGO</span>
  <h2 className="text-h3 mt-2 text-foreground">For institutions running health programmes</h2>
  <ul className="mt-5 grid list-none gap-2 p-0 sm:grid-cols-2">{includes.map(...)}</ul>
</div>`,
    },
    {
      id: "pricing-07",
      name: "What free actually means",
      note: "A counter to the assumption that free costs something elsewhere. Each line answers a suspicion directly.",
      preview: (
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { t: "No ads", b: "Nothing is advertised to her, ever, on any screen." },
            { t: "No data selling", b: "Her logs are not a product, and are never sold or brokered." },
            { t: "No paywalled basics", b: "Logging, the calendar and the doctor report stay free." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-border bg-card p-5">
              <p className="text-[14.5px] font-semibold text-foreground">{x.t}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{x.b}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="grid gap-4 sm:grid-cols-3">
  {promises.map((x) => (
    <div key={x.title} className="rounded-2xl border border-border bg-card p-5">
      <p className="text-[14.5px] font-semibold text-foreground">{x.title}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{x.body}</p>
    </div>
  ))}
</div>`,
    },
    {
      id: "pricing-08",
      name: "Feature matrix, grouped",
      note: "A comparison table with category headers. Use once the feature list runs past about ten rows.",
      preview: (
        <div className="overflow-x-auto">
          <table className="w-full min-w-104 border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2.5 font-medium text-muted-foreground">Feature</th>
                <th className="w-20 py-2.5 font-medium text-muted-foreground">Free</th>
                <th className="w-20 py-2.5 font-medium text-muted-foreground">Plus</th>
              </tr>
            </thead>
            {[
              { g: "Logging", rows: [["Cycle and symptoms", true, true], ["Mood and sleep", true, true]] },
              { g: "Insight", rows: [["Sakhi AI", true, true], ["Deeper analysis", false, true]] },
            ].map((grp) => (
              /* One tbody per group: valid HTML, and it gives the group a real
                 element to hang its key on instead of a keyless fragment. */
              <tbody key={grp.g}>
                  <tr className="border-b border-border bg-muted/40">
                    <td colSpan={3} className="py-2 text-[11.5px] font-semibold tracking-wide text-muted-foreground uppercase">
                      {grp.g}
                    </td>
                  </tr>
                  {grp.rows.map((r) => (
                    <tr key={String(r[0])} className="border-b border-border">
                      <td className="py-2.5 text-foreground">{r[0]}</td>
                      <td className="py-2.5">{r[1] ? <Check className="size-4 text-primary" aria-label="Included" /> : <span className="text-muted-foreground">No</span>}</td>
                      <td className="py-2.5">{r[2] ? <Check className="size-4 text-primary" aria-label="Included" /> : <span className="text-muted-foreground">No</span>}</td>
                    </tr>
                  ))}
              </tbody>
            ))}
          </table>
        </div>
      ),
      code: `<table className="w-full min-w-104 border-collapse text-[13.5px]">
  <tbody>
    <tr className="border-b border-border bg-muted/40">
      <td colSpan={3} className="py-2 text-[11.5px] font-semibold tracking-wide text-muted-foreground uppercase">{group.label}</td>
    </tr>
    {group.rows.map((r) => <tr key={r.feature} className="border-b border-border">...</tr>)}
  </tbody>
</table>`,
    },
    {
      id: "pricing-09",
      name: "Price with a footnote",
      note: "For any figure that is planned rather than live. The caveat sits with the number, not in small print further down.",
      preview: (
        <div className="max-w-md">
          <p className="flex items-baseline gap-2">
            <span className="text-display leading-none text-foreground">&#8377;49</span>
            <span className="text-[14px] text-muted-foreground">/ month</span>
          </p>
          <p className="mt-3 border-l-2 border-border pl-3 text-[13px] leading-relaxed text-muted-foreground">
            This is an internal plan figure, not a live price. Nothing is purchasable in the app
            today.
          </p>
        </div>
      ),
      code: `<p className="mt-3 border-l-2 border-border pl-3 text-[13px] leading-relaxed text-muted-foreground">
  This is an internal plan figure, not a live price.
</p>`,
    },
    {
      id: "pricing-10",
      name: "Billing toggle",
      note: "Monthly and yearly. Keep the saving honest by showing the yearly total, not only the percentage.",
      preview: (
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex rounded-full border border-border bg-card p-1">
            {["Monthly", "Yearly"].map((t, i) => (
              <span
                key={t}
                className={cn(
                  "rounded-full px-4 py-1.5 text-[13px]",
                  i === 0 ? "bg-accent-faint font-semibold text-secondary" : "text-muted-foreground"
                )}
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-[12.5px] text-muted-foreground">
            Yearly would be &#8377;490, which is two months less than paying monthly.
          </p>
        </div>
      ),
      code: `<div className="inline-flex rounded-full border border-border bg-card p-1">
  <button className={cn("rounded-full px-4 py-1.5 text-[13px]", active ? "bg-accent-faint font-semibold text-secondary" : "text-muted-foreground")}>Monthly</button>
</div>`,
    },
  ],
};

export const ctaSpecimens: SpecimenGroup = {
  id: "cta",
  label: "Calls to action",
  blurb: "Every one of these is phrased as an invitation. Sakhi never instructs the reader, and never asks anyone to add a trusted person.",
  items: [
    {
      id: "cta-01",
      name: "Centred, dark band",
      note: "The page-closing CTA. Ink fill, one headline, the store buttons.",
      bleed: true,
      preview: (
        <div className="bg-ink px-8 py-12 text-center">
          <h3 className="text-h3 text-white">A friend in every cycle</h3>
          <p className="mx-auto mt-3 max-w-[40ch] text-[14.5px] text-white/70">
            Sakhi is free, and it would be lovely to have you along.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-ink">
            Download Sakhi
          </span>
        </div>
      ),
      code: `import { FinalCTA } from "@/components/ui/final-cta";

<FinalCTA />`,
    },
    {
      id: "cta-02",
      name: "Inline banner",
      note: "Mid-page nudge. Copy left, action right, one rule around it. Does not interrupt the reading flow.",
      preview: (
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-accent-faint px-6 py-5">
          <p className="text-[14.5px] text-foreground">
            Curious what Sakhi tracks? The health library covers all sixteen.
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-secondary no-underline hover:underline"
          >
            Explore <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      ),
      code: `<div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-accent-faint px-6 py-5">
  <p className="text-[14.5px] text-foreground">Copy.</p>
  <Link href="/health" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-secondary no-underline hover:underline">
    Explore <ArrowRight className="size-4" aria-hidden="true" />
  </Link>
</div>`,
    },
    {
      id: "cta-03",
      name: "Store buttons",
      note: "The App Store and Play pair. Flat black pill, no animated border.",
      preview: (
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <span className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white">
            App Store
          </span>
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-[15px] font-semibold text-foreground">
            Google Play
          </span>
        </div>
      ),
      code: `<a href={appStoreUrl} target="_blank" rel="noopener noreferrer"
   className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5">
  <AppleMark /> App Store
</a>`,
    },
    {
      id: "cta-04",
      name: "Split invitation",
      note: "Two lanes side by side when there is more than one way to help. Equal weight, no default choice.",
      preview: (
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              t: "Use Sakhi",
              b: "Download it, log a first day, and tell us what feels wrong. That is the most useful thing anyone can do.",
            },
            {
              t: "Spread the word",
              b: "If you know someone who has been told her pain is normal, she may find this useful.",
            },
            {
              t: "Partner with us",
              b: "We would love to hear from campuses and NGOs running health programmes.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
              <h4 className="text-h4 text-foreground">{c.t}</h4>
              <p className="mt-2 text-[14px] text-muted-foreground">{c.b}</p>
              <a
                href="#cta"
                className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-secondary no-underline hover:underline"
              >
                Start here <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      ),
      code: `<div className="grid gap-5 sm:grid-cols-2">
  {lanes.map((c) => (
    <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-h4 text-foreground">{c.title}</h3>
      <p className="mt-2 text-[14px] text-muted-foreground">{c.body}</p>
    </div>
  ))}
</div>`,
    },
    {
      id: "cta-05",
      name: "Contact line",
      note: "For a page whose only ask is an email. One address, stated plainly, no form.",
      preview: (
        <div className="text-center">
          <p className="text-[14.5px] text-muted-foreground">
            Questions, corrections or partnership ideas are always welcome.
          </p>
          <a
            href="#cta"
            className="mt-3 inline-flex items-center gap-2 text-[16px] font-semibold text-secondary no-underline hover:underline"
          >
            <Mail className="size-4" aria-hidden="true" /> hello@sakhiapp.in
          </a>
        </div>
      ),
      code: `<a href="mailto:hello@sakhiapp.in" className="inline-flex items-center gap-2 text-[16px] font-semibold text-secondary no-underline hover:underline">
  <Mail className="size-4" aria-hidden="true" /> hello@sakhiapp.in
</a>`,
    },
    {
      id: "cta-06",
      name: "Split, copy and store buttons",
      note: "Claim on the left, actions on the right. Reads as an offer rather than a demand because nothing is centred and shouting.",
      preview: (
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-panel border border-border bg-card p-7">
          <div className="min-w-0">
            <h4 className="text-h3 text-foreground">Sakhi is free, and always will be</h4>
            <p className="mt-2 max-w-[46ch] text-[14px] leading-relaxed text-muted-foreground">
              Logging, the calendar, Sakhi AI and the doctor report, with no ads anywhere.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <span className="rounded-full bg-ink px-6 py-3 text-[14px] font-semibold text-white">App Store</span>
            <span className="rounded-full border border-border px-6 py-3 text-[14px] font-semibold text-foreground">Google Play</span>
          </div>
        </div>
      ),
      code: `<div className="flex flex-wrap items-center justify-between gap-6 rounded-panel border border-border bg-card p-7">
  <div className="min-w-0">
    <h2 className="text-h3 text-foreground">Sakhi is free, and always will be</h2>
  </div>
  <StoreButtons />
</div>`,
    },
    {
      id: "cta-07",
      name: "Quiet text link",
      note: "The lightest ask on the site. For the end of an article where a button would be too loud.",
      preview: (
        <p className="text-[14.5px] leading-relaxed text-muted-foreground">
          If this was useful, the health library covers all sixteen conditions in the same detail.{" "}
          <a href="#cta" className="font-semibold text-secondary no-underline hover:underline">
            Have a read
          </a>
          .
        </p>
      ),
      code: `<p className="text-[14.5px] leading-relaxed text-muted-foreground">
  Sentence leading in.{" "}
  <Link href="/health" className="font-semibold text-secondary no-underline hover:underline">Have a read</Link>.
</p>`,
    },
    {
      id: "cta-08",
      name: "Sticky mobile bar",
      note: "Pinned to the bottom on phones only. One action, dismissible, and never covering the content it is asking about.",
      preview: (
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-3 shadow-card">
          <p className="min-w-0 text-[13.5px] text-foreground">Sakhi is free on the App Store</p>
          <span className="shrink-0 rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-white">
            Get it
          </span>
        </div>
      ),
      code: `<div className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-3 shadow-card md:hidden">
  <p className="min-w-0 text-[13.5px] text-foreground">Sakhi is free on the App Store</p>
  <a href={appStoreUrl} className="shrink-0 rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-white">Get it</a>
</div>`,
    },
    {
      id: "cta-09",
      name: "Question prompt",
      note: "Opens a conversation instead of pushing a download. Suited to a story or vision page where the reader is not shopping.",
      preview: (
        <div className="mx-auto max-w-xl text-center">
          <h4 className="text-h3 text-foreground">
            Is there something Sakhi <GradientText>should be doing</GradientText>
          </h4>
          <p className="mx-auto mt-3 max-w-[46ch] text-[14px] leading-relaxed text-muted-foreground">
            If something here is wrong, or missing, or does not match your experience, we would be
            grateful to hear it.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-[14px] font-semibold text-foreground">
            <Mail className="size-4 text-secondary" aria-hidden="true" /> Write to us
          </span>
        </div>
      ),
      code: `<div className="mx-auto max-w-xl text-center">
  <h2 className="text-h3 text-foreground">Is there something Sakhi <GradientText>should be doing</GradientText></h2>
  <a href="mailto:hello@sakhiapp.in" className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-[14px] font-semibold text-foreground">
    <Mail className="size-4 text-secondary" aria-hidden="true" /> Write to us
  </a>
</div>`,
    },
    {
      id: "cta-10",
      name: "Next page pointer",
      note: "Hands the reader onward rather than out. Use at the foot of a page that is one step in a sequence.",
      preview: (
        <a
          href="#cta"
          className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-background-blush p-6 no-underline transition-colors hover:border-secondary/40"
        >
          <span>
            <span className="eyebrow">Next</span>
            <span className="mt-1 block text-h4 text-foreground">Where Sakhi is going</span>
            <span className="mt-1 block text-[13.5px] text-muted-foreground">
              The roadmap, and what we are working toward.
            </span>
          </span>
          <ArrowRight className="size-5 shrink-0 text-secondary" aria-hidden="true" />
        </a>
      ),
      code: `<Link href="/vision" className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-background-blush p-6 no-underline hover:border-secondary/40">
  <span>
    <span className="eyebrow">Next</span>
    <span className="mt-1 block text-h4 text-foreground">Where Sakhi is going</span>
  </span>
  <ArrowRight className="size-5 shrink-0 text-secondary" aria-hidden="true" />
</Link>`,
    },
  ],
};

export const faqSpecimens: SpecimenGroup = {
  id: "faq",
  label: "FAQ",
  blurb: "Answers. On a health product these carry real weight, so none of them may overclaim, and the diagnosis question always gets a direct no.",
  items: [
    {
      id: "faq-01",
      name: "Accordion",
      note: "The default. One open at a time, chevron on the right. Uses the shared Accordion.",
      preview: (
        <div className="divide-y divide-border border-y border-border">
          {["Is Sakhi free?", "Can Sakhi diagnose a condition?"].map((q, i) => (
            <div key={q} className="py-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[14.5px] font-semibold text-foreground">{q}</p>
                <span className="text-muted-foreground" aria-hidden="true">
                  {i === 0 ? "−" : "+"}
                </span>
              </div>
              {i === 0 && (
                <p className="mt-2 max-w-[60ch] text-[14px] leading-relaxed text-muted-foreground">
                  Yes. Cycle logging, the calendar, Sakhi AI and the doctor report are all free, and
                  there are no ads.
                </p>
              )}
            </div>
          ))}
        </div>
      ),
      code: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

<Accordion type="single" collapsible>
  {faqs.map((f) => (
    <AccordionItem key={f.q} value={f.q}>
      <AccordionTrigger>{f.q}</AccordionTrigger>
      <AccordionContent>{f.a}</AccordionContent>
    </AccordionItem>
  ))}
</Accordion>`,
    },
    {
      id: "faq-02",
      name: "Two column, always open",
      note: "Nothing hidden. Best when there are six or fewer and every answer matters.",
      preview: (
        <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {[
            {
              q: "Who can see what she logs?",
              a: "Only her. Nothing is shared with anyone unless she chooses to invite one trusted person, and she can remove that access at any time.",
            },
            {
              q: "Does it work without internet?",
              a: "Yes. Sakhi is offline-first, so logging never depends on signal and her history stays on her device first.",
            },
            {
              q: "Is Sakhi free?",
              a: "Yes. Logging, the calendar, Sakhi AI and the doctor report are all free, and there are no ads.",
            },
            {
              q: "Can Sakhi diagnose a condition?",
              a: "No. Sakhi is not a doctor and does not diagnose anything. It helps her notice patterns and carry a clear history into an appointment.",
            },
          ].map((f) => (
            <div key={f.q}>
              <p className="text-[14.5px] font-semibold text-foreground">{f.q}</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
  {faqs.map((f) => (
    <div key={f.q}>
      <p className="text-[14.5px] font-semibold text-foreground">{f.q}</p>
      <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">{f.a}</p>
    </div>
  ))}
</div>`,
    },
    {
      id: "faq-03",
      name: "Grouped by topic",
      note: "A label column beside each cluster. Use once the list passes ten questions.",
      preview: (
        <div className="space-y-7">
          {[
            {
              g: "Privacy",
              qs: [
                "Who can see what she logs?",
                "Is any of her data sold or shared?",
                "What happens if she deletes the app?",
              ],
            },
            {
              g: "The app",
              qs: ["Is Sakhi free?", "Does it work without internet?"],
            },
          ].map((grp) => (
            <div key={grp.g} className="grid gap-3 sm:grid-cols-[9rem_minmax(0,1fr)]">
              <p className="eyebrow pt-3">{grp.g}</p>
              <div className="divide-y divide-border border-y border-border">
                {grp.qs.map((q) => (
                  <p key={q} className="py-3 text-[14px] text-foreground">
                    {q}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
      code: `<div className="grid gap-6 sm:grid-cols-[10rem_minmax(0,1fr)]">
  <p className="eyebrow">{group.label}</p>
  <div className="divide-y divide-border border-y border-border">
    {group.items.map((q) => <p key={q} className="py-3 text-[14px] text-foreground">{q}</p>)}
  </div>
</div>`,
    },
    {
      id: "faq-04",
      name: "Numbered Q and A",
      note: "Question as a heading with a counter beside it. Reads as a document rather than a widget, which suits a policy or consent page.",
      preview: (
        <div className="space-y-6">
          {[
            { q: "What is Be Her Sakhi?", a: "An optional way for one person she trusts to understand her better. Entirely her decision, never required, and reversible at any time." },
            { q: "Is it ever automatic?", a: "No. Nothing is shared unless she chooses to share it." },
          ].map((f, i) => (
            <div key={f.q} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4">
              <span className="font-mono text-[13px] text-primary/60 tabular-nums">
                0{i + 1}
              </span>
              <div>
                <p className="text-[15px] font-semibold text-foreground">{f.q}</p>
                <p className="mt-1.5 max-w-[62ch] text-[14px] leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
      code: `<div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4">
  <span className="font-mono text-[13px] text-primary/60 tabular-nums">01</span>
  <div>
    <p className="text-[15px] font-semibold text-foreground">{f.q}</p>
    <p className="mt-1.5 max-w-[62ch] text-[14px] leading-relaxed text-muted-foreground">{f.a}</p>
  </div>
</div>`,
    },
    {
      id: "faq-05",
      name: "Question cards",
      note: "Each answer in its own card. Better than an accordion when answers are short and worth scanning side by side.",
      preview: (
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { q: "Is Sakhi free?", a: "Yes, and there are no ads anywhere in the app." },
            { q: "Does it work offline?", a: "Yes. Logging never waits for signal." },
            { q: "Which conditions does it track?", a: "Sixteen, across hormonal, pain, mental health, reproductive and systemic groups." },
            { q: "Is there an Android version?", a: "Yes. Android support ships with v2." },
          ].map((f) => (
            <div key={f.q} className="rounded-2xl border border-border bg-card p-5">
              <p className="text-[14.5px] font-semibold text-foreground">{f.q}</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="grid gap-4 sm:grid-cols-2">
  {faqs.map((f) => (
    <div key={f.q} className="rounded-2xl border border-border bg-card p-5">
      <p className="text-[14.5px] font-semibold text-foreground">{f.q}</p>
      <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{f.a}</p>
    </div>
  ))}
</div>`,
    },
    {
      id: "faq-06",
      name: "Split, intro and list",
      note: "A standing heading on the left with the questions on the right. Gives the section a landing point on a wide page.",
      preview: (
        <div className="grid gap-8 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <span className="eyebrow">Questions</span>
            <h4 className="text-h3 mt-3 text-foreground">Before you ask</h4>
            <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
              If something is still unclear, we would love to hear from you.
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {["Is Sakhi free?", "Who can see her logs?", "Does it diagnose?"].map((q) => (
              <p key={q} className="py-3.5 text-[14.5px] text-foreground">
                {q}
              </p>
            ))}
          </div>
        </div>
      ),
      code: `<div className="grid gap-8 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
  <div>
    <span className="eyebrow">Questions</span>
    <h2 className="text-h3 mt-3 text-foreground">Before you ask</h2>
  </div>
  <Accordion type="single" collapsible>{...}</Accordion>
</div>`,
    },
    {
      id: "faq-07",
      name: "Answer with source",
      note: "For any claim that needs backing. The source line is part of the answer, not a footnote, because an unsourced number on a health page is a liability.",
      preview: (
        <div className="max-w-[62ch]">
          <p className="text-[14.5px] font-semibold text-foreground">
            How common is PCOS in India?
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
            Estimates vary widely by region and by the criteria used, which is part of the problem.
          </p>
          <p className="mt-2.5 border-l-2 border-border pl-3 text-[12.5px] text-muted-foreground">
            Source needed, verify before publishing.
          </p>
        </div>
      ),
      code: `<p className="mt-2.5 border-l-2 border-border pl-3 text-[12.5px] text-muted-foreground">
  <a href={sourceUrl} className="text-secondary no-underline hover:underline">{sourceName}</a>, {date}
</p>`,
    },
    {
      id: "faq-08",
      name: "Searchable FAQ",
      note: "A filter above the list. Worth adding past about fifteen questions, and it needs an empty state for a query that matches nothing.",
      preview: (
        <div className="max-w-xl">
          <div className="relative">
            <input
              placeholder="Search questions"
              aria-label="Search questions"
              className="w-full rounded-full border border-border bg-card px-5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="mt-4 divide-y divide-border border-y border-border">
            {["Is Sakhi free?", "Who can see what she logs?", "Does it work offline?"].map((q) => (
              <p key={q} className="py-3 text-[14px] text-foreground">
                {q}
              </p>
            ))}
          </div>
        </div>
      ),
      code: `const shown = faqs.filter((f) => f.q.toLowerCase().includes(query.toLowerCase()));
// Always render an empty state when shown.length === 0.`,
    },
    {
      id: "faq-09",
      name: "Answer with a link out",
      note: "For a question whose full answer lives on another page. Answer briefly first, then point, never point only.",
      preview: (
        <div className="max-w-[62ch]">
          <p className="text-[14.5px] font-semibold text-foreground">What is Be Her Sakhi?</p>
          <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
            It is an optional way for one person she trusts to understand her better. It is entirely
            her decision, it is never required, and it can be turned off whenever she wants.
          </p>
          <a
            href="#faq"
            className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-secondary no-underline hover:underline"
          >
            How it works <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      ),
      code: `<Link href="/features#be-her-sakhi" className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-secondary no-underline hover:underline">
  How it works <ArrowRight className="size-3.5" aria-hidden="true" />
</Link>`,
    },
    {
      id: "faq-10",
      name: "Still have a question",
      note: "The closing row of an FAQ. Offers a way through rather than leaving a reader stuck, and asks nothing else of them.",
      preview: (
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-accent-faint px-6 py-5">
          <p className="text-[14.5px] text-foreground">
            Still have a question we have not answered here?
          </p>
          <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-secondary">
            <Mail className="size-4" aria-hidden="true" /> hello@sakhiapp.in
          </span>
        </div>
      ),
      code: `<div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-accent-faint px-6 py-5">
  <p className="text-[14.5px] text-foreground">Still have a question we have not answered here?</p>
  <a href="mailto:hello@sakhiapp.in" className="inline-flex items-center gap-2 text-[14px] font-semibold text-secondary no-underline hover:underline">
    <Mail className="size-4" aria-hidden="true" /> hello@sakhiapp.in
  </a>
</div>`,
    },
  ],
};
