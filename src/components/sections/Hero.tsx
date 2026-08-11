"use client";

import Image from "next/image";
import { MapPin, Mail, Download, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-12 px-4 sm:px-6 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-950/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-slate-100 dark:bg-slate-800/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-slate-700 p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                <Image
                  src={profile.avatarUrl}
                  alt={`${profile.name} profile photo`}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            {/* Status badge */}
            <span
              className="absolute bottom-2 right-2 flex h-4 w-4"
              title="Open to work"
              aria-label="Open to work"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white dark:border-slate-950" />
            </span>
          </div>
        </div>

        {/* Name & title */}
        <div className="space-y-3">
          <p className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            Available for opportunities
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
            {profile.name}
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
            {profile.title}
          </p>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {profile.tagline}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <MapPin className="w-4 h-4 text-blue-500" aria-hidden="true" />
          <span>{profile.location}</span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-all duration-150 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-150 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            Contact Me
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Resume
            </a>
          )}
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
            aria-label="GitHub profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all"
            aria-label="Email Sakib Hussain"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ChevronDown className="w-6 h-6 text-slate-400 dark:text-slate-600" />
      </div>
    </section>
  );
}
