import type { Metadata } from "next";
import { LifeBuoy, Mail, ShieldAlert } from "lucide-react";

import { Container, GradientText, PageHero, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Support - Sakhi",
  description:
    "How to reach the people who build Sakhi, what to send so we can help quickly, and what to do in an emergency.",
  alternates: { canonical: "/support" },
};

/*
 * Apple requires a support URL that loads without a login before an app can be
 * reviewed, and Play asks for the same. This page exists to be that URL, so it
 * is deliberately plain: one address, what to put in the message, and how long
 * an answer takes.
 *
 * The address is contact@sakhiapp.in, the same one the privacy policy and the
 * apps now use. It used to differ from the apps, which said hello@getswipe.in
 * in 28 places, and a support page that disagrees with the app it supports is
 * worse than no support page.
 */

const lastUpdated = "September 18, 2026";

const CONTACT_EMAIL = "contact@sakhiapp.in";

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-8 sm:p-10">
      <div className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-faint text-secondary">
        {icon}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-h4 text-foreground">{title}</h2>
        <div className="flex flex-col gap-4 text-[18px] leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function SupportPage() {
  return (
    <div>
      <PageHero
        eyebrow="Support"
        title={
          <>
            Something not working? <GradientText>Tell us.</GradientText>
          </>
        }
        lead="Sakhi is made by a small team, and a real person reads every message. Here is how to reach us and what helps us help you faster."
      >
        <p className="text-[13px] text-muted-foreground">Last updated: {lastUpdated}</p>
      </PageHero>

      <Section>
        <Container className="max-w-208">
          <div className="flex flex-col gap-6">
            <Card icon={<Mail className="size-5" aria-hidden="true" />} title="Write to us">
              <p>
                Email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-secondary underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                and we will get back to you. We aim to answer within two working days. If
                something is broken badly enough that you cannot use the app at all, please say
                so in the subject line and we will look at it first.
              </p>
              <p>
                You do not need an account to write to us, and you do not need to have bought
                anything.
              </p>
            </Card>

            <Card
              icon={<LifeBuoy className="size-5" aria-hidden="true" />}
              title="What to include"
            >
              <p>
                None of this is required. It just saves us writing back to ask, which is usually
                the slowest part.
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Your phone or tablet, and which version of iOS or Android it runs.",
                  "The version of Sakhi, which is at the bottom of Profile, under About.",
                  "What you were doing when it went wrong, and what you expected instead.",
                  "A screenshot or a screen recording, if it is something you can see.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 size-1 shrink-0 rounded-full bg-secondary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Please do not send us your password or an OTP. Nobody from Sakhi will ever ask
                you for either.
              </p>
            </Card>

            <Card
              icon={<ShieldAlert className="size-5" aria-hidden="true" />}
              title="If you need help right now"
            >
              <p>
                Sakhi is not an emergency service and we cannot answer quickly enough to be one.
                If you are in danger or need medical help, please call the emergency services.
                In India that is <strong className="text-foreground">112</strong> for police,{" "}
                <strong className="text-foreground">108</strong> for an ambulance, and{" "}
                <strong className="text-foreground">181</strong> for the women&apos;s helpline.
              </p>
              <p>
                Sakhi is also not a substitute for a doctor. What the app shows you about your
                cycle is an estimate based on what you have logged, and it should not be used to
                diagnose anything or to prevent or plan a pregnancy on its own.
              </p>
            </Card>

            <Card icon={<Mail className="size-5" aria-hidden="true" />} title="Your data">
              <p>
                To ask what we hold about you, to correct it, or to have it deleted, write to the
                same address. Deleting your account is something you can also do yourself, from
                inside the app or from{" "}
                <a href="/delete-account" className="text-secondary underline underline-offset-2">
                  this page
                </a>
                .
              </p>
              <p>
                Our{" "}
                <a href="/privacy" className="text-secondary underline underline-offset-2">
                  privacy policy
                </a>{" "}
                explains what we collect and who it goes to, and our{" "}
                <a href="/terms" className="text-secondary underline underline-offset-2">
                  terms
                </a>{" "}
                cover the rest.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
