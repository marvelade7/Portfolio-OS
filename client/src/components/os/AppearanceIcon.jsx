import { useId } from 'react';

/**
 * Appearance / Settings icon.
 * Rounded-square tile with a warm purple/violet gradient background,
 * a stylised paint-palette shape — representing personalisation/appearance
 * in the Yaru icon family spirit.
 */
export default function AppearanceIcon({ className = '' }) {
  const bgId = useId();
  const shineId = useId();
  const brushId = useId();

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
        {/* Purple/violet tile background */}
        <linearGradient id={bgId} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#6d28d9" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>

        {/* Brush/wand accent gradient */}
        <linearGradient id={brushId} x1="14" y1="14" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        {/* Top edge shine */}
        <linearGradient id={shineId} x1="24" y1="2" x2="24" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Tile background */}
      <rect x="2" y="2" width="44" height="44" rx="10" fill={`url(#${bgId})`} />
      {/* Top shine */}
      <rect x="2" y="2" width="44" height="44" rx="10" fill={`url(#${shineId})`} />
      {/* Subtle border */}
      <rect x="2" y="2" width="44" height="44" rx="10" stroke="#ffffff" strokeOpacity="0.10" strokeWidth="1" fill="none" />

      {/* Palette oval body */}
      <ellipse cx="23" cy="24" rx="13" ry="12" fill="white" fillOpacity="0.90" />

      {/* Colour dabs on palette */}
      <circle cx="16" cy="20" r="2.5" fill="#ef4444" />
      <circle cx="22" cy="16" r="2.5" fill="#f59e0b" />
      <circle cx="29" cy="18" r="2.5" fill="#22c55e" />
      <circle cx="31" cy="25" r="2.5" fill="#3b82f6" />

      {/* Thumb hole */}
      <circle cx="20" cy="28" r="3" fill={`url(#${bgId})`} />

      {/* Paint brush */}
      <line x1="32" y1="30" x2="39" y2="37" stroke={`url(#${brushId})`} strokeWidth="3" strokeLinecap="round" />
      <rect x="29.5" y="27" width="5" height="5" rx="1" fill={`url(#${brushId})`} transform="rotate(-45 32 30)" />
    </svg>
  );
}
