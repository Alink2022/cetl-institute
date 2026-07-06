"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { FAQ_ITEMS } from "@/lib/content";

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 shrink-0 text-cetl-gold transition-transform duration-300 ${open ? "rotate-45" : ""}`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M8 2v12M2 8h12" />
    </svg>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-cetl-dark">
      <Container className="max-w-4xl">
        <SectionHeader
          label="FAQ"
          title="Questions Leadership Teams Ask First"
          className="mb-12"
        />

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => {
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
