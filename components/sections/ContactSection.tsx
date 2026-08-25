"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function ContactSection() {
  const { t } = useLanguage();
  const contact = t.UI.contact;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", interest: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${contact.mailSubjectPrefix}: ${form.interest || contact.mailGeneral}`);
    const body = encodeURIComponent(
      `${contact.mailFieldName}: ${form.name}\n${contact.mailFieldEmail}: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${t.SITE.formEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-14 lg:py-24 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <Container className="relative">
        <div className="max-w-5xl mx-auto mb-12 text-center">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{contact.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-tight mb-5">
            {contact.title}
          </h2>
          <p className="text-cetl-text-muted text-lg leading-relaxed">{contact.body}</p>
        </div>

        <div className="max-w-xl mx-auto bg-white border border-cetl-border rounded-2xl p-8 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.08)]">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-cetl-gold/10 border border-cetl-gold/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-cetl-gold-deep" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display text-cetl-text font-bold text-xl">{contact.successTitle}</h3>
              <p className="text-cetl-text-muted text-sm max-w-xs">{contact.successText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase">
                    {contact.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-white border border-cetl-border rounded-lg text-cetl-text text-sm px-4 py-3 focus:outline-none focus:border-cetl-gold focus:ring-2 focus:ring-cetl-gold/30 transition-all placeholder:text-cetl-text-muted/50"
                    placeholder={contact.namePlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase">
                    {contact.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-white border border-cetl-border rounded-lg text-cetl-text text-sm px-4 py-3 focus:outline-none focus:border-cetl-gold focus:ring-2 focus:ring-cetl-gold/30 transition-all placeholder:text-cetl-text-muted/50"
                    placeholder={contact.emailPlaceholder}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-interest" className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase">
                  {contact.interestLabel}
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  required
                  value={form.interest}
                  onChange={handleChange}
                  className="bg-white border border-cetl-border rounded-lg text-cetl-text text-sm px-4 py-3 focus:outline-none focus:border-cetl-gold focus:ring-2 focus:ring-cetl-gold/30 transition-colors"
                >
                  <option value="">{contact.interestPlaceholder}</option>
                  {t.CONTACT_INTEREST_OPTIONS.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase">
                  {contact.contextLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="bg-white border border-cetl-border rounded-lg text-cetl-text text-sm px-4 py-3 focus:outline-none focus:border-cetl-gold focus:ring-2 focus:ring-cetl-gold/30 transition-all resize-none placeholder:text-cetl-text-muted/50"
                  placeholder={contact.contextPlaceholder}
                />
              </div>

              <button
                type="submit"
                className="group relative w-full py-4 rounded-sm bg-cetl-navy-700 text-white font-semibold tracking-wide overflow-hidden transition-transform duration-300 hover:scale-[1.02] mt-2"
              >
                <span className="relative z-10">{contact.submit}</span>
                <span className="absolute inset-0 bg-cetl-navy-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
