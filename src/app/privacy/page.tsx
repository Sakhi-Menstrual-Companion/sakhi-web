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

const lastUpdated = "September 24, 2026";

/*
 * Rewritten from the internal draft at 01-HQ/11-Legal/Privacy-Policy, which
 * described a Firebase Realtime Database as the primary data store and
 * email/password login. Neither is current: the app's data lives in
 * Supabase with an offline-first Room copy on-device (see SakhiCore), and
 * login is phone number + OTP (see the Single-Device Login system), not a
 * password. Firebase is still real, but not as the database: it is the
 * push-notification transport (SakhiFirebaseMessagingService on Android,
 * referenced in the iOS EnvironmentManager) and it is also Analytics and
 * Crashlytics (AnalyticsManager, CrashlyticsManager). This file used to say
 * Firebase was "used only to deliver push notifications", which was not true.
 *
 * Checked against the apps on 2026-09-18 and three more processors added that
 * were doing real work and were not named: Anthropic, which the claude-chat
 * edge function calls at api.anthropic.com with her message and cycle summary;
 * Firebase Analytics and Crashlytics, which carry screen and crash data but no
 * logged health values; and Google Maps, configured in SakhiApp.swift and used
 * by the walk and emergency screens. Naming the AI processor matters most: a
 * health app that sends a cycle summary to a third party has to say so.
 *
 * 2026-09-24: Emergency Assistance and nearby community help were removed from the
 * app on 2026-09-20, so every paragraph about requests, helpers and arrival times is
 * gone. Stay With Me, which shipped in 2.0.3, took their place, written from the
 * migrations that define it (01-iOS/supabase/migrations 057, 060, 061): location,
 * battery, destination and note live on the server only during a walk and are
 * wiped when it ends; only start, end, status and whether she was late are kept.
 * Apple Health was also missing entirely. It is read only (HealthKitManager asks
 * for read types, never share types), and sleep, steps and wrist temperature are
 * saved to her account in health_samples (migration 016).
 *
 * Domain and contact email are www.teamsakhi.com / contact@teamsakhi.com.
 * They were sakhiapp.in / contact@sakhiapp.in until 2026-09-18, which looked
 * right and was not: sakhiapp.in is a parked domain with no A record and no MX
 * record, so the site never loaded there and no email to that address could
 * ever arrive. The live site is www.teamsakhi.com on Vercel, and teamsakhi.com
 * is the domain with a mail server (Namecheap Private Email).
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
                choose to share them with one trusted person through Be Her Sakhi. Your location is
                shared only during a Stay With Me walk you start, and only with that person. You can
                ask to see your data or delete it at any time.
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
                the website at www.teamsakhi.com (the &ldquo;Website&rdquo;).
              </p>
              <p>
                Sakhi provides menstrual cycle tracking, symptom logging, an AI companion, optional
                sharing with one trusted person through Be Her Sakhi, and Stay With Me, which lets
                that person see you on your way home. The App works on iPhone and Apple Watch. We
                take the security and
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
                Alongside your profile, we store your logged cycle and symptom history, anything you
                choose to bring in from Apple Health, and, only if you use Be Her Sakhi or Stay With
                Me, the records described in the sections below.
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
                  "Weight, basal body temperature and medication, if you log them",
                ]}
              />

              <PolicySubheading>Apple Health Data</PolicySubheading>
              <p>
                Apple Health is off unless you turn it on, and you can turn it off again in the
                Health app at any time. If you allow it, Sakhi reads, and never writes:
              </p>
              <PolicyList
                items={[
                  "Period and cycle records, such as flow, spotting and ovulation test results",
                  "Symptoms recorded in Health, such as cramps, headache and bloating",
                  "Date of birth, height and weight",
                  "Sleep, step count and sleeping wrist temperature, to show insights next to your cycle",
                ]}
              />
              <p>
                Sleep, steps and wrist temperature are saved to your account so your insights are
                there on another device. Data from Apple Health is used only to show your own cycle
                and insights inside Sakhi. It is never used for advertising or marketing, and it is
                never sold.
              </p>

              <PolicySubheading>Be Her Sakhi & Stay With Me Data</PolicySubheading>
              <p>
                Be Her Sakhi and Stay With Me are entirely optional. We only collect the data below
                if you choose to use them:
              </p>
              <PolicyList
                items={[
                  "The identity of your one trusted person, if you add one through Be Her Sakhi",
                  "During a Stay With Me walk only: your location, your phone's battery level, the place you are going, a short note if you write one, and the time you expect to arrive",
                  "After a walk ends: only when it started and ended, whether you marked yourself home, and whether your person was told you were late",
                ]}
              />
              <p>
                When a walk ends, your location, battery, destination and note are deleted from our
                servers. The line of the path you walked is kept only on the phones, never on our
                servers.
              </p>

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

              <PolicySubheading>Be Her Sakhi & Stay With Me</PolicySubheading>
              <p>If you use Be Her Sakhi and Stay With Me, your data is used to:</p>
              <PolicyList
                items={[
                  "Show your one trusted person the updates you have chosen to share",
                  "Show that person where you are and how much battery you have, only while a walk you started is on",
                  "Tell them when a walk starts, is extended or ends, and ring their phone if you have not arrived in time",
                  "Show the two of you the walks you have done together, as dates and times, never places",
                ]}
              />
              <p>
                Location is used only while a walk you started is on, including in the background
                during that walk so your person can still see you when your phone is in your pocket.
                It stops the moment the walk ends. Sakhi never tracks your location at any other
                time.
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
                  "Your location, battery level and destination, only during a Stay With Me walk you started",
                ]}
              />

              <PolicySubheading>Service Providers</PolicySubheading>
              <p>We work with a small number of providers to operate Sakhi:</p>
              <PolicyList
                items={[
                  "Supabase, our database provider, which stores and manages account and health data securely",
                  "Anthropic, whose Claude model writes Sakhi AI's replies. When you send a message, that message and a short summary of your cycle go to it so the answer can be about you. Anthropic does not use it to train its models, and it is never sent unless you write to Sakhi AI",
                  "Firebase Cloud Messaging, which delivers push notifications to your device",
                  "Firebase Analytics and Crashlytics, which tell us which screens are opened and what crashed. These carry usage and device information, never anything you have logged about your health",
                  "Google Maps, which draws the map and finds places when you set a destination for Stay With Me or watch a walk",
                  "Apple, which runs Apple Health on your own device. Sakhi reads from it only if you allow it, and nothing Sakhi stores is sent to Apple",
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
                  "Stay With Me location, battery, destination and note: deleted as soon as the walk ends",
                  "Stay With Me walk times and status: kept while you and your person are connected, and visible to them only while you are connected",
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
                Removing your trusted person ends their access to everything, including your past
                walks, straight away.
              </p>
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
                  "Start and stop a Stay With Me walk whenever you want; nothing is shared outside a walk",
                  "Turn Apple Health access on or off in the Health app",
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
                <a href="mailto:contact@teamsakhi.com" className="text-secondary underline underline-offset-2">
                  contact@teamsakhi.com
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
                <a href="mailto:contact@teamsakhi.com" className="text-secondary underline underline-offset-2">
                  contact@teamsakhi.com
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
                <a href="mailto:contact@teamsakhi.com" className="text-secondary underline underline-offset-2">
                  contact@teamsakhi.com
                </a>
                <br />
                Website:{" "}
                <a href="https://www.teamsakhi.com" className="text-secondary underline underline-offset-2">
                  www.teamsakhi.com
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
