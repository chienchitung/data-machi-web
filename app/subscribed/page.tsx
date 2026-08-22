import type { Metadata } from "next";
import { SiteHeader } from "../header";
import { SiteFooter } from "../footer";

export const metadata: Metadata = {
  title: "訂閱成功",
  description: "確認訂閱後，我們發新文章時會通知你。",
};

export default function Subscribed() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="subscribed-section section-shell">
        <div className="subscribed-card">
          <div className="subscribed-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <span className="section-kicker">訂閱成功</span>
          <h1>確認信已經寄出</h1>
          <p>
            請至你剛剛填寫的信箱，點擊確認連結完成訂閱。如果幾分鐘內沒看到，記得檢查一下垃圾郵件匣。
          </p>
          <div className="subscribed-actions">
            <a className="subscribed-cta" href="https://www.data-machi.com/docs">開始閱讀 30 天系列</a>
            <a className="text-link" href="/">回到首頁</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
