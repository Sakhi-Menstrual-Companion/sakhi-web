"use client";

import Image from "next/image";

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import screenSummary from "@/assets/app-screen-summary.png";
import screenTrack from "@/assets/app-screen-track.png";
import screenEmergency from "@/assets/app-screen-emergency-request.png";

const appStoreUrl = "https://apps.apple.com/app/id6742219623";

// PLACEHOLDER, swap in the real Play Store link.
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.galgotiasuniversity.rachnasakhi";

function AppleMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/* Redrawn Google Play mark: the play triangle split into four colour regions
   by its spine midpoint and fold point. Same drawing as the hero's StoreButtons. */
function PlayMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="3.5,1.6 3.5,12 13.4,12" fill="#00D95F" />
      <polygon points="3.5,12 3.5,22.4 13.4,12" fill="#00A0FF" />
      <polygon points="3.5,1.6 13.4,12 20.7,12" fill="#FFCE00" />
      <polygon points="3.5,22.4 13.4,12 20.7,12" fill="#FF3A44" />
    </svg>
  );
}

/* Three real screens fanned like a hand of cards, on a barely-there blush
   wash rather than a photo or illustration, so what a visitor sees before
   they've even installed the app is the app itself. The centre card sits
   flat and in front; the two side cards tilt away and sit a shade further
   back, purely with z-index and a lighter shadow, no blur or opacity trick
   that would make them look disabled. */
function ScreenshotFan() {
  const tile =
    "absolute w-24 rounded-2xl ring-4 ring-white shadow-[0_16px_30px_rgba(0,0,0,0.12)] overflow-hidden";
  return (
    <div className="relative h-56 w-full">
      <div
        className={cn(tile, "top-7 left-1/2 translate-x-[-130%] rotate-[-10deg]")}
        aria-hidden="true"
      >
        <Image src={screenTrack} alt="" className="h-auto w-full" sizes="96px" />
      </div>
      <div
        className={cn(tile, "top-7 left-1/2 translate-x-[30%] rotate-10")}
        aria-hidden="true"
      >
        <Image src={screenEmergency} alt="" className="h-auto w-full" sizes="96px" />
      </div>
      <div
        className={cn(
          tile,
          "top-1 left-1/2 w-28 -translate-x-1/2 shadow-[0_20px_40px_rgba(0,0,0,0.16)]"
        )}
      >
        <Image src={screenSummary} alt="Sakhi's Summary screen" className="h-auto w-full" sizes="112px" />
      </div>
    </div>
  );
}

/**
 * The one place on the site that asks "which store" instead of assuming.
 * Every inline Download control (nav pill, mobile sheet) opens this instead
 * of linking straight to the App Store, so an Android reader is never routed
 * to a listing they can't install. Both store links open in a new tab; the
 * modal itself stays open underneath since navigating away was never the
 * intent.
 */
export function DownloadModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md overflow-hidden p-0">
        <div className="bg-linear-to-b from-accent-faint to-white pt-14 pb-10">
          <ScreenshotFan />
        </div>

        <div className="px-9 pt-2 pb-11 text-center">
          <DialogTitle className="text-h3 mx-auto max-w-[18ch] text-foreground">
            Download Sakhi to your phone
          </DialogTitle>
          <DialogDescription className="mx-auto mt-3 max-w-[32ch] text-[15px] leading-relaxed text-muted-foreground">
            Free, no ads, nothing sold on. Pick your store to get started.
          </DialogDescription>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-white no-underline",
                "transition-transform duration-200 hover:-translate-y-0.5"
              )}
            >
              <AppleMark /> App Store
            </a>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border border-border bg-background-shell px-6 py-3.5 text-[15px] font-semibold text-foreground no-underline shadow-[0_1px_4px_rgba(0,0,0,0.06)]",
                "transition-transform duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted"
              )}
            >
              <PlayMark /> Google Play
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
