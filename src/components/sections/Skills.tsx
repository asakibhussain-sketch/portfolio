import { Code2 } from "lucide-react";
import { skills } from "@/data/portfolio";

const categoryIcons: Record<string, string> = {
  Languages: "💻",
  "Machine Learning & AI": "🤖",
  "Data & Analytics": "📊",
  Databases: "🗄️",
  "Frameworks & Tools": "🔧",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-0.5">
              Technical expertise
            </p>
            <h2
              id="skills-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
            >
              Skills
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((category) => (
            <div
              key={category.category}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">
                <span aria-hidden="true">{categoryIcons[category.category] ?? "🔹"}</span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2" role="list" aria-label={`${category.category} skills`}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    role="listitem"
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-50 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
