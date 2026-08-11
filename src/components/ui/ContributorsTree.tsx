"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export interface Contributor {
  id: string;
  name: string;
  role: string;
  initials: string;
  level: "founder" | "core" | "contributor" | "community";
  since: string;
  contributions: string;
}

// ViewBox: 0 0 840 680, center at (420, 330)
const NODE_POS: Record<string, { x: number; y: number }> = {
  "karan":     { x: 420, y: 330 },
  "shruti":    { x: 220, y: 165 },
  "galgotias": { x: 620, y: 165 },
  "you-1":     { x: 58,  y: 308 },
  "you-2":     { x: 195, y: 528 },
  "you-3":     { x: 645, y: 528 },
  "you-4":     { x: 782, y: 308 },
  "leaf-1":    { x: 58,  y: 82  },
  "leaf-2":    { x: 128, y: 598 },
  "leaf-3":    { x: 328, y: 648 },
  "leaf-4":    { x: 512, y: 648 },
  "leaf-5":    { x: 712, y: 598 },
  "leaf-6":    { x: 782, y: 82  },
};

const CENTER = { x: 420, y: 330 };
const W = 840;
const H = 680;

const LEVEL = {
  founder:     { size: 80,  bg: "#F61887", border: "#F61887",              text: "#fff",    glow: "0 0 0 10px rgba(246,24,135,0.15), 0 16px 48px rgba(246,24,135,0.28)", fs: 22, lw: 0,   lc: "transparent"              },
  core:        { size: 56,  bg: "#fff",    border: "#F61887",              text: "#F61887", glow: "0 0 0 6px rgba(246,24,135,0.1), 0 8px 28px rgba(246,24,135,0.18)",  fs: 15, lw: 2,   lc: "rgba(246,24,135,0.3)"     },
  contributor: { size: 44,  bg: "#fff",    border: "rgba(246,24,135,0.5)", text: "#F61887", glow: "0 0 0 4px rgba(246,24,135,0.06)",                                    fs: 12, lw: 1.5, lc: "rgba(246,24,135,0.18)"    },
  community:   { size: 32,  bg: "#FDF5F8", border: "rgba(246,24,135,0.3)", text: "#F61887", glow: "none",                                                               fs: 9,  lw: 1,   lc: "rgba(246,24,135,0.1)"     },
};

function bezierPath(ax: number, ay: number, bx: number, by: number) {
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const dx = bx - ax;
  const dy = by - ay;
  const cx = mx - dy * 0.18;
  const cy = my + dx * 0.18;
  return `M ${ax} ${ay} Q ${cx} ${cy} ${bx} ${by}`;
}

