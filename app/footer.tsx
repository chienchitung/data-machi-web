import { getNavData } from "./header";
import { FooterLanguageSwitcher } from "./language-switcher";
import { FooterSubscribeForm } from "./subscribe-form";
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
            <FooterSubscribeForm locale={locale} />
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/datamachi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://github.com/chienchitung/data-machi-web" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
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
