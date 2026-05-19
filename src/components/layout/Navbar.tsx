"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Story", href: "/story" },
  { label: "Features", href: "/features" },
  { label: "Vision", href: "/vision" },
  { label: "Contributors", href: "/contributors" },
  { label: "Press", href: "/press" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
          transition: "background-color 0.3s ease, border-color 0.3s ease",
          backgroundColor: scrolled ? "#FFFFFF" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.07)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
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
                fontSize: 22,
                fontWeight: 700,
                color: "#F61887",
                letterSpacing: "-0.5px",
                lineHeight: 1,
              }}
            >
              sakhi.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            className="sakhi-desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    padding: "8px 14px",
                    borderRadius: 9999,
                    fontSize: 15,
                    fontWeight: active ? 400 : 300,
                    color: active ? "#F61887" : "#1A1A1A",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!active)
                      (e.currentTarget as HTMLAnchorElement).style.color = "#F61887";
                  }}
                  onMouseLeave={(e) => {
                    if (!active)
                      (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A1A";
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
                padding: "10px 20px",
                borderRadius: 9999,
                fontSize: 14,
                fontWeight: 400,
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              }}
            >
              Download
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="sakhi-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
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
                backgroundColor: "#1A1A1A",
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
                backgroundColor: "#1A1A1A",
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
                backgroundColor: "#1A1A1A",
                borderRadius: 2,
                transition: "transform 0.3s ease",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: "none",
                  fontSize: 32,
                  fontWeight: active ? 400 : 300,
                  color: active ? "#F61887" : "#1A1A1A",
                  padding: "12px 24px",
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
              textDecoration: "none",
              backgroundColor: "#F61887",
              color: "#FFFFFF",
              padding: "16px 40px",
              borderRadius: 9999,
              fontSize: 18,
              fontWeight: 400,
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
