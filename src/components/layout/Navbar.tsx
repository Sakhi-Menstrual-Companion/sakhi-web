"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SakhiLogo from "@/components/ui/SakhiLogo";

const primaryNavLinks = [
  { label: "Story", href: "/story" },
  { label: "Features", href: "/features" },
  { label: "Health", href: "/health" },
];

const mobileNavLinks = [
  { label: "Home", href: "/" },
  ...primaryNavLinks,
  { label: "Vision", href: "/vision" },
  { label: "Contributors", href: "/contributors" },
  { label: "Brand", href: "/brand" },
  { label: "Press", href: "/press" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            maxWidth: 760,
            margin: "18px auto 0",
            padding: "0 10px 0 16px",
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 999,
            backgroundColor: "rgba(22,22,23,0.68)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            pointerEvents: "auto",
          }}
        >
          <Link
            href="/"
            aria-label="Sakhi home"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <SakhiLogo size={27} tone="light" />
          </Link>

          <div
            className="sakhi-desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {primaryNavLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    padding: "8px 13px",
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: active ? 700 : 400,
                    color: active ? "#FFFFFF" : "rgba(245,245,247,0.72)",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = "#FFFFFF";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = "rgba(245,245,247,0.72)";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href="https://apps.apple.com/app/id6742219623"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: 8,
                textDecoration: "none",
                backgroundColor: "#F61887",
                color: "#FFFFFF",
                padding: "7px 16px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              Download
            </a>
          </div>

          <button
            className="sakhi-hamburger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              flexDirection: "column",
              gap: 5,
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                backgroundColor: "#FFFFFF",
                borderRadius: 2,
                transition: "transform 0.3s ease",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                backgroundColor: "#FFFFFF",
                borderRadius: 2,
                transition: "opacity 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                backgroundColor: "#FFFFFF",
                borderRadius: 2,
                transition: "transform 0.3s ease",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            backgroundColor: "rgba(22,22,23,0.94)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {mobileNavLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  fontSize: 32,
                  fontWeight: active ? 700 : 300,
                  color: active ? "#F61887" : "#FFFFFF",
                  padding: "10px 24px",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://apps.apple.com/app/id6742219623"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              textDecoration: "none",
              backgroundColor: "#F61887",
              color: "#FFFFFF",
              padding: "16px 40px",
              borderRadius: 999,
              fontSize: 18,
              fontWeight: 700,
              marginTop: 16,
            }}
          >
            Download
          </a>
        </div>
      )}
    </>
  );
}
