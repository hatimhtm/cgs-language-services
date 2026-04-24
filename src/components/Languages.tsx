import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Languages() {
  const { t } = useTranslation();
  const codes = [
    { code: "EN", key: "en", dir: "ltr" as const },
    { code: "FR", key: "fr", dir: "ltr" as const },
    { code: "AR", key: "ar", dir: "rtl" as const },
    { code: "ZH", key: "zh", dir: "ltr" as const },
  ];

  return (
    <section id="languages" className="relative py-16 sm:py-20 lg:py-32 bg-ink text-paper overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="paper-grid h-full" style={{ filter: "invert(1)" }} />
      </div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow text-paper/50 mb-4 sm:mb-5">
              {t("home.languages.eyebrow")}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl leading-[1.04] lg:leading-[1.02] tracking-tight text-paper text-balance">
              {t("home.languages.titleA")}
              <br />
              <span className="italic font-light text-paper/70">
                {t("home.languages.titleB")}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-paper/70 text-[17px] leading-relaxed text-pretty">
              {t("home.languages.intro")}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {codes.map((l, i) => (
            <motion.div
              key={l.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative border border-paper/15 rounded-2xl p-6 sm:p-7 hover:border-paper/40 hover:bg-paper/5 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <div className="text-[11px] uppercase tracking-[0.22em] text-paper/50">
                  {t(`home.languages.names.${l.key}`)}
                </div>
                <div className="text-paper/40 text-xs font-mono">{l.code}</div>
              </div>
              <div
                className={`font-serif text-2xl sm:text-3xl lg:text-4xl text-paper mb-3 sm:mb-4 ${
                  l.key === "zh" || l.key === "ar" ? "font-zh" : ""
                }`}
                dir={l.dir}
              >
                {l.key === "en" && "English"}
                {l.key === "fr" && "Français"}
                {l.key === "ar" && "العربية"}
                {l.key === "zh" && "中文"}
              </div>
              <div
                className={`text-sm text-paper/60 italic font-light ${
                  l.key === "zh" || l.key === "ar" ? "font-zh not-italic" : ""
                }`}
                dir={l.dir}
              >
                {t(`home.languages.samples.${l.key}`)}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[13px] sm:text-sm text-paper/50">
          <span>{t("home.languages.names.en")}</span>
          <Arrow />
          <span>{t("home.languages.names.zh")}</span>
          <span className="mx-3 text-paper/20">·</span>
          <span>{t("home.languages.names.ar")}</span>
          <Arrow />
          <span>{t("home.languages.names.en")}</span>
          <span className="mx-3 text-paper/20">·</span>
          <span>{t("home.languages.names.fr")}</span>
          <Arrow />
          <span>{t("home.languages.names.zh")}</span>
          <span className="mx-3 text-paper/20">·</span>
          <span className="text-paper/70">{t("home.languages.moreCombos")}</span>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      className="w-4 h-4 mx-1 text-paper/40 rtl:-scale-x-100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path d="M5 12h14m-4-4 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
