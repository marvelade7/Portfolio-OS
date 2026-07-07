import { useId } from 'react';

/**
 * GNOME Terminal-style icon.
 * Dark charcoal rounded-square tile with a ">_" prompt rendered in
 * bright green/white — visually equivalent to the Yaru terminal icon.
 */
export default function TerminalIcon({ className = '' }) {
  const bgId = useId();
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
        {/* Dark charcoal background gradient */}
        <linearGradient id={bgId} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2d2d2d" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Subtle top-edge shine */}
        <linearGradient id={shineId} x1="24" y1="2" x2="24" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Tile background */}
      <rect x="2" y="2" width="44" height="44" rx="10" fill={`url(#${bgId})`} />
      {/* Top shine */}
      <rect x="2" y="2" width="44" height="44" rx="10" fill={`url(#${shineId})`} />
      {/* Subtle border */}
      <rect x="2" y="2" width="44" height="44" rx="10" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" fill="none" />

      {/* ">" chevron prompt — bright green */}
      <path
        d="M10 19L18.5 24L10 29"
        stroke="#4ade80"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* "_" cursor/underscore — off-white */}
      <rect x="21" y="27.5" width="16" height="2.8" rx="1.4" fill="#d1fae5" />
    </svg>
  );
}
