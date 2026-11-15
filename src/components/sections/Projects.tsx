import { ExternalLink, Star, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/portfolio";

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500/15 text-blue-700 dark:text-sky-300 border border-blue-500/25",
  JavaScript: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/25",
  Python: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25",
  "HTML/Node.js": "bg-orange-500/15 text-orange-700 dark:text-orange-300 border border-orange-500/25",
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 relative z-10"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-10 h-10 rounded-xl liquid-glass-pill flex items-center justify-center text-blue-600 dark:text-sky-400 shadow-sm">
            <FolderGit2 className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold text-blue-600 dark:text-sky-400 tracking-widest uppercase mb-0.5">
              What I&apos;ve built
            </p>
            <h2
              id="projects-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white"
            >
              Featured Projects
            </h2>
          </div>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10 ml-0 sm:ml-14">
          Explore public repositories and deployed AI platforms on{" "}
          <a
            href="https://github.com/asakibhussain-sketch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-sky-400 font-medium hover:underline inline-flex items-center gap-1"
          >
            GitHub ↗
          </a>
        </p>

        {/* Featured projects (larger cards) */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[0];
  featured?: boolean;
}) {
  const colorClass =
    languageColors[project.language] ??
    "bg-slate-500/15 text-slate-700 dark:text-slate-300 border border-slate-500/20";

  return (
    <article
      className={`liquid-glass-card rounded-2xl flex flex-col group ${
        featured ? "p-6 sm:p-7" : "p-5"
      }`}
      aria-label={project.name}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg liquid-glass-subtle flex items-center justify-center shrink-0">
            <FolderGit2
              className={`text-blue-600 dark:text-sky-400 shrink-0 ${featured ? "w-4.5 h-4.5" : "w-4 h-4"}`}
              aria-hidden="true"
            />
          </div>
          <h3
            className={`font-bold text-slate-900 dark:text-white leading-snug truncate ${
              featured ? "text-base sm:text-lg" : "text-sm"
            }`}
          >
            {project.name}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 ml-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg liquid-glass-pill flex items-center justify-center text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
              aria-label={`Live demo of ${project.name}`}
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg liquid-glass-pill flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            aria-label={`GitHub repository for ${project.name}`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p
        className={`text-slate-600 dark:text-slate-300 leading-relaxed flex-1 mb-4 ${
          featured ? "text-sm" : "text-xs"
        }`}
      >
        {project.description}
      </p>

      {/* Footer */}
      <div className="mt-auto space-y-3 pt-3 border-t border-white/40 dark:border-white/5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, featured ? 5 : 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium liquid-glass-subtle text-slate-600 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Language + stars */}
        <div className="flex items-center justify-between pt-1">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold backdrop-blur-xs ${colorClass}`}>
            {project.language}
          </span>
          <span className="flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" aria-hidden="true" />
            {project.stars}
          </span>
        </div>
      </div>
    </article>
  );
}
