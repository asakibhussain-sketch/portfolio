"use client";

export default function LiquidBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base ambient tint */}
      <div className="absolute inset-0 bg-slate-50/70 dark:bg-[#070b14] transition-colors duration-500" />

      {/* Floating Liquid Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/25 dark:from-sky-500/15 dark:to-blue-600/15 blur-[120px] animate-fluid-1" />

      <div className="absolute top-1/4 -right-40 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-indigo-400/25 to-purple-500/20 dark:from-indigo-600/15 dark:to-violet-700/15 blur-[140px] animate-fluid-2" />

      <div className="absolute top-2/3 -left-20 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-sky-300/25 to-teal-400/20 dark:from-cyan-700/15 dark:to-teal-800/12 blur-[130px] animate-fluid-3" />

      <div className="absolute -bottom-32 right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-blue-400/25 to-fuchsia-400/18 dark:from-blue-700/14 dark:to-purple-900/15 blur-[150px] animate-fluid-1" />

      {/* Subtle Specular Refraction Mesh */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
