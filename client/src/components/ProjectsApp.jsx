import { ExternalLink, FolderOpen, GitBranch, RefreshCw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { fetchProjects } from "../lib/api.js";

const STATUS_STYLES = {
    Completed: "bg-[#e7f4ef] text-[#0b7551] ring-[#c8e4d7]",
    "In Progress": "bg-[#fff4d6] text-[#8a5a00] ring-[#f0ddb0]",
    Archived: "bg-[#ece7ee] text-[#5d4c62] ring-[#d7cddd]",
};

export default function ProjectsApp({ categorySlug = null }) {
    const [projects, setProjects] = useState([]);
    const [status, setStatus] = useState("loading");
    const [error, setError] = useState("");

    const headerSubtitle = useMemo(
        () =>
            categorySlug
                ? "A focused set of projects from the selected category."
                : "A curated view of shipped work, in-progress builds, and archived experiments.",
        [categorySlug],
    );

    async function loadProjects() {
        setStatus("loading");
        setError("");

        try {
            const response = await fetchProjects(categorySlug || undefined);
            const normalized = Array.isArray(response.projects)
                ? response.projects.map(normalizeProject)
                : [];

            setProjects(normalized);
            setStatus("ready");
        } catch (fetchError) {
            setError(fetchError.message || "Unable to load projects.");
            setStatus("error");
        }
    }

    useEffect(() => {
        loadProjects();
    }, [categorySlug]);

    return (
        <section className="flex h-full flex-col overflow-hidden bg-[#f6f2ef] text-[#211821]">
            <header className="flex shrink-0 items-start justify-between gap-4 border-b border-[#d8ccc4] bg-white/85 px-5 py-4 backdrop-blur">
                <div className="min-w-0">
                    <h1 className="text-3xl font-semibold tracking-tight text-[#300A24] sm:text-4xl">
                        Projects
                    </h1>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6d5868]">
                        {headerSubtitle}
                    </p>
                </div>
                <div className="shrink-0 rounded-full bg-[#300A24] px-3 py-1.5 text-xs font-semibold text-white">
                    {projects.length} items
                </div>
            </header>

            <div className="min-h-0 flex-1 overflow-auto p-5">
                {status === "loading" && <ProjectsSkeleton />}

                {status === "error" && (
                    <div className="grid h-full place-items-center">
                        <div className="w-full max-w-md rounded-2xl border border-[#d8ccc4] bg-white p-6 text-center shadow-sm">
                            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#f8ece6] text-[#C33F13]">
                                <FolderOpen size={22} />
                            </div>
                            <h2 className="mt-4 text-lg font-semibold text-[#300A24]">
                                Couldn’t load projects
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-[#6d5868]">
                                {error}
                            </p>
                            <button
                                type="button"
                                onClick={loadProjects}
                                className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#E95420] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#d84a19]"
                            >
                                <RefreshCw size={16} />
                                Retry
                            </button>
                        </div>
                    </div>
                )}

                {status === "ready" && projects.length === 0 && (
                    <div className="grid h-full place-items-center">
                        <div className="w-full max-w-md rounded-2xl border border-[#d8ccc4] bg-white p-6 text-center shadow-sm">
                            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#f8ece6] text-[#C33F13]">
                                <FolderOpen size={22} />
                            </div>
                            <h2 className="mt-4 text-lg font-semibold text-[#300A24]">
                                No projects yet
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-[#6d5868]">
                                This category doesn’t have any projects at the
                                moment.
                            </p>
                        </div>
                    </div>
                )}

                {status === "ready" && projects.length > 0 && (
                    <div className="grid gap-5 lg:grid-cols-2">
                        {projects.map((project) => (
                            <article
                                key={project.key}
                                className="rounded-2xl border border-[#ddd2ca] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#ccbdb4] hover:shadow-md"
                            >
                                <header className="flex items-start justify-between gap-4">
                                    <div className="min-w-0">
                                        <h2 className="text-xl font-semibold tracking-tight text-[#300A24]">
                                            {project.title}
                                        </h2>
                                        <p className="mt-1 text-sm text-[#75606d]">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                    <span
                                        className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${STATUS_STYLES[project.status] || STATUS_STYLES["In Progress"]}`}
                                    >
                                        {project.status}
                                    </span>
                                </header>

                                <p className="mt-4 text-sm leading-6 text-[#41333d]">
                                    {project.description}
                                </p>

                                {project.highlight && (
                                    <p className="mt-3 text-sm font-semibold leading-6 text-[#C33F13]">
                                        {project.highlight}
                                    </p>
                                )}

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.techStack.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full bg-[#f0e9e4] px-3 py-1 text-xs font-medium text-[#5b4954]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.repoUrl && (
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`Open repository for ${project.title} in a new tab`}
                                            className="inline-flex h-10 items-center gap-2 rounded-md border border-[#d7cbc3] bg-white px-3 text-sm font-semibold text-[#382a35] transition hover:border-[#E95420] hover:text-[#C33F13]"
                                        >
                                            <GitBranch size={16} />
                                            Repo
                                        </a>
                                    )}

                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`Open live demo for ${project.title} in a new tab`}
                                            className="inline-flex h-10 items-center gap-2 rounded-md bg-[#E95420] px-3 text-sm font-semibold text-white transition hover:bg-[#d84a19]"
                                        >
                                            <ExternalLink size={16} />
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

function normalizeProject(project) {
    const techStack =
        project.tech_stack || project.techStack || project.stack || [];

    return {
        key: project.id || project.slug || project.title,
        title: project.title,
        subtitle:
            project.subtitle || project.type || project.category || "Project",
        status: project.status || "In Progress",
        description: project.description || "",
        highlight: project.highlight || project.impact || "",
        techStack: Array.isArray(techStack) ? techStack : [],
        repoUrl: project.repo_url || project.repo || project.github || "",
        demoUrl: project.demo_url || project.demo || "",
    };
}

function ProjectsSkeleton() {
    return (
        <div className="grid gap-5 lg:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
                <article
                    key={index}
                    className="rounded-2xl border border-[#ddd2ca] bg-white p-6 shadow-sm"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                            <div className="h-5 w-44 rounded bg-[#ebe3dd]" />
                            <div className="mt-3 h-4 w-28 rounded bg-[#efe9e4]" />
                        </div>
                        <div className="h-7 w-24 rounded-full bg-[#ece4de]" />
                    </div>
                    <div className="mt-5 space-y-3">
                        <div className="h-4 w-full rounded bg-[#eee8e3]" />
                        <div className="h-4 w-11/12 rounded bg-[#eee8e3]" />
                        <div className="h-4 w-4/5 rounded bg-[#eee8e3]" />
                    </div>
                    <div className="mt-4 h-4 w-2/3 rounded bg-[#f0e4de]" />
                    <div className="mt-5 flex flex-wrap gap-2">
                        {Array.from({ length: 4 }).map((__, tagIndex) => (
                            <span
                                key={tagIndex}
                                className="h-6 w-16 rounded-full bg-[#eee8e3]"
                            />
                        ))}
                    </div>
                    <div className="mt-6 flex gap-2">
                        <div className="h-10 w-24 rounded-md border border-[#e3d8d1] bg-[#faf7f5]" />
                        <div className="h-10 w-24 rounded-md bg-[#f1a17b]" />
                    </div>
                </article>
            ))}
        </div>
    );
}
