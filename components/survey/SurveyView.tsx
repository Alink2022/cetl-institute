"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { GEO, SURVEY, type L, type Q } from "@/lib/survey";
import { COPY } from "@/lib/survey-copy";
import { PrivacyBlock } from "@/components/legal/PrivacyBlock";
import { SurveyResults } from "./SurveyResults";

type Step = { q: Q; part: L | null; n: number };
const STEPS: Step[] = [
  { q: SURVEY.player, part: null },
  ...SURVEY.levels.flatMap((lv) => lv.questions.map((q) => ({ q, part: lv.title }))),
  { q: SURVEY.boss.question, part: SURVEY.boss.title },
].map((s, i) => ({ ...s, n: i + 1 }));
const FINAL = STEPS.length;
const TOTAL = STEPS.length + 1;
const STORE = "cetl-pulse-country";
const EMAIL_RE = /^[A-Za-z0-9._%+'-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
const CODES = new Set(GEO.codes);

type Country = { code: string; src: "geo" | "tz" | "locale" | "manual" | "" };

function guessCountry(geo: string | null): Country {
  try {
    const saved = localStorage.getItem(STORE);
    if (saved && CODES.has(saved)) return { code: saved, src: "manual" };
  } catch { /* Speicher gesperrt */ }
  if (geo && CODES.has(geo)) return { code: geo, src: "geo" };
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    let c = GEO.tz[tz];
    if (!c) for (const [p, v] of Object.entries(GEO.tzPrefix)) if (tz.startsWith(p)) c = v;
    if (c && CODES.has(c)) return { code: c, src: "tz" };
  } catch { /* ohne Zeitzone */ }
  const region = (navigator.language || "").split("-")[1]?.toUpperCase();
  if (region && CODES.has(region)) return { code: region, src: "locale" };
  return { code: "", src: "" };
}

