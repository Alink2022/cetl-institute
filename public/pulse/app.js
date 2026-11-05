// CETL Enterprise AI Pulse — game engine
import { SURVEY, GEO, allQuestions } from '/pulse/survey.js';

/* ---------------- sprite ---------------- */
const FRAMES = {
  f1: [
    '................................',
    '................................',
    '......BBBBBBBBBBBBBBBBBB........',
    '....BBBBBBBBBBBBBBBBBBBBBB......',
    '...BBBBBBDDBBBBBBBBBBBBBBBBB....',
    '..BBBBBBDDEDBBBBBBBBBBBBBBBBB...',
    '..BBWKBDDEEEDBBBBBBBBBBBBBBBBB..',
    '..BBKKBDEEEEDBBBBBBBBBBBBBBBBBD.',
    '..BBBBBDEEEEDBBBBBBBBBBBBBBBBBD.',
    '..BBBBBDEEEEDBBBBBBBBBBBBBBBBBD.',
    '..BBBBBDDEEEDBBBBBBBBBBBBBBBBBD.',
    '..BBBWBBDDEDBBBBBBBBBBBBBBBBBBDD',
    '...BBWWBBDDBBBBBBBBBBBBBBBBBBB.D',
    '...BBBBBBBBBBBBBBBBBBBBBBBBBB...',
    '...BBBBBBBDDDDDDDDDDDDDDDDDD....',
    '..BB.....BBB.BBBBBBBBBBBBBBB....',
    '..BB.....BBB.BBBBBBBBBBB.BBB....',
    '..BB.....BBB.BBB.....BBB.BBB....',
    '..BB.....BBB.BBB.....BBB.BBB....',
    '.BB......BBB.BBB.....BBB.BBB....',
    'BBB......DDD.DDD.....DDD.DDD....',
    '................................',
  ],
  f2: [
    '................................',
    '................................',
    '......BBBBBBBBBBBBBBBBBB........',
    '....BBBBBBBBBBBBBBBBBBBBBB......',
    '...BBBBBBDDBBBBBBBBBBBBBBBBB....',
    '..BBBBBBDDEDBBBBBBBBBBBBBBBBB...',
    '..BBWKBDDEEEDBBBBBBBBBBBBBBBBB..',
    '..BBKKBDEEEEDBBBBBBBBBBBBBBBBBD.',
    '..BBBBBDEEEEDBBBBBBBBBBBBBBBBBD.',
    '..BBBBBDEEEEDBBBBBBBBBBBBBBBBBD.',
    '..BBBBBDDEEEDBBBBBBBBBBBBBBBBBD.',
    '..BBBWBBDDEDBBBBBBBBBBBBBBBBBBDD',
    '...BBWWBBDDBBBBBBBBBBBBBBBBBBB.D',
    '...BBBBBBBBBBBBBBBBBBBBBBBBBB...',
    '...BBBBBBBDDDDDDDDDDDDDDDDDD....',
    '..BB......BBBBBBBBBBBBBBBBB.....',
    '..BB......BBBBB.BBBBBBBBBBB.....',
    '..BB......BBBBB.......BBBBB.....',
    '..BB......BBBBB.......BBBBB.....',
    '.BB.......BBBBB.......BBBBB.....',
    'BBB.......DDDDD.......DDDDD.....',
    '................................',
  ],
};
const PAL = { B: 'var(--sp-b)', D: 'var(--sp-d)', E: 'var(--sp-e)', W: 'var(--sp-w)', K: 'var(--sp-k)' };

function spriteSVG(frame, px, cls = '') {
  const h = frame.length, w = frame[0].length;
  let rects = '';
  for (let y = 0; y < h; y++) {
    let x = 0;
    while (x < w) {
      const c = frame[y][x];
      if (c === '.') { x++; continue; }
      let x2 = x;
      while (x2 < w && frame[y][x2] === c) x2++;
      rects += `<rect x="${x}" y="${y}" width="${x2 - x}" height="1" fill="${PAL[c]}"/>`;
      x = x2;
    }
  }
  return `<svg class="sprite ${cls}" viewBox="0 0 ${w} ${h}" width="${w * px}" height="${h * px}" shape-rendering="crispEdges" aria-hidden="true">${rects}</svg>`;
}

/* ---------------- sound ---------------- */
const Beep = {
  ctx: null, on: false,
  init() { if (!this.ctx) { try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { this.ctx = null; } } if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); },
  tone(freq, dur, type = 'square', vol = 0.05, when = 0) {
    if (!this.on || !this.ctx) return;
    const t = this.ctx.currentTime + when;
    const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.ctx.destination); o.start(t); o.stop(t + dur + 0.02);
  },
  move() { this.tone(1400, 0.04); },
  select() { this.tone(660, 0.07); this.tone(990, 0.09, 'square', 0.05, 0.07); },
  level() { [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.12, 'square', 0.05, i * 0.09)); },
  boss() { this.tone(110, 0.35, 'sawtooth', 0.06); this.tone(82, 0.5, 'sawtooth', 0.06, 0.3); },
  clear() { [784, 784, 784, 1047, 1319].forEach((f, i) => this.tone(f, i === 4 ? 0.4 : 0.1, 'square', 0.05, i * 0.11)); },
  error() { this.tone(160, 0.2, 'square', 0.05); },
};

