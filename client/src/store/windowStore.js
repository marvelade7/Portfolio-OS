import { create } from 'zustand';

const BASE_Z_INDEX = 70;

const SAFE_AREA = {
  left: 24,
  top: 48,
  right: 24,
  bottom: 104,
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function nextGeometry(app, index = 0) {
  const width = app.width || 760;
  const height = app.height || 520;
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1440;
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 900;
  const usableWidth = Math.max(320, viewportWidth - SAFE_AREA.left - SAFE_AREA.right);
  const usableHeight = Math.max(280, viewportHeight - SAFE_AREA.top - SAFE_AREA.bottom);
  const maxX = Math.max(SAFE_AREA.left, viewportWidth - width - SAFE_AREA.right);
  const maxY = Math.max(SAFE_AREA.top, viewportHeight - height - SAFE_AREA.bottom);
  const stagger = (index % 5) * 28;
  const centeredX = SAFE_AREA.left + Math.round((usableWidth - width) / 2) + stagger;
  const centeredY = SAFE_AREA.top + Math.round((usableHeight - height) / 2) + stagger;

  return {
    position: {
      x: clamp(centeredX, SAFE_AREA.left, maxX),
      y: clamp(centeredY, SAFE_AREA.top, maxY),
    },
    size: {
      width,
      height,
    },
  };
}

function nextMaximizedBounds() {
  return {
    position: { x: SAFE_AREA.left, y: 28 },
    size: {
      width: 'calc(100vw - 84px)',
      height: 'calc(100vh - 28px)',
    },
  };
}

export const useWindowStore = create((set, get) => ({
  windows: [],
  nextZIndex: BASE_Z_INDEX,

  openWindow(app) {
    const nextZIndex = get().nextZIndex + 1;

    set((state) => {
      const existing = state.windows.find((windowItem) => windowItem.id === app.id);

      if (existing) {
        const centered = nextGeometry(app, state.windows.length);

        return {
          nextZIndex,
          windows: state.windows.map((windowItem) =>
            windowItem.id === app.id
              ? {
                  ...windowItem,
                  minimized: false,
                  zIndex: nextZIndex,
                  position: centered.position,
                  size: centered.size,
                }
              : windowItem,
          ),
        };
      }

      return {
        nextZIndex,
        windows: [
          ...state.windows,
          {
            id: app.id,
            title: app.title,
            minimized: false,
            maximized: false,
            zIndex: nextZIndex,
            previousGeometry: null,
            ...nextGeometry(app, state.windows.length),
          },
        ],
      };
    });
  },

  closeWindow(id) {
    set((state) => ({
      windows: state.windows.filter((windowItem) => windowItem.id !== id),
    }));
  },

  minimizeWindow(id) {
    set((state) => ({
      windows: state.windows.map((windowItem) =>
        windowItem.id === id ? { ...windowItem, minimized: true } : windowItem,
      ),
    }));
  },

  restoreWindow(id) {
    const nextZIndex = get().nextZIndex + 1;
    set((state) => ({
      nextZIndex,
      windows: state.windows.map((windowItem) =>
        windowItem.id === id
          ? {
              ...windowItem,
              minimized: false,
              zIndex: nextZIndex,
              ...nextGeometry({ width: windowItem.size.width, height: windowItem.size.height }, state.windows.length),
            }
          : windowItem,
      ),
    }));
  },

  bringToFront(id) {
    const current = get().windows.find((windowItem) => windowItem.id === id);
    if (!current || current.zIndex === get().nextZIndex) return;

    const nextZIndex = get().nextZIndex + 1;
    set((state) => ({
      nextZIndex,
      windows: state.windows.map((windowItem) =>
        windowItem.id === id ? { ...windowItem, zIndex: nextZIndex } : windowItem,
      ),
    }));
  },

  toggleMaximize(id) {
    set((state) => ({
      windows: state.windows.map((windowItem) => {
        if (windowItem.id !== id) return windowItem;

        if (windowItem.maximized) {
          const restored = windowItem.previousGeometry || {
            position: windowItem.position,
            size: windowItem.size,
          };

          return {
            ...windowItem,
            maximized: false,
            position: restored.position,
            size: restored.size,
            previousGeometry: null,
          };
        }

        return {
          ...windowItem,
          maximized: true,
          previousGeometry: {
            position: windowItem.position,
            size: windowItem.size,
          },
          position: nextMaximizedBounds().position,
          size: nextMaximizedBounds().size,
        };
      }),
    }));
  },

  updateGeometry(id, geometry) {
    set((state) => ({
      windows: state.windows.map((windowItem) =>
        windowItem.id === id
          ? {
              ...windowItem,
              position: geometry.position || windowItem.position,
              size: geometry.size || windowItem.size,
            }
          : windowItem,
      ),
    }));
  },
}));

export function selectVisibleWindows(state) {
  return state.windows.filter((windowItem) => !windowItem.minimized);
}

export function selectMinimizedWindows(state) {
  return state.windows.filter((windowItem) => windowItem.minimized);
}

export function selectActiveWindow(state) {
  const visibleWindows = selectVisibleWindows(state);
  return visibleWindows.reduce(
    (active, windowItem) => (!active || windowItem.zIndex > active.zIndex ? windowItem : active),
    null,
  );
}
