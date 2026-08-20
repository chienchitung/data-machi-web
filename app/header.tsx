import { MobileNav } from "./mobile-nav";

export const navLinks = [
  { href: "/#product", label: "產品理念" },
  { href: "/#framework", label: "能力模型" },
  { href: "/#learning", label: "30 天系列" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Data Machi 首頁">
          <span className="brand-mark">D</span>
          <span className="brand-copy">
            <strong>Data Machi</strong>
            <small>Enterprise AI Workflow</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="主要導覽">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <MobileNav links={navLinks} />

        <a className="nav-cta" href="https://www.data-machi.com/docs">
          開始閱讀 <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
