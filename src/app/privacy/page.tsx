import type { Metadata } from "next";
import { Lock } from "lucide-react";

import { Container, GradientText, PageHero, Section } from "@/components/ui/section";
import { SectionNav } from "@/components/ui/section-nav";

export const metadata: Metadata = {
  title: "Privacy Policy - Sakhi",
  description:
    "How Sakhi collects, stores, and protects your health data. Written in plain language, then in full detail.",
  alternates: { canonical: "/privacy" },
};

const lastUpdated = "August 12, 2026";

/*
 * Rewritten from the internal draft at 01-HQ/11-Legal/Privacy-Policy, which
 * described a Firebase Realtime Database as the primary data store and
 * email/password login. Neither is current: the app's data lives in
 * Supabase with an offline-first Room copy on-device (see SakhiCore), and
 * login is phone number + OTP (see the Single-Device Login system), not a
 * password. Firebase is still real, but only as the push-notification
 * transport (SakhiFirebaseMessagingService on Android, referenced in the
 * iOS EnvironmentManager), not as the database. Domain and contact email
 * are corrected to sakhiapp.in / contact@sakhiapp.in to match the live site
 * rather than the draft's old sakhi.rachna.co.
 *
 * The old draft also carried two separate, largely repeated "security"
 * sections (2.2 and 8). They are merged into one "Keeping your data safe"
 * section here rather than kept as a duplicate the way the original was.
 */

/* The number lives as its own badge rather than baked into the title
   string ("1. Introduction"), so it reads as a wayfinding mark next to the
   heading instead of punctuation stuck to the front of it. */
function PolicySection({
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

/* No 2.1 / 3.2 style decimal numbering: inside a section that already has
   its own number badge, a second numbering scheme is more to parse, not
   more organised. Weight and colour carry the hierarchy instead. */
function PolicySubheading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-h4 text-foreground">{children}</h3>;
}

/* A step below PolicySubheading, for a named group inside a subsection
   (the GDPR / CCPA / Indian-users split under Regional Rights). */
function PolicyLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] font-bold tracking-wide text-secondary uppercase">{children}</p>
  );
}

