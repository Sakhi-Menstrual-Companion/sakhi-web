"use client";

import Link from "next/link";

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
  return (
    <footer
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid rgba(0,0,0,0.07)",
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
        {/* Row 1 — Brand + links */}
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
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="7" r="5" fill="#F61887" />
                <path
                  d="M14 13 C8 13 5 17 5 21 C5 23 8 24 14 24 C20 24 23 23 23 21 C23 17 20 13 14 13Z"
                  fill="#F61887"
                />
                <path
                  d="M9 19 C9 16 11.5 14.5 14 14.5 C16.5 14.5 19 16 19 19"
                  fill="#F61887"
                  opacity="0.3"
                />
              </svg>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#F61887",
                  letterSpacing: "-0.5px",
                }}
              >
                sakhi.
              </span>
            </Link>
            <p
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: "#A0A0A0",
                lineHeight: 1.7,
                margin: "0 0 24px",
                maxWidth: 220,
              }}
            >
              A Friend In Every Cycle.
            </p>
            <a
              href="https://apps.apple.com/app/id6742219623"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#1A1A1A",
                color: "#FFFFFF",
                padding: "10px 18px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 300,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
          </div>

          {/* Product */}
          <div>
            <h4
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#1A1A1A",
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
                        color: "#A0A0A0",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: 300,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#F61887";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#A0A0A0";
                      }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      style={{
                        color: "#A0A0A0",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: 300,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#F61887";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#A0A0A0";
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
                color: "#1A1A1A",
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
                      color: "#A0A0A0",
                      textDecoration: "none",
                      fontSize: 15,
                      fontWeight: 300,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#F61887";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#A0A0A0";
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
                color: "#1A1A1A",
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
                      color: "#A0A0A0",
                      textDecoration: "none",
                      fontSize: 15,
                      fontWeight: 300,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#F61887";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#A0A0A0";
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
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: 28 }}>
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
                fontWeight: 300,
                color: "#A0A0A0",
                margin: 0,
              }}
            >
              &copy; 2026 Sakhi. All rights reserved.
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: "#A0A0A0",
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
