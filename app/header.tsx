import { MobileNav } from "./mobile-nav";

export const productLinks = [
  { href: "/#product", label: "產品理念" },
  { href: "/#framework", label: "能力模型" },
];

export const solutionLink = { href: "/#solution", label: "解決方案" };

export const resourceLinks = [
  { href: "/#learning", label: "30 天系列" },
  { href: "/blog", label: "Blog" },
];

export const pricingLink = { href: "/pricing", label: "定價" };

export const navSections = [
  { label: "產品", href: productLinks[0].href, items: productLinks },
  { label: "解決方案", href: solutionLink.href },
  { label: "資源", href: resourceLinks[0].href, items: resourceLinks },
  { label: "定價", href: pricingLink.href },
];

export const docsCta = { href: "https://www.data-machi.com/docs", label: "開始閱讀" };

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Data Machi 首頁">
          <span className="brand-mark">D</span>
          <span className="brand-copy">
            <strong>Data Machi</strong>
            <small>Enterprise AI Workflow</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="主要導覽">
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

        <MobileNav sections={navSections} cta={docsCta} />

        <a className="nav-cta" href={docsCta.href}>
          {docsCta.label} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