export function SurveyView() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const [view, setView] = useState<"survey" | "results">("survey");

  // Wer von LinkedIn kommt (oder ?v=8bit), bekommt die spielerische 8-Bit-Version. Mit ?v=classic bleibt man hier.
  useEffect(() => {
    const q = new URLSearchParams(location.search);
    if (q.get("v") === "classic" || location.hash) return;
    const fromLinkedIn = /linkedin\.com|lnkd\.in/i.test(document.referrer) || (q.get("utm_source") || "").toLowerCase().includes("linkedin") || q.get("v") === "8bit";
    if (fromLinkedIn) location.replace(`/pulse?lang=${lang}`);
  }, [lang]);

  useEffect(() => {
    const sync = () => setView(location.hash === "#results" ? "results" : "survey");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const show = (v: "survey" | "results") => {
    history.replaceState(null, "", v === "results" ? "#results" : location.pathname);
    setView(v);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="tt-hero fc-hero">
        <div className="wrap">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>{view === "results" ? `${c.results.title}: ${c.title}` : c.title}</h1>
          <p className="sub">{c.lead}</p>
          <div className="tt-stats">
            {c.heroStats.map((s) => (
              <div key={s.l}>
                <div className="v">{s.v}</div>
                <p className="l">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="fc-wrap">
        <div className="wrap">
          {view === "results" ? <SurveyResults onBack={() => show("survey")} /> : <SurveyFlow />}
        </div>
      </section>
    </>
  );
}

function SurveyFlow() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [texts, setTexts] = useState({ elephant: "", unasked: "" });
  const [card, setCard] = useState({ sector: "", size: "" });
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [agree, setAgree] = useState(false);
  const [hp, setHp] = useState("");
  const [tk, setTk] = useState("");
  const [geo, setGeo] = useState<string | null>(null);
  const [country, setCountry] = useState<Country>({ code: "", src: "" });
  const [pick, setPick] = useState(false);
  const [tipOpen, setTipOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const [captcha, setCaptcha] = useState<"idle" | "verifying" | "verified" | "error">("idle");
  const started = useRef<number | null>(null);
  const root = useRef<HTMLDivElement>(null);

  const dn = useMemo(() => {
    try { return new Intl.DisplayNames([lang], { type: "region" }); } catch { return null; }
  }, [lang]);
  const cname = useCallback((code: string) => { try { return dn?.of(code) || GEO.names[code] || code; } catch { return GEO.names[code] || code; } }, [dn]);
  const countryList = useMemo(() => GEO.codes.map((k) => [k, cname(k)] as const).sort((a, b) => a[1].localeCompare(b[1], lang)), [cname, lang]);

  // Token und Netzwerk-Land holen, dann das Land bestimmen
  useEffect(() => {
    fetch("/api/survey", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => { setTk(d.tk || ""); setGeo(d.geo || null); setCountry(guessCountry(d.geo || null)); })
      .catch(() => { setTk(""); setCountry(guessCountry(null)); });
  }, []);

  // Spamschutz im letzten Schritt laden, er löst sich selbst
  useEffect(() => {
    if (step !== FINAL) return;
    let alive = true;
    let detach: (() => void) | undefined;
    (async () => {
      await import("altcha");
      await import("altcha/i18n/de").catch(() => undefined);
      if (!alive) return;
      const w = root.current?.querySelector("altcha-widget");
      if (!w) return;
      const onState = (ev: Event) => {
        const st = (ev as CustomEvent<{ state: string }>).detail?.state;
        setCaptcha(st === "verified" ? "verified" : st === "verifying" ? "verifying" : st === "error" || st === "expired" ? "error" : "idle");
      };
      w.addEventListener("statechange", onState);
      detach = () => w.removeEventListener("statechange", onState);
    })();
    return () => { alive = false; detach?.(); };
  }, [step]);

  const go = useCallback((to: number) => {
    setStep(Math.max(0, Math.min(FINAL, to)));
    setTipOpen(false);
    setError("");
    requestAnimationFrame(() => root.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, []);

  const cur = step < FINAL ? STEPS[step] : null;
  const selected = cur ? answers[cur.q.id] ?? [] : [];

  const choose = useCallback((q: Q, id: string, at: number) => {
    started.current ??= Date.now();
    if (q.type === "single") {
      setAnswers((a) => ({ ...a, [q.id]: [id] }));
      setTimeout(() => setStep((s) => { if (s !== at) return s; setTipOpen(false); setError(""); requestAnimationFrame(() => root.current?.scrollIntoView({ behavior: "smooth", block: "start" })); return at + 1; }), 260);
      return;
    }
    setAnswers((a) => {
      const now = a[q.id] ?? [];
      const opt = q.options.find((o) => o.id === id);
      if (now.includes(id)) return { ...a, [q.id]: now.filter((x) => x !== id) };
      if (opt?.exclusive) return { ...a, [q.id]: [id] };
      const base = now.filter((x) => !q.options.find((o) => o.id === x)?.exclusive);
      if (q.max && base.length >= q.max) return a;
      return { ...a, [q.id]: [...base, id] };
    });
  }, []);

  // Schnellwahl per Zifferntaste
  useEffect(() => {
    if (!cur || status === "sent" || !country.code || pick) return;
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const i = Number(e.key) - 1;
      if (i >= 0 && i < cur.q.options.length) { e.preventDefault(); choose(cur.q, cur.q.options[i].id, step); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cur, step, status, country.code, pick, choose]);

  function setManualCountry(code: string) {
    if (!code) return;
    setCountry({ code, src: "manual" });
    setPick(false);
    try { localStorage.setItem(STORE, code); } catch { /* ignorieren */ }
  }

  async function submit() {
    setError("");
    if (!agree) { setError(c.errors.agree); return; }
    if (email.trim() && !EMAIL_RE.test(email.trim())) { setError(c.errors.email); return; }
    if (email.trim() && !consent) { setError(c.errors.consent); return; }
    const altcha = String((root.current?.querySelector('input[name="altcha"]') as HTMLInputElement | null)?.value || "");
    if (!altcha) { setError(c.errors.captcha); return; }
    setStatus("sending");
    const answersOut: Record<string, string | string[]> = {};
    for (const s of STEPS) { const v = answers[s.q.id]; if (v?.length) answersOut[s.q.id] = s.q.type === "multi" ? v : v[0]; }
    if (card.sector) answersOut[SURVEY.card.sector.id] = card.sector;
    if (card.size) answersOut[SURVEY.card.size.id] = card.size;
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          survey: SURVEY.id, version: SURVEY.version, variant: "classic", lang, country: country.code, country_src: country.src,
          answers: answersOut, texts, email: email.trim(), consent, agree, hp, tk, altcha,
          duration_ms: started.current ? Date.now() - started.current : null,
        }),
      });
      if (!res.ok) { setStatus("idle"); setError(res.status === 429 ? c.errors.rate : c.errors.send); return; }
      setStatus("sent");
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    } catch {
      setStatus("idle");
      setError(c.errors.send);
    }
  }

  if (status === "sent") {
    return (
      <div className="fc-card fc-done sv-done" role="status">
        <svg className="fc-check" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="24" /><path d="M15 27l8 8 15-17" /></svg>
        <h2>{c.thanksTitle}</h2>
        <p className="lead">{c.thanksText}</p>
      </div>
    );
  }

  const countryNote = !country.code ? c.countryUnknown : country.code === GEO.home ? c.countryAT : c.countryOther(cname(country.code));
  const how = country.src === "geo" ? c.countryHowGeo : country.src === "tz" || country.src === "locale" ? c.countryHow : "";
  const pct = Math.round((step / TOTAL) * 100);
  const needCountry = !country.code || pick;

  return (
    <div className="fc-card sv-card" ref={root}>
      <div className="sv-top">
        <div className="sv-prog" role="progressbar" aria-valuemin={0} aria-valuemax={TOTAL} aria-valuenow={step + 1}><i style={{ width: `${Math.max(pct, 4)}%` }} /></div>
        <div className="sv-meta">
          <span>{cur ? c.questionOf(cur.n, STEPS.length) : c.finalTitle}</span>
          <a className="fc-link" href="/pulse">{c.playful}</a>
          {country.code && !pick && (
            <span className="sv-region">{c.region}: <b>{cname(country.code)}</b> <button type="button" className="fc-link" onClick={() => setPick(true)}>{c.change}</button></span>
          )}
        </div>
      </div>

      {needCountry ? (
        <div className="sv-body" key="country">
          <p className="eyebrow">{c.region}</p>
          <h2 className="sv-q">{c.chooseCountry}</h2>
          <p className="sv-note">{countryNote}</p>
          <label className="field">
            <span>{c.chooseCountry}</span>
            <select value={country.code} onChange={(e) => setManualCountry(e.target.value)}>
              <option value="">{c.choose}</option>
              {countryList.map(([k, n]) => <option key={k} value={k}>{n}</option>)}
            </select>
          </label>
          {pick && country.code && <button type="button" className="btn btn-ghost" onClick={() => setPick(false)}>{c.back}</button>}
        </div>
      ) : cur ? (
        <div className="sv-body" key={cur.q.id}>
          <p className="eyebrow">{cur.part ? `${c.part} · ${cur.part[lang]}` : c.yourRole}</p>
          <h2 className="sv-q">{cur.q.text?.[lang]}</h2>
          {cur.q.type === "multi" && <p className="sv-note">{c.pickMax(cur.q.max ?? 3)}</p>}
          <div className="sv-opts" role={cur.q.type === "multi" ? "group" : "radiogroup"} aria-label={cur.q.text?.[lang]}>
            {cur.q.options.map((o, i) => {
              const on = selected.includes(o.id);
              return (
                <button type="button" key={o.id} className={`sv-opt${on ? " on" : ""}${cur.q.type === "multi" ? " multi" : ""}`} role={cur.q.type === "multi" ? "checkbox" : "radio"} aria-checked={on} onClick={() => choose(cur.q, o.id, step)}>
                  <span className="sv-mark" aria-hidden="true" />
                  <span className="sv-lab">{o.label[lang]}</span>
                  <kbd aria-hidden="true">{i + 1}</kbd>
                </button>
              );
            })}
          </div>
          {cur.q.tip && (
            <div className={`sv-tip${tipOpen ? " open" : ""}`}>
              <button type="button" className="sv-tip-h" aria-expanded={tipOpen} onClick={() => setTipOpen((v) => !v)}>
                <span>{c.didYouKnow}</span><i aria-hidden="true" />
              </button>
              {tipOpen && (
                <div className="sv-tip-b">
                  <p>{cur.q.tip[lang]}</p>
                  <small>{c.source}: {cur.q.tip.src}</small>
                </div>
              )}
            </div>
          )}
          {how && step === 0 && <p className="sv-how">{how}</p>}
        </div>
      ) : (
        <div className="sv-body" key="final">
          <p className="eyebrow">{c.finalTitle}</p>
          <h2 className="sv-q">{SURVEY.boss.title[lang]}</h2>
          <p className="sv-note">{c.finalSub}</p>
          {SURVEY.boss.freeText.map((f) => (
            <label className="field" key={f.id}>
              <span>{f.label[lang]}</span>
              <textarea rows={3} maxLength={f.max} placeholder={f.placeholder[lang]} value={texts[f.id as "elephant" | "unasked"]} onChange={(e) => setTexts((t) => ({ ...t, [f.id]: e.target.value }))} />
            </label>
          ))}
          <div className="fc-grid">
            <label className="field">
              <span>{c.sector}</span>
              <select value={card.sector} onChange={(e) => setCard((v) => ({ ...v, sector: e.target.value }))}>
                <option value="">{c.choose}</option>
                {[...SURVEY.card.sector.options].sort((x, y) => (x.id === "other" ? 1 : y.id === "other" ? -1 : x.label[lang].localeCompare(y.label[lang], lang))).map((o) => <option key={o.id} value={o.id}>{o.label[lang]}</option>)}
              </select>
            </label>
            <label className="field">
              <span>{c.size}</span>
              <select value={card.size} onChange={(e) => setCard((v) => ({ ...v, size: e.target.value }))}>
                <option value="">{c.choose}</option>
                {SURVEY.card.size.options.map((o) => <option key={o.id} value={o.id}>{o.label[lang]}</option>)}
              </select>
            </label>
          </div>
          <label className="field">
            <span>{c.email}</span>
            <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          {email.trim() && (
            <label className="fc-check">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <span>{c.emailConsent}</span>
            </label>
          )}
          <div className="fc-consent">
            <PrivacyBlock kind="survey" lang={lang} title={c.privacyTitle} />
            <label className="fc-check">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
              <span>{c.agree}</span>
            </label>
            <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="fc-hp" value={hp} onChange={(e) => setHp(e.target.value)} />
            <div className="fc-captcha" data-state={captcha}>
              <altcha-widget challenge="/api/altcha" configuration={JSON.stringify({ hideLogo: true, hideFooter: true })} auto="onload" language={lang === "de" ? "de" : "en"} name="altcha" type="checkbox"></altcha-widget>
            </div>
          </div>
          {error && <p role="alert" className="fc-error">{error}</p>}
        </div>
      )}

      {!needCountry && (
        <footer className="sv-foot">
          {step > 0 ? <button type="button" className="btn btn-ghost" onClick={() => go(step - 1)}>← {c.back}</button> : <span />}
          {cur ? (
            <button type="button" className="btn btn-primary" disabled={!selected.length} onClick={() => go(step + 1)}>{c.next} →</button>
          ) : (
            <button type="button" className="btn btn-primary" disabled={status === "sending"} onClick={submit}>{status === "sending" ? c.sending : c.submit}</button>
          )}
        </footer>
      )}
    </div>
  );
}
