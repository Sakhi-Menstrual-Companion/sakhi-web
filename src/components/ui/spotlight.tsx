import { cn } from "@/lib/utils";

/**
 * Aceternity UI's Spotlight — a large blurred SVG ellipse that fades and
 * scales in on mount via the `spotlight` keyframe (the exact keyframe
 * Aceternity ships for this component, defined once in globals.css).
 *
 * It is a pure decoration: absolutely positioned, non-interactive, and sits
 * behind real content in z-order. `fill` takes any CSS color, including a
 * `var(--token)` so it can pick up the brand palette instead of scattering a
 * new hex value.
 */
export function Spotlight({
  className,
  fill = "var(--primary)",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      className={cn(
        // Fixed rem sizing rather than Aceternity's own %-based h/w: those
        // resolve against the containing block's height, which is only
        // reliable when the section wrapping this has an explicit height
        // (their demos use h-screen). This section doesn't, so % would
        // collapse toward zero instead of rendering the blur at all.
        "animate-spotlight pointer-events-none absolute z-0 h-152 w-216 max-w-none opacity-0 lg:h-184 lg:w-248",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
      aria-hidden="true"
    >
      <g filter="url(#spotlight-blur)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="spotlight-blur"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}
