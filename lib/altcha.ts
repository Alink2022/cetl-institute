import { create, CappedMap, randomInt } from "altcha-lib/frameworks/nextjs";
import { deriveKey } from "altcha-lib/algorithms/pbkdf2";

// Eigener Schlüssel über ALTCHA_SECRET, sonst vom Resend-Schlüssel abgeleitet.
export const altchaSecret = `altcha:${process.env.ALTCHA_SECRET || process.env.RESEND_API_KEY || ""}`;

// Bereits benutzte Lösungen werden gemerkt, damit eine Lösung nicht mehrfach verwendet werden kann.
export const altchaStore = new CappedMap({ maxSize: 5000 });

export const altcha = create({
  createChallengeParameters: () => ({
    algorithm: "PBKDF2/SHA-256",
    cost: 2_000,
    counter: randomInt(2_000, 6_000),
    expiresAt: Math.floor(Date.now() / 1000) + 15 * 60,
  }),
  deriveKey,
  hmacSignatureSecret: altchaSecret,
  store: altchaStore,
});

export { deriveKey };
