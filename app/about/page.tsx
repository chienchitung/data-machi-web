import type { Metadata } from "next";
import { SiteHeader } from "../header";
import { SiteFooter } from "../footer";

export const metadata: Metadata = {
  title: "關於我們",
  description: "為什麼會有 Data Machi，我們想幫助企業建立的能力是什麼。",
};

export default function About() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="policy-section section-shell">
        <div className="policy-header">
          <span className="section-kicker">ABOUT</span>
          <h1>關於 Data Machi</h1>
        </div>

        <div className="policy-body">
          <h2>我們在做什麼</h2>
          <p>
            Data Machi 是一個聚焦企業 AI 知識工作流的學習系列，用 30 天的篇幅，帶讀者從 RAG、Tool Use、Agent 一路走到 Agentic Workflow，理解一個 AI 系統如何從「回答問題」進化到「可靠完成工作」。
          </p>

          <h2>為什麼要做這個系列</h2>
          <p>
            市面上不缺聊天機器人的介紹，缺的是「企業要怎麼把 AI 真正接進日常工作」的完整脈絡。多數團隊卡在同一個地方：知道模型能聊天，卻不知道怎麼讓它讀懂公司自己的資料、呼叫對的工具、在有風險的決策上保留人工審核。Data Machi 想把這條路徑講清楚，而不是只展示一個漂亮的 Demo。
          </p>

          <h2>我們的方法</h2>
          <p>
            我們相信可靠的企業 AI 產品，需要同時處理知識、計算、工具、決策與控制，而不只是換一個更大的模型。這也是首頁「產品理念」與「能力模型」兩個段落想呈現的核心思路：把每一次能力升級，拆解成具體的資料架構、工具權限與可靠性設計。
          </p>

          <h2>聯絡我們</h2>
          <p>
            有任何問題、合作提案，或是想跟我們聊聊企業 AI 落地的實際狀況，歡迎寫信到
            {" "}
            <a href="mailto:support@data-machi.com">support@data-machi.com</a>。
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
