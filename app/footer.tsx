export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell section-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#top" aria-label="Data Machi 首頁">
              <span className="brand-mark">D</span>
              <span className="brand-copy"><strong>Data Machi</strong><small>Enterprise AI Workflow</small></span>
            </a>
            <p>從 RAG 到 Agentic Workflow，30 天建立真正能完成工作的企業 AI 知識工作流。</p>
          </div>
        </div>

        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} Data Machi. All rights reserved.</small>
          <div className="footer-bottom-links">
            <a href="/privacy">隱私政策</a>
            <a className="back-to-top" href="#top">
              回到頂端 <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
