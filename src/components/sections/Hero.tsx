"use client";

import Image from "next/image";
import { MapPin, Mail, Download, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-14 px-4 sm:px-6"
      aria-label="Hero section"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Avatar with Liquid Glass Halo */}
        <div className="flex justify-center">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 group">
            {/* Liquid specular ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 p-1 shadow-[0_0_35px_rgba(37,99,235,0.25)] dark:shadow-[0_0_35px_rgba(56,189,248,0.25)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-1">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src={profile.avatarUrl}
                    alt={`${profile.name} profile photo`}
                    width={180}
                    height={180}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Liquid status badge */}
            <span
              className="absolute bottom-2 right-2 flex h-5 w-5"
              title="Open to work"
              aria-label="Open to work"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-white dark:border-slate-900 shadow-sm" />
            </span>
          </div>
        </div>

        {/* Name & title */}
        <div className="space-y-3.5">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill text-xs font-semibold tracking-wider text-blue-700 dark:text-sky-300 uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            <span className="liquid-text-gradient">{profile.name}</span>
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-200">
            {profile.title}
          </p>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {profile.tagline}
          </p>
        </div>

        {/* Location pill */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full liquid-glass-subtle text-xs font-medium text-slate-600 dark:text-slate-400 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-blue-500 dark:text-sky-400 shrink-0" aria-hidden="true" />
            <span>{profile.location}</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 liquid-btn-primary font-semibold text-sm rounded-xl cursor-pointer"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 liquid-btn-secondary text-slate-900 dark:text-white font-semibold text-sm rounded-xl cursor-pointer"
          >
            <Mail className="w-4 h-4 text-blue-600 dark:text-sky-400" aria-hidden="true" />
            Contact Me
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-3 liquid-glass-pill text-blue-600 dark:text-sky-400 font-medium text-sm rounded-xl hover:text-blue-700 dark:hover:text-sky-300 transition-colors"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Resume
            </a>
          )}
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 liquid-glass-pill flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl transition-all"
            aria-label="GitHub profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 liquid-glass-pill flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 rounded-xl transition-all"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="w-10 h-10 liquid-glass-pill flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 rounded-xl transition-all"
            aria-label="Email Sakib Hussain"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-70" aria-hidden="true">
        <div className="w-8 h-8 rounded-full liquid-glass-pill flex items-center justify-center">
          <ChevronDown className="w-4 h-4 text-slate-600 dark:text-slate-400" />
        </div>
      </div>
    </section>
  );
}
