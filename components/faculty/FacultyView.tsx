"use client";

import { useLanguage } from "@/lib/i18n";
import { COPY } from "@/lib/faculty-onboarding";
import { FacultyForm } from "./FacultyForm";

export function FacultyView() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  return (
    <>
      <section className="tt-hero" style={{ paddingBottom: "4.5rem" }}>
        <div className="wrap">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>{c.title}</h1>
          <p className="sub">{c.lead}</p>
        </div>
      </section>
      <section className="fc-wrap dots">
        <div className="wrap" style={{ maxWidth: 980 }}>
          <FacultyForm />
        </div>
      </section>
    </>
  );
}
