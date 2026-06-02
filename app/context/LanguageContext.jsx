"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pt");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Carregar preferência salva
    const savedLanguage = localStorage.getItem("portfolio_language") || "pt";
    setLanguage(savedLanguage);
    setIsLoaded(true);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("portfolio_language", lang);
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de LanguageProvider");
  }
  return context;
}
