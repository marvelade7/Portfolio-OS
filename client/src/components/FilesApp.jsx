import {
    ChevronRight,
    ExternalLink,
    Folder,
    GitBranch,
    Home,
    Plus,
    X,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
    CATEGORY_COLORS,
    PROJECT_CATEGORIES,
    PROJECT_STATUSES,
} from "../data/projectCategories.js";

const STATUS_STYLES = {
    Completed: "bg-[#e7f4ef] text-[#0b7551]",
    "In Progress": "bg-[#fff4d6] text-[#8a5a00]",
    Archived: "bg-[#ece7ee] text-[#5d4c62]",
};

export default function FilesApp({ onOpenProjectDialog, portfolio }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [detailProject, setDetailProject] = useState(null);

    const projects = useMemo(
        () => portfolio.projects.map((project) => normalizeProject(project)),
        [portfolio.projects],
    );

    const categoryFolders = useMemo(
        () =>
            PROJECT_CATEGORIES.map((category) => ({
                category,
                color: CATEGORY_COLORS[category],
                count: projects.filter(
                    (project) => project.category === category,
                ).length,
            })),
        [projects],
    );

    const activeCategoryFolders = useMemo(
        () => categoryFolders.filter((folder) => folder.count > 0),
        [categoryFolders],
    );

    const visibleProjects = selectedCategory
        ? projects.filter((project) => project.category === selectedCategory)
        : projects;

    function openCategory(category) {
        setSelectedCategory(category);
        setDetailProject(null);
    }

    function openAllProjects() {
        setSelectedCategory(null);
        setDetailProject(null);
    }

    return (
        <div className="relative grid h-full bg-[#f6f2ef] text-[#211821] md:grid-cols-[230px_1fr]">
            <aside className="min-h-0 border-b border-[#d8ccc4] bg-[#eee7e1] p-3 md:border-b-0 md:border-r">
                <button
                    onClick={openAllProjects}
                    className={`flex h-9 w-full items-center gap-2 rounded-md px-3 text-left text-sm font-semibold transition ${
                        selectedCategory === null
                            ? "bg-[#E95420] text-white"
                            : "bg-[#d9cbc4] text-[#352832] hover:bg-[#dfd5cf]"
                    }`}
                >
                    <Home size={16} />
                    All Projects
                    <span className="ml-auto rounded-full bg-black/12 px-2 py-0.5 text-[11px]">
                        {projects.length}
                    </span>
                </button>

                <div className="mt-3 space-y-1">
                    {activeCategoryFolders.map((folder) => (
                        <button
                            key={folder.category}
                            onClick={() => openCategory(folder.category)}
                            className={`flex h-9 w-full items-center gap-2 rounded-md px-3 text-left text-sm transition ${
                                selectedCategory === folder.category
                                    ? "bg-[#E95420] text-white"
                                    : "text-[#4d3b46] hover:bg-[#dfd5cf]"
                            }`}
                        >
                            <span
                                className="h-3 w-3 shrink-0 rounded-sm"
                                style={{ backgroundColor: folder.color }}
                            />
                            <span className="truncate">{folder.category}</span>
                            <span className="ml-auto rounded-full bg-black/10 px-2 py-0.5 text-[11px]">
                                {folder.count}
                            </span>
                        </button>
                    ))}
                </div>
            </aside>

            <section className="flex min-h-0 flex-col overflow-hidden">
                <Toolbar
                    selectedCategory={selectedCategory}
                    onAddProject={() =>
                        onOpenProjectDialog?.(selectedCategory || undefined)
                    }
                />

                <div className="min-h-0 flex-1 overflow-auto p-5">
                    {projects.length === 0 ? (
                        <div className="grid h-full place-items-center text-center text-sm text-[#765f70]">
                            <div>
                                <Folder size={48} className="mx-auto text-[#8a7883] opacity-50" />
                                <div className="mt-3 font-semibold text-[#300A24] text-lg">
                                    No projects yet.
                                </div>
                            </div>
                        </div>
                    ) : selectedCategory === null ? (
                        <FolderGrid
                            folders={activeCategoryFolders}
                            onOpenCategory={openCategory}
                        />
                    ) : (
                        <ProjectGrid
                            category={selectedCategory}
                            projects={visibleProjects}
                            onOpenProject={setDetailProject}
                        />
                    )}
                </div>
            </section>

            {detailProject && (
                <ProjectDetailWindow
                    project={detailProject}
                    onClose={() => setDetailProject(null)}
                />
            )}
        </div>
    );
}

