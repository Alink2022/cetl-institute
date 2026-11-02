"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { useLanguage } from "@/lib/i18n";
import {
  BILLING, BILLING_VIA, CERTIFICATIONS, COPY, DELIVERY, EDUCATION, EXPERIENCE_YEARS, EXPERTISE, FACULTY_ROLES, LANGUAGES, SALUTATIONS, SIDE_JOB, TEACHING_EXPERIENCE, TOOLS,
} from "@/lib/faculty-onboarding";

const tokens = (v: string) => v.split(/\s*[,;\n]\s*/).map((t) => t.trim()).filter(Boolean);
const has = (v: string, t: string) => tokens(v).some((x) => x.toLowerCase() === t.toLowerCase());
const toggle = (v: string, t: string) => (has(v, t) ? tokens(v).filter((x) => x.toLowerCase() !== t.toLowerCase()) : [...tokens(v), t]).join(", ");

function Chips({ items, value, onChange }: { items: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="fc-chips">
      {items.map((it) => (
        <button type="button" key={it} className="fc-chip" aria-pressed={has(value, it)} onClick={() => onChange(toggle(value, it))}>{it}</button>
      ))}
    </div>
  );
}

function Section({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section className="fc-section card">
      <div className="fc-head"><span className="fc-n">{n}</span><h2>{title}</h2></div>
      {children}
    </section>
  );
}

function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="field">
      <span>{label}{required ? " *" : ""}</span>
      {children}
      {hint && <small className="fc-hint">{hint}</small>}
    </label>
  );
}

