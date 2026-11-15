"use client";

import { useState } from "react";
import { Briefcase, ZoomIn, Eye, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/portfolio";
import CertificateModal, { CertificateModalData } from "@/components/CertificateModal";

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState<CertificateModalData | null>(null);

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 relative z-10"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3.5 mb-12">
          <div className="w-10 h-10 rounded-xl liquid-glass-pill flex items-center justify-center text-blue-600 dark:text-sky-400 shadow-sm">
            <Briefcase className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold text-blue-600 dark:text-sky-400 tracking-widest uppercase mb-0.5">
              Work history & training
            </p>
            <h2
              id="experience-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white"
            >
              Internships & Experience
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Vertical fluid line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/40 via-sky-400/30 to-indigo-500/20 hidden sm:block"
            aria-hidden="true"
          />

          {experience.map((job) => (
            <article
              key={job.id}
              className="relative sm:pl-16 group"
              aria-label={`${job.role} at ${job.company}`}
            >
              {/* Timeline glass dot */}
              <div
                className="absolute left-4 top-6 w-4 h-4 rounded-full bg-blue-600 dark:bg-sky-400 border-4 border-white/80 dark:border-slate-900 shadow-[0_0_12px_rgba(37,99,235,0.4)] hidden sm:block transition-transform duration-300 group-hover:scale-125"
                aria-hidden="true"
              />

              {/* Liquid Glass Card */}
              <div className="liquid-glass-card rounded-2xl p-6 sm:p-7">
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Main Details */}
                  <div className="flex-1 min-w-0 w-full">
                    {/* Header: Role & Company */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3.5">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {job.role}
                        </h3>
                        <p className="text-base font-semibold text-blue-600 dark:text-sky-400">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold liquid-glass-pill text-blue-700 dark:text-sky-300">
                          {job.type}
                        </span>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                          {job.startDate} — {job.endDate}
                        </span>
                      </div>
                    </div>

                    {/* Badges */}
                    {job.badges && job.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3.5">
                        {job.badges.map((badge, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-lg liquid-glass-subtle text-slate-700 dark:text-slate-200"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Short Description */}
                    {job.description && (
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4 liquid-glass-subtle p-3.5 rounded-xl">
                        {job.description}
                      </p>
                    )}

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 mb-3.5" role="list">
                      {job.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-sky-400 shrink-0 shadow-[0_0_6px_rgba(59,130,246,0.6)]"
                            aria-hidden="true"
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Certificate ID footer note */}
                    {job.certificateId && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-white/40 dark:border-white/5 font-mono">
                        Credential ID: <span className="font-semibold text-slate-700 dark:text-slate-200">{job.certificateId}</span>
                      </p>
                    )}
                  </div>

                  {/* Side Image / Certificate Preview */}
                  {job.certificateImage && (
                    <div className="w-full lg:w-56 shrink-0 flex flex-col items-center">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedCert({
                            imageUrl: job.certificateImage!,
                            title: `${job.role} — ${job.company}`,
                            issuer: job.company,
                            certificateId: job.certificateId,
                          })
                        }
                        className="group/img relative w-full aspect-[4/3] rounded-xl overflow-hidden liquid-frame bg-slate-100/50 dark:bg-slate-900/50 cursor-pointer block text-left"
                        aria-label={`View certificate for ${job.role} at ${job.company}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={job.certificateImage}
                          alt={`${job.role} Certificate — ${job.company}`}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-slate-900 shadow-lg backdrop-blur-md">
                            <ZoomIn className="w-3.5 h-3.5 text-blue-600" />
                            View Certificate
                          </span>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedCert({
                            imageUrl: job.certificateImage!,
                            title: `${job.role} — ${job.company}`,
                            issuer: job.company,
                            certificateId: job.certificateId,
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
            </article>
          ))}
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
