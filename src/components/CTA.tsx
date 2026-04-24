import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CONTACT } from "../lib/constants";

export default function CTA() {
  const { t } = useTranslation();
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-ink text-paper rounded-[24px] sm:rounded-[28px] lg:rounded-[40px] p-8 sm:p-10 lg:p-20 overflow-hidden"
        >
          <div className="absolute -top-32 -end-32 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -start-20 w-[400px] h-[400px] bg-paper/5 rounded-full blur-3xl" />

          <div className="absolute top-10 end-10 lg:top-16 lg:end-16 w-24 h-24 lg:w-32 lg:h-32 opacity-10">
            <div className="w-full h-full rounded-full border-2 border-paper flex items-center justify-center font-zh text-paper text-2xl lg:text-3xl animate-slow-spin">
              认证
            </div>
          </div>

          <div className="relative max-w-3xl">
            <div className="eyebrow text-paper/60 mb-4 sm:mb-5">{t("home.cta.eyebrow")}</div>
            <h2 className="font-serif text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] lg:leading-[1.02] tracking-tight text-paper text-balance">
              {t("home.cta.titleA")}
              <br />
              <span className="italic font-light text-paper/70">
                {t("home.cta.titleB")}
              </span>
            </h2>
            <p className="mt-6 sm:mt-8 text-paper/70 text-[16px] sm:text-[17px] lg:text-lg leading-relaxed max-w-xl text-pretty">
              {t("home.cta.intro")}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between sm:justify-start gap-3 bg-paper text-ink ps-5 sm:ps-6 pe-2 h-13 sm:h-14 rounded-full text-[15px] font-medium hover:bg-accent hover:text-paper transition-all duration-500"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{t("common.cta.whatsapp")}</span>
                </span>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-ink text-paper flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 rtl:-scale-x-100 flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href={`mailto:${CONTACT.email}?subject=Translation%20quote%20request`}
                className="inline-flex items-center justify-center sm:justify-start gap-2 text-paper/80 h-12 sm:h-14 px-3 text-[14px] sm:text-[15px] font-medium border-b border-paper/20 sm:border-transparent hover:border-paper transition-colors break-all sm:break-normal"
              >
                {t("common.cta.email", { address: CONTACT.email })}
              </a>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-paper/10 text-[13px] sm:text-sm text-paper/50" dir="ltr">
              {CONTACT.whatsappDisplay} · {CONTACT.location} · {t("home.cta.note")}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
