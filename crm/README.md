# CETL CRM

Persönliches CRM auf Google-Basis: Google Sheet als Datenbank, Apps-Script-Web-App als Oberfläche, Gmail für Entwürfe und Mail-Abgleich. Kein Server, keine Zusatzkosten.

## Aufbau

| Datei | Zweck |
|---|---|
| `Code.gs` | Server: Tabellen lesen und schreiben, Gmail-Entwürfe, Mail-Abgleich, Website-Anfragen, optional Claude |
| `Index.html`, `Stylesheet.html`, `Client.html` | Oberfläche (aus `dev/` gebaut, nicht von Hand ändern, außer `Client.html`) |
| `appsscript.json` | Berechtigungen, Web-App nur für den Besitzer |
| `dev/` | Lokale Vorschau mit Mock-Daten, nicht Teil der Bereitstellung |

Oberfläche lokal ansehen: `node dev/build.js`, danach `node dev/serve.js` und `http://localhost:5055` öffnen.

## Einrichtung (einmalig)

1. Apps-Script-API einschalten: https://script.google.com/home/usersettings
2. Anmelden (Konto `alinkalam@cetl.institute`): `npx @google/clasp login`
3. Projekt anlegen und hochladen, im Ordner `crm/`:
   ```
   npx @google/clasp create --type standalone --title "CETL CRM"
   npx @google/clasp push
   ```
4. Im Skript-Editor (`npx @google/clasp open-script`) einmal `setup()` ausführen und die Berechtigungen bestätigen. Das legt das Sheet „CETL CRM“ in Ihrem Drive an. Danach `installTriggers()` ausführen (Abgleich alle 15 Minuten).
5. Web-App bereitstellen: `npx @google/clasp deploy --description "v1"`. Die URL lautet `https://script.google.com/macros/s/<DEPLOYMENT-ID>/exec` (`npx @google/clasp deployments` zeigt die ID). Die Web-App läuft als Sie und ist nur für Ihr Konto freigegeben.

## Aktualisieren

`npx @google/clasp push`, dann `npx @google/clasp deploy --deploymentId <ID>` (gleiche URL bleibt).

## Optional: Claude schreibt die Entwürfe

Im Skript-Editor unter Projekteinstellungen > Skripteigenschaften `ANTHROPIC_API_KEY` eintragen. Dann erscheint im Entwurf der Button „Mit Claude schreiben“. Das kostet pro Entwurf wenige Cent. Ohne Schlüssel nutzt die Oberfläche eine Vorlage.

## Zweite Person freischalten

Skripteigenschaft `ALLOWED` auf `alinkalam@cetl.institute,weitere@cetl.institute` setzen und in `appsscript.json` den Web-App-Zugriff auf `DOMAIN` stellen.

## Datenschutz

Alle Daten liegen in Ihrem Google-Konto. Mails werden nicht kopiert: Das CRM merkt sich nur die letzten drei Nachrichten je Organisation als Ausschnitt (max. 900 Zeichen). Pro Person gibt es die Felder „Einwilligung“ und „nicht kontaktieren“, Entwürfe an gesperrte Personen werden blockiert.