export default function ContributorsTree({ contributors }: { contributors: Contributor[] }) {
  const [hover, setHover] = useState<string | null>(null);
  const [clicked, setClicked] = useState<string | null>(null);
  const active = hover ?? clicked;

  const nonFounders = contributors.filter(c => c.level !== "founder");
  const founders = contributors.filter(c => c.level === "founder");

  return (
    <div
      style={{ position: "relative", width: "100%", maxWidth: 840, margin: "0 auto" }}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("[data-node]")) return;
        setClicked(null);
      }}
    >
      {/* SVG: decorative rings + connection lines */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: "100%", height: "auto", display: "block" }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F61887" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#F61887" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Subtle glow at center */}
        <circle cx={CENTER.x} cy={CENTER.y} r="160" fill="url(#centerGlow)" />

        {/* Decorative orbit rings */}
        {[165, 280, 390].map((r, i) => (
          <circle
            key={r}
            cx={CENTER.x}
            cy={CENTER.y}
            r={r}
            fill="none"
            stroke="rgba(246,24,135,0.055)"
            strokeWidth="1"
            strokeDasharray={`3 ${9 + i * 5}`}
          />
        ))}

        {/* Connection lines — bezier curves */}
        {nonFounders.map((c, i) => {
          const pos = NODE_POS[c.id];
          if (!pos) return null;
          const cfg = LEVEL[c.level];
          return (
            <motion.path
              key={c.id}
              d={bezierPath(CENTER.x, CENTER.y, pos.x, pos.y)}
              stroke={cfg.lc}
              strokeWidth={cfg.lw}
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.9, ease: "easeOut" }}
            />
          );
        })}
      </svg>

      {/* Contributor nodes */}
      <div style={{ position: "absolute", inset: 0 }}>
        {[...nonFounders, ...founders].map((c, rawIdx) => {
          const pos = NODE_POS[c.id];
          if (!pos) return null;
          const cfg = LEVEL[c.level];
          const pctX = (pos.x / W) * 100;
          const pctY = (pos.y / H) * 100;
          const isActive = active === c.id;

          // Tooltip direction: above the node unless it's in upper 30% of viewBox
          const tooltipBelow = pos.y < H * 0.3;
          // Left/right overflow guard
          const tooltipLeft = pos.x < W * 0.25 ? "0%" : pos.x > W * 0.75 ? "auto" : "50%";
          const tooltipRight = pos.x > W * 0.75 ? "0%" : "auto";
          const tooltipTransform = (pos.x < W * 0.25 || pos.x > W * 0.75) ? "none" : "translateX(-50%)";

          const idx = rawIdx;

          return (
            <div
              key={c.id}
              data-node="true"
              style={{
                position: "absolute",
                left: `${pctX}%`,
                top: `${pctY}%`,
                transform: "translate(-50%, -50%)",
                zIndex: c.level === "founder" ? 10 : c.level === "core" ? 8 : c.level === "contributor" ? 6 : 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
            >
              {/* Node circle */}
              <motion.div
                data-node="true"
                style={{
                  position: "relative",
                  width: cfg.size,
                  height: cfg.size,
                  borderRadius: "50%",
                  background: cfg.bg,
                  border: `2px solid ${cfg.border}`,
                  boxShadow: cfg.glow,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", delay: c.level === "founder" ? 0.2 : 0.5 + idx * 0.08, stiffness: 200, damping: 18 }}
                whileHover={{ scale: 1.13 }}
                onHoverStart={() => setHover(c.id)}
                onHoverEnd={() => setHover(null)}
                onClick={(e) => { e.stopPropagation(); setClicked(clicked === c.id ? null : c.id); }}
              >
                <span style={{ fontSize: cfg.fs, fontWeight: 400, color: cfg.text, lineHeight: 1, userSelect: "none" }}>
                  {c.initials}
                </span>

                {/* Pulse ring for founder */}
                {c.level === "founder" && (
                  <motion.div
                    style={{
                      position: "absolute",
                      inset: -6,
                      borderRadius: "50%",
                      pointerEvents: "none",
                    }}
                    animate={{ scale: [1, 1.45, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}

                {/* Tooltip */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      style={{
                        position: "absolute",
                        [tooltipBelow ? "top" : "bottom"]: "calc(100% + 10px)",
                        left: tooltipLeft,
                        right: tooltipRight,
                        transform: tooltipTransform,
                        background: "#fff",
                        borderRadius: 12,
                        padding: "12px 14px",
                        width: 188,
                        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                        zIndex: 40,
                        pointerEvents: "none",
                        textAlign: "left",
                      }}
                      initial={{ opacity: 0, y: tooltipBelow ? -6 : 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                    >
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", marginBottom: 2 }}>{c.name}</div>
                      <div style={{ fontSize: 11, color: "#F61887", marginBottom: 4 }}>{c.role}</div>
                      <div style={{ fontSize: 10, color: "#A0A0A0", marginBottom: 7 }}>Since {c.since}</div>
                      <div style={{ fontSize: 11, color: "#6B6B6B", lineHeight: 1.6 }}>{c.contributions}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Name label for founder + core */}
              {(c.level === "founder" || c.level === "core") && (
                <motion.div
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: "4px 10px",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                  }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: c.level === "founder" ? 0.5 : 1 + idx * 0.1 }}
                >
                  <div style={{ fontSize: 11, fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4 }}>{c.name}</div>
                  <div style={{ fontSize: 9, color: "#A0A0A0" }}>{c.role}</div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
