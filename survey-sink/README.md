# CETL Pulse: Annahme der Antworten

Apps-Script, das die Antworten der Umfrage (cetl.institute/survey) in ein Google Sheet im Drive-Ordner
"CETL Pulse Umfrage" schreibt. Es antwortet nur auf Anfragen mit dem Geheimnis aus `Secret.gs`
(nicht in Git, muss mit `SURVEY_SINK_SECRET` bei Vercel übereinstimmen).

Einrichtung: `clasp create`, `clasp push`, `clasp deploy`, dann bei Vercel setzen:
`SURVEY_SINK_URL` (Web-App-URL) und `SURVEY_SINK_SECRET`.
