"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLanguage } from "@/lib/i18n";

function OrnamentRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cetl-gold-400/30 to-cetl-gold-400/30" />
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" className="shrink-0 opacity-60">
        <path d="M11 1 L12.5 9 L20 11 L12.5 13 L11 21 L9.5 13 L2 11 L9.5 9 Z"
          fill="none" stroke="var(--color-cetl-gold-400)" strokeWidth="1" />
        <circle cx="11" cy="11" r="2" fill="var(--color-cetl-gold-400)" opacity="0.7" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-cetl-gold-400/30 to-cetl-gold-400/30" />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" aria-hidden>
      <circle cx="7" cy="7" r="6.5" stroke="var(--color-cetl-gold-400)" strokeWidth="1" opacity="0.6" />
      <path d="M4 7l2 2 4-4" stroke="var(--color-cetl-gold-400)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* SVG ELaaS Impact Engine — 4-node horizontal process diagram */
function ElaasEngine() {
  const nodes = [
    { label: "Foundation", sub: "Standardized 8-day\nData & AI core" },
    { label: "Activation", sub: "Role-based\nlearning journeys" },
    { label: "Execution", sub: "Use cases,\nembedded support" },
    { label: "Impact", sub: "Scalable internal\ncapability" },
  ];
  return (
    <svg
      viewBox="0 0 520 140"
      width="520"
      height="140"
      aria-label="ELaaS Impact Engine: Foundation → Activation → Execution → Impact"
      className="w-full max-w-[520px]"
    >
      {/* Connector lines */}
      {[0, 1, 2].map((i) => (
        <line
          key={i}
          x1={100 + i * 120 + 36}
          y1={50}
          x2={100 + (i + 1) * 120 - 36}
          y2={50}
          stroke="var(--color-cetl-gold-400)"
          strokeWidth="1"
          strokeDasharray="4 3"
          opacity="0.4"
        />
      ))}
      {nodes.map((node, i) => (
        <g key={i} transform={`translate(${100 + i * 120}, 20)`}>
          {/* Node circle */}
          <circle cx="0" cy="30" r="28" fill="var(--color-cetl-navy-700)" stroke="var(--color-cetl-gold-400)" strokeWidth="1" opacity="0.85" />
          {/* Number */}
          <text x="0" y="26" textAnchor="middle" fill="var(--color-cetl-gold-400)" fontSize="10" fontFamily="var(--font-barlow)" fontWeight="600" opacity="0.7">
            0{i + 1}
          </text>
          {/* Label */}
          <text x="0" y="38" textAnchor="middle" fill="white" fontSize="9" fontFamily="var(--font-barlow)" fontWeight="700" letterSpacing="0.05em">
            {node.label.toUpperCase()}
          </text>
          {/* Sub-label */}
          {node.sub.split("\n").map((line, j) => (
            <text key={j} x="0" y={72 + j * 13} textAnchor="middle" fill="var(--color-cetl-gold-300)" fontSize="8" fontFamily="var(--font-manrope)" opacity="0.7">
              {line}
            </text>
          ))}
        </g>
      ))}
      {/* Arrow heads on connectors */}
      {[0, 1, 2].map((i) => (
        <polygon
          key={i}
          points={`${100 + (i + 1) * 120 - 38},46 ${100 + (i + 1) * 120 - 30},50 ${100 + (i + 1) * 120 - 38},54`}
          fill="var(--color-cetl-gold-400)"
          opacity="0.4"
        />
      ))}
    </svg>
  );
}

