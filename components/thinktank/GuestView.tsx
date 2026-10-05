"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { TT_COPY } from "@/lib/thinktank-copy";
import { Icon } from "@/components/ui/IconSprite";

function ProposalForm() {
  const { lang } = useLanguage();
  const f = TT_COPY[lang].guest.form;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [idea, setIdea] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role: org, topic: "Think Tank: Gastbeitrag-Vorschlag", context: idea }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card" role="status">
        <p style={{ margin: 0 }}>{f.success}</p>
      </div>
    );
  }

  return (
    <form className="card" onSubmit={submit}>
      <label className="field"><span>{f.name}</span><input type="text" required value={name} onChange={(e) => setName(e.target.value)} /></label>
      <label className="field"><span>{f.email}</span><input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>
      <label className="field"><span>{f.org}</span><input type="text" value={org} onChange={(e) => setOrg(e.target.value)} /></label>
      <label className="field"><span>{f.idea}</span><textarea rows={5} required value={idea} onChange={(e) => setIdea(e.target.value)} /></label>
      {status === "error" && <p style={{ color: "var(--brand-700)", fontSize: "0.9rem", marginBottom: 16 }}>{f.error}</p>}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? f.sending : f.submit}
      </button>
    </form>
  );
}

export function GuestView() {
  const { lang } = useLanguage();
  const g = TT_COPY[lang].guest;

  return (
    <>
      <section className="tt-hero" style={{ paddingBottom: "5rem" }}>
        <div className="wrap">
          <Link href="/think-tank" className="back" style={{ display: "inline-flex", color: "var(--brand-300)", marginBottom: "2rem", fontSize: ".9rem" }}>← {g.hero.back}</Link>
          <p className="eyebrow">{g.hero.eyebrow}</p>
          <h1>{g.hero.h1}</h1>
          <p className="sub">{g.hero.intro}</p>
          <div className="cta">
            <a className="btn btn-primary" href="#vorschlag">{g.hero.cta}</a>
          </div>
        </div>
      </section>

      <section id="ablauf">
        <div className="wrap">
          <h2>{g.howTitle}</h2>
          <div className="tt-steps">
            {g.steps.map((s) => (
              <div className="card" key={s.title}>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="grundsaetze" className="alt">
        <div className="wrap">
          <h2>{g.principlesTitle}</h2>
          <div className="grid g3" style={{ marginTop: "3rem" }}>
            {g.principles.map((p) => (
              <div className="card" key={p.title}>
                <h4>{p.title}</h4>
                <p className="muted" style={{ marginTop: 10 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nutzen">
        <div className="wrap">
          <div className="tt-split">
            <div>
              <h2>{g.giveTitle}</h2>
              <ul className="gives">
                {g.gives.map((x) => (
                  <li key={x}><Icon name="check" className="ic-check" /><span>{x}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{g.disclosureTitle}</h3>
              <p className="muted" style={{ margin: "12px 0 16px" }}>{g.disclosureText}</p>
              <div className="disclosure" style={{ margin: 0 }}>{g.disclosureExample}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="vorschlag" className="alt">
        <div className="wrap">
          <div className="tt-split">
            <div>
              <h2>{g.formTitle}</h2>
              <p className="lead" style={{ marginTop: 16 }}>{g.formLead}</p>
            </div>
            <ProposalForm />
          </div>
        </div>
      </section>
    </>
  );
}
