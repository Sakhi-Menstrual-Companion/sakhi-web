"use client";

import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

import lifestyleCycleOverhead from "@/assets/lifestyle-cycle-overhead.jpg";
import lifestyleSakhiAiChat from "@/assets/lifestyle-sakhi-ai-chat.jpg";
import lifestyleDayOneCalendar from "@/assets/lifestyle-day-one-calendar.jpg";
import framedLog from "@/assets/framed-log.png";
import framedCare from "@/assets/framed-care.png";
import framedStayWithMeStart from "@/assets/framed-stay-with-me-start.png";
import framedWatchToday from "@/assets/framed-watch-today.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { cn } from "@/lib/utils";

/**
 * The nine features, as an alternating image-and-copy gallery.
 *
 * This started as a three-column card grid, became a scrolling rail, and is a
 * gallery now. The rail solved the grid's height problem but kept its real
 * one: nine equal tiles read as a spec sheet, and a visitor skims the titles
 * without any of them landing. A row per feature, with the image switching
 * sides down the page, gives each one its own moment and a picture to hang it
 * on.
 *
 * No icon tile on the row. In a card it was the only thing separating one
 * tile from the next; at a row per feature the image is doing that job, and a
 * small pink square above the title was just another thing to look at.
 *
 * Every row's "Learn more" opens a modal, so `desc` stays the version a
 * skimmer reads and `body` is the fuller answer one click away.
 *
 * It lives here rather than in the page because the modals make it a client
 * component. Same shape as HealthConditions and LifeStages, which also own
 * their own content.
 *
 * Copy rule: `desc` and `body` may only restate what the feature actually
 * does. Nothing in here should be a new product promise, and nothing should
 * imply Sakhi diagnoses anything.
 */
/*
 * Art is drawn from what this repo actually has. Five features had a real
 * asset that shows the feature itself; the other four have nothing that does,
 * and are left as labelled placeholders rather than filled with a photo from
 * some other part of the site. A picture of a different screen under a
 * feature's name is worse than an empty well: it reads as a claim about what
 * the feature looks like.
 *
 * Every image is object-cover in a square well. The phone mockups are
 * portrait and carry a blush surround baked in that does not match
 * --accent-faint exactly, so they are cropped from the top rather than
 * letterboxed against a background that would show a seam.
 */
type Feature = {
  title: string;
  desc: string;
  image?: StaticImageData;
  imageAlt?: string;
  /** Crop anchor. "top" for the portrait phone mockups, which lose their point if centred. */
  imageAlign?: "center" | "top";
  /**
   * "contain" for the device-framed 2.0.3 captures, which are a whole phone or watch on a
   * transparent canvas. Cropping those cuts the device in half, so they sit inside the
   * well on --accent-faint instead.
   */
  imageFit?: "cover" | "contain";
  /** Brief for whoever shoots the missing art. Only used when `image` is absent. */
  imageLabel: string;
  headline: string;
  body: [string, string];
};

