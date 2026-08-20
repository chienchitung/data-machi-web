import type { Metadata } from "next";
import { SiteHeader } from "../header";
import { SiteFooter } from "../footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Data Machi Blog，即將推出。",
};

export default function Blog() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="policy-section section-shell">
        <div className="policy-header">
          <span className="section-kicker">BLOG</span>
          <h1>Blog 即將推出。</h1>
          <p className="policy-updated">在那之前，歡迎先閱讀 30 天系列的完整內容。</p>
        </div>

        <div className="policy-body">
          <p>
            我們正在規劃 Blog 內容，會放一些沒辦法完整放進 30 天系列裡的實作筆記、案例拆解與產業觀察。上線之前，你可以先前往
            {" "}
            <a href="/#learning">30 天系列</a>
            {" "}
            或
            {" "}
            <a href="https://www.data-machi.com/docs" target="_blank" rel="noreferrer">文件</a>
            {" "}
            閱讀完整內容。
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
