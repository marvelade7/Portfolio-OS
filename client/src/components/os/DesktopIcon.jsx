import { useRef, useState } from 'react';
import FolderIcon from './FolderIcon.jsx';

export default function DesktopIcon({
  label,
  colorKey = 'default',
  onOpen,
  onContextMenu,
}) {
  const [selected, setSelected] = useState(false);
  const clickTimer = useRef(null);

  function handleClick() {
    setSelected(true);

    if (clickTimer.current) return;
    clickTimer.current = window.setTimeout(() => {
      clickTimer.current = null;
    }, 250);
  }

  function handleDoubleClick() {
    if (clickTimer.current) {
      window.clearTimeout(clickTimer.current);
      clickTimer.current = null;
    }

    onOpen?.();
  }

  function handleBlur() {
    setSelected(false);
  }

  function handleContextMenu(event) {
    if (onContextMenu) {
      onContextMenu(event);
      return;
    }

    event.preventDefault();
  }

  return (
    <button
      type="button"
      data-no-desktop-menu="true"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onContextMenu={handleContextMenu}
      onBlur={handleBlur}
      className={`flex w-28 flex-col items-center gap-2 rounded-md p-2 text-center text-sm text-white outline-none transition-all duration-200 ${
        selected ? 'bg-[rgba(72,132,220,0.35)] ring-1 ring-[rgba(72,132,220,0.6)]' : 'hover:bg-white/8'
      }`}
      aria-label={label}
      title={label}
    >
      <FolderIcon colorKey={colorKey} className="drop-shadow-[0_6px_12px_rgba(0,0,0,0.28)]" />
      <span
        className={`max-w-[72px] break-words text-[11px] leading-tight text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] ${
          selected ? 'rounded bg-[rgba(72,132,220,0.72)] px-1' : ''
        }`}
      >
        {label}
      </span>
    </button>
  );
}