/**
 * The Indian tricolour, drawn rather than typed as the 🇮🇳 emoji.
 *
 * Two reasons it is real geometry here:
 *
 * 1. The emoji is a different illustration on every platform — Apple, Android
 *    and Linux each ship their own art — and Windows has no flag glyph at all,
 *    so it falls back to rendering the letters "IN". A drawn flag is identical
 *    everywhere.
 * 2. An emoji is one glyph, so nothing inside it can move. Rotating the glyph
 *    as a whole reads as a sticker being tilted, not as cloth.
 *
 * The cloth is sold two ways that work together: the clip path already has a
 * gentle S-curve baked into its top and bottom edges, so it looks like fabric
 * even paused, and `.animate-flag-wave` (globals.css) swings it from the mast
 * edge. That animation is transform-only so it stays on the compositor, and
 * the site-wide `prefers-reduced-motion` block already freezes it.
 */
export function IndiaFlag({ className }: { className?: string }) {
  // The real Ashoka Chakra has 24 spokes. At badge size those collapse into a
  // grey smudge, so this draws half as many — enough to read as a wheel.
  const spokes = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <svg
      viewBox="0 0 24 17"
      className={className}
      role="img"
      aria-label="Flag of India"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* One wavy silhouette, reused as the clip for all three bands, so the
            stripes stay perfectly aligned to each other along the curve. */}
        <clipPath id="sakhi-flag-clip">
          <path d="M0 1.5C4 -0.2 8 2.6 12 1.5C16 0.4 20 -0.4 24 1.1L24 14.2C20 15.7 16 14.9 12 15.9C8 17 4 14.2 0 15.9Z" />
        </clipPath>
      </defs>

      <g clipPath="url(#sakhi-flag-clip)">
        <rect x="0" y="-1" width="24" height="7" fill="#FF9933" />
        <rect x="0" y="6" width="24" height="5" fill="#FFFFFF" />
        <rect x="0" y="11" width="24" height="7" fill="#138808" />
      </g>

      {/* Chakra. Nudged a hair above centre because the white band rides
          slightly high through the middle of the wave. */}
      <g stroke="#0A3A8B" strokeWidth="0.55" strokeLinecap="round">
        <circle cx="12" cy="8.3" r="2.2" />
        {spokes.map((deg) => (
          <line
            key={deg}
            x1="12"
            y1="8.3"
            x2="12"
            y2="6.1"
            transform={`rotate(${deg} 12 8.3)`}
            strokeWidth="0.35"
          />
        ))}
      </g>
    </svg>
  );
}
