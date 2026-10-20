/**
 * CETL CRM: Server (Google Apps Script)
 * Daten liegen im Google Sheet "CETL CRM" im Drive des Besitzers, gesendet wird über Gmail.
 * Einrichtung: siehe README.md
 */

const TZ = 'Europe/Vienna';
const DATE_FMT = 'dd.MM.yyyy';

/* Tabellen und Spalten. Die erste Spalte ist immer die ID. */
const SCHEMA = {
  Organisationen: ['id','name','branche','status','groesse','land','phase','passung','naechster_schritt','faellig','stand','notiz','v_status','v_art','v_seit','v_bis','v_volumen','erstellt'],
  Personen: ['id','org_id','name','funktion','bereich','rolle','haltung','haupt','email','einwilligung','nicht_kontaktieren','anrede','letzter_kontakt'],
  Deals: ['id','org_id','produkt_id','phase','wert'],
  Aktivitaeten: ['id','org_id','datum','art','text'],
  Mails: ['id','org_id','person_id','richtung','datum','zeit','betreff','text','msg_id'],
  // Speaker entspricht der bisherigen Excel-Liste (Spalten B bis N), dazu CRM-Felder ab 'typ'
  Speaker: ['id','name','branche','unternehmen','hauptfach','fachgebiete','themen','sprachen','honorar','abrechnung','zahlungsart','status','email','telefon','anmerkungen','typ','funktion','vertrag','vertrag_info','produkte','einsaetze','liste','stadt','prioritaet','konflikt','nachweis','linkedin','website','naechster_schritt','quellen','geprueft','modell','kontakt_id'],
  Produkte: ['id','gruppe','name','beschreibung'],
  Vorschlaege: ['id','name','branche','rolle','grund','quelle','produkt','passung']
};
const NUMERIC = { Organisationen: ['passung'], Deals: ['phase','wert'], Speaker: ['honorar'] };

const PRODUCTS = [
  ['p1','Learning','Foundation','KI- und Datengrundlage mit praktischer Befähigung'],
  ['p2','Learning','Customized','Foundation plus rollenbasierte Vertiefung'],
  ['p3','Learning','Embedded Engineering','Eingebettete Aktivierung für messbaren Fortschritt'],
  ['p4','Learning','Community Package','Co-Creation für KI, Daten und Innovation'],
  ['p5','Assessment','Assessment Foundation','Von realer Umsetzung zur Assessment-Praxis'],
  ['p6','Assessment','Capability Audit','Unabhängige, entscheidungsreife Kompetenzeinsicht'],
  ['p7','Assessment','Phased Audit Architecture','Von der Baseline zur Kompetenz-Roadmap'],
  ['p8','Think Tank','Executive Briefing','Aktuelle Analyse für Vorstand und Führungskreis'],
  ['p9','Think Tank','Foresight Lab','Workshop für Szenarien und Entscheidungen'],
  ['p10','Think Tank','Think Tank in Residence','Laufender Sparringspartner der Führung'],
  ['p11','Think Tank','Auftragsstudie','Position Paper zu Ihrer Frage'],
  ['p12','Think Tank','Markt- und Kompetenzanalyse','Marktforschung für HR, L&D und Geschäftsführung']
];

/* Auswahllisten der Lektoren-Tabelle (wie in der bisherigen Excel-Liste) */
const LISTS = {
  branche: ['IT & Software','Finanzwesen / Banken','Versicherungen','Industrie & Produktion','Automotive','Handel & E-Commerce','Gesundheitswesen','Energie & Nachhaltigkeit','Öffentlicher Sektor','Logistik','Beratung / Consulting','Bildung & Forschung','Medien & Marketing','Pharma / Medizin','Sonstige'],
  hauptfach: ['Künstliche Intelligenz (KI)','Machine Learning','Data Science','Datenanalyse','Data Engineering','Big Data','Digitalisierung','Prozessautomatisierung (RPA)','Cloud-Architektur','Cybersecurity','IoT','Robotik','Change Management','Innovation & Zukunftstrends','Leadership & New Work','Sonstige'],
  sprachen: ['Deutsch','Englisch','Deutsch & Englisch','Sonstige'],
  abrechnung: ['Pauschalhonorar','Tagessatz','Halbtagessatz','Stundensatz','Honorar + Spesen','Nach Vereinbarung','Pro-bono'],
  zahlungsart: ['Rechnung nach Veranstaltung','Rechnung nach Vertrag','Vorkasse (100%)','Anzahlung + Restzahlung','Vertrag / Rahmenvereinbarung','Retainer (laufend)','Vermittlung über Agentur','Sonstige'],
  status: ['Verfügbar','Angefragt','Bestätigt','Abgesagt','Nicht verfügbar']
};

