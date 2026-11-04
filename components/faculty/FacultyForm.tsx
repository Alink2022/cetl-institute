"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useLanguage } from "@/lib/i18n";
import { PrivacyBlock } from "@/components/legal/PrivacyBlock";
import {
  CERTIFICATIONS, COPY, DELIVERY, EDUCATION, EXPERIENCE_YEARS, EXPERTISE, FACULTY_ROLES, LANGUAGES, SALUTATIONS, TEACHING_EXPERIENCE, TOOLS,
} from "@/lib/faculty-onboarding";

const INITIAL = {
  role: "Lektor", salutation: "", title: "", first: "", last: "", company: "", position: "", email: "", phone: "", city: "", linkedin: "", website: "", languages: "", bio: "",
  education: "", school: "", field: "", certs: "", expertise: "", tools: "", years: "", teaching: "", topics: "", refs: "",
  delivery: "", availability: "", conflict: "", consent: false, hp: "",
};
type F = typeof INITIAL;
type Errors = Partial<Record<keyof F, string>>;

const REQUIRED: (keyof F)[] = ["first", "last", "company", "position", "email", "education"];
const EMAIL_RE = /^[A-Za-z0-9._%+'-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
const WEIGHTS: [keyof F, number][] = [
  ["first", 2], ["last", 2], ["company", 1], ["position", 1], ["email", 2], ["phone", 1], ["city", 1], ["linkedin", 1], ["bio", 2], ["languages", 1],
  ["education", 2], ["school", 1], ["field", 1], ["expertise", 3], ["tools", 2], ["certs", 1], ["years", 1], ["teaching", 1], ["topics", 1], ["refs", 1],
  ["availability", 1], ["delivery", 1], ["conflict", 0.5],
];

const tokens = (v: string) => v.split(/\s*[,;\n]\s*/).map((t) => t.trim()).filter(Boolean);
const has = (v: string, t: string) => tokens(v).some((x) => x.toLowerCase() === t.toLowerCase());
const toggle = (v: string, t: string) => (has(v, t) ? tokens(v).filter((x) => x.toLowerCase() !== t.toLowerCase()) : [...tokens(v), t]).join(", ");

function Chips({ items, value, onChange, labels }: { items: string[]; value: string; onChange: (v: string) => void; labels?: Record<string, string> }) {
  return (
    <div className="fc-chips">
      {items.map((it) => (
        <button type="button" key={it} className="fc-chip" aria-pressed={has(value, it)} onClick={() => onChange(toggle(value, it))}>{labels?.[it] ?? it}</button>
      ))}
    </div>
  );
}

function Field({ label, hint, required, error, children }: { label: string; hint?: string; required?: boolean; error?: string; children: ReactNode }) {
  return (
    <label className={`field${error ? " fc-invalid" : ""}`}>
      <span>{label}{required ? <em aria-hidden="true"> *</em> : null}</span>
      {children}
      {hint && !error && <small className="fc-hint">{hint}</small>}
      {error && <small className="fc-err" role="alert">{error}</small>}
    </label>
  );
}

function Accordion({ title, items, value, onChange, open, onToggle, selectedLabel }: {
  title: string; items: string[]; value: string; onChange: (v: string) => void; open: boolean; onToggle: () => void; selectedLabel: (n: number) => string;
}) {
  const n = items.filter((i) => has(value, i)).length;
  return (
    <div className={`fc-acc${open ? " open" : ""}`}>
      <button type="button" className="fc-acc-h" aria-expanded={open} onClick={onToggle}>
        <span>{title}</span>
        <span className="fc-acc-r">{n > 0 && <b className="fc-badge">{selectedLabel(n)}</b>}<i aria-hidden="true" /></span>
      </button>
      {open && <div className="fc-acc-b"><Chips items={items} value={value} onChange={onChange} /></div>}
    </div>
  );
}

function Section({ n, title, sub, children }: { n: number; title: string; sub: string; children: ReactNode }) {
  return (
    <section className="fc-sec" aria-labelledby={`fc-s${n}`}>
      <header className="fc-sec-h">
        <span className="fc-num" aria-hidden="true">{n}</span>
        <div>
          <h2 id={`fc-s${n}`}>{title}</h2>
          <p>{sub}</p>
        </div>
      </header>
      <div className="fc-panel">{children}</div>
    </section>
  );
}

export function FacultyForm() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const ui = c.ui;
  const [f, setF] = useState<F>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [tk, setTk] = useState("");
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [toolQuery, setToolQuery] = useState("");
  const [captcha, setCaptcha] = useState<"idle" | "verifying" | "verified" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const set = <K extends keyof F>(k: K) => (v: F[K]) => setF((p) => ({ ...p, [k]: v }));
  const text = (k: keyof F) => ({
    value: String(f[k]),
    onChange: (e: { target: { value: string } }) => { set(k)(e.target.value as never); if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined })); },
  });

  // Token holen (Zeitstempel, signiert vom Server)
  useEffect(() => {
    fetch("/api/faculty-onboarding", { cache: "no-store" }).then((r) => r.json()).then((d) => setTk(d.tk || "")).catch(() => setTk(""));
  }, []);

  // Spamschutz laden. Er löst sich im Hintergrund, während das Formular ausgefüllt wird.
  useEffect(() => {
    let alive = true;
    let detach: (() => void) | undefined;
    (async () => {
      await import("altcha");
      await import("altcha/i18n/de").catch(() => undefined);
      if (!alive) return;
      const w = formRef.current?.querySelector("altcha-widget");
      if (!w) return;
      const onState = (ev: Event) => {
        const st = (ev as CustomEvent<{ state: string }>).detail?.state;
        setCaptcha(st === "verified" ? "verified" : st === "verifying" ? "verifying" : st === "error" || st === "expired" ? "error" : "idle");
      };
      w.addEventListener("statechange", onState);
      detach = () => w.removeEventListener("statechange", onState);
    })();
    return () => { alive = false; detach?.(); };
  }, []);

  const pct = useMemo(() => {
    let got = 0, total = 0;
    for (const [k, w] of WEIGHTS) { total += w; if (String(f[k]).trim()) got += w; }
    return Math.round((got / total) * 100);
  }, [f]);

  const fullName = [f.title, f.first, f.last].map((x) => x.trim()).filter(Boolean).join(" ");
  const initials = ((f.first.trim()[0] ?? "") + (f.last.trim()[0] ?? "")).toUpperCase();
  const roleLabel = FACULTY_ROLES.find((r) => r.value === f.role)?.label[lang].split(" (")[0] ?? "";
  const subLine = [f.position.trim(), f.company.trim()].filter(Boolean).join(" · ");

  function validate(): Errors {
    const e: Errors = {};
    for (const k of REQUIRED) if (!String(f[k]).trim()) e[k] = c.required;
    if (f.email.trim() && !EMAIL_RE.test(f.email.trim())) e.email = c.errors.email;
    return e;
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      setError(c.errors.fields);
      requestAnimationFrame(() => (formRef.current?.querySelector(".fc-invalid") as HTMLElement | null)?.scrollIntoView({ behavior: "smooth", block: "center" }));
      return;
    }
    if (!f.consent) { setError(c.errors.consent); return; }
    const altcha = String((formRef.current?.querySelector('input[name="altcha"]') as HTMLInputElement | null)?.value || "");
    if (!altcha) { setError(c.errors.captcha); return; }
    setStatus("sending");
    try {
      const res = await fetch("/api/faculty-onboarding", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...f, lang, tk, altcha }) });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    } catch {
      setStatus("error");
      setError(c.errors.send);
    }
  }

  const toolMatches = (items: string[]) => items.filter((i) => !toolQuery.trim() || i.toLowerCase().includes(toolQuery.trim().toLowerCase()));
  const deliveryLabels = Object.fromEntries(DELIVERY.map((d) => [d.value, d.label[lang]]));

  if (status === "sent") {
    return (
      <div className="fc-card fc-done" role="status">
        <svg className="fc-check" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="24" /><path d="M15 27l8 8 15-17" /></svg>
        <h2>{c.thanks.title}{f.first.trim() ? `, ${f.first.trim()}` : ""}</h2>
        <p className="lead">{c.thanks.text}</p>
        <ol className="fc-next">
          {[ui.next1, ui.next2, ui.next3].map((t, i) => (<li key={i}><b>{i + 1}</b><span>{t}</span></li>))}
        </ol>
        <p><Link className="btn btn-ghost" href="/impressum">{ui.imprint}</Link></p>
      </div>
    );
  }

  return (
    <form className="fc-form" ref={formRef} onSubmit={submit} noValidate>
      <div className="fc-mini" aria-hidden="true">
        <span>{ui.complete}</span>
        <div className="fc-bar"><i style={{ width: `${pct}%` }} /></div>
        <b>{pct} %</b>
      </div>

      <div className="fc-layout">
        <div className="fc-card">
          <Section n={1} title={c.steps[0]} sub={c.stepSub[0]}>
            <div className="fc-roles" role="radiogroup" aria-label={c.s1.role}>
              <span className="fc-lab">{c.s1.role}</span>
              {FACULTY_ROLES.map((r) => (
                <button type="button" role="radio" aria-checked={f.role === r.value} key={r.value} className="fc-chip lg" aria-pressed={f.role === r.value} onClick={() => set("role")(r.value)}>{r.label[lang]}</button>
              ))}
            </div>
            <div className="fc-grid">
              <Field label={c.s1.salutation}><select {...text("salutation")}>{SALUTATIONS.map((s) => <option key={s.value} value={s.value}>{s.label[lang]}</option>)}</select></Field>
              <Field label={c.s1.title}><input type="text" placeholder="Dr., DI, Mag." {...text("title")} /></Field>
              <Field label={c.s1.first} required error={errors.first}><input type="text" autoComplete="given-name" {...text("first")} /></Field>
              <Field label={c.s1.last} required error={errors.last}><input type="text" autoComplete="family-name" {...text("last")} /></Field>
              <Field label={c.s1.company} required error={errors.company}><input type="text" autoComplete="organization" {...text("company")} /></Field>
              <Field label={c.s1.position} required error={errors.position}><input type="text" autoComplete="organization-title" {...text("position")} /></Field>
              <Field label={c.s1.email} required error={errors.email}><input type="email" autoComplete="email" {...text("email")} /></Field>
              <Field label={c.s1.phone}><input type="tel" autoComplete="tel" {...text("phone")} /></Field>
              <Field label={c.s1.city}><input type="text" {...text("city")} /></Field>
              <Field label={c.s1.linkedin}><input type="url" placeholder="https://www.linkedin.com/in/…" {...text("linkedin")} /></Field>
            </div>
            <Field label={c.s1.website}><input type="url" placeholder="https://" {...text("website")} /></Field>
            <div className="field">
              <span>{c.s1.languages}</span>
              <Chips items={LANGUAGES} value={f.languages} onChange={set("languages")} />
              <input type="text" className="fc-more" aria-label={c.s1.languagesMore} placeholder={c.s1.languagesMore} value={f.languages} onChange={(e) => set("languages")(e.target.value)} />
            </div>
            <Field label={c.s1.bio} hint={c.s1.bioHint}><textarea rows={4} maxLength={900} {...text("bio")} /></Field>
          </Section>

          <Section n={2} title={c.steps[1]} sub={c.stepSub[1]}>
            <div className="fc-grid">
              <Field label={c.s2.education} required error={errors.education}>
                <select {...text("education")}><option value="">{c.choose}</option>{EDUCATION.map((e) => <option key={e.value} value={e.value}>{e.label[lang]}</option>)}</select>
              </Field>
              <Field label={c.s2.school}><input type="text" {...text("school")} /></Field>
              <Field label={c.s2.field}><input type="text" {...text("field")} /></Field>
              <Field label={c.s2.years}>
                <select {...text("years")}><option value="">{c.choose}</option>{EXPERIENCE_YEARS.map((y) => <option key={y}>{y}</option>)}</select>
              </Field>
            </div>
            <Field label={c.s2.teaching}>
              <select {...text("teaching")}><option value="">{c.choose}</option>{TEACHING_EXPERIENCE.map((t) => <option key={t.value} value={t.value}>{t.label[lang]}</option>)}</select>
            </Field>

            <div className="field fc-block">
              <span>{c.s2.expertise}</span>
              <small className="fc-hint">{c.s2.expertiseHint}</small>
              {EXPERTISE.map((g, i) => (
                <Accordion key={g.title.en} title={g.title[lang]} items={g.items} value={f.expertise} onChange={set("expertise")} open={!!open[`e${i}`]} onToggle={() => setOpen((o) => ({ ...o, [`e${i}`]: !o[`e${i}`] }))} selectedLabel={ui.selected} />
              ))}
              <textarea rows={3} aria-label={c.s2.expertise} value={f.expertise} onChange={(e) => set("expertise")(e.target.value)} />
            </div>

            <div className="field fc-block">
              <span>{c.s2.tools}</span>
              <small className="fc-hint">{c.s2.toolsHint}</small>
              <input type="search" className="fc-more" placeholder={ui.search} aria-label={ui.search} value={toolQuery} onChange={(e) => setToolQuery(e.target.value)} />
              {TOOLS.map((g, i) => {
                const items = toolMatches(g.items);
                if (!items.length) return null;
                return <Accordion key={g.title.en} title={g.title[lang]} items={items} value={f.tools} onChange={set("tools")} open={!!toolQuery.trim() || !!open[`t${i}`]} onToggle={() => setOpen((o) => ({ ...o, [`t${i}`]: !o[`t${i}`] }))} selectedLabel={ui.selected} />;
              })}
              <textarea rows={3} aria-label={c.s2.tools} value={f.tools} onChange={(e) => set("tools")(e.target.value)} />
            </div>

            <div className="field fc-block">
              <span>{c.s2.certs}</span>
              <small className="fc-hint">{c.s2.certsHint}</small>
              <Chips items={CERTIFICATIONS} value={f.certs} onChange={set("certs")} />
              <textarea rows={2} aria-label={c.s2.certs} value={f.certs} onChange={(e) => set("certs")(e.target.value)} />
            </div>

            <Field label={c.s2.topics}><textarea rows={3} {...text("topics")} /></Field>
            <Field label={c.s2.refs}><textarea rows={3} {...text("refs")} /></Field>
          </Section>

          <Section n={3} title={c.steps[2]} sub={c.stepSub[2]}>
            <div className="field">
              <span>{c.s3.delivery}</span>
              <Chips items={DELIVERY.map((d) => d.value)} labels={deliveryLabels} value={f.delivery} onChange={set("delivery")} />
            </div>
            <Field label={c.s3.availability} hint={c.s3.availabilityHint}><textarea rows={3} {...text("availability")} /></Field>
            <Field label={c.s3.conflict} hint={c.s3.conflictHint}><textarea rows={3} {...text("conflict")} /></Field>
          </Section>

          <div className="fc-final">
            <div className="fc-consent">
              <PrivacyBlock kind="faculty" lang={lang} title={c.privacyTitle} />
              <label className="fc-check">
                <input type="checkbox" checked={f.consent} onChange={(e) => set("consent")(e.target.checked)} />
                <span>{c.consent}</span>
              </label>
              <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="fc-hp" value={f.hp} onChange={(e) => set("hp")(e.target.value)} />
              <div className="fc-captcha" data-state={captcha}>
                <altcha-widget challenge="/api/altcha" configuration={JSON.stringify({ hideLogo: true, hideFooter: true })} auto="onload" language={lang === "de" ? "de" : "en"} name="altcha" type="checkbox"></altcha-widget>
              </div>
            </div>
            {error && <p role="alert" className="fc-error">{error}</p>}
            <button type="submit" className="btn btn-primary fc-submit" disabled={status === "sending"}>{status === "sending" ? c.sending : c.submit}</button>
          </div>
        </div>

        <aside className="fc-aside" aria-label={ui.previewTitle}>
          <div className="fc-pv">
            <p className="fc-pv-t">{ui.previewTitle}</p>
            <div className="fc-pv-head">
              <span className="fc-av">{initials || "?"}</span>
              <div>
                <h3>{fullName || ui.previewName}</h3>
                <p>{subLine || ui.previewRole}</p>
              </div>
            </div>
            <p className="fc-pv-role">{roleLabel}</p>
            <div className="fc-pv-sec"><b>{ui.expertise}</b>
              <div className="fc-pv-chips">{tokens(f.expertise).length ? <>{tokens(f.expertise).slice(0, 6).map((t) => <span key={t}>{t}</span>)}{tokens(f.expertise).length > 6 && <span>+{tokens(f.expertise).length - 6}</span>}</> : <em>{ui.empty}</em>}</div>
            </div>
            <div className="fc-pv-sec"><b>{ui.tools}</b>
              <div className="fc-pv-chips">{tokens(f.tools).length ? <>{tokens(f.tools).slice(0, 6).map((t) => <span key={t}>{t}</span>)}{tokens(f.tools).length > 6 && <span>+{tokens(f.tools).length - 6}</span>}</> : <em>{ui.empty}</em>}</div>
            </div>
            <div className="fc-pv-sec"><b>{ui.languages}</b>
              <div className="fc-pv-chips">{tokens(f.languages).length ? tokens(f.languages).slice(0, 6).map((t) => <span key={t}>{t}</span>) : <em>{ui.empty}</em>}</div>
            </div>
            <div className="fc-meter">
              <div><span>{ui.complete}</span><b>{pct} %</b></div>
              <div className="fc-bar"><i style={{ width: `${pct}%` }} /></div>
            </div>
          </div>
        </aside>
      </div>
    </form>
  );
}
