"use client";

import { useEffect, useRef } from "react";

export interface Contributor {
  id: string;
  name: string;
  role: string;
  initials: string;
  level: "founder" | "core" | "contributor" | "community";
  since: string;
  contributions: string;
}

const levelColors: Record<Contributor["level"], { bg: string; border: string; text: string; glow: string }> = {
  founder:     { bg: "#F61887", border: "#F61887",              text: "#FFFFFF", glow: "rgba(246,24,135,0.35)" },
  core:        { bg: "#FFFFFF", border: "#F61887",              text: "#F61887", glow: "rgba(246,24,135,0.2)"  },
  contributor: { bg: "#FFFFFF", border: "rgba(246,24,135,0.4)", text: "#F61887", glow: "rgba(246,24,135,0.1)"  },
  community:   { bg: "#FDF5F8", border: "rgba(246,24,135,0.2)", text: "#F61887", glow: "transparent"           },
};

const levelSizes: Record<Contributor["level"], number> = {
  founder:     68,
  core:        54,
  contributor: 44,
  community:   36,
};

// Branch node positions (x%, y% within the SVG viewBox 0 0 800 600)
// Trunk goes from bottom center up, branches spread left/right
const branchPositions: Record<string, { x: number; y: number }> = {
  // Founders — on trunk, high up
  "karan":   { x: 400, y: 140 },
  "arpita":  { x: 280, y: 170 },
  // Core — main branches
  "shruti":  { x: 160, y: 220 },
  "galgotias": { x: 560, y: 210 },
  // Contributors — sub branches
  "you-1":   { x: 90,  y: 300 },
  "you-2":   { x: 220, y: 310 },
  "you-3":   { x: 620, y: 290 },
  "you-4":   { x: 700, y: 340 },
  // Community — tips
  "leaf-1":  { x: 60,  y: 390 },
  "leaf-2":  { x: 150, y: 400 },
  "leaf-3":  { x: 300, y: 360 },
  "leaf-4":  { x: 500, y: 370 },
  "leaf-5":  { x: 660, y: 400 },
  "leaf-6":  { x: 740, y: 430 },
};

// SVG tree path data
const treeSVG = `
  M 400 560
  C 400 520 400 490 400 460
  C 400 430 395 410 390 395
  C 385 380 380 370 370 355
  C 360 340 340 325 320 315
  C 300 305 270 295 240 285
  C 210 275 185 265 165 255
  C 145 245 130 235 110 225

  M 400 460
  C 400 440 402 420 405 400
  C 408 380 415 360 420 340
  C 425 320 435 300 445 285
  C 455 270 465 255 480 245
  C 495 235 515 225 535 218
  C 555 211 575 206 595 205

  M 400 490
  C 400 475 398 460 395 445
  C 392 430 388 415 382 402
  C 376 389 368 378 358 368
  C 348 358 335 350 320 343

  M 400 480
  C 402 465 405 450 410 436
  C 415 422 422 410 432 398
  C 442 386 454 376 468 368
  C 482 360 498 353 515 348
`;

