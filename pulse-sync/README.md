# CETL Pulse: Kopie der Antworten in Drive

Apps-Script, das alle 15 Minuten den geschützten Export der Website (`/api/survey/export`) holt und als
Google-Tabelle "CETL Pulse Antworten (Kopie)" im Drive-Ordner ablegt. Die Datenbank (Turso) bleibt die Quelle.

Das Token steht in `Secret.gs` (nicht in Git). Wird `SURVEY_ADMIN_TOKEN` bei Vercel geändert, muss es hier
ebenfalls geändert werden. Einrichtung: `clasp create`, `clasp push`, `clasp deploy`, dann die Web-App-Adresse
einmal als Besitzer öffnen. Der Ordner enthält Freitext und E-Mail-Adressen und darf nur eng geteilt werden.
