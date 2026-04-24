import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  titleA: string;
  titleB: string;
  intro: string;
}

export default function PageHero({ eyebrow, titleA, titleB, intro }: Props) {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 paper-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 end-0 w-[400px] h-[400px] bg-gradient-to-br from-accent/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-5 sm:mb-6"
        >
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[32px] leading-[1.06] min-[400px]:text-[36px] sm:text-5xl lg:text-7xl lg:leading-[0.98] tracking-tight text-ink text-balance max-w-4xl"
        >
          {titleA}{" "}
          <span className="italic font-light text-accent">{titleB}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-ink-muted max-w-2xl leading-relaxed text-pretty"
        >
          {intro}
        </motion.p>
      </div>
    </section>
  );
}
