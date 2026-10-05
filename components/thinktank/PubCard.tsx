import Link from "next/link";
import {
  authorNames, fieldTitle, formatName, monthYear, pubMeta, splitTitle, TT_AUTHORS,
  type Lang, type TTPublication,
} from "@/lib/thinktank";
import { TT_COPY } from "@/lib/thinktank-copy";

export function TTCover({ pub, lang, large }: { pub: TTPublication; lang: Lang; large?: boolean }) {
  return (
    <div className={`tt-cover${large ? " lg" : ""}`} data-field={pub.field} aria-hidden="true">
      <span className="nr">{String(pub.number).padStart(2, "0")}</span>
      <span className="fmt">{formatName(pub.format, lang)}</span>
    </div>
  );
}

export function PubCard({ pub, lang }: { pub: TTPublication; lang: Lang }) {
  const copy = TT_COPY[lang];
  const meta = pubMeta(pub, lang);
  const { main } = splitTitle(meta.title);
  const guestAuthor = pub.guest ? pub.authors.map((id) => TT_AUTHORS[id]).find((a) => a?.guest) : undefined;

  return (
    <Link href={`/think-tank/${pub.slug}`} className="card pub">
      <TTCover pub={pub} lang={lang} />
      <div className="body">
        <p className="meta">
          <span>{fieldTitle(pub.field, lang)}</span>
          <span>· {meta.readTime}</span>
        </p>
        <h3>{main}</h3>
        <p className="teaser">{meta.teaser}</p>
        {guestAuthor && <span className="badge">{copy.landing.pubs.guestBadge(guestAuthor.name)}</span>}
        <p className="foot">
          <span>{copy.card.by} <strong>{authorNames(pub)}</strong></span>
          <span>{monthYear(pub.dateISO, lang)}</span>
        </p>
      </div>
    </Link>
  );
}
