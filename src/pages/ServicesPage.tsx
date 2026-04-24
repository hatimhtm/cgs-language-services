import { motion } from "framer-motion";
import {
  GraduationCap,
  FileText,
  Award,
  ShieldAlert,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import Languages from "../components/Languages";
import CTA from "../components/CTA";
import { CONTACT } from "../lib/constants";

const ICONS = {
  diploma: GraduationCap,
  transcript: FileText,
  certificate: Award,
  criminal: ShieldAlert,
};

export default function ServicesPage() {
  const { t } = useTranslation();
  const keys = ["diploma", "transcript", "certificate", "criminal"] as const;

  return (
    <PageTransition>
      <PageHero
        eyebrow={t("services.hero.eyebrow")}
        titleA={t("services.hero.titleA")}
        titleB={t("services.hero.titleB")}
        intro={t("services.hero.intro")}
      />

      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 space-y-16 sm:space-y-24 lg:space-y-32">
          {keys.map((k, i) => {
            const Icon = ICONS[k];
            const included = t(`services.detail.${k}.included`, {
              returnObjects: true,
            }) as string[];
            const reverse = i % 2 === 1;

            return (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start"
              >
                <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-ink text-paper flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                      {String(i + 1).padStart(2, "0")} / {String(keys.length).padStart(2, "0")}
                    </div>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink mb-4 sm:mb-6 text-balance">
                    {t(`services.detail.${k}.title`)}
                  </h2>
                  <p className="text-ink-muted text-[16px] sm:text-[17px] leading-relaxed text-pretty">
                    {t(`services.detail.${k}.desc`)}
                  </p>
                </div>

                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <div className="bg-paper-warm/60 border border-line rounded-2xl p-6 sm:p-7 lg:p-8">
                    <div className="eyebrow mb-4 sm:mb-5">{t("services.includedTitle")}</div>
                    <ul className="space-y-2.5 sm:space-y-3">
                      {included.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-[14px] sm:text-[15px] text-ink">
                          <Check className="w-4 h-4 mt-1 flex-shrink-0 text-accent" strokeWidth={2} />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 border-t border-line/60">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="bg-ink text-paper rounded-2xl sm:rounded-3xl p-7 sm:p-10 lg:p-14 relative overflow-hidden"
          >
            <div className="absolute -top-20 -end-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
            <div className="relative max-w-2xl">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-4 sm:mb-5">
                {t("services.more.title")}
              </h3>
              <p className="text-paper/70 text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed text-pretty">
                {t("services.more.body")}
              </p>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 sm:mt-8 inline-flex items-center gap-3 bg-paper text-ink ps-5 pe-2 h-12 rounded-full text-[14px] sm:text-[15px] font-medium hover:bg-accent hover:text-paper transition-colors group"
              >
                {t("services.more.cta")}
                <span className="w-9 h-9 rounded-full bg-ink text-paper flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 rtl:-scale-x-100">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Languages />
      <CTA />
    </PageTransition>
  );
}
