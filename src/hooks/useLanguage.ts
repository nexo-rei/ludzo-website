"use client";

import { useState, useEffect, useCallback } from "react";
import { translations, type Language } from "@/i18n/translations";

const STORAGE_KEY = "ludzo_lang";

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && (stored === "en" || stored === "hi")) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, []);

  const t = translations[language];

  return { language, setLanguage, t, mounted };
}
