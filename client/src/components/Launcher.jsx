import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function Launcher({ apps, open, onOpenApp, onClose }) {
  const [query, setQuery] = useState('');
  const filteredApps = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return apps;
    return apps.filter((app) => app.title.toLowerCase().includes(needle));
  }, [apps, query]);

  if (!open) return null;

  return (
    <div
      data-no-desktop-menu="true"
      className="absolute inset-0 z-[35] bg-[#300A24]/72 pl-20 pt-10 backdrop-blur-2xl"
      onClick={onClose}
    >
      <div className="mx-auto mt-10 w-full max-w-4xl px-6" onClick={(event) => event.stopPropagation()}>
        <div className="mx-auto flex h-12 max-w-xl items-center gap-3 rounded-full border border-white/18 bg-black/28 px-5 shadow-ubuntu">
          <Search size={18} className="text-white/65" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-full min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-white/45"
            placeholder="Search"
            aria-label="Search applications"
            autoFocus
          />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
          {filteredApps.map((app) => {
            const LauncherIcon = app.launcherIcon;
            const FallbackIcon = app.icon;
            return (
              <button
                key={app.id}
                onClick={() => onOpenApp(app.id)}
                className="flex h-32 flex-col items-center justify-center gap-3 rounded-lg bg-white/8 text-white transition hover:bg-white/16 focus:bg-white/16 focus:outline-none"
              >
                {LauncherIcon ? (
                  <LauncherIcon className="h-14 w-14 drop-shadow-lg" />
                ) : (
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#E95420] shadow-lg">
                    <FallbackIcon size={30} />
                  </span>
                )}
                <span className="max-w-full px-2 text-center text-sm font-medium">{app.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
