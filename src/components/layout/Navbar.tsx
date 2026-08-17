"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import SakhiLogo from "@/components/ui/SakhiLogo";
import { DownloadModal } from "@/components/ui/download-modal";
import { useLiquidGlass } from "@/components/layout/use-liquid-glass";
import { cn } from "@/lib/utils";

/**
 * The top-level nav links. Used to be nine flat links, then a three-group
 * dropdown mega-menu over those same nine URLs, then three flat links
 * (/product, /about, /resources); /resources (Community) has since come out
 * of the primary nav, so a click on either of these is a click on the actual
 * page, not a menu that opens a menu. Home is not repeated here: the logo is
 * already the home link.
 *
 * Labels describe what's actually on the page rather than the route name:
 * /product is the feature list, so "Features". /health is not "Health" for
 * that reason — the page opens as "Health library" and the footer already
 * calls it that, so it stays one name in both places rather than the site
 * having two names for one page. Every other link the old nine-page nav had,
 * including /resources, lives in the footer now, anchored into the pages
 * that still carry that content.
 *
 * "Our Story" (/about) is pulled out for now. The route still exists and
 * still works if you type it, it is just unlisted: out of here, out of the
 * footer, `noindex` on the page, out of sitemap.ts and disallowed in
 * robots.ts. Putting it back means undoing all five, not just this line.
 */
