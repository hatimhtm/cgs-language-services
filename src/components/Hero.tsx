import { motion } from "framer-motion";
import { ArrowUpRight, Clock, ShieldCheck } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";
import { CONTACT } from "../lib/constants";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 paper-grid opacity-40" />
      <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-gradient-to-br from-accent/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-ink/5 border border-ink/10 rounded-full text-[11px] sm:text-xs text-ink-muted mb-6 sm:mb-8 max-w-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
          <span className="truncate sm:whitespace-normal">{t("hero.badge")}</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[34px] leading-[1.08] min-[400px]:text-[40px] sm:text-5xl md:text-6xl lg:text-[84px] lg:leading-[0.98] tracking-tight text-ink text-balance"
            >
              {t("hero.titleA")}
              <br />
              {t("hero.titleB")}{" "}
              <span className="italic font-light text-accent">{t("hero.titleC")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-ink-muted max-w-2xl leading-relaxed text-pretty"
            >
              <Trans
                i18nKey="hero.subtitle"
                components={[<span key="em" className="text-ink" />]}
              />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-between sm:justify-start gap-3 bg-ink text-paper ps-5 sm:ps-6 pe-2 h-13 sm:h-14 rounded-full text-[15px] font-medium hover:bg-accent transition-all duration-500 overflow-hidden"
              >
                <span className="sm:hidden">{t("common.cta.quote")}</span>
                <span className="hidden sm:inline">{t("common.cta.whatsappLong")}</span>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-paper text-ink flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 rtl:-scale-x-100 flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center sm:justify-start gap-2 text-ink h-12 sm:h-14 px-2 text-[15px] font-medium border-b border-ink/20 sm:border-transparent hover:border-ink transition-colors"
              >
                {t("common.cta.seeServices")}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-10 sm:mt-14 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4"
            >
              <div className="flex items-center gap-2.5 text-sm text-ink-muted">
                <Clock className="w-4 h-4 text-ink" strokeWidth={1.5} />
                <span>
                  <span className="text-ink font-medium">24h</span> {t("hero.points.turnaround")}
                </span>
              </div>
              <div className="h-5 w-px bg-line hidden sm:block" />
              <div className="flex items-center gap-2.5 text-sm text-ink-muted">
                <ShieldCheck className="w-4 h-4 text-ink" strokeWidth={1.5} />
                <span>
                  <span className="text-ink font-medium">{t("hero.points.acceptedEm")}</span>{" "}
                  {t("hero.points.accepted")}
                </span>
              </div>
              <div className="h-5 w-px bg-line hidden sm:block" />
              <div className="flex items-center gap-2.5 text-sm text-ink-muted">
                <span className="flex -space-x-1 rtl:space-x-reverse">
                  {["EN", "FR", "AR", "ZH"].map((c) => (
                    <span
                      key={c}
                      className="w-6 h-6 rounded-full bg-ink text-paper text-[9px] font-medium flex items-center justify-center ring-2 ring-paper"
                    >
                      {c}
                    </span>
                  ))}
                </span>
                <span>{t("hero.points.languages")}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-4 relative"
          >
            <HeroDocument />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroDocument() {
  const { t } = useTranslation();
  return (
    <div className="relative h-[320px] sm:h-[400px] lg:h-[540px] mt-6 lg:mt-0">
      <motion.div
        initial={{ rotate: -8 }}
        animate={{ rotate: -6 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-6 start-0 w-[75%] aspect-[3/4] bg-paper-warm border border-line shadow-lift rounded-sm p-6 origin-bottom-left"
      >
        <div className="text-[9px] uppercase tracking-[0.22em] text-ink-muted mb-3">
          {t("hero.doc.original")}
        </div>
        <div className="space-y-1.5" dir="ltr">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-1.5 bg-ink/12 rounded-sm"
              style={{ width: `${60 + Math.sin(i * 1.3) * 30}%` }}
            />
          ))}
        </div>
        <div className="absolute bottom-6 start-6 end-6 flex items-end justify-between">
          <div className="space-y-1">
            <div className="h-1 w-12 bg-ink/10 rounded" />
            <div className="h-1 w-8 bg-ink/10 rounded" />
          </div>
          <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center font-zh text-accent text-xs">
            印
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ rotate: 4 }}
        animate={{ rotate: 6 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
        className="absolute top-0 end-0 w-[80%] aspect-[3/4] bg-paper border border-ink/20 shadow-deep rounded-sm p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="text-[9px] uppercase tracking-[0.22em] text-ink font-medium">
            {t("hero.doc.translated")}
          </div>
          <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center">
            <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-2 font-zh" dir="ltr">
          <div className="text-[11px] text-ink leading-relaxed tracking-wider">
            {t("hero.doc.zhTitle")}
          </div>
          <div className="space-y-1.5 mt-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="h-1.5 bg-ink/25 rounded-sm"
                style={{ width: `${55 + Math.cos(i * 1.7) * 35}%` }}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-5 end-5 w-14 h-14 rounded-full border-2 border-accent/60 flex items-center justify-center font-zh text-accent text-[13px] rotate-[8deg] bg-paper">
          <div className="text-center leading-tight">
            <div className="text-[8px] opacity-70">{t("hero.doc.stampOuter")}</div>
            <div>{t("hero.doc.stampInner")}</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -bottom-2 start-4 end-4 lg:-start-4 bg-ink text-paper rounded-full py-3 px-5 flex items-center gap-3 shadow-deep"
      >
        <div className="w-8 h-8 rounded-full bg-paper/10 flex items-center justify-center">
          <Clock className="w-4 h-4" strokeWidth={1.5} />
        </div>
        <div className="text-xs leading-tight">
          <div className="font-medium">{t("hero.doc.bannerTitle")}</div>
          <div className="text-paper/60 text-[11px]">{t("hero.doc.bannerSub")}</div>
        </div>
      </motion.div>
    </div>
  );
}
