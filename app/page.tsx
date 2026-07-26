const learningPaths = [
  {
    number: "01",
    title: "AI 與工作",
    description: "釐清企業 AI、知識工作、Prompt 與 Workflow 的根本差異。",
  },
  {
    number: "02",
    title: "企業知識檢索",
    description: "理解 RAG、PDF 解析、語意搜尋與多模態文件處理。",
  },
  {
    number: "03",
    title: "工具整合",
    description: "串接 Google Sheets、Confluence、Trello 與企業系統。",
  },
  {
    number: "04",
    title: "Agent 決策",
    description: "掌握 ReAct、Coordinator、記憶、釐清與查核機制。",
  },
  {
    number: "05",
    title: "可控工作流",
    description: "用 LangGraph 建立可觀測、可審核、可人工介入的流程。",
  },
  {
    number: "06",
    title: "企業級產品",
    description: "把 Demo 推進到可靠性、UX、安全、測試與正式部署。",
  },
];

const capabilities = ["Chat", "RAG", "Tool Use", "Agent", "Workflow", "Product"];

const principles = [
  {
    title: "找得到",
    description: "讓 AI 從企業文件與系統中取得真正相關、可追溯的資訊。",
    icon: "⌕",
  },
  {
    title: "算得準",
    description: "把計算與規則交給程式，讓模型專注理解意圖與組織答案。",
    icon: "∑",
  },
  {
    title: "做得到",
    description: "從回答問題進化到呼叫工具、推進任務與完成工作流程。",
    icon: "↗",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
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
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span />企業 AI 知識工作流</div>
          <h1>
            不只讓 AI 回答，
            <br />
            而是讓它<span>完成工作</span>。
          </h1>
          <p className="hero-description">
            Data Machi 帶你從 RAG、Tool Use、Agent 一路走到 Agentic Workflow，
            用清楚的架構與真實企業情境，打造可靠、可控、可落地的 AI 系統。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/docs">
              開始閱讀 30 天系列 <span>→</span>
            </a>
            <a className="button button-secondary" href="#framework">
              探索能力模型
            </a>
          </div>
          <div className="hero-meta">
            <div><strong>30</strong><span>天系統學習</span></div>
            <div><strong>6</strong><span>階段能力模型</span></div>
            <div><strong>1</strong><span>條完整實作路徑</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Data Machi 工作流示意圖">
          <div className="visual-glow" />
          <div className="workflow-card card-a">
            <span className="workflow-label">KNOWLEDGE</span>
            <strong>企業知識</strong>
            <small>PDF · Confluence · Sheets</small>
          </div>
          <div className="workflow-line line-a" />
          <div className="workflow-core">
            <div className="core-ring ring-one" />
            <div className="core-ring ring-two" />
            <div className="core-mark">D</div>
            <span>DATA MACHI</span>
          </div>
          <div className="workflow-line line-b" />
          <div className="workflow-card card-b">
            <span className="workflow-label">ACTION</span>
            <strong>任務執行</strong>
            <small>Search · Decide · Act</small>
          </div>
          <div className="signal signal-one" />
          <div className="signal signal-two" />
          <div className="signal signal-three" />
        </div>
      </section>

      <section className="principles section-shell" aria-label="Data Machi 核心價值">
        {principles.map((item) => (
          <article className="principle-card" key={item.title}>
            <div className="principle-icon">{item.icon}</div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="framework section-shell" id="framework">
        <div className="section-heading">
          <div>
            <span className="section-kicker">MATURITY MODEL</span>
            <h2>從聊天工具，走向企業級 AI 產品</h2>
          </div>
          <p>
            Data Machi 用六個階段拆解企業 AI 的成熟度，幫助你看清楚目前的位置、
            下一步要補上的能力，以及系統何時真正具備工作價值。
          </p>
        </div>

        <div className="capability-track">
          {capabilities.map((item, index) => (
            <div className="capability-item" key={item}>
              <span className="capability-index">0{index + 1}</span>
              <strong>{item}</strong>
              {index < capabilities.length - 1 && <span className="capability-arrow">→</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="learning section-shell" id="learning">
        <div className="section-heading learning-heading">
          <div>
            <span className="section-kicker">30-DAY SERIES</span>
            <h2>六篇主題，建立完整知識地圖</h2>
          </div>
          <a className="text-link" href="/docs">查看完整系列 →</a>
        </div>

        <div className="learning-grid">
          {learningPaths.map((item) => (
            <article className="learning-card" key={item.number}>
              <span className="learning-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="learning-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="section-shell statement-inner">
          <span className="statement-mark">“</span>
          <blockquote>
            企業真正需要的，不是更會聊天的 AI，
            <br />而是能在清楚邊界內，可靠完成工作的系統。
          </blockquote>
          <p>Data Machi 核心設計理念</p>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-card">
          <div className="about-identity">
            <div className="avatar">JT</div>
            <div>
              <span className="section-kicker">CREATOR</span>
              <h2>Jackie Tung</h2>
              <p>Data Analyst · AI Builder · Knowledge Workflow Designer</p>
            </div>
          </div>
          <div className="about-copy">
            <p>
              專注於資料分析、商業洞察、AI 應用與企業知識工作流設計。
              Data Machi 將實際工作中的分析思維、系統設計與 AI 工程經驗，
              整理成可理解、可實作、可持續迭代的學習路徑。
            </p>
            <a href="https://github.com/chienchitung" target="_blank" rel="noreferrer">
              GitHub Profile ↗
            </a>
          </div>
        </div>
      </section>

      <section className="final-cta section-shell">
        <div>
          <span className="section-kicker">START BUILDING</span>
          <h2>準備好讓 AI 從回答問題，走向完成工作了嗎？</h2>
        </div>
        <a className="button button-light" href="/docs">
          開始閱讀 <span>→</span>
        </a>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand" href="#top">
          <span className="brand-mark">D</span>
          <span>Data Machi</span>
        </a>
        <p>從 RAG 到 Agentic Workflow，打造企業 AI 知識工作流。</p>
        <div className="footer-links">
          <a href="/docs">Documentation</a>
          <a href="https://github.com/chienchitung/data-machi-web" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <small>© {new Date().getFullYear()} Data Machi. Built by Jackie Tung.</small>
      </footer>
    </main>
  );
}
