import { Download, Handshake, Megaphone } from "lucide-react";

import { GradientText, MeshGradientBackdrop, DotGrid } from "@/components/ui/section";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Spotlight } from "@/components/ui/spotlight";
import {
  HeroAvatarCluster,
  HeroNoticeCard,
  HeroPillLinks,
  HeroStatBar,
  HeroSwatchRibbon,
  HeroTagRow,
} from "@/components/ui/page-hero-variants";
import type { SpecimenGroup } from "./types";

/**
 * Page headers.
 *
 * Every one of these shipped on a real page at some point, so they are not
 * invented specimens: header-01 is the site standard now, and 02 through 10 are
 * the treatments it replaced, kept usable rather than deleted.
 *
 * Previews are scaled-down stand-ins, not the live `PageHero`: the real one
 * carries navbar clearance and 200-odd pixels of vertical padding, which would
 * make the catalogue unreadable. The backdrops and type ramp are the real
 * tokens either way.
 */

/** Shared frame so ten previews do not repeat the same wrapper ten times. */
function Stage({
  children,
  backdrop,
  className = "",
}: {
  children: React.ReactNode;
  backdrop?: "mesh" | "dotgrid";
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-background px-8 py-14 ${className}`}>
      {backdrop === "mesh" && <MeshGradientBackdrop />}
      {backdrop === "dotgrid" && (
        <>
          <DotGrid />
          <Spotlight className="-top-24 left-0" fill="var(--primary)" />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

const demoStats = [
  { n: "16", label: "conditions covered" },
  { n: "150M", label: "women in Sakhi's India" },
  { n: "57%", label: "have a condition they don't know about" },
];

const demoPeople = [
  { initials: "KK", highlight: true },
  { initials: "SS" },
  { initials: "AB" },
];

export const headerSpecimens: SpecimenGroup = {
  id: "headers",
  label: "Page headers",
  blurb:
    "The band at the top of a page. header-01 is the site standard and is what every nav page uses; the rest are the earlier per-page treatments, kept available as add-ons you drop into the same PageHero.",
  items: [
    {
      id: "header-01",
      name: "Mesh gradient minimal",
      note: "The site standard. Three soft colour fields, a little grain, and nothing else. Use unless there is a reason not to.",
      bleed: true,
      preview: (
        <Stage backdrop="mesh" className="text-center">
          <span className="eyebrow">The vision</span>
          <h3 className="text-h3 mt-4 text-foreground">
            We&rsquo;re not building <GradientText>an app</GradientText>
          </h3>
          <p className="mx-auto mt-4 max-w-[38ch] text-[14.5px] leading-relaxed text-muted-foreground">
            The confidence is in the emptiness, not in what is added.
          </p>
        </Stage>
      ),
      code: `import { GradientText, PageHero } from "@/components/ui/section";

<PageHero
  eyebrow="The vision"
  title={<>We&rsquo;re not building <GradientText>an app</GradientText></>}
  lead="One line of lead copy."
/>`,
    },
    {
      id: "header-02",
      name: "Dot grid and spotlight",
      note: "The busier backdrop the mesh replaced. Reach for it when a page needs more energy at the top.",
      bleed: true,
      preview: (
        <Stage backdrop="dotgrid" className="text-center">
          <span className="eyebrow">The app</span>
          <h3 className="text-h3 mt-4 text-foreground">
            Built for the way women <GradientText>actually live</GradientText>
          </h3>
        </Stage>
      ),
      code: `<PageHero
  backdrop="dotgrid"
  eyebrow="The app"
  title={<>Built for the way women <GradientText>actually live</GradientText></>}
  lead="One line of lead copy."
/>`,
    },
    {
      id: "header-03",
      name: "Data bar",
      note: "Numbers in the reading line, ruled above and below. Opens a page on evidence rather than decoration.",
      preview: <HeroStatBar stats={demoStats} />,
      code: `import { HeroStatBar } from "@/components/ui/page-hero-variants";

<PageHero eyebrow="Health library" title={...} lead="...">
  <HeroStatBar stats={stats} />
</PageHero>`,
    },
    {
      id: "header-04",
      name: "Avatar cluster",
      note: "Overlapping initials, alternately rotated. Puts faces before words on a people page.",
      preview: <HeroAvatarCluster people={demoPeople} />,
      code: `import { HeroAvatarCluster } from "@/components/ui/page-hero-variants";

<PageHero eyebrow="The team" title={...} lead="...">
  <HeroAvatarCluster people={teamMembers} className="justify-center" />
</PageHero>`,
    },
    {
      id: "header-05",
      name: "Segmented wayfinding",
      note: "The page's own sections as pill links, so a visitor picks a lane before scrolling.",
      preview: (
        <HeroPillLinks
          links={[
            { id: "a", title: "Download", icon: Download },
            { id: "b", title: "Spread the word", icon: Megaphone },
            { id: "c", title: "Partner", icon: Handshake },
          ]}
        />
      ),
      code: `import { HeroPillLinks } from "@/components/ui/page-hero-variants";

<PageHero eyebrow="Join the mission" title={...} lead="...">
  <HeroPillLinks links={ways} />
</PageHero>`,
    },
    {
      id: "header-06",
      name: "Tag row",
      note: "Flat blush tags. Quieter than pill links: these are attributes, not destinations.",
      preview: <HeroTagRow tags={["Warm", "Honest", "Calm", "Direct", "Intimate"]} />,
      code: `import { HeroTagRow } from "@/components/ui/page-hero-variants";

<PageHero eyebrow="Brand system" title={...} lead="...">
  <HeroTagRow tags={["Warm", "Honest", "Calm", "Direct", "Intimate"]} />
</PageHero>`,
    },
    {
      id: "header-07",
      name: "Swatch ribbon",
      note: "The palette as hero art, each fill revealing its hex on hover. Full-bleed, so it goes inside the section, not the container.",
      bleed: true,
      preview: (
        <HeroSwatchRibbon
          colors={[
            { hex: "#F61887", bg: "#F61887" },
            { hex: "#D4006E", bg: "#D4006E" },
            { hex: "#F8E5EC", bg: "#F8E5EC" },
            { hex: "#F8F2F4", bg: "#F8F2F4" },
            { hex: "#050406", bg: "#050406" },
          ]}
        />
      ),
      code: `import { HeroSwatchRibbon } from "@/components/ui/page-hero-variants";

// Full-bleed: place inside the hero <section>, after </Container>.
<HeroSwatchRibbon colors={colors} />`,
    },
    {
      id: "header-08",
      name: "Notice card",
      note: "The bordered caveat. Sakhi is a health product, so the not-medical-advice line belongs in the header, styled as information rather than warning.",
      preview: (
        <HeroNoticeCard>
          <strong className="font-semibold text-foreground">Sakhi does not diagnose.</strong> It
          tracks patterns and tells her when to see a doctor.
        </HeroNoticeCard>
      ),
      code: `import { HeroNoticeCard } from "@/components/ui/page-hero-variants";

<PageHero eyebrow="Health library" title={...} lead="...">
  <HeroNoticeCard className="mt-8">
    <strong className="font-semibold text-foreground">Sakhi does not diagnose.</strong> ...
  </HeroNoticeCard>
</PageHero>`,
    },
    {
      id: "header-09",
      name: "Split with visual",
      note: "Copy left, a strong image or map right at lg+. Collapses to the centred layout on small screens.",
      bleed: true,
      preview: (
        <Stage backdrop="mesh">
          <div className="grid items-center gap-8 sm:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="eyebrow">The people</span>
              <h3 className="text-h3 mt-4 text-foreground">
                Built <GradientText>by people who care</GradientText>
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                Copy holds the left column, the visual holds the right.
              </p>
            </div>
            <ImagePlaceholder className="aspect-4/3" label="India map, reach by city" />
          </div>
        </Stage>
      ),
      code: `<PageHero
  eyebrow="The people behind Sakhi"
  title={...}
  lead="..."
  visual={<IndiaMap />}
/>`,
    },
    {
      id: "header-10",
      name: "Proof marquee",
      note: "The feature set or press list scrolling under the claim. Full-bleed, sits after the container inside the hero section.",
      bleed: true,
      preview: (
        <div className="flex flex-wrap justify-center gap-2.5 px-8 py-6">
          {[
            "Cycle tracking",
            "Sakhi AI",
            "Doctor report",
            "Be Her Sakhi",
            "Works offline",
            "16 conditions",
          ].map((l) => (
            <span
              key={l}
              className="rounded-full border border-border bg-card px-4 py-2 text-[12.5px] font-medium text-foreground"
            >
              {l}
            </span>
          ))}
        </div>
      ),
      code: `import { HeroMarquee } from "@/components/ui/page-hero-variants";

// Full-bleed: place inside the hero <section>, after </Container>.
<HeroMarquee items={features.map((f) => ({ label: f.title }))} speed="slow" />`,
    },
  ],
};
