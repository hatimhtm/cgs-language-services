import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, FileSearch, Send, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const ICONS = { one: MessageCircle, two: FileSearch, three: Send };

export default function Process() {
  const { t } = useTranslation();
  const keys = ["one", "two", "three"] as const;
  const nums = { one: "01", two: "02", three: "03" };

  return (
    <section id="process" className="relative py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4 sm:mb-5">{t("home.process.eyebrow")}</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl leading-[1.04] lg:leading-[1.02] tracking-tight text-ink text-balance">
              {t("home.process.titleA")}{" "}
              <span className="italic font-light text-accent">
                {t("home.process.titleB")}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-ink-muted text-[17px] leading-relaxed text-pretty">
              {t("home.process.intro")}
            </p>
            <Link
              to="/process"
              className="inline-flex items-center gap-2 mt-5 text-ink text-sm font-medium border-b border-ink/40 hover:border-ink transition-colors"
            >
              {t("home.process.deepDive")}
              <ArrowUpRight className="w-3.5 h-3.5 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-px bg-line" />

          <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 relative">
            {keys.map((k, i) => {
              const Icon = ICONS[k];
              return (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="flex items-center gap-4 mb-6 sm:mb-8">
                    <div className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full bg-paper border border-line flex items-center justify-center relative z-10 shadow-soft flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-ink rtl:-scale-x-100" strokeWidth={1.5} />
                    </div>
                    <div className="font-serif text-4xl sm:text-5xl text-ink/15 tracking-tight">
                      {nums[k]}
                    </div>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
                    {t(`home.process.steps.${k}.time`)}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-[28px] text-ink mb-3 sm:mb-4 tracking-tight">
                    {t(`home.process.steps.${k}.title`)}
                  </h3>
                  <p className="text-ink-muted leading-relaxed text-[14px] sm:text-[15px]">
                    {t(`home.process.steps.${k}.body`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
