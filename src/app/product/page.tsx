import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  Brain,
  Calendar,
  CloudOff,
  FileText,
  Heart,
  MapPin,
  MessageCircleHeart,
  ShieldCheck,
  Smartphone,
  SlidersHorizontal,
} from "lucide-react";

import photoLivingRoom from "@/assets/lifestyle-living-room.jpg";
import screenSummary from "@/assets/app-screen-summary.png";
import screenTrack from "@/assets/app-screen-track.png";
import screenAccount from "@/assets/app-screen-account.png";
import screenEmergency from "@/assets/app-screen-emergency-request.png";
import { Container, GradientText, PageHero, Section, SectionHeading } from "@/components/ui/section";
import { SectionNav } from "@/components/ui/section-nav";
import { HeroNoticeCard, HeroStatBar } from "@/components/ui/page-hero-variants";
import { FinalCTA } from "@/components/ui/final-cta";
import { Timeline } from "@/components/ui/timeline";
import HealthConditions from "@/components/ui/HealthConditions";

export const metadata: Metadata = {
  title: "Product, Sakhi",
  description:
    "Everything Sakhi does, and the health library behind it. Cycle tracking, Sakhi AI, Be Her Sakhi, the Doctor Report, and the 16 conditions Sakhi helps her understand.",
};

/*
 * Was two pages, /features and /health. Merged here as two sections on one
 * page rather than two separate routes, since a first-time visitor's "what
 * does this app actually do" question does not stop at the feature list, it
 * continues straight into "and what does it know about my body" — the health
 * library is not a side reference, it is the other half of the same answer.
 * Old URLs redirect here with an anchor (next.config.ts); nothing that used
 * to be reachable stopped being reachable.
 */

const features = [
  { icon: Calendar, title: "Cycle tracking", desc: "Period start and end, cycle length prediction, phase tracking, PMS alerts. Know where you are, always.", big: false },
  { icon: Activity, title: "Body logging", desc: "Cramps, headache, bloating, fever, energy, weight. Log any symptom, any day. Patterns emerge over time.", big: false },
  { icon: Brain, title: "Mood & mental health", desc: "Mood, stress, anxiety, irritability, sleep quality. The connection between cycle phase and how you feel.", big: false },
  { icon: SlidersHorizontal, title: "Lifestyle", desc: "Exercise, diet notes, water intake, any custom symptom you define. Sakhi adapts to your life.", big: false },
  { icon: FileText, title: "Doctor report", desc: "All your logs compile into a clean PDF for gynaecologist visits. Free to export, always current.", big: false },
  {
    icon: MessageCircleHeart,
    title: "Sakhi AI",
    desc: "Personalised answers based on your actual cycle data and symptom history, not generic health tips. Ask the question you would never Google.",
    big: true,
  },
  { icon: MapPin, title: "Safety features", desc: "Washroom locator and nearby public space finder. Small features that matter when you're out.", big: false },
  { icon: Heart, title: "Be Her Sakhi", desc: "Consent-based sharing with one trusted person. Curated updates, care guidance. She decides what and when.", big: false },
  { icon: CloudOff, title: "Offline first", desc: "Core logging, predictions and the Doctor Report all work with zero signal. Your health doesn't wait for WiFi.", big: false },
];

const coming = [
  { title: "Sakhi Watch", desc: "Passive health tracking. No logging required. Your wrist, working for you." },
  { title: "Doctor Network", desc: "Book consultations directly inside Sakhi. Your full health history, ready to share. Planned for 2029." },
  { title: "Android Beta", desc: "Full Sakhi experience on Android. Planned for December 2026." },
  { title: "Regional Languages", desc: "Hindi and four more regional languages. Because her language is her language. Planned for 2027." },
];

const healthStats = [
  { n: "16", label: "conditions covered" },
  { n: "150M", label: "women in Sakhi's India" },
  { n: "57%", label: "have a condition they don't know about" },
];

