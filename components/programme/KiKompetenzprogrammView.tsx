"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Lightbulb,
  Cog,
  Users,
  Flag,
  Search,
  BookOpen,
  Rocket,
  MessageCircle,
  TrendingUp,
  Database,
  Brain,
  Laptop,
  LineChart,
  Scale,
  Target,
  Briefcase,
  Code2,
  UserCheck,
  ShieldCheck,
  FileCheck,
  AlertTriangle,
  Presentation,
  BarChart3,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { TiltCard } from "@/components/ui/TiltCard";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { PlusIcon } from "@/components/ui/PlusIcon";
import { useLanguage } from "@/lib/i18n";

/* ── Shared bits ─────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-cetl-gold-deep shrink-0 mt-0.5"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="2 8 6 12 14 4" />
    </svg>
  );
}

function CheckItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <li className={`flex items-start ${className}`}>
      <CheckIcon />
      <span className="text-cetl-text-muted">{children}</span>
    </li>
  );
}

function IconTile({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cetl-gold/20 to-cetl-violet/10 border border-cetl-gold/25 flex items-center justify-center mb-4">
      <Icon className="w-5 h-5 text-cetl-gold-deep" strokeWidth={1.5} aria-hidden="true" />
    </div>
  );
}

function StepNode({ n, icon: Icon, title }: { n: number; icon: React.ElementType; title: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="text-cetl-gold-deep text-xs font-semibold tracking-widest">{n}</span>
      <div className="w-20 h-20 rounded-full border border-cetl-border bg-cetl-surface flex items-center justify-center shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-cetl-gold)_10%,transparent)]">
        <Icon className="w-7 h-7 text-cetl-gold-deep" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <span className="font-display text-sm font-bold text-cetl-text">{title}</span>
    </div>
  );
}

function StepFlow({
  steps,
  icons,
  wrapClass = "flex flex-wrap justify-center gap-x-2 gap-y-10",
}: {
  steps: string[];
  icons: React.ElementType[];
  wrapClass?: string;
}) {
  return (
    <div className={`relative ${wrapClass}`}>
      {steps.map((title, i) => (
        <div key={title} className="flex items-center">
          <StepNode n={i + 1} icon={icons[i]} title={title} />
          {i < steps.length - 1 && (
            <div className="hidden md:block w-10 lg:w-14 h-px bg-gradient-to-r from-cetl-gold/40 via-cetl-border to-cetl-gold/40 mx-1 -translate-y-6" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Icon arrays — order must match content bundle arrays ─────── */

// cycle.steps: Understand / Apply / Transfer / Implement
const CYCLE_ICONS = [Lightbulb, Cog, Users, Flag];

// foundation.modules 01–06
const FOUNDATION_ICONS = [Database, Brain, Laptop, LineChart, Scale, Target];

// journeys.roles: Users / Champions / Developers / Leadership
const JOURNEY_ICONS = [UserCheck, MessageCircle, Code2, Briefcase];

// useCases.steps (7 steps)
const USE_CASE_ICONS = [AlertTriangle, BarChart3, Lightbulb, FileCheck, ShieldCheck, Presentation, TrendingUp];

// process.steps: Analysis / Curriculum / Piloting / Implementation / Scaling
const PROCESS_ICONS = [Search, BookOpen, Rocket, MessageCircle, TrendingUp];

/* ── Page ────────────────────────────────────────────────────── */

