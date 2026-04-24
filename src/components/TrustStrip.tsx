import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function TrustStrip() {
  const { t } = useTranslation();

  const POINTS = [
    { stat: t("trust.p1Stat"), label: t("trust.p1Label") },
    { stat: t("trust.p2Stat"), label: t("trust.p2Label") },
    { stat: t("trust.p3Stat"), label: t("trust.p3Label") },
    { stat: t("trust.p4Stat"), label: t("trust.p4Label") },
  ];

  return (
    <section className="border-y border-line/60 bg-paper-warm/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4">
          {POINTS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-1"
            >
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-ink">
                {p.stat}
              </div>
              <div className="text-[12px] sm:text-[13px] text-ink-muted">{p.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
