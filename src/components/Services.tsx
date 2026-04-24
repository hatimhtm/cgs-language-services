import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  FileText,
  Award,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { CONTACT } from "../lib/constants";

const ICONS = {
  diploma: GraduationCap,
  transcript: FileText,
  certificate: Award,
  criminal: ShieldAlert,
};

export default function Services() {
  const { t } = useTranslation();
  const keys = ["diploma", "transcript", "certificate", "criminal"] as const;

  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5">{t("home.services.eyebrow")}</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl leading-[1.04] lg:leading-[1.02] tracking-tight text-ink text-balance">
              {t("home.services.titleA")}{" "}
              <span className="italic font-light text-accent">
                {t("home.services.titleB")}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-muted text-[17px] leading-relaxed text-pretty">
              {t("home.services.intro")}
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 mt-5 text-ink text-sm font-medium border-b border-ink/40 hover:border-ink transition-colors"
            >
              {t("home.services.explore")}
              <ArrowUpRight className="w-3.5 h-3.5 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {keys.map((k, i) => {
            const Icon = ICONS[k];
            const tag = k === "diploma" ? t("home.services.docs.diploma.tag") : null;
            return (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative bg-paper border border-line/80 rounded-2xl p-6 sm:p-7 lg:p-9 hover:border-ink/30 hover:shadow-lift transition-all duration-500"
              >
                {tag && (
                  <span className="absolute top-5 sm:top-6 end-5 sm:end-6 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-accent bg-accent/8 px-2 sm:px-2.5 py-1 rounded-full border border-accent/20">
                    {tag}
                  </span>
                )}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-ink/5 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-ink group-hover:text-paper transition-all duration-500">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] text-ink mb-3 tracking-tight">
                  {t(`home.services.docs.${k}.title`)}
                </h3>
                <p className="text-ink-muted leading-relaxed text-[14px] sm:text-[15px]">
                  {t(`home.services.docs.${k}.body`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6 p-7 sm:p-8 lg:p-10 bg-ink text-paper rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 end-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="relative max-w-xl">
            <div className="eyebrow text-paper/60 mb-3">
              {t("home.services.more.eyebrow")}
            </div>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-paper tracking-tight">
              {t("home.services.more.title")}
            </h3>
          </div>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center gap-3 bg-paper text-ink ps-5 pe-2 h-12 rounded-full text-[15px] font-medium hover:bg-accent hover:text-paper transition-colors group"
          >
            {t("common.cta.askDirectly")}
            <span className="w-9 h-9 rounded-full bg-ink text-paper flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 rtl:-scale-x-100">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