const features: Feature[] = [
  {
    title: "Cycle tracking",
    desc: "Period start and end, cycle length prediction, phase tracking and PMS alerts, all in one place. Sakhi learns your rhythm as you log and tells you which phase you are in today, not only when the next period is due. Know where you are, always.",
    image: lifestyleCycleOverhead,
    imageAlt:
      "Overhead view of a woman holding the Sakhi app, showing 18 days until her next period and the August calendar",
    imageLabel: "Summary screen, cycle phase and calendar",
    headline: "Know where you are in your cycle, every day.",
    body: [
      "Log the day your period starts and the day it ends. Sakhi works out your cycle length over time and shows you which phase you are in right now, so you are not counting backwards on a calendar to figure it out.",
      "Predictions get steadier the longer you log. If your cycle is irregular, Sakhi shows you what it is actually seeing in your data rather than pretending to know more than it does.",
    ],
  },
  {
    title: "Body logging",
    desc: "Flow, cramps, headache, bloating, acne, weight, basal body temperature and medication. Log any of it on any day, in a few taps, and skip the days you would rather not. Nothing here is compulsory, and the picture still builds as long as you keep coming back to it.",
    image: framedLog,
    imageFit: "contain",
    imageAlt:
      "Logging a day in Sakhi: flow intensity at the top, then symptoms such as acne, cramps and headache",
    imageLabel: "Track screen, logging symptoms for the day",
    headline: "Log any symptom, on any day.",
    body: [
      "Flow, cramps, headache, bloating, acne, weight, basal body temperature and medication. You can log what happened today in a few taps, and skip the days you do not feel like logging anything at all.",
      "One entry on its own says very little. Months of entries start to show a pattern, and a pattern is something you can take to a doctor and talk about.",
    ],
  },
  {
    title: "Mood & mental health",
    desc: "Happy, calm, tired, anxious, irritated, sad or angry. Mood sits alongside the physical symptoms, because it belongs in the same picture. Over a few cycles you start to see how the two move together, and which weeks tend to be the harder ones.",
    imageLabel: "Mood logging, plotted against cycle phase",
    headline: "See how your cycle and how you feel move together.",
    body: [
      "Mood is logged the same way as physical symptoms, in one tap, because it belongs in the same picture as everything else.",
      "Across a few cycles you can see whether the harder days land in roughly the same place each month. Sometimes just knowing it is coming makes it easier to carry.",
    ],
  },
  {
    title: "Apple Watch",
    desc: "See your day at a glance, log flow in a tap, and run Stay With Me from your wrist, so you do not have to hold your phone out on the walk home. When the walk is on, one tap tells the person you chose that you are okay.",
    image: framedWatchToday,
    imageFit: "contain",
    imageAlt: "Sakhi on Apple Watch: Today, 18 days until next period, follicular phase, and a plus button to log",
    imageLabel: "Sakhi on Apple Watch, the Today screen",
    headline: "Sakhi, on your wrist.",
    body: [
      "The watch shows where you are in your cycle and lets you log flow without picking up your phone.",
      "It also runs Stay With Me. You can start the walk, see how long is left, check in with one tap, and say you are home, all from your wrist.",
    ],
  },
  {
    title: "Doctor report",
    desc: "Everything you log compiles into a clean PDF you can hand to your gynaecologist. It stays current, so the history is ready before the appointment rather than written from memory in the waiting room. Free to export, always.",
    imageLabel: "The exported Doctor Report PDF",
    headline: "Walk into your appointment with it already written down.",
    body: [
      "Everything you log compiles into a clean PDF you can hand to your gynaecologist. It stays current, so the history is ready before the appointment instead of being written from memory in the waiting room.",
      "It is free to export, always. It means the conversation can start from what actually happened over the last few months, not from what you can recall in a ten minute visit.",
    ],
  },
  {
    title: "Sakhi AI",
    desc: "Personalised answers based on your own cycle data and symptom history, not generic health tips written for nobody in particular. Ask it plainly, in your own words, at whatever hour the question turns up. It explains what it sees, and it does not diagnose.",
    image: lifestyleSakhiAiChat,
    imageAlt:
      "A woman asking Sakhi AI about cramps and fever, and reading its reply",
    imageLabel: "Sakhi AI chat, answering from her own logs",
    headline: "Ask the question you would never Google.",
    body: [
      "Sakhi AI answers using your own cycle data and symptom history, not generic health tips written for nobody in particular. You can ask it plainly, in your own words, at whatever hour the question turns up.",
      "It does not diagnose. It explains what it is seeing in your logs, and it tells you when something is worth taking to a doctor.",
    ],
  },
  {
    title: "Stay With Me",
    desc: "Walking home late, or getting a ride? Say where you are going and by when. Until you get there, the person you choose can see you moving, and if you are not there in time, their phone rings. Your location is shared only while the walk is on.",
    image: framedStayWithMeStart,
    imageFit: "contain",
    imageAlt:
      "Starting Stay With Me: a map, a destination search, the time she will reach by, check-ins every ten minutes, and call buttons for 112, 108 and 181",
    imageLabel: "Stay With Me, starting a walk home",
    headline: "Walk home with someone watching over you.",
    body: [
      "Say where you are going and by when. Until you get there, the person you choose can see you moving. Reaching your place ends the walk and lets them know you arrived. They can also ask to stay with you, and you decide whether to accept.",
      "If you are not there in time, their phone rings, so someone knows before you have to ask. Your location stops being shared the moment the walk ends, and 112, 108 and 181 are one tap away on the same screen. Sakhi is not an emergency service.",
    ],
  },
  {
    title: "Be Her Sakhi",
    desc: "Curated updates and care guidance can be shared with one person you trust, if that is something you want. What is shared, and when, is your decision and nobody else's. It is completely optional, and Sakhi works fully without it.",
    image: framedCare,
    imageFit: "contain",
    imageAlt:
      "Be Her Sakhi: You and Him, with what he can see and a button to remove him at any time",
    imageLabel: "Be Her Sakhi, choosing what a trusted person can see",
    headline: "Share with one trusted person, only if you want to.",
    body: [
      "Be Her Sakhi can share curated updates and care guidance with one person you trust. What is shared, and when, is your decision and nobody else's.",
      "It is completely optional. Sakhi works fully without it, and adding someone means sharing personal health information with them, so that choice belongs entirely to you.",
    ],
  },
  {
    title: "Offline first",
    desc: "Core logging, predictions and the Doctor Report all work with no signal at all. You do not need a connection to record the day you are having, and nothing waits for you to find a network first. Your health does not wait for WiFi.",
    image: lifestyleDayOneCalendar,
    imageAlt: "A woman on a sofa logging day 1 of her period in Sakhi",
    imageLabel: "Logging a day with no network connection",
    headline: "Works with no signal at all.",
    body: [
      "Core logging, predictions and the Doctor Report all work offline. You do not need a connection to record the day you are having.",
      "Your health does not wait for WiFi, and the app you use to keep track of it should not either.",
    ],
  },
];