/* ---------- Einrichtung ---------- */

/** Einmal ausführen: legt das Sheet "CETL CRM" mit allen Tabellen an. */
function setup() {
  const props = PropertiesService.getScriptProperties();
  let ss;
  if (props.getProperty('SHEET_ID')) {
    ss = SpreadsheetApp.openById(props.getProperty('SHEET_ID'));
  } else {
    ss = SpreadsheetApp.create('CETL CRM');
    props.setProperty('SHEET_ID', ss.getId());
  }
  if (!props.getProperty('ALLOWED')) props.setProperty('ALLOWED', Session.getEffectiveUser().getEmail());
  Object.keys(SCHEMA).forEach(function (name) {
    const cols = SCHEMA[name];
    let sh = ss.getSheetByName(name);
    if (!sh) sh = ss.insertSheet(name);
    sh.getRange(1, 1, 1, cols.length).setValues([cols])
      .setFontWeight('bold').setBackground('#9B2242').setFontColor('#FFFFFF');
    sh.setFrozenRows(1);
    const num = NUMERIC[name] || [];
    cols.forEach(function (c, i) {
      sh.getRange(2, i + 1, Math.max(sh.getMaxRows() - 1, 1), 1).setNumberFormat(num.indexOf(c) >= 0 ? '0' : '@');
    });
    if (name === 'Speaker') {
      Object.keys(LISTS).forEach(function (k) {
        const col = cols.indexOf(k) + 1;
        sh.getRange(2, col, 500, 1).setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(LISTS[k], true).setAllowInvalid(true).build());
      });
      sh.getRange(1, 1, 1, cols.length).setWrap(false);
    }
    if (name === 'Produkte' && sh.getLastRow() < 2) {
      sh.getRange(2, 1, PRODUCTS.length, 4).setValues(PRODUCTS);
    }
  });
  const first = ss.getSheetByName('Sheet1') || ss.getSheetByName('Tabellenblatt1');
  if (first) ss.deleteSheet(first);
  Logger.log('CETL CRM bereit: ' + ss.getUrl());
  return ss.getUrl();
}