/* ---------------- state ---------------- */
const QUESTIONS = allQuestions(SURVEY);
const QMAP = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));
const steps = [];
steps.push({ t: 'player' });
SURVEY.levels.forEach((lv, i) => lv.questions.forEach(q => steps.push({ t: 'q', q, lv, n: i + 1 })));
steps.push({ t: 'q', q: SURVEY.boss.question, lv: SURVEY.boss, boss: true });
steps.push({ t: 'free' });
steps.push({ t: 'card' });
const PATH_QIDS = [SURVEY.player.id, ...SURVEY.levels.flatMap(l => l.questions.map(q => q.id)), SURVEY.boss.question.id];

const state = {
  lang: 'en', mode: 'checking', screen: 'title', step: 0, cursor: 0, agree: false, consent: false,
  answers: {}, texts: { elephant: '', unasked: '' }, card: { sector: '', size: '', email: '' },
  startedAt: 0, finishedAt: 0, submitted: null, error: '', sending: false,
  country: null, countrySrc: null, geo: null, pickingCountry: false, resultsCountry: '', factOpen: {}, lastLevel: null,
};

/* ---------------- country ---------------- */
function tzCountry() {
  let tz = '';
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch { /* ignore */ }
  if (!tz) return null;
  if (GEO.tz[tz]) return GEO.tz[tz];
  for (const [p, c] of Object.entries(GEO.tzPrefix)) if (tz.startsWith(p)) return c;
  return null;
}
function localeCountry() {
  for (const l of (navigator.languages || [navigator.language || ''])) {
    const m = /^[a-z]{2,3}[-_]([A-Za-z]{2})\b/.exec(l || '');
    if (m && GEO.codes.includes(m[1].toUpperCase())) return m[1].toUpperCase();
  }
  return null;
}
// Order of trust: the respondent's own choice, the proxy's network location, the device time zone, the browser locale.
function guessCountry() {
  const manual = store.get('cetl-pulse-country');
  if (manual && GEO.codes.includes(manual)) return { country: manual, src: 'manual' };
  if (state.geo) return { country: state.geo, src: 'geo' };
  const tz = tzCountry(); if (tz) return { country: tz, src: 'tz' };
  const lc = localeCountry(); if (lc) return { country: lc, src: 'locale' };
  return { country: null, src: null };
}
function applyCountryGuess() { const g = guessCountry(); state.country = g.country; state.countrySrc = g.src; }
let displayNames = {};
function countryName(code, lang = state.lang) {
  if (!code) return T().world;
  const key = lang + ':' + code;
  if (displayNames[key]) return displayNames[key];
  let name = '';
  try { name = new Intl.DisplayNames([lang], { type: 'region' }).of(code) || ''; } catch { /* ignore */ }
  if (!name || name === code) name = GEO.names[code] || code;
  return (displayNames[key] = name);
}
function countrySelectHTML(id, current, { blank = false } = {}) {
  const list = GEO.codes.map(c => [c, countryName(c)]).sort((a, b) => a[1].localeCompare(b[1], state.lang));
  return `<select id="${id}">${blank ? `<option value="">${esc(T().allCountries)}</option>` : `<option value="">${esc(T().choose)}</option>`}${list.map(([c, n]) => `<option value="${c}" ${c === current ? 'selected' : ''}>${esc(n)} (${c})</option>`).join('')}</select>`;
}
function imprintHTML() {
  return `<address class="imprint">${SURVEY.imprint.map(l => `<span>${esc(l)}</span>`).join('')}</address>`;
}
const T = () => SURVEY.ui[state.lang];
const L = obj => (obj && typeof obj === 'object' && (obj[state.lang] ?? obj.en)) ?? '';
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
};

