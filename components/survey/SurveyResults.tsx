"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { GEO, SURVEY, allQuestions, type Q } from "@/lib/survey";
import { COPY } from "@/lib/survey-copy";

type Stats = {
  n: number; open: boolean; min: number; country: string | null;
  countries: Record<string, number>;
  questions: Record<string, { n: number; counts: Record<string, number> }>;
};

const SECTIONS: { q: Q; title: { en: string; de: string } | null }[] = (() => {
  const byId = new Map<string, { en: string; de: string }>();
  for (const lv of SURVEY.levels) for (const q of lv.questions) byId.set(q.id, lv.title);
  byId.set(SURVEY.boss.question.id, SURVEY.boss.title);
  return allQuestions().map((q) => ({ q, title: byId.get(q.id) ?? null }));
})();

export function SurveyResults({ onBack }: { onBack: () => void }) {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const r = c.results;
  const [country, setCountry] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);
  const [state, setState] = useState<"loading" | "ok" | "error">("loading");

  const dn = useMemo(() => { try { return new Intl.DisplayNames([lang], { type: "region" }); } catch { return null; } }, [lang]);
  const cname = (code: string) => { try { return dn?.of(code) || GEO.names[code] || code; } catch { return GEO.names[code] || code; } };

  useEffect(() => {
    let alive = true;
    setState("loading");
    fetch(`/api/survey/stats${country ? `?country=${encodeURIComponent(country)}` : ""}`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((d: Stats) => { if (alive) { setStats(d); setState("ok"); } })
      .catch(() => { if (alive) setState("error"); });
    return () => { alive = false; };
  }, [country]);

  const countries = stats ? Object.entries(stats.countries).filter(([k]) => k !== "--").sort((a, b) => b[1] - a[1]) : [];

  return (
    <div className="fc-card sv-card sv-res">
      <div className="sv-body">
        <div className="sv-res-h">
          <div>
            <p className="eyebrow">{r.title}</p>
            <h2 className="sv-q">{stats && state === "ok" ? r.respondents(stats.n) : r.title}</h2>
          </div>
          {countries.length > 0 && (
            <label className="field sv-filter">
              <span>{r.country}</span>
              <select value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="">{r.allCountries}</option>
                {countries.map(([k, n]) => <option key={k} value={k}>{cname(k)} ({n})</option>)}
              </select>
            </label>
          )}
        </div>

        {state === "loading" && <p className="sv-note">{r.loading}</p>}
        {state === "error" && <p role="alert" className="fc-error">{r.error}</p>}
        {state === "ok" && stats && !stats.open && <p className="sv-note">{r.noData(stats.min, stats.n)}</p>}

        {state === "ok" && stats?.open && (
          <>
            {!country && countries.length > 1 && (
              <section className="sv-block">
                <h3 className="sv-h3">{r.byCountry}</h3>
                <Bars rows={countries.map(([k, n]) => ({ key: k, label: cname(k), n }))} total={stats.n} />
              </section>
            )}
            {SECTIONS.map(({ q, title }) => {
              const data = stats.questions[q.id];
              if (!data || !data.n) return null;
              const rows = q.options.map((o) => ({ key: o.id, label: o.label[lang], n: data.counts[o.id] || 0 }));
              const heading = q.text?.[lang] ?? (q.id === SURVEY.card.sector.id ? c.sector : c.size);
              return (
                <section className="sv-block" key={q.id}>
                  {title && <p className="eyebrow">{title[lang]}</p>}
                  <h3 className="sv-h3">{heading}</h3>
                  <Bars rows={rows} total={data.n} />
                  <p className="sv-n">{r.respondents(data.n)}</p>
                </section>
              );
            })}
          </>
        )}
      </div>
      <footer className="sv-foot">
        <button type="button" className="btn btn-ghost" onClick={onBack}>← {r.back}</button>
        <span />
      </footer>
    </div>
  );
}

function Bars({ rows, total }: { rows: { key: string; label: string; n: number }[]; total: number }) {
  const max = Math.max(1, ...rows.map((x) => x.n));
  return (
    <ul className="sv-bars">
      {rows.map((x) => {
        const pct = total ? Math.round((x.n / total) * 100) : 0;
        return (
          <li key={x.key}>
            <div className="sv-bar-l"><span>{x.label}</span><b>{pct} %</b></div>
            <div className="sv-bar"><i style={{ width: `${(x.n / max) * 100}%` }} /></div>
          </li>
        );
      })}
    </ul>
  );
}
