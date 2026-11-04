/**
 * CETL Enterprise AI Pulse: Annahme der Umfrageantworten (Google Apps Script)
 * Legt beim ersten Aufruf den Drive-Ordner "CETL Pulse Umfrage" mit dem Sheet "CETL Pulse Antworten" an.
 * Die Website spricht dieses Script nur serverseitig an. Jede Anfrage braucht das Geheimnis aus Secret.gs.
 */

const FOLDER_NAME = 'CETL Pulse Umfrage';
const SHEET_NAME = 'CETL Pulse Antworten';
const TAB = 'Antworten';
const BASE_COLS = ['id', 'eingang', 'sprache', 'land', 'land_quelle', 'geo_header', 'dauer_s', 'version'];
const PRIVATE_COLS = ['elephant', 'unasked', 'email'];

function doGet() { return out_({ ok: true, service: 'cetl-pulse' }); }

function doPost(e) {
  try {
    const req = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (typeof SINK_SECRET === 'undefined' || !SINK_SECRET || req.secret !== SINK_SECRET) return out_({ ok: false, error: 'forbidden' });
    if (req.action === 'add') return out_(add_(req.row));
    if (req.action === 'rows') return out_(rows_());
    if (req.action === 'info') return out_(info_());
    if (req.action === 'delete') return out_(delete_(req.id));
    return out_({ ok: false, error: 'bad_action' });
  } catch (err) {
    return out_({ ok: false, error: String(err && err.message || err).slice(0, 200) });
  }
}

function out_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

/** Zellen, die mit =, +, - oder @ beginnen, würden als Formel gelesen. */
function safeCell_(v) {
  if (typeof v !== 'string') return v == null ? '' : v;
  const s = v.slice(0, 2500);
  return /^[=+\-@\t\r]/.test(s) ? "'" + s : s;
}

function ensureReady_() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty('SHEET_ID');
  if (id) { try { return SpreadsheetApp.openById(id); } catch (e) { /* neu anlegen */ } }
  const it = DriveApp.getFoldersByName(FOLDER_NAME);
  const folder = it.hasNext() ? it.next() : DriveApp.createFolder(FOLDER_NAME);
  const ss = SpreadsheetApp.create(SHEET_NAME);
  DriveApp.getFileById(ss.getId()).moveTo(folder);
  const sh = ss.getSheets()[0];
  sh.setName(TAB);
  const cols = BASE_COLS.concat(PRIVATE_COLS);
  sh.getRange(1, 1, 1, cols.length).setValues([cols]).setFontWeight('bold').setBackground('#9B2242').setFontColor('#FFFFFF');
  sh.setFrozenRows(1);
  sh.getRange(2, 1, Math.max(sh.getMaxRows() - 1, 1), Math.max(sh.getMaxColumns(), 30)).setNumberFormat('@');
  props.setProperty('SHEET_ID', ss.getId());
  props.setProperty('FOLDER_ID', folder.getId());
  return ss;
}

/** Stellt sicher, dass für jede Frage eine Spalte existiert (neue Fragen brauchen keine Änderung am Script). */
function headers_(sh, keys) {
  const have = sh.getRange(1, 1, 1, Math.max(sh.getLastColumn(), 1)).getValues()[0].map(String);
  keys.forEach(function (k) {
    if (have.indexOf(k) >= 0) return;
    sh.getRange(1, have.length + 1).setValue(k).setFontWeight('bold').setBackground('#9B2242').setFontColor('#FFFFFF');
    sh.getRange(2, have.length + 1, Math.max(sh.getMaxRows() - 1, 1), 1).setNumberFormat('@');
    have.push(k);
  });
  return have;
}

function add_(row) {
  if (!row || typeof row !== 'object' || !row.id) return { ok: false, error: 'bad_row' };
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sh = ensureReady_().getSheetByName(TAB);
    const answers = row.answers || {};
    const have = headers_(sh, Object.keys(answers));
    const vals = {
      id: row.id, eingang: row.ts, sprache: row.lang, land: row.country, land_quelle: row.country_src, geo_header: row.geo,
      dauer_s: row.duration_s, version: row.version, elephant: row.elephant, unasked: row.unasked, email: row.email,
    };
    Object.keys(answers).forEach(function (k) { vals[k] = answers[k]; });
    const line = have.map(function (h) { return safeCell_(vals[h]); });
    sh.getRange(sh.getLastRow() + 1, 1, 1, line.length).setValues([line]);
    return { ok: true };
  } finally { lock.releaseLock(); }
}

/** Nur die öffentlichen Felder: Land und Antworten. Kein Freitext, keine E-Mail. */
function rows_() {
  const sh = ensureReady_().getSheetByName(TAB);
  const v = sh.getDataRange().getValues();
  if (v.length < 2) return { ok: true, rows: [] };
  const h = v[0].map(String);
  const skip = BASE_COLS.concat(PRIVATE_COLS);
  const landAt = h.indexOf('land');
  const rows = v.slice(1).filter(function (r) { return r[0] !== ''; }).map(function (r) {
    const answers = {};
    h.forEach(function (k, i) { if (skip.indexOf(k) < 0 && r[i] !== '') answers[k] = String(r[i]); });
    return { country: String(r[landAt] || ''), answers: answers };
  });
  return { ok: true, rows: rows };
}

function info_() {
  const ss = ensureReady_();
  const folderId = PropertiesService.getScriptProperties().getProperty('FOLDER_ID');
  let folderUrl = '';
  try { folderUrl = DriveApp.getFolderById(folderId).getUrl(); } catch (e) { /* ohne Ordner */ }
  return { ok: true, sheetUrl: ss.getUrl(), folderUrl: folderUrl, n: Math.max(ss.getSheetByName(TAB).getLastRow() - 1, 0) };
}

/** Löscht eine Antwort anhand ihrer ID, etwa bei einem Löschwunsch oder für Testzeilen. */
function delete_(id) {
  if (!id) return { ok: false, error: 'bad_id' };
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sh = ensureReady_().getSheetByName(TAB);
    const ids = sh.getRange(1, 1, Math.max(sh.getLastRow(), 1), 1).getValues().map(function (r) { return String(r[0]); });
    const at = ids.indexOf(String(id));
    if (at < 1) return { ok: true, deleted: 0 };
    sh.deleteRow(at + 1);
    return { ok: true, deleted: 1 };
  } finally { lock.releaseLock(); }
}
