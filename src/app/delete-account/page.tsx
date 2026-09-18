import type { Metadata } from "next";
import { Mail, Trash2, Clock } from "lucide-react";

import { Container, GradientText, PageHero, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Delete your account - Sakhi",
  description:
    "How to delete your Sakhi account and everything in it, from inside the app or by writing to us.",
  alternates: { canonical: "/delete-account" },
};

/*
 * Google Play requires a publicly reachable account deletion route for any app
 * that has a sign-in, and it has to be reachable without signing in, which is
 * why this is a page on the site rather than only a screen in the app.
 *
 * Play also wants the page to say two things plainly: what gets deleted, and
 * what is kept and for how long. Both are below.
 */

const lastUpdated = "September 18, 2026";

const CONTACT_EMAIL = "contact@teamsakhi.com";

function Step({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-5">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-faint text-[13px] font-bold text-secondary tabular-nums">
        {number}
      </span>
      <div className="flex flex-col gap-3">
        <h3 className="text-h4 text-foreground">{title}</h3>
        <div className="flex flex-col gap-3 text-[18px] leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}

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

export default function DeleteAccountPage() {
  return (
    <div>
      <PageHero
        eyebrow="Your account"
        title={
          <>
            Leave whenever <GradientText>you want.</GradientText>
          </>
        }
        lead="You can delete your Sakhi account and everything in it. You do not have to give a reason, and you do not have to ask us first."
      >
        <p className="text-[13px] text-muted-foreground">Last updated: {lastUpdated}</p>
      </PageHero>

      <Section>
        <Container className="max-w-208">
          <div className="flex flex-col gap-6">
            <Card icon={<Trash2 className="size-5" aria-hidden="true" />} title="From inside the app">
              <div className="flex flex-col gap-7">
                <Step number="1" title="Open your profile">
                  <p>Tap the profile button in the top left of the home screen.</p>
                </Step>
                <Step number="2" title="Go to Manage Account">
                  <p>It sits with the rest of your account settings.</p>
                </Step>
                <Step number="3" title="Choose Delete Account">
                  <p>
                    You will be asked to confirm once. After that the request is made and you are
                    signed out.
                  </p>
                </Step>
              </div>
            </Card>

            <Card icon={<Mail className="size-5" aria-hidden="true" />} title="If you cannot open the app">
              <p>
                Write to{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-secondary underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                from any address, and tell us the phone number the account uses. We will verify it
                belongs to you before we delete anything, then confirm by email once it is done.
              </p>
              <p>
                We do this so that nobody can delete someone else&apos;s account by writing to us
                and claiming it. It is the one place where we deliberately make this slower.
              </p>
            </Card>

            <Card icon={<Trash2 className="size-5" aria-hidden="true" />} title="What is deleted">
              <p>Everything you put into Sakhi goes, including:</p>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Your profile, your phone number, and your sign-in.",
                  "Every period, symptom, mood and note you have logged.",
                  "Your cycle history and everything predicted from it.",
                  "Your conversations with Sakhi.",
                  "Any connection to a trusted person, on both sides, and anything they could see.",
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
                Deleting the app from your phone does not delete your account. The two are
                separate, and only the steps above remove what we hold.
              </p>
            </Card>

            <Card icon={<Clock className="size-5" aria-hidden="true" />} title="What is kept, and for how long">
              <p>
                Your data is removed from the live service straight away, and from our encrypted
                backups within 30 days, after which it cannot be recovered by us or by you.
              </p>
              <p>
                We keep a small record of the deletion itself, which is the account identifier and
                the date, because we have to be able to show that a deletion request was honoured.
                It holds none of your health data.
              </p>
              <p>
                Deleting is final. We cannot restore an account or its history afterwards, so if
                you only want to stop for a while, signing out is the gentler option.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