export default function ProductPage() {
  return (
    <div>
      <PageHero
        eyebrow="The app"
        title={
          <>
            Built for the way women <GradientText>actually live</GradientText>
          </>
        }
        lead="Not just a period tracker. A complete health companion that understands her body, learns from her logs, and helps the people who love her support her better."
        visual={
          <Image
            src={photoLivingRoom}
            alt="A woman at home holding the Sakhi app open on day 1 of her period"
            priority
            className="h-auto w-full rounded-panel shadow-card"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        }
      >
        <SectionNav
          items={[
            { href: "#features", label: "Features" },
            { href: "#health", label: "Health Library" },
          ]}
        />
      </PageHero>

      {/* ------------------------------------------------------------ features */}
      <Section id="features">
        <Container>
          <SectionHeading eyebrow="Everything, together" title="Nine things, one calm app" align="left" />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc, big }) => (
              <div
                key={title}
                className={`group flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 transition-[transform,border-color,box-shadow] duration-300 ease-(--ease-out-soft) hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover ${big ? "sm:col-span-2" : ""}`}
              >
                <div className="inline-flex size-10 w-fit items-center justify-center rounded-xl bg-accent-faint text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-h4 text-foreground">{title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------- inside the app */}
      <Section tone="blush">
        <Container>
          <SectionHeading eyebrow="See it for yourself" title="Inside the app" align="left" />
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {[
              { src: screenSummary, alt: "Sakhi's Summary screen showing days on period and the current cycle calendar" },
              { src: screenTrack, alt: "Sakhi's Track screen for logging period, symptoms, weight and basal body temperature" },
              { src: screenAccount, alt: "Sakhi's sign-in screen, with a note that health data is handled securely" },
              { src: screenEmergency, alt: "Requesting pads, tampons, a hot water bag or medicines from the community nearby" },
            ].map((shot) => (
              <div key={shot.alt} className="overflow-hidden rounded-panel border border-border shadow-card">
                <Image src={shot.src} alt={shot.alt} className="h-auto w-full" sizes="(max-width: 640px) 50vw, 22vw" />
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-[38rem] text-center text-[13px] text-muted-foreground">
            Real screens from the app. Dates and numbers shown are sample data, not a real person&rsquo;s health
            record.
          </p>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- privacy */}
      <Section tone="blush">
        <Container>
          <SectionHeading
            eyebrow="Privacy first"
            title="Your privacy comes first. Always."
            lead="Sakhi was designed from day one with privacy as a core value, not a feature. She controls her data, always."
          />
          <div className="mx-auto mt-14 grid max-w-[52rem] grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-accent bg-accent-faint p-7">
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-white text-secondary shadow-sm">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-h4 mt-5 text-secondary">Back up securely</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                Create an account to safely back up her health data and access it across devices. Encrypted end to end.
              </p>
              <span className="mt-5 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-secondary-foreground">
                Recommended
              </span>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                <Smartphone className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-h4 mt-5 text-foreground">Stay on device only</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                Her data stays on this device and never leaves. It will not be available if she changes phones.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------- coming soon */}
      <Section>
        <Container className="max-w-[52rem]">
          <SectionHeading eyebrow="Roadmap preview" title="What's coming" lead="Sakhi is just getting started." align="left" />
          <div className="mt-14">
            <Timeline
              data={coming.map((item) => ({
                title: item.title,
                content: (
                  <p className="max-w-lg text-[14.5px] leading-relaxed text-muted-foreground">{item.desc}</p>
                ),
              }))}
            />
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------- health library
          Was its own page and its own PageHero. On this page it is a section:
          the stat bar and the "does not diagnose" notice, which used to live
          inside that hero, now sit directly under this section's own heading
          instead of inside a second hero — a page gets one hero, not two. */}
      <Section id="health" tone="blush">
        <Container>
          <SectionHeading
            eyebrow="Health library"
            title={
              <>
                What your body has been trying <GradientText>to tell you</GradientText>
              </>
            }
            lead="Most women know something feels off years before they get an answer. This library covers the 16 conditions Sakhi helps her understand, real research, real numbers, no medical jargon."
            align="left"
          />

          <div className="mt-10">
            <HeroStatBar stats={healthStats} />
          </div>
          <HeroNoticeCard className="mt-8">
            <strong className="font-semibold text-foreground">Sakhi does not diagnose.</strong>{" "}
            It tracks patterns and tells her when to see a doctor. Everything here is educational,
            not a substitute for medical care.
          </HeroNoticeCard>

          <div className="mt-14">
            <HealthConditions />
          </div>
        </Container>
      </Section>

      <FinalCTA
        title="Try it"
        emphasis="for yourself"
        lead="Free. No ads. Her data stays hers."
        ctaLabel="Download on App Store"
      />
    </div>
  );
}
