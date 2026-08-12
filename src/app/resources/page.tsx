import type { Metadata } from "next";
import { Download, Handshake, Mail, Megaphone } from "lucide-react";

import { Container, GradientText, PageHero, Section, SectionHeading } from "@/components/ui/section";
import { SectionNav } from "@/components/ui/section-nav";

export const metadata: Metadata = {
  title: "Resources - Sakhi",
  description:
    "Ways to be part of Sakhi. Use it, bring it to your campus, partner with us, or write to us for a press kit.",
  alternates: { canonical: "/resources" },
};

/*
 * Was three pages: /contribute, /brand, /press. Merged as one page for
 * everyone who is not just here to use the app, someone deciding whether to
 * partner, cover, or help spread it.
 *
 * The brand system that used to sit in the middle of this page (the palette,
 * the type scale, the voice traits, the taglines, the logo rules) is gone.
 * It was a design-system reference wedged between "how you can help" and
 * "where we have been covered", so a reader who came to partner or write
 * about Sakhi had to scroll past six sections of colour swatches to reach
 * either. That material lives at /design-system now.
 *
 * The closing band used to be its own dark, full-bleed "Questions,
 * partnerships, or press?" section. The site now has one shared dark closing
 * band (AppDownloadBand, rendered once in the root layout above the footer),
 * so a second one here stacked two dark sections back to back. This page
 * still needs its own contact point, partners and press write in, not
 * download the app, so that stays, just as a quiet section rather than a
 * competing dark band.
 *
 * Old URLs redirect here with an anchor (next.config.ts), including the
 * in-page ids the Contribute cards used to be (#download, #ambassador,
 * #partner), which still resolve to the same cards below.
 */

const ways = [
  {
    id: "download",
    icon: Download,
    title: "Download & use",
    body: "Be an early user. Every log, every bug report, every moment of 'this doesn't feel right' makes Sakhi better for the next woman.",
    cta: "Download Sakhi",
    href: "https://apps.apple.com/app/id6742219623",
    external: true,
  },
  {
    id: "ambassador",
    icon: Megaphone,
    title: "Campus ambassador",
    body: "Bring Sakhi to your campus. We support our ambassadors with resources, recognition, and a community building something meaningful together.",
    cta: "Become an ambassador",
    href: "mailto:contact@sakhiapp.in",
    external: false,
  },
  {
    id: "partner",
    icon: Handshake,
    title: "Partner with us",
    body: "For institutions, companies, and brands. Sakhi works with universities and companies to bring women's health support to campuses and workplaces.",
    cta: "Get in touch",
    href: "mailto:contact@sakhiapp.in",
    external: false,
  },
];

/* No claim in here that doesn't already appear, sourced, elsewhere on the
   site (the 150M / 16-conditions figures live on the Health Library and
   About pages). This section used to carry two unsourced numbers, a 50,000
   campus-population figure and a claim about sick days, per this repo's own
   rule those don't go in without a source, so they are gone rather than
   quietly repeated. */
const partnerships = [
  {
    audience: "For universities",
    title: "Sakhi for your campus",
    body: "A complete women's health program for your institution. Cycle tracking, Sakhi AI, Doctor Reports, and care infrastructure built for college life, the way Galgotias University already has it.",
    cta: "Talk to us",
  },
  {
    audience: "For companies",
    title: "A real benefit, not wellness noise",
    body: "Bring Sakhi to your female employees. A private, judgement-free way for your team to understand their own health, on their own time, not a generic wellness perk nobody opens twice.",
    cta: "Corporate enquiry",
  },
];