export function KiKompetenzprogrammView() {
  const { t } = useLanguage();
  const p = t.KI_PROGRAM;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <NavBar />
      <main className="bg-cetl-dark">
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[10%] w-[700px] h-[700px] rounded-full bg-cetl-blue/[0.08] blur-[160px]" />
          <div className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] rounded-full bg-cetl-violet/[0.07] blur-[160px]" />
        </div>
        <Container className="relative z-10 max-w-4xl text-center flex flex-col items-center">
          <Badge variant="blue" className="mb-6">
            {p.hero.badge}
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cetl-text leading-[1.1] tracking-tight mb-6">
            {p.hero.title}
          </h1>
          <p className="text-cetl-gold-deep text-lg md:text-xl font-display italic mb-6">
            {p.hero.tagline}
          </p>
          <p className="text-cetl-text-muted text-lg leading-relaxed max-w-2xl mb-4">
            {p.hero.p1}
          </p>
          <p className="text-cetl-text-muted text-lg leading-relaxed max-w-2xl mb-8">
            {p.hero.p2}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {p.hero.tags.map((tag) => (
              <Badge key={tag} variant="muted">
                {tag}
              </Badge>
            ))}
          </div>
          <MagneticButton
            href="/#contact"
            className="relative px-9 py-4 bg-cetl-blue text-white font-semibold tracking-wide text-center overflow-hidden group block shadow-[0_4px_24px_-8px_color-mix(in_srgb,var(--color-cetl-blue)_40%,transparent)]"
          >
            <span className="relative z-10">{p.hero.cta}</span>
            <span className="absolute inset-0 bg-cetl-blue-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MagneticButton>
        </Container>
      </section>

      <GoldDivider />

      {/* ── Von Einzeltrainings zum integrierten Programm ── */}
      <section className="py-24 lg:py-32">
        <Container className="max-w-4xl">
          <SectionHeader
            label={p.intro.label}
            title={p.intro.title}
            className="mb-10"
          />
          <p className="text-cetl-text-muted leading-relaxed mb-4">{p.intro.p1}</p>
          <p className="text-cetl-text-muted leading-relaxed mb-10">{p.intro.p2}</p>
          <div className="rounded-2xl border border-cetl-border bg-cetl-surface p-8">
            <p className="text-cetl-text font-semibold text-sm tracking-widest uppercase mb-5">
              {p.intro.outcomesLabel}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {p.intro.outcomes.map((item) => (
                <CheckItem key={item} className="gap-3 text-sm">
                  {item}
                </CheckItem>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── Key visual ── */}
      <Container>
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden ring-1 ring-cetl-border mb-24">
          <Image
            src="/chess-queen.jpg"
            alt={p.keyVisual.alt}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cetl-darker/70 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-6 right-6 text-white/85 font-display text-lg md:text-xl italic max-w-xl">
            {p.keyVisual.caption}
          </p>
        </div>
      </Container>

      <GoldDivider />

      {/* ── Executional Learning cycle ── */}
      <section className="py-24 lg:py-32 bg-cetl-surface">
        <Container>
          <SectionHeader
            label={p.cycle.label}
            title={p.cycle.title}
            subtitle={p.cycle.subtitle}
            className="mb-16"
          />
          <StepFlow steps={p.cycle.steps} icons={CYCLE_ICONS} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            {p.cycle.details.map((step) => (
              <div key={step.n} className="flex gap-4">
                <span className="font-display text-3xl font-bold text-cetl-gold/30 leading-none shrink-0">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-cetl-text mb-1.5">{step.title}</h3>
                  <p className="text-cetl-text-muted text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <GoldDivider />

      {/* ── Foundation Program ── */}
      <section id="foundation" className="py-24 lg:py-32">
        <Container>
          <SectionHeader
            label={p.foundation.label}
            title={p.foundation.title}
            subtitle={p.foundation.subtitle}
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.foundation.modules.map((mod, i) => (
              <TiltCard
                key={mod.n}
                className="gradient-edge relative flex flex-col bg-cetl-surface rounded-2xl border border-cetl-border p-7"
              >
                <span className="font-display text-6xl font-bold text-cetl-gold/[0.08] absolute top-5 right-6 leading-none select-none">
                  {mod.n}
                </span>
                <IconTile icon={FOUNDATION_ICONS[i]} />
                <h3 className="font-display text-lg font-bold text-cetl-text mb-2 leading-snug">
                  {mod.title}
                </h3>
                <p className="text-cetl-text-muted text-sm leading-relaxed mb-5">{mod.text}</p>
                <ul className="mt-auto flex flex-col gap-2.5">
                  {mod.items.map((item) => (
                    <CheckItem key={item} className="gap-2.5 text-xs">
                      {item}
                    </CheckItem>
                  ))}
                </ul>
              </TiltCard>
            ))}
          </div>
        </Container>
      </section>

      <GoldDivider />

      {/* ── Role-based Learning Journeys ── */}
      <section id="journeys" className="py-24 lg:py-32 bg-cetl-surface">
        <Container>
          <SectionHeader
            label={p.journeys.label}
            title={p.journeys.title}
            subtitle={p.journeys.subtitle}
            className="mb-16"
          />

          {/* Org-chart style overview */}
          <div className="hidden md:flex flex-col items-center mb-16">
            <div className="w-14 h-14 rounded-full border border-cetl-gold/40 bg-cetl-dark flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-cetl-gold-deep" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="w-px h-8 bg-cetl-border" />
            <div className="w-full h-px bg-cetl-border mb-8" style={{ maxWidth: "72%" }} />
            <div className="grid grid-cols-4 gap-6 w-full max-w-4xl">
              {p.journeys.roles.map((journey, i) => (
                <div key={journey.role} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-11 h-11 rounded-full border border-cetl-border bg-cetl-dark flex items-center justify-center">
                    {(() => { const Icon = JOURNEY_ICONS[i]; return <Icon className="w-5 h-5 text-cetl-gold-deep" strokeWidth={1.5} aria-hidden="true" />; })()}
                  </div>
                  <span className="text-cetl-text-muted text-xs font-medium leading-tight">
                    {journey.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {p.journeys.roles.map((journey, i) => (
              <TiltCard
                key={journey.role}
                className="gradient-edge relative flex flex-col bg-cetl-dark rounded-2xl border border-cetl-border p-8"
              >
                <IconTile icon={JOURNEY_ICONS[i]} />
                <h3 className="font-display text-xl font-bold text-cetl-text mb-1.5">{journey.role}</h3>
                <p className="text-cetl-gold-deep text-sm font-medium mb-3">{journey.subtitle}</p>
                <p className="text-cetl-text-muted text-sm leading-relaxed mb-5">{journey.audience}</p>
                <p className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase mb-3">
                  {p.journeys.focusLabel}
                </p>
                <ul className="flex flex-col gap-2 mb-6">
                  {journey.focus.map((item) => (
                    <CheckItem key={item} className="gap-2.5 text-sm">
                      {item}
                    </CheckItem>
                  ))}
                </ul>
                <div className="mt-auto pt-5 border-t border-cetl-border">
                  <p className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase mb-2">
                    {p.journeys.projectLabel}
                  </p>
                  <p className="text-cetl-text-muted text-sm leading-relaxed">{journey.project}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </Container>
      </section>

      <GoldDivider />

      {/* ── Use Case cycle ── */}
      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeader
            label={p.useCases.label}
            title={p.useCases.title}
            subtitle={p.useCases.subtitle}
            className="mb-16"
          />
          <StepFlow steps={p.useCases.steps} icons={USE_CASE_ICONS} wrapClass="flex flex-wrap justify-center gap-x-1 gap-y-10" />
          <div className="mt-16 rounded-2xl border border-cetl-border bg-cetl-surface p-8 max-w-2xl mx-auto text-center">
            <p className="text-cetl-gold-deep text-xs font-semibold tracking-widest uppercase mb-3">
              {p.useCases.crossIndustryLabel}
            </p>
            <p className="text-cetl-text-muted text-sm leading-relaxed">
              {p.useCases.crossIndustryText}
            </p>
          </div>
        </Container>
      </section>

      <GoldDivider />

      {/* ── Customization ── */}
      <section className="py-24 lg:py-32 bg-cetl-surface">
        <Container>
          <SectionHeader
            label={p.customization.label}
            title={p.customization.title}
            subtitle={p.customization.subtitle}
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {p.customization.groups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-cetl-border bg-cetl-dark p-7">
                <h3 className="font-display text-base font-bold text-cetl-text mb-5">{group.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <CheckItem key={item} className="gap-2.5 text-sm">
                      {item}
                    </CheckItem>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <GoldDivider />

      {/* ── Process ── */}
      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeader
            label={p.process.label}
            title={p.process.title}
            subtitle={p.process.subtitle}
            className="mb-16"
          />
          <StepFlow steps={p.process.steps} icons={PROCESS_ICONS} />
        </Container>
      </section>

      <GoldDivider />

      {/* ── Benefits ── */}
      <section className="py-24 lg:py-32 bg-cetl-surface">
        <Container>
          <SectionHeader label={p.benefits.label} title={p.benefits.title} className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.benefits.items.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-cetl-border bg-cetl-dark p-7">
                <h3 className="font-display text-base font-bold text-cetl-gold-deep mb-2">{benefit.title}</h3>
                <p className="text-cetl-text-muted text-sm leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <GoldDivider />

      {/* ── Formats & Faculty ── */}
      <section className="py-24 lg:py-32">
        <Container className="max-w-4xl">
          <SectionHeader
            label={p.formats.label}
            title={p.formats.title}
            subtitle={p.formats.subtitle}
            className="mb-10"
          />
          <div className="flex flex-wrap gap-2.5 mb-16">
            {p.formats.badges.map((badge) => (
              <Badge key={badge} variant="muted">
                {badge}
              </Badge>
            ))}
          </div>

          <div className="rounded-2xl border border-cetl-border bg-cetl-surface p-8">
            <p className="text-cetl-gold-deep text-xs font-semibold tracking-widest uppercase mb-3">
              {p.formats.facultyLabel}
            </p>
            <p className="text-cetl-text-muted text-sm leading-relaxed">{p.formats.facultyText}</p>
          </div>
        </Container>
      </section>

      <GoldDivider />

      {/* ── FAQ ── */}
      <section className="py-24 lg:py-32 bg-cetl-surface">
        <Container className="max-w-4xl">
          <SectionHeader label={p.faq.label} title={p.faq.title} className="mb-12" />
          <div className="flex flex-col gap-3">
            {p.faq.items.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q} className="rounded-xl border border-cetl-border bg-cetl-dark overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-cetl-text font-semibold text-sm md:text-base">{item.q}</span>
                    <PlusIcon open={open} />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-cetl-text-muted text-sm leading-relaxed px-6 pb-5">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-24 lg:py-32">
        <Container className="max-w-2xl text-center flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cetl-text leading-tight mb-5">
            {p.closing.title}
          </h2>
          <p className="text-cetl-text-muted leading-relaxed mb-10">{p.closing.text}</p>
          <MagneticButton
            href="/#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-cetl-gold text-cetl-darker font-semibold tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105 rounded-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              {p.closing.cta}
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cetl-gold-light to-cetl-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MagneticButton>
        </Container>
      </section>
      </main>
      <Footer />
    </>
  );
}
