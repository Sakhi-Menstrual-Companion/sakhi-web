import type { Metadata } from "next";
import { ScrollText } from "lucide-react";

import { Container, GradientText, PageHero, Section } from "@/components/ui/section";
import { SectionNav } from "@/components/ui/section-nav";

export const metadata: Metadata = {
  title: "Terms of Service - Sakhi",
  description:
    "The agreement between you and Sakhi: what the app is, what it is not, and what each of us is responsible for.",
  alternates: { canonical: "/terms" },
};

/*
 * Apple needs a terms URL that loads without a login before review, and Play
 * asks for the same. Written to match what the app actually does rather than a
 * generic template: phone and OTP sign-in, one device at a time, data in
 * Supabase with an offline copy on the device, and a trusted-person feature
 * that is voluntary on both sides.
 *
 * The medical disclaimer is deliberately early rather than buried at the end.
 * For a cycle app it is the single most important thing in here.
 */

const lastUpdated = "September 18, 2026";

const CONTACT_EMAIL = "contact@teamsakhi.com";

const sections = [
  { href: "#not-medical", label: "Not Medical Advice" },
  { href: "#account", label: "Your Account" },
  { href: "#trusted", label: "Trusted People" },
];

function TermsSection({
  number,
  id,
  title,
  children,
}: {
  number: string;
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-[calc(var(--nav-clearance)+1.5rem)] border-t border-border pt-16 first:border-0 first:pt-0"
    >
      <div className="flex items-center gap-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-faint text-[13px] font-bold text-secondary tabular-nums">
          {number}
        </span>
        <h2 className="text-h3 text-foreground">{title}</h2>
      </div>
      <div className="mt-7 flex flex-col gap-6 text-[18px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function TermsList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-2 size-1 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
          <span className="text-[18px] leading-relaxed text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            The agreement, <GradientText>in plain words.</GradientText>
          </>
        }
        lead="What Sakhi is, what it is not, and what you and we are each responsible for. Written to be read, not to be skipped."
      >
        <p className="text-[13px] text-muted-foreground">Last updated: {lastUpdated}</p>
        <SectionNav items={sections} />
      </PageHero>

      <Section>
        <Container className="max-w-208">
          <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-faint text-secondary">
              <ScrollText className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="eyebrow text-secondary">The short version</p>
              <p className="mt-3 text-[18px] leading-relaxed text-foreground">
                Sakhi helps you understand your cycle. It is not a doctor and it is not
                contraception. Your data is yours, you can leave at any time, and anything you
                share with a trusted person is shared only because you chose to.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-16">
            <TermsSection number="1" id="agreement" title="This agreement">
              <p>
                These terms are between you and Rachna Infotech LLP, which builds and runs Sakhi.
                By creating an account or using the app you agree to them. If you do not, please
                do not use Sakhi.
              </p>
              <p>
                We may change these terms when the app changes. If a change matters to you we will
                tell you in the app before it takes effect, and the date at the top of this page
                will move. Carrying on using Sakhi after that means the new terms apply.
              </p>
              <p>
                You need to be at least 13 to use Sakhi. If you are under 18, please read this
                with a parent or guardian.
              </p>
            </TermsSection>

            <TermsSection number="2" id="not-medical" title="Sakhi is not medical advice">
              <p>
                This is the most important section here, so it is near the top rather than at the
                bottom.
              </p>
              <p>
                Sakhi is a tracking and wellbeing app. It is not a medical device, it does not
                diagnose anything, and nothing it shows you is a clinical opinion. What it tells
                you about your cycle, your phase, your fertile window or your ovulation day is an
                estimate worked out from the dates you have logged. Estimates from dates alone
                cannot pinpoint ovulation, however many cycles you have tracked.
              </p>
              <TermsList
                items={[
                  "Do not use Sakhi to prevent a pregnancy. It is not contraception and it is not a fertility-awareness method.",
                  "Do not use Sakhi to plan a pregnancy on its own. Talk to a doctor.",
                  "Do not delay speaking to a doctor because of something Sakhi showed you.",
                  "If you are in danger or need urgent medical help, call the emergency services. In India that is 112 for police, 108 for an ambulance and 181 for the women's helpline.",
                ]}
              />
              <p>
                Any food, rest or wellbeing suggestion in the app is general information, not a
                prescription, and it is not tailored to any condition you may have.
              </p>
            </TermsSection>

            <TermsSection number="3" id="account" title="Your account">
              <p>
                You sign in with your phone number and a one-time code. Keep that number and those
                codes to yourself. Nobody from Sakhi will ever ask you for a code, and anyone who
                does is not us.
              </p>
              <p>
                Sakhi signs you in on one device at a time. Signing in somewhere new signs you out
                of the old device, which is deliberate: your health data should not be sitting
                open on a phone you no longer have.
              </p>
              <p>
                You are responsible for what happens on your account while you are signed in. If
                you think someone else has access to it, write to{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-secondary underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                and we will help.
              </p>
            </TermsSection>

            <TermsSection number="4" id="trusted" title="Trusted people">
              <p>
                Sakhi lets you invite someone you trust to see part of what you log, and to be told
                if you do not reach home when you said you would.
              </p>
              <p>
                This is entirely your choice, on both sides. Nobody can add themselves, nobody can
                see anything until you invite them and they accept, and you decide exactly what
                they can see. You can change that, or end the connection, whenever you like, and
                it ends for both of you at once.
              </p>
              <p>
                We will never ask you to add someone, and nobody at Sakhi will treat it as
                something you ought to do. Sharing health data with another person is your
                decision alone.
              </p>
              <p>
                If you do connect with someone, please remember that what they can see is real
                information about you, and only invite a person you would tell anyway.
              </p>
            </TermsSection>

            <TermsSection number="5" id="your-data" title="Your data">
              <p>
                What you log belongs to you. We do not sell it, we do not use it to advertise to
                you, and we do not hand it to anyone except as our{" "}
                <a href="/privacy" className="text-secondary underline underline-offset-2">
                  privacy policy
                </a>{" "}
                describes.
              </p>
              <p>
                You can delete your account and everything in it at any time, from inside the app
                or from{" "}
                <a href="/delete-account" className="text-secondary underline underline-offset-2">
                  this page
                </a>
                . Deleting is final and we cannot bring it back afterwards.
              </p>
              <p>
                Sakhi keeps a copy of your data on your own device so it works without a signal,
                and syncs it to our servers when you are online.
              </p>
            </TermsSection>

            <TermsSection number="6" id="fair-use" title="Using Sakhi fairly">
              <p>Please do not:</p>
              <TermsList
                items={[
                  "Use Sakhi to harass, monitor or control another person.",
                  "Try to reach data that is not yours, or break into any part of the service.",
                  "Copy, resell or rebuild the app, or take it apart to make a competing one.",
                  "Upload anything unlawful, or anything that is not yours to upload.",
                ]}
              />
              <p>
                We may suspend an account that does any of this. If you think we have got that
                wrong, write to us and a person will look at it again.
              </p>
            </TermsSection>

            <TermsSection number="7" id="availability" title="Availability and changes">
              <p>
                We work to keep Sakhi running, but we cannot promise it will always be available
                or always be free of faults. Parts of it depend on services we do not control,
                such as your network and your phone&apos;s own notification system.
              </p>
              <p>
                Sakhi is free to use today. If we ever charge for a part of it, we will say so
                clearly before you pay anything, and what you already have will not be taken away
                without notice.
              </p>
            </TermsSection>

            <TermsSection number="8" id="liability" title="Where our responsibility ends">
              <p>
                Sakhi is provided as it is. To the extent the law allows, we are not liable for
                loss that follows from relying on an estimate in the app, from an alert that did
                not arrive because a device or a network did not deliver it, or from anything a
                trusted person does with what you chose to share.
              </p>
              <p>
                Nothing here limits any right you have under Indian consumer law, or any liability
                that cannot lawfully be limited.
              </p>
            </TermsSection>

            <TermsSection number="9" id="law" title="Law and contact">
              <p>
                These terms are governed by the laws of India, and the courts of Uttar Pradesh
                will hear any dispute about them.
              </p>
              <p>
                For anything at all, including a question about these terms, write to{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-secondary underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
                . There is more about getting help on our{" "}
                <a href="/support" className="text-secondary underline underline-offset-2">
                  support page
                </a>
                .
              </p>
            </TermsSection>
          </div>
        </Container>
      </Section>
    </div>
  );
}
