import { ExternalLink, GitBranch } from 'lucide-react';

export default function ProjectsApp({ portfolio }) {
  const projects = portfolio.projects.map((project) => ({
    ...project,
    techStack: project.techStack || project.stack || [],
    github: project.github || project.repo || '',
    createdAt: project.createdAt || project.createdDate,
  }));

  return (
    <div className="h-full overflow-auto bg-[#f6f2ef] p-5 text-[#211821]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Projects</h1>
          <p className="mt-1 text-sm text-[#6d5868]">Selected work with product context and stack notes.</p>
        </div>
        <div className="rounded-full bg-[#300A24] px-3 py-1 text-xs font-semibold text-white">
          {projects.length} items
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug || project.id || project.title}
            className="rounded-md border border-[#d8ccc4] bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-[#300A24]">{project.title}</h2>
                <p className="mt-1 text-sm text-[#765f70]">{project.type}</p>
              </div>
              <span className="shrink-0 rounded-full bg-[#e7f4ef] px-3 py-1 text-xs font-semibold text-[#0b7551]">
                {project.status}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#433640]">{project.description}</p>
            <p className="mt-3 text-sm font-medium text-[#C33F13]">{project.impact}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <span key={item} className="rounded-full bg-[#efe8e4] px-3 py-1 text-xs text-[#4d3b46]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center gap-2 rounded-md border border-[#d7cbc3] px-3 text-sm font-medium transition hover:border-[#E95420] hover:text-[#C33F13]"
              >
                <GitBranch size={15} />
                Repo
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center gap-2 rounded-md bg-[#E95420] px-3 text-sm font-medium text-white transition hover:bg-[#d84a19]"
              >
                <ExternalLink size={15} />
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