export default function ContributorsTree({ contributors }: { contributors: Contributor[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate leaf nodes swaying gently
    const nodes = containerRef.current?.querySelectorAll<HTMLElement>("[data-leaf]");
    nodes?.forEach((node, i) => {
      const delay = i * 0.3;
      const duration = 3 + (i % 3) * 0.7;
      node.style.animation = `leafSway ${duration}s ${delay}s ease-in-out infinite`;
    });
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%", maxWidth: 800, margin: "0 auto" }}>
      <style>{`
        @keyframes leafSway {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33%       { transform: translateY(-4px) rotate(1.5deg); }
          66%       { transform: translateY(-2px) rotate(-1deg); }
        }
        @keyframes trunkGrow {
          from { stroke-dashoffset: 1200; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes nodePop {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
        .tree-node { animation: nodePop 0.5s ease-out both; }
      `}</style>

      {/* SVG Tree */}
      <svg
        viewBox="0 0 800 580"
        style={{ width: "100%", height: "auto", display: "block" }}
        aria-hidden="true"
      >
        {/* Trunk and branches */}
        <path
          d="M400 570 C400 540 400 510 400 480 C400 450 400 420 400 390 C400 360 400 330 400 300 C400 270 400 240 400 210 C400 180 400 160 400 140"
          stroke="#F0C8D8"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="1200"
          style={{ animation: "trunkGrow 2s ease-out both" }}
        />
        {/* Left branches */}
        <path d="M400 420 C370 410 330 400 290 390 C250 380 210 370 170 358 C140 350 110 342 80 338"
          stroke="#F0C8D8" strokeWidth="7" fill="none" strokeLinecap="round"
          strokeDasharray="600" style={{ animation: "trunkGrow 2s 0.3s ease-out both" }} />
        <path d="M400 350 C370 340 340 330 310 320 C280 310 250 305 220 300 C195 296 170 293 145 292"
          stroke="#F0C8D8" strokeWidth="5" fill="none" strokeLinecap="round"
          strokeDasharray="400" style={{ animation: "trunkGrow 2s 0.5s ease-out both" }} />
        <path d="M400 290 C380 280 360 270 340 262 C320 254 298 250 278 248"
          stroke="#F0C8D8" strokeWidth="4" fill="none" strokeLinecap="round"
          strokeDasharray="300" style={{ animation: "trunkGrow 2s 0.7s ease-out both" }} />
        {/* Right branches */}
        <path d="M400 420 C430 408 470 398 510 390 C550 382 590 376 630 372 C660 369 690 368 715 368"
          stroke="#F0C8D8" strokeWidth="7" fill="none" strokeLinecap="round"
          strokeDasharray="600" style={{ animation: "trunkGrow 2s 0.4s ease-out both" }} />
        <path d="M400 350 C428 340 458 330 490 322 C522 314 555 310 585 308 C610 306 635 306 655 306"
          stroke="#F0C8D8" strokeWidth="5" fill="none" strokeLinecap="round"
          strokeDasharray="400" style={{ animation: "trunkGrow 2s 0.6s ease-out both" }} />
        <path d="M400 270 C420 260 442 252 466 246 C490 240 515 237 538 237"
          stroke="#F0C8D8" strokeWidth="4" fill="none" strokeLinecap="round"
          strokeDasharray="300" style={{ animation: "trunkGrow 2s 0.8s ease-out both" }} />
        {/* Small twig branches */}
        <path d="M80 338 C70 328 62 318 58 308 M145 292 C135 282 128 272 125 262 M278 248 C268 238 262 228 260 218"
          stroke="#F0C8D8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M715 368 C725 358 732 348 735 338 M655 306 C665 296 672 286 675 276 M538 237 C548 227 555 217 557 207"
          stroke="#F0C8D8" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Decorative leaves */}
        {[
          [75,310],[95,325],[130,285],[155,275],[165,265],
          [715,340],[730,328],[690,348],[670,280],[640,298],
          [260,210],[280,200],[292,215],[555,198],[540,210],
        ].map(([lx, ly], i) => (
          <ellipse key={i} cx={lx} cy={ly} rx="7" ry="11"
            fill="rgba(246,24,135,0.12)" stroke="rgba(246,24,135,0.2)" strokeWidth="0.5"
            transform={`rotate(${-20 + (i % 5) * 12} ${lx} ${ly})`}
            style={{ animation: `leafSway ${2.5 + (i % 4) * 0.4}s ${i * 0.25}s ease-in-out infinite` }}
          />
        ))}

        {/* Ground/roots */}
        <ellipse cx="400" cy="575" rx="120" ry="10" fill="rgba(246,24,135,0.06)" />
      </svg>

      {/* Contributor Nodes — absolute positioned over SVG */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {contributors.map((c, idx) => {
          const pos = branchPositions[c.id] ?? { x: 400, y: 300 };
          const size = levelSizes[c.level];
          const colors = levelColors[c.level];
          const pct = { x: (pos.x / 800) * 100, y: (pos.y / 580) * 100 };

          return (
            <div
              key={c.id}
              data-leaf="true"
              className="tree-node"
              style={{
                position: "absolute",
                left: `${pct.x}%`,
                top: `${pct.y}%`,
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                pointerEvents: "auto",
                cursor: "default",
                animationDelay: `${idx * 0.12 + 0.8}s`,
                zIndex: c.level === "founder" ? 10 : c.level === "core" ? 8 : 6,
              }}
              title={`${c.name} — ${c.role}`}
            >
              {/* Node circle */}
              <div
                style={{
                  width: size,
                  height: size,
                  borderRadius: "50%",
                  background: colors.bg,
                  border: `2px solid ${colors.border}`,
                  boxShadow: `0 0 0 4px ${colors.glow}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.15)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              >
                <span style={{ fontSize: size * 0.3, fontWeight: 500, color: colors.text, lineHeight: 1 }}>
                  {c.initials}
                </span>
              </div>

              {/* Name tooltip — shown for founders and core */}
              {(c.level === "founder" || c.level === "core") && (
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(246,24,135,0.15)",
                    borderRadius: 8,
                    padding: "4px 10px",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    pointerEvents: "none",
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4 }}>{c.name}</div>
                  <div style={{ fontSize: 10, fontWeight: 300, color: "#9A9A9A" }}>{c.role}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
