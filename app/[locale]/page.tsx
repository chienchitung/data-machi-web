import { SiteHeader } from "../header";
import { SiteFooter } from "../footer";
import { FAQSection } from "../faq";
import { getAllPosts } from "../../lib/blog";
import { BlogCoverArt } from "./blog/cover-art";
import { localeHref, asLocale } from "../i18n";

const copy = {
  zh: {
    heroTitleLine1: "把企業知識、",
    heroTitleLine2: "工具與決策，",
    heroTitleLine3a: "串成真正能工作的",
    heroTitleLine3b: "AI",
    heroDescription: "從 RAG 到 Agentic Workflow，30 天打造真正能完成工作的企業 AI。",
    startReading: "開始閱讀 30 天系列",
    exploreProduct: "探索產品",
    heroStatsLabel: "系列摘要",
    heroStats: [
      { value: "30", label: "天完整路徑" },
      { value: "6", label: "個成熟階段" },
      { value: "3+", label: "企業資料來源" },
    ],
    productDemoAlt: "Data Machi 實際操作畫面：AI 助理引用 Google Sheets 與 Confluence 資料，回答本週業績摘要",
    floatingLeft: { title: "可追溯回答", subtitle: "Every fact has a source" },
    floatingRight: { title: "工作流執行中", subtitle: "3 tools connected" },

    productKicker: "PRODUCT THINKING",
    productTitleLine1: "企業 AI 的價值，",
    productTitleLine2: "不只在模型本身",
    productIntro: "真正能落地的 AI 產品，需要同時處理知識、計算、工具、決策與控制。Data Machi 將這些能力放進同一張系統地圖。",
    valueCards: [
      { title: "連接企業知識", description: "把散落在文件、表格與系統中的資訊，轉成 AI 能檢索、理解與引用的知識層。" },
      { title: "拆清楚決策邏輯", description: "讓程式負責計算與規則，模型負責理解意圖與組織語言，降低幻覺與錯誤判斷。" },
      { title: "推進真實工作", description: "從找資料走向呼叫工具、更新任務與完成流程，讓 AI 成為可以協作的工作夥伴。" },
    ],

    frameworkKicker: "MATURITY MODEL",
    frameworkTitleLine1: "從聊天介面，",
    frameworkTitleLine2: "走到企業級 AI 產品",
    frameworkIntro: "每一次能力升級，都代表系統需要新增不同的資料架構、工具權限、決策控制與可靠性設計。",
    frameworkLink: "閱讀完整架構",
    capabilities: [
      { name: "Chat", description: "理解問題" },
      { name: "RAG", description: "找到知識" },
      { name: "Tool Use", description: "取得即時資料" },
      { name: "Agent", description: "自主判斷" },
      { name: "Workflow", description: "控制流程" },
      { name: "Product", description: "可靠交付" },
    ],

    solutionKicker: "REAL WORKFLOWS",
    solutionTitle: "從真實工作問題開始設計",
    solutionIntro: "不先問「要用哪個模型」，而是先拆解工作、資料來源、決策步驟與可接受的風險。",
    useCases: [
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
    ],

    learningKicker: "30-DAY SERIES",
    learningTitle: "30 天，建立一張完整的企業 AI 知識地圖",
    viewAllArticles: "查看所有文章",
    learningPaths: [
      { number: "01", days: "DAY 01–05", title: "AI 與工作", description: "先釐清企業真正需要的不是聊天機器人，而是能完成知識工作的系統。", tag: "FOUNDATION", href: "https://www.data-machi.com/docs/30-days/day-01-enterprise-ai-is-not-chatbot" },
      { number: "02", days: "DAY 06–10", title: "企業知識檢索", description: "從文件解析、RAG 到混合搜尋，建立可追溯的企業知識層。", tag: "KNOWLEDGE", href: "https://www.data-machi.com/docs/30-days/day-06-what-is-rag" },
      { number: "03", days: "DAY 11–15", title: "工具整合", description: "串接 Google Sheets、Confluence、Trello 與日常企業系統。", tag: "TOOLS", href: "https://www.data-machi.com/docs/30-days/day-11-rag-vs-tool-use" },
      { number: "04", days: "DAY 16–20", title: "Agent 決策", description: "理解 ReAct、Coordinator、記憶、釐清與驗證如何一起運作。", tag: "AGENT", href: "https://www.data-machi.com/docs/30-days/day-16-when-tools-become-agent" },
      { number: "05", days: "DAY 21–25", title: "可控工作流", description: "用 LangGraph、狀態與人工審核，把黑箱決策變成透明流程。", tag: "WORKFLOW", href: "https://www.data-machi.com/docs/30-days/day-21-why-agentexecutor-is-not-enough" },
      { number: "06", days: "DAY 26–30", title: "企業級產品", description: "補上可靠性、Agent UX、安全、測試與部署的最後一哩路。", tag: "PRODUCT", href: "https://www.data-machi.com/docs/30-days/day-26-timeout-retry-fallback" },
    ],
    readThis: "閱讀這一篇 →",
    readThisLabel: "閱讀這一篇",
    readAria: (title: string) => `閱讀${title}`,

    blogKicker: "FROM THE BLOG",
    blogTitle: "產業觀察與實作筆記",
    blogIntro: "我們怎麼看待企業 AI 市場、平台選擇與實際踩過的坑，寫在部落格裡。",

    finalKicker: "START BUILDING",
    finalTitleLine1: "從第一天開始，",
    finalTitleLine2: "建立真正能完成工作的",
    finalTitleLine3: "企業 AI",
    finalDescription: "30 天，從 RAG 一路走到 Agentic Workflow 與產品化。",
    finalCta: "開始閱讀",
  },
  en: {
    heroTitleLine1: "Enterprise AI",
    heroTitleLine2: "",
    heroTitleLine3a: "that actually",
    heroTitleLine3b: "works",
    heroDescription: "A free 30-day path from RAG to Agentic Workflow — enterprise AI that reliably gets work done.",
    startReading: "Start the 30-Day Series",
    exploreProduct: "Explore the Product",
    heroStatsLabel: "Series summary",
    heroStats: [
      { value: "30", label: "days, full path" },
      { value: "6", label: "maturity stages" },
      { value: "3+", label: "enterprise data sources" },
    ],
    productDemoAlt: "Data Machi in action: the AI assistant cites Google Sheets and Confluence to answer a weekly performance question",
    floatingLeft: { title: "Traceable answers", subtitle: "Every fact has a source" },
    floatingRight: { title: "Workflow running", subtitle: "3 tools connected" },

    productKicker: "PRODUCT THINKING",
    productTitleLine1: "Enterprise AI's value isn't",
    productTitleLine2: "just the model itself",
    productIntro: "An AI product that actually ships needs to handle knowledge, computation, tools, decisions, and control together. Data Machi puts these capabilities on one system map.",
    valueCards: [
      { title: "Connect enterprise knowledge", description: "Turn information scattered across documents, spreadsheets, and systems into a knowledge layer AI can retrieve, understand, and cite." },
      { title: "Separate out the decision logic", description: "Let code own computation and rules, let the model own understanding intent and language — cutting down hallucination and bad calls." },
      { title: "Push real work forward", description: "Move from finding information to calling tools, updating tasks, and completing workflows — making AI a real collaborator." },
    ],

    frameworkKicker: "MATURITY MODEL",
    frameworkTitleLine1: "From a chat interface",
    frameworkTitleLine2: "to an enterprise-grade AI product",
    frameworkIntro: "Every capability upgrade means the system needs a different data architecture, tool permissions, decision control, and reliability design.",
    frameworkLink: "Read the full framework",
    capabilities: [
      { name: "Chat", description: "Understand the question" },
      { name: "RAG", description: "Find the knowledge" },
      { name: "Tool Use", description: "Fetch live data" },
      { name: "Agent", description: "Judge autonomously" },
      { name: "Workflow", description: "Control the process" },
      { name: "Product", description: "Deliver reliably" },
    ],

    solutionKicker: "REAL WORKFLOWS",
    solutionTitle: "Designed from real work problems, not model choice",
    solutionIntro: "Instead of starting with \"which model should we use,\" we start by breaking down the work, the data sources, the decision steps, and the acceptable risk.",
    useCases: [
      {
        label: "CROSS-SOURCE QUERY",
        title: "One question, three systems checked at once",
        description: "Pull exact numbers from a spreadsheet, definitions from a knowledge base, and the latest status from a task board.",
        sources: ["Sheets", "Confluence", "Trello"],
      },
      {
        label: "MEETING WORKFLOW",
        title: "From meeting content to action items",
        description: "Turn a recording, a summary, an owner, and a deadline into a trackable task — not just meeting notes that sit unread.",
        sources: ["Audio", "Summary", "Tasks"],
      },
      {
        label: "RELIABLE RAG",
        title: "Every answer traces back to a source",
        description: "Keep the retrieval results, data timestamps, and citation locations, so an answer can be verified instead of just trusted.",
        sources: ["Search", "Citation", "Verify"],
      },
    ],

    learningKicker: "30-DAY SERIES",
    learningTitle: "30 days to a complete enterprise AI knowledge map",
    viewAllArticles: "View all articles",
    learningPaths: [
      { number: "01", days: "DAY 01–05", title: "AI and Work", description: "First clarify that what enterprises actually need isn't a chatbot — it's a system that can complete knowledge work.", tag: "FOUNDATION", href: "https://www.data-machi.com/docs/30-days/day-01-enterprise-ai-is-not-chatbot" },
      { number: "02", days: "DAY 06–10", title: "Enterprise Knowledge Retrieval", description: "From document parsing and RAG to hybrid search — build a traceable enterprise knowledge layer.", tag: "KNOWLEDGE", href: "https://www.data-machi.com/docs/30-days/day-06-what-is-rag" },
      { number: "03", days: "DAY 11–15", title: "Tool Integration", description: "Connect Google Sheets, Confluence, Trello, and everyday enterprise systems.", tag: "TOOLS", href: "https://www.data-machi.com/docs/30-days/day-11-rag-vs-tool-use" },
      { number: "04", days: "DAY 16–20", title: "Agent Decision-Making", description: "Understand how ReAct, coordinators, memory, clarification, and verification work together.", tag: "AGENT", href: "https://www.data-machi.com/docs/30-days/day-16-when-tools-become-agent" },
      { number: "05", days: "DAY 21–25", title: "Controllable Workflows", description: "Use LangGraph, state, and human review to turn black-box decisions into a transparent process.", tag: "WORKFLOW", href: "https://www.data-machi.com/docs/30-days/day-21-why-agentexecutor-is-not-enough" },
      { number: "06", days: "DAY 26–30", title: "Enterprise-Grade Product", description: "Fill in the last mile: reliability, Agent UX, security, testing, and deployment.", tag: "PRODUCT", href: "https://www.data-machi.com/docs/30-days/day-26-timeout-retry-fallback" },
    ],
    readThis: "Read this article →",
    readThisLabel: "Read this article",
    readAria: (title: string) => `Read ${title}`,

    blogKicker: "FROM THE BLOG",
    blogTitle: "Industry Notes & Field Notes",
    blogIntro: "How we see the enterprise AI market, platform choices, and the pitfalls we've actually run into — written up on the blog.",

    finalKicker: "START BUILDING",
    finalTitleLine1: "Start from day one,",
    finalTitleLine2: "and build enterprise AI",
    finalTitleLine3: "that actually gets work done",
    finalDescription: "30 days, from RAG all the way to Agentic Workflow and productization.",
    finalCta: "Start Reading",
  },
} as const;

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = asLocale(rawLocale);
  const t = copy[locale];
  const [latestPost] = getAllPosts(locale);

  return (
    <main id="top">
      <SiteHeader locale={locale} />

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />

        <div className="hero-inner section-shell">
          <div className="hero-copy">
            <h1>
              {t.heroTitleLine1}
              {t.heroTitleLine2 && (
                <>
                  <br />
                  {t.heroTitleLine2}
                </>
              )}
              <span>
                {t.heroTitleLine3a}
                <br />
                {t.heroTitleLine3b}
              </span>
            </h1>

            <p className="hero-description">{t.heroDescription}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="https://www.data-machi.com/docs">
                {t.startReading}
              </a>
              <a className="button button-secondary" href={localeHref(locale, "/#product")}>
                {t.exploreProduct}
              </a>
            </div>

            <div className="hero-stats" aria-label={t.heroStatsLabel}>
              {t.heroStats.map((stat) => (
                <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
              ))}
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
                <img
                  className="product-demo-shot"
                  src={`/product-demo/hero-chat-${locale}.png`}
                  alt={t.productDemoAlt}
                  width={1440}
                  height={816}
                />
              </div>
            </div>

            <div className="floating-card floating-card-left">
              <span className="floating-icon">✓</span>
              <div><strong>{t.floatingLeft.title}</strong><small>{t.floatingLeft.subtitle}</small></div>
            </div>
            <div className="floating-card floating-card-right">
              <span className="pulse-icon" />
              <div><strong>{t.floatingRight.title}</strong><small>{t.floatingRight.subtitle}</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section section-shell" id="product">
        <div className="section-intro">
          <div>
            <span className="section-kicker">{t.productKicker}</span>
            <h2>
              {t.productTitleLine1}
              <br />
              {t.productTitleLine2}
            </h2>
          </div>
          <p>{t.productIntro}</p>
        </div>

        <div className="value-grid">
          <article className="value-card">
            <span className="card-number" aria-hidden="true">01</span>
            <h3>{t.valueCards[0].title}</h3>
            <p>{t.valueCards[0].description}</p>
            <div className="mini-flow"><span>PDF</span><i>+</i><span>Sheets</span><i>+</i><span>Wiki</span></div>
          </article>

          <article className="value-card">
            <span className="card-number" aria-hidden="true">02</span>
            <h3>{t.valueCards[1].title}</h3>
            <p>{t.valueCards[1].description}</p>
            <div className="logic-lines"><span>Intent</span><i>→</i><span>Rule</span><i>→</i><span>Verify</span></div>
          </article>

          <article className="value-card">
            <span className="card-number" aria-hidden="true">03</span>
            <h3>{t.valueCards[2].title}</h3>
            <p>{t.valueCards[2].description}</p>
            <div className="action-status"><span><i /> Read</span><span><i /> Decide</span><span><i /> Act</span></div>
          </article>
        </div>
      </section>

      <section className="framework-section" id="framework">
        <div className="framework-inner section-shell">
          <div className="framework-copy">
            <span className="section-kicker section-kicker-light">{t.frameworkKicker}</span>
            <h2>
              {t.frameworkTitleLine1}
              <br />
              {t.frameworkTitleLine2}
            </h2>
            <p>{t.frameworkIntro}</p>
            <a href="https://www.data-machi.com/docs" className="framework-link">{t.frameworkLink}</a>
          </div>

          <div className="capability-map">
            {t.capabilities.map((item, index) => (
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

      <section className="use-case-section section-shell" id="solution">
        <div className="section-intro compact-intro">
          <div><span className="section-kicker">{t.solutionKicker}</span><h2>{t.solutionTitle}</h2></div>
          <p>{t.solutionIntro}</p>
        </div>

        <div className="use-case-list">
          {t.useCases.map((item, index) => (
            <article className="use-case-row" key={item.title}>
              <span className="use-case-index">0{index + 1}</span>
              <div className="use-case-row-body">
                <span className="use-case-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="source-tags">{item.sources.map((source) => <span key={source}>{source}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="learning-section" id="learning">
        <div className="learning-inner section-shell">
          <div className="section-intro learning-intro">
            <div>
              <span className="section-kicker">{t.learningKicker}</span>
              <h2>{t.learningTitle}</h2>
            </div>
            <a className="text-link" href="https://www.data-machi.com/docs">{t.viewAllArticles}</a>
          </div>

          <div className="learning-grid">
            {t.learningPaths.map((item) => (
              <article className="learning-card" key={item.number}>
                <div className="learning-card-top"><span>{item.days}</span><b>{item.number}</b></div>
                <div className="learning-tag">{item.tag}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.href} aria-label={t.readAria(item.title)}>{t.readThisLabel} <span>→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {latestPost && (
        <section className="blog-preview-section section-shell" id="insights">
          <div className="section-intro">
            <div>
              <span className="section-kicker">{t.blogKicker}</span>
              <h2>{t.blogTitle}</h2>
            </div>
            <p>{t.blogIntro}</p>
          </div>

          <a className="blog-featured" href={localeHref(locale, `/blog/${latestPost.slug}`)}>
            <div className="blog-featured-visual" aria-hidden="true">
              <BlogCoverArt />
            </div>
            <div className="blog-featured-content">
              <div className="blog-list-meta">
                <span className="learning-tag">{latestPost.tag}</span>
                <time dateTime={latestPost.date}>{latestPost.date}</time>
              </div>
              <h3>{latestPost.title}</h3>
              <p>{latestPost.summary}</p>
              <span className="blog-list-read">{t.readThis}</span>
            </div>
          </a>

          <a className="text-link blog-preview-link" href={localeHref(locale, "/blog")}>{t.viewAllArticles}</a>
        </section>
      )}

      <FAQSection locale={locale} />

      <section className="final-section section-shell">
        <div className="final-card">
          <div>
            <span className="section-kicker section-kicker-light">{t.finalKicker}</span>
            <h2>
              {t.finalTitleLine1}
              <br />
              {t.finalTitleLine2}
              <br />
              {t.finalTitleLine3}
            </h2>
            <p>{t.finalDescription}</p>
          </div>
          <a className="button button-light" href="https://www.data-machi.com/docs">{t.finalCta}</a>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
