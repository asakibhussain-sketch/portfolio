import { User, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 relative z-10"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3.5 mb-12">
          <div className="w-10 h-10 rounded-xl liquid-glass-pill flex items-center justify-center text-blue-600 dark:text-sky-400 shadow-sm">
            <User className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold text-blue-600 dark:text-sky-400 tracking-widest uppercase mb-0.5">
              Get to know me
            </p>
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white"
            >
              About Me
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Summary in a Liquid Glass Panel */}
          <div className="md:col-span-3 liquid-glass-card rounded-2xl p-6 sm:p-8 space-y-5">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              {profile.summary}
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I am currently pursuing my B.E. in Artificial Intelligence & Data Science at{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">
                Maharaja Institute Of Technology Thandavapura
              </strong>{" "}
              (VTU), while simultaneously gaining practical experience through internships and building
              real-world AI & web projects.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              My research interest lies in{" "}
              <strong className="text-blue-600 dark:text-sky-400 font-semibold">
                Federated Learning
              </strong>{" "}
              — enabling privacy-preserving collaborative model training across distributed clients. I am
              passionate about applying AI to solve meaningful problems in healthcare, education, and
              civic tech.
            </p>
          </div>

          {/* Quick facts & Highlights */}
          <div className="md:col-span-2 space-y-6">
            {/* Quick Facts Card */}
            <div className="liquid-glass-card rounded-2xl p-6 space-y-4">
              <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-sky-400" />
                Quick Facts
              </h3>
              <dl className="space-y-3.5">
                {[
                  { label: "Degree", value: "B.E. AI & Data Science (2023–2027)" },
                  { label: "University", value: "VTU, Karnataka" },
                  { label: "Languages", value: "English, Hindi & Urdu, Kannada" },
                  { label: "Status", value: "Open to work · Mysore | Hybrid" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col border-b border-white/40 dark:border-white/5 pb-2.5 last:border-0 last:pb-0">
                    <dt className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wide">
                      {label}
                    </dt>
                    <dd className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Achievement badges */}
            <div className="liquid-glass-card rounded-2xl p-6">
              <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-sky-400" />
                Highlights
              </h3>
              <ul className="space-y-2.5" role="list">
                {[
                  "🏆 Top 2 — National Ideathon 2025",
                  "🥈 4th Place — MITT Ideathon (50 teams)",
                  "💼 3× Internships + Industrial Training",
                  "🌟 Campus Ambassador (Glow Logics)",
                  "🤖 Federated Learning Researcher",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2 p-2 rounded-xl liquid-glass-subtle"
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
