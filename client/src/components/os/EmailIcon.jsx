import { useId } from 'react';

/**
 * Thunderbird-style mail icon.
 * Rounded-square tile with a blue/purple gradient background,
 * a clean white envelope body, and a colored ribbon-fold accent —
 * stylistically equivalent to the Yaru/Thunderbird mail icon without
 * copying any trademarked artwork.
 */
export default function EmailIcon({ className = '' }) {
  const bgId = useId();
  const foldId = useId();
  const shineId = useId();

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Blue/purple tile background */}
        <linearGradient id={bgId} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4a63d3" />
          <stop offset="50%" stopColor="#2d44b8" />
          <stop offset="100%" stopColor="#5b21b6" />
        </linearGradient>

        {/* Ribbon fold accent gradient (orange/amber) */}
        <linearGradient id={foldId} x1="14" y1="14" x2="34" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>

        {/* Top edge shine */}
        <linearGradient id={shineId} x1="24" y1="2" x2="24" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Tile background */}
      <rect x="2" y="2" width="44" height="44" rx="10" fill={`url(#${bgId})`} />
      {/* Top shine */}
      <rect x="2" y="2" width="44" height="44" rx="10" fill={`url(#${shineId})`} />
      {/* Subtle border */}
      <rect x="2" y="2" width="44" height="44" rx="10" stroke="#ffffff" strokeOpacity="0.10" strokeWidth="1" fill="none" />

      {/* Envelope body */}
      <rect x="9" y="14" width="30" height="21" rx="3" fill="white" fillOpacity="0.95" />

      {/* Envelope flap (ribbon-fold) — orange accent triangle at top */}
      <path
        d="M9 14 L24 25 L39 14Z"
        fill={`url(#${foldId})`}
      />

      {/* Envelope left-bottom crease line */}
      <path
        d="M9 35 L18 26"
        stroke="white"
        strokeOpacity="0.30"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Envelope right-bottom crease line */}
      <path
        d="M39 35 L30 26"
        stroke="white"
        strokeOpacity="0.30"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
