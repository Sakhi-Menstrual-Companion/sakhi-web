import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Not Found — Sakhi" };

export default function NotFound() {
  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px", background: "#F8F2F4" }}>
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <div style={{ fontSize: "80px", marginBottom: "24px" }}>🌸</div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#1A1A1A", margin: "0 0 16px", letterSpacing: "-1px" }}>Page not found</h1>
        <p style={{ fontSize: "18px", color: "#6B6B6B", margin: "0 0 40px", lineHeight: 1.6 }}>
          This page doesn&apos;t exist. But Sakhi does. And she&apos;s waiting for you.
        </p>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F61887", color: "#fff", padding: "16px 32px", borderRadius: "9999px", textDecoration: "none", fontSize: "16px", fontWeight: 700, boxShadow: "0 4px 24px rgba(246,24,135,0.35)" }}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
