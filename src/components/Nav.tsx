import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CONTACT } from "../lib/constants";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const LINKS = [
    { to: "/services", label: t("nav.services") },
    { to: "/process", label: t("nav.process") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-b border-line/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-ink/10 shadow-soft">
            <img src="/logo-circle.png" alt="CGS" className="w-full h-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-[15px] lg:text-base tracking-tight text-ink whitespace-nowrap">
              CGS{" "}
              <span className="text-ink-muted font-normal italic">
                {t("common.brand.tagline")}
              </span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-ink-muted/80 mt-0.5 hidden sm:block whitespace-nowrap">
              {t("common.brand.subline")}
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm transition-colors relative group ${
                  isActive ? "text-ink" : "text-ink/70 hover:text-ink"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-ink transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:gap-3">
          <LanguageSwitcher />
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-ink text-paper px-4 lg:px-5 h-10 rounded-full text-sm font-medium hover:bg-ink-soft transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            {t("common.cta.quote")}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-ink"
            aria-label={t("nav.menu")}
          >
            <span
              className={`w-5 h-px bg-ink transition-all ${
                open ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`w-5 h-px bg-ink transition-all ${
                open ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-line/60 bg-paper overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className="text-base text-ink/80 hover:text-ink"
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 bg-ink text-paper px-5 h-11 rounded-full text-sm font-medium w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                {t("common.cta.quote")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
