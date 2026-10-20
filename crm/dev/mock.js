/* Lokaler Ersatz für google.script.run, nur für die Vorschau im Browser. */
(function () {
  const T = {
    Organisationen: [], Personen: [], Deals: [], Aktivitaeten: [], Mails: [], Speaker: [], Vorschlaege: [],
    Produkte: [
      ['p1','Learning','Foundation','KI- und Datengrundlage mit praktischer Befähigung'],
      ['p2','Learning','Customized','Foundation plus rollenbasierte Vertiefung'],
      ['p3','Learning','Embedded Engineering','Eingebettete Aktivierung für messbaren Fortschritt'],
      ['p4','Learning','Community Package','Co-Creation für KI, Daten und Innovation'],
      ['p5','Assessment','Assessment Foundation','Von realer Umsetzung zur Assessment-Praxis'],
      ['p6','Assessment','Capability Audit','Unabhängige, entscheidungsreife Kompetenzeinsicht'],
      ['p8','Think Tank','Executive Briefing','Aktuelle Analyse für Vorstand und Führungskreis']
    ].map(function (r) { return { id: r[0], gruppe: r[1], name: r[2], beschreibung: r[3] }; })
  };
  const today = new Date().toLocaleDateString('de-AT', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const api = {
    api_bootstrap: function () { return Object.assign({ me: 'alinkalam@cetl.institute', claude: true }, JSON.parse(JSON.stringify(T))); },
    api_upsert: function (t, o) { const a = T[t]; const i = a.findIndex(function (x) { return String(x.id) === String(o.id); }); if (i >= 0) a[i] = o; else a.push(o); return o; },
    api_remove: function (t, id) { T[t] = T[t].filter(function (x) { return String(x.id) !== String(id); }); return true; },
    api_removeOrg: function (id) { ['Personen', 'Deals', 'Aktivitaeten', 'Mails'].forEach(function (t) { T[t] = T[t].filter(function (x) { return String(x.org_id) !== String(id); }); }); T.Organisationen = T.Organisationen.filter(function (x) { return String(x.id) !== String(id); }); return true; },
    api_createDraft: function () { return true; },
    api_syncNow: function () { return true; },
    api_claudeDraft: function (o, p, k, prod) { return 'Guten Tag,\n\n(Entwurf von Claude für ' + prod + ')\n\nHerzliche Grüße\nAlin Kalam'; },
    api_seedDemo: function () {
      T.Organisationen.push(
        { id: 'demo-o1', name: 'Alpenbank Austria (Beispiel)', branche: 'Banking', status: 'kunde', groesse: '3.200 Mitarbeitende', land: 'AT', stand: 'Foundation läuft gut.', naechster_schritt: 'Terminvorschlag senden', faellig: 'heute', v_status: 'laufend', v_art: 'Rahmenvertrag', v_seit: '09.2026', v_bis: '31.12.2027', v_volumen: '48.000 € gewonnen', erstellt: today },
        { id: 'demo-o2', name: 'Donau Versicherung (Beispiel)', branche: 'Versicherung', status: 'interessent', groesse: '1.100 Mitarbeitende', land: 'AT', phase: 'neu', passung: 74, stand: 'Noch nicht kontaktiert.', naechster_schritt: 'Erstansprache', faellig: 'heute', erstellt: today });
      T.Personen.push(
        { id: 'demo-p1', org_id: 'demo-o1', name: 'Dr. Lena Brandt', funktion: 'Leiterin Personalentwicklung', bereich: 'Human Resources', rolle: 'budget', haltung: 'pro', haupt: 'ja', email: 'l.brandt@alpenbank.example', einwilligung: 'ja', nicht_kontaktieren: 'nein', anrede: 'f' },
        { id: 'demo-p3', org_id: 'demo-o2', name: 'Sabine Hofer', funktion: 'Head of Learning & Development', bereich: 'Personal', rolle: 'champion', haltung: 'pro', haupt: 'ja', email: 's.hofer@donau.example', einwilligung: 'offen', nicht_kontaktieren: 'nein', anrede: 'f' });
      T.Deals.push({ id: 'demo-d1', org_id: 'demo-o1', produkt_id: 'p1', phase: 3, wert: 48000 });
      T.Mails.push({ id: 'demo-m1', org_id: 'demo-o1', person_id: 'demo-p1', richtung: 'in', datum: today, zeit: '09:12', betreff: 'Re: Vertiefung', text: 'Gerne im November, schicken Sie uns bitte einen Terminvorschlag.', msg_id: 'demo-m1' });
      T.Speaker.push({ id: 'demo-s1', name: 'Dr. Anna Weiss (Beispiel)', typ: 'Lektor', funktion: 'Professorin', organisation: 'Hochschule', vertrag: 'rahmen', vertrag_info: 'seit 03/2025', stundensatz: 220, gebiete: 'AI Governance & AI Act;Data Literacy', sprachen: 'DE, EN', verfuegbar: 'Auf Anfrage', produkte: 'p1;p2', freitext: 'Sehr gute Rückmeldungen im Pilot.', einsaetze: '' });
      return true;
    },
    api_removeDemo: function () { Object.keys(T).forEach(function (k) { T[k] = T[k].filter(function (x) { return String(x.id).indexOf('demo-') !== 0; }); }); return true; }
  };
  function runner(ok, no) {
    return new Proxy({}, { get: function (_, fn) { return function () { const a = arguments; setTimeout(function () { try { ok && ok(JSON.parse(JSON.stringify(api[fn].apply(null, a)))); } catch (e) { no && no(e); } }, 30); }; } });
  }
  window.google = { script: { run: { withSuccessHandler: function (ok) { return { withFailureHandler: function (no) { return runner(ok, no); } }; } } } };
  window.__T = T;
})();
