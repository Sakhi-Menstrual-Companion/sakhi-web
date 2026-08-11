import { useId } from "react";

export function SakhiLogoMark({ size = 28 }: { size?: number }) {
  const gradientId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 905 905"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        display: "block",
        borderRadius: Math.max(8, size * 0.22),
      }}
    >
      <rect width="904.68" height="904.68" rx="200" fill={`url(#${gradientId})`} />
      <circle cx="452.111" cy="275.797" r="94.6719" fill="white" />
      <path
        d="M660.867 407.824C685.864 422.256 703.12 447.73 708.841 478.642C714.561 509.554 708.276 543.372 691.369 572.656C648.869 646.268 460.614 733.893 460.614 733.893C460.614 733.893 459.674 637.342 460.614 611.732C462.872 550.178 472.854 515.808 502.866 463.824C519.774 434.54 545.918 412.188 575.549 401.686C605.18 391.184 635.87 393.392 660.867 407.824Z"
        fill="white"
      />
      <path
        d="M243.384 407.824C218.387 422.256 201.131 447.73 195.41 478.642C189.69 509.554 195.975 543.372 212.882 572.656C255.382 646.268 443.637 733.893 443.637 733.893C443.637 733.893 444.577 637.342 443.637 611.732C441.379 550.178 431.397 515.808 401.385 463.824C384.477 434.54 358.332 412.188 328.702 401.686C299.071 391.184 268.381 393.392 243.384 407.824Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="268.577"
          y1="-144.89"
          x2="581.327"
          y2="1041.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F956AE" />
          <stop offset="1" stopColor="#DE2257" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SakhiWordmark({
  size = 22,
  tone = "pink",
}: {
  size?: number;
  tone?: "pink" | "light" | "dark";
}) {
  return (
    <span
      style={{
        fontSize: size,
        fontWeight: 700,
        color: tone === "light" ? "#FFFFFF" : tone === "dark" ? "#151216" : "#F61887",
        letterSpacing: 0,
        fontFamily: "inherit",
        lineHeight: 1,
      }}
    >
      sakhi.
    </span>
  );
}

export default function SakhiLogo({
  size = 24,
  tone = "pink",
}: {
  size?: number;
  tone?: "pink" | "light" | "dark";
}) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <SakhiLogoMark size={size} />
      <SakhiWordmark size={size * 0.9} tone={tone} />
    </span>
  );
}
