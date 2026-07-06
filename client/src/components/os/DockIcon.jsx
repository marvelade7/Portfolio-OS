import { useState } from 'react';

export default function DockIcon({ label, isRunning, children, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      className="relative flex flex-col items-center gap-[3px] cursor-pointer outline-none transition-all duration-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      <div
        className={`absolute bottom-[62px] left-1/2 -translate-x-1/2 rounded-md bg-[rgba(20,20,20,0.92)] px-2 py-1 text-[10px] whitespace-nowrap text-white pointer-events-none transition-all duration-150 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {label}
      </div>

      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-150 ${
          hovered ? '-translate-y-[10px] scale-[1.18]' : 'translate-y-0 scale-100'
        } active:-translate-y-1 active:scale-105`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)' }}
      >
        {children}
      </div>

      <div className={`h-1 w-1 rounded-full bg-white/70 transition-opacity duration-200 ${isRunning ? 'opacity-100' : 'opacity-0'}`} />
    </button>
  );
}