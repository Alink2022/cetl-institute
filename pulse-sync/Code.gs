/**
 * CETL Pulse: Kopie der Umfrageantworten als Google-Tabelle im Drive-Ordner (Google Apps Script)
 * Holt alle 15 Minuten den geschützten Export der Website und schreibt ihn in die Tabelle
 * "CETL Pulse Antworten (Kopie)". Die Datenbank bleibt die Quelle, die Tabelle ist eine reine Kopie.
 * Einrichtung: Web-App-Adresse einmal als Besitzer öffnen (installiert den Zeitplan und gleicht sofort ab).
 * Das Token steht in Secret.gs (nicht in Git).
 */

const FOLDER_ID = '1DKN0Hj-2G2869j8FQ7kMscofsXMlSfU3';
const EXPORT_URL = 'https://www.cetl.institute/api/survey/export';
const FILE_NAME = 'CETL Pulse Antworten (Kopie)';
const TAB = 'Antworten';
const INFO = 'Info';
const TZ = 'Europe/Vienna';

/** Wird nur vom Besitzer geöffnet: richtet den Zeitplan ein und gleicht einmal ab. */
function doGet() {
  let html;
  try {
    const r = setup_();
    html = '<h2>Eingerichtet</h2><p>' + r.n + ' Antworten kopiert. Ab jetzt alle 15 Minuten automatisch.</p>' +
      '<p><a href="' + r.sheetUrl + '" target="_top">Tabelle öffnen</a></p>';
  } catch (err) {
    html = '<h2>Fehler</h2><p>' + String(err && err.message || err).replace(/</g, '&lt;') + '</p>';
  }
  return HtmlService.createHtmlOutput('<div style="font-family:sans-serif;max-width:560px;margin:40px auto">' + html + '</div>').setTitle('CETL Pulse');
}

function setup_() {
  ScriptApp.getProjectTriggers().forEach(function (t) { ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('syncPulse').timeBased().everyMinutes(15).create();
  return syncPulse();
}

function sheet_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('SHEET_ID');
  if (id) { try { return SpreadsheetApp.openById(id); } catch (e) { /* neu anlegen */ } }
  const folder = DriveApp.getFolderById(FOLDER_ID);
  const it = folder.getFilesByName(FILE_NAME);
  if (it.hasNext()) { const ss = SpreadsheetApp.open(it.next()); props.setProperty('SHEET_ID', ss.getId()); return ss; }
  const ss = SpreadsheetApp.create(FILE_NAME);
  DriveApp.getFileById(ss.getId()).moveTo(folder);
  const first = ss.getSheets()[0];
  first.setName(TAB);
  ss.insertSheet(INFO);
  props.setProperty('SHEET_ID', ss.getId());
  return ss;
}

/** Holt den Export und ersetzt den Inhalt der Tabelle. */
function syncPulse() {
  if (typeof PULSE_TOKEN === 'undefined' || !PULSE_TOKEN) throw new Error('Token fehlt (Secret.gs).');
  const res = UrlFetchApp.fetch(EXPORT_URL, {
    method: 'get',
    headers: { Authorization: 'Bearer ' + PULSE_TOKEN, 'User-Agent': 'Mozilla/5.0 (CETL Pulse Sync)' },
    muteHttpExceptions: true,
    followRedirects: true,
  });
  if (res.getResponseCode() !== 200) throw new Error('Export nicht erreichbar (HTTP ' + res.getResponseCode() + ').');
  const csv = res.getContentText().replace(/^﻿/, '');
  let rows = Utilities.parseCsv(csv).filter(function (r) { return r.length > 1 || (r[0] !== '' && r[0] != null); });
  if (!rows.length) rows = [['id']];
  const cols = rows.reduce(function (m, r) { return Math.max(m, r.length); }, 1);
  rows = rows.map(function (r) { const a = r.slice(); while (a.length < cols) a.push(''); return a; });

  const ss = sheet_();
  const sh = ss.getSheetByName(TAB) || ss.insertSheet(TAB);
  sh.clearContents();
  // Alles als Text schreiben, damit nichts als Formel oder Zahl umgedeutet wird
  sh.getRange(1, 1, Math.max(rows.length, 200), cols).setNumberFormat('@');
  sh.getRange(1, 1, rows.length, cols).setValues(rows);
  sh.getRange(1, 1, 1, cols).setFontWeight('bold').setBackground('#9B2242').setFontColor('#FFFFFF');
  sh.setFrozenRows(1);

  const info = ss.getSheetByName(INFO) || ss.insertSheet(INFO);
  info.clearContents();
  info.getRange(1, 1, 4, 2).setValues([
    ['Hinweis', 'Automatische Kopie aus der Datenbank. Änderungen hier werden beim nächsten Abgleich überschrieben.'],
    ['Letzter Abgleich', Utilities.formatDate(new Date(), TZ, 'dd.MM.yyyy HH:mm')],
    ['Antworten', rows.length - 1],
    ['Datenschutz', 'Enthält Freitext und E-Mail-Adressen. Zugriff auf diesen Ordner eng halten.'],
  ]);
  info.getRange(1, 1, 4, 1).setFontWeight('bold');
  return { n: rows.length - 1, sheetUrl: ss.getUrl() };
}
