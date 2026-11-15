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
              Work history & training
            </p>
            <h2
              id="experience-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
            >
              Internships & Experience
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

          {experience.map((job) => (
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
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Main Details */}
                  <div className="flex-1 min-w-0 w-full">
                    {/* Header: Role & Company */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {job.role}
                        </h3>
                        <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 sm:justify-end">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                          {job.type}
                        </span>
                        <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">
                          {job.startDate} — {job.endDate}
                        </span>
                      </div>
                    </div>

                    {/* Badges */}
                    {job.badges && job.badges.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {job.badges.map((badge, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/60"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Short Description */}
                    {job.description && (
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 bg-slate-50 dark:bg-slate-900/40 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                        {job.description}
                      </p>
                    )}

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 mb-3" role="list">
                      {job.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Certificate ID footer note */}
                    {job.certificateId && (
                      <p className="text-xs text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-700/60 font-mono">
                        Credential ID: <span className="font-semibold">{job.certificateId}</span>
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
                        className="group/img relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-pointer block text-left"
                        aria-label={`View certificate for ${job.role} at ${job.company}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={job.certificateImage}
                          alt={`${job.role} Certificate — ${job.company}`}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-slate-900 shadow-md backdrop-blur-sm">
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
                        className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline mt-1.5 text-center flex items-center gap-1 font-medium"
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