export function FeatureGallery({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-24 lg:gap-32", className)}>
      {features.map(
        (
          {
            title,
            desc,
            image,
            imageAlt,
            imageAlign,
            imageFit,
            imageLabel,
            headline,
            body,
          },
          i,
        ) => {
          // Image left on even rows, right on odd. The DOM order is copy first
          // in every row, so a screen reader and a narrow viewport both read
          // title before picture whichever side the picture ends up on.
          //
          // The two columns stay 1fr each rather than being weighted toward the
          // image: with the order swapping every row, an asymmetric track would
          // hand the wide column to the copy on alternate rows. The image gets
          // its size from a taller aspect and a tighter gap instead.
          const imageLeft = i % 2 === 0;

          return (
            <Dialog key={title}>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className={cn(imageLeft && "lg:order-2")}>
                  {/* Deliberately between the tokens: text-h3 caps at 28px,
                    which is small for a row that owns half the viewport, and
                    text-h2 is what the section heading above already uses, so
                    reaching for it would flatten the two into one level.
                    28 -> 34px sits in the gap, with the scale's own tracking
                    rhythm (h2 is -0.024em, h3 -0.018em). */}
                  <h3 className="max-w-[16ch] text-[1.75rem] leading-[1.15] font-semibold tracking-[-0.02em] text-foreground sm:text-[2.125rem]">
                    {title}
                  </h3>
                  {/* No measure cap. The column is already half the page, so
                      capping inside it ended the text short of its own column
                      edge, which is the in-between width the site rule rules
                      out. Half the page is the measure. */}
                  <p className="mt-5 text-[15.5px] leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                  <DialogTrigger
                    className={cn(
                      "mt-7 inline-flex cursor-pointer items-center gap-1.5 text-[15px] font-semibold text-secondary",
                      "underline-offset-[3px] hover:underline",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary",
                    )}
                  >
                    Learn more
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </DialogTrigger>
                </div>

                {/* An aspect utility rather than a fixed height, so the four
                  wells still waiting on art hold exactly the space their
                  picture will take and nothing shifts when it lands. Square
                  rather than 4/3: these hold phone screens, which are
                  portrait, and the taller box is both closer to what goes in
                  and the bigger picture on the page. */}
                {image ? (
                  <div
                    className={cn(
                      "relative aspect-square overflow-hidden rounded-xl",
                      imageFit === "contain" && "bg-accent-faint",
                      imageLeft && "lg:order-1",
                    )}
                  >
                    <Image
                      src={image}
                      alt={imageAlt ?? ""}
                      fill
                      className={cn(
                        imageFit === "contain" ? "object-contain p-6 sm:p-12" : "object-cover",
                        imageAlign === "top" ? "object-top" : "object-center",
                      )}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <ImagePlaceholder
                    className={cn("aspect-square", imageLeft && "lg:order-1")}
                    label={imageLabel}
                  />
                )}
              </div>

              {/* 50vw at sm and up; full width below that, where 50vw would leave
                the copy in a column too narrow to read. The panel is wide but
                the type inside is not: line length stays capped in ch so a
                paragraph never runs the full width of a large monitor. */}
              <DialogContent className="max-w-none p-10 sm:max-w-[50vw] sm:p-12">
                <p className="text-[15px] font-semibold tracking-tight text-foreground">
                  {title}
                </p>
                <DialogTitle className="text-h2 mt-4 max-w-[24ch] font-semibold text-foreground">
                  {headline}
                </DialogTitle>
                <DialogDescription className="mt-6 max-w-[70ch] text-[16px] leading-relaxed text-muted-foreground">
                  {body[0]}
                </DialogDescription>
                <p className="mt-4 max-w-[70ch] text-[16px] leading-relaxed text-muted-foreground">
                  {body[1]}
                </p>
              </DialogContent>
            </Dialog>
          );
        },
      )}
    </div>
  );
}
