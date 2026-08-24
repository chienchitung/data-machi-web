import { MobileNav } from "./mobile-nav";
import { LanguageSwitcher } from "./language-switcher";
import { localeHref, type Locale } from "./i18n";

const copy = {
  zh: {
    homeLabel: "Data Machi 首頁",
    product: "產品",
    productItems: [
      { href: "/#product", label: "產品理念" },
      { href: "/#framework", label: "能力模型" },
    ],
    solution: { href: "/#solution", label: "解決方案" },
    resources: "資源",
    resourceItems: [
      { href: "https://www.data-machi.com/docs", label: "30 天系列" },
      { href: "/blog", label: "部落格" },
    ],
    pricing: { href: "/pricing", label: "定價" },
    nav: "主要導覽",
    cta: { href: "https://www.data-machi.com/docs", label: "開始閱讀" },
  },
  en: {
    homeLabel: "Data Machi home",
    product: "Product",
    productItems: [
      { href: "/#product", label: "Product Thinking" },
      { href: "/#framework", label: "Maturity Model" },
    ],
    solution: { href: "/#solution", label: "Solutions" },
    resources: "Resources",
    resourceItems: [
      { href: "https://www.data-machi.com/docs", label: "30-Day Series" },
      { href: "/blog", label: "Blog" },
    ],
    pricing: { href: "/pricing", label: "Pricing" },
    nav: "Main navigation",
    cta: { href: "https://www.data-machi.com/docs", label: "Start Reading" },
  },
} as const;

export function getNavData(locale: Locale) {
  const t = copy[locale];
  const productLinks = t.productItems.map((item) => ({ ...item, href: localeHref(locale, item.href) }));
  const solutionLink = { ...t.solution, href: localeHref(locale, t.solution.href) };
  const resourceLinks = t.resourceItems.map((item) => ({ ...item, href: localeHref(locale, item.href) }));
  const pricingLink = { ...t.pricing, href: localeHref(locale, t.pricing.href) };
  const docsCta = { ...t.cta };

  const navSections = [
    { label: t.product, href: productLinks[0].href, items: productLinks },
    { label: solutionLink.label, href: solutionLink.href },
    { label: t.resources, href: resourceLinks[0].href, items: resourceLinks },
    { label: pricingLink.label, href: pricingLink.href },
  ];

  return { productLinks, solutionLink, resourceLinks, pricingLink, docsCta, navSections };
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const { navSections, docsCta } = getNavData(locale);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href={localeHref(locale, "/")} aria-label={t.homeLabel}>
          <span className="brand-mark">D</span>
          <span className="brand-copy">
            <strong>Data Machi</strong>
          </span>
        </a>

        <nav className="nav-links" aria-label={t.nav}>
          {navSections.map((section) => (
            <div className="nav-item" key={section.label}>
              <a href={section.href} className={`nav-item-trigger${section.items ? " has-dropdown" : ""}`}>
                {section.label}
              </a>
              {section.items && (
                <div className="nav-dropdown">
                  {section.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      {...("external" in item && item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <MobileNav sections={navSections} cta={docsCta} locale={locale} />

        <div className="header-actions">
          <LanguageSwitcher locale={locale} />
          <a className="nav-cta" href={docsCta.href}>
            {docsCta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
