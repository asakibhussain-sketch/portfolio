import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      className="py-12 px-4 sm:px-6 relative z-10 border-t border-white/60 dark:border-white/5 bg-white/30 dark:bg-slate-950/40 backdrop-blur-xl"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <p className="text-base font-bold text-slate-900 dark:text-white">
            {profile.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {profile.title} · {profile.location}
          </p>
        </div>

        {/* Social links */}
        <nav aria-label="Social media links" className="flex items-center gap-2.5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl liquid-glass-pill flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all"
            aria-label="GitHub profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl liquid-glass-pill flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 transition-all"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="w-9 h-9 rounded-xl liquid-glass-pill flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" aria-hidden="true" />
          <span>by {profile.name.split(" ")[0]} · {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}