const pressItems = [
  {
    publication: "Times of India",
    date: "Q4 2024",
    description: "National coverage of a student-built women's health app from Galgotias University.",
  },
  {
    publication: "Apple Success Story",
    date: "Sep 2025",
    description: "Apple selected Sakhi's journey for a global Success Story feature, with a photoshoot on the Galgotias campus.",
  },
  {
    publication: "UP International Trade Show",
    date: "Q4 2024",
    description: "Sakhi represented Indian health technology at one of the state's largest trade and innovation showcases.",
  },
  {
    publication: "Greg Joswiak, Apple SVP",
    date: "Q4 2024",
    description: "Sakhi was presented directly to Apple's Senior Vice President of Worldwide Marketing.",
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Get involved"
        title={
          <>
            Join the <GradientText>Sakhi mission</GradientText>
          </>
        }
        lead="Three ways to be part of something that matters, for women across India."
      >
        <SectionNav
          items={[
            { href: "#contribute", label: "Get Involved" },
            { href: "#partners", label: "Partner" },
            { href: "#press", label: "Press" },
          ]}
        />
      </PageHero>

      {/* ============================================================ CONTRIBUTE */}
      <Section id="contribute">
        <Container>
          <SectionHeading title="How you can help" />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {ways.map((w) => (
              <div
                key={w.title}
                id={w.id}
                className="group flex scroll-mt-[calc(var(--nav-clearance)+1rem)] flex-col rounded-2xl border border-border bg-card p-8 transition-transform duration-300 ease-(--ease-out-soft) hover:-translate-y-1"
              >
                <div className="inline-flex size-10 w-fit items-center justify-center rounded-xl bg-accent-faint text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                  <w.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-h4 mt-5 text-foreground">{w.title}</h3>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-muted-foreground">{w.body}</p>
                <a
                  href={w.href}
                  target={w.external ? "_blank" : undefined}
                  rel={w.external ? "noopener noreferrer" : undefined}
                  className="mt-6 text-[14px] font-semibold text-secondary no-underline underline-offset-[3px] hover:underline"
                >
                  {w.cta} →
                </a>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------- work with us
          Was two full-height bands, one card each, and the two cards did not
          match: the campus one sat inside an animated gradient border and the
          company one inside a plain grey card, for two offers at the same
          level. They are one section and one card style now, side by side,
          which is also how a reader compares them. */}
      <Section id="partners" tone="blush">
        <Container>
          <SectionHeading
            eyebrow="Institutions"
            title="Bring Sakhi to your people"
            lead="Two ways an institution can put real women's health support in front of the people it is responsible for."
            align="left"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {partnerships.map((p) => (
              <article
                key={p.audience}
                className="flex flex-col rounded-3xl border border-border bg-card p-9 sm:p-10"
              >
                <span className="eyebrow">{p.audience}</span>
                <h3 className="text-h3 mt-4 text-foreground">{p.title}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
                <a
                  href="mailto:contact@sakhiapp.in"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-6 py-3 text-[14px] font-semibold text-secondary-foreground no-underline transition-colors duration-200 hover:bg-[#b8005f]"
                >
                  {p.cta} →
                </a>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* =============================================================== PRESS
          Was Aceternity's scroll-driven Timeline, built for a long
          chronological sequence (it works well on About's decade-spanning
          history). Four short mentions in that machinery, two sharing the
          exact label "Q4 2024" as separate rows, read as sparse rather than
          eventful. A flat card grid says the same four things without
          borrowing a component built for a much longer list. */}
      <Section id="press">
        <Container>
          <SectionHeading
            eyebrow="Press"
            title="Sakhi in the world"
            lead="We didn't chase press. We built something worth talking about."
            align="left"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {pressItems.map((item) => (
              <div key={item.publication} className="rounded-2xl border border-border bg-card p-7">
                <span className="text-[13px] font-semibold text-secondary">{item.date}</span>
                <h3 className="text-h4 mt-2 text-foreground">{item.publication}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ================================================ ONE CLOSING CONTACT
          Covers all three reasons someone ends up here: partnering, brand
          assets, or a press kit. Light, not the dark full-bleed band this
          used to be, so it does not compete with the shared AppDownloadBand
          immediately below it. */}
      <Section>
        <Container className="max-w-2xl text-center">
          <span className="eyebrow">Get in touch</span>
          <h2 className="text-h2 mt-4 text-foreground">
            Questions, partnerships, <GradientText>or press?</GradientText>
          </h2>
          <p className="text-lead mx-auto mt-5 max-w-152 text-muted-foreground">
            Brand assets, product screenshots, founder bios, and the full Sakhi story, ready to
            send over. Write to us for any of it.
          </p>
          <a
            href="mailto:contact@sakhiapp.in"
            className="mt-9 inline-flex items-center gap-2.5 text-[24px] font-medium text-foreground no-underline transition-colors duration-200 hover:text-secondary sm:text-[28px]"
          >
            <Mail className="size-6 text-secondary" aria-hidden="true" /> contact@sakhiapp.in
          </a>
          <p className="mt-4 text-[13px] text-muted-foreground">We respond within 24 hours.</p>
        </Container>
      </Section>
    </div>
  );
}
