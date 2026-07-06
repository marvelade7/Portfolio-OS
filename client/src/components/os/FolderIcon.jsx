import { useId } from 'react';

export const FOLDER_COLORS = {
  default: { body: '#1a6fae', tab: '#2196c4' },
  web: { body: '#e8821a', tab: '#f0a030' },
  fullstack: { body: '#3a7d44', tab: '#4e9e5a' },
  backend: { body: '#7b3fa0', tab: '#9b55c0' },
  frontend: { body: '#c0392b', tab: '#e74c3c' },
  api: { body: '#16819a', tab: '#1da7c8' },
};

export default function FolderIcon({ colorKey = 'default', className = '' }) {
  const gradientId = useId();
  const color = FOLDER_COLORS[colorKey] || FOLDER_COLORS.default;

  return (
    <svg
      width="56"
      height="48"
      viewBox="0 0 52 44"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="1" y="10" width="50" height="32" rx="4" fill={color.body} />
      <rect x="1" y="10" width="50" height="32" rx="4" fill={`url(#${gradientId})`} />
      <path d="M1 14 Q1 10 5 10 H20 L24 6 H47 Q51 6 51 10 V14 Z" fill={color.tab} />
      <rect x="1" y="14" width="50" height="28" fill={color.tab} opacity="0.2" />
      <defs>
        <linearGradient id={gradientId} x1="26" y1="10" x2="26" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity="0.15" />
          <stop offset="1" stopColor="#000" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
}