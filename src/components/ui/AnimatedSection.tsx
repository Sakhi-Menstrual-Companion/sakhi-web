"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /**
   * Accepted and ignored.
   *
   * ~150 call sites pass a per-item stagger (`delay={i * 80}`), which reads as
   * a template: a grid whose cards arrive one after another is the tell that
   * the page was assembled rather than designed. The reveal now fires once per
   * block, so a whole row of cards arrives together. The prop stays in the
   * signature so those call sites keep compiling.
   */
  delay?: number;
  style?: CSSProperties;
}

/**
 * Scroll reveal.
 *
 * The previous version set `opacity: 0` as an inline style during render, so
 * every wrapped block was invisible in the server-rendered HTML and only
 * became visible once React hydrated and an effect ran. If JS was blocked,
 * slow, or errored, the page stayed permanently blank — and since the inner
 * pages wrap nearly all of their content in this, that meant the whole page.
 *
 * Now the hidden state lives in CSS, gated behind `.js-reveal` on <html>,
 * which the inline script in the root layout sets before first paint. Three
 * things fall out of that:
 *
 *   - No JS at all: `.js-reveal` never lands, so nothing is ever hidden.
 *   - JS that never hydrates: a CSS failsafe in globals.css reveals the
 *     content anyway after a short beat.
 *   - `prefers-reduced-motion`: the hidden rule is neutralised in CSS, so
 *     content is simply present with no movement.
 */
export default function AnimatedSection({ children, className, style }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add("is-revealed");

    // Anything at or above the fold on mount is shown immediately. This covers
    // the cases an observer alone handles badly: a deep link to an anchor part
    // way down the page, a restored scroll position on back-navigation, and a
    // fast fling past the element before the observer has been wired up.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      reveal();
      return;
    }

    // No observer in this browser: show it rather than waiting for a scroll
    // event that will never reveal it.
    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal", className)} style={style}>
      {children}
    </div>
  );
}
