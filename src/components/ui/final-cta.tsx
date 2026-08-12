import { Link } from "next-view-transitions";

import { Container } from "@/components/ui/section";
import { Spotlight } from "@/components/ui/spotlight";
import { GradientText } from "@/components/ui/section";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const appStoreUrl = "https://apps.apple.com/app/id6742219623";

function AppleMark({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/**
 * The one closing band every inner page shares: dark, spotlit, one gradient
 * clause, one action. Every page gets exactly one of these and it is always
 * the last thing on the page — a second glowing dark band later would cancel
 * the effect of this one.
 */
export function FinalCTA({
  title,
  emphasis,
  lead,
  ctaLabel = "Download Sakhi",
  ctaHref = appStoreUrl,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  emphasis: string;
  lead: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const external = ctaHref.startsWith("http");
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 sm:px-8 sm:py-32">
      <Spotlight className="top-0 left-1/2 -translate-x-1/2" fill="var(--secondary)" />
      <Container className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-h2 max-w-[20ch] text-white">
          {title} <GradientText tone="ink">{emphasis}</GradientText>
        </h2>
        <p className="text-lead mx-auto mt-5 max-w-[40ch] text-white/65">{lead}</p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <HoverBorderGradient
            as="a"
            href={ctaHref}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <AppleMark /> {ctaLabel}
          </HoverBorderGradient>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="rounded-full border border-white/15 px-7 py-3.5 text-[15px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
