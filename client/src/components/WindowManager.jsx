import { AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';
import Window from './Window.jsx';
import { selectActiveWindow, useWindowStore } from '../store/windowStore.js';

export default function WindowManager({
  appsById,
  onOpenProjectDialog,
  portfolio,
  wallpaperColor,
  onWallpaperColorChange,
}) {
  const windows = useWindowStore((state) => state.windows);
  const activeWindow = useWindowStore(selectActiveWindow);
  const visibleWindows = useMemo(
    () => windows.filter((windowItem) => !windowItem.minimized),
    [windows],
  );

  return (
    <AnimatePresence>
      {visibleWindows.map((windowState) => {
        const app = appsById[windowState.id];
        if (!app) return null;

        const AppComponent = app.component;

        return (
          <Window
            key={windowState.id}
            app={app}
            windowState={windowState}
            active={activeWindow?.id === windowState.id}
          >
            <AppComponent
              portfolio={portfolio}
              onOpenProjectDialog={onOpenProjectDialog}
              wallpaperColor={wallpaperColor}
              onWallpaperColorChange={onWallpaperColorChange}
            />
          </Window>
        );
      })}
    </AnimatePresence>
  );
}
