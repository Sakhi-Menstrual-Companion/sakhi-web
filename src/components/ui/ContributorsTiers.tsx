"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export interface Contributor {
  id: string;
  name: string;
  role: string;
  initials: string;
  level: "founder" | "core" | "contributor";
  since: string;
  contributions: string;
}

/**
 * The credits list, by tier.
 *
 * Rewritten from inline styles onto the same Tailwind tokens the rest of the
 * site uses. The old version hardcoded `#fff`, `#F8F2F4` and three different
 * `rgba(246,24,135,…)` mixes next to the `var(--token)` ones, so a palette
 * change would have moved half of this section and left the other half
 * behind.
 *
 * Three things were wrong beyond the styling:
 *
 * 1. The founder card was capped at 600px inside a 1120px column, so the tier
 *    with the most to say occupied half a row and left the rest empty. It
 *    runs the full width now.
 *
 * 2. That card printed `contributions` twice, once as a sentence and again as
 *    chips split out of the same string.
 *
 * 3. The smaller cards sliced their chips to the first four, which silently
 *    dropped a real contribution from anyone who had five. Shruti's logo
 *    design and Galgotias's institutional backing were both being cut.
 *
 * Nothing is a chip any more, which settles 2 and 3 together: `contributions`
 * is rendered once, as the sentence it already is. See `Contributions` below.
 *
 * There is no Community tier. It was a hardcoded block that never read the
 * `community` entries passed to this component, so those six records rendered
 * nowhere; both the block and the dead records are gone, and the level is off
 * the `Contributor` union so nothing can be filed under it again by accident.
 */

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

/**
 * A sentence, not a row of pills.
 *
 * `contributions` arrives comma-joined and used to be split into chips. Five
 * grey capsules under every name is the most templated pattern there is, it
 * shrank real work to 11px labels, and because the chips wrapped to different
 * heights the cards never lined up. Read as written, "Visual identity, design
 * system, UI/UX, brand guidelines, logo design" is a plain readable sentence
 * at a size someone can actually read, and every card ends the same way.
 */
function Contributions({ text, className }: { text: string; className?: string }) {
  return <p className={cn("leading-relaxed text-muted-foreground", className)}>{text}</p>;
}

function Avatar({
  initials,
  large,
  highlight,
}: {
  initials: string;
  large?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid shrink-0 place-items-center rounded-full font-semibold tracking-[0.02em]",
        large ? "size-18 text-[22px]" : "size-14 text-[16px]",
        /* Solid fills, never a translucent wash. The old plain avatar was 12%
           pink, which composited to 4.35:1 over the blush founder card, just
           under AA. Deep Pink on --accent-faint is 4.68:1 and on white 5.22:1,
           so the initials pass wherever the avatar is placed. */
        highlight ? "bg-secondary text-secondary-foreground" : "bg-accent-faint text-secondary"
      )}
    >
      {initials}
    </div>
  );
}

/**
 * Just the word, set as a heading.
 *
 * It used to be a small uppercase label with a hairline running from it to
 * the far edge of the container and a count parked at the end. Over four
 * tiers that is four dangling lines down the page, and at the Founders tier
 * the rule ran nearly the full 1120px to sit beside one short word, which is
 * what made the section look unfinished rather than structured. A heading in
 * the page's own type scale, with the whitespace between sections doing the
 * separating, is both quieter and more formal.
 */
function TierHeader({ label }: { label: string }) {
  return <h3 className="text-h4 mb-8 text-foreground">{label}</h3>;
}

/**
 * The role line: title, then the date behind a middot.
 *
 * "Since Jan 2024" used to sit on its own row under the name, and on the
 * smaller cards it was pushed to a footer behind its own rule, which gave a
 * four word date the same structural weight as the person. It rides with the
 * role now.
 */
function RoleLine({ role, since, className }: { role: string; since: string; className?: string }) {
  return (
    <p className={cn("text-secondary", className)}>
      {role}
      <span className="text-muted-foreground"> · Since {since}</span>
    </p>
  );
}

function FounderCard({ c }: { c: Contributor }) {
  return (
    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-3xl bg-accent-faint p-9 sm:p-11"
    >
      <div className="flex items-center gap-6">
        <Avatar initials={c.initials} large highlight />
        <div className="min-w-0">
          <p className="text-[1.5rem] leading-tight font-medium tracking-[-0.015em] text-foreground">
            {c.name}
          </p>
          <RoleLine role={c.role} since={c.since} className="mt-1.5 text-[15px]" />
        </div>
      </div>
      <Contributions text={c.contributions} className="mt-7 text-[16.5px]" />
    </motion.article>
  );
}

function ContributorCard({ c, delay = 0 }: { c: Contributor; delay?: number }) {
  return (
    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="rounded-3xl border border-border bg-card p-8 transition-colors duration-(--duration-slow) ease-(--ease-in-out-soft) hover:border-secondary/25"
    >
      <div className="flex items-center gap-4">
        <Avatar initials={c.initials} />
        <div className="min-w-0">
          <p className="text-[1.125rem] leading-tight font-medium text-foreground">{c.name}</p>
          <RoleLine role={c.role} since={c.since} className="mt-1 text-[13.5px]" />
        </div>
      </div>
      <Contributions text={c.contributions} className="mt-6 text-[14.5px]" />
    </motion.article>
  );
}

export default function ContributorsTiers({ contributors }: { contributors: Contributor[] }) {
  const founders = contributors.filter((c) => c.level === "founder");
  const core = contributors.filter((c) => c.level === "core");
  const rest = contributors.filter((c) => c.level === "contributor");

  return (
    <div className="flex flex-col gap-14">
      <section>
        <TierHeader label="Founders" />
        <div className="flex flex-col gap-3">
          {founders.map((c) => (
            <FounderCard key={c.id} c={c} />
          ))}
        </div>
      </section>

      <section>
        <TierHeader label="Core Partners" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {core.map((c, i) => (
            <ContributorCard key={c.id} c={c} delay={i * 0.08} />
          ))}
        </div>
      </section>

      <section>
        <TierHeader label="Contributors" />
        {/* Two across, not four. At four the cards came out around 268px, which
            broke "User Researcher" and "Campus Ambassador" onto two lines and
            wrapped the role and date apart from each other. Three would fit
            them but leaves the fourth card alone on its own row; two divides
            evenly, matches the Core Partners grid above it, and gives the
            whole section one rhythm. */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rest.map((c, i) => (
            <ContributorCard key={c.id} c={c} delay={i * 0.07} />
          ))}
        </div>
      </section>

    </div>
  );
}
