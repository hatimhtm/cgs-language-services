import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Clock, ArrowUpRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import { CONTACT } from "../lib/constants";

export default function ContactPage() {
  const { t } = useTranslation();
  const sendItems = t("contact.send.items", { returnObjects: true }) as string[];

  return (
    <PageTransition>
      <PageHero
        eyebrow={t("contact.hero.eyebrow")}
        titleA={t("contact.hero.titleA")}
        titleB={t("contact.hero.titleB")}
        intro={t("contact.hero.intro")}
      />

      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            <motion.a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="group bg-ink text-paper rounded-2xl p-7 sm:p-8 lg:p-9 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] relative overflow-hidden hover:bg-accent transition-colors duration-500"
            >
              <div className="absolute -top-10 -end-10 w-40 h-40 bg-paper/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-paper/10 flex items-center justify-center mb-6">
                  <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="eyebrow text-paper/60 mb-2">
                  {t("contact.channels.whatsapp.title")}
                </div>
                <div className="font-serif text-2xl lg:text-[26px] tracking-tight mb-3">
                  <span dir="ltr">{CONTACT.whatsappDisplay}</span>
                </div>
                <p className="text-paper/70 text-sm leading-relaxed">
                  {t("contact.channels.whatsapp.body")}
                </p>
              </div>
              <div className="relative mt-6 flex items-center justify-between text-sm">
                <span>{t("contact.channels.whatsapp.action")}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500 rtl:-scale-x-100" />
              </div>
            </motion.a>

            <motion.a
              href={`mailto:${CONTACT.email}?subject=Translation%20quote%20request`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="group bg-paper border border-line/80 rounded-2xl p-7 sm:p-8 lg:p-9 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] hover:border-ink/30 hover:shadow-lift transition-all duration-500"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-ink/5 flex items-center justify-center mb-6">
                  <Mail className="w-5 h-5 text-ink" strokeWidth={1.5} />
                </div>
                <div className="eyebrow mb-2">{t("contact.channels.email.title")}</div>
                <div className="font-serif text-2xl lg:text-[26px] tracking-tight mb-3 text-ink break-all">
                  <span dir="ltr">{CONTACT.email}</span>
                </div>
                <p className="text-ink-muted text-sm leading-relaxed">
                  {t("contact.channels.email.body")}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm text-ink">
                <span>{t("contact.channels.email.action")}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500 rtl:-scale-x-100" />
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="bg-paper-warm/70 border border-line/80 rounded-2xl p-7 sm:p-8 lg:p-9 flex flex-col justify-between min-h-[220px] sm:min-h-[260px]"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-ink/5 flex items-center justify-center mb-6">
                  <MapPin className="w-5 h-5 text-ink" strokeWidth={1.5} />
                </div>
                <div className="eyebrow mb-2">
                  {t("contact.channels.location.title")}
                </div>
                <div className="font-serif text-2xl lg:text-[26px] tracking-tight mb-3 text-ink">
                  {CONTACT.location}
                </div>
                <p className="text-ink-muted text-sm leading-relaxed">
                  {t("contact.channels.location.body")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 border-t border-line/60">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <Clock className="w-5 h-5 text-ink" strokeWidth={1.5} />
              <div className="eyebrow mb-0">{t("contact.hours.title")}</div>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-ink mb-5 sm:mb-6 text-balance">
              {t("contact.hours.body")}
            </h2>
            <div className="inline-flex items-center gap-2 text-sm text-accent bg-accent/8 border border-accent/20 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {t("contact.hours.response")}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-paper-warm/60 border border-line rounded-2xl p-6 sm:p-7 lg:p-8"
          >
            <div className="eyebrow mb-4 sm:mb-5">{t("contact.send.title")}</div>
            <ul className="space-y-2.5 sm:space-y-3">
              {sendItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] sm:text-[15px] text-ink">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0 text-accent" strokeWidth={2} />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
