import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const UNIS = [
  { name: "Tsinghua University", img: "/images/tsinghua.png" },
  { name: "Peking University", img: "/images/peking.png" },
  { name: "Fudan University", img: "/images/fudan.png" },
  { name: "Shanghai Jiao Tong", img: "/images/sjtu.png" },
  { name: "Zhejiang University", img: "/images/zhejiang.png" },
  { name: "Nanjing University", img: "/images/nanjing.svg" },
];

export default function Universities() {
  const { t } = useTranslation();
  return (
    <section className="relative py-14 sm:py-20 lg:py-28 border-y border-line/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <div className="eyebrow mb-3 sm:mb-4">{t("home.universities.eyebrow")}</div>
          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-ink tracking-tight max-w-2xl mx-auto text-balance">
            {t("home.universities.title")}
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-8 sm:gap-6 lg:gap-12 items-center"
        >
          {UNIS.map((u) => (
            <div
              key={u.name}
              className="flex flex-col items-center gap-2 sm:gap-3 opacity-60 lg:opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500"
              title={u.name}
            >
              <img src={u.img} alt={u.name} className="h-10 sm:h-14 lg:h-16 w-auto object-contain" />
              <div className="text-[10px] uppercase tracking-[0.14em] text-ink-muted text-center hidden lg:block">
                {u.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
