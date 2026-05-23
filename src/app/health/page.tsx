import type { Metadata } from "next";
import HealthConditions from "@/components/ui/HealthConditions";

export const metadata: Metadata = {
  title: "Health Library — Sakhi",
  description: "Real research on the health conditions affecting 252 million Indian women. Sakhi tracks your patterns and helps you understand your body.",
};

export default function HealthPage() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{
        padding: "120px 40px 80px",
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        <div style={{ maxWidth: 680 }}>
          <div style={{
            fontSize: 11,
            fontWeight: 400,
            color: "#F61887",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}>
            Health Library
          </div>
          <h1 style={{
            fontSize: 52,
            fontWeight: 300,
            color: "#1A1A1A",
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            margin: "0 0 24px",
          }}>
            What your body<br />
            <span style={{ color: "#F61887" }}>has been trying to tell you.</span>
          </h1>
          <p style={{
            fontSize: 16,
            fontWeight: 400,
            color: "#5A5A5A",
            lineHeight: 1.8,
            margin: "0 0 32px",
            maxWidth: 560,
          }}>
            Most women know something feels off years before they get an answer.
            This library covers the 16 conditions Sakhi helps you understand —
            real research, real numbers, no medical jargon.
          </p>
          {/* Disclaimer */}
          <div style={{
            background: "#F8F2F4",
            border: "1px solid rgba(246,24,135,0.12)",
            borderRadius: 14,
            padding: "16px 22px",
            display: "inline-flex",
            alignItems: "flex-start",
            gap: 12,
            maxWidth: 520,
          }}>
            <div style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>🔒</div>
            <p style={{ fontSize: 13, fontWeight: 400, color: "#7A5A6A", lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: "#3A1A2A", fontWeight: 600 }}>Sakhi does not diagnose.</strong>{" "}
              It tracks your patterns and tells you when to see a doctor.
              Everything here is educational — not a substitute for medical care.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 40px 120px",
      }}>
        <HealthConditions />
      </section>
    </main>
  );
}
