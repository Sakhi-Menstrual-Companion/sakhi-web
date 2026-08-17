import type { GlassConfig } from "@ybouane/liquidglass";

/**
 * Shared constants for the WebGL liquid-glass navbar.
 *
 * This file deliberately has no "use client" directive and no runtime import
 * of the library: `layout.tsx` is a server component and needs GLASS_ROOT_ID,
 * and the GlassConfig import is type-only, so it is erased at compile time.
 */

/**
 * The id on the wrapper div in `layout.tsx`.
 *
 * LiquidGlass samples the *children* of its root, never the root itself, and
 * it rejects any glass element that is not a direct child of that root. So the
 * root has to be a wrapper that holds both the navbar and the page content as
 * siblings, which is why layout.tsx gained a div it did not need before.
 */
export const GLASS_ROOT_ID = "sakhi-glass-root";

/**
 * Shader settings for the nav pill.
 *
 * `cornerRadius` is half the 52px pill height, so the glass edge follows the
 * `rounded-full` border rather than cutting a softer rectangle inside it.
 * `zRadius` (bevel depth) is deliberately well under that: at 26 the pill
 * renders as a half-round lens and magnifies the page content behind it into
 * something unreadable, which is a bad look directly over body copy.
 *
 * `refraction` is also below the 0.69 default for the same reason. This bar
 * sits over text on every page, not over a decorative hero image, so the
 * amount of bending that looks good in the library's demo is too much here.
 *
 * `brightness` is positive: this is a light bar, so the refracted content is
 * lifted rather than dimmed. That is the opposite of what a dark bar wants,
 * and it is the setting to change first if the tone is ever flipped back.
 *
 * Brightness is a nudge, not a contrast guarantee. The scrim in Navbar.tsx is
 * what actually keeps the text readable.
 *
 * `blurAmount` is high for a reason beyond looks: the softer the refracted
 * content, the less competing detail sits behind 13px nav labels.
 */
export const NAV_GLASS_CONFIG: Partial<GlassConfig> = {
  cornerRadius: 26,
  zRadius: 14,
  blurAmount: 0.5,
  refraction: 0.42,
  chromAberration: 0.04,
  edgeHighlight: 0.18,
  specular: 0.3,
  fresnel: 1,
  saturation: 0.12,
  brightness: 0.1,
  shadowOpacity: 0.14,
  shadowSpread: 22,
  shadowOffsetY: 5,
  // A navbar is not draggable and not a button. Both default to false; they
  // are spelled out because `floating` in particular would let a pointer drag
  // the primary nav off its own layout position.
  floating: false,
  button: false,
};