function Toolbar({ selectedCategory, onAddProject }) {
    return (
        <div className="flex min-h-11 items-center justify-between gap-3 border-b border-[#d8ccc4] bg-white px-4 py-2 text-sm">
            <div className="flex min-w-0 items-center gap-2">
                <Home size={15} />
                <Crumb label="~" />
                <Crumb label="Portfolio" />
                <Crumb label="Projects" active={!selectedCategory} />
                {selectedCategory && <Crumb label={selectedCategory} active />}
            </div>
            <button
                onClick={onAddProject}
                className="inline-flex h-9 shrink-0 items-center gap-2 rounded-md bg-[#E95420] px-3 text-sm font-semibold text-white transition hover:bg-[#d84a19] focus:bg-[#d84a19] focus:outline-none"
            >
                <Plus size={16} />
                Add Project
            </button>
        </div>
    );
}

function Crumb({ active, label }) {
    return (
        <>
            <ChevronRight size={15} className="shrink-0 text-[#8a7883]" />
            <span
                className={`truncate ${active ? "font-semibold text-[#300A24]" : ""}`}
            >
                {label}
            </span>
        </>
    );
}

function FolderGrid({ folders, onOpenCategory }) {
    return (
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {folders.map((folder) => (
                <button
                    key={folder.category}
                    onDoubleClick={() => onOpenCategory(folder.category)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter")
                            onOpenCategory(folder.category);
                    }}
                    className="group flex min-h-32 flex-col items-center rounded-md p-3 text-center transition hover:bg-[#e9ded8] focus:bg-[#e9ded8] focus:outline-none"
                    title={folder.category}
                >
                    <FolderIcon color={folder.color} count={folder.count} />
                    <span className="mt-3 w-full break-words text-sm font-semibold text-[#332630]">
                        {folder.category}
                    </span>
                </button>
            ))}
        </div>
    );
}

function ProjectGrid({ category, projects, onOpenProject }) {
    if (!projects.length) {
        return (
            <div className="grid h-full place-items-center text-center text-sm text-[#765f70]">
                <div>
                    <FolderIcon color={CATEGORY_COLORS[category]} count={0} />
                    <div className="mt-3 font-semibold text-[#300A24]">
                        {category}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {projects.map((project) => (
                <button
                    key={project.slug}
                    onDoubleClick={() => onOpenProject(project)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") onOpenProject(project);
                    }}
                    className="group flex min-h-36 flex-col items-center rounded-md p-3 text-center transition hover:bg-[#e9ded8] focus:bg-[#e9ded8] focus:outline-none"
                    title={project.title}
                >
                    <ProjectTileIcon project={project} />
                    <span className="mt-3 w-full break-words text-sm font-semibold text-[#332630]">
                        {project.title}
                    </span>
                    <span className="mt-1 rounded-full bg-white px-2 py-0.5 text-[11px] text-[#765f70] ring-1 ring-[#d8ccc4]">
                        {project.status}
                    </span>
                </button>
            ))}
        </div>
    );
}

function FolderIcon({ color, count }) {
    return (
        <span className="relative block h-16 w-20 drop-shadow-md">
            <span
                className="absolute left-1 top-1 h-5 w-9 rounded-t-md opacity-90"
                style={{ backgroundColor: color }}
            />
            <span
                className="absolute bottom-0 left-0 h-12 w-20 rounded-md rounded-tl-sm"
                style={{ backgroundColor: color }}
            />
            <span className="absolute inset-x-2 bottom-2 h-7 rounded bg-white/16" />
            <span className="absolute -right-2 -top-1 grid h-6 min-w-6 place-items-center rounded-full bg-[#300A24] px-1 text-[11px] font-semibold text-white ring-2 ring-[#f6f2ef]">
                {count}
            </span>
        </span>
    );
}

function ProjectTileIcon({ project }) {
    const color =
        CATEGORY_COLORS[project.category] || CATEGORY_COLORS["Full Stack"];

    if (project.thumbnail) {
        return (
            <span className="grid h-16 w-20 place-items-center overflow-hidden rounded-md bg-white shadow-md ring-1 ring-[#d8ccc4]">
                <img
                    src={project.thumbnail}
                    alt=""
                    className="h-full w-full object-cover"
                    onError={(event) => {
                        event.currentTarget.style.display = "none";
                    }}
                />
            </span>
        );
    }

    return (
        <span
            className="grid h-16 w-20 place-items-center rounded-md text-white shadow-md"
            style={{
                background: `linear-gradient(135deg, ${color}, #300A24)`,
            }}
        >
            <Folder size={34} fill="rgba(255,255,255,0.18)" />
        </span>
    );
}

