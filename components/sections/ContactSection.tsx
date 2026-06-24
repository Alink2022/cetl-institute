"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`CETL Inquiry: ${form.interest || "General"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nInterest: ${form.interest}\n\n${form.message}`
    );
    window.location.href = `mailto:office@cetl-institute.eu?subject=${subject}&body=${body}`;
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
              {[
                {
                  label: "Email",
                  value: "office@cetl-institute.eu",
                  href: "mailto:office@cetl-institute.eu",
                },
                {
                  label: "Location",
                  value: "Vienna, Austria (Central Europe)",
                  href: null,
                },
                {
                  label: "Academic Partnership",
                  value: "TU Wien, Academic Director",
                  href: null,
                },
              ].map((item) => (
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

            <div className="bg-cetl-surface border border-cetl-border p-6">
              <p className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase mb-3">
                Compliance Note
              </p>
              <p className="text-cetl-text-muted text-sm leading-relaxed">
                All CETL activities are strictly limited to non-insurance sectors, explicitly
                excluding insurance compliance, regulatory topics, and insurance-specific engagements.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-cetl-surface border border-cetl-border p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <div className="w-12 h-12 bg-cetl-gold/10 border border-cetl-gold/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cetl-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-cetl-text font-bold text-xl">Message Sent</h3>
                <p className="text-cetl-text-muted text-sm max-w-xs">
                  Your email client should have opened. We&apos;ll respond within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className="bg-cetl-dark border border-cetl-border text-cetl-text text-sm px-4 py-3 focus:outline-none focus:border-cetl-gold/60 transition-colors placeholder:text-cetl-text-muted/40"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-company" className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase">
                      Organization *
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      required
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="bg-cetl-dark border border-cetl-border text-cetl-text text-sm px-4 py-3 focus:outline-none focus:border-cetl-gold/60 transition-colors placeholder:text-cetl-text-muted/40"
                      placeholder="Acme Corporation"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-cetl-dark border border-cetl-border text-cetl-text text-sm px-4 py-3 focus:outline-none focus:border-cetl-gold/60 transition-colors placeholder:text-cetl-text-muted/40"
                    placeholder="jane@company.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-interest" className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase">
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
                    <option>Executive Education / AI Literacy</option>
                    <option>ELaaS: Executional Learning</option>
                    <option>Strategic Advisory</option>
                    <option>Technical Assessment</option>
                    <option>Forward Deployed Engineer</option>
                    <option>Europe Tech Hackathon</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="bg-cetl-dark border border-cetl-border text-cetl-text text-sm px-4 py-3 focus:outline-none focus:border-cetl-gold/60 transition-colors resize-none placeholder:text-cetl-text-muted/40"
                    placeholder="Tell us about your organization's current challenges and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-cetl-gold text-cetl-darker font-semibold tracking-wide hover:bg-cetl-gold-light transition-colors duration-200 mt-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
