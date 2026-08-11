"use client";

import { motion } from "framer-motion";

import { gridAuto } from "@/components/ui/pageKit";

export interface Contributor {
  id: string;
  name: string;
  role: string;
  initials: string;
  level: "founder" | "core" | "contributor" | "community";
  since: string;
  contributions: string;
}

const card = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y:  0  },
};

function Avatar({ initials, large, highlight }: { initials: string; large?: boolean; highlight?: boolean }) {
  const size = large ? 64 : 52;
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", flexShrink: 0,
      /* The plain avatar was a 12% pink wash. On the blush founder card that
         composited down to 4.35:1 behind its initials, just under AA. An
         opaque white disc puts Deep Pink back at 5.22:1 wherever the avatar
         is placed, instead of depending on what is behind it. */
      background: highlight ? "var(--secondary)" : "var(--card)",
      border: highlight ? "none" : "1px solid var(--border)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: large ? 20 : 15, fontWeight: 600,
      color: highlight ? "var(--secondary-foreground)" : "var(--secondary)",
      letterSpacing: "0.02em",
    }}>
      {initials}
    </div>
  );
}

function TierDivider({ label, color }: { label: string; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24, marginTop: 8 }}>
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
      <span style={{ fontSize: 11, fontWeight: 400, color: "var(--muted-foreground)", whiteSpace: "nowrap" as const }}>
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: "rgba(246,24,135,0.1)" }} />
    </div>
  );
}

function FounderCard({ c }: { c: Contributor }) {
  return (
    <motion.div
      variants={card}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      style={{
        background: "var(--accent-faint)",
        borderRadius: 14,
        padding: "36px 36px",
        display: "flex",
        flexDirection: "column" as const,
        gap: 20,
        maxWidth: 600,
        cursor: "default",
        transition: "box-shadow 0.25s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <Avatar initials={c.initials} large highlight />
        <div>
          <div style={{ fontSize: 20, fontWeight: 500, color: "var(--foreground)", lineHeight: 1.25 }}>{c.name}</div>
          <div style={{ fontSize: 13, fontWeight: 400, color: "var(--secondary)", marginTop: 3 }}>{c.role}</div>
          <div style={{ fontSize: 11, fontWeight: 400, color: "var(--muted-foreground)", marginTop: 2 }}>Since {c.since}</div>
        </div>
      </div>
      <p style={{ fontSize: 14, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.8, margin: 0 }}>
        {c.contributions}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
        {c.contributions.split(", ").slice(0, 5).map(t => (
          <span key={t} style={{
            fontSize: 11, fontWeight: 400, color: "var(--secondary)",
            background: "rgba(246,24,135,0.08)",
            padding: "4px 11px", borderRadius: 999,
          }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ContributorCard({ c, delay = 0 }: { c: Contributor; delay?: number }) {
  return (
    <motion.div
      variants={card}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      style={{
        background: "#fff",
        borderRadius: 14,
        padding: "28px",
        display: "flex",
        flexDirection: "column" as const,
        gap: 16,
        cursor: "default",
        transition: "box-shadow 0.25s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <Avatar initials={c.initials} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 500, color: "var(--foreground)", lineHeight: 1.3, whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</div>
          <div style={{ fontSize: 12, fontWeight: 400, color: "var(--secondary)", marginTop: 2 }}>{c.role}</div>
        </div>
        <div style={{ fontSize: 10, fontWeight: 400, color: "var(--muted-foreground)", flexShrink: 0, whiteSpace: "nowrap" as const }}>
          Since {c.since}
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 5 }}>
        {c.contributions.split(", ").slice(0, 4).map(t => (
          <span key={t} style={{
            fontSize: 10, fontWeight: 400, color: "var(--muted-foreground)",
            background: "#F8F2F4",
            padding: "3px 9px", borderRadius: 999,
          }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function CommunityBlock() {
  return (
    <motion.div
      variants={card}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{
        background: "#F8F2F4",
        borderRadius: 14,
        padding: "36px",
        display: "flex",
        flexDirection: "column" as const,
        gap: 20,
      }}
    >
      <div>
        <div style={{ fontSize: 24, fontWeight: 700, color: "var(--secondary)", letterSpacing: 0, marginBottom: 6 }}>
          Every woman who trusted Sakhi.
        </div>
        <p style={{ fontSize: 14, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.8, margin: 0, maxWidth: 560 }}>
          Early App Store users, beta testers, campus ambassadors, B2B partners, and supporters who believed from day one, every one of them is part of what Sakhi is.
        </p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
        {["Early App Store Users", "TestFlight Beta Testers", "Campus Ambassadors", "B2B Partners", "Community Supporters"].map(label => (
          <span key={label} style={{
            fontSize: 12, fontWeight: 400, color: "var(--secondary)",
            background: "#fff",
            padding: "6px 14px", borderRadius: 999,
          }}>
            {label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ContributorsTiers({ contributors }: { contributors: Contributor[] }) {
  const founders     = contributors.filter(c => c.level === "founder");
  const core         = contributors.filter(c => c.level === "core");
  const contributors_ = contributors.filter(c => c.level === "contributor");

  return (
    <div style={{ display: "flex", flexDirection: "column" as const, gap: 48 }}>

      {/* Founders */}
      <div>
        <TierDivider label="Founders" color="#F61887" />
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
          {founders.map(c => <FounderCard key={c.id} c={c} />)}
        </div>
      </div>

      {/* Core */}
      <div>
        <TierDivider label="Core Partners" color="#F61887" />
        <div style={gridAuto(280, 12)}>
          {core.map((c, i) => <ContributorCard key={c.id} c={c} delay={i * 0.08} />)}
        </div>
      </div>

      {/* Contributors */}
      <div>
        <TierDivider label="Contributors" color="rgba(246,24,135,0.5)" />
        <div style={gridAuto(280, 12)}>
          {contributors_.map((c, i) => <ContributorCard key={c.id} c={c} delay={i * 0.07} />)}
        </div>
      </div>

      {/* Community */}
      <div>
        <TierDivider label="Community" color="rgba(246,24,135,0.3)" />
        <CommunityBlock />
      </div>

    </div>
  );
}