/* ---------------- storage adapter ---------------- */
const API = {
  tk: '',
  async health() {
    try {
      const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 4000);
      const r = await fetch('/api/survey', { cache: 'no-store', signal: ctl.signal });
      clearTimeout(to);
      if (!r.ok) return null;
      const j = await r.json();
      if (!j || !j.tk) return null;
      this.tk = j.tk;
      return { ok: true, geo: j.geo || null };
    } catch { return null; }
  },
  async submit(payload) {
    const r = await fetch('/api/survey', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...payload, tk: this.tk, variant: '8bit' }) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(j.error || ('HTTP ' + r.status));
    return { ok: true };
  },
  async stats(country) {
    const r = await fetch('/api/survey/stats' + (country ? `?country=${encodeURIComponent(country)}` : ''), { cache: 'no-store' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  },
};
// Demo mode keeps runs in this browser only, so the design can be reviewed end to end.
const demo = {
  key: 'cetl-pulse-demo-runs',
  load() { try { return JSON.parse(store.get(this.key) || '[]'); } catch { return []; } },
  save(run) { const runs = this.load(); runs.push(run); store.set(this.key, JSON.stringify(runs.slice(-50))); return runs.length; },
  stats(country) {
    const all = this.load(); const questions = {}; const countries = {};
    for (const run of all) { const c = run.country || '--'; countries[c] = (countries[c] || 0) + 1; }
    const runs = country ? all.filter(r => (r.country || '--') === country) : all;
    for (const run of runs) for (const [qid, v] of Object.entries(run.answers || {})) {
      const vals = Array.isArray(v) ? v : [v]; if (!vals.length || !vals[0]) continue;
      const q = questions[qid] ||= { n: 0, counts: {} }; q.n++;
      for (const o of vals) q.counts[o] = (q.counts[o] || 0) + 1;
    }
    return { n: runs.length, questions, countries };
  },
};

/* ---------------- rendering ---------------- */
const stage = document.getElementById('stage');
let typer = null;

function hud() {
  const t = T();
  const answered = PATH_QIDS.filter(id => state.answers[id] && (!Array.isArray(state.answers[id]) || state.answers[id].length)).length;
  let curIdx = -1;
  if (typeof state.screen === 'number') {
    const s = steps[state.screen];
    if (s.t === 'player') curIdx = 0;
    else if (s.t === 'q') curIdx = PATH_QIDS.indexOf(s.q.id);
  }
  const prog = document.getElementById('prog');
  prog.innerHTML = PATH_QIDS.map((id, i) => {
    const done = state.answers[id] && (!Array.isArray(state.answers[id]) || state.answers[id].length);
    return `<i class="${done ? 'done' : ''}${i === curIdx && !done ? ' cur' : ''}"></i>`;
  }).join('');
  let lvl = '';
  if (typeof state.screen === 'number') {
    const s = steps[state.screen];
    if (s.boss || s.t === 'free') lvl = t.bossStage;
    else if (s.t === 'card') lvl = t.stageClear;
    else if (s.n) lvl = `${t.level} ${s.n}/${SURVEY.levels.length}`;
    else lvl = t.playerSelect;
  } else if (state.screen === 'results') lvl = t.resultsTitle;
  document.getElementById('hud-lvl').textContent = lvl;
  const tag = document.getElementById('mode-tag');
  tag.className = 'tag ' + (state.mode === 'live' ? 'live' : state.mode === 'demo' ? 'demo' : '');
  tag.textContent = state.mode === 'live' ? t.liveTag : state.mode === 'demo' ? t.demoTag : '...';
  tag.title = state.mode === 'demo' ? t.thanksDemo : '';
  const ctag = document.getElementById('country-tag');
  ctag.textContent = state.country || '--';
  ctag.title = state.country ? `${t.loggedFor} ${countryName(state.country)}` : t.chooseCountry;
  ctag.classList.toggle('home', state.country === GEO.home);
  document.getElementById('lang-en').setAttribute('aria-pressed', String(state.lang === 'en'));
  document.getElementById('lang-de').setAttribute('aria-pressed', String(state.lang === 'de'));
  const snd = document.getElementById('snd');
  snd.setAttribute('aria-pressed', String(Beep.on));
  snd.innerHTML = '&#9834;<span class="txt"> ' + (Beep.on ? 'ON' : 'OFF') + '</span>';
  snd.setAttribute('aria-label', Beep.on ? t.soundOn : t.soundOff);
}

function render(opts = {}) {
  if (typer) { clearTimeout(typer); typer = null; }
  const t = T();
  let html = '';
  const s = typeof state.screen === 'number' ? steps[state.screen] : null;
  if (state.screen === 'title') html = titleHTML(t);
  else if (state.screen === 'results') html = resultsShellHTML(t);
  else if (state.screen === 'done') html = doneHTML(t);
  else if (s.t === 'player') html = questionHTML(t, SURVEY.player, { eyebrow: t.playerSelect, sub: t.chooseRole });
  else if (s.t === 'q') html = questionHTML(t, s.q, { eyebrow: s.boss ? `${t.bossStage} · ${L(s.lv.title)}` : `${t.level} ${s.n} · ${L(s.lv.title)}`, boss: s.boss });
  else if (s.t === 'free') html = freeHTML(t);
  else if (s.t === 'card') html = cardHTML(t);
  stage.innerHTML = `<section class="screen stack" data-screen="${esc(String(state.screen))}">${html}</section>`;
  hud();
  afterRender(opts);
}

function titleHTML(t) {
  const c = state.country;
  const home = c === GEO.home;
  const edition = home ? t.edition : c ? `${countryName(c).toUpperCase()} 2026` : `${t.world} 2026`;
  const msg = home ? t.countryAT : c ? t.countryOther.replace('{country}', countryName(c)) : t.countryUnknown;
  const how = state.countrySrc === 'geo' ? t.countryHowGeo : state.countrySrc === 'manual' ? '' : c ? t.countryHow : '';
  const picker = state.pickingCountry || !c;
  return `
    <div class="title stack">
      <div class="logo">
        <h1>${esc(t.brand)}</h1>
        <div class="sub">${esc(t.product)}</div>
        <div class="ed" id="edition">${esc(edition)}</div>
      </div>
      <div class="road" aria-hidden="true"><div class="walker" id="walker">${spriteSVG(FRAMES.f1, walkerPx())}</div></div>
      <p class="lead">${esc(t.tagline)}</p>
      <div class="pbox ${home ? 'cyan' : 'yellow'} region" id="region">
        <div class="row" style="align-items:flex-start">
          <div class="stack" style="gap:6px;flex:1;min-width:0">
            <div class="eyebrow ${home ? '' : 'y'}">${esc(t.region)} <span class="code">${esc(c || '--')}</span></div>
            <div class="rname">${esc(c ? countryName(c) : t.chooseCountry)}</div>
            <p style="font-size:21px">${esc(msg)}</p>
            ${how ? `<div class="small">${esc(how)}</div>` : ''}
          </div>
          ${picker ? '' : `<button type="button" class="btn ghost" id="change-country" style="padding-left:12px">${esc(t.change)}</button>`}
        </div>
        ${picker ? `<label class="f" for="country-select" style="margin-top:14px"><span class="l">${esc(t.chooseCountry)}</span>${countrySelectHTML('country-select', c)}</label>` : ''}
      </div>
      <div class="small">${esc(t.meta)}</div>
      <div class="row">
        <button type="button" class="btn primary blink" id="start" ${c ? '' : 'disabled'}>${esc(t.pressStart)}</button>
        <span class="small">${esc(t.continueHint)}</span>
      </div>
      <p class="muted" style="font-size:20px">${esc(t.privacy)}</p>
      <footer class="small"><span>${esc(t.footer)}</span><span>v${esc(SURVEY.version)}</span></footer>
      ${imprintHTML()}
    </div>`;
}

function questionHTML(t, q, { eyebrow, sub, boss }) {
  const multi = q.type === 'multi';
  const sel = state.answers[q.id];
  const selected = multi ? (sel || []) : (sel ? [sel] : []);
  const opts = q.options.map((o, i) => `
    <li><button type="button" class="opt${selected.includes(o.id) ? ' selected' : ''}" role="${multi ? 'checkbox' : 'radio'}" aria-checked="${selected.includes(o.id)}" data-opt="${esc(o.id)}" id="opt-${esc(q.id)}-${esc(o.id)}">
      <span class="cur" aria-hidden="true">&#9654;</span>
      <span>${multi ? '<span class="box" aria-hidden="true"></span>' : ''}${esc(L(o.label))}</span>
      ${i < 9 ? `<kbd aria-hidden="true">${i + 1}</kbd>` : '<span></span>'}
    </button></li>`).join('');
  const isFirst = state.screen === 0;
  const open = !!state.factOpen[q.id];
  const fact = q.tip ? `<button type="button" class="dyk" id="dyk" aria-expanded="${open}" aria-controls="fact">${esc(t.didYouKnow)} ?</button>` : '';
  return `
    <div class="q-head"><div class="eyebrow ${boss ? 'm' : ''}">${esc(eyebrow)}</div>${fact}</div>
    ${sub ? `<h2>${esc(sub)}</h2>` : ''}
    ${boss ? `<div class="boss-wrap" style="padding:0 0 6px">${spriteSVG(FRAMES.f1, 4)}</div>` : ''}
    <div class="pbox ${boss ? 'yellow' : ''}">
      <p class="q-text" id="qtext" data-text="${esc(L(q.text))}"></p>
      ${multi ? `<div class="q-sub" id="pickmax" style="margin-top:8px">${esc(t.pickMax)}</div>` : ''}
      ${q.tip ? `<div class="fact" id="fact" ${open ? '' : 'hidden'}><div class="eyebrow y">${esc(t.didYouKnow)}</div><p class="ft">${esc(L(q.tip))}</p><div class="small">${esc(t.source)}: ${esc(q.tip.src)}</div></div>` : ''}
    </div>
    <ul class="opts" id="opts" data-q="${esc(q.id)}" role="${multi ? 'group' : 'radiogroup'}" aria-labelledby="qtext" hidden>${opts}</ul>
    <div class="row" id="qnav" hidden>
      ${isFirst ? '' : `<button type="button" class="btn ghost" id="back">${esc(t.back)}</button>`}
      <span class="spacer"></span>
      ${multi ? `<button type="button" class="btn primary" id="confirm" ${selected.length ? '' : 'disabled'}>${esc(t.confirm)}</button>` : ''}
    </div>
    <div class="q-help" id="keys">${esc(t.keysHint)}</div>`;
}

function freeHTML(t) {
  const b = SURVEY.boss;
  const fields = b.freeText.map(f => `
    <label class="f" for="ft-${esc(f.id)}">
      <span class="l">${esc(L(f.label))}</span>
      <textarea id="ft-${esc(f.id)}" data-ft="${esc(f.id)}" maxlength="${f.max}" placeholder="${esc(L(f.placeholder))}">${esc(state.texts[f.id] || '')}</textarea>
      <span class="counter" data-count="${esc(f.id)}">${(state.texts[f.id] || '').length}/${f.max} ${esc(t.chars)}</span>
    </label>`).join('');
  return `
    <div class="eyebrow m">${esc(t.bossStage)} · ${esc(L(b.title))} · ${esc(t.optional)}</div>
    <div class="boss-wrap">${spriteSVG(FRAMES.f1, 5)}</div>
    <div class="pbox yellow stack">${fields}<div class="small">${esc(t.freeTextHint)}</div></div>
    <div class="row">
      <button type="button" class="btn ghost" id="back">${esc(t.back)}</button>
      <span class="spacer"></span>
      <button type="button" class="btn primary" id="finish">${esc(t.finish)}</button>
    </div>`;
}

function cardHTML(t) {
  const sel = (q, cur) => `<select id="card-${esc(q.id)}" data-card="${esc(q.id)}"><option value="">${esc(t.choose)}</option>${(q.id === 'sector' ? [...q.options].sort((x, y) => x.id === 'other' ? 1 : y.id === 'other' ? -1 : L(x.label).localeCompare(L(y.label), state.lang)) : q.options).map(o => `<option value="${esc(o.id)}" ${cur === o.id ? 'selected' : ''}>${esc(L(o.label))}</option>`).join('')}</select>`;
  const secs = fmtTime((state.finishedAt || Date.now()) - state.startedAt);
  return `
    <div class="big">${esc(t.stageClear)}</div>
    <div class="score"><span>${esc(t.time)} <b>${secs}</b></span><span>${esc(t.level)} <b>${SURVEY.levels.length}/${SURVEY.levels.length}</b></span></div>
    <div class="pbox stack">
      <div><div class="eyebrow y">${esc(t.playerCard)} · ${esc(t.optional)}</div><p class="muted" style="font-size:20px">${esc(t.playerCardHint)}</p></div>
      <label class="f" for="card-sector"><span class="l">${esc(t.sector)}</span>${sel(SURVEY.card.sector, state.card.sector)}</label>
      <label class="f" for="card-size"><span class="l">${esc(t.size)}</span>${sel(SURVEY.card.size, state.card.size)}</label>
      <label class="f" for="card-email"><span class="l">${esc(t.email)}</span><input type="email" id="card-email" data-card="email" maxlength="200" autocomplete="email" value="${esc(state.card.email)}" placeholder="name@company.at"></label>
      <label class="chk"><input type="checkbox" id="agree" ${state.agree ? 'checked' : ''}><span>${esc(t.agree)}</span></label>
      <label class="chk"><input type="checkbox" id="agreeEmail" ${state.consent ? 'checked' : ''}><span>${esc(t.agreeEmail)}</span></label>
      <altcha-widget challenge="/api/altcha" configuration='{"hideLogo":true,"hideFooter":true}' auto="onload" language="${state.lang === 'de' ? 'de' : 'en'}" name="altcha" type="checkbox"></altcha-widget>
      <input class="hp" type="text" name="hp" id="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      ${state.error ? `<div class="err" role="alert">${esc(state.error)}</div>` : ''}
    </div>
    <div class="row">
      <button type="button" class="btn ghost" id="back">${esc(t.back)}</button>
      <span class="spacer"></span>
      <button type="button" class="btn primary" id="submit" ${state.sending ? 'disabled' : ''}>${esc(state.sending ? t.sending : t.submit)}</button>
    </div>
    <p class="small">${esc(t.privacy)} <a href="/datenschutz" target="_blank" rel="noopener">${esc(t.privacyLink)}</a> · <a href="/impressum" target="_blank" rel="noopener">${esc(t.imprintLink)}</a></p>`;
}

function doneHTML(t) {
  const live = state.mode === 'live' && !!state.submitted;
  const nc = state.submitted && state.submitted.n_country;
  return `
    <div class="big">${live ? esc(t.saved) : esc(t.savedDemo)}</div>
    <div class="score"><span>${esc(t.time)} <b>${fmtTime(state.finishedAt - state.startedAt)}</b></span><span>${esc(t.loggedFor)} <b>${esc(countryName(state.country))}${nc ? ` #${nc}` : ''}</b></span></div>
    <div class="boss-wrap">${spriteSVG(FRAMES.f1, 5)}</div>
    <p class="lead ${live ? 'ok' : ''}">${live ? esc(t.thanks) : esc(t.thanksDemo)}</p>
    <div class="row">
      <button type="button" class="btn primary" id="copy">${esc(t.copyLink)}</button>
    </div>
    <footer class="small"><span>${esc(t.footer)}</span></footer>
    ${imprintHTML()}`;
}

function resultsShellHTML(t) {
  return `
    <div class="row"><div class="eyebrow">${esc(t.resultsTitle)}</div><span class="spacer"></span><a class="btn ghost" href="#">${esc(t.backToStart)}</a></div>
    <div id="results" class="stack"><p class="muted">${esc(t.loading)}…</p></div>
    ${imprintHTML()}`;
}

function resultsHTML(t, stats) {
  const countries = stats && stats.countries ? Object.entries(stats.countries).sort((a, b) => b[1] - a[1]) : [];
  const total = countries.reduce((s, [, n]) => s + n, 0);
  const filter = `<label class="f" for="results-country"><span class="l">${esc(t.country)}</span>
    <select id="results-country"><option value="">${esc(t.allCountries)} (${total})</option>${countries.map(([c, n]) => `<option value="${esc(c)}" ${state.resultsCountry === c ? 'selected' : ''}>${esc(countryName(c))} (${n})</option>`).join('')}</select></label>`;
  if (!stats || !stats.n || stats.open === false) return `<div class="pbox stack">${countries.length ? filter : ''}<p class="lead">${esc(stats && stats.open === false ? t.notYet : t.noData)}</p></div>`;
  const blocks = [];
  if (!state.resultsCountry && countries.length) {
    const max = countries[0][1];
    const bars = countries.map(([c, n]) => `<div class="bar${n === max ? ' top' : ''}"><div class="lab">${esc(countryName(c))} <span class="small">${esc(c)}</span></div><div class="pct">${Math.round(n / total * 100)}%</div><div class="track"><div class="fill" style="width:${Math.round(n / total * 100)}%"></div></div></div>`).join('');
    blocks.push(`<div class="rq"><div class="eyebrow">${esc(t.byCountry)} <span class="small">n=${total}</span></div><div class="bars">${bars}</div></div>`);
  }
  const sections = [
    { eyebrow: t.playerSelect, q: SURVEY.player },
    ...SURVEY.levels.flatMap((lv, i) => lv.questions.map(q => ({ eyebrow: `${t.level} ${i + 1} · ${L(lv.title)}`, q }))),
    { eyebrow: `${t.bossStage} · ${L(SURVEY.boss.title)}`, q: SURVEY.boss.question },
    { eyebrow: t.sector, q: { id: 'sector', text: { en: t.sector, de: t.sector }, options: SURVEY.card.sector.options } },
    { eyebrow: t.size, q: { id: 'size', text: { en: t.size, de: t.size }, options: SURVEY.card.size.options } },
  ];
  for (const sec of sections) {
    const qs = stats.questions[sec.q.id];
    if (!qs || !qs.n) continue;
    const max = Math.max(...sec.q.options.map(o => qs.counts[o.id] || 0));
    const bars = sec.q.options.map(o => {
      const c = qs.counts[o.id] || 0; const pct = Math.round((c / qs.n) * 100);
      return `<div class="bar${c === max && c > 0 ? ' top' : ''}"><div class="lab">${esc(L(o.label))}</div><div class="pct">${pct}%</div><div class="track"><div class="fill" style="width:${pct}%"></div></div></div>`;
    }).join('');
    blocks.push(`<div class="rq"><div class="eyebrow">${esc(sec.eyebrow)} <span class="small">n=${qs.n}</span></div><p class="lead">${esc(L(sec.q.text))}</p><div class="bars">${bars}</div></div>`);
  }
  return `<div class="pbox stack">
    <div class="score"><span><b>${stats.n}</b> ${esc(t.responses)}${state.resultsCountry ? ` · ${esc(countryName(state.resultsCountry))}` : ''}</span>${state.mode === 'demo' ? `<span>${esc(t.demoResults)}</span>` : ''}</div>
    ${filter}
  </div>${blocks.join('')}`;
}

function fmtTime(ms) { const s = Math.max(0, Math.round(ms / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }

/* ---------------- behaviour ---------------- */
function afterRender({ instant = false } = {}) {
  const s = typeof state.screen === 'number' ? steps[state.screen] : null;
  window.scrollTo({ top: 0 });
  if (state.screen === 'title') {
    document.getElementById('start').addEventListener('click', start);
    const chg = document.getElementById('change-country');
    if (chg) chg.addEventListener('click', () => { Beep.move(); state.pickingCountry = true; render({ instant: true }); setTimeout(() => document.getElementById('country-select')?.focus(), 50); });
    const sel = document.getElementById('country-select');
    if (sel) sel.addEventListener('change', () => {
      if (!sel.value) return;
      state.country = sel.value; state.countrySrc = 'manual'; state.pickingCountry = false;
      store.set('cetl-pulse-country', sel.value); Beep.select(); render({ instant: true });
    });
    walk();
    return;
  }
  if (state.screen === 'results') { loadResults(); return; }
  if (state.screen === 'done') {
    document.getElementById('copy').addEventListener('click', copyLink);
    return;
  }
  if (s.t === 'player' || s.t === 'q') {
    const q = s.t === 'player' ? SURVEY.player : s.q;
    // a short jingle when a new level starts, a growl for the boss
    const lvKey = s.t === 'q' ? (s.boss ? 'boss' : s.n) : 'player';
    if (!instant && state.lastLevel !== lvKey) { if (lvKey === 'boss') Beep.boss(); else if (lvKey !== 'player') Beep.level(); }
    state.lastLevel = lvKey;
    const dyk = document.getElementById('dyk');
    if (dyk) dyk.addEventListener('click', () => toggleFact(q));
    const el = document.getElementById('qtext');
    const text = el.dataset.text;
    const reveal = () => {
      el.textContent = text;
      document.getElementById('opts').hidden = false;
      document.getElementById('qnav').hidden = false;
      bindOptions(q);
    };
    if (instant || reduced()) reveal();
    else typewrite(el, text, reveal);
    el.closest('.pbox').addEventListener('click', () => { if (typer) { clearTimeout(typer); typer = null; reveal(); } });
    return;
  }
  if (s.t === 'free') {
    stage.querySelectorAll('textarea[data-ft]').forEach(ta => ta.addEventListener('input', () => {
      state.texts[ta.dataset.ft] = ta.value;
      const c = stage.querySelector(`[data-count="${ta.dataset.ft}"]`);
      const f = SURVEY.boss.freeText.find(x => x.id === ta.dataset.ft);
      c.textContent = `${ta.value.length}/${f.max} ${T().chars}`;
    }));
    document.getElementById('back').addEventListener('click', () => back());
    document.getElementById('finish').addEventListener('click', () => { state.finishedAt = Date.now(); Beep.clear(); go(state.step + 1); });
    return;
  }
  if (s.t === 'card') {
    stage.querySelectorAll('[data-card]').forEach(el => el.addEventListener('input', () => { state.card[el.dataset.card] = el.value; }));
    const ag = document.getElementById('agree'); if (ag) ag.addEventListener('change', () => { state.agree = ag.checked; });
    const ae = document.getElementById('agreeEmail'); if (ae) ae.addEventListener('change', () => { state.consent = ae.checked; });
    document.getElementById('back').addEventListener('click', () => back());
    document.getElementById('submit').addEventListener('click', submit);
  }
}

function typewrite(el, text, done) {
  let i = 0; el.innerHTML = '<span class="caret"></span>';
  const step = () => {
    i += 1 + (text.length > 90 ? 1 : 0);
    el.innerHTML = esc(text.slice(0, i)) + '<span class="caret"></span>';
    if (i < text.length) typer = setTimeout(step, 14);
    else { typer = null; setTimeout(done, 120); }
  };
  typer = setTimeout(step, 60);
}

function bindOptions(q) {
  const multi = q.type === 'multi';
  const opts = [...stage.querySelectorAll('.opt')];
  state.cursor = Math.max(0, opts.findIndex(o => o.classList.contains('selected')));
  const setFocus = (i, scroll = true) => { opts.forEach((o, j) => o.classList.toggle('focus', j === i)); state.cursor = i; if (scroll) opts[i].scrollIntoView({ block: 'nearest' }); };
  opts.forEach((o, i) => {
    o.addEventListener('mouseenter', () => { if (state.cursor !== i) { Beep.move(); setFocus(i, false); } });
    o.addEventListener('focus', () => setFocus(i, false));
    o.addEventListener('click', () => choose(q, o.dataset.opt));
  });
  const backBtn = document.getElementById('back'); if (backBtn) backBtn.addEventListener('click', () => back());
  const confirm = document.getElementById('confirm'); if (confirm) confirm.addEventListener('click', () => { if ((state.answers[q.id] || []).length) { Beep.select(); go(state.step + 1); } });
}
function back() { Beep.move(); go(Math.max(0, state.step - 1), { instant: true }); }
function toggleFact(q) {
  const panel = document.getElementById('fact'); const btn = document.getElementById('dyk');
  if (!panel || !btn) return;
  const open = !state.factOpen[q.id];
  state.factOpen[q.id] = open; panel.hidden = !open; btn.setAttribute('aria-expanded', String(open));
  Beep.move();
}

function choose(q, oid) {
  const multi = q.type === 'multi';
  if (!multi) {
    if (state._advance) return; // a choice is already on its way to the next screen
    state.answers[q.id] = oid; Beep.select();
    stage.querySelectorAll('.opt').forEach(o => { o.classList.toggle('selected', o.dataset.opt === oid); o.setAttribute('aria-checked', String(o.dataset.opt === oid)); });
    hud();
    const from = state.step;
    state._advance = setTimeout(() => { state._advance = null; if (state.step === from) go(from + 1); }, reduced() ? 60 : 260);
    return;
  }
  const opt = q.options.find(o => o.id === oid);
  let cur = [...(state.answers[q.id] || [])];
  if (cur.includes(oid)) cur = cur.filter(x => x !== oid);
  else if (opt.exclusive) cur = [oid];
  else {
    cur = cur.filter(x => !q.options.find(o => o.id === x)?.exclusive);
    if (cur.length >= (q.max || 99)) { Beep.error(); const pm = document.getElementById('pickmax'); if (pm) { pm.classList.remove('blink'); void pm.offsetWidth; pm.classList.add('blink'); setTimeout(() => pm.classList.remove('blink'), 1200); } return; }
    cur.push(oid);
  }
  state.answers[q.id] = cur; Beep.select();
  stage.querySelectorAll('.opt').forEach(o => { const on = cur.includes(o.dataset.opt); o.classList.toggle('selected', on); o.setAttribute('aria-checked', String(on)); });
  const confirm = document.getElementById('confirm'); if (confirm) confirm.disabled = !cur.length;
  hud();
}

function go(target, opts = {}) {
  if (state._advance) { clearTimeout(state._advance); state._advance = null; }
  if (typeof target === 'number') {
    if (target >= steps.length) { state.screen = 'done'; render(); return; }
    state.step = target; state.screen = target;
  } else state.screen = target;
  if (target === 'title' && location.hash) history.replaceState(null, '', location.pathname + location.search);
  render(opts);
}

function start() { if (!state.country) return; Beep.init(); Beep.select(); state.startedAt = Date.now(); state.finishedAt = 0; state.submitted = null; state.pickingCountry = false; go(0); }
function reset() { state.agree = false; state.consent = false; state.answers = {}; state.texts = { elephant: '', unasked: '' }; state.card = { sector: '', size: '', email: '' }; state.error = ''; state.submitted = null; state.step = 0; state.factOpen = {}; state.lastLevel = null; }

async function submit() {
  if (state.sending) return;
  const hp = document.getElementById('hp');
  const altcha = String(document.querySelector('input[name="altcha"]')?.value || '');
  const tt = T();
  const fail = (msg) => { state.error = msg; Beep.error(); render({ instant: true }); };
  if (!state.agree) return fail(tt.errAgree);
  if ((state.card.email || '').trim() && !state.consent) return fail(tt.errEmailConsent);
  if (!altcha) return fail(tt.errCaptcha);
  state.error = ''; state.sending = true; render({ instant: true });
  const answers = { ...state.answers };
  if (state.card.sector) answers.sector = state.card.sector;
  if (state.card.size) answers.size = state.card.size;
  const payload = {
    survey: SURVEY.id, version: SURVEY.version, lang: state.lang, answers,
    country: state.country, country_src: state.countrySrc,
    texts: { elephant: (state.texts.elephant || '').trim(), unasked: (state.texts.unasked || '').trim() },
    email: (state.card.email || '').trim(), duration_ms: (state.finishedAt || Date.now()) - state.startedAt,
    hp: hp ? hp.value : '', agree: state.agree, consent: state.consent, altcha,
  };
  try {
    if (state.mode === 'live') state.submitted = await API.submit(payload);
    else { const n = demo.save({ ...payload, at: new Date().toISOString() }); state.submitted = { id: 'demo', n }; }
    state.sending = false; Beep.clear(); go('done');
  } catch (e) {
    state.sending = false; state.error = T().error + (e && e.message ? ` (${e.message})` : ''); Beep.error(); render({ instant: true });
  }
}

async function loadResults() {
  const box = document.getElementById('results');
  if (!box) return;
  try {
    const stats = state.mode === 'live' ? await API.stats(state.resultsCountry) : demo.stats(state.resultsCountry);
    box.innerHTML = resultsHTML(T(), stats);
    const sel = document.getElementById('results-country');
    if (sel) sel.addEventListener('change', () => { state.resultsCountry = sel.value; Beep.move(); loadResults(); });
  } catch (e) { box.innerHTML = `<div class="err">${esc(T().error)}</div>`; }
}

function copyLink() {
  const url = location.origin + location.pathname + location.search;
  const btn = document.getElementById('copy');
  const ok = () => { btn.textContent = T().copied; setTimeout(() => { btn.textContent = T().copyLink; }, 1600); };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(ok).catch(() => fallback());
  else fallback();
  function fallback() { const i = document.createElement('input'); i.value = url; stage.appendChild(i); i.select(); try { document.execCommand('copy'); ok(); } catch { /* ignore */ } i.remove(); }
}

let walkTimer = null;
const walkerPx = () => (window.innerWidth < 520 ? 4 : 5);
function walk() {
  if (walkTimer) clearInterval(walkTimer);
  if (reduced()) return;
  let f = false;
  walkTimer = setInterval(() => {
    const w = document.getElementById('walker'); if (!w) { clearInterval(walkTimer); walkTimer = null; return; }
    f = !f; w.innerHTML = spriteSVG(f ? FRAMES.f2 : FRAMES.f1, walkerPx());
  }, 300);
}

/* ---------------- global input ---------------- */
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konami = [];
document.addEventListener('keydown', e => {
  konami.push(e.key.length === 1 ? e.key.toLowerCase() : e.key); konami = konami.slice(-10);
  if (konami.join(',') === KONAMI.join(',')) { document.documentElement.classList.toggle('gb'); Beep.init(); Beep.clear(); konami = []; }
  const inField = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName || '');
  const s = typeof state.screen === 'number' ? steps[state.screen] : null;
  if (state.screen === 'title') { if (!inField && state.country && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); start(); } return; }
  if (!s) return;
  if (s.t === 'player' || s.t === 'q') {
    if (inField) return;
    const q = s.t === 'player' ? SURVEY.player : s.q;
    if (e.key === '?' || e.key === 'i') { if (q.tip) { e.preventDefault(); toggleFact(q); } return; }
    const opts = [...stage.querySelectorAll('.opt')]; if (!opts.length) { if (e.key === 'Enter' && typer) { clearTimeout(typer); typer = null; document.getElementById('qtext').closest('.pbox').click(); } return; }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault(); Beep.move();
      const i = (state.cursor + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length;
      opts.forEach((o, j) => o.classList.toggle('focus', j === i)); state.cursor = i; opts[i].focus({ preventScroll: true }); opts[i].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (document.activeElement && document.activeElement.classList.contains('opt')) return; // native click follows
      e.preventDefault(); choose(q, opts[state.cursor].dataset.opt);
    } else if (/^[1-9]$/.test(e.key)) {
      const i = +e.key - 1; if (opts[i]) { e.preventDefault(); choose(q, opts[i].dataset.opt); }
    } else if (e.key === 'Backspace' || e.key === 'ArrowLeft') { if (state.step > 0) { e.preventDefault(); back(); } }
    return;
  }
  if ((s.t === 'free' || s.t === 'card') && e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
    e.preventDefault(); const b = document.getElementById(s.t === 'free' ? 'finish' : 'submit'); if (b) b.click();
  }
});

document.getElementById('lang-en').addEventListener('click', () => setLang('en'));
document.getElementById('lang-de').addEventListener('click', () => setLang('de'));
document.getElementById('snd').addEventListener('click', () => { Beep.on = !Beep.on; Beep.init(); store.set('cetl-pulse-sound', Beep.on ? '1' : '0'); if (Beep.on) Beep.select(); hud(); });
document.getElementById('brand').addEventListener('click', e => { e.preventDefault(); go('title'); });
window.addEventListener('hashchange', route);

function setLang(l) { state.lang = l; document.documentElement.lang = l; store.set('cetl-pulse-lang', l); render({ instant: true }); }
function route() {
  if (location.hash === '#results') { state.screen = 'results'; render(); }
  else if (state.screen === 'results') { state.screen = 'title'; render(); }
}

/* ---------------- boot ---------------- */
async function boot(snap) {
  const q = new URLSearchParams(location.search).get('lang');
  const saved = store.get('cetl-pulse-lang');
  state.lang = ['en', 'de'].includes(q) ? q : ['en', 'de'].includes(saved) ? saved : (navigator.language || '').toLowerCase().startsWith('de') ? 'de' : 'en';
  document.documentElement.lang = state.lang;
  Beep.on = store.get('cetl-pulse-sound') === '1';
  if (snap && snap.answers) Object.assign(state, snap);
  if (!state.country) applyCountryGuess();
  if (location.hash === '#results') state.screen = 'results';
  render({ instant: !!(snap && snap.answers) });
  const h = await API.health();
  state.mode = h ? 'live' : 'demo';
  if (h && h.geo && GEO.codes.includes(h.geo)) {
    state.geo = h.geo;
    if (state.countrySrc !== 'manual') { const before = state.country; applyCountryGuess(); if (state.country !== before && state.screen === 'title') render({ instant: true }); }
  }
  hud();
  if (state.screen === 'results') loadResults();
}
try { window.claude?.hot?.snapshot?.(() => ({ lang: state.lang, screen: state.screen, step: state.step, answers: state.answers, texts: state.texts, card: state.card, startedAt: state.startedAt, finishedAt: state.finishedAt, country: state.country, countrySrc: state.countrySrc })); } catch { /* ignore */ }
if (window.claude?.hot?.ready) window.claude.hot.ready(boot); else boot(window.claude?.hot?.data ?? null);
