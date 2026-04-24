import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import Universities from "../components/Universities";
import CTA from "../components/CTA";

export default function AboutPage() {
  const { t } = useTranslation();
  const values = t("about.values.items", { returnObjects: true }) as Array<{
    title: string;
    body: string;
  }>;

  return (
    <PageTransition>
      <PageHero
        eyebrow={t("about.hero.eyebrow")}
        titleA={t("about.hero.titleA")}
        titleB={t("about.hero.titleB")}
        intro={t("about.hero.intro")}
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-ink text-balance lg:sticky lg:top-28"
              >
                {t("about.story.title")}
              </motion.h2>
            </div>
            <div className="lg:col-span-8 space-y-5 sm:space-y-7 text-[16px] sm:text-[17px] lg:text-[18px] leading-relaxed text-ink/85 text-pretty">
              {[t("about.story.p1"), t("about.story.p2"), t("about.story.p3")].map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  {i === 0 ? (
                    <>
                      <span className="font-serif text-3xl leading-none text-accent float-start me-2 mt-1">
                        {p.charAt(0)}
                      </span>
                      {p.slice(1)}
                    </>
                  ) : (
                    p
                  )}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24 bg-paper-warm/50 border-y border-line/60">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-center"
          >
            <div className="lg:col-span-7">
              <div className="eyebrow mb-3 sm:mb-4">China Global Study</div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-ink mb-4 sm:mb-5 text-balance">
                {t("about.parent.title")}
              </h2>
              <p className="text-ink-muted text-[16px] sm:text-[17px] leading-relaxed text-pretty">
                {t("about.parent.body")}
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=61580482755782"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-5 sm:mt-6 text-ink text-sm font-medium border-b border-ink/40 hover:border-ink transition-colors"
              >
                Visit China Global Study
                <ArrowUpRight className="w-3.5 h-3.5 rtl:-scale-x-100" />
              </a>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last">
              <motion.div
                initial={{ rotate: -2, scale: 0.96 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden ring-4 sm:ring-8 ring-paper shadow-deep"
              >
                <img src="/logo-circle.png" alt="CGS" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl sm:text-3xl lg:text-5xl tracking-tight text-ink mb-10 sm:mb-14 text-balance max-w-2xl"
          >
            {t("about.values.title")}
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-line/80 rounded-2xl p-6 sm:p-7 lg:p-8 hover:border-ink/30 hover:shadow-lift transition-all duration-500 relative"
              >
                <div className="font-serif text-4xl sm:text-5xl text-ink/10 tracking-tight mb-3 sm:mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-lg sm:text-xl lg:text-[22px] text-ink tracking-tight mb-2 sm:mb-3 text-balance">
                  {v.title}
                </h3>
                <p className="text-ink-muted text-[14px] sm:text-[15px] leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Universities />
      <CTA />
    </PageTransition>
  );
}
