import DockIcon from './os/DockIcon.jsx';
import FolderIcon from './os/FolderIcon.jsx';
import {
  AddGlyph,
  ContactGlyph,
  LauncherGlyph,
  ProjectsGlyph,
  TerminalGlyph,
  WebGlyph,
} from './os/DockGlyphs.jsx';

export default function Dock({ apps, openWindows, onAddProject, onOpenApp, onLauncher }) {
  return (
    <aside
      data-no-desktop-menu="true"
      className="fixed bottom-3 left-1/2 z-[105] flex min-w-[520px] -translate-x-1/2 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[rgb(57,14,41,.8)] px-5 py-2.5 shadow-ubuntu backdrop-blur-2xl transition-all duration-200"
    >
      <div className="flex items-center gap-5">
        {apps.map((app) => {
          const windowState = openWindows.find((windowItem) => windowItem.id === app.id);
          const active = windowState && !windowState.minimized;
          const icon = {
            files: <FolderIcon colorKey="default" className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]" />,
            terminal: <TerminalGlyph className="h-7 w-7 text-white" />,
            about: <WebGlyph className="h-7 w-7 text-white" />,
            contact: <ContactGlyph className="h-7 w-7 text-white" />,
            projects: <ProjectsGlyph className="h-7 w-7 text-white" />,
            add: <AddGlyph className="h-7 w-7 text-white" />,
            launcher: <LauncherGlyph className="h-7 w-7 text-white" />,
          }[app.id] || <ProjectsGlyph className="h-7 w-7 text-white" />;

          return (
            <DockIcon
              key={app.id}
              label={app.dockTitle || app.title}
              isRunning={active}
              onClick={() => onOpenApp(app.id)}
            >
              {icon}
            </DockIcon>
          );
        })}
      </div>

      <button
        onClick={onAddProject}
        className="grid h-12 w-12 place-items-center rounded-2xl bg-[#2EC27E] text-white shadow-sm transition-all duration-200 hover:scale-110 hover:bg-[#33d18a] focus:scale-110 focus:bg-[#33d18a] focus:outline-none"
        title="Add Project"
        aria-label="Add Project"
      >
        <AddGlyph className="h-7 w-7" />
      </button>

      <button
        onClick={onLauncher}
        className="grid h-12 w-12 place-items-center rounded-2xl bg-ubuntu-orange text-white shadow-sm transition-all duration-200 hover:scale-110 hover:bg-[#ff6b34] focus:scale-110 focus:bg-[#ff6b34] focus:outline-none"
        title="Show Applications"
        aria-label="Show Applications"
      >
        <LauncherGlyph className="h-7 w-7" />
      </button>
    </aside>
  );
}
