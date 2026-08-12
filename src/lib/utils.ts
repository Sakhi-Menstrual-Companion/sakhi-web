import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge, taught about this site's custom type scale.
 *
 * The scale is declared in globals.css as `--text-h1`, `--text-lead` and so on,
 * which Tailwind turns into `text-h1` / `text-lead` utilities. tailwind-merge
 * only knows its own built-in sizes, so it filed those under the same group as
 * text COLOURS and treated `cn("text-h1", "text-foreground")` as a conflict,
 * silently dropping `text-h1` and leaving headings at body size.
 *
 * That is exactly what happened to the page hero: written inline as a plain
 * string it rendered correctly, and the moment it moved into a component using
 * `cn()` the headline collapsed. Declaring the scale here fixes every heading
 * on the site at once instead of avoiding `cn()` at each call site.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "h1", "h2", "h3", "h4", "lead", "label"] }],
    },
  },
});

/**
 * Merge class names, resolving conflicting Tailwind utilities so a caller's
 * `className` reliably wins over a component's base classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
