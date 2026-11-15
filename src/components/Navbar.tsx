"use client";

import { useState, useEffect } from "react";
import { Menu, X, Brain } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    // Default to dark mode for the liquid glass theme
    const isDark = stored ? stored === "dark" : true;
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2.5 sm:py-3 px-3 sm:px-6"
          : "py-4 px-4 sm:px-8 bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className={`max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16 transition-all duration-300 ${
          isScrolled
            ? "liquid-glass-nav rounded-2xl shadow-lg border border-white/70 dark:border-white/10"
            : "bg-white/40 dark:bg-slate-900/30 backdrop-blur-md rounded-2xl border border-white/50 dark:border-white/5"
        }`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 text-slate-900 dark:text-white font-semibold text-lg group transition-transform duration-200 hover:scale-105"
          aria-label="Home"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-500/15 dark:bg-blue-400/15 border border-blue-500/30 dark:border-blue-400/30 flex items-center justify-center backdrop-blur-md shadow-xs group-hover:bg-blue-500/25 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all">
            <Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          </div>
          <span className="font-bold tracking-tight">Sakib</span>
          <span className="text-blue-600 dark:text-sky-400 font-extrabold -ml-1">H.</span>
        </a>

        {/* Desktop links with glowing liquid hover */}
        <ul className="hidden md:flex items-center gap-1.5" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-white/70 dark:hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(56,189,248,0.2)] hover:-translate-y-0.5 rounded-full transition-all duration-200 cursor-pointer backdrop-blur-xs"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side controls (Mobile menu button) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden w-9 h-9 rounded-full liquid-glass-pill flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 cursor-pointer transition-all duration-150 hover:scale-105"
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden mt-2 p-3 liquid-glass-card rounded-2xl space-y-1 animate-in fade-in slide-in-from-top-2 duration-200"
          role="menu"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              role="menuitem"
              className="block w-full text-left px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-white/60 dark:hover:bg-slate-800/60 hover:translate-x-1 rounded-xl transition-all cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
