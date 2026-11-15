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
      className="py-20 px-4 sm:px-6 relative z-10"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3.5 mb-12">
          <div className="w-10 h-10 rounded-xl liquid-glass-pill flex items-center justify-center text-blue-600 dark:text-sky-400 shadow-sm">
            <Code2 className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold text-blue-600 dark:text-sky-400 tracking-widest uppercase mb-0.5">
              Technical expertise
            </p>
            <h2
              id="skills-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white"
            >
              Skills & Tech Stack
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((category) => (
            <div
              key={category.category}
              className="liquid-glass-card rounded-2xl p-6 sm:p-7 space-y-4"
            >
              <h3 className="flex items-center gap-2.5 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                <span className="text-lg" aria-hidden="true">{categoryIcons[category.category] ?? "🔹"}</span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 pt-1" role="list" aria-label={`${category.category} skills`}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    role="listitem"
                    className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold liquid-glass-pill text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-300 cursor-default"
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
