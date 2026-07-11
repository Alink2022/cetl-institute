"use client";

import { useLanguage } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";

const CONTENT = {
  de: {
    label: "Strategischer Partner",
    title: "Specific-Group Holding",
    titleAccent: "— Enterprise IT. Auf Augenhöhe.",
    subtitle:
      "25 Jahre IT-Exzellenz, 500+ Expert:innen, 10+ europäische Standorte — SPG ist der Industriepartner, der CETL-Programme in reale Enterprise-Transformation überträgt.",
    about: {
      tag: "Über SPG",
      headline: "Vom Code bis zur Boardroom-Strategie",
      text: "Die Specific-Group Holding GmbH ist ein Full-Service IT-Unternehmen mit Headquarter in Wien. Mit über 25 Jahren Erfahrung begleitet SPG Organisationen jeder Größe — von digitalen Transformationsprojekten bis hin zu komplexer Legacy-Modernisierung, Cloud-Infrastruktur und KI-gestützten Prozessen. SPG liefert nicht nur Technologie, sondern strategische Umsetzungskompetenz — genau das, was C-Suite-Führungskräfte im CETL-Kontext direkt einsetzen können.",
    },
    whyCETL: {
      tag: "Partnerschaft",
      headline: "Warum CETL × SPG",
      text: "CETL befähigt Führungskräfte, IT-Strategie souverän zu verantworten. SPG zeigt, wie das in 500-Millionen-Euro-Projekten konkret aussieht. Diese Partnerschaft bringt akademische Rigidität und industrielle Realität zusammen — für Executives, die mehr wollen als Frameworks.",
    },
    stats: [
      { value: "25+", label: "Jahre Erfahrung", sub: "Gegründet in Wien" },
      { value: "500+", label: "Expert:innen", sub: "Nearshore & onsite" },
      { value: "10+", label: "Standorte", sub: "Europa, USA, Vietnam" },
      { value: "50+", label: "Enterprise-Kunden", sub: "DAX, ATX, Fortune" },
    ],
    capabilities: [
      {
        icon: "⚡",
        title: "AI in Action",
        desc: "Operative KI-Transformation mit Ozgar.ai, Legacy Lift und proprietären Analyse-Tools — keine Theorie, sondern produktive Deployment-Erfahrung.",
      },
      {
        icon: "🏗",
        title: "Legacy Modernisierung",
        desc: "AS/400, IBM i, Mainframe — SPG migriert kritische Kernsysteme ohne Betriebsunterbrechung. Legacy Lift ist ein eigenentwickeltes Produkt dafür.",
      },
      {
        icon: "☁️",
        title: "Cloud & Security",
        desc: "Cloud-native Architektur, Netzwerk-Design und GRC (Governance, Risk, Compliance) als integriertes Leistungspaket — inklusive Google Cloud Partnership.",
      },
      {
        icon: "🏥",
        title: "Healthcare IT",
        desc: "90+ Krankenhäuser in 30+ Ländern. SPG Healthcare ist zertifizierter Ausbildungsbetrieb und einer der führenden Anbieter klinischer IT-Systeme.",
      },
      {
        icon: "🧑‍💻",
        title: "IT-Staffing & Nearshore",
        desc: "On-site und Nearshore-Ressourcen aus Kosovo, Litauen, Polen, der Slowakei und Spanien — skalierbar, compliant, kulturell aligned.",
      },
      {
        icon: "📦",
        title: "Software-Produkte",
        desc: "Amonga (API-Integration), Antson (No-Code Cloud), Dormy (Student Housing), Tseba (Energie), Yool (Orchesterplanung) — branchenübergreifende Eigenentwicklungen.",
      },
    ],
    clients: {
      tag: "Enterprise-Referenzen",
      headline: "Vertrauen von Marktführern",
      names: [
        "Toyota Financial Services",
        "Erste Bank",
        "BAWAG",
        "UniCredit",
        "BMW",
        "Santander",
        "Porsche",
        "STRABAG",
        "Liebherr",
        "MAGNA",
        "ENI",
        "DB Schenker",
        "KNAPP",
        "Hochtief",
        "TÜV Austria",
        "Land Niederösterreich",
      ],
    },
    locations: {
      tag: "Globale Präsenz",
      headline: "10+ Standorte weltweit",
      places: [
        { city: "Wien", country: "AT", flag: "🇦🇹", role: "Headquarters" },
        { city: "München / Frankfurt", country: "DE", flag: "🇩🇪", role: "DACH Hub" },
        { city: "Pristina", country: "XK", flag: "🇽🇰", role: "Engineering Center" },
        { city: "Vilnius", country: "LT", flag: "🇱🇹", role: "Nearshore" },
        { city: "Warschau", country: "PL", flag: "🇵🇱", role: "Nearshore" },
        { city: "Bratislava", country: "SK", flag: "🇸🇰", role: "Nearshore" },
        { city: "Madrid", country: "ES", flag: "🇪🇸", role: "Nearshore" },
        { city: "Budapest", country: "HU", flag: "🇭🇺", role: "Nearshore" },
        { city: "New York", country: "US", flag: "🇺🇸", role: "Americas" },
        { city: "Ho-Chi-Minh-Stadt", country: "VN", flag: "🇻🇳", role: "APAC" },
      ],
    },
    products: {
      tag: "SPG Eigenprodukte",
      headline: "Innovation aus Wien",
      items: [
        { name: "Ozgar.ai", desc: "KI-gestützte Analyse von Legacy-Systemen" },
        { name: "Legacy Lift", desc: "Automatisierte Code-Modernisierung" },
        { name: "Amonga", desc: "Enterprise API-Integrationsplattform" },
        { name: "Antson", desc: "No-Code Cloud-Plattform für Unternehmen" },
        { name: "Tseba", desc: "Management-Hub für die Energiebranche" },
        { name: "Byte/Baierl", desc: "ERP-System für die Dentalbranche" },
      ],
    },
    cta: {
      label: "Mehr über SPG",
      href: "https://specific-group.com",
    },
    partnershipStatement:
      "SPG bringt die industrielle Schwergewicht-Perspektive in CETL-Programme ein — 25 Jahre Realerfahrung aus den komplexesten IT-Transformationen Österreichs und Europas.",
  },
  en: {
    label: "Strategic Partner",
    title: "Specific-Group Holding",
    titleAccent: "— Enterprise IT. At Eye Level.",
    subtitle:
      "25 years of IT excellence, 500+ experts, 10+ European locations — SPG is the industry partner that translates CETL programs into real enterprise transformation.",
    about: {
      tag: "About SPG",
      headline: "From Code to Boardroom Strategy",
      text: "Specific-Group Holding GmbH is a full-service IT company headquartered in Vienna. With over 25 years of experience, SPG accompanies organizations of all sizes — from digital transformation projects to complex legacy modernization, cloud infrastructure and AI-driven processes. SPG delivers not just technology, but strategic execution capability — precisely what C-suite executives encounter in the CETL context.",
    },
    whyCETL: {
      tag: "Partnership",
      headline: "Why CETL × SPG",
      text: "CETL empowers executives to take sovereign responsibility for IT strategy. SPG shows what that looks like concretely in 500-million-euro projects. This partnership brings academic rigor and industrial reality together — for executives who want more than frameworks.",
    },
    stats: [
      { value: "25+", label: "Years of Experience", sub: "Founded in Vienna" },
      { value: "500+", label: "Experts", sub: "Nearshore & on-site" },
      { value: "10+", label: "Locations", sub: "Europe, USA, Vietnam" },
      { value: "50+", label: "Enterprise Clients", sub: "DAX, ATX, Fortune" },
    ],
    capabilities: [
      {
        icon: "⚡",
        title: "AI in Action",
        desc: "Operational AI transformation with Ozgar.ai, Legacy Lift and proprietary analysis tools — not theory, but productive deployment experience.",
      },
      {
        icon: "🏗",
        title: "Legacy Modernization",
        desc: "AS/400, IBM i, Mainframe — SPG migrates critical core systems without operational interruption. Legacy Lift is a proprietary product for this.",
      },
      {
        icon: "☁️",
        title: "Cloud & Security",
        desc: "Cloud-native architecture, network design and GRC (Governance, Risk, Compliance) as an integrated service package — including Google Cloud Partnership.",
      },
      {
        icon: "🏥",
        title: "Healthcare IT",
        desc: "90+ hospitals in 30+ countries. SPG Healthcare is a certified training company and one of the leading providers of clinical IT systems.",
      },
      {
        icon: "🧑‍💻",
        title: "IT Staffing & Nearshore",
        desc: "On-site and nearshore resources from Kosovo, Lithuania, Poland, Slovakia and Spain — scalable, compliant, culturally aligned.",
      },
      {
        icon: "📦",
        title: "Software Products",
        desc: "Amonga (API integration), Antson (No-Code Cloud), Dormy (Student Housing), Tseba (Energy), Yool (Orchestra planning) — cross-industry proprietary developments.",
      },
    ],
    clients: {
      tag: "Enterprise References",
      headline: "Trusted by Market Leaders",
      names: [
        "Toyota Financial Services",
        "Erste Bank",
        "BAWAG",
        "UniCredit",
        "BMW",
        "Santander",
        "Porsche",
        "STRABAG",
        "Liebherr",
        "MAGNA",
        "ENI",
        "DB Schenker",
        "KNAPP",
        "Hochtief",
        "TÜV Austria",
        "Province of Lower Austria",
      ],
    },
    locations: {
      tag: "Global Presence",
      headline: "10+ Locations Worldwide",
      places: [
        { city: "Vienna", country: "AT", flag: "🇦🇹", role: "Headquarters" },
        { city: "Munich / Frankfurt", country: "DE", flag: "🇩🇪", role: "DACH Hub" },
        { city: "Pristina", country: "XK", flag: "🇽🇰", role: "Engineering Center" },
        { city: "Vilnius", country: "LT", flag: "🇱🇹", role: "Nearshore" },
        { city: "Warsaw", country: "PL", flag: "🇵🇱", role: "Nearshore" },
        { city: "Bratislava", country: "SK", flag: "🇸🇰", role: "Nearshore" },
        { city: "Madrid", country: "ES", flag: "🇪🇸", role: "Nearshore" },
        { city: "Budapest", country: "HU", flag: "🇭🇺", role: "Nearshore" },
        { city: "New York", country: "US", flag: "🇺🇸", role: "Americas" },
        { city: "Ho Chi Minh City", country: "VN", flag: "🇻🇳", role: "APAC" },
      ],
    },
    products: {
      tag: "SPG Own Products",
      headline: "Innovation from Vienna",
      items: [
        { name: "Ozgar.ai", desc: "AI-powered analysis of legacy systems" },
        { name: "Legacy Lift", desc: "Automated code modernization" },
        { name: "Amonga", desc: "Enterprise API integration platform" },
        { name: "Antson", desc: "No-code cloud platform for enterprises" },
        { name: "Tseba", desc: "Management hub for the energy sector" },
        { name: "Byte/Baierl", desc: "ERP system for the dental industry" },
      ],
    },
    cta: {
      label: "Learn more about SPG",
      href: "https://specific-group.com",
    },
    partnershipStatement:
      "SPG brings the industrial heavyweight perspective to CETL programs — 25 years of real-world experience from Austria's and Europe's most complex IT transformations.",
  },
};

