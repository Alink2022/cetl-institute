"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { de } from "./content.de";
import { en } from "./content.en";
import type { ContentBundle } from "./content-types";

export type Lang = "de" | "en";

const BUNDLES: Record<Lang, ContentBundle> = { de, en };

const STORAGE_KEY = "cetl-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: ContentBundle;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "de" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: BUNDLES[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
