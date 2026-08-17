"use client";

import { useEffect, useState, type RefObject } from "react";
import type { LiquidGlass } from "@ybouane/liquidglass";
import { GLASS_ROOT_ID, NAV_GLASS_CONFIG } from "@/lib/liquid-glass";

/**
 * Runs @ybouane/liquidglass on one element and reports whether it actually
 * came up.
 *
 * The return value is the whole point of the hook: it starts `false`, so the
 * server render and every browser that cannot run the effect keep the plain
 * CSS backdrop-filter bar, and it only flips `true` once WebGL is live. The
 * caller swaps its own background out on that signal rather than assuming the
 * shader will be there.
 *
 * Three things about this library shape the code below.
 *
 * 1. It has no concept of page scroll. `_renderFrame` returns early unless
 *    something marked a glass element dirty, and the only listeners it
 *    registers are resize, pointer events, and MutationObservers. Scrolling
 *    mutates nothing, so a fixed bar over a scrolling page would freeze on
 *    whatever was behind it at init. The scroll handler below is what makes
 *    the effect track the page at all, and it is the main running cost of
 *    this feature: every scroll frame re-composes the scene and re-runs the
 *    shader.
 *
 * 2. `init()` is async and rasterises every non-glass child of the root
 *    through html-to-image first. Our root wraps the entire page, so this is
 *    a real chunk of main-thread work on load. It is deliberately not
 *    awaited by anything the user is waiting on: the CSS bar is already on
 *    screen and correct, and the shader replaces it whenever it is ready.
 *
 * 3. Nothing about it is server-safe, so the import is dynamic.
 */
export function useLiquidGlass(ref: RefObject<HTMLElement | null>): boolean {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const root = document.getElementById(GLASS_ROOT_ID);
    if (!element || !root) return;

    let instance: LiquidGlass | null = null;
    let cancelled = false;
    let frame = 0;

    element.dataset.config = JSON.stringify(NAV_GLASS_CONFIG);

    void (async () => {
      try {
        const { LiquidGlass } = await import("@ybouane/liquidglass");
        if (cancelled) return;

        const created = await LiquidGlass.init({ root, glassElements: [element] });

        // init() is slow enough that a route change or a fast unmount can
        // land mid-flight. Without this the instance would keep its rAF loop
        // and WebGL context alive against a detached element.
        if (cancelled) {
          created.destroy();
          return;
        }

        instance = created;
        setActive(true);
      } catch (error) {
        // No WebGL, a tainted canvas from a cross-origin image, or a context
        // limit. None of these are worth breaking the nav over: leaving
        // `active` false means the CSS bar simply stays.
        console.warn("LiquidGlass unavailable, keeping the CSS bar.", error);
      }
    })();

    // See note 1 above. Coalesced to one mark per frame so a fast scroll
    // cannot queue more shader passes than the display can show.
    const onScroll = () => {
      if (frame || !instance) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        instance?.markChanged();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
      instance?.destroy();
      setActive(false);
    };
  }, [ref]);

  return active;
}
