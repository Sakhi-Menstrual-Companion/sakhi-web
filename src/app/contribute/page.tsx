import type { Metadata } from "next";
import { Download, Handshake, Mail, Megaphone } from "lucide-react";

import { Container, DotGrid, GradientText, Section, SectionHeading } from "@/components/ui/section";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export const metadata: Metadata = {
  title: "Join Us, Sakhi",
  description: "Three ways to support Sakhi, download and use, become a campus ambassador, or partner with us.",
};

const ways = [
  {
    id: "download",
    icon: Download,
    num: "01",
    title: "Download & use",
    body: "Be an early user. Your experience shapes the future of Sakhi. Every log, every bug report, every moment of 'this doesn't feel right' makes Sakhi better for the next woman.",
    cta: "Download Sakhi",
    href: "https://apps.apple.com/app/id6742219623",
    external: true,
  },
  {
    id: "ambassador",
    icon: Megaphone,
    num: "02",
    title: "Campus ambassador",
    body: "Bring Sakhi to your campus. Every college has women who need this. We support our campus ambassadors with resources, recognition, and a community building something meaningful together.",
    cta: "Become an ambassador",
    href: "mailto:contact@sakhiapp.in",
    external: false,
  },
  {
    id: "partner",
    icon: Handshake,
    num: "03",
    title: "Partner with us",
    body: "For institutions, companies, and brands. Sakhi works with universities and corporations to bring women's health infrastructure to campuses and workplaces.",
    cta: "Get in touch",
    href: "mailto:contact@sakhiapp.in",
    external: false,
  },
];

export default function ContributePage() {
  return (
    <div>
      {/* Hero, variant: "segmented wayfinding" (pricing-page-tabs style) —
          the three options are pill quick-links right in the hero, so a
          visitor picks a lane before they even scroll instead of after. */}
      <section className="relative overflow-hidden border-b border-border bg-background px-6 pb-20 sm:px-8 sm:pb-24">
        <DotGrid />
        <Spotlight className="-top-32 left-1/2 -translate-x-1/2" fill="var(--primary)" />
        <Container className="relative z-10 flex flex-col items-center pt-[calc(var(--nav-clearance)+3.5rem)] text-center sm:pt-[calc(var(--nav-clearance)+5.5rem)]">
          <span className="eyebrow">Join the mission</span>
          <h1 className="text-h1 mt-5 max-w-[18ch] text-foreground">
            Join the <GradientText>Sakhi mission</GradientText>
          </h1>
          <p className="text-lead mt-6 max-w-[40rem] text-muted-foreground">
            Three ways to be part of something that genuinely matters, for women across India.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {ways.map((w) => (
              <a
                key={w.id}
                href={`#${w.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-[13.5px] font-semibold text-foreground no-underline transition-colors duration-200 hover:border-secondary/40 hover:text-secondary"
              >
                <w.icon className="size-4 text-secondary" aria-hidden="true" />
                {w.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------------- three ways */}
      <Section>
        <Container>
          <SectionHeading title="How you can help" />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {ways.map((w) => (
              <div
                key={w.title}
                id={w.id}
                className="flex scroll-mt-[calc(var(--nav-clearance)+1rem)] flex-col rounded-2xl border border-border bg-card p-8 transition-[transform,border-color,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover"
              >
                <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-[13px] font-bold text-transparent">
                  {w.num}
                </span>
                <h3 className="text-h4 mt-4 text-foreground">{w.title}</h3>
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

      {/* ------------------------------------------------------------- for campuses */}
      <Section tone="blush">
        <Container>
          <div className="mx-auto max-w-[42rem]">
            <HoverBorderGradient
              as="div"
              duration={2200}
              containerClassName="rounded-2xl p-[1.5px] w-full"
              className="flex w-full flex-col items-stretch rounded-2xl bg-card px-9 py-10 text-left sm:px-12 sm:py-12"
            >
              <span className="eyebrow">For universities</span>
              <h2 className="text-h3 mt-4 text-foreground">Sakhi for your campus</h2>
              <p className="mt-3 text-[15px] font-medium text-secondary">₹50,000 – ₹1,00,000 per year</p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                A complete women&rsquo;s health program for your institution. Cycle tracking, AI-powered
                insights, Doctor Reports, and care infrastructure built for college life. Over 50,000
                women across India study at campuses with no structured menstrual health support. Sakhi
                changes that.
              </p>
              <a
                href="mailto:contact@sakhiapp.in"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-6 py-3 text-[14px] font-semibold text-secondary-foreground no-underline transition-colors duration-200 hover:bg-[#b8005f]"
              >
                Talk to us →
              </a>
            </HoverBorderGradient>
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- for companies */}
      <Section>
        <Container>
          <div className="mx-auto max-w-[42rem] rounded-2xl border border-border bg-card p-9 sm:p-12">
            <span className="eyebrow">For companies</span>
            <h2 className="text-h3 mt-4 text-foreground">Healthy employees build better companies</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Bring Sakhi to your female employees. Real health support, not generic wellness noise.
              Women who understand their health take fewer unplanned sick days, communicate better
              about their needs, and feel more supported at work. Sakhi is wellness that actually
              works.
            </p>
            <a
              href="mailto:contact@sakhiapp.in"
              className="mt-6 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-secondary no-underline underline-offset-[3px] hover:underline"
            >
              Corporate enquiry →
            </a>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------------ contact */}
      <section className="relative overflow-hidden bg-ink px-6 py-24 text-center sm:px-8 sm:py-28">
        <Spotlight className="top-0 left-1/2 -translate-x-1/2" fill="var(--secondary)" />
        <Container className="relative z-10">
          <p className="text-[15px] text-white/60">Questions? Partnerships? Just want to talk?</p>
          <a
            href="mailto:contact@sakhiapp.in"
            className="mt-4 inline-flex items-center gap-2.5 text-[26px] font-medium text-white no-underline transition-colors duration-200 hover:text-primary-soft sm:text-[32px]"
          >
            <Mail className="size-6" aria-hidden="true" /> contact@sakhiapp.in
          </a>
          <p className="mt-4 text-[13px] text-white/50">We respond within 24 hours.</p>
        </Container>
      </section>
    </div>
  );
}
