import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Smartphone } from "lucide-react";

import photoLivingRoom from "@/assets/lifestyle-living-room.jpg";
import homeScreenMockup from "@/assets/product-home-screen-mockup.png";
import screenSummary from "@/assets/app-screen-summary.png";
import screenTrack from "@/assets/app-screen-track.png";
import screenAccount from "@/assets/app-screen-account.png";
import screenEmergency from "@/assets/app-screen-emergency-request.png";
import { Link } from "next-view-transitions";
import { Container, GradientText, PageHero, Section, SectionHeading } from "@/components/ui/section";
import { FeatureGallery } from "@/components/ui/feature-gallery";

export const metadata: Metadata = {
  title: "Features - Sakhi",
  description:
    "Everything Sakhi does. Cycle tracking, Sakhi AI, Be Her Sakhi, the Doctor Report, and more, all in one calm app.",
  alternates: { canonical: "/product" },
};

/*
 * Was three pages, /features, /health and /story-adjacent bits. /health has
 * since moved back out to its own route (src/app/health/page.tsx): sixteen
 * conditions with real clinical depth is a full page's worth of reading, not
 * a section to skim past on the way to the pricing plan. The features list
 * below points to it instead of embedding it.
 * Old URLs redirect here with an anchor (next.config.ts); nothing that used
 * to be reachable stopped being reachable.
 */

export default function ProductPage() {
  return (
    <div>
      <PageHero
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
            className="h-auto w-full rounded-panel"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        }
      />

      {/* ------------------------------------------------------------ features */}
      <Section id="features">
        <Container className="text-center">
          <SectionHeading
            eyebrow="One app, not ten tabs"
            title="Everything lives in one place"
          />
          <p className="mx-auto mt-7 max-w-152 text-lead text-muted-foreground">
            Cycle tracking, symptom logs, an AI that knows her history, a report her doctor can
            actually use. Most health apps make her open five different things to get a full
            picture. Sakhi keeps it in one screen, one login, one habit. Everything she logs feeds
            everything else Sakhi does for her.
          </p>
          <Image
            src={homeScreenMockup}
            alt="Sakhi's home screen showing 18 days until next period, the follicular phase, and the August calendar"
            quality={100}
            className="mx-auto mt-14 h-auto w-70 select-none drop-shadow-[0_35px_45px_rgba(163,22,84,0.18)] sm:w-80"
            sizes="(max-width: 640px) 280px, 320px"
          />
          <p className="mx-auto mt-14 max-w-lg text-[14px] leading-relaxed text-muted-foreground">
            This is what it looks like on a normal Tuesday, nothing to set up, nothing to
            configure. Log once, and Sakhi does the rest.
          </p>
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
              <div key={shot.alt} className="overflow-hidden rounded-panel border-[5px] border-white">
                <Image src={shot.src} alt={shot.alt} className="h-auto w-full" sizes="(max-width: 640px) 50vw, 22vw" />
              </div>
            ))}
          </div>
          <p className="mt-16 text-[15px] leading-relaxed text-muted-foreground">
            Real screens from the app. Dates and numbers shown are sample data, not a real person&rsquo;s health
            record.
          </p>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- privacy */}
      <Section>
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

      {/* --------------------------------------------------------- nine things */}
      <Section tone="blush">
        <Container>
          <SectionHeading eyebrow="Everything, together" title="Nine things, one calm app" align="left" />
          <FeatureGallery className="mt-20" />
        </Container>
      </Section>

      {/* -------------------------------------------------------- health library
          The full 16-condition library now lives at /health. This is just the
          bridge to it: a page gets one hero and one long read, not two. */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Health library"
            title={
              <>
                What your body has been trying <GradientText>to tell you</GradientText>
              </>
            }
            lead="Most women know something feels off years before they get an answer. Sakhi's Health Library covers the 16 conditions Sakhi helps her understand, real research, real numbers, no medical jargon."
            align="left"
          />
          <Link
            href="/health"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-[14px] font-semibold text-secondary-foreground no-underline transition-colors duration-200 hover:bg-[#b8005f]"
          >
            Explore the Health Library →
          </Link>
        </Container>
      </Section>
    </div>
  );
}