/** Einmal ausführen: Abgleich mit Gmail und Website-Anfragen alle 15 Minuten. */
function installTriggers() {
  ScriptApp.getProjectTriggers().forEach(function (t) { ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('syncAll').timeBased().everyMinutes(15).create();
  ScriptApp.newTrigger('monthlyBackup').timeBased().onMonthDay(1).atHour(3).create();
  Logger.log('Trigger installiert.');
}

/** Monatliche Sicherung: Kopie des gesamten CRM-Sheets im Drive-Ordner "CETL CRM Backups". */
function monthlyBackup() {
  const name = 'CETL CRM Backups';
  const it = DriveApp.getFoldersByName(name);
  const folder = it.hasNext() ? it.next() : DriveApp.createFolder(name);
  DriveApp.getFileById(PropertiesService.getScriptProperties().getProperty('SHEET_ID'))
    .makeCopy('CETL CRM Backup ' + Utilities.formatDate(new Date(), TZ, 'yyyy-MM'), folder);
}

function syncAll() {
  importWebsiteLeads_();
  syncMails_();
}

/* ---------- Web-App ---------- */

function doGet() {
  assertAllowed_();
  return HtmlService.createTemplateFromFile('Index').evaluate()
    .setTitle('CETL CRM')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}
function include(name) { return HtmlService.createHtmlOutputFromFile(name).getContent(); }

function assertAllowed_() {
  const allowed = (PropertiesService.getScriptProperties().getProperty('ALLOWED') || '')
    .split(',').map(function (s) { return s.trim().toLowerCase(); }).filter(Boolean);
  const me = (Session.getActiveUser().getEmail() || Session.getEffectiveUser().getEmail() || '').toLowerCase();
  if (allowed.length && allowed.indexOf(me) < 0) throw new Error('Kein Zugriff für ' + me);
}

/* ---------- Tabellen lesen und schreiben ---------- */

function ss_() {
  const id = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  if (!id) throw new Error('Bitte zuerst setup() ausführen.');
  return SpreadsheetApp.openById(id);
}
function sheet_(name) { return ss_().getSheetByName(name); }

function readTable_(name) {
  const v = sheet_(name).getDataRange().getValues();
  if (v.length < 2) return [];
  const h = v[0];
  return v.slice(1).filter(function (r) { return r[0] !== ''; }).map(function (r) {
    const o = {};
    h.forEach(function (k, i) {
      o[k] = r[i] instanceof Date ? Utilities.formatDate(r[i], TZ, DATE_FMT) : r[i];
    });
    return o;
  });
}

/** Richtet bei Bedarf alles selbst ein: Sheet anlegen und Abgleich-Trigger installieren. */
function ensureReady_() {
  if (!PropertiesService.getScriptProperties().getProperty('SHEET_ID')) setup();
  if (ScriptApp.getProjectTriggers().length === 0) installTriggers();
}

/** Der Update-Button: richtet ein, was fehlt, gleicht Gmail und Website-Anfragen ab und meldet, was neu ist. */
function api_update() {
  assertAllowed_();
  ensureReady_();
  const before = { mails: readTable_('Mails').length, orgs: readTable_('Organisationen').length };
  syncAll();
  const after = { mails: readTable_('Mails').length, orgs: readTable_('Organisationen').length };
  return { mails: after.mails - before.mails, leads: after.orgs - before.orgs, time: Utilities.formatDate(new Date(), TZ, 'HH:mm') };
}

function api_bootstrap() {
  assertAllowed_();
  ensureReady_();
  const out = { me: Session.getEffectiveUser().getEmail(), claude: !!PropertiesService.getScriptProperties().getProperty('ANTHROPIC_API_KEY') };
  Object.keys(SCHEMA).forEach(function (n) { out[n] = readTable_(n); });
  return out;
}

function api_upsert(table, obj) {
  assertAllowed_();
  if (!SCHEMA[table]) throw new Error('Unbekannte Tabelle');
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sh = sheet_(table);
    const cols = SCHEMA[table];
    const row = cols.map(function (c) { return obj[c] === undefined || obj[c] === null ? '' : obj[c]; });
    const ids = sh.getRange(1, 1, sh.getLastRow(), 1).getValues().map(function (r) { return String(r[0]); });
    const at = ids.indexOf(String(obj.id));
    if (at > 0) sh.getRange(at + 1, 1, 1, cols.length).setValues([row]);
    else sh.getRange(sh.getLastRow() + 1, 1, 1, cols.length).setValues([row]);
    return obj;
  } finally { lock.releaseLock(); }
}

function api_remove(table, id) {
  assertAllowed_();
  if (!SCHEMA[table]) throw new Error('Unbekannte Tabelle');
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sh = sheet_(table);
    const ids = sh.getRange(1, 1, sh.getLastRow(), 1).getValues().map(function (r) { return String(r[0]); });
    for (let i = ids.length - 1; i > 0; i--) if (ids[i] === String(id)) sh.deleteRow(i + 1);
    return true;
  } finally { lock.releaseLock(); }
}

/** Löscht eine Organisation samt Personen, Deals, Aktivitäten und Mails. */
function api_removeOrg(orgId) {
  assertAllowed_();
  ['Personen', 'Deals', 'Aktivitaeten', 'Mails'].forEach(function (t) {
    const sh = sheet_(t);
    const v = sh.getDataRange().getValues();
    for (let i = v.length - 1; i > 0; i--) if (String(v[i][1]) === String(orgId)) sh.deleteRow(i + 1);
  });
  return api_remove('Organisationen', orgId);
}

function uid_() { return Utilities.getUuid().replace(/-/g, '').slice(0, 10); }
function today_() { return Utilities.formatDate(new Date(), TZ, DATE_FMT); }
function log_(orgId, art, text) {
  api_upsert('Aktivitaeten', { id: uid_(), org_id: orgId, datum: today_(), art: art, text: text });
}

/* ---------- Gmail ---------- */

