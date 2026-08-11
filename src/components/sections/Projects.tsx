import { ExternalLink, Star, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/portfolio";

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  JavaScript: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  Python: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "HTML/Node.js": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/50"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <FolderGit2 className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-0.5">
              What I&apos;ve built
            </p>
            <h2
              id="projects-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
            >
              Projects
            </h2>
          </div>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-12 ml-0 sm:ml-16">
          {projects.length} public repositories on{" "}
          <a
            href="https://github.com/asakibhussain-sketch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub
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
    "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300";

  return (
    <article
      className={`bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col ${
        featured ? "p-6" : "p-4"
      }`}
      aria-label={project.name}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <FolderGit2
            className={`text-blue-500 dark:text-blue-400 shrink-0 ${featured ? "w-5 h-5" : "w-4 h-4"}`}
            aria-hidden="true"
          />
          <h3
            className={`font-bold text-slate-900 dark:text-white leading-tight ${
              featured ? "text-base" : "text-sm"
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
              className="p-1.5 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label={`Live demo of ${project.name}`}
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
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
      <div className="mt-auto space-y-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, featured ? 5 : 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Language + stars */}
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${colorClass}`}>
            {project.language}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
            <Star className="w-3.5 h-3.5" aria-hidden="true" />
            {project.stars}
          </span>
        </div>
      </div>
    </article>
  );
}