export function FacultyForm() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const [f, setF] = useState({
    role: "Lektor", salutation: "", title: "", first: "", last: "", company: "", position: "", email: "", phone: "", city: "", linkedin: "", website: "", birth: "", languages: "", bio: "",
    education: "", school: "", field: "", certs: "", expertise: "", tools: "", years: "", teaching: "", topics: "", refs: "",
    billing: "", rate: "", via: "", uid: "", sideJob: "", delivery: "", availability: "", conflict: "", consent: false, hp: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const set = (k: keyof typeof f) => (v: string | boolean) => setF((p) => ({ ...p, [k]: v }));
  const text = (k: keyof typeof f) => ({ value: String(f[k]), onChange: (e: { target: { value: string } }) => set(k)(e.target.value) });
  const unit = useMemo(() => {
    const m: Record<string, [string, string]> = { Stundensatz: ["pro Stunde", "per hour"], Tagessatz: ["pro Tag", "per day"], Halbtagessatz: ["pro Halbtag", "per half day"], Pauschalhonorar: ["pauschal pro Veranstaltung", "flat per event"] };
    const u = m[f.billing]; return u ? u[lang === "de" ? 0 : 1] : "";
  }, [f.billing, lang]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!f.first.trim() || !f.last.trim() || !f.company.trim() || !f.position.trim() || !f.email.trim() || !f.education || !f.billing) { setError(c.errors.fields); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) { setError(c.errors.email); return; }
    if (!f.consent) { setError(c.errors.consent); return; }
    setStatus("sending");
    try {
      const res = await fetch("/api/faculty-onboarding", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...f, lang }) });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
      setError(c.errors.send);
    }
  }

  if (status === "sent") {
    return (
      <div className="card fc-thanks" role="status">
        <h2>{c.thanks.title}</h2>
        <p>{c.thanks.text}</p>
      </div>
    );
  }

  return (
    <form className="fc-form" onSubmit={submit} noValidate>
      <nav className="fc-steps" aria-label="Schritte">
        {c.steps.map((s, i) => <a key={s} href={`#fc-${i + 1}`}><b>{i + 1}</b> {s}</a>)}
      </nav>

      <div id="fc-1"><Section n={1} title={c.steps[0]}>
        <div className="fc-roles" role="radiogroup" aria-label={c.s1.role}>
          <span className="fc-lab">{c.s1.role}</span>
          {FACULTY_ROLES.map((r) => (
            <button type="button" role="radio" aria-checked={f.role === r.value} key={r.value} className="fc-chip lg" aria-pressed={f.role === r.value} onClick={() => set("role")(r.value)}>{r.label[lang]}</button>
          ))}
        </div>
        <div className="fc-grid">
          <Field label={c.s1.salutation}><select {...text("salutation")}>{SALUTATIONS.map((s) => <option key={s.value} value={s.value}>{s.label[lang]}</option>)}</select></Field>
          <Field label={c.s1.title}><input type="text" placeholder="Dr., DI, Mag." {...text("title")} /></Field>
          <Field label={c.s1.first} required><input type="text" autoComplete="given-name" {...text("first")} /></Field>
          <Field label={c.s1.last} required><input type="text" autoComplete="family-name" {...text("last")} /></Field>
          <Field label={c.s1.company} required><input type="text" autoComplete="organization" {...text("company")} /></Field>
          <Field label={c.s1.position} required><input type="text" autoComplete="organization-title" {...text("position")} /></Field>
          <Field label={c.s1.email} required><input type="email" autoComplete="email" {...text("email")} /></Field>
          <Field label={c.s1.phone}><input type="tel" autoComplete="tel" {...text("phone")} /></Field>
          <Field label={c.s1.city}><input type="text" {...text("city")} /></Field>
          <Field label={c.s1.birth} hint={c.s1.birthHint}><input type="date" {...text("birth")} /></Field>
          <Field label={c.s1.linkedin}><input type="url" placeholder="https://www.linkedin.com/in/…" {...text("linkedin")} /></Field>
          <Field label={c.s1.website}><input type="url" placeholder="https://" {...text("website")} /></Field>
        </div>
        <div className="field">
          <span>{c.s1.languages}</span>
          <Chips items={LANGUAGES} value={f.languages} onChange={set("languages")} />
          <input type="text" className="fc-more" aria-label={c.s1.languagesMore} placeholder={c.s1.languagesMore} value={f.languages} onChange={(e) => set("languages")(e.target.value)} />
        </div>
        <Field label={c.s1.bio} hint={c.s1.bioHint}><textarea rows={4} maxLength={900} {...text("bio")} /></Field>
      </Section></div>

      <div id="fc-2"><Section n={2} title={c.steps[1]}>
        <div className="fc-grid">
          <Field label={c.s2.education} required>
            <select {...text("education")}><option value="">{c.choose}</option>{EDUCATION.map((e) => <option key={e.value} value={e.value}>{e.label[lang]}</option>)}</select>
          </Field>
          <Field label={c.s2.school}><input type="text" {...text("school")} /></Field>
          <Field label={c.s2.field}><input type="text" {...text("field")} /></Field>
          <Field label={c.s2.years}>
            <select {...text("years")}><option value="">{c.choose}</option>{EXPERIENCE_YEARS.map((y) => <option key={y}>{y}</option>)}</select>
          </Field>
          <Field label={c.s2.teaching}>
            <select {...text("teaching")}><option value="">{c.choose}</option>{TEACHING_EXPERIENCE.map((t) => <option key={t.value} value={t.value}>{t.label[lang]}</option>)}</select>
          </Field>
        </div>

        <div className="field">
          <span>{c.s2.expertise}</span>
          <small className="fc-hint">{c.s2.expertiseHint}</small>
          {EXPERTISE.map((g) => (
            <div className="fc-group" key={g.title.en}><b>{g.title[lang]}</b><Chips items={g.items} value={f.expertise} onChange={set("expertise")} /></div>
          ))}
          <textarea rows={3} aria-label={c.s2.expertise} value={f.expertise} onChange={(e) => set("expertise")(e.target.value)} />
        </div>

        <div className="field">
          <span>{c.s2.tools}</span>
          <small className="fc-hint">{c.s2.toolsHint}</small>
          {TOOLS.map((g) => (
            <div className="fc-group" key={g.title.en}><b>{g.title[lang]}</b><Chips items={g.items} value={f.tools} onChange={set("tools")} /></div>
          ))}
          <textarea rows={3} aria-label={c.s2.tools} value={f.tools} onChange={(e) => set("tools")(e.target.value)} />
        </div>

        <div className="field">
          <span>{c.s2.certs}</span>
          <small className="fc-hint">{c.s2.certsHint}</small>
          <Chips items={CERTIFICATIONS} value={f.certs} onChange={set("certs")} />
          <textarea rows={2} aria-label={c.s2.certs} value={f.certs} onChange={(e) => set("certs")(e.target.value)} />
        </div>

        <Field label={c.s2.topics}><textarea rows={3} {...text("topics")} /></Field>
        <Field label={c.s2.refs}><textarea rows={3} {...text("refs")} /></Field>
      </Section></div>

      <div id="fc-3"><Section n={3} title={c.steps[2]}>
        <div className="fc-grid">
          <Field label={c.s3.billing} required>
            <select {...text("billing")}><option value="">{c.choose}</option>{BILLING.map((b) => <option key={b.value} value={b.value}>{b.label[lang]}</option>)}</select>
          </Field>
          <Field label={`${c.s3.rate}${unit ? ` (${unit})` : ""}`} hint={c.s3.rateHint}><input type="number" min={0} step={5} inputMode="numeric" {...text("rate")} /></Field>
          <Field label={c.s3.via}>
            <select {...text("via")}><option value="">{c.choose}</option>{BILLING_VIA.map((b) => <option key={b.value} value={b.value}>{b.label[lang]}</option>)}</select>
          </Field>
          <Field label={c.s3.uid}><input type="text" placeholder="ATU…" {...text("uid")} /></Field>
          <Field label={c.s3.sideJob}>
            <select {...text("sideJob")}><option value="">{c.choose}</option>{SIDE_JOB.map((b) => <option key={b.value} value={b.value}>{b.label[lang]}</option>)}</select>
          </Field>
        </div>
        <div className="field">
          <span>{c.s3.delivery}</span>
          <Chips items={DELIVERY.map((d) => d.value)} value={f.delivery} onChange={set("delivery")} />
        </div>
        <Field label={c.s3.availability} hint={c.s3.availabilityHint}><textarea rows={3} {...text("availability")} /></Field>
        <Field label={c.s3.conflict} hint={c.s3.conflictHint}><textarea rows={3} {...text("conflict")} /></Field>
      </Section></div>

      <div className="card fc-consent">
        <h3>{c.privacyTitle}</h3>
        {c.privacy.map((p) => <p key={p}>{p}</p>)}
        <label className="fc-check">
          <input type="checkbox" checked={f.consent} onChange={(e) => set("consent")(e.target.checked)} />
          <span>{c.consent}</span>
        </label>
        {/* Honeypot gegen Bots: für Menschen unsichtbar */}
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="fc-hp" value={f.hp} onChange={(e) => set("hp")(e.target.value)} />
        {error && <p role="alert" className="fc-error">{error}</p>}
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? c.sending : c.submit}</button>
      </div>
    </form>
  );
}