export function SPGPartnerSection() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <section id="spg-partner" className="relative py-32 bg-cetl-dark overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-cetl-gold/[0.04] blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-cetl-blue/[0.05] blur-[120px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-cetl-violet/[0.04] blur-[100px]" />
      </div>

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold/50 to-transparent" />

      <Container className="relative">

        {/* ── Section Header ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-cetl-gold/50" />
            <p className="text-cetl-gold text-[10px] font-semibold tracking-[0.3em] uppercase">
              {c.label}
            </p>
          </div>

          <div className="max-w-4xl">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cetl-text leading-tight mb-2">
              {c.title}
              <span className="text-cetl-text-muted font-light">{c.titleAccent}</span>
            </h2>
            <p className="text-cetl-text-muted text-lg leading-relaxed max-w-3xl mt-6">
              {c.subtitle}
            </p>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-cetl-border/30 rounded-2xl overflow-hidden mb-20">
          {c.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-cetl-surface px-8 py-7 flex flex-col gap-1 group hover:bg-cetl-surface-2 transition-colors duration-300"
            >
              <span className="font-display text-4xl font-bold text-cetl-gold">{stat.value}</span>
              <span className="text-cetl-text text-sm font-semibold">{stat.label}</span>
              <span className="text-cetl-text-muted text-xs">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* ── About + Partnership ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* About card */}
          <div className="relative bg-cetl-surface border border-cetl-border/40 rounded-2xl p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-cetl-gold/[0.04] blur-[60px] pointer-events-none" />
            <p className="text-cetl-gold text-[10px] font-semibold tracking-[0.25em] uppercase mb-3">
              {c.about.tag}
            </p>
            <h3 className="font-display text-xl md:text-2xl font-bold text-cetl-text mb-4 leading-snug">
              {c.about.headline}
            </h3>
            <p className="text-cetl-text-muted text-sm leading-relaxed">{c.about.text}</p>

            {/* SPG wordmark */}
            <div className="mt-8 pt-6 border-t border-cetl-border/50 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-cetl-gold/10 border border-cetl-gold/20 flex items-center justify-center">
                <span className="text-cetl-gold font-display font-bold text-xs tracking-widest">SPG</span>
              </div>
              <div>
                <p className="text-cetl-text text-xs font-semibold">Specific-Group Holding GmbH</p>
                <p className="text-cetl-text-muted text-[10px]">Wien, Österreich — gegr. 1999</p>
              </div>
            </div>
          </div>

          {/* Partnership card */}
          <div className="relative bg-gradient-to-br from-cetl-gold/[0.06] to-cetl-surface border border-cetl-gold/20 rounded-2xl p-8 md:p-10 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-cetl-gold/[0.06] blur-[80px] pointer-events-none" />
            <p className="text-cetl-gold text-[10px] font-semibold tracking-[0.25em] uppercase mb-3">
              {c.whyCETL.tag}
            </p>
            <h3 className="font-display text-xl md:text-2xl font-bold text-cetl-text mb-4 leading-snug">
              {c.whyCETL.headline}
            </h3>
            <p className="text-cetl-text-muted text-sm leading-relaxed mb-8">{c.whyCETL.text}</p>

            {/* Partnership logos */}
            <div className="flex items-center gap-4">
              <div className="h-8 px-4 rounded-lg bg-cetl-darker border border-cetl-border/60 flex items-center">
                <span className="text-cetl-text text-xs font-display font-bold tracking-widest">CETL</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-cetl-border via-cetl-gold/40 to-cetl-border relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cetl-gold/60" />
              </div>
              <div className="h-8 px-4 rounded-lg bg-cetl-darker border border-cetl-gold/30 flex items-center">
                <span className="text-cetl-gold text-xs font-display font-bold tracking-widest">SPG</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Capabilities Grid ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-cetl-gold/40" />
            <p className="text-cetl-gold text-[10px] font-semibold tracking-[0.3em] uppercase">
              {lang === "de" ? "Leistungsfelder" : "Capabilities"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cetl-border/20 rounded-2xl overflow-hidden">
            {c.capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={[
                  "bg-cetl-surface p-7 flex flex-col gap-3 group",
                  "hover:bg-cetl-surface-2 transition-colors duration-300",
                  "border-r border-b border-cetl-border/20 last:border-r-0",
                  i >= 3 ? "border-b-0" : "",
                  (i + 1) % 3 === 0 ? "border-r-0" : "",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cap.icon}</span>
                  <h4 className="text-cetl-text font-display font-semibold text-sm group-hover:text-cetl-gold transition-colors duration-200">
                    {cap.title}
                  </h4>
                </div>
                <p className="text-cetl-text-muted text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Clients + Products (2-col) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 mb-20">
          {/* Enterprise clients */}
          <div className="bg-cetl-surface border border-cetl-border/40 rounded-2xl p-8 md:p-10">
            <p className="text-cetl-gold text-[10px] font-semibold tracking-[0.25em] uppercase mb-2">
              {c.clients.tag}
            </p>
            <h3 className="font-display text-xl font-bold text-cetl-text mb-6">{c.clients.headline}</h3>
            <div className="flex flex-wrap gap-2">
              {c.clients.names.map((name) => (
                <span
                  key={name}
                  className="px-3 py-1.5 rounded-lg border border-cetl-border/50 bg-cetl-darker text-cetl-text-muted text-xs font-medium hover:border-cetl-gold/30 hover:text-cetl-text transition-all duration-200 cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="text-cetl-text-muted/50 text-[10px] mt-6 tracking-wider uppercase">
              {lang === "de" ? "Auswahl. Vollständige Referenzliste auf Anfrage." : "Selection. Full reference list available on request."}
            </p>
          </div>

          {/* Own products */}
          <div className="bg-cetl-surface border border-cetl-border/40 rounded-2xl p-8 flex flex-col">
            <p className="text-cetl-gold text-[10px] font-semibold tracking-[0.25em] uppercase mb-2">
              {c.products.tag}
            </p>
            <h3 className="font-display text-xl font-bold text-cetl-text mb-6">{c.products.headline}</h3>
            <div className="flex flex-col divide-y divide-cetl-border/30 flex-1">
              {c.products.items.map((p) => (
                <div key={p.name} className="py-3 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cetl-gold/60 mt-1.5 shrink-0" />
                  <div>
                    <span className="text-cetl-text text-xs font-semibold">{p.name}</span>
                    <p className="text-cetl-text-muted text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Global Locations ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-cetl-gold/40" />
            <p className="text-cetl-gold text-[10px] font-semibold tracking-[0.3em] uppercase">
              {c.locations.tag}
            </p>
          </div>
          <h3 className="font-display text-2xl font-bold text-cetl-text mb-8">{c.locations.headline}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3">
            {c.locations.places.map((loc) => (
              <div
                key={loc.city}
                className="flex flex-col items-center gap-2 p-3 rounded-xl border border-cetl-border/30 bg-cetl-surface/50 hover:border-cetl-gold/30 hover:bg-cetl-surface transition-all duration-200 text-center group cursor-default"
              >
                <span className="text-2xl">{loc.flag}</span>
                <div>
                  <p className="text-cetl-text text-[10px] font-semibold leading-tight">{loc.city}</p>
                  <p className="text-cetl-text-muted/60 text-[9px] tracking-wider uppercase">{loc.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Partnership Statement + CTA ── */}
        <div className="relative bg-gradient-to-br from-cetl-surface via-cetl-surface to-cetl-surface-2 border border-cetl-gold/20 rounded-2xl p-10 md:p-14 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-cetl-gold/[0.05] blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-cetl-blue/[0.06] blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-10">
            {/* Quote mark */}
            <div className="font-display text-8xl leading-none text-cetl-gold/15 select-none shrink-0 hidden md:block">"</div>

            <div className="flex-1">
              <p className="font-display text-xl md:text-2xl font-semibold text-cetl-text leading-relaxed mb-8">
                {c.partnershipStatement}
              </p>

              <a
                href={c.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-cetl-gold/40 bg-cetl-gold/5 text-cetl-gold text-sm font-semibold hover:bg-cetl-gold/10 hover:border-cetl-gold/60 transition-all duration-200 group"
              >
                <div className="w-6 h-6 rounded-md bg-cetl-gold/15 flex items-center justify-center text-[10px] font-bold tracking-wider">
                  SPG
                </div>
                {c.cta.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </Container>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-border to-transparent" />
    </section>
  );
}
