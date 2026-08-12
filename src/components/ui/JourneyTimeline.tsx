"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { date: "January 2024",   label: "Sakhi begins",           desc: "Team 07 at Galgotias ISDP Bootcamp. A health app for women, starting with nothing but the idea." },
  { date: "February 2024",  label: "49 user interviews",      desc: "Field research across campus. Gynecologist consultations. The research that made Sakhi real." },
  { date: "May 2024",       label: "Apple Developer Program", desc: "Galgotias University becomes the custodian. Sakhi gets its Apple developer identity." },
  { date: "Q4 2024",        label: "The world notices",       desc: "Times of India. UP International Trade Show. Apple SVP Greg Joswiak hears about Sakhi." },
  { date: "March 2025",     label: "TestFlight beta",         desc: "Power users, early testers, bug reporters. The community that made v2 possible." },
  { date: "June 2025",      label: "App Store launch",        desc: "First public release. Real women downloading and trusting Sakhi for the first time." },
  { date: "September 2025", label: "Apple Success Story",     desc: "Apple selects Sakhi. Campus photoshoot. A student project becomes a global story." },
  { date: "May 2026",       label: "Full-time return",        desc: "Karan returns to Sakhi full-time. v2 development begins in earnest." },
  { date: "June 2026",      label: "v2 launches",             desc: "The biggest update yet. Everything Sakhi has learned, rebuilt from the ground up." },
];

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", maxWidth: 760, margin: "0 auto", padding: "0 24px" }}
    >
      {/* Center spine */}
      <div style={{
        position: "absolute",
        left: "50%",
        top: 0,
        bottom: 0,
        width: 1,
        background: "linear-gradient(to bottom, rgba(246,24,135,0) 0%, rgba(246,24,135,0.2) 8%, rgba(246,24,135,0.2) 92%, rgba(246,24,135,0) 100%)",
        transform: "translateX(-50%)",
        pointerEvents: "none",
      }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 40px 1fr",
                alignItems: "center",
                gap: 0,
                minHeight: 96,
              }}
              initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            >
              {/* Left side */}
              <div style={{
                padding: "20px 28px 20px 0",
                textAlign: "right",
                opacity: isLeft ? 1 : 0,
                pointerEvents: isLeft ? "auto" : "none",
              }}>
                {isLeft && (
                  <>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#D4006E", letterSpacing: "-0.006em", marginBottom: 6 }}>{m.date}</div>
                    <div style={{ fontSize: 16, fontWeight: 500, color: "var(--foreground)", marginBottom: 6, lineHeight: 1.3 }}>{m.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.65 }}>{m.desc}</div>
                  </>
                )}
              </div>

              {/* Center dot */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", zIndex: 1 }}>
                <div style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: i === milestones.length - 1 ? "#F61887" : "#fff",
                  border: "2px solid #F61887",
                  boxShadow: i === milestones.length - 1 ? "0 0 0 4px rgba(246,24,135,0.15)" : "none",
                  flexShrink: 0,
                }} />
              </div>

              {/* Right side */}
              <div style={{
                padding: "20px 0 20px 28px",
                textAlign: "left",
                opacity: isLeft ? 0 : 1,
                pointerEvents: isLeft ? "none" : "auto",
              }}>
                {!isLeft && (
                  <>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#D4006E", letterSpacing: "-0.006em", marginBottom: 6 }}>{m.date}</div>
                    <div style={{ fontSize: 16, fontWeight: 500, color: "var(--foreground)", marginBottom: 6, lineHeight: 1.3 }}>{m.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.65 }}>{m.desc}</div>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
