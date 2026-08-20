import { navLinks } from "./header";

const resourceLinks = [
  { href: "https://www.data-machi.com/docs", label: "文件", external: true },
  { href: "/privacy", label: "隱私政策" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell section-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="/" aria-label="Data Machi 首頁">
              <span className="brand-mark">D</span>
              <span className="brand-copy"><strong>Data Machi</strong><small>Enterprise AI Workflow</small></span>
            </a>
            <p>從 RAG 到 Agentic Workflow，30 天建立真正能完成工作的企業 AI 知識工作流。</p>
          </div>

          <nav className="footer-nav" aria-label="footer">
            <div className="footer-nav-group">
              <span>產品</span>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </div>
            <div className="footer-nav-group">
              <span>資源</span>
              {resourceLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} Data Machi. All rights reserved.</small>
          <a className="back-to-top" href="#top">
            回到頂端 <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
