"use client";

import { ArrowRight } from "lucide-react";

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
 * The two people who built Sakhi.
 *
 * The card carried everything at once: portrait, name, role, joining date, a
 * pull quote, a full bio, and six contribution chips under their own heading.
 * All of it true, all of it worth saying, and stacked in one box it read as a
 * wall rather than an introduction. The card is now the introduction, and
 * "Learn more" holds the rest.
 *
 * Same split as the feature gallery on /product: a short version that can be
 * skimmed, a fuller one a click away, and one modal pattern across the site.
 *
 * A client component because of the modals, so it owns its own content the
 * way HealthConditions and LifeStages do.
 *
 * Facts here are checked against 01-AI/Timeline.md. Do not add a role, a date
 * or a contribution that is not recorded there.
 */
type Member = {
  id: string;
  name: string;
  role: string;
  since: string;
  /** The card. Two lines, and it stops. */
  short: string;
  /** The modal. */
  bio: string;
  quote: string;
  contributions: string[];
  highlight: boolean;
};

const team: Member[] = [
  {
    id: "karan",
    name: "Karan Kumar",
    role: "Founder & Product Lead",
    since: "January 2024",
    short:
      "Started Sakhi at the ISDP Bootcamp in January 2024. Leads product, iOS, and the direction of v2.",
    bio: "Karan started Sakhi as Team 07 at the ISDP Bootcamp, Galgotias University, in January 2024. He leads product strategy, iOS development, AI integration, and the overall direction of Sakhi. Returned full-time on May 10, 2026 to lead the v2 launch.",
    quote: "Product is not what you build. It is the problem you solve.",
    contributions: [
      "iOS App (Swift/SwiftUI)",
      "Claude AI Integration",
      "Product Strategy",
      "Brand Vision",
      "Sakhi Design System",
      "v2 Architecture",
    ],
    highlight: true,
  },
  {
    id: "shruti",
    name: "Shruti Sachdeva",
    role: "Design Lead",
    since: "January 2024",
    short:
      "The visual mind behind Sakhi. Designed the logo, the brand system, and every screen of the app.",
    bio: "Shruti is the visual mind behind Sakhi. She designed the logo, the brand system, the design language, and every screen of the app. The warmth and clarity that makes Sakhi feel trusted is Shruti's work.",
    quote: "Design is not decoration. It is the experience.",
    contributions: [
      "Logo & Brand Identity",
      "Design System",
      "UI/UX Design",
      "App Screens",
      "Brand Guidelines",
      "Visual Communication",
    ],
    highlight: false,
  },
];

export function TeamCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 gap-7 lg:grid-cols-2", className)}>
      {team.map((member) => (
        <Dialog key={member.id}>
          <article
            className={cn(
              "flex flex-col overflow-hidden rounded-3xl border bg-card",
              member.highlight ? "border-secondary/25" : "border-border"
            )}
          >
            {/* Placeholder until the portraits are shot. Squared off and
                stripped of its side borders so it reads as part of the card
                rather than a framed box floating inside one. */}
            <ImagePlaceholder
              className="aspect-4/3 rounded-none border-x-0 border-t-0"
              label={`Portrait, ${member.name}`}
            />

            <div className="flex flex-1 flex-col p-8">
              <h3 className="text-h4 text-foreground">{member.name}</h3>
              <p className="mt-1 text-[13.5px] font-medium text-secondary">{member.role}</p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">
                {member.short}
              </p>

              {/* mt-auto keeps both cards' links on the same line even when
                  one summary wraps to a third line. */}
              <DialogTrigger
                className={cn(
                  "mt-auto inline-flex cursor-pointer items-center gap-1.5 self-start pt-7",
                  "text-[15px] font-semibold text-secondary underline-offset-[3px] hover:underline",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                )}
              >
                Learn more
                <ArrowRight className="size-4" aria-hidden="true" />
              </DialogTrigger>
            </div>
          </article>

          <DialogContent className="max-w-none p-10 sm:max-w-[50vw] sm:p-12">
            <p className="text-[15px] font-semibold tracking-tight text-secondary">{member.role}</p>
            <DialogTitle className="text-h2 mt-3 font-semibold text-foreground">
              {member.name}
            </DialogTitle>
            <p className="mt-2 text-[13px] text-muted-foreground">Since {member.since}</p>

            <blockquote className="mt-8 text-[19px] leading-snug tracking-[-0.01em] text-foreground italic">
              &ldquo;{member.quote}&rdquo;
            </blockquote>

            <DialogDescription className="mt-6 max-w-[70ch] text-[16px] leading-relaxed text-muted-foreground">
              {member.bio}
            </DialogDescription>

            <div className="mt-9 border-t border-border pt-7">
              <span className="eyebrow">What they built</span>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {member.contributions.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-accent-faint px-3 py-1.5 text-[11.5px] font-medium text-secondary"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
