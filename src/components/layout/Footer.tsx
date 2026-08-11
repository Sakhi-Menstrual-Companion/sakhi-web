"use client";

import Link from "next/link";
import SakhiLogo from "@/components/ui/SakhiLogo";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Vision & Roadmap", href: "/vision" },
  { label: "Download App", href: "https://apps.apple.com/app/id6742219623", external: true },
  { label: "Press Kit", href: "/press" },
];

const companyLinks = [
  { label: "Our Story", href: "/story" },
  { label: "Team", href: "/team" },
  { label: "Press", href: "/press" },
  { label: "Join Us", href: "/contribute" },
];

const connectLinks = [
  { label: "contact@sakhiapp.in", href: "mailto:contact@sakhiapp.in", external: false },
  { label: "Instagram", href: "#", external: false },
  { label: "Twitter / X", href: "#", external: false },
  { label: "LinkedIn", href: "#", external: false },
];

export default function Footer() {
  /* The footer used to turn near-black on the homepage only, back when the
     homepage was a dark design. Every page is light now, so it is one
     treatment everywhere. #A0A0A0 was also only 2.8:1 on white, below AA. */
  const footerBg = "var(--background-blush)";
  const headingColor = "var(--foreground)";
  const mutedColor = "var(--muted-foreground)";
  const borderColor = "var(--border)";

  return (
    <footer
      style={{
        backgroundColor: footerBg,
        borderTop: `1px solid ${borderColor}`,
        paddingTop: 64,
        paddingBottom: 32,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Row 1 - Brand + links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand column */}
          <div>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <SakhiLogo size={24} tone="pink" />
            </Link>
            <p
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: mutedColor,
                lineHeight: 1.7,
                margin: "0 0 24px",
                maxWidth: 220,
              }}
            >
              A Friend In Every Cycle.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: headingColor,
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                margin: "0 0 20px",
              }}
            >
              Product
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {productLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: mutedColor,
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: 400,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#F61887";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = mutedColor;
                      }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      style={{
                        color: mutedColor,
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: 400,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#F61887";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = mutedColor;
                      }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: headingColor,
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                margin: "0 0 20px",
              }}
            >
              Company
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      color: mutedColor,
                      textDecoration: "none",
                      fontSize: 15,
                      fontWeight: 400,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#F61887";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = mutedColor;
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: headingColor,
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                margin: "0 0 20px",
              }}
            >
              Connect
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      color: mutedColor,
                      textDecoration: "none",
                      fontSize: 15,
                      fontWeight: 400,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#F61887";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = mutedColor;
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ borderTop: `1px solid ${borderColor}`, paddingTop: 28 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: mutedColor,
                margin: 0,
              }}
            >
              &copy; 2026 Sakhi. All rights reserved.
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: mutedColor,
                margin: 0,
              }}
            >
              Made with{" "}
              <span style={{ color: "#F61887" }}>love</span>{" "}
              in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
