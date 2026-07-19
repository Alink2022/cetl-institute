"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { PlusIcon } from "@/components/ui/PlusIcon";
import { useLanguage } from "@/lib/i18n";

export function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 lg:py-44 bg-cetl-dark">
      <Container className="max-w-4xl">
        <SectionHeader label={t.UI.faq.label} title={t.UI.faq.title} className="mb-12" />

        <div className="flex flex-col gap-3">
          {t.FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                className="rounded-xl border border-cetl-border bg-cetl-surface overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
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
  );
}
