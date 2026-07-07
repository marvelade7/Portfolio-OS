import { useId } from 'react';

/**
 * Firefox/Yaru browser-style icon.
 * Circular globe with a multi-tone orange/purple/blue swirl motif —
 * stylistically equivalent to the Yaru default browser icon without
 * copying any trademarked artwork.
 */
export default function BrowserIcon({ className = '' }) {
  const outerGradId = useId();
  const globeGradId = useId();
  const swirlOrangeId = useId();
  const swirlPurpleId = useId();
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
        {/* Deep blue circular background */}
        <radialGradient id={outerGradId} cx="40%" cy="30%" r="70%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b5bdb" />
          <stop offset="55%" stopColor="#1a3fb5" />
          <stop offset="100%" stopColor="#0d2680" />
        </radialGradient>

        {/* Globe inner gradient */}
        <radialGradient id={globeGradId} cx="50%" cy="40%" r="60%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#74c0fc" />
          <stop offset="60%" stopColor="#339af0" />
          <stop offset="100%" stopColor="#1864ab" />
        </radialGradient>

        {/* Orange swirl gradient */}
        <linearGradient id={swirlOrangeId} x1="24" y1="4" x2="40" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff922b" />
          <stop offset="100%" stopColor="#e8590c" />
        </linearGradient>

        {/* Purple accent gradient */}
        <linearGradient id={swirlPurpleId} x1="8" y1="20" x2="28" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9775fa" />
          <stop offset="100%" stopColor="#6741d9" />
        </linearGradient>

        {/* Top shine */}
        <radialGradient id={shineId} cx="35%" cy="20%" r="50%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer circle background */}
      <circle cx="24" cy="24" r="22" fill={`url(#${outerGradId})`} />

      {/* Globe base */}
      <circle cx="24" cy="24" r="14" fill={`url(#${globeGradId})`} />

      {/* Orange swirl flame — upper right arc */}
      <path
        d="M24 4 C34 4 44 13 44 24 C44 30 41 36 36 40 C32 35 28 28 26 20 C30 16 32 10 24 4Z"
        fill={`url(#${swirlOrangeId})`}
        opacity="0.92"
      />

      {/* Purple tail swirl — lower left */}
      <path
        d="M4 24 C4 14 12 6 22 4 C20 10 18 18 20 26 C16 30 10 32 4 24Z"
        fill={`url(#${swirlPurpleId})`}
        opacity="0.80"
      />

      {/* Globe highlight shine */}
      <circle cx="24" cy="24" r="22" fill={`url(#${shineId})`} />

      {/* Thin outer ring */}
      <circle cx="24" cy="24" r="22" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" />
    </svg>
  );
}
