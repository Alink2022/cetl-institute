#!/usr/bin/env node
// Verschlüsselt eine vertrauliche HTML-Seite für /SPGxCETL (AES-256-GCM, Schlüssel per PBKDF2-SHA256).
// Der Klartext liegt nie im Repository, nur die verschlüsselte Datei public/spg/page.enc.json.
//
// Nutzung (Passwort nur über die Umgebung, nicht in der Befehlszeile):
//   PRIVATE_PAGE_PASSWORD='...' node scripts/encrypt-private-page.js pfad/zur/seite.html
//
// Das Passwort wird im Browser auf der Seite /SPGxCETL abgefragt und die Datei dort entschlüsselt.

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const input = process.argv[2];
const password = process.env.PRIVATE_PAGE_PASSWORD || "";
if (!input || !fs.existsSync(input)) { console.error("Eingabedatei fehlt: node scripts/encrypt-private-page.js <seite.html>"); process.exit(1); }
if (password.length < 16) { console.error("PRIVATE_PAGE_PASSWORD fehlt oder ist zu kurz (mindestens 16 Zeichen)."); process.exit(1); }

const ITER = 600000;
const salt = crypto.randomBytes(16);
const iv = crypto.randomBytes(12);
const key = crypto.pbkdf2Sync(password, salt, ITER, 32, "sha256");
const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
const ct = Buffer.concat([cipher.update(fs.readFileSync(input)), cipher.final(), cipher.getAuthTag()]); // wie WebCrypto: Chiffretext + Tag

const out = path.join(__dirname, "..", "public", "spg", "page.enc.json");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify({ v: 1, iter: ITER, salt: salt.toString("base64"), iv: iv.toString("base64"), ct: ct.toString("base64") }));
console.log("Verschlüsselt:", out, "(" + ct.length + " Byte)");
