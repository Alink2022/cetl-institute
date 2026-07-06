"use client";

import { useState } from "react";
import { Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { CONTACT_ITEMS, CONTACT_INTEREST_OPTIONS, SITE } from "@/lib/content";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`CETL Inquiry: ${form.interest || "General"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nInterest: ${form.interest}\n\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-cetl-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="flex flex-col gap-8">
            <SectionHeader
              label="Contact"
              title="Start the Conversation"
              subtitle="Whether you're exploring ELaaS, need a strategic advisory engagement, or want to schedule an AI literacy briefing: we'd like to hear from you."
              align="left"
            />

            <div className="flex flex-col gap-6 pt-4 border-t border-cetl-border">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label}>
                  <p className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-cetl-gold hover:text-cetl-gold-light transition-colors text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-cetl-text text-sm">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 bg-cetl-surface border border-cetl-border rounded-xl p-5">
              <Users
                className="w-4 h-4 text-cetl-gold mt-0.5 shrink-0"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <p className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase mb-1">
                  Target Audience
                </p>
                <p className="text-cetl-text-muted text-sm leading-relaxed">
                  C-Suite executives, board members, and senior leadership teams in non-insurance sectors across Central Europe.
                </p>
              </div>
            </div>

            <div className="bg-cetl-surface border border-cetl-border rounded-xl p-6">
              <p className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase mb-3">
                Compliance Note
              </p>
              <p className="text-cetl-text-muted text-sm leading-relaxed">
                {SITE.complianceNote}
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="gradient-edge relative glass-panel rounded-2xl p-8 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-cetl-violet/10 blur-3xl pointer-events-none" />
            {submitted ? (
              <div className="relative flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <div className="w-12 h-12 rounded-full bg-cetl-gold/10 border border-cetl-gold/30 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-cetl-gold"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-cetl-text font-bold text-xl">Message Sent</h3>
                <p className="text-cetl-text-muted text-sm max-w-xs">
                  Your email client should have opened. We&apos;ll respond within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-name"
                      className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className="bg-cetl-dark border border-cetl-border rounded-lg text-cetl-text text-sm px-4 py-3 focus:outline-none focus:border-cetl-gold/60 focus:ring-2 focus:ring-cetl-gold/10 transition-all placeholder:text-cetl-text-muted/40"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-company"
                      className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase"
                    >
                      Organization *
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      required
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="bg-cetl-dark border border-cetl-border rounded-lg text-cetl-text text-sm px-4 py-3 focus:outline-none focus:border-cetl-gold/60 focus:ring-2 focus:ring-cetl-gold/10 transition-all placeholder:text-cetl-text-muted/40"
                      placeholder="Acme Corporation"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase"
                  >
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-cetl-dark border border-cetl-border rounded-lg text-cetl-text text-sm px-4 py-3 focus:outline-none focus:border-cetl-gold/60 focus:ring-2 focus:ring-cetl-gold/10 transition-all placeholder:text-cetl-text-muted/40"
                    placeholder="jane@company.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-interest"
                    className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="contact-interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="bg-cetl-dark border border-cetl-border text-cetl-text text-sm px-4 py-3 focus:outline-none focus:border-cetl-gold/60 transition-colors"
                  >
                    <option value="">Select a program area</option>
                    {CONTACT_INTEREST_OPTIONS.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-message"
                    className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="bg-cetl-dark border border-cetl-border rounded-lg text-cetl-text text-sm px-4 py-3 focus:outline-none focus:border-cetl-gold/60 focus:ring-2 focus:ring-cetl-gold/10 transition-all resize-none placeholder:text-cetl-text-muted/40"
                    placeholder="Tell us about your organization's current challenges and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full py-4 rounded-full bg-cetl-gold text-cetl-darker font-semibold tracking-wide overflow-hidden transition-transform duration-300 hover:scale-[1.02] mt-2"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cetl-gold-light to-cetl-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
