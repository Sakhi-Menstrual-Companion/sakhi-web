import type { Metadata } from "next";
import HealthConditions from "@/components/ui/HealthConditions";
import * as kit from "@/components/ui/pageKit";

export const metadata: Metadata = {
  title: "Health Library, Sakhi",
  description: "Real research on the health conditions affecting 252 million Indian women. Sakhi tracks your patterns and helps you understand your body.",
};

export default function HealthPage() {
  return (
    <main style={{ background: "#fbf9fb", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={kit.heroSection}>
        <div style={kit.container}>
        <div style={{ maxWidth: 680 }}>
          <div style={{ ...kit.eyebrow("light"), marginBottom: 18 }}>Health Library</div>
          <h1 style={{ ...kit.h1, margin: "0 0 24px" }}>
            What your body<br />
            <span style={{ color: kit.pinkSoft }}>has been trying to tell you.</span>
          </h1>
          <p style={{ ...kit.lead("light"), margin: "0 0 32px" }}>
            Most women know something feels off years before they get an answer.
            This library covers the 16 conditions Sakhi helps you understand,
            real research, real numbers, no medical jargon.
          </p>
          {/* Disclaimer */}
          <div style={{
            background: "var(--background-blush)", border: "1px solid var(--border)",
            borderRadius: 20,
            padding: "18px 0",
            display: "inline-flex",
            alignItems: "flex-start",
            gap: 12,
            maxWidth: 520,
          }}>
            <div style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>🔒</div>
            <p style={{ fontSize: 13, fontWeight: 400, color: "var(--muted-foreground)", lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>Sakhi does not diagnose.</strong>{" "}
              It tracks your patterns and tells you when to see a doctor.
              Everything here is educational, not a substitute for medical care.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Conditions */}
      <section style={{ ...kit.container, padding: "0 24px 120px" }}>
        <HealthConditions />
      </section>
    </main>
  );
}