const navLinks = [
  { label: "Features", href: "/product" },
  { label: "Health Library", href: "/health" },
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
 *
 * On top of that CSS bar, `useLiquidGlass` runs @ybouane/liquidglass over the
 * pill: real WebGL refraction of the page content passing underneath, rather
 * than the flat blur `backdrop-filter` gives. It is strictly an upgrade layer.
 * Everything below still describes the bar you get when the shader is not
 * running, which is what the server renders and what any browser without
 * WebGL keeps.
 *
 * The bar is light glass, not the charcoal it used to be. That is a single
 * decision with a long tail: the logo tone, every label, the hamburger bars,
 * the focus rings and the mobile sheet all flipped with it, because each of
 * them was picked to sit on a near-black surface. The one thing that did not
 * move is the Deep Pink Download button, which carries its own fill.
 *
 * The tone is also what the contrast budget is spent on. Page heroes are all
 * `bg-background` (white), so the bar is light-on-light at rest and needs the
 * hairline border to have any edge at all; but it scrolls over `bg-ink`
 * sections too, and that, not the resting state, is what sets the scrim
 * opacity and the /80 on inactive labels.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLElement>(null);
  const glass = useLiquidGlass(pillRef);

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
      {/* One element, not a full-width wrapper around a pill, because
          LiquidGlass rejects any glass element that is not a direct child of
          its root. The old outer nav gave the pill `px-4` gutters and `mt-4`;
          `inset-x-4 top-4 mx-auto` reproduces that on the pill itself, and
          drops the pointer-events dance the wrapper needed along with it. */}
      <nav
        ref={pillRef}
        aria-label="Primary"
        className={cn(
          // Two links plus the logo and Download pill are narrow enough to
          // show in full past sm (640px) — the hamburger below shares this
          // breakpoint, so there is no width where neither nav works.
          // max-w sized to this content: it was 265 for three nav links,
          // and stayed that wide after Community was cut to two, which
          // left the pill's resting width unchanged while its content
          // shrank — a lot of empty glass between the logo and the links.
          "fixed inset-x-4 top-4 z-[100] mx-auto flex h-[52px] max-w-200 items-center",
          "justify-between rounded-full pr-2 pl-4",
          // A light bar on a white page has no silhouette of its own, so the
          // hairline is doing real work here, not decoration. The dark bar
          // never needed one.
          "border border-black/[0.06]",
          "transition-[background-color,backdrop-filter,box-shadow] duration-[240ms] ease-[cubic-bezier(0.28,0.11,0.32,1)]",
          glass
            ? // The shader draws to a canvas the library injects at
              // `z-index:-1`, which paints *behind* this element's own
              // background. Any background here would simply cover it, so
              // the CSS glass has to come off entirely and the scrim below
              // takes over the job of keeping the text readable.
              "bg-transparent shadow-none backdrop-blur-none backdrop-saturate-100"
            : cn(
                // Light frosted, the same shape as Apple's localnav recipe
                // (--localnav-background: 80% fill, saturate(180%) blur(20px),
                // 240ms on a custom curve) but inverted to white. The bar used
                // to be charcoal — rgb(22,22,23) at 80% — which is why the
                // numbers below are the ones they are.
                "bg-[rgba(255,255,255,0.72)] backdrop-blur-[20px] backdrop-saturate-180",
                scrolled
                  ? "bg-[rgba(255,255,255,0.88)] shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                  : "shadow-none"
              )
        )}
      >
        {glass && (
          // Refraction alone is not a contrast guarantee. Clear glass would
          // put this bar's text straight onto whatever is passing underneath,
          // which on /about is a near-black section. This scrim is what keeps
          // the labels legible across that whole range: at 0.7 the worst case
          // (an inactive link over `bg-ink`) still lands about 5.4:1, and the
          // refracted content is still clearly visible through it.
          //
          // It has to be a positioned sibling rather than a background on the
          // nav for the same reason the nav has no background: it must paint
          // above the injected canvas, and only a positioned element does.
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full bg-[rgba(255,255,255,0.7)]"
          />
        )}

        {/* z-10 on each of the three children: the scrim above is positioned
            and would otherwise paint over static in-flow content. */}
        <Link
          href="/"
          aria-label="Sakhi home"
          className="relative z-10 flex items-center gap-2 no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          <SakhiLogo size={26} tone="dark" />
        </Link>

        <div className="relative z-10 hidden items-center gap-0.5 sm:flex">
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
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
                  // /80 rather than the /70 the white version used. At 13px
                  // these need 4.5:1, and the bar has to hold that over a
                  // near-black section too, where /70 drops under it.
                  active
                    ? "font-semibold text-foreground"
                    : "font-normal text-foreground/80 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <DownloadModal>
            <button
              type="button"
              /* Deep Pink. White on Primary Pink is 3.89:1, under AA at 13px.
                 Unchanged by the light bar: the button carries its own solid
                 fill, so it never depended on the bar behind it. The focus
                 ring did — at offset-2 it lands on the glass, not the pink. */
              className={cn(
                "ml-2 cursor-pointer rounded-full bg-secondary px-4 py-2 text-[13px] font-semibold whitespace-nowrap text-white no-underline",
                "transition-colors duration-(--duration-fast) hover:bg-[#b8005f]",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              )}
            >
              Download
            </button>
          </DownloadModal>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls={MENU_ID}
          className={cn(
            "relative z-10 flex size-11 flex-col items-center justify-center gap-[5px] rounded-full sm:hidden",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          )}
        >
          {/* The bars stay dark while the sheet below is open, because the
              bar itself stays light glass over it — see the note on the
              sheet. */}
          <span
            className="block h-0.5 w-[22px] rounded-full bg-foreground transition-transform duration-(--duration-base) ease-(--ease-out-soft)"
            style={{ transform: menuOpen ? "translateY(7px) rotate(45deg)" : undefined }}
          />
          <span
            className="block h-0.5 w-[22px] rounded-full bg-foreground transition-opacity duration-(--duration-fast)"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-0.5 w-[22px] rounded-full bg-foreground transition-transform duration-(--duration-base) ease-(--ease-out-soft)"
            style={{ transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : undefined }}
          />
        </button>
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
            // pill with page content showing through it. It follows the pill
            // to light for the same reason it followed it to charcoal: the
            // bar sits on top of this sheet while it is open, and a light
            // pill floating on a near-black takeover reads as two surfaces
            // from two different sites.
            "bg-[rgba(255,255,255,0.94)] backdrop-blur-[20px] backdrop-saturate-180"
          )}
        >
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
            className={cn(
              "px-6 py-2.5 text-[30px] tracking-[-0.02em] no-underline",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
              pathname === "/" ? "font-semibold text-secondary" : "font-light text-foreground"
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
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
                  /* Deep Pink, not Primary and not the light pink this used
                     to be: the sheet is white now, so the pink that stood out
                     on near-black would be the one that fails on it. Deep
                     Pink is 5.22:1 here. */
                  active ? "font-semibold text-secondary" : "font-light text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <DownloadModal>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className={cn(
                "mt-6 cursor-pointer rounded-full bg-secondary px-10 py-4 text-lg font-semibold text-white no-underline",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              )}
            >
              Download
            </button>
          </DownloadModal>
        </div>
      )}
    </>
  );
}
