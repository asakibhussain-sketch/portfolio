import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-0.5">
              Work history
            </p>
            <h2
              id="experience-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
            >
              Experience
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"
            aria-hidden="true"
          />

          {experience.map((job, idx) => (
            <article
              key={job.id}
              className="relative sm:pl-16 group"
              aria-label={`${job.role} at ${job.company}`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-4 top-5 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-slate-950 shadow-sm hidden sm:block transition-transform group-hover:scale-110"
                aria-hidden="true"
              />

              {/* Card */}
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                      {job.type}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {job.startDate} — {job.endDate}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2" role="list">
                  {job.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"
                        aria-hidden="true"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
