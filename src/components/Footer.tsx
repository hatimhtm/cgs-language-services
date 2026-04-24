import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CONTACT } from "../lib/constants";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-line bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="grid md:grid-cols-12 gap-8 sm:gap-10">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-ink/10">
                <img src="/logo-circle.png" alt="CGS" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-serif text-base text-ink">
                  CGS{" "}
                  <span className="italic font-normal text-ink-muted">
                    {t("common.brand.tagline")}
                  </span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-muted/80 mt-0.5">
                  {t("common.brand.subline")}
                </div>
              </div>
            </Link>
            <p className="text-ink-muted text-[15px] leading-relaxed max-w-sm text-pretty">
              {t("footer.blurb")}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">{t("footer.sections")}</div>
            <ul className="space-y-3 text-[15px] text-ink/80">
              <li><Link to="/services" className="hover:text-ink transition-colors">{t("nav.services")}</Link></li>
              <li><Link to="/process" className="hover:text-ink transition-colors">{t("nav.process")}</Link></li>
              <li><Link to="/about" className="hover:text-ink transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/contact" className="hover:text-ink transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow mb-5">{t("footer.contact")}</div>
            <ul className="space-y-4 text-[15px]">
              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-ink/90 hover:text-accent transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <span>
                    <span className="block">{t("footer.whatsapp")}</span>
                    <span className="text-ink-muted text-sm" dir="ltr">{CONTACT.whatsappDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-3 text-ink/90 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <span>
                    <span className="block">{t("footer.email")}</span>
                    <span className="text-ink-muted text-sm" dir="ltr">{CONTACT.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink/90">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <span>
                  <span className="block">{t("footer.basedIn")}</span>
                  <span className="text-ink-muted text-sm">{CONTACT.location}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
          <div className="text-xs text-ink-muted">
            © {new Date().getFullYear()} {CONTACT.parent}. {t("footer.rights")}
          </div>
          <div className="text-xs text-ink-muted">{t("footer.parentCredit")}</div>
        </div>
      </div>
    </footer>
  );
}
