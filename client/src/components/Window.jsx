import { Minus } from 'lucide-react';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useWindowStore } from '../store/windowStore.js';

const MAXIMIZED_BOUNDS = {
  x: 24,
  y: 36,
  width: 'calc(100vw - 48px)',
  height: 'calc(100vh - 132px)',
};

const WINDOW_BOUNDS = {
  left: 24,
  top: 36,
  right: 24,
  bottom: 96,
};

export default function Window({ app, children, windowState, active }) {
  const nodeRef = useRef(null);
  const closeWindow = useWindowStore((state) => state.closeWindow);
  const minimizeWindow = useWindowStore((state) => state.minimizeWindow);
  const toggleMaximize = useWindowStore((state) => state.toggleMaximize);
  const bringToFront = useWindowStore((state) => state.bringToFront);
  const updateGeometry = useWindowStore((state) => state.updateGeometry);

  const Icon = app.icon;
  const maximized = windowState.maximized;

  // When maximized the outer div handles all sizing via CSS calc;
  // pass 100%/100% to Resizable so it fills that container without
  // needing to resolve the calc() strings itself.
  const outerStyle = maximized
    ? { width: MAXIMIZED_BOUNDS.width, height: MAXIMIZED_BOUNDS.height }
    : { width: windowState.size.width, height: windowState.size.height };

  const position = maximized
    ? { x: MAXIMIZED_BOUNDS.x, y: MAXIMIZED_BOUNDS.y }
    : windowState.position;

  const resizableSize = maximized
    ? { width: '100%', height: '100%' }
    : windowState.size;

  // Numeric width/height used only for Draggable bounds (needs numbers).
  const boundsWidth = windowState.size.width;
  const boundsHeight = windowState.size.height;

  function focusWindow() {
    bringToFront(windowState.id);
  }

  function handleDragStop(event, data) {
    updateGeometry(windowState.id, {
      position: { x: data.x, y: data.y },
    });
  }

  function handleResizeStop(event, direction, ref, delta, nextPosition) {
    updateGeometry(windowState.id, {
      position: nextPosition,
      size: {
        width: ref.offsetWidth,
        height: ref.offsetHeight,
      },
    });
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      cancel="button, input, textarea, select, a, [data-no-drag='true']"
      disabled={maximized}
      position={position}
      bounds={{
        left: WINDOW_BOUNDS.left,
        top: WINDOW_BOUNDS.top,
        right: window.innerWidth - WINDOW_BOUNDS.right - boundsWidth,
        bottom: window.innerHeight - WINDOW_BOUNDS.bottom - boundsHeight,
      }}
      onStart={focusWindow}
      onStop={handleDragStop}
    >
      <div
        ref={nodeRef}
        data-no-desktop-menu="true"
        className="absolute"
        style={{
          zIndex: windowState.zIndex,
          ...outerStyle,
        }}
      >
          <motion.section
          className={`flex h-full w-full min-h-[280px] min-w-[320px] flex-col overflow-hidden border border-black/35 bg-[#2C2C2C] text-white shadow-window transition-all duration-200 ${
              maximized ? 'rounded-none' : 'rounded-lg'
            } ${active ? 'ring-1 ring-white/20' : ''}`}
            style={{
            }}
            aria-label={windowState.title}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onPointerDown={focusWindow}
        >
            <Resizable
              size={resizableSize}
              minWidth={320}
              minHeight={280}
              maxWidth={maximized ? undefined : window.innerWidth - 84}
              maxHeight={maximized ? undefined : window.innerHeight - 152}
              enable={{
                top: !maximized,
                right: !maximized,
                bottom: !maximized,
                left: !maximized,
                topRight: !maximized,
                bottomRight: !maximized,
                bottomLeft: !maximized,
                topLeft: !maximized,
              }}
              onResizeStart={focusWindow}
              onResizeStop={handleResizeStop}
              className="flex h-full flex-col"
            >
              <div className="window-titlebar flex h-10 shrink-0 cursor-move items-center justify-between border-b border-black/35 bg-[#242424] px-3 transition-all duration-200">
                <div className="flex min-w-0 items-center gap-2">
                  <div className="flex shrink-0 items-center gap-2 pr-2">
                    <TrafficLight
                      color="red"
                      label="Close"
                      onClick={() => closeWindow(windowState.id)}
                    />
                    <TrafficLight
                      color="yellow"
                      label="Minimize"
                      onClick={() => minimizeWindow(windowState.id)}
                    >
                      <Minus size={9} strokeWidth={3} />
                    </TrafficLight>
                    <TrafficLight
                      color="green"
                      label={maximized ? 'Restore' : 'Maximize'}
                      onClick={() => toggleMaximize(windowState.id)}
                    />
                  </div>
                  <Icon size={16} className="shrink-0 text-white/75" />
                  <h2 className="truncate text-sm font-semibold">{windowState.title}</h2>
                </div>
              </div>

              <div
                className={`min-h-0 flex-1 overflow-auto ${
                  app.id === 'terminal' ? 'terminal-scroll-surface bg-[#330d26] text-[#f7f1ed]' : 'bg-[#f6f2ef] text-[#211821]'
                }`}
              >
                {children}
              </div>
            </Resizable>
          </motion.section>
        </div>
    </Draggable>
  );
}


function TrafficLight({ children, color, label, onClick }) {
  const colorClass = {
    red: 'bg-[#ff5f57] hover:bg-[#ff6b63]',
    yellow: 'bg-[#febc2e] hover:bg-[#ffd159]',
    green: 'bg-[#28c840] hover:bg-[#35d957]',
  }[color];

  return (
    <button
      type="button"
      data-no-drag="true"
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className={`grid h-3.5 w-3.5 place-items-center rounded-full text-black/55 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.18)] transition ${colorClass}`}
      aria-label={label}
      title={label}
    >
      {children}
    </button>
  );
}
