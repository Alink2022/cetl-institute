import Link from "next/link";
import { formNotice, type FormKind, type Lang } from "@/lib/privacy";

/** Datenschutzhinweis nach Art. 13 DSGVO direkt am Formular, scrollbar, mit Link zur vollständigen Erklärung. */
export function PrivacyBlock({ kind, lang, title }: { kind: FormKind; lang: Lang; title: string }) {
  const sections = formNotice(kind, lang);
  return (
    <div className="fc-priv">
      <h3 className="fc-h3">{title}</h3>
      <div className="fc-priv-box" tabIndex={0} role="region" aria-label={title}>
        {sections.map((s, i) => (
          <section key={s.h}>
            <h4>{i + 1}. {s.h}</h4>
            {s.p.map((p) => <p key={p}>{p}</p>)}
          </section>
        ))}
      </div>
      <p className="fc-priv-more">
        <Link href="/datenschutz" target="_blank" className="fc-link">{lang === "de" ? "Vollständige Datenschutzerklärung" : "Full privacy notice"} →</Link>
        {" · "}
        <Link href="/impressum" target="_blank" className="fc-link">{lang === "de" ? "Impressum" : "Legal notice"} →</Link>
      </p>
    </div>
  );
}
