export function SakhiLogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="16" cy="8" r="5" fill="#F61887" />
      {/* Body — two drops forming a heart */}
      <path
        d="M16 15C10.5 15 7 19 7 23.5C7 26 10 28 16 28C22 28 25 26 25 23.5C25 19 21.5 15 16 15Z"
        fill="#F61887"
      />
      {/* Inner heart split */}
      <path
        d="M16 18C13 18 11 20 11 22.5L16 24L21 22.5C21 20 19 18 16 18Z"
        fill="rgba(255,255,255,0.25)"
      />
    </svg>
  );
}

export function SakhiWordmark({ size = 22 }: { size?: number }) {
  return (
    <span
      style={{
        fontSize: size,
        fontWeight: 700,
        color: "#F61887",
        letterSpacing: "-0.5px",
        fontFamily: "inherit",
        lineHeight: 1,
      }}
    >
      sakhi.
    </span>
  );
}

export default function SakhiLogo({ size = 24 }: { size?: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <SakhiLogoMark size={size} />
      <SakhiWordmark size={size * 0.9} />
    </span>
  );
}
