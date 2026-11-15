"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    const mailtoUrl = `mailto:${profile.email}?subject=Portfolio Enquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setError("");
  };

  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5 text-blue-600 dark:text-sky-400" aria-hidden="true" />,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <GithubIcon className="w-5 h-5 text-slate-700 dark:text-slate-300" />,
      label: "GitHub",
      value: "asakibhussain-sketch",
      href: profile.github,
    },
    {
      icon: <LinkedinIcon className="w-5 h-5 text-blue-600 dark:text-sky-400" />,
      label: "LinkedIn",
      value: "Sakib Hussain A",
      href: profile.linkedin,
    },
    {
      icon: <MapPin className="w-5 h-5 text-rose-500" aria-hidden="true" />,
      label: "Location",
      value: profile.location,
      href: "https://maps.google.com/?q=Mysore,Karnataka,India",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 relative z-10"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3.5 mb-12">
          <div className="w-10 h-10 rounded-xl liquid-glass-pill flex items-center justify-center text-blue-600 dark:text-sky-400 shadow-sm">
            <Mail className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold text-blue-600 dark:text-sky-400 tracking-widest uppercase mb-0.5">
              Get in touch
            </p>
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white"
            >
              Contact Me
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              I&apos;m open to internship opportunities, AI/ML research collaborations, and freelance
              data science projects. Feel free to reach out!
            </p>

            <ul className="space-y-3.5" role="list">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.label !== "Email" && link.label !== "Location" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-2xl liquid-glass-card hover:translate-x-1 transition-all group cursor-pointer"
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <span className="w-10 h-10 rounded-xl liquid-glass-subtle flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {link.icon}
                    </span>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider block">
                        {link.label}
                      </span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate block">
                        {link.value}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact form */}
          <div className="md:col-span-3">
            <div className="liquid-glass-card rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full liquid-glass-subtle flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-9 h-9 text-emerald-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Message Prepared!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
                    Your default email client should have opened. If not, you can reach me directly at{" "}
                    <a href={`mailto:${profile.email}`} className="text-blue-600 dark:text-sky-400 font-semibold underline">
                      {profile.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                    className="mt-2 text-sm text-blue-600 dark:text-sky-400 font-semibold hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  className="space-y-4.5"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Your Name <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="John Doe"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 text-sm liquid-glass-input rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Email Address <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 text-sm liquid-glass-input rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Message <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Hi Sakib, I'd love to connect regarding..."
                      required
                      className="w-full px-4 py-3 text-sm liquid-glass-input rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none resize-y"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-sm font-medium text-red-500 dark:text-red-400">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 liquid-btn-primary font-bold text-sm rounded-xl cursor-pointer"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
