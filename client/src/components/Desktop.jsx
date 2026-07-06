import { useEffect, useMemo, useRef, useState } from "react";
import {
    Briefcase,
    FilePlus2,
    Globe2,
    MonitorCog,
    Settings,
    Terminal,
    Folder,
} from "lucide-react";
import AboutApp from "./AboutApp.jsx";
import ContactApp from "./ContactApp.jsx";
import Dock from "./Dock.jsx";
import FilesApp from "./FilesApp.jsx";
import Launcher from "./Launcher.jsx";
import ProjectsApp from "./ProjectsApp.jsx";
import SettingsApp from "./SettingsApp.jsx";
import TerminalApp from "./TerminalApp.jsx";
import TopBar from "./TopBar.jsx";
import WindowManager from "./WindowManager.jsx";
import DesktopIcon from "./os/DesktopIcon.jsx";
import { fallbackPortfolio } from "../data/portfolio.js";
import { loadPortfolio } from "../lib/api.js";
import { selectActiveWindow, useWindowStore } from "../store/windowStore.js";
import wallpaper from "../assets/ubuntu-wallpaper.png";

const WALLPAPER_STORAGE_KEY = "ubuntu-wallpaper-color";
const DEFAULT_WALLPAPER_COLOR = "#330d26";

const apps = [
    {
        id: "about",
        title: "About Me",
        dockTitle: "Browser (About Me)",
        icon: Globe2,
        width: 760,
        height: 560,
        position: { x: 118, y: 74 },
        component: AboutApp,
    },
    {
        id: "projects",
        title: "Projects",
        icon: Briefcase,
        width: 860,
        height: 590,
        position: { x: 178, y: 94 },
        component: ProjectsApp,
    },
    {
        id: "terminal",
        title: "Terminal",
        dockTitle: "Terminal",
        icon: Terminal,
        width: 760,
        height: 480,
        position: { x: 250, y: 122 },
        component: TerminalApp,
    },
    {
        id: "files",
        title: "Files",
        dockTitle: "Files",
        icon: Folder,
        width: 780,
        height: 520,
        position: { x: 220, y: 86 },
        component: FilesApp,
    },
    {
        id: "contact",
        title: "Contact",
        dockTitle: "Contact",
        icon: Settings,
        width: 760,
        height: 530,
        position: { x: 300, y: 112 },
        component: ContactApp,
    },
    {
        id: "settings",
        title: "Appearance",
        icon: MonitorCog,
        width: 650,
        height: 430,
        position: { x: 360, y: 120 },
        component: SettingsApp,
    },
];

const dockAppIds = ["files", "terminal", "about", "contact"];

const desktopShortcuts = [
    { id: "files", label: "Files", colorKey: "default" },
    { id: "projects", label: "My Projects", colorKey: "web" },
    // { id: 'about', label: 'About', colorKey: 'fullstack' },
    // {id: 'terminal'}
];

function hexToRgb(hex) {
    const normalized = hex.replace("#", "").trim();
    if (normalized.length !== 6) return { r: 51, g: 13, b: 38 };

    return {
        r: Number.parseInt(normalized.slice(0, 2), 16),
        g: Number.parseInt(normalized.slice(2, 4), 16),
        b: Number.parseInt(normalized.slice(4, 6), 16),
    };
}

