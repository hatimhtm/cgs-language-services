import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as Array<{
    q: string;
    a: string;
  }>;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-10 sm:mb-14 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4 sm:mb-5">{t("faq.eyebrow")}</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl leading-[1.04] lg:leading-[1.02] tracking-tight text-ink text-balance">
              {t("faq.titleA")}{" "}
              <span className="italic font-light text-accent">{t("faq.titleB")}</span>
            </h2>
          </div>
        </div>

        <div className="border-t border-line">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="border-b border-line"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 sm:gap-6 py-5 sm:py-6 lg:py-7 text-start group"
                >
                  <span className="font-serif text-lg sm:text-xl lg:text-2xl text-ink tracking-tight group-hover:text-accent transition-colors text-balance leading-snug">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-9 lg:h-9 rounded-full border border-line flex items-center justify-center mt-0.5 group-hover:border-ink transition-colors"
                  >
                    <Plus className="w-4 h-4" strokeWidth={1.5} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 sm:pb-7 pe-4 sm:pe-16 text-ink-muted leading-relaxed text-[14px] sm:text-[15px] lg:text-base text-pretty">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
