"use client";

import { useState } from "react";
import { GraduationCap, Award, Trophy, ZoomIn, Eye, CheckCircle2 } from "lucide-react";
import { education, certifications, achievements } from "@/data/portfolio";
import CertificateModal, { CertificateModalData } from "@/components/CertificateModal";

export default function Education() {
  const [selectedCert, setSelectedCert] = useState<CertificateModalData | null>(null);

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 relative z-10"
      aria-labelledby="education-heading"
    >
      <div className="max-w-4xl mx-auto space-y-20">
        {/* EDUCATION */}
        <div>
          <div className="flex items-center gap-3.5 mb-10">
            <div className="w-10 h-10 rounded-xl liquid-glass-pill flex items-center justify-center text-blue-600 dark:text-sky-400 shadow-sm">
              <GraduationCap className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-bold text-blue-600 dark:text-sky-400 tracking-widest uppercase mb-0.5">
                Academic background
              </p>
              <h2
                id="education-heading"
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white"
              >
                Education
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <article
                key={edu.id}
                className="liquid-glass-card rounded-2xl p-6 sm:p-7"
                aria-label={`${edu.degree} at ${edu.institution}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl liquid-glass-subtle flex items-center justify-center shrink-0">
                      <span className="text-xl" aria-hidden="true">
                        {idx === 0 ? "🎓" : idx === 1 ? "📚" : "🏫"}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 dark:text-sky-400 mt-0.5">
                        {edu.degree} — {edu.field}
                      </p>
                      {edu.details && (
                        <ul className="mt-3 space-y-1.5">
                          {edu.details.map((d, i) => (
                            <li key={i} className="text-xs text-slate-600 dark:text-slate-400">
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 shrink-0 liquid-glass-pill px-3.5 py-1.5 rounded-full">
                    {edu.startYear} – {edu.endYear}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <div className="flex items-center gap-3.5 mb-10">
            <div className="w-10 h-10 rounded-xl liquid-glass-pill flex items-center justify-center text-blue-600 dark:text-sky-400 shadow-sm">
              <Award className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-bold text-blue-600 dark:text-sky-400 tracking-widest uppercase mb-0.5">
                Lifelong learning
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Certifications
              </h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="liquid-glass-card rounded-2xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl liquid-glass-subtle flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-blue-600 dark:text-sky-400" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{cert.issuer}</p>
                  <div className="flex items-center gap-2 mt-2.5">
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{cert.year}</span>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                        cert.status === "In Progress"
                          ? "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30"
                          : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30"
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
        <div id="achievements">
          <div className="flex items-center gap-3.5 mb-10">
            <div className="w-10 h-10 rounded-xl liquid-glass-pill flex items-center justify-center text-blue-600 dark:text-sky-400 shadow-sm">
              <Trophy className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-bold text-blue-600 dark:text-sky-400 tracking-widest uppercase mb-0.5">
                Recognition & Honors
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Achievements & Awards
              </h3>
            </div>
          </div>

          <div className="space-y-5">
            {/* Achievements with side certificate images */}
            {achievements
              .filter((a) => Boolean(a.image))
              .map((achievement) => (
                <div
                  key={achievement.id}
                  className="liquid-glass-card rounded-2xl p-6 sm:p-7"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Left: Content */}
                    <div className="flex-1 min-w-0 w-full">
                      <div className="flex items-start gap-3.5 mb-2.5">
                        <span className="text-2xl shrink-0" aria-hidden="true">
                          🏆
                        </span>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                            {achievement.title}
                          </h4>
                          {achievement.issuer && (
                            <p className="text-xs font-semibold text-blue-600 dark:text-sky-400 mt-0.5">
                              {achievement.issuer}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Badges / Date */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-3 sm:ml-10">
                        {achievement.date && (
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mr-1 whitespace-nowrap">
                            {achievement.date}
                          </span>
                        )}
                        {achievement.badges?.map((badge, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-lg liquid-glass-subtle text-slate-700 dark:text-slate-200"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                            {badge}
                          </span>
                        ))}
                      </div>

                      {/* Short Description */}
                      <p className="text-sm text-slate-700 dark:text-slate-300 sm:ml-10 leading-relaxed liquid-glass-subtle p-3.5 rounded-xl">
                        {achievement.description}
                      </p>

                      {achievement.certificateId && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 sm:ml-10 mt-2.5 font-mono">
                          Credential ID: <span className="font-semibold text-slate-700 dark:text-slate-200">{achievement.certificateId}</span>
                        </p>
                      )}
                    </div>

                    {/* Right: Side Image */}
                    {achievement.image && (
                      <div className="w-full md:w-56 shrink-0 flex flex-col items-center">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedCert({
                              imageUrl: achievement.image!,
                              title: achievement.title,
                              issuer: achievement.issuer,
                              certificateId: achievement.certificateId,
                            })
                          }
                          className="group/img relative w-full aspect-[4/3] rounded-xl overflow-hidden liquid-frame bg-slate-100/50 dark:bg-slate-900/50 cursor-pointer block text-left"
                          aria-label={`View certificate for ${achievement.title}`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-slate-900 shadow-md backdrop-blur-md">
                              <ZoomIn className="w-3.5 h-3.5 text-blue-600" />
                              View Certificate
                            </span>
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedCert({
                              imageUrl: achievement.image!,
                              title: achievement.title,
                              issuer: achievement.issuer,
                              certificateId: achievement.certificateId,
                            })
                          }
                          className="text-[11px] text-blue-600 dark:text-sky-400 hover:underline mt-2 text-center flex items-center gap-1 font-semibold cursor-pointer"
                        >
                          <Eye className="w-3 h-3" /> Click to enlarge
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

            {/* Other achievements in 2-column grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              {achievements
                .filter((a) => !a.image)
                .map((achievement) => (
                  <div
                    key={achievement.id}
                    className="liquid-glass-card rounded-2xl p-5 sm:p-6"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="text-2xl shrink-0" aria-hidden="true">
                        🏆
                      </span>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                          {achievement.title}
                        </h4>
                        {achievement.issuer && (
                          <p className="text-xs font-semibold text-blue-600 dark:text-sky-400 mt-0.5">
                            {achievement.issuer}
                          </p>
                        )}
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                          {achievement.description}
                        </p>
                        {achievement.badges && (
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {achievement.badges.map((b, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-medium px-2 py-0.5 rounded-md liquid-glass-subtle text-slate-600 dark:text-slate-300"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        data={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
