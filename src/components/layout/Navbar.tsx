"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SakhiLogo from "@/components/ui/SakhiLogo";
import { cn } from "@/lib/utils";

const appStoreUrl = "https://apps.apple.com/app/id6742219623";

/**
 * The three pages the site now has. Used to be nine flat links, then a
 * three-group dropdown mega-menu over those same nine URLs; the site itself
 * is three pages now (/product, /about, /resources, each the full merged
 * content of what used to be three-to-four separate routes), so a click on
 * any of these is a click on the actual page, not a menu that opens a menu.
 * Home is not repeated here: the logo is already the home link.
 */
const navLinks = [
  { label: "Product", href: "/product" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

const MENU_ID = "sakhi-mobile-menu";

/**
 * The floating frosted pill.
 *
 * Three things were fixed here alongside the visual pass:
 *
 * 1. The Download pill was Primary Pink behind white text, 3.89:1 — under AA
 *    for its size. It is Deep Pink now, 5.22:1, the same rule the Button
 *    component already documents.
 *
 * 2. The desktop/mobile split ran through two `!important` rules in
 *    globals.css keyed off `.sakhi-desktop-nav` and `.sakhi-hamburger`. That
 *    is now plain responsive utilities, so the breakpoint is visible at the
 *    element rather than hidden in a stylesheet override.
 *
 * 3. The mobile menu was a bare div: no Escape, no focus move, no
 *    `aria-controls`, and focus stayed on the page behind it. It is a modal
 *    dialog now, and focus returns to the toggle on close.
 *
 * The bar also tightens as the page scrolls, which is the one piece of motion
 * it has.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * Dismissing without going anywhere (Escape, the X) returns focus to the
   * toggle that opened the sheet. Following a link does not: the browser is
   * about to move focus to a new document, and yanking it back to the
   * hamburger first would be the wrong place to land.
   */
  const dismiss = useCallback(() => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKeyDown);

    // Move focus into the sheet so the keyboard is not left behind the overlay.
    menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, dismiss]);

  return (
    <>
      <nav
        aria-label="Primary"
        className="pointer-events-none fixed inset-x-0 top-0 z-[100] px-4"
      >
        <div
          className={cn(
            // Three links plus the logo and Download pill are narrow enough
            // to show in full past sm (640px) — the hamburger below shares
            // this breakpoint, so there is no width where neither nav works.
            "pointer-events-auto mx-auto mt-4 flex h-[52px] max-w-265 items-center",
            "justify-between rounded-full pr-2 pl-4",
            // Apple's own localnav glass recipe (--localnav-background /
            // .localnav-background), read off apple.com's computed styles: a
            // warm charcoal — rgb(22,22,23), not pure black — at 80% opacity,
            // saturate(180%) blur(20px), eased in over 240ms on a custom
            // curve. Sakhi's pill was close but had drifted to its own
            // near-black --ink at different opacity/blur numbers; this pins
            // it to Apple's actual values instead of an approximation.
            "bg-[rgba(22,22,23,0.8)] backdrop-blur-[20px] backdrop-saturate-180",
            "transition-[background-color,backdrop-filter,box-shadow] duration-[240ms] ease-[cubic-bezier(0.28,0.11,0.32,1)]",
            scrolled
              ? "bg-[rgba(22,22,23,0.92)] shadow-[0_10px_30px_rgba(0,0,0,0.20)]"
              : "shadow-none"
          )}
        >
          <Link
            href="/"
            aria-label="Sakhi home"
            className="flex items-center gap-2 no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <SakhiLogo size={26} tone="light" />
          </Link>

          <div className="hidden items-center gap-0.5 sm:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 text-[13px] whitespace-nowrap no-underline",
                    "transition-colors duration-(--duration-fast)",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                    active
                      ? "font-semibold text-white"
                      : "font-normal text-white/70 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              /* Deep Pink. White on Primary Pink is 3.89:1, under AA at 13px. */
              className={cn(
                "ml-2 rounded-full bg-secondary px-4 py-2 text-[13px] font-semibold whitespace-nowrap text-white no-underline",
                "transition-colors duration-(--duration-fast) hover:bg-[#b8005f]",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              )}
            >
              Download
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            className={cn(
              "flex size-11 flex-col items-center justify-center gap-[5px] rounded-full sm:hidden",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            )}
          >
            <span
              className="block h-0.5 w-[22px] rounded-full bg-white transition-transform duration-(--duration-base) ease-(--ease-out-soft)"
              style={{ transform: menuOpen ? "translateY(7px) rotate(45deg)" : undefined }}
            />
            <span
              className="block h-0.5 w-[22px] rounded-full bg-white transition-opacity duration-(--duration-fast)"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 w-[22px] rounded-full bg-white transition-transform duration-(--duration-base) ease-(--ease-out-soft)"
              style={{ transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : undefined }}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          ref={menuRef}
          id={MENU_ID}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            "fixed inset-0 z-[99] flex flex-col items-center justify-center gap-1 sm:hidden",
            // Same glass recipe as the pill (see the comment above), just
            // more opaque since this is a full-screen takeover rather than a
            // pill with page content showing through it.
            "bg-[rgba(22,22,23,0.94)] backdrop-blur-[20px] backdrop-saturate-180"
          )}
        >
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
            className={cn(
              "px-6 py-2.5 text-[30px] tracking-[-0.02em] no-underline",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
              pathname === "/" ? "font-semibold text-primary-soft" : "font-light text-white"
            )}
          >
            Home
          </Link>
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "px-6 py-2.5 text-[30px] tracking-[-0.02em] no-underline",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                  /* Light pink, not Primary: Primary on near-black is 4.1:1,
                     and this is the one item that has to stand out. */
                  active ? "font-semibold text-primary-soft" : "font-light text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className={cn(
              "mt-6 rounded-full bg-secondary px-10 py-4 text-lg font-semibold text-white no-underline",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            )}
          >
            Download
          </a>
        </div>
      )}
    </>
  );
}