function ProjectDetailWindow({ onClose, project }) {
    const color =
        CATEGORY_COLORS[project.category] || CATEGORY_COLORS["Full Stack"];

    return (
        <div className="absolute inset-0 z-20 grid place-items-center bg-black/18 p-5 backdrop-blur-[2px]">
            <article className="flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-black/30 bg-[#f6f2ef] shadow-window">
                <div className="flex h-10 shrink-0 items-center justify-between border-b border-black/20 bg-[#302b30] px-3 text-white">
                    <div className="flex min-w-0 items-center gap-2">
                        <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
                        <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
                        <span className="ml-2 truncate text-sm font-semibold">
                            {project.title}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:bg-white/20 focus:outline-none"
                        aria-label="Close project detail"
                        title="Close"
                    >
                        <X size={14} />
                    </button>
                </div>

                <div className="grid min-h-0 overflow-auto md:grid-cols-[260px_1fr]">
                    <div className="bg-[#eee7e1] p-5">
                        {project.thumbnail ? (
                            <img
                                src={project.thumbnail}
                                alt=""
                                className="aspect-[4/3] w-full rounded-md object-cover shadow-md"
                            />
                        ) : (
                            <div
                                className="grid aspect-[4/3] w-full place-items-center rounded-md text-white shadow-md"
                                style={{
                                    background: `linear-gradient(135deg, ${color}, #300A24)`,
                                }}
                            >
                                <Folder
                                    size={64}
                                    fill="rgba(255,255,255,0.18)"
                                />
                            </div>
                        )}
                        <div className="mt-4 text-sm text-[#665260]">
                            Created {formatDate(project.createdDate)}
                        </div>
                    </div>

                    <div className="p-5">
                        <div className="flex flex-wrap items-center gap-2">
                            <span
                                className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                                style={{ backgroundColor: color }}
                            >
                                {project.category}
                            </span>
                            <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                    STATUS_STYLES[project.status] ||
                                    STATUS_STYLES["In Progress"]
                                }`}
                            >
                                {project.status}
                            </span>
                        </div>

                        <h1 className="mt-4 text-2xl font-semibold text-[#300A24]">
                            {project.title}
                        </h1>
                        <p className="mt-3 text-sm leading-6 text-[#4d3b46]">
                            {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#4d3b46] ring-1 ring-[#d8ccc4]"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 items-center gap-2 rounded-md border border-[#d7cbc3] bg-white px-3 text-sm font-semibold transition hover:border-[#E95420] hover:text-[#C33F13]"
                            >
                                <GitBranch size={16} />
                                GitHub
                            </a>
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 items-center gap-2 rounded-md bg-[#E95420] px-3 text-sm font-semibold text-white transition hover:bg-[#d84a19]"
                            >
                                <ExternalLink size={16} />
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

function normalizeProject(project) {
    const category = PROJECT_CATEGORIES.includes(project.category)
        ? project.category
        : inferCategory(project);

    return {
        ...project,
        category,
        status: normalizeStatus(project.status),
        createdDate: project.createdDate || "2026-05-14",
        thumbnail: project.thumbnail || "",
        stack: project.stack?.length ? project.stack : ["React"],
        repo: project.repo || "https://www.github.com/marvelade7",
        demo: project.demo || "https://example.com",
    };
}

function inferCategory(project) {
    const stack = (project.stack || []).join(" ").toLowerCase();
    const type = `${project.type || ""} ${project.title || ""}`.toLowerCase();

    if (stack.includes("express") || stack.includes("mongo"))
        return "Full Stack";
    if (stack.includes("api") || type.includes("automation")) return "APIs";
    if (stack.includes("react") && stack.includes("tailwind"))
        return "React + Tailwind";
    if (stack.includes("javascript")) return "HTML CSS JS";
    if (stack.includes("css")) return "HTML + CSS";
    if (stack.includes("html")) return "HTML";
    if (type.includes("backend")) return "Backend";
    return "Frontend";
}

function normalizeStatus(status) {
    if (PROJECT_STATUSES.includes(status)) return status;
    if (["Live", "Shipped", "Done"].includes(status)) return "Completed";
    if (["Archived", "Retired"].includes(status)) return "Archived";
    return "In Progress";
}

function formatDate(value) {
    return new Intl.DateTimeFormat(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(value));
}
