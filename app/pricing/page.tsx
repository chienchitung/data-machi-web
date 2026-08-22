import type { Metadata } from "next";
import { SiteHeader } from "../header";
import { SiteFooter } from "../footer";

export const metadata: Metadata = {
  title: "定價",
  description: "Data Machi 目前完全免費，所有內容公開閱讀。",
};

export default function Pricing() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="policy-section section-shell">
        <div className="policy-header">
          <span className="section-kicker">PRICING</span>
          <h1>目前完全免費</h1>
          <p className="policy-updated">沒有隱藏費用，沒有付費牆。</p>
        </div>

        <div className="policy-body">
          <p>
            Data Machi 目前仍在建立階段，30 天系列與所有文件內容皆完全免費、公開閱讀，不需要註冊帳號或付費即可完整存取。我們還沒有推出付費方案，這個頁面會在正式規劃定價後更新。
          </p>
          <p>
            如果你對企業版、進階功能或客製合作有興趣，歡迎先透過
            {" "}
            <a href="mailto:support@data-machi.com">support@data-machi.com</a>
            {" "}
            與我們聯繫，我們會依實際需求規劃後續方案。
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
