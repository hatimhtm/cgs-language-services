import { motion } from "framer-motion";
import { Camera, Sun, Crop, FileImage } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

const SCAN_ICONS = [Sun, Crop, Camera, FileImage];

export default function ProcessPage() {
  const { t } = useTranslation();
  const scanItems = t("process.scan.items", { returnObjects: true }) as Array<{
    title: string;
    body: string;
  }>;

  return (
    <PageTransition>
      <PageHero
        eyebrow={t("process.hero.eyebrow")}
        titleA={t("process.hero.titleA")}
        titleB={t("process.hero.titleB")}
        intro={t("process.hero.intro")}
      />

      <Process />

      <section className="py-14 sm:py-20 lg:py-24 bg-paper-warm/50 border-y border-line/60">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-12 gap-6 lg:gap-10"
          >
            <div className="lg:col-span-5">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-ink text-balance">
                {t("process.sla.title")}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-ink-muted text-[16px] sm:text-[17px] leading-relaxed text-pretty">
                {t("process.sla.body")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl sm:text-3xl lg:text-5xl tracking-tight text-ink mb-10 sm:mb-14 text-balance max-w-3xl"
          >
            {t("process.scan.title")}
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {scanItems.map((item, i) => {
              const Icon = SCAN_ICONS[i % SCAN_ICONS.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border border-line/80 rounded-2xl p-5 sm:p-6 lg:p-7 hover:border-ink/30 hover:shadow-soft transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-xl bg-ink/5 flex items-center justify-center mb-4 sm:mb-5">
                    <Icon className="w-4 h-4 text-ink" strokeWidth={1.5} />
                  </div>
                  <div className="font-serif text-lg sm:text-xl lg:text-[22px] text-ink tracking-tight mb-2">
                    {item.title}
                  </div>
                  <p className="text-ink-muted text-[13px] sm:text-sm leading-relaxed">{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 bg-ink text-paper">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-12 gap-6 lg:gap-10"
          >
            <div className="lg:col-span-5">
              <div className="eyebrow text-paper/50 mb-3 sm:mb-4">04</div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-paper text-balance">
                {t("process.deliverable.title")}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-paper/75 text-[16px] sm:text-[17px] leading-relaxed text-pretty">
                {t("process.deliverable.body")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ />
      <CTA />
    </PageTransition>
  );
}
