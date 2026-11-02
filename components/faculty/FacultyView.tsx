"use client";

import { useLanguage } from "@/lib/i18n";
import { COPY } from "@/lib/faculty-onboarding";
import { FacultyForm } from "./FacultyForm";

export function FacultyView() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  return (
    <>
      <section className="tt-hero fc-hero">
        <div className="wrap">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>{c.title}</h1>
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
          <FacultyForm />
        </div>
      </section>
    </>
  );
}
