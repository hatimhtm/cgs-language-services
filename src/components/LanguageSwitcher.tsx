import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../i18n/config";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current =
    LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) ?? LANGUAGES[0];

  const change = (code: string) => {
    void i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label={t("nav.language")}
        className="flex items-center gap-2 h-10 px-3 rounded-full border border-line/80 hover:border-ink/40 hover:bg-paper-warm/60 transition-colors"
      >
        <Globe className="w-4 h-4 text-ink" strokeWidth={1.5} />
        <span className="text-xs font-medium uppercase tracking-wider text-ink">
          {current.code}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full end-0 mt-2 min-w-[180px] bg-paper border border-line rounded-2xl shadow-deep overflow-hidden origin-top-right z-50"
          >
            <div className="p-1.5">
              {LANGUAGES.map((l) => {
                const active = l.code === current.code;
                return (
                  <button
                    key={l.code}
                    onClick={() => change(l.code)}
                    className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                      active
                        ? "bg-ink text-paper"
                        : "text-ink hover:bg-paper-warm/70"
                    }`}
                    dir={l.dir}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider ${
                          active ? "text-paper/70" : "text-ink-muted"
                        }`}
                      >
                        {l.code}
                      </span>
                      <span className={l.code === "zh" ? "font-zh" : ""}>
                        {l.native}
                      </span>
                    </span>
                    {active && <Check className="w-3.5 h-3.5" strokeWidth={2} />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
