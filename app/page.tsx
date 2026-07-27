import { MobileNav } from "./mobile-nav";

const learningPaths = [
  {
    number: "01",
    days: "DAY 01–05",
    title: "AI 與工作",
    description: "先釐清企業真正需要的不是聊天機器人，而是能完成知識工作的系統。",
    tag: "FOUNDATION",
  },
  {
    number: "02",
    days: "DAY 06–10",
    title: "企業知識檢索",
    description: "從文件解析、RAG 到混合搜尋，建立可追溯的企業知識層。",
    tag: "KNOWLEDGE",
  },
  {
    number: "03",
    days: "DAY 11–15",
    title: "工具整合",
    description: "串接 Google Sheets、Confluence、Trello 與日常企業系統。",
    tag: "TOOLS",
  },
  {
    number: "04",
    days: "DAY 16–20",
    title: "Agent 決策",
    description: "理解 ReAct、Coordinator、記憶、釐清與驗證如何一起運作。",
    tag: "AGENT",
  },
  {
    number: "05",
    days: "DAY 21–25",
    title: "可控工作流",
    description: "用 LangGraph、狀態與人工審核，把黑箱決策變成透明流程。",
    tag: "WORKFLOW",
  },
  {
    number: "06",
    days: "DAY 26–30",
    title: "企業級產品",
    description: "補上可靠性、Agent UX、安全、測試與部署的最後一哩路。",
    tag: "PRODUCT",
  },
];

const capabilities = [
  { name: "Chat", description: "理解問題" },
  { name: "RAG", description: "找到知識" },
  { name: "Tool Use", description: "取得即時資料" },
  { name: "Agent", description: "自主判斷" },
  { name: "Workflow", description: "控制流程" },
  { name: "Product", description: "可靠交付" },
];

const navLinks = [
  { href: "#product", label: "產品理念" },
  { href: "#framework", label: "能力模型" },
  { href: "#learning", label: "30 天系列" },
];

const useCases = [
  {
    label: "CROSS-SOURCE QUERY",
    title: "一個問題，同時查三個系統",
    description: "從試算表取得精確數字、到知識庫找定義，再從任務看板確認最新進度。",
    sources: ["Sheets", "Confluence", "Trello"],
  },
  {
    label: "MEETING WORKFLOW",
    title: "從會議內容推進到行動項目",
    description: "把錄音、摘要、負責人與截止日整理成可追蹤任務，而不只停留在會議紀錄。",
    sources: ["Audio", "Summary", "Tasks"],
  },
  {
    label: "RELIABLE RAG",
    title: "讓每個回答都能回到來源",
    description: "將檢索結果、資料時間與引用位置保留下來，讓答案可以驗證而不是只能相信。",
    sources: ["Search", "Citation", "Verify"],
  },
];

