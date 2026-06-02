"use client";

import { LanguageProvider } from "./context/LanguageContext";

export function ClientLayout({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
