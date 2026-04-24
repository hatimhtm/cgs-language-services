import { motion } from "framer-motion";
import { Compass, FileCheck2, Users, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const ICONS = { expertise: Compass, format: FileCheck2, human: Users, time: Clock };

export default function WhyUs() {
  const { t } = useTranslation();
  const keys = ["expertise", "format", "human", "time"] as const;

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-paper-warm/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
          <div className="lg:col-span-7 lg:col-start-1">
            <div className="eyebrow mb-4 sm:mb-5">{t("home.whyUs.eyebrow")}</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl leading-[1.04] lg:leading-[1.02] tracking-tight text-ink text-balance">
              {t("home.whyUs.titleA")}{" "}
              <span className="italic font-light text-accent">
                {t("home.whyUs.titleB")}
              </span>
            </h2>
            <p className="mt-6 sm:mt-8 text-ink-muted text-[16px] sm:text-[17px] leading-relaxed max-w-2xl text-pretty">
              {t("home.whyUs.intro")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-line/60 rounded-2xl sm:rounded-3xl overflow-hidden border border-line/60">
          {keys.map((k, i) => {
            const Icon = ICONS[k];
            return (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-paper p-7 sm:p-8 lg:p-12 hover:bg-paper-warm/50 transition-colors duration-500"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-ink text-paper flex items-center justify-center mb-5 sm:mb-6">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] text-ink mb-3 sm:mb-4 tracking-tight text-balance">
                  {t(`home.whyUs.reasons.${k}.title`)}
                </h3>
                <p className="text-ink-muted leading-relaxed text-[14px] sm:text-[15px] text-pretty">
                  {t(`home.whyUs.reasons.${k}.body`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
