import { ArrowRight, Check, Mail, Paperclip } from "lucide-react";

import type { SpecimenGroup } from "./types";

/**
 * Inputs and the blocks built from them.
 *
 * Sakhi asks for very little, so these are deliberately low-pressure: labels
 * above fields, optional marked as optional rather than required marked with a
 * star, and every button naming the thing it does so the confirmation can use
 * the same word back.
 */
export const formSpecimens: SpecimenGroup = {
  id: "forms",
  label: "Forms and inputs",
  blurb:
    "Every field carries a visible label, never a placeholder standing in for one: placeholder-only labels vanish the moment someone starts typing, which is exactly when they are needed.",
  items: [
    {
      id: "form-01",
      name: "Text field",
      note: "The base input. Label above, hint below, generous target height. Focus uses the site-wide two-tone ring.",
      preview: (
        <div className="max-w-sm">
          <label htmlFor="spec-name" className="block text-[13px] font-semibold text-foreground">
            Your name
          </label>
          <input
            id="spec-name"
            placeholder="Karan Kumar"
            className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground"
          />
          <p className="mt-1.5 text-[12.5px] text-muted-foreground">
            However you would like to be addressed.
          </p>
        </div>
      ),
      code: `<label htmlFor="name" className="block text-[13px] font-semibold text-foreground">Your name</label>
<input id="name" className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground" />
<p className="mt-1.5 text-[12.5px] text-muted-foreground">Hint text.</p>`,
    },
    {
      id: "form-02",
      name: "Textarea",
      note: "For a message. Tall enough to invite more than a sentence, and resizable vertically only so the layout cannot be dragged apart.",
      preview: (
        <div className="max-w-lg">
          <label htmlFor="spec-msg" className="block text-[13px] font-semibold text-foreground">
            Anything you would like to share
          </label>
          <textarea
            id="spec-msg"
            rows={4}
            placeholder="We would love to hear what brought you here."
            className="mt-1.5 w-full resize-y rounded-xl border border-border bg-card px-4 py-3 text-[14px] leading-relaxed text-foreground placeholder:text-muted-foreground"
          />
        </div>
      ),
      code: `<textarea id="message" rows={4}
  className="mt-1.5 w-full resize-y rounded-xl border border-border bg-card px-4 py-3 text-[14px] leading-relaxed text-foreground placeholder:text-muted-foreground" />`,
    },
    {
      id: "form-03",
      name: "Select",
      note: "A native select, styled to match. Native beats a custom dropdown here: it is keyboard and screen-reader correct for free, and works on every phone.",
      preview: (
        <div className="max-w-sm">
          <label htmlFor="spec-topic" className="block text-[13px] font-semibold text-foreground">
            What is this about
          </label>
          <select
            id="spec-topic"
            defaultValue="partnership"
            className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-2.5 text-[14px] text-foreground"
          >
            <option value="partnership">A campus partnership</option>
            <option value="press">Press or an interview</option>
            <option value="feedback">Feedback on the app</option>
          </select>
        </div>
      ),
      code: `<select id="topic" className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-2.5 text-[14px] text-foreground">
  <option value="partnership">A campus partnership</option>
</select>`,
    },
    {
      id: "form-04",
      name: "Checkbox and radio",
      note: "Choices with the label as the hit target. Accent colour is the brand pink so they never render as the browser default blue.",
      preview: (
        <div className="space-y-2.5">
          {["Keep me posted about the Android launch", "I am asking on behalf of an institution"].map(
            (l, i) => (
              <label key={l} className="flex cursor-pointer items-start gap-2.5">
                <input
                  type="checkbox"
                  defaultChecked={i === 0}
                  className="mt-0.5 size-4 shrink-0 accent-[var(--primary)]"
                />
                <span className="text-[13.5px] text-muted-foreground">{l}</span>
              </label>
            )
          )}
        </div>
      ),
      code: `<label className="flex cursor-pointer items-start gap-2.5">
  <input type="checkbox" className="mt-0.5 size-4 shrink-0 accent-[var(--primary)]" />
  <span className="text-[13.5px] text-muted-foreground">Label as the hit target.</span>
</label>`,
    },
    {
      id: "form-05",
      name: "Inline email capture",
      note: "One field and one button on a single row. For a footer or a banner where a full form would be too much to ask.",
      preview: (
        <form className="flex max-w-md flex-col gap-2 sm:flex-row">
          <input
            type="email"
            placeholder="you@example.com"
            aria-label="Email address"
            className="min-w-0 flex-1 rounded-full border border-border bg-card px-5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground"
          />
          <button
            type="button"
            className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-white"
          >
            Keep me posted
          </button>
        </form>
      ),
      code: `<form className="flex max-w-md flex-col gap-2 sm:flex-row">
  <input type="email" aria-label="Email address" className="min-w-0 flex-1 rounded-full border border-border bg-card px-5 py-2.5 text-[14px]" />
  <button type="submit" className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-white">Keep me posted</button>
</form>`,
    },
    {
      id: "form-06",
      name: "Stacked contact form",
      note: "The full form. Two columns for short fields, full width for the message, one action. Nothing is required that is not genuinely needed.",
      preview: (
        <div className="max-w-xl space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {["Your name", "Email"].map((l) => (
              <div key={l}>
                <label className="block text-[13px] font-semibold text-foreground">{l}</label>
                <input className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-2.5 text-[14px]" />
              </div>
            ))}
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-foreground">
              Message <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <textarea
              rows={3}
              className="mt-1.5 w-full resize-y rounded-xl border border-border bg-card px-4 py-3 text-[14px]"
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-[14px] font-semibold text-white"
          >
            Send message <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      ),
      code: `<form className="max-w-xl space-y-4">
  <div className="grid gap-4 sm:grid-cols-2">{/* name, email */}</div>
  <div>{/* message */}</div>
  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-[14px] font-semibold text-white">
    Send message <ArrowRight className="size-4" aria-hidden="true" />
  </button>
</form>`,
    },
    {
      id: "form-07",
      name: "Newsletter panel",
      note: "A blush card around an email capture, with the promise stated plainly. Say how often you will write and keep to it.",
      preview: (
        <div className="rounded-panel border border-border bg-accent-faint p-7 text-center">
          <Mail className="mx-auto size-5 text-secondary" aria-hidden="true" />
          <h4 className="text-h4 mt-3 text-foreground">Occasional notes from the team</h4>
          <p className="mx-auto mt-2 max-w-[44ch] text-[13.5px] text-muted-foreground">
            A short letter when something real ships. No more than once a month, and easy to leave.
          </p>
          <form className="mx-auto mt-5 flex max-w-sm flex-col gap-2 sm:flex-row">
            <input
              type="email"
              aria-label="Email address"
              placeholder="you@example.com"
              className="min-w-0 flex-1 rounded-full border border-border bg-card px-5 py-2.5 text-[14px]"
            />
            <button
              type="button"
              className="shrink-0 rounded-full bg-secondary px-5 py-2.5 text-[14px] font-semibold text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      ),
      code: `<div className="rounded-panel border border-border bg-accent-faint p-7 text-center">
  <Mail className="mx-auto size-5 text-secondary" aria-hidden="true" />
  <h2 className="text-h4 mt-3 text-foreground">Occasional notes from the team</h2>
  <form className="mx-auto mt-5 flex max-w-sm flex-col gap-2 sm:flex-row">{...}</form>
</div>`,
    },
    {
      id: "form-08",
      name: "File attachment",
      note: "A dashed well matching the image placeholder, so an empty upload slot and an empty image slot read as the same idea.",
      preview: (
        <label className="flex max-w-sm cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-muted/40 px-6 py-8 text-center">
          <Paperclip className="size-5 text-muted-foreground/60" aria-hidden="true" />
          <span className="text-[13px] font-semibold text-foreground">Attach a file</span>
          <span className="text-[12px] text-muted-foreground">PDF or image, up to 10MB</span>
        </label>
      ),
      code: `<label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-muted/40 px-6 py-8 text-center">
  <Paperclip className="size-5 text-muted-foreground/60" aria-hidden="true" />
  <span className="text-[13px] font-semibold text-foreground">Attach a file</span>
  <input type="file" className="sr-only" />
</label>`,
    },
    {
      id: "form-09",
      name: "Consent line",
      note: "Unticked by default, always. Consent that arrives pre-agreed is not consent, and on a health product that matters more than a conversion rate.",
      preview: (
        <label className="flex max-w-lg cursor-pointer items-start gap-2.5">
          <input type="checkbox" className="mt-0.5 size-4 shrink-0 accent-[var(--primary)]" />
          <span className="text-[13px] leading-relaxed text-muted-foreground">
            I am happy for Sakhi to reply to this message. Nothing is added to a mailing list unless
            I ask for it.
          </span>
        </label>
      ),
      code: `{/* Never defaultChecked. */}
<label className="flex cursor-pointer items-start gap-2.5">
  <input type="checkbox" className="mt-0.5 size-4 shrink-0 accent-[var(--primary)]" />
  <span className="text-[13px] leading-relaxed text-muted-foreground">Consent copy.</span>
</label>`,
    },
    {
      id: "form-10",
      name: "Submitted state",
      note: "What replaces the form once it is sent. Confirms in the button's own words, and says when a reply might come.",
      preview: (
        <div className="max-w-md rounded-2xl border border-border bg-card p-7 text-center">
          <span className="mx-auto grid size-10 place-items-center rounded-full bg-accent-faint text-secondary">
            <Check className="size-5" aria-hidden="true" />
          </span>
          <p className="mt-3 text-[15px] font-semibold text-foreground">Message sent</p>
          <p className="mx-auto mt-1.5 max-w-[38ch] text-[13.5px] text-muted-foreground">
            Thank you for writing. We would love to reply within a couple of days.
          </p>
        </div>
      ),
      code: `<div className="max-w-md rounded-2xl border border-border bg-card p-7 text-center">
  <span className="mx-auto grid size-10 place-items-center rounded-full bg-accent-faint text-secondary">
    <Check className="size-5" aria-hidden="true" />
  </span>
  <p className="mt-3 text-[15px] font-semibold text-foreground">Message sent</p>
</div>`,
    },
  ],
};