function PolicyList({ items }: { items: string[] }) {
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

/* Every section still exists in the page below and still has its own id to
   jump to; this row is just the quick-scan shortlist, not a full table of
   contents, so it stays to the three questions someone actually opens a
   privacy policy to answer: what do you take, who do you give it to, and
   what can I do about it. */
const sections = [
  { href: "#collect", label: "Data We Collect" },
  { href: "#share", label: "How We Share It" },
  { href: "#rights", label: "Your Rights" },
];

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Her data. <GradientText>Her control.</GradientText>
          </>
        }
        lead="How Sakhi collects, stores, and protects the health data you trust us with, written the way we'd actually explain it to you."
      >
        <p className="text-[13px] text-muted-foreground">Last updated: {lastUpdated}</p>
        <SectionNav items={sections} />
      </PageHero>

      <Section>
        <Container className="max-w-208">
          <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-faint text-secondary">
              <Lock className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="eyebrow text-secondary">Before the fine print</p>
              <p className="mt-3 text-[18px] leading-relaxed text-foreground">
                At Sakhi, your privacy is not a feature, it is the foundation. Your health data is
                stored securely and stays under your control. We never sell it, we do not track
                you across other apps or websites, and nobody sees your logs but you, unless you
                choose to share them with one trusted person through Be Her Sakhi. You can ask to
                see your data or delete it at any time.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-16">
            <PolicySection number="1" id="introduction" title="Introduction">
              <p>
                Welcome to Sakhi (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). We
                understand that your menstrual health data and personal information are deeply
                private. This Privacy Policy explains how we collect, use, store, and protect your
                information when you use the Sakhi mobile application (the &ldquo;App&rdquo;) and
                the website at sakhiapp.in (the &ldquo;Website&rdquo;).
              </p>
              <p>
                Sakhi provides menstrual cycle tracking, symptom logging, an AI companion, and
                optional emergency assistance through Be Her Sakhi. We take the security and
                privacy of your data seriously and have designed our systems with privacy as a
                priority from the start.
              </p>
              <p>
                By using Sakhi, you agree to the terms outlined in this Privacy Policy. If you do
                not agree, please refrain from using our services.
              </p>
            </PolicySection>

            <PolicySection number="2" id="storage" title="How We Store Your Data">
              <p>
                Sakhi stores your data in Supabase, a secure cloud database, and keeps an
                offline-first copy on your own device so core features, logging, predictions, and
                your Doctor Report, keep working with zero signal. Your device syncs with Supabase
                when you have a connection; it never depends on one.
              </p>

              <PolicySubheading>What We Store</PolicySubheading>
              <p>Your profile, contained in our database, includes:</p>
              <PolicyList
                items={[
                  "Unique user ID (automatically generated)",
                  "Name and, optionally, occupation and a short bio",
                  "Phone number, used to sign in with a one-time password (OTP)",
                  "Email address, if you choose to add one",
                  "Date of birth",
                  "A device token, used only to deliver push notifications",
                ]}
              />
              <p>
                Alongside your profile, we store your logged cycle and symptom history, and, only
                if you use Be Her Sakhi or the community help feature, the emergency request
                records described in the sections below.
              </p>

              <PolicySubheading>Keeping Your Data Safe</PolicySubheading>
              <PolicyList
                items={[
                  "All data is encrypted in transit (HTTPS) and at rest on our provider's servers.",
                  "Signing in requires your phone number and a one-time password. We never ask for or store a password.",
                  "Database access rules mean you can only reach your own data, and Be Her Sakhi data is shared only with the one person you designate.",
                  "A new sign-in on another device ends the session on your previous one, so only one device is ever signed in at a time.",
                  "Access to production data inside our team is limited to the people who need it to keep Sakhi running, and every access is logged.",
                ]}
              />
            </PolicySection>

            <PolicySection number="3" id="collect" title="Data We Collect">
              <PolicySubheading>Personal Information</PolicySubheading>
              <p>To create your Sakhi account and provide our services, we collect:</p>
              <PolicyList
                items={[
                  "Name, to personalise your experience",
                  "Phone number, required to sign in",
                  "Email address (optional), for account recovery and communications",
                  "Date of birth, to support cycle tracking and predictions",
                  "Occupation and profile photo (both optional), for profile customisation",
                  "Device information, to keep the app working well on your device",
                ]}
              />

              <PolicySubheading>Menstrual Health Data</PolicySubheading>
              <p>To provide our core tracking features, we collect:</p>
              <PolicyList
                items={[
                  "Menstrual cycle information: start and end dates of your periods",
                  "Flow intensity, as you log it",
                  "Cycle length patterns, calculated from your history",
                  "Symptoms: mood, cramps, and anything else you choose to log",
                ]}
              />

              <PolicySubheading>Be Her Sakhi & Community Help Data</PolicySubheading>
              <p>
                Be Her Sakhi and the nearby community-help feature are entirely optional. We only
                collect the data below if you choose to use them:
              </p>
              <PolicyList
                items={[
                  "Live location, only while a request is active",
                  "Request details: what you need, and timestamps",
                  "The identity of your one trusted person, if you add one through Be Her Sakhi",
                  "Estimated arrival time, calculated from the distance between you and a helper",
                ]}
              />

              <PolicySubheading>Technical Information</PolicySubheading>
              <PolicyList
                items={[
                  "Device model, operating system, and app version",
                  "General usage data: which features you use, not the content of your logs",
                  "A push-notification device token",
                ]}
              />
            </PolicySection>

            <PolicySection number="4" id="use" title="How We Use Your Data">
              <PolicySubheading>Core App Features</PolicySubheading>
              <p>We use your data to provide Sakhi&rsquo;s main functionality:</p>
              <PolicyList
                items={[
                  "Recording cycle dates and flow levels",
                  "Predicting future period dates from your own history",
                  "Logging mood, cramps, and other symptoms",
                  "Showing your cycle history and trends over time",
                  "Sakhi AI answers, generated from your own logs, never from anyone else's",
                ]}
              />

              <PolicySubheading>Doctor Report & Insights</PolicySubheading>
              <p>
                Your logs compile into your Doctor Report and into the charts and trends you see
                in the app. This happens using your data alone. We do not run analysis across
                other users&rsquo; data, and we do not build any profile of you from other
                people&rsquo;s logs.
              </p>

              <PolicySubheading>Be Her Sakhi & Emergency Features</PolicySubheading>
              <p>If you turn Be Her Sakhi on, your data enables:</p>
              <PolicyList
                items={[
                  "Sending a request to your one trusted person or, for the community feature, to nearby Sakhi users",
                  "Sharing your live location for the duration of an active request only",
                  "Showing an estimated arrival time",
                ]}
              />
              <p>
                Location is never tracked in the background. It is only used while a request is
                active, and only because you started one.
              </p>

              <PolicySubheading>Service Improvement & Support</PolicySubheading>
              <p>
                We use limited technical data to find and fix problems, improve performance, and
                respond when you contact us for support.
              </p>
            </PolicySection>

            <PolicySection number="5" id="share" title="How We Share Your Data">
              <p>We strictly limit the sharing of your information.</p>

              <PolicySubheading>Be Her Sakhi Sharing</PolicySubheading>
              <p>
                Adding a trusted person to Be Her Sakhi means sharing personal health information
                with them. That decision is entirely yours, it is never required to use Sakhi, and
                you can remove that person or turn the feature off at any time. When it is on, we
                share only:
              </p>
              <PolicyList
                items={[
                  "Curated updates and care guidance you have agreed to share",
                  "Your live location and request details, only during an active emergency request",
                ]}
              />

              <PolicySubheading>Service Providers</PolicySubheading>
              <p>We work with a small number of providers to operate Sakhi:</p>
              <PolicyList
                items={[
                  "Supabase, our database provider, which stores and manages account and health data securely",
                  "Firebase Cloud Messaging, used only to deliver push notifications to your device",
                ]}
              />
              <p>
                These providers are bound by data protection agreements and may only use your data
                to provide their service to Sakhi, never for their own purposes.
              </p>

              <PolicySubheading>Legal Requirements</PolicySubheading>
              <p>We may share information if required by law:</p>
              <PolicyList
                items={[
                  "In response to a valid legal request from a government authority",
                  "To protect the rights, property, or safety of our users",
                  "To respond to an emergency involving a risk of harm",
                ]}
              />
              <p>We review every such request carefully and share only the minimum required.</p>
            </PolicySection>

            <PolicySection number="6" id="retention" title="Data Retention & Deletion">
              <PolicySubheading>How Long We Keep Your Data</PolicySubheading>
              <PolicyList
                items={[
                  "Account information: kept as long as your account is active",
                  "Cycle and symptom history: kept to provide your history and trends",
                  "Be Her Sakhi request logs: kept for 6 months, then automatically deleted",
                  "Technical logs: kept for 30 days for troubleshooting",
                ]}
              />

              <PolicySubheading>Deleting Your Data</PolicySubheading>
              <p>You can request deletion of your data at any time:</p>
              <PolicyList
                items={[
                  "Delete individual logs or cycle entries in the app",
                  "Delete your account to remove all of your data",
                  "Contact us to delete specific information you can't remove yourself",
                ]}
              />
              <p>
                When you delete your account, your personal data is permanently removed from our
                database within 30 days.
              </p>
            </PolicySection>

            <PolicySection number="7" id="rights" title="Your Privacy Rights & Controls">
              <PolicySubheading>Accessing & Correcting Your Data</PolicySubheading>
              <PolicyList
                items={[
                  "View your profile data in the app's settings",
                  "Export your data through the app",
                  "Edit your profile, cycle entries, symptoms, and Be Her Sakhi contact at any time",
                  "Contact us for a full copy of your data",
                ]}
              />

              <PolicySubheading>Controlling Your Data</PolicySubheading>
              <PolicyList
                items={[
                  "Turn Be Her Sakhi on or off, and choose exactly what is shared",
                  "Manage notification preferences",
                  "Delete your account, which deletes your data",
                ]}
              />

              <PolicySubheading>Regional Rights</PolicySubheading>
              <p>Depending on where you live, you may have additional rights.</p>

              <PolicyLabel>European users (GDPR)</PolicyLabel>
              <PolicyList
                items={[
                  "Right to access, correct, and delete your data",
                  "Right to restrict processing or object to certain uses",
                  "Right to data portability",
                  "Right to withdraw consent",
                ]}
              />

              <PolicyLabel>California residents (CCPA)</PolicyLabel>
              <PolicyList
                items={[
                  "Right to know what personal information is collected",
                  "Right to delete personal information",
                  "Right to opt out of the sale of personal information, though we do not sell data",
                  "Right to non-discrimination for exercising these rights",
                ]}
              />

              <PolicyLabel>Indian users</PolicyLabel>
              <PolicyList
                items={[
                  "Rights in accordance with applicable Indian data protection law",
                  "Special protections for sensitive personal data, including health information",
                ]}
              />

              <p>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:contact@sakhiapp.in" className="text-secondary underline underline-offset-2">
                  contact@sakhiapp.in
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection number="8" id="children" title="Children's Privacy">
              <p>
                Our services are not intended for users under 13 years of age. We do not knowingly
                collect personal information from children under 13. If we become aware that we
                have inadvertently collected data from a child under 13, we will delete it as soon
                as possible.
              </p>
              <p>
                If you are a parent or guardian and believe we may have collected information about
                a child under 13, please contact us at{" "}
                <a href="mailto:contact@sakhiapp.in" className="text-secondary underline underline-offset-2">
                  contact@sakhiapp.in
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection number="9" id="changes" title="Changes to This Policy">
              <p>We may update this Privacy Policy from time to time. When we make a meaningful change, we will:</p>
              <PolicyList
                items={[
                  "Post the updated policy on this page and in the app",
                  "Update the \"Last updated\" date at the top of this page",
                  "Notify you in the app, or by email, for material changes",
                ]}
              />
              <p>Continuing to use Sakhi after a change means you accept the revised policy.</p>
            </PolicySection>

            <PolicySection number="10" id="contact" title="Contact Us">
              <p>
                If you have questions, concerns, or requests about this Privacy Policy or our data
                practices, we would love to hear from you.
              </p>
              <p>
                Email:{" "}
                <a href="mailto:contact@sakhiapp.in" className="text-secondary underline underline-offset-2">
                  contact@sakhiapp.in
                </a>
                <br />
                Website:{" "}
                <a href="https://sakhiapp.in" className="text-secondary underline underline-offset-2">
                  sakhiapp.in
                </a>
              </p>
              <p>We read every message and aim to respond as quickly as we can.</p>
            </PolicySection>
          </div>
        </Container>
      </Section>
    </div>
  );
}