function rgba(hex, alpha) {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function buildWallpaperStyles(color) {
    return [
        { backgroundColor: rgba(color, 0.22) },
        {
            background: `radial-gradient(circle at 80% 78%, ${rgba(color, 0.45)}, ${rgba(color, 0.18)} 44%, rgba(18, 9, 16, 0.24) 100%)`,
        },
        {
            background: `linear-gradient(135deg, ${rgba(color, 0.52)}, ${rgba(color, 0.22)} 45%, rgba(233, 84, 32, 0.22))`,
        },
    ];
}

export default function Desktop() {
    const [portfolio, setPortfolio] = useState(fallbackPortfolio);
    const [launcherOpen, setLauncherOpen] = useState(false);
    const [contextMenu, setContextMenu] = useState(null);
    const [toast, setToast] = useState(null);
    const [wallpaperMode, setWallpaperMode] = useState(0);
    const [wallpaperColor, setWallpaperColor] = useState(() => {
        if (typeof window === "undefined") return DEFAULT_WALLPAPER_COLOR;
        return (
            window.localStorage.getItem(WALLPAPER_STORAGE_KEY) ||
            DEFAULT_WALLPAPER_COLOR
        );
    });
    const toastTimerRef = useRef(null);
    const recenteredLegacyWindowsRef = useRef(false);
    const windows = useWindowStore((state) => state.windows);
    const activeWindow = useWindowStore(selectActiveWindow);
    const openWindow = useWindowStore((state) => state.openWindow);
    const updateGeometry = useWindowStore((state) => state.updateGeometry);

    const appsById = useMemo(
        () => Object.fromEntries(apps.map((app) => [app.id, app])),
        [],
    );
    const dockApps = useMemo(
        () => dockAppIds.map((id) => appsById[id]),
        [appsById],
    );

    useEffect(() => {
        let mounted = true;
        loadPortfolio().then((data) => {
            if (mounted) setPortfolio(data);
        });
        return () => {
            mounted = false;
        };
    }, []);

    useEffect(() => {
        if (!useWindowStore.getState().windows.length) {
            openWindow(appsById.about);
        }
    }, [appsById, openWindow]);

    useEffect(() => {
        if (recenteredLegacyWindowsRef.current || !windows.length) return;

        windows.forEach((windowItem) => {
            const app = appsById[windowItem.id];
            if (!app) return;

            const width = app.width || windowItem.size.width || 760;
            const height = app.height || windowItem.size.height || 520;
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const safeLeft = 84;
            const safeTop = 48;
            const safeRight = 24;
            const safeBottom = 104;
            const usableWidth = Math.max(
                320,
                viewportWidth - safeLeft - safeRight,
            );
            const usableHeight = Math.max(
                280,
                viewportHeight - safeTop - safeBottom,
            );

            updateGeometry(windowItem.id, {
                position: {
                    x: safeLeft + Math.round((usableWidth - width) / 2),
                    y: safeTop + Math.round((usableHeight - height) / 2),
                },
                size: windowItem.size,
            });
        });

        recenteredLegacyWindowsRef.current = true;
    }, [appsById, updateGeometry, windows]);

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setContextMenu(null);
                closeProjectDialog();
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        return () => {
            if (toastTimerRef.current) {
                window.clearTimeout(toastTimerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        window.localStorage.setItem(WALLPAPER_STORAGE_KEY, wallpaperColor);
    }, [wallpaperColor]);

    function openApp(id) {
        const app = appsById[id];
        if (!app) return;

        setLauncherOpen(false);
        openWindow(app);
    }

    function openProjectDialog(category) {
        setContextMenu(null);
        showToast(
            category
                ? `Projects are managed locally. Use scripts/addProject.js to update ${category}.`
                : "Projects are managed locally. Use scripts/addProject.js to add or update items.",
        );
    }

    function showToast(message) {
        if (toastTimerRef.current) {
            window.clearTimeout(toastTimerRef.current);
        }

        setToast({ id: Date.now(), message });
        toastTimerRef.current = window.setTimeout(() => {
            setToast(null);
        }, 3000);
    }

    function changeWallpaper() {
        setContextMenu(null);
        setWallpaperMode((current) => (current + 1) % wallpaperOverlays.length);
    }

    function handleDesktopContextMenu(event) {
        if (event.target.closest('[data-no-desktop-menu="true"]')) return;
        event.preventDefault();
        const width = 210;
        const height = 132;
        setContextMenu({
            x: Math.min(event.clientX, window.innerWidth - width - 8),
            y: Math.min(event.clientY, window.innerHeight - height - 8),
        });
    }

    const activeAppName = activeWindow
        ? appsById[activeWindow.id]?.title
        : "Desktop";

    return (
        <section
            className="relative h-screen w-screen overflow-hidden transition-all duration-200"
            onClick={() => setContextMenu(null)}
            onContextMenu={handleDesktopContextMenu}
        >
            <img
                src={wallpaper}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div
                className="absolute inset-0 transition-colors duration-500"
                style={buildWallpaperStyles(wallpaperColor)[wallpaperMode]}
            />

            <TopBar
                activeAppName={activeAppName}
                appsById={appsById}
                onActivities={() => setLauncherOpen((value) => !value)}
                onOpenContact={() => openApp("contact")}
            />
            <Dock
                apps={dockApps}
                openWindows={windows}
                onAddProject={openProjectDialog}
                onOpenApp={openApp}
                onLauncher={() => setLauncherOpen((value) => !value)}
            />
            <Launcher
                apps={apps}
                open={launcherOpen}
                onOpenApp={openApp}
                onClose={() => setLauncherOpen(false)}
            />

            <div className="absolute right-5 top-14 z-20 grid gap-5">
                {desktopShortcuts.map((shortcut) => {
                    const app = appsById[shortcut.id];

                    return (
                        <DesktopIcon
                            key={shortcut.id}
                            label={shortcut.label}
                            colorKey={shortcut.colorKey}
                            onOpen={() => openApp(shortcut.id)}
                            onContextMenu={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                            }}
                        />
                    );
                })}
            </div>

            {contextMenu && (
                <DesktopContextMenu
                    x={contextMenu.x}
                    y={contextMenu.y}
                    onChangeWallpaper={changeWallpaper}
                    onNewProject={openProjectDialog}
                    onOpenTerminal={() => {
                        setContextMenu(null);
                        openApp("terminal");
                    }}
                />
            )}

            <WindowManager
                appsById={appsById}
                portfolio={portfolio}
                onOpenProjectDialog={openProjectDialog}
                wallpaperColor={wallpaperColor}
                onWallpaperColorChange={setWallpaperColor}
            />

            {toast && <UbuntuToast key={toast.id} message={toast.message} />}
        </section>
    );
}

function UbuntuToast({ message }) {
    return (
        <div
            data-no-desktop-menu="true"
            className="absolute bottom-6 right-6 z-[95] flex min-h-12 min-w-72 items-center rounded-lg border border-white/10 bg-[#2C2C2C]/96 px-4 py-3 text-sm font-semibold text-white shadow-ubuntu backdrop-blur-xl transition-all duration-200"
        >
            <span className="mr-3 h-2.5 w-2.5 rounded-full bg-[#E95420]" />
            {message}
        </div>
    );
}

function DesktopContextMenu({
    x,
    y,
    onChangeWallpaper,
    onNewProject,
    onOpenTerminal,
}) {
    const items = [
        { label: "New Project", icon: FilePlus2, action: onNewProject },
        { label: "Open Terminal", icon: Terminal, action: onOpenTerminal },
        {
            label: "Change Wallpaper",
            icon: MonitorCog,
            action: onChangeWallpaper,
        },
    ];

    return (
        <div
            data-no-desktop-menu="true"
            className="absolute z-[85] w-[210px] overflow-hidden rounded-lg border border-white/10 bg-[#242024]/96 py-1 text-sm text-white shadow-ubuntu backdrop-blur-2xl transition-all duration-200"
            style={{ left: x, top: y }}
            onClick={(event) => event.stopPropagation()}
        >
            {items.map((item) => {
                const Icon = item.icon;
                return (
                    <button
                        key={item.label}
                        type="button"
                        onClick={item.action}
                        className="flex h-10 w-full items-center gap-3 px-3 text-left transition-all duration-200 hover:bg-ubuntu-orange focus:bg-ubuntu-orange focus:outline-none"
                    >
                        <Icon size={16} className="text-white/75" />
                        <span>{item.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