export function HeroSection() {
  const { t } = useLanguage();
  const hero = t.UI.hero;

  /* Detect language: new EN content uses hero.body, old DE uses hero.paragraph */
  const leadText = hero.body || hero.paragraph;
  const headlineMain = hero.headlineLine1 && hero.headlineAccent
    ? { line1: hero.headlineLine1, accent: hero.headlineAccent }
    : null;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden cetl-navy-bg"
    >
      {/* Atmospheric glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-[-10%] left-[10%] w-[700px] h-[700px] rounded-full bg-cetl-gold-700/[0.06] blur-[160px]" />
        <div className="absolute bottom-[-5%] right-[5%] w-[600px] h-[600px] rounded-full bg-cetl-navy-600/[0.5] blur-[180px]" />
        <div className="absolute top-[40%] left-[-5%] w-[400px] h-[400px] rounded-full bg-cetl-gold-500/[0.04] blur-[140px]" />
      </div>

      {/* Key visual — subtle background texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <Image src="/e.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-cetl-navy-900/80 via-cetl-navy-900/40 to-cetl-navy-900/90" />
      </div>

      <Container className="relative z-10 pt-32 pb-16 flex flex-col items-center text-center">

        {/* Seal */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-cetl-gold-500/10 blur-3xl scale-125 pointer-events-none" />
            <div className="relative rounded-full bg-white/[0.06] ring-1 ring-cetl-gold-400/20 p-3 backdrop-blur-sm">
              <Image
                src="/cetl-logo.webp"
                alt="CETL Institute Seal"
                width={200}
                height={200}
                className="object-contain drop-shadow-[0_2px_16px_color-mix(in_srgb,var(--color-cetl-gold-400)_20%,transparent)]"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Eyebrow / institution name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl"
        >
          <OrnamentRule className="mb-4" />
          <p className="font-display text-cetl-gold-400/70 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            {hero.eyebrow || hero.badgeLocation}
          </p>
          <OrnamentRule />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mt-10 text-[2.4rem] md:text-5xl lg:text-[4.2rem] xl:text-[5rem] font-bold leading-[1.05] tracking-tight text-white max-w-5xl [text-wrap:balance]"
        >
          {headlineMain ? (
            <>
              {headlineMain.line1}{" "}
              <em className="not-italic cetl-gold-shimmer">{headlineMain.accent}</em>
            </>
          ) : (
            <>
              {hero.headlineLine1 && <>{hero.headlineLine1}<br /></>}
              <em className="not-italic" style={{
                background: "linear-gradient(100deg, var(--color-cetl-gold-500) 0%, white 55%, var(--color-cetl-gold-300) 110%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {hero.headlineGradient}
              </em>
              <br />{hero.headlineLine3}
            </>
          )}
        </motion.h1>

        {/* Subheadline */}
        {hero.subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-4 text-cetl-gold-300/70 text-lg md:text-xl font-display tracking-wide"
          >
            {hero.subheadline}
          </motion.p>
        )}

        {/* Lead / body */}
        {leadText && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            {leadText}
          </motion.p>
        )}

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton
            href="#elaas"
            className="w-full sm:w-auto relative px-9 py-4 bg-cetl-gold-500 text-cetl-navy-900 font-semibold tracking-wide text-center overflow-hidden group block shadow-[0_4px_24px_-8px_color-mix(in_srgb,var(--color-cetl-gold-500)_50%,transparent)]"
          >
            <span className="relative z-10">{hero.ctaPrimary}</span>
            <span className="absolute inset-0 bg-cetl-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MagneticButton>
          <MagneticButton
            href={`mailto:${t.SITE.formEmail}`}
            className="w-full sm:w-auto px-9 py-4 border border-cetl-gold-400/40 text-cetl-gold-300 font-semibold tracking-wide hover:border-cetl-gold-400 hover:bg-cetl-gold-400/[0.06] text-center block transition-all duration-300"
          >
            {hero.ctaSecondary}
          </MagneticButton>
        </motion.div>

        {/* MicroProof chips */}
        {hero.microProof && hero.microProof.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {hero.microProof.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-xs text-white/50 tracking-wide"
              >
                <CheckIcon />
                {item}
              </span>
            ))}
          </motion.div>
        )}

        {/* Supporting line */}
        {hero.supportingLine && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-6 text-cetl-gold-400/40 text-xs tracking-[0.25em] uppercase font-semibold"
          >
            {hero.supportingLine}
          </motion.p>
        )}

        {/* ELaaS Impact Engine diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mt-14 w-full flex justify-center"
        >
          <ElaasEngine />
        </motion.div>

      </Container>

      {/* Ticker — only when content provided */}
      {hero.ticker && hero.ticker.length > 0 && (
        <div className="relative z-10 border-t border-cetl-gold-400/10 py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track gap-14 text-white/30 text-xs tracking-[0.3em] uppercase font-semibold">
            {[...hero.ticker, ...hero.ticker].map((item, i) => (
              <span key={i} className="flex items-center gap-14 shrink-0">
                {item}
                <span className="text-cetl-gold-400/40 text-base">✦</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
