"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLanguage } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useLanguage();
  const hero = t.UI.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cetl-dark">
      {/* Aurora blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[2%] w-[720px] h-[720px] rounded-full bg-cetl-gold/[0.20] blur-[150px] animate-aurora" />
        <div className="absolute bottom-[-25%] right-[-5%] w-[760px] h-[760px] rounded-full bg-cetl-blue/[0.18] blur-[160px] animate-aurora-slow" />
        <div className="absolute top-[20%] right-[15%] w-[520px] h-[520px] rounded-full bg-cetl-violet/[0.16] blur-[140px] animate-aurora" style={{ animationDelay: "-8s" }} />
      </div>

      {/* Giant watermark */}
      <div
        className="absolute inset-x-0 top-[6%] flex justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display text-[22vw] leading-none font-extrabold tracking-tighter whitespace-nowrap"
          style={{ WebkitTextStroke: "1px var(--color-cetl-border)", color: "transparent", opacity: 0.5 }}
        >
          CETL
        </span>
      </div>

      {/* Floating chips */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block" aria-hidden="true">
        <div className="absolute top-[14%] left-[1%] animate-float">
          <Badge variant="blue" className="shadow-[0_0_30px_-8px_rgba(79,140,255,0.5)]">{hero.badgeVienna}</Badge>
        </div>
        <div className="absolute top-[14%] right-[1%] animate-float" style={{ animationDelay: "-2.5s" }}>
          <Badge variant="muted" className="shadow-[0_0_30px_-8px_rgba(139,107,255,0.4)]">{hero.badgeTUWien}</Badge>
        </div>
        <div className="absolute bottom-[6%] right-[2%] animate-float" style={{ animationDelay: "-4.5s" }}>
          <Badge variant="gold" className="shadow-[0_0_30px_-8px_rgba(212,175,90,0.5)]">{hero.badgeFDE}</Badge>
        </div>
      </div>

      {/* Floating speaker photo */}
      <div
        className="absolute bottom-[8%] left-[3%] w-36 xl:w-44 pointer-events-none hidden lg:block animate-float"
        style={{ animationDelay: "-1.5s" }}
        aria-hidden="true"
      >
        <div className="relative rotate-[-4deg]">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-cetl-gold-light via-cetl-gold to-cetl-violet opacity-40 blur-lg" />
          <div className="gradient-edge relative aspect-[4/5] rounded-2xl overflow-hidden border border-cetl-border/60 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]">
            <Image
              src="/alin-kalam.png"
              alt=""
              fill
              sizes="176px"
              className="object-cover object-[58%_22%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cetl-darker via-transparent to-transparent opacity-60" />
            <span className="absolute bottom-2 left-2 right-2 text-cetl-gold-light text-[9px] font-semibold tracking-widest uppercase">
              {hero.photoCaption}
            </span>
          </div>
        </div>
      </div>

      {/* Grid + grain */}
      <div className="absolute inset-0 bg-grid-gold opacity-[0.05] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
      <div className="absolute inset-0 bg-grain opacity-[0.07] pointer-events-none mix-blend-overlay" />

      {/* Content */}
      <Container className="relative z-10 pt-32 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <Badge variant="gold">{hero.badgeLocation}</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] font-bold leading-[1.05] tracking-tighter mb-8 text-cetl-text"
        >
          {hero.headlineLine1 && (
            <>
              {hero.headlineLine1}
              <br />
            </>
          )}
          <span className="text-gradient-gold italic">{hero.headlineGradient}</span>
          <br />
          {hero.headlineLine3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-cetl-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {hero.paragraph}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href="#elaas"
            className="w-full sm:w-auto relative px-8 py-4 rounded-full bg-cetl-gold text-cetl-darker font-semibold tracking-wide text-center overflow-hidden group block shadow-[0_0_40px_-10px_rgba(212,175,90,0.7)]"
          >
            <span className="relative z-10">{hero.ctaPrimary}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cetl-gold-light to-cetl-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-cetl-gold/40 text-cetl-gold font-semibold tracking-wide hover:border-cetl-gold hover:bg-cetl-gold/10 text-center block"
          >
            {hero.ctaSecondary}
          </MagneticButton>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-cetl-border pt-12"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-display text-2xl md:text-3xl font-bold text-gradient-gold">
                {stat.value}
              </span>
              <span className="text-cetl-text-muted text-xs tracking-[0.2em] uppercase">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Ticker */}
      <div className="relative z-10 mt-16 border-t border-cetl-border/60 py-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track gap-12 text-cetl-text-muted/70 text-sm tracking-[0.25em] uppercase font-medium">
          {[...hero.ticker, ...hero.ticker].map((item, i) => (
            <span key={i} className="flex items-center gap-12 shrink-0">
              {item}
              <span className="text-cetl-gold/60">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cetl-dark to-transparent pointer-events-none" />
    </section>
  );
}
