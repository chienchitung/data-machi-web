const KIT_FORM_ACTION = process.env.NEXT_PUBLIC_KIT_FORM_ACTION;

export function SubscribeForm() {
  if (!KIT_FORM_ACTION) return null;

  return (
    <div className="subscribe-box">
      <div className="subscribe-copy-row">
        <div className="subscribe-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </div>
        <div className="subscribe-copy">
          <strong>訂閱 Data Machi</strong>
          <span>我們發新文章時通知你，分享企業 AI 導入的實務觀察。</span>
        </div>
      </div>
      <form action={KIT_FORM_ACTION} method="post" target="_blank" className="subscribe-form">
        <input type="email" name="email_address" required placeholder="你的 email" aria-label="Email" />
        <button type="submit">訂閱</button>
      </form>
    </div>
  );
}