/** Legt einen Entwurf in Ihrem Gmail an. Gesendet wird von Ihnen selbst. */
function api_createDraft(orgId, personId, subject, body) {
  assertAllowed_();
  const p = readTable_('Personen').filter(function (x) { return String(x.id) === String(personId); })[0];
  if (!p || !p.email) throw new Error('Keine E-Mail-Adresse hinterlegt.');
  if (String(p.nicht_kontaktieren) === 'ja') throw new Error('Person ist als "nicht kontaktieren" markiert.');
  GmailApp.createDraft(p.email, subject, body);
  log_(orgId, 'Entwurf', 'Gmail-Entwurf an ' + p.name + ': ' + subject);
  return true;
}

/** Holt die letzten Mails je Organisation aus Gmail (nur die letzten 3, der Rest bleibt in Gmail). */
function syncMails_() {
  const me = Session.getEffectiveUser().getEmail().toLowerCase();
  const people = readTable_('Personen').filter(function (p) { return p.email; });
  const known = {};
  readTable_('Mails').forEach(function (m) { known[m.msg_id] = true; });
  const byOrg = {};
  people.forEach(function (p) { (byOrg[p.org_id] = byOrg[p.org_id] || []).push(p); });
  Object.keys(byOrg).forEach(function (orgId) {
    byOrg[orgId].forEach(function (p) {
      const threads = GmailApp.search('(from:' + p.email + ' OR to:' + p.email + ') newer_than:180d', 0, 3);
      threads.forEach(function (t) {
        t.getMessages().slice(-3).forEach(function (m) {
          const id = m.getId();
          if (known[id]) return;
          known[id] = true;
          const from = (m.getFrom() || '').toLowerCase();
          const dir = from.indexOf(me) >= 0 ? 'out' : 'in';
          const d = m.getDate();
          api_upsert('Mails', {
            id: uid_(), org_id: orgId, person_id: p.id, richtung: dir,
            datum: Utilities.formatDate(d, TZ, DATE_FMT), zeit: Utilities.formatDate(d, TZ, 'HH:mm'),
            betreff: m.getSubject(), text: cleanBody_(m.getPlainBody()), msg_id: id
          });
          if (dir === 'in') log_(orgId, 'Mail', 'Antwort von ' + p.name + ': ' + m.getSubject());
        });
      });
    });
  });
}

function cleanBody_(txt) {
  let t = String(txt || '').replace(/\r/g, '');
  const cut = t.search(/\n(Am .{5,80} schrieb|On .{5,80} wrote:|-----Original|Von: )/);
  if (cut > 0) t = t.slice(0, cut);
  t = t.replace(/\n>.*/g, '').replace(/\n{3,}/g, '\n\n').trim();
  return t.slice(0, 900);
}

function api_syncNow() { assertAllowed_(); syncAll(); return true; }

/** Liest neue Anfragen aus dem Website-Kontaktformular (Mails "Neue Kontaktanfrage ...") und legt Leads an. */
function importWebsiteLeads_() {
  const label = GmailApp.getUserLabelByName('CRM-importiert') || GmailApp.createLabel('CRM-importiert');
  const threads = GmailApp.search('subject:"Neue Kontaktanfrage" -label:CRM-importiert newer_than:60d', 0, 20);
  threads.forEach(function (t) {
    t.getMessages().forEach(function (m) {
      const body = m.getPlainBody();
      const get = function (key) {
        const r = new RegExp(key + ':\\s*(.*)');
        const x = body.match(r);
        return x ? x[1].trim() : '';
      };
      const name = get('Name'), email = get('E-Mail'), role = get('Funktion / Organisation'), topic = get('Themenbereich');
      const ctx = (body.split('Organisatorischer Kontext:')[1] || '').trim();
      if (!name || !email) return;
      let orgName = role, fn = '';
      if (role.indexOf(',') > 0) { fn = role.slice(0, role.lastIndexOf(',')).trim(); orgName = role.slice(role.lastIndexOf(',') + 1).trim(); }
      if (!orgName || orgName === '—') orgName = name + ' (Anfrage)';
      const oid = uid_(), pid = uid_();
      api_upsert('Organisationen', {
        id: oid, name: orgName, branche: '', status: 'lead', groesse: '', land: 'AT', phase: 'antwort', passung: 70,
        naechster_schritt: 'Antwort an ' + name + ' senden', faellig: 'heute',
        stand: 'Anfrage über das Website-Formular' + (topic && topic !== '—' ? ' zum Thema ' + topic : '') + '.', notiz: ctx, erstellt: today_()
      });
      api_upsert('Personen', {
        id: pid, org_id: oid, name: name, funktion: fn, bereich: '', rolle: 'fachlich', haltung: 'pro', haupt: 'ja',
        email: email, einwilligung: 'ja', nicht_kontaktieren: 'nein', anrede: '', letzter_kontakt: today_()
      });
      const d = m.getDate();
      api_upsert('Mails', {
        id: uid_(), org_id: oid, person_id: pid, richtung: 'in', datum: Utilities.formatDate(d, TZ, DATE_FMT),
        zeit: Utilities.formatDate(d, TZ, 'HH:mm'), betreff: 'Kontaktanfrage' + (topic && topic !== '—' ? ': ' + topic : ''),
        text: ctx.slice(0, 900), msg_id: 'web-' + m.getId()
      });
      log_(oid, 'Anfrage', 'Kontaktformular der Website: ' + name);
    });
    t.addLabel(label);
  });
}

