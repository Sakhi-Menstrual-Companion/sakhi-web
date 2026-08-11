import {
  AlertTriangle,
  ChevronRight,
  Download,
  Home,
  Info,
  Menu,
  Search,
  SearchX,
} from "lucide-react";

import SakhiLogo from "@/components/ui/SakhiLogo";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import type { SpecimenGroup } from "./types";

/**
 * Wayfinding and page furniture: the bars, rails and rules that tell a reader
 * where they are rather than what the product does.
 */

export const navSpecimens: SpecimenGroup = {
  id: "navigation",
  label: "Navigation",
  blurb:
    "Getting around. The live site uses nav-01; the rest are for pages dense enough to need a second level of wayfinding.",
  items: [
    {
      id: "nav-01",
      name: "Floating pill bar",
      note: "The site navbar. A dark translucent pill over the page, not a full-width band. Clearance is --nav-clearance.",
      preview: (
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-full bg-ink px-5 py-3">
          <SakhiLogo size={20} tone="pink" />
          <div className="hidden gap-5 text-[13px] text-white/70 sm:flex">
            {["Story", "Features", "Health", "Vision"].map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <span className="rounded-full bg-secondary px-4 py-1.5 text-[13px] font-semibold text-white">
            Download
          </span>
        </div>
      ),
      code: `/* src/components/layout/Navbar.tsx — one instance, in the root layout. */
/* Pages clear it with: pt-[calc(var(--nav-clearance)+3.5rem)] */`,
    },
    {
      id: "nav-02",
      name: "Breadcrumb",
      note: "For pages two levels deep, like a single condition inside the health library. Current page is not a link.",
      preview: (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px]">
          <a href="#navigation" className="text-muted-foreground no-underline hover:text-secondary">
            <Home className="inline size-3.5" aria-hidden="true" />
          </a>
          <ChevronRight className="size-3.5 text-border" aria-hidden="true" />
          <a href="#navigation" className="text-muted-foreground no-underline hover:text-secondary">
            Health library
          </a>
          <ChevronRight className="size-3.5 text-border" aria-hidden="true" />
          <span className="font-semibold text-foreground" aria-current="page">
            PCOD / PCOS
          </span>
        </nav>
      ),
      code: `<nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px]">
  <Link href="/health" className="text-muted-foreground no-underline hover:text-secondary">Health library</Link>
  <ChevronRight className="size-3.5 text-border" aria-hidden="true" />
  <span className="font-semibold text-foreground" aria-current="page">{title}</span>
</nav>`,
    },
    {
      id: "nav-03",
      name: "Section tabs",
      note: "Filter or switch within a page. Active tab carries the blush fill, never a heavy border.",
      preview: (
        <div className="flex flex-wrap gap-2">
          {["All 16", "Hormonal", "Pain", "Mental", "Reproductive", "Systemic"].map((t, i) => (
            <span
              key={t}
              className={
                i === 0
                  ? "rounded-full bg-accent-faint px-4 py-1.5 text-[13px] font-semibold text-secondary"
                  : "rounded-full border border-border bg-card px-4 py-1.5 text-[13px] text-muted-foreground"
              }
            >
              {t}
            </span>
          ))}
        </div>
      ),
      code: `<button className={cn(
  "rounded-full px-4 py-1.5 text-[13px]",
  active ? "bg-accent-faint font-semibold text-secondary" : "border border-border bg-card text-muted-foreground"
)}>{label}</button>`,
    },
    {
      id: "nav-04",
      name: "Sticky side rail",
      note: "In-page contents for a long article. Highlights the section in view, hidden below lg.",
      preview: (
        <div className="max-w-[16rem]">
          <p className="eyebrow mb-3">On this page</p>
          <ul className="list-none space-y-0.5 p-0">
            {[
              "What PCOS is",
              "Why it gets missed for years",
              "What Sakhi tracks for it",
              "When to see a doctor",
            ].map((t, i) => (
              <li key={t}>
                <span
                  className={
                    i === 1
                      ? "block rounded-lg bg-accent-faint px-3 py-1.5 text-[13.5px] font-semibold text-secondary"
                      : "block rounded-lg px-3 py-1.5 text-[13.5px] text-muted-foreground"
                  }
                >
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ),
      code: `/* See src/components/design/design-system-browser.tsx: an
   IntersectionObserver with rootMargin "-80px 0px -70% 0px" so the highlight
   tracks what you are reading rather than what happens to be centred. Pass the
   scrolling ancestor as the observer root when the rail lives inside a dialog,
   or it will never fire. */`,
    },
    {
      id: "nav-05",
      name: "Prev / next pager",
      note: "End-of-article navigation. Two ruled cells, direction labelled above the title.",
      preview: (
        <div className="grid gap-3 border-t border-border pt-5 sm:grid-cols-2">
          {[
            { d: "Previous", t: "Amenorrhea" },
            { d: "Next", t: "Thyroid disorders" },
          ].map((p, i) => (
            <a
              key={p.d}
              href="#navigation"
              className={`rounded-xl border border-border bg-card p-4 no-underline ${i === 1 ? "sm:text-right" : ""}`}
            >
              <span className="eyebrow">{p.d}</span>
              <span className="mt-1 block text-[14.5px] font-semibold text-foreground">{p.t}</span>
            </a>
          ))}
        </div>
      ),
      code: `<div className="grid gap-3 border-t border-border pt-5 sm:grid-cols-2">
  <Link href={prev.href} className="rounded-xl border border-border bg-card p-4 no-underline">
    <span className="eyebrow">Previous</span>
    <span className="mt-1 block text-[14.5px] font-semibold text-foreground">{prev.title}</span>
  </Link>
</div>`,
    },
    {
      id: "nav-06",
      name: "Mobile menu trigger",
      note: "The hamburger and its sheet. Body scroll locks while open, Escape closes it.",
      preview: (
        <div className="flex items-center gap-4">
          <span className="grid size-10 place-items-center rounded-full border border-border bg-card text-foreground">
            <Menu className="size-5" aria-hidden="true" />
          </span>
          <span className="text-[13px] text-muted-foreground">opens a full-height sheet</span>
        </div>
      ),
      code: `/* src/components/layout/Navbar.tsx handles the sheet:
   document.body.style.overflow = "hidden" while open,
   keydown listener for Escape, both cleaned up on unmount. */`,
    },
    {
      id: "nav-07",
      name: "Search field",
      note: "For the health library index. Rounded, muted fill, icon inside the field rather than beside it.",
      preview: (
        <div className="relative max-w-sm">
          <Search
            className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search conditions"
            className="w-full rounded-full border border-border bg-card py-2.5 pr-4 pl-11 text-[14px] text-foreground placeholder:text-muted-foreground"
          />
        </div>
      ),
      code: `<div className="relative max-w-sm">
  <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
  <input type="search" placeholder="Search conditions"
    className="w-full rounded-full border border-border bg-card py-2.5 pr-4 pl-11 text-[14px] text-foreground placeholder:text-muted-foreground" />
</div>`,
    },
    {
      id: "nav-08",
      name: "Skip link",
      note: "Keyboard-only, first focusable element on the page. Not optional: without it every visit starts with the whole nav.",
      preview: (
        <span className="inline-block rounded-lg bg-secondary px-4 py-2 text-[13.5px] font-semibold text-white">
          Skip to content
        </span>
      ),
      code: `<a href="#main" className="sr-only rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200]">
  Skip to content
</a>`,
    },
    {
      id: "nav-09",
      name: "Floating action",
      note: "A single persistent shortcut, bottom right. Quiet circular button, below the navbar in stacking order.",
      preview: (
        <div className="flex items-center gap-4">
          <span className="grid size-12 place-items-center rounded-full bg-ink text-white shadow-[0_10px_30px_rgba(5,4,6,0.28)]">
            <Download className="size-5" aria-hidden="true" />
          </span>
          <span className="text-[13px] text-muted-foreground">fixed right-5 bottom-5 z-[90]</span>
        </div>
      ),
      code: `<Link href="/design-system" aria-label="Open the design system"
  className="fixed right-5 bottom-5 z-[90] grid size-12 place-items-center rounded-full bg-ink text-white no-underline shadow-[0_10px_30px_rgba(5,4,6,0.28)] transition-transform duration-200 hover:scale-105 sm:right-7 sm:bottom-7">
  <Shapes className="size-5" aria-hidden="true" />
</Link>`,
    },
    {
      id: "nav-10",
      name: "Footer link columns",
      note: "The site footer's grid. Product, Company, Connect, with the wordmark and one line of copy holding the first column.",
      preview: (
        <div className="grid gap-8 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <SakhiLogo size={22} tone="pink" />
            <p className="mt-3 max-w-[22ch] text-[13.5px] text-muted-foreground">
              A Friend In Every Cycle.
            </p>
          </div>
          {[
            { h: "Product", l: ["Features", "Health library", "Brand"] },
            { h: "Company", l: ["Our story", "Vision", "Team", "Press"] },
          ].map((col) => (
            <div key={col.h}>
              <p className="eyebrow mb-3">{col.h}</p>
              <ul className="list-none space-y-2 p-0 text-[13.5px] text-muted-foreground">
                {col.l.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
      code: `/* src/components/layout/Footer.tsx — shares Container with every other
   band so the columns sit on the page's content edge. */`,
    },
  ],
};

export const feedbackSpecimens: SpecimenGroup = {
  id: "feedback",
  label: "Banners and states",
  blurb:
    "What the page says when something is announced, missing or wrong. On a health product these carry weight, so none of them may be flippant.",
  items: [
    {
      id: "state-01",
      name: "Announcement bar",
      note: "One line above the fold for a launch or a change. Dismissible, and never covering the nav.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl bg-accent-faint px-5 py-3 text-[13.5px]">
          <span className="font-semibold text-secondary">Now on Android.</span>
          <span className="text-muted-foreground">Sakhi v2 is live on both stores.</span>
        </div>
      ),
      code: `<div className="flex flex-wrap items-center justify-center gap-2 rounded-xl bg-accent-faint px-5 py-3 text-[13.5px]">
  <span className="font-semibold text-secondary">Now on Android.</span>
  <span className="text-muted-foreground">Sakhi v2 is live on both stores.</span>
</div>`,
    },
    {
      id: "state-02",
      name: "Informational notice",
      note: "Neutral context inside a page. Icon, rule, muted fill. Not a warning, so no red anywhere.",
      preview: (
        <div className="flex items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4">
          <Info className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <p className="text-[13.5px] leading-relaxed text-muted-foreground">
            Figures on this page come from published research. Each one links to its source.
          </p>
        </div>
      ),
      code: `import { HeroNoticeCard } from "@/components/ui/page-hero-variants";

<HeroNoticeCard>Body copy, with a <strong className="font-semibold text-foreground">lead clause</strong>.</HeroNoticeCard>`,
    },
    {
      id: "state-03",
      name: "Medical disclaimer",
      note: "The one Sakhi must always be able to show. States plainly that the app does not diagnose. Never soften this copy.",
      preview: (
        <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/40 px-5 py-4">
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
          <p className="text-[13.5px] leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">Sakhi does not diagnose.</strong> It
            tracks patterns and tells her when to see a doctor. Everything here is educational, not a
            substitute for medical care.
          </p>
        </div>
      ),
      code: `<div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/40 px-5 py-4">
  <AlertTriangle className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
  <p className="text-[13.5px] leading-relaxed text-muted-foreground">
    <strong className="font-semibold text-foreground">Sakhi does not diagnose.</strong> ...
  </p>
</div>`,
    },
    {
      id: "state-04",
      name: "Empty result",
      note: "A search or filter that found nothing. Says what was searched and offers the way back, never just 'no results'.",
      preview: (
        <div className="rounded-2xl border border-dashed border-border bg-card px-6 py-10 text-center">
          <SearchX className="mx-auto size-6 text-muted-foreground/60" aria-hidden="true" />
          <p className="mt-3 text-[14.5px] font-semibold text-foreground">
            Nothing matches &ldquo;endo&rdquo; yet
          </p>
          <p className="mx-auto mt-1.5 max-w-[38ch] text-[13.5px] text-muted-foreground">
            Try a shorter word, or browse all sixteen conditions.
          </p>
        </div>
      ),
      code: `<div className="rounded-2xl border border-dashed border-border bg-card px-6 py-10 text-center">
  <SearchX className="mx-auto size-6 text-muted-foreground/60" aria-hidden="true" />
  <p className="mt-3 text-[14.5px] font-semibold text-foreground">Nothing matches &ldquo;{query}&rdquo; yet</p>
  <p className="mx-auto mt-1.5 max-w-[38ch] text-[13.5px] text-muted-foreground">What to try instead.</p>
</div>`,
    },
    {
      id: "state-05",
      name: "Not found page",
      note: "404. Big quiet number, one line, one route home. No jokes on a health product.",
      preview: (
        <div className="py-8 text-center">
          <p className="text-display leading-none text-border">404</p>
          <p className="mt-3 text-h4 text-foreground">This page has moved or never existed</p>
          <p className="mx-auto mt-2 max-w-[40ch] text-[14px] text-muted-foreground">
            The rest of the site is still here.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-white">
            Back to home
          </span>
        </div>
      ),
      code: `/* src/app/not-found.tsx */
<div className="py-8 text-center">
  <p className="text-display leading-none text-border">404</p>
  <p className="mt-3 text-h4 text-foreground">This page has moved or never existed</p>
</div>`,
    },
    {
      id: "state-06",
      name: "Image placeholder",
      note: "The stand-in for a screenshot not yet taken. One component site-wide, so every empty well looks the same and they all get filled the same way.",
      preview: (
        <ImagePlaceholder className="aspect-video max-w-sm" label="Summary screen" />
      ),
      code: `<ImagePlaceholder className="aspect-4/3" />`,
    },
    {
      id: "state-07",
      name: "Loading skeleton",
      note: "Shape of the content, not a spinner. Blocks match the real layout so nothing jumps when data lands.",
      preview: (
        <div className="space-y-3">
          <div className="h-3 w-1/3 rounded-full bg-muted" />
          <div className="h-3 w-full rounded-full bg-muted" />
          <div className="h-3 w-4/5 rounded-full bg-muted" />
        </div>
      ),
      code: `<div className="space-y-3">
  <div className="h-3 w-1/3 rounded-full bg-muted" />
  <div className="h-3 w-full rounded-full bg-muted" />
</div>`,
    },
    {
      id: "state-08",
      name: "Inline form error",
      note: "Tied to its field, states the fix rather than the rule. Red is the only place --destructive appears on the site.",
      preview: (
        <div className="max-w-sm">
          <input
            defaultValue="karan@"
            className="w-full rounded-xl border border-destructive bg-card px-4 py-2.5 text-[14px] text-foreground"
          />
          <p className="mt-1.5 text-[12.5px] text-destructive">
            Add the part after the @, like karan@example.com
          </p>
        </div>
      ),
      code: `<input aria-invalid="true" aria-describedby="email-error"
  className="w-full rounded-xl border border-destructive bg-card px-4 py-2.5 text-[14px] text-foreground" />
<p id="email-error" className="mt-1.5 text-[12.5px] text-destructive">Add the part after the @, like karan@example.com</p>`,
    },
    {
      id: "state-09",
      name: "Success confirmation",
      note: "After a form submits. Confirms in the same words the button used, so the action and its result match.",
      preview: (
        <div className="rounded-2xl border border-border bg-accent-faint px-5 py-4 text-center">
          <p className="text-[14.5px] font-semibold text-secondary">Message sent</p>
          <p className="mt-1 text-[13.5px] text-muted-foreground">
            We would love to reply within a couple of days.
          </p>
        </div>
      ),
      code: `<div className="rounded-2xl border border-border bg-accent-faint px-5 py-4 text-center">
  <p className="text-[14.5px] font-semibold text-secondary">Message sent</p>
</div>`,
    },
    {
      id: "state-10",
      name: "Planned or not-live tag",
      note: "Marks something documented but not shipped. Sakhi's pricing page needs this, and honesty about it is a hard rule.",
      preview: (
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-muted px-3 py-1 text-[11.5px] font-semibold text-chip-foreground">
            Not live yet
          </span>
          <span className="rounded-full bg-accent-faint px-3 py-1 text-[11.5px] font-semibold text-secondary">
            Available now
          </span>
          <span className="rounded-full bg-muted px-3 py-1 text-[11.5px] font-semibold text-chip-foreground">
            Planned, 2027
          </span>
        </div>
      ),
      code: `<span className="rounded-full bg-muted px-3 py-1 text-[11.5px] font-semibold text-chip-foreground">Not live yet</span>
<span className="rounded-full bg-accent-faint px-3 py-1 text-[11.5px] font-semibold text-secondary">Available now</span>`,
    },
  ],
};
