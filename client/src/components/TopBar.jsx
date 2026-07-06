import { BatteryFull, ChevronDown, CircleUserRound, Power, Volume2, Wifi } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useClock } from '../hooks/useClock.js';
import { useWindowStore } from '../store/windowStore.js';

export default function TopBar({ activeAppName, appsById, onActivities, onOpenContact }) {
  const { compact } = useClock();
  const [menuOpen, setMenuOpen] = useState(false);
  const windows = useWindowStore((state) => state.windows);
  const restoreWindow = useWindowStore((state) => state.restoreWindow);
  const minimizedWindows = useMemo(
    () => windows.filter((windowItem) => windowItem.minimized),
    [windows],
  );

  return (
    <header
      data-no-desktop-menu="true"
      className="fixed left-0 right-0 top-0 z-[110] flex h-7 items-center justify-between bg-black/88 px-3 text-[13px] text-white shadow-sm bg-[rgb(97,65,70)] backdrop-blur transition-all duration-200"
    >
      <div className="flex min-w-0 items-center gap-2">
        <button
          onClick={onActivities}
          className="h-6 rounded-sm px-2 font-medium transition-all duration-200 hover:bg-white/12 focus:bg-white/12 focus:outline-none"
        >
          Activities
        </button>
        <span className="hidden max-w-[220px] truncate rounded-sm px-2 font-medium text-white/88 sm:block">
          {activeAppName || 'Desktop'}
        </span>
        {minimizedWindows.length > 0 && (
          <div className="ml-1 flex items-center gap-1 border-l border-white/15 pl-2">
            {minimizedWindows.map((windowItem) => {
              const app = appsById[windowItem.id];
              if (!app) return null;

              const Icon = app.icon;
              return (
                <button
                  key={windowItem.id}
                  type="button"
                  onClick={() => restoreWindow(windowItem.id)}
                  className="grid h-5 w-7 place-items-center rounded-sm bg-white/10 text-white/82 transition-all duration-200 hover:bg-white/18 focus:bg-white/18 focus:outline-none"
                  aria-label={`Restore ${windowItem.title}`}
                  title={`Restore ${windowItem.title}`}
                >
                  <Icon size={13} />
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 font-medium">
        {compact}
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-6 items-center gap-3 rounded-sm px-2 text-white/90 transition-all duration-200 hover:bg-white/12 focus:bg-white/12 focus:outline-none"
          aria-expanded={menuOpen}
          aria-label="System menu"
          title="System menu"
        >
          <Wifi size={15} />
          <Volume2 size={15} />
          <BatteryFull size={16} />
          <CircleUserRound size={15} />
          <ChevronDown size={13} />
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-8 w-64 overflow-hidden rounded-lg border border-white/10 bg-[#242024]/95 py-2 text-sm text-white shadow-ubuntu backdrop-blur-2xl transition-all duration-200">
            <div className="border-b border-white/10 px-4 pb-3 pt-2">
              <div className="font-semibold">devuser</div>
              <div className="text-xs text-white/58">Ubuntu Portfolio Session</div>
            </div>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onOpenContact?.();
              }}
              className="flex h-10 w-full items-center justify-between px-4 text-left transition-all duration-200 hover:bg-white/10"
            >
              <span>Settings / Contact</span>
              <CircleUserRound size={16} className="text-white/65" />
            </button>
            <button
              type="button"
              className="flex h-10 w-full items-center justify-between px-4 text-left transition-all duration-200 hover:bg-white/10"
            >
              <span>Power Off / Log Out</span>
              <Power size={16} className="text-white/65" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
