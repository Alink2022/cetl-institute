# Umfrage-Datenbank (SQLite auf Turso)

Die Antworten der Umfrage (`/survey`) liegen in einer SQLite-Datenbank. In Produktion ist das Turso
(gehostetes SQLite, libSQL), lokal eine Datei `data/pulse.db` (nicht in Git).

## Einrichtung (einmalig, kostenloser Tarif)
1. Konto bei turso.tech anlegen, Datenbank `cetl-pulse` erstellen, Region in der EU (Frankfurt) wählen.
2. Datenbank-URL (`libsql://…`) und einen Token erzeugen.
3. Bei Vercel (Settings, Environment Variables) setzen und neu deployen:
   - `TURSO_DATABASE_URL` die libsql-URL
   - `TURSO_AUTH_TOKEN` der Token
   - `SURVEY_ADMIN_TOKEN` eine lange zufällige Zeichenfolge (mindestens 24 Zeichen) für den Export
4. Das Schema legt die Seite beim ersten Aufruf selbst an (`lib/db.ts`).

## Tabellen
- `responses`: eine Zeile je Teilnahme (Sprache, Land, Dauer, Freitext, optionale E-Mail)
- `answers`: eine Zeile je gewählter Option (`response_id, question_id, option_id`)
- Ansichten: `v_option_counts`, `v_answers_by_country`, `v_responses_by_country`

## Export (mit Freitext und E-Mail, nur mit Token)
```bash
curl -H "Authorization: Bearer $SURVEY_ADMIN_TOKEN" https://www.cetl.institute/api/survey/export -o pulse.csv
```

## Löschen ohne SQL (Art. 17 DSGVO, nur mit Token)
```bash
# eine Teilnahme anhand ihrer ID (Spalte "id" im Export)
curl -X DELETE -H "Authorization: Bearer $SURVEY_ADMIN_TOKEN" "https://www.cetl.institute/api/survey/export?id=ABCD1234"
# alle Teilnahmen einer E-Mail-Adresse
curl -X DELETE -H "Authorization: Bearer $SURVEY_ADMIN_TOKEN" "https://www.cetl.institute/api/survey/export?email=name@example.com"
```

## Auswertung und Löschung per SQL (Turso-Konsole oder `turso db shell cetl-pulse`)
```sql
SELECT question_id, option_id, n FROM v_option_counts ORDER BY question_id, n DESC;
-- Löschwunsch (Art. 17 DSGVO): Antworten einer E-Mail-Adresse entfernen
DELETE FROM answers WHERE response_id IN (SELECT id FROM responses WHERE email = 'name@example.com');
DELETE FROM responses WHERE email = 'name@example.com';
-- Fristablauf: Antworten älter als 24 Monate löschen
DELETE FROM answers WHERE response_id IN (SELECT id FROM responses WHERE created_at < date('now', '-24 months'));
DELETE FROM responses WHERE created_at < date('now', '-24 months');
```
