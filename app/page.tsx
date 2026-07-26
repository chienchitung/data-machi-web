const learningPaths = [
  { number: "01", days: "DAY 01–05", title: "AI 與工作", description: "釐清企業 AI、知識工作、Prompt 與 Workflow 的根本差異。" },
  { number: "02", days: "DAY 06–10", title: "企業知識檢索", description: "理解 RAG、PDF 解析、語意搜尋與多模態文件處理。" },
  { number: "03", days: "DAY 11–15", title: "工具整合", description: "串接 Google Sheets、Confluence、Trello 與企業系統。" },
  { number: "04", days: "DAY 16–20", title: "Agent 決策", description: "掌握 ReAct、Coordinator、記憶、釐清與查核機制。" },
  { number: "05", days: "DAY 21–25", title: "可控工作流", description: "用 LangGraph 建立可觀測、可審核、可人工介入的流程。" },
  { number: "06", days: "DAY 26–30", title: "企業級產品", description: "把 Demo 推進到可靠性、UX、安全、測試與正式部署。" },
];

const capabilities = ["Chat", "RAG", "Tool Use", "Agent", "Workflow", "Product"];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Data Machi 首頁">
            <span className="brand-mark">D</span>
            <span>Data Machi</span>
          </a>
          <nav className="nav-links" aria-label="主要導覽">
            <a href="#framework">能力模型</a>
            <a href="#learning">30 天系列</a>
            <a href="#about">關於</a>
            <a className="nav-cta" href="/docs">開始閱讀</a>
          </nav>
        </div>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">DATA MACHI / ENTERPRISE AI WORKFLOW</p>
          <h1>讓 AI 不只回答問題，<br />而是可靠地完成工作。</h1>
          <p className="hero-description">
            從 RAG、Tool Use、Agent 到 Agentic Workflow，Data Machi 用清楚的架構、真實企業情境與可實作的方法，整理出一條從概念走向產品的學習路徑。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/docs">開始閱讀 30 天系列 <span>↗</span></a>
            <a className="button button-secondary" href="#framework">查看能力模型</a>
          </div>
        </div>

        <aside className="hero-index" aria-label="Data Machi 摘要">
          <div className="index-head"><span>FIELD NOTES</span><span>VOL. 01</span></div>
          <div className="index-row"><span>01</span><strong>Knowledge</strong><p>讓 AI 取得企業真正需要的知識。</p></div>
          <div className="index-row"><span>02</span><strong>Reasoning</strong><p>把規則、計算與決策邏輯拆清楚。</p></div>
          <div className="index-row"><span>03</span><strong>Action</strong><p>從回答走向工具呼叫與任務執行。</p></div>
          <div className="index-foot"><span>30 DAYS</span><span>6 STAGES</span><span>1 SYSTEM</span></div>
        </aside>
      </section>

      <section className="principles section-shell" aria-label="Data Machi 核心價值">
        <div className="principle"><span>01</span><h2>找得到</h2><p>讓 AI 從文件與系統中取得可追溯、可驗證的資訊。</p></div>
        <div className="principle"><span>02</span><h2>算得準</h2><p>把計算與規則交給程式，降低模型猜測與幻覺。</p></div>
        <div className="principle"><span>03</span><h2>做得到</h2><p>讓 AI 能呼叫工具、推進任務並完成工作流程。</p></div>
      </section>

      <section className="framework section-shell" id="framework">
        <div className="section-heading">
          <div><span className="section-kicker">MATURITY MODEL</span><h2>企業 AI 的六個成熟階段</h2></div>
          <p>從單次對話到正式產品，每一步都代表不同的資料、工具、控制與可靠性要求。</p>
        </div>
        <div className="capability-track">
          {capabilities.map((item, index) => (
            <div className="capability-item" key={item}>
              <span>0{index + 1}</span><strong>{item}</strong><small>{index < 2 ? "UNDERSTAND" : index < 4 ? "DECIDE" : "DELIVER"}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="learning section-shell" id="learning">
        <div className="section-heading learning-heading">
          <div><span className="section-kicker">30-DAY SERIES</span><h2>六篇主題，建立完整知識地圖</h2></div>
          <a className="text-link" href="/docs">查看完整系列 ↗</a>
        </div>
        <div className="learning-list">
          {learningPaths.map((item) => (
            <article className="learning-item" key={item.number}>
              <span className="learning-number">{item.number}</span>
              <span className="learning-days">{item.days}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="learning-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="statement section-shell">
        <span className="section-kicker">DESIGN PRINCIPLE</span>
        <blockquote>企業真正需要的，不是更會聊天的 AI，<br />而是能在清楚邊界內可靠完成工作的系統。</blockquote>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-label"><span>ABOUT THE CREATOR</span><span>TAIPEI, TW</span></div>
        <div className="about-main">
          <div className="about-name"><span className="avatar">JT</span><div><h2>Jackie Tung</h2><p>Data Analyst · AI Builder · Knowledge Workflow Designer</p></div></div>
          <div className="about-copy"><p>專注於資料分析、商業洞察、AI 應用與企業知識工作流設計。Data Machi 將實際工作中的分析思維、系統設計與 AI 工程經驗，整理成可理解、可實作、可持續迭代的學習路徑。</p><a href="https://github.com/chienchitung" target="_blank" rel="noreferrer">GitHub Profile ↗</a></div>
        </div>
      </section>

      <section className="final-cta section-shell">
        <div><span className="section-kicker">START HERE</span><h2>從第一天開始，建立你的企業 AI 工作流。</h2></div>
        <a className="button button-primary" href="/docs">開始閱讀 <span>↗</span></a>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand" href="#top"><span className="brand-mark">D</span><span>Data Machi</span></a>
        <p>From RAG to Agentic Workflow.</p>
        <div className="footer-links"><a href="/docs">Documentation</a><a href="https://github.com/chienchitung/data-machi-web" target="_blank" rel="noreferrer">GitHub</a></div>
        <small>© {new Date().getFullYear()} Data Machi. Built by Jackie Tung.</small>
      </footer>
    </main>
  );
}
