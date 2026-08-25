import { Fragment } from "react";

const PATTERN = /(Executional Learning as a Service|ELaaS)/g;

/**
 * Renders text with every "ELaaS" / "Executional Learning as a Service"
 * occurrence wrapped in <strong> so the brand term stays bold site-wide.
 */
export function boldElaas(text: string) {
  const parts = text.split(PATTERN);
  if (parts.length === 1) return text;
  // text.split() with a capturing group alternates [non-match, match, non-match, match, ...]
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
