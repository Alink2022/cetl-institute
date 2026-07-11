"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLanguage } from "@/lib/i18n";

/* Thin ornamental SVG rule with centre fleuron */
function OrnamentRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cetl-border to-cetl-border" />
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0 opacity-60">
        <path d="M11 1 L12.5 9 L20 11 L12.5 13 L11 21 L9.5 13 L2 11 L9.5 9 Z"
          fill="none" stroke="var(--color-cetl-gold)" strokeWidth="1" />
        <circle cx="11" cy="11" r="2" fill="var(--color-cetl-gold)" opacity="0.7" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-cetl-border to-cetl-border" />
    </div>
  );
}

export function HeroSection() {
  const { t } = useLanguage();
  const hero = t.UI.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cetl-dark">
      {/* Key visual — goldenes Netzwerk-Gitter, stark abgedunkelt hinter der Atmosphäre */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <Image
          src="/e.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cetl-dark/70 via-cetl-dark/40 to-cetl-dark" />
      </div>

      {/* Deep space atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[15%] w-[900px] h-[900px] rounded-full bg-cetl-blue/[0.18] blur-[160px]" />
        <div className="absolute bottom-[-5%] right-[5%] w-[700px] h-[700px] rounded-full bg-cetl-violet/[0.12] blur-[180px]" />
        <div className="absolute top-[30%] left-[-5%] w-[500px] h-[500px] rounded-full bg-cetl-gold/[0.07] blur-[140px]" />
      </div>

      {/* Grain texture */}
      <div className="absolute inset-0 bg-grain opacity-[0.035] pointer-events-none mix-blend-multiply" />


      <Container className="relative z-10 pt-28 pb-12 flex flex-col items-center text-center">

        {/* ── CREST / SEAL ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="relative inline-block">
            {/* Halo glow behind crest */}
            <div className="absolute inset-0 rounded-full bg-cetl-gold/[0.15] blur-3xl scale-125 pointer-events-none" />
            {/* Medallion container — clean seal on dark bg */}
            <div className="relative rounded-full bg-white/[0.06] ring-1 ring-white/10 p-3 backdrop-blur-sm">
              <Image
                src="/cetl-logo.png"
                alt="CETL Institute Seal"
                width={200}
                height={200}
                className="object-contain drop-shadow-[0_2px_16px_rgba(212,168,67,0.25)]"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* ── INSTITUTION NAME ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl"
        >
          <OrnamentRule className="mb-4" />
          <p className="text-cetl-gold text-[11px] tracking-[0.35em] uppercase font-semibold mb-1 opacity-80">
            {hero.badgeLocation}
          </p>
          <h2 className="font-display text-cetl-text text-xs md:text-sm tracking-[0.28em] uppercase font-medium mb-4 opacity-50">
            Central European Tech Leadership Institute
          </h2>
          <OrnamentRule />
        </motion.div>

        {/* ── MAIN HEADLINE ──────────────────────────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mt-10 text-4xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold leading-[1.06] tracking-tight text-cetl-text max-w-4xl"
        >
          {hero.headlineLine1 && (
            <>
              {hero.headlineLine1}
              <br />
            </>
          )}
          <em className="not-italic" style={{
            background: "linear-gradient(100deg, var(--color-cetl-gold) 0%, var(--color-cetl-text) 55%, var(--color-cetl-gold-light) 110%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            {hero.headlineGradient}
          </em>
          <br />
          {hero.headlineLine3}
        </motion.h1>

        {/* ── LEAD TEXT ──────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-7 text-cetl-text-muted text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          {hero.paragraph}
        </motion.p>

        {/* ── CTAs ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton
            href="#elaas"
            className="w-full sm:w-auto relative px-9 py-4 bg-cetl-blue text-white font-semibold tracking-wide text-center overflow-hidden group block shadow-[0_4px_24px_-8px_rgba(27,58,107,0.4)]"
          >
            <span className="relative z-10">{hero.ctaPrimary}</span>
            <span className="absolute inset-0 bg-cetl-blue-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="w-full sm:w-auto px-9 py-4 border border-cetl-blue/50 text-cetl-blue font-semibold tracking-wide hover:border-cetl-blue hover:bg-cetl-blue/[0.06] text-center block transition-all duration-300"
          >
            {hero.ctaSecondary}
          </MagneticButton>
        </motion.div>

        {/* ── CREDENTIAL STRIP ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="mt-16 w-full max-w-3xl"
        >
          <div className="border-t border-b border-cetl-border py-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {hero.stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5">
                {i > 0 && (
                  <div className="hidden sm:block absolute w-px h-8 bg-cetl-border" style={{ left: `${i * 33.33}%` }} />
                )}
                <span
                  className="font-display text-2xl md:text-3xl font-bold"
                  style={{
                    background: "linear-gradient(100deg, var(--color-cetl-gold), var(--color-cetl-gold-light))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-cetl-text-muted text-[11px] tracking-[0.22em] uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>

      {/* ── SCROLLING TICKER ───────────────────────────── */}
      <div className="relative z-10 border-t border-cetl-border/60 py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track gap-14 text-cetl-text-muted/60 text-xs tracking-[0.3em] uppercase font-semibold">
          {[...hero.ticker, ...hero.ticker].map((item, i) => (
            <span key={i} className="flex items-center gap-14 shrink-0">
              {item}
              <span className="text-cetl-gold/50 text-base">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
