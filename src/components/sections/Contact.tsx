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
      icon: <Mail className="w-5 h-5" aria-hidden="true" />,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <GithubIcon className="w-5 h-5" />,
      label: "GitHub",
      value: "asakibhussain-sketch",
      href: profile.github,
    },
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Sakib Hussain A",
      href: profile.linkedin,
    },
    {
      icon: <MapPin className="w-5 h-5" aria-hidden="true" />,
      label: "Location",
      value: profile.location,
      href: "https://maps.google.com/?q=Mysore,Karnataka,India",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-0.5">
              Get in touch
            </p>
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
            >
              Contact
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              I&apos;m open to internship opportunities, AI/ML research collaborations, and freelance
              data science projects. Feel free to reach out!
            </p>

            <ul className="space-y-4 mt-6" role="list">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.label !== "Email" && link.label !== "Location" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 group transition-colors"
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <span className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-200 dark:group-hover:border-blue-700 transition-all">
                      {link.icon}
                    </span>
                    <div>
                      <span className="text-xs font-medium text-slate-400 dark:text-slate-500 block">
                        {link.label}
                      </span>
                      <span className="font-medium">{link.value}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact form */}
          <div className="md:col-span-3">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Message sent!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Your email client should have opened. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
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
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
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
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Message <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Hi Sakib, I'd love to discuss..."
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-y"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-sm text-red-500 dark:text-red-400">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-all duration-150 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
