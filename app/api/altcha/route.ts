import { altcha } from "@/lib/altcha";

export const dynamic = "force-dynamic";

// Liefert dem Spamschutz im Formular eine frische, signierte Rechenaufgabe.
export async function GET(req: Request) {
  const res = await altcha.challengeHandler(req);
  res.headers.set("Cache-Control", "no-store");
  return res;
}
