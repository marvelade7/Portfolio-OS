import { useId } from 'react';

/**
 * Projects / Portfolio icon.
 * Rounded-square tile with a teal/green gradient background,
 * a clean briefcase/portfolio shape — matching the Yaru app tile family.
 */
export default function ProjectsIcon({ className = '' }) {
  const bgId = useId();
  const shineId = useId();
  const handleGradId = useId();

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
        {/* Teal/green tile background */}
        <linearGradient id={bgId} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="50%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>

        {/* Handle accent gradient */}
        <linearGradient id={handleGradId} x1="16" y1="10" x2="32" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#2dd4bf" />
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

      {/* Briefcase handle */}
      <path
        d="M19 16 C19 13 20.5 12 24 12 C27.5 12 29 13 29 16"
        stroke={`url(#${handleGradId})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Briefcase body */}
      <rect x="10" y="16" width="28" height="20" rx="4" fill="white" fillOpacity="0.92" />

      {/* Centre latch */}
      <rect x="21" y="23.5" width="6" height="4" rx="1.5" fill="#0d9488" fillOpacity="0.85" />

      {/* Horizontal centre line */}
      <line x1="10" y1="25" x2="38" y2="25" stroke="#0f766e" strokeOpacity="0.22" strokeWidth="1.5" />
    </svg>
  );
}
