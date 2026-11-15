import { User } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <User className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-0.5">
              Get to know me
            </p>
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
            >
              About Me
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Summary */}
          <div className="md:col-span-3 space-y-5">
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {profile.summary}
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I am currently pursuing my B.E. in Artificial Intelligence & Data Science at{" "}
              <strong className="text-slate-800 dark:text-slate-100">
                Maharaja Institute Of Technology Thandavapura
              </strong>{" "}
              (VTU), while simultaneously gaining practical experience through internships and building
              real-world AI & web projects.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              My research interest lies in{" "}
              <strong className="text-slate-800 dark:text-slate-100">Federated Learning</strong> —
              enabling privacy-preserving collaborative model training across distributed clients. I am
              passionate about applying AI to solve meaningful problems in healthcare, education, and
              civic tech.
            </p>
          </div>

          {/* Quick facts */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 space-y-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Quick Facts
              </h3>
              <dl className="space-y-3">
                {[
                  { label: "Degree", value: "B.E. AI & Data Science (2023–2027)" },
                  { label: "University", value: "VTU, Karnataka" },
                  { label: "Location", value: profile.location },
                  { label: "Languages", value: "English, Hindi & Urdu, Kannada" },
                  { label: "Status", value: "Open to work · Mysore | Hybrid" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col">
                    <dt className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                      {label}
                    </dt>
                    <dd className="text-sm font-medium text-slate-700 dark:text-slate-200 mt-0.5">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Achievement badges */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                Highlights
              </h3>
              <ul className="space-y-2" role="list">
                {[
                  "🏆 Top 2 — National Ideathon 2025",
                  "🥈 4th Place — MITT Ideathon (50 teams)",
                  "💼 3× Internships + Industrial Training",
                  "🌟 Campus Ambassador (Glow Logics)",
                  "🤖 Federated Learning Researcher",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