export default function Home() {
  return (
    <main id="top">
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

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <div className="hero-inner section-shell">
          <div className="hero-copy">
            <div className="release-pill">
              <span className="release-dot" />
              30 天企業 AI 工作流學習系列
            </div>

            <h1>
              把企業知識、
              <br />
              工具與決策，
              <span>
                串成真正能工作的
                <br />
                AI。
              </span>
            </h1>

            <p className="hero-description">
              Data Machi 從 RAG 出發，逐步走到 Tool Use、Agent 與 Agentic Workflow，幫你看懂一個 AI 系統如何從「回答問題」進化到「可靠完成工作」。
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="https://www.data-machi.com/docs">
                開始閱讀 30 天系列 <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#product">
                探索 Data Machi
              </a>
            </div>

            <div className="hero-stats" aria-label="系列摘要">
              <div><strong>30</strong><span>天完整路徑</span></div>
              <div><strong>6</strong><span>個成熟階段</span></div>
              <div><strong>3+</strong><span>企業資料來源</span></div>
            </div>
          </div>

          <div className="product-stage" aria-hidden="true">
            <div className="product-window">
              <div className="window-bar">
                <div className="window-brand">
                  <span className="mini-logo">D</span>
                  <div><strong>Data Machi</strong><small>Workspace</small></div>
                </div>
                <div className="window-status"><span /> All systems ready</div>
              </div>

              <div className="window-body">
                <aside className="source-panel">
                  <p>SOURCES</p>
                  <div className="source-item active"><span className="source-icon sheet-icon">S</span><div><strong>Sales Data</strong><small>Google Sheets</small></div><b>●</b></div>
                  <div className="source-item"><span className="source-icon wiki-icon">C</span><div><strong>Knowledge Base</strong><small>Confluence</small></div><b>●</b></div>
                  <div className="source-item"><span className="source-icon task-icon">T</span><div><strong>Project Board</strong><small>Trello</small></div><b>●</b></div>
                  <div className="source-footer"><span>3</span> connected sources</div>
                </aside>

                <div className="workspace-panel">
                  <div className="workspace-topline">
                    <span>New analysis</span>
                    <span className="live-chip"><i /> LIVE</span>
                  </div>

                  <div className="user-query">
                    哪一個產品類別的銷售下滑最明顯，相關改善專案目前進度如何？
                  </div>

                  <div className="workflow-strip">
                    <div className="workflow-node done"><span>01</span><strong>讀取銷售資料</strong><small>Completed</small></div>
                    <i>→</i>
                    <div className="workflow-node done"><span>02</span><strong>確認類別定義</strong><small>Completed</small></div>
                    <i>→</i>
                    <div className="workflow-node running"><span>03</span><strong>查詢專案進度</strong><small>Running</small></div>
                  </div>

                  <div className="answer-card">
                    <div className="answer-head">
                      <div><span className="ai-mark">✦</span><strong>Analysis ready</strong></div>
                      <span>3 sources</span>
                    </div>
                    <p>臥室收納類別的銷售年減幅度最大，主要受到平均購買件數下降影響。改善專案已完成需求確認，目前進入測試階段。</p>
                    <div className="insight-row">
                      <div><small>SALES CHANGE</small><strong>−12.8%</strong></div>
                      <div><small>MAIN DRIVER</small><strong>Items / basket</strong></div>
                      <div><small>PROJECT STATUS</small><strong className="status-testing">Testing</strong></div>
                    </div>
                    <div className="citation-row"><span>[1] Sales Data · Updated today</span><span>[2] Knowledge Base</span><span>[3] Project Board</span></div>
                  </div>

                  <div className="prompt-bar"><span>Ask a follow-up question...</span><span className="prompt-send">↑</span></div>
                </div>
              </div>
            </div>

            <div className="floating-card floating-card-left">
              <span className="floating-icon">✓</span>
              <div><strong>可追溯回答</strong><small>Every fact has a source</small></div>
            </div>
            <div className="floating-card floating-card-right">
              <span className="pulse-icon" />
              <div><strong>工作流執行中</strong><small>3 tools connected</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section section-shell" id="product">
        <div className="section-intro">
          <div>
            <span className="section-kicker">PRODUCT THINKING</span>
            <h2>
              企業 AI 的價值，
              <br />
              不只在模型本身。
            </h2>
          </div>
          <p>真正能落地的 AI 產品，需要同時處理知識、計算、工具、決策與控制。Data Machi 將這些能力放進同一張系統地圖。</p>
        </div>

        <div className="value-grid">
          <article className="value-card value-card-highlight">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <ellipse cx="12" cy="6" rx="7" ry="3" />
                <path d="M5 6v5c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
                <path d="M5 11v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" />
              </svg>
            </div>
            <span className="card-number">01</span>
            <h3>連接企業知識</h3>
            <p>把散落在文件、表格與系統中的資訊，轉成 AI 能檢索、理解與引用的知識層。</p>
            <div className="mini-flow"><span>PDF</span><i>+</i><span>Sheets</span><i>+</i><span>Wiki</span></div>
          </article>

          <article className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3 19 12 12 21 5 12Z" />
              </svg>
            </div>
            <span className="card-number">02</span>
            <h3>拆清楚決策邏輯</h3>
            <p>讓程式負責計算與規則，模型負責理解意圖與組織語言，降低幻覺與錯誤判斷。</p>
            <div className="logic-lines"><span>Intent</span><i>→</i><span>Rule</span><i>→</i><span>Verify</span></div>
          </article>

          <article className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17 17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </div>
            <span className="card-number">03</span>
            <h3>推進真實工作</h3>
            <p>從找資料走向呼叫工具、更新任務與完成流程，讓 AI 成為可以協作的工作夥伴。</p>
            <div className="action-status"><span><i /> Read</span><span><i /> Decide</span><span><i /> Act</span></div>
          </article>
        </div>
      </section>

      <section className="framework-section" id="framework">
        <div className="framework-inner section-shell">
          <div className="framework-copy">
            <span className="section-kicker section-kicker-light">MATURITY MODEL</span>
            <h2>
              從聊天介面，
              <br />
              走到企業級 AI 產品。
            </h2>
            <p>每一次能力升級，都代表系統需要新增不同的資料架構、工具權限、決策控制與可靠性設計。</p>
            <a href="https://www.data-machi.com/docs" className="framework-link">閱讀完整架構</a>
          </div>

          <div className="capability-map">
            {capabilities.map((item, index) => (
              <div className="capability-row" key={item.name}>
                <span className="capability-index">0{index + 1}</span>
                <div className="capability-dot"><i /></div>
                <div className="capability-name"><strong>{item.name}</strong><small>{item.description}</small></div>
                <div className="capability-bar"><span style={{ width: `${32 + index * 13}%` }} /></div>
                <span className="capability-level">L{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="use-case-section section-shell">
        <div className="section-intro compact-intro">
          <div><span className="section-kicker">REAL WORKFLOWS</span><h2>從真實工作問題開始設計。</h2></div>
          <p>不先問「要用哪個模型」，而是先拆解工作、資料來源、決策步驟與可接受的風險。</p>
        </div>

        <div className="use-case-grid">
          {useCases.map((item, index) => (
            <article className="use-case-card" key={item.title}>
              <div className="use-case-top"><span>{item.label}</span><b>0{index + 1}</b></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="source-tags">{item.sources.map((source) => <span key={source}>{source}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="learning-section" id="learning">
        <div className="learning-inner section-shell">
          <div className="section-intro learning-intro">
            <div>
              <span className="section-kicker">30-DAY SERIES</span>
              <h2>
                30 天，建立一張完整的企業
                <br />
                AI 知識地圖。
              </h2>
            </div>
            <a className="text-link" href="https://www.data-machi.com/docs">查看所有文章</a>
          </div>

          <div className="learning-grid">
            {learningPaths.map((item) => (
              <article className="learning-card" key={item.number}>
                <div className="learning-card-top"><span>{item.days}</span><b>{item.number}</b></div>
                <div className="learning-tag">{item.tag}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="https://www.data-machi.com/docs" aria-label={`閱讀${item.title}`}>閱讀這一篇 <span>→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-section section-shell">
        <div className="final-card">
          <div className="final-orb" aria-hidden="true" />
          <div>
            <span className="section-kicker section-kicker-light">START BUILDING</span>
            <h2>
              從第一天開始，
              <br />
              建立真正能完成工作的
              <br />
              企業 AI。
            </h2>
            <p>30 天，從 RAG 一路走到 Agentic Workflow 與產品化。</p>
          </div>
          <a className="button button-light" href="https://www.data-machi.com/docs">開始閱讀 <span>↗</span></a>
        </div>
      </section>

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

            <nav className="footer-nav" aria-label="footer">
              <div className="footer-nav-group">
                <span>探索</span>
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href}>{link.label}</a>
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
    </main>
  );
}
