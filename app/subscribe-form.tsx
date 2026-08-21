const KIT_FORM_ACTION = process.env.NEXT_PUBLIC_KIT_FORM_ACTION;

export function SubscribeForm() {
  if (!KIT_FORM_ACTION) return null;

  return (
    <div className="subscribe-box">
      <div className="subscribe-copy">
        <strong>訂閱 Data Machi</strong>
        <span>新文章跟 30 天系列更新，直接寄到你的信箱，不寄推銷信。</span>
      </div>
      <form action={KIT_FORM_ACTION} method="post" target="_blank" className="subscribe-form">
        <input type="email" name="email_address" required placeholder="你的 email" aria-label="Email" />
        <button type="submit">訂閱</button>
      </form>
    </div>
  );
}
