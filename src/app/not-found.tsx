import { Link } from "next-view-transitions";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Not Found, Sakhi" };

export default function NotFound() {
  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "160px 24px 80px", background: "var(--background)" }}>
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--secondary)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "18px" }}>404</div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", color: "var(--foreground)", margin: "0 0 16px", letterSpacing: "-0.02em" }}>Page not found</h1>
        <p style={{ fontSize: "18px", color: "var(--muted-foreground)", margin: "0 0 40px", lineHeight: 1.6 }}>
          This page doesn&apos;t exist. But Sakhi does. And she&apos;s waiting for you.
        </p>
        <Button asChild size="lg">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
