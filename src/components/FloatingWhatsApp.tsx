import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CONTACT } from "../lib/constants";

export default function FloatingWhatsApp() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 end-4 sm:bottom-5 sm:end-5 lg:bottom-8 lg:end-8 z-40"
          style={{ marginBottom: "env(safe-area-inset-bottom)" }}
        >
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2.5 sm:gap-3 bg-ink text-paper ps-3 sm:ps-4 pe-4 sm:pe-5 h-13 sm:h-14 rounded-full shadow-deep hover:bg-accent transition-colors"
          >
            <span className="w-9 h-9 rounded-full bg-paper text-ink flex items-center justify-center">
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
            </span>
            <span className="text-sm font-medium">{t("common.cta.whatsapp")}</span>
          </a>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="absolute -top-2 -start-2 w-7 h-7 sm:w-6 sm:h-6 rounded-full bg-paper border border-line text-ink-muted hover:text-ink flex items-center justify-center shadow-soft"
          >
            <X className="w-3 h-3" strokeWidth={2} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
