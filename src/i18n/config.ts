import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";
import zh from "./locales/zh.json";

export const LANGUAGES = [
  { code: "en", label: "English", native: "English", dir: "ltr" as const },
  { code: "fr", label: "French", native: "Français", dir: "ltr" as const },
  { code: "ar", label: "Arabic", native: "العربية", dir: "rtl" as const },
  { code: "zh", label: "Chinese", native: "中文", dir: "ltr" as const },
];

export type LangCode = (typeof LANGUAGES)[number]["code"];

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar },
      zh: { translation: zh },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "fr", "ar", "zh"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "cgs_lang",
    },
  });

export default i18n;
