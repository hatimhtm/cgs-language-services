import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "./i18n/config";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProcessPage from "./pages/ProcessPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const location = useLocation();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const lang = LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) ?? LANGUAGES[0];
    document.documentElement.lang = lang.code;
    document.documentElement.dir = lang.dir;
    document.title = `${t("common.meta.siteTitle")} — ${t("common.brand.subline")}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("common.meta.siteDesc"));
  }, [i18n.resolvedLanguage, t]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <Nav />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
