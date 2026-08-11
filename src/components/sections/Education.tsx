import { GraduationCap, Award, Trophy } from "lucide-react";
import { education, certifications, achievements } from "@/data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/50"
      aria-labelledby="education-heading"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        {/* EDUCATION */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-0.5">
                Academic background
              </p>
              <h2
                id="education-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
              >
                Education
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <article
                key={edu.id}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                aria-label={`${edu.degree} at ${edu.institution}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                      <span className="text-lg" aria-hidden="true">
                        {idx === 0 ? "🎓" : idx === 1 ? "📚" : "🏫"}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {edu.degree} — {edu.field}
                      </p>
                      {edu.details && (
                        <ul className="mt-2 space-y-1">
                          {edu.details.map((d, i) => (
                            <li key={i} className="text-xs text-slate-500 dark:text-slate-400">
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 shrink-0 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                    {edu.startYear} – {edu.endYear}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-0.5">
                Lifelong learning
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Certifications
              </h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{cert.issuer}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-slate-400 dark:text-slate-500">{cert.year}</span>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        cert.status === "In Progress"
                          ? "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-200 dark:border-amber-700"
                          : "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-700"
                      }`}
                    >
                      {cert.status ?? "Completed"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-0.5">
                Recognition
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Achievements
              </h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden="true">🏆</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
