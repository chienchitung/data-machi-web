import { getNavData } from "./header";
import { FooterLanguageSwitcher } from "./language-switcher";
import { localeHref, type Locale } from "./i18n";

const copy = {
  zh: {
    homeLabel: "Data Machi 首頁",
    tagline: "從 RAG 到 Agentic Workflow，30 天建立真正能完成工作的企業 AI 知識工作流。",
    product: "Product",
    resources: "Resources",
    company: "Company",
    companyLinks: [
      { href: "/about", label: "關於我們" },
      { href: "/privacy", label: "隱私政策" },
      { href: "/terms", label: "服務條款" },
      { href: "mailto:support@data-machi.com", label: "聯絡我們" },
    ],
    rights: "All rights reserved.",
    backToTop: "回到頂端",
    footerNav: "footer",
  },
  en: {
    homeLabel: "Data Machi home",
    tagline: "From RAG to Agentic Workflow — a 30-day path to enterprise AI that actually gets work done.",
    product: "Product",
    resources: "Resources",
    company: "Company",
    companyLinks: [
      { href: "/about", label: "About" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "mailto:support@data-machi.com", label: "Contact" },
    ],
    rights: "All rights reserved.",
    backToTop: "Back to top",
    footerNav: "footer",
  },
} as const;

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const { productLinks, solutionLink, resourceLinks, pricingLink } = getNavData(locale);
  const footerProductLinks = [...productLinks, solutionLink, pricingLink];
  const footerCompanyLinks = t.companyLinks.map((link) => ({ ...link, href: localeHref(locale, link.href) }));

  return (
    <footer className="site-footer">
      <div className="footer-shell section-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href={localeHref(locale, "/")} aria-label={t.homeLabel}>
              <span className="brand-mark">D</span>
              <span className="brand-copy"><strong>Data Machi</strong></span>
            </a>
            <p>{t.tagline}</p>
          </div>

          <nav className="footer-nav" aria-label={t.footerNav}>
            <div className="footer-nav-group">
              <span>{t.product}</span>
              {footerProductLinks.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </div>
            <div className="footer-nav-group">
              <span>{t.resources}</span>
              {resourceLinks.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </div>
            <div className="footer-nav-group">
              <span>{t.company}</span>
              {footerCompanyLinks.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} Data Machi. {t.rights}</small>
          <div className="footer-controls">
            <FooterLanguageSwitcher locale={locale} />
            <a className="back-to-top" href="#top">
              {t.backToTop} <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
