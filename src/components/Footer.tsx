import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      className="border-t border-slate-200 dark:border-slate-800 py-10 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/50"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {profile.name}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            {profile.title} · {profile.location}
          </p>
        </div>

        {/* Social links */}
        <nav aria-label="Social media links" className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
            aria-label="GitHub profile"
          >
          <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all"
            aria-label="LinkedIn profile"
          >
          <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
          Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" aria-hidden="true" /> by {profile.name.split(" ")[0]} ·{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