/* ---------- Claude (optional) ---------- */

/**
 * Schreibt einen Mailentwurf mit Claude. Braucht den Script-Parameter ANTHROPIC_API_KEY
 * (Projekteinstellungen > Skripteigenschaften). Ohne Schlüssel nutzt die Oberfläche eine Vorlage.
 */
function api_claudeDraft(orgId, personId, kind, productName) {
  assertAllowed_();
  const key = PropertiesService.getScriptProperties().getProperty('ANTHROPIC_API_KEY');
  if (!key) throw new Error('ANTHROPIC_API_KEY ist nicht gesetzt.');
  const org = readTable_('Organisationen').filter(function (o) { return String(o.id) === String(orgId); })[0];
  const p = readTable_('Personen').filter(function (x) { return String(x.id) === String(personId); })[0];
  const mails = readTable_('Mails').filter(function (m) { return String(m.org_id) === String(orgId); }).slice(-3);
  const prompt = 'Du schreibst für Alin Kalam (CETL Institute, Wien) eine kurze, persönliche Mail auf Deutsch. ' +
    'CETL bietet Executional Learning: maßgeschneiderte KI- und Datenkompetenz, die mit einem konkreten Anwendungsfall endet. ' +
    'Ton: respektvoll, konkret, ohne Marketingfloskeln, höchstens 120 Wörter, mit einer klaren Frage am Ende. ' +
    'Gib nur den Mailtext zurück, ohne Betreff.\n\n' +
    'Empfänger: ' + p.name + ', ' + p.funktion + ', ' + org.name + '\nAnlass (' + kind + '): ' + org.stand +
    '\nProdukt-Idee: ' + productName + '\nBisherige Mails: ' + JSON.stringify(mails.map(function (m) { return m.richtung + ': ' + m.text; }));
  const res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', {
    method: 'post', contentType: 'application/json', muteHttpExceptions: true,
    headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
    payload: JSON.stringify({ model: 'claude-sonnet-5-5', max_tokens: 600, messages: [{ role: 'user', content: prompt }] })
  });
  const j = JSON.parse(res.getContentText());
  if (!j.content) throw new Error((j.error && j.error.message) || 'Claude hat nicht geantwortet.');
  return j.content[0].text;
}

/* ---------- Beispieldaten ---------- */

