import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/section";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const appStoreUrl = "https://apps.apple.com/app/id6742219623";

// PLACEHOLDER, swap in the real Play Store link.
// Derived from the applicationId in 02-Android/app/build.gradle.kts
// ("com.galgotiasuniversity.rachnasakhi") so it is a sane default, but it has
// not been checked against the live listing.
export const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.galgotiasuniversity.rachnasakhi";

function AppleMark({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/* Redrawn Google Play mark: the play triangle split into four colour regions
   by its spine midpoint and fold point. */
function PlayMark({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="3.5,1.6 3.5,12 13.4,12" fill="#00D95F" />
      <polygon points="3.5,12 3.5,22.4 13.4,12" fill="#00A0FF" />
      <polygon points="3.5,1.6 13.4,12 20.7,12" fill="#FFCE00" />
      <polygon points="3.5,22.4 13.4,12 20.7,12" fill="#FF3A44" />
    </svg>
  );
}

/**
 * Used on both a white hero and a dark closing band. `tone` picks the
 * readable variant for wherever it's actually placed — on `dark`, the App
 * Store pill flips to a solid white fill. It used to stay `bg-ink` on both,
 * which was invisible-on-invisible against a dark section's own `bg-ink`
 * fill: a black pill has no edge against a black page. White-on-black is
 * also just the correct read for a dark-mode primary action, not only a fix.
 */
export function StoreButtons({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-transform duration-300 hover:-translate-y-0.5",
          tone === "dark" ? "bg-white text-ink shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "bg-ink text-white"
        )}
      >
        <AppleMark /> App Store
      </a>
      <Button
        asChild
        size="lg"
        variant="outline"
        className={cn("w-full sm:w-auto", tone === "dark" && "border-white/15 bg-transparent text-white hover:bg-white/10")}
      >
        <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
          <PlayMark /> Google Play
        </a>
      </Button>
    </div>
  );
}

/**
 * The one closing band every page shares, site-wide: dark, spotlit, one
 * headline, one lead line, both store buttons. Rendered once in the root
 * layout directly above the footer, so it appears on every route without
 * being wired into each page, and a page never has to remember to add it.
 *
 * Originally the homepage's own bookend section (paired with "Sakhi knows
 * your body" up top). Promoted to a shared, page-independent band because
 * the same close, "your body deserves to be understood, start logging" is
 * the right last word on every page, not just the homepage.
 *
 * A page should not also render its own dark closing CTA (FinalCTA or a
 * hand-rolled one), since two dark bands back to back cancel each other out.
 */
export function AppDownloadBand() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 sm:px-8 sm:py-36 lg:py-44">
      <Spotlight className="top-0 left-1/2 -translate-x-1/2" fill="var(--secondary)" />
      <Container className="relative z-10 flex flex-col items-center text-center">
        <AnimatedSection className="flex flex-col items-center">
          <h2 className="text-display max-w-[15ch] text-white">
            Your body deserves <span className="text-primary-soft">to be understood</span>
          </h2>
          <p className="text-lead mx-auto mt-7 max-w-[40ch] text-white/65">
            Start with her own logs. Share only when it feels right.
          </p>
          <div className="mt-12">
            <StoreButtons tone="dark" />
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
