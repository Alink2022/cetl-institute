import { altcha, altchaConfigured } from "@/lib/altcha";

export const dynamic = "force-dynamic";

// Liefert dem Spamschutz im Formular eine frische, signierte Rechenaufgabe.
export async function GET(req: Request) {
  if (!altchaConfigured) return new Response("not configured", { status: 503 });
  const res = await altcha.challengeHandler(req);
  res.headers.set("Cache-Control", "no-store");
  return res;
}