function api_seedDemo() {
  assertAllowed_();
  const t = today_();
  api_upsert('Organisationen', { id: 'demo-o1', name: 'Alpenbank Austria (Beispiel)', branche: 'Banking', status: 'kunde', groesse: '3.200 Mitarbeitende', land: 'AT', stand: 'Foundation läuft gut, Vertiefung für Führungskräfte ist Thema.', naechster_schritt: 'Terminvorschlag senden', faellig: 'heute', v_status: 'laufend', v_art: 'Rahmenvertrag', v_seit: '09.2026', v_bis: '31.12.2027', v_volumen: '48.000 € gewonnen', erstellt: t });
  api_upsert('Organisationen', { id: 'demo-o2', name: 'Donau Versicherung (Beispiel)', branche: 'Versicherung', status: 'interessent', groesse: '1.100 Mitarbeitende', land: 'AT', phase: 'neu', passung: 74, stand: 'Noch nicht kontaktiert.', naechster_schritt: 'Erstansprache', faellig: 'heute', erstellt: t });
  api_upsert('Personen', { id: 'demo-p1', org_id: 'demo-o1', name: 'Dr. Lena Brandt', funktion: 'Leiterin Personalentwicklung', bereich: 'Human Resources', rolle: 'budget', haltung: 'pro', haupt: 'ja', email: 'l.brandt@alpenbank.example', einwilligung: 'ja', nicht_kontaktieren: 'nein', anrede: 'f' });
  api_upsert('Personen', { id: 'demo-p2', org_id: 'demo-o1', name: 'Markus Fellner', funktion: 'Chief Data Officer', bereich: 'Data & Analytics', rolle: 'entscheider', haltung: 'neutral', haupt: 'nein', email: 'm.fellner@alpenbank.example', einwilligung: 'offen', nicht_kontaktieren: 'nein', anrede: 'm' });
  api_upsert('Personen', { id: 'demo-p3', org_id: 'demo-o2', name: 'Sabine Hofer', funktion: 'Head of Learning & Development', bereich: 'Personal', rolle: 'champion', haltung: 'pro', haupt: 'ja', email: 's.hofer@donau.example', einwilligung: 'offen', nicht_kontaktieren: 'nein', anrede: 'f' });
  api_upsert('Deals', { id: 'demo-d1', org_id: 'demo-o1', produkt_id: 'p1', phase: 3, wert: 48000 });
  api_upsert('Mails', { id: 'demo-m1', org_id: 'demo-o1', person_id: 'demo-p1', richtung: 'in', datum: t, zeit: '09:12', betreff: 'Re: Vertiefung', text: 'Gerne im November, schicken Sie uns bitte einen Terminvorschlag.', msg_id: 'demo-m1' });
  api_upsert('Speaker', { id: 'demo-s1', name: 'Dr. Anna Weiss (Beispiel)', branche: 'Bildung & Forschung', unternehmen: 'Hochschule', hauptfach: 'Künstliche Intelligenz (KI)', fachgebiete: 'AI Governance, Data Literacy', themen: 'KI-Kompetenz im Unternehmen', sprachen: 'Deutsch & Englisch', honorar: 220, abrechnung: 'Stundensatz', zahlungsart: 'Vertrag / Rahmenvereinbarung', status: 'Verfügbar', typ: 'Lektor', funktion: 'Professorin für Wirtschaftsinformatik', vertrag: 'rahmen', vertrag_info: 'seit 03/2025', produkte: 'p1;p2', anmerkungen: 'Sehr gute Rückmeldungen im Pilot.' });
  return true;
}

function api_removeDemo() {
  assertAllowed_();
  Object.keys(SCHEMA).forEach(function (t) {
    const sh = sheet_(t);
    const v = sh.getDataRange().getValues();
    for (let i = v.length - 1; i > 0; i--) if (String(v[i][0]).indexOf('demo-') === 0) sh.deleteRow(i + 1);
  });
  return true;
}

/** Importiert die vorbereitete Lektoren-Liste (siehe Lecturers.gs) in einem Schritt. Vorhandene Namen werden nicht überschrieben. */
function api_seedLecturers() {
  assertAllowed_();
  ensureReady_();
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const sh = sheet_('Speaker');
    const cols = SCHEMA.Speaker;
    const have = {};
    readTable_('Speaker').forEach(function (r) { have[String(r.name).trim().toLowerCase()] = true; });
    const rows = [];
    LECTURERS.forEach(function (l, i) {
      const key = l.name.trim().toLowerCase();
      if (have[key]) return;
      have[key] = true;
      const row = { id: 'l-' + ('000' + (i + 1)).slice(-3), typ: 'Lektor', vertrag: 'keiner', honorar: '' };
      cols.forEach(function (k) { if (l[k] !== undefined && k !== 'id') row[k] = l[k]; });
      rows.push(cols.map(function (k) { return row[k] === undefined || row[k] === null ? '' : row[k]; }));
    });
    if (rows.length) sh.getRange(sh.getLastRow() + 1, 1, rows.length, cols.length).setValues(rows);
    return rows.length;
  } finally { lock.releaseLock(); }
}
