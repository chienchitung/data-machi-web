"use client";

import { useState } from "react";

export function BlogShare({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (onDone: (copied: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(url);
      onDone(true);
      setTimeout(() => onDone(false), 1800);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — nothing to fall back to.
    }
  };

  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  return (
    <div className="blog-share">
      <span>分享這篇文章</span>
      <div className="blog-share-icons">
        <a
          href={linkedInHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="分享到 LinkedIn"
          title="分享到 LinkedIn"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05C20.5 8 22 10.2 22 14.03V23h-4v-8.1c0-1.93-.03-4.4-2.68-4.4-2.68 0-3.1 2.1-3.1 4.27V23h-4V8z" />
          </svg>
        </a>
        <a
          href={xHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="分享到 X"
          title="分享到 X"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.7l8.1-9.3L1 2h7l4.9 6L18.9 2zm-1.2 18h1.9L7.4 4H5.4l12.3 16z" />
          </svg>
        </a>
        <a
          href={facebookHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="分享到 Facebook"
          title="分享到 Facebook"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.98H7.9V12h2.5V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.98A10 10 0 0 0 22 12z" />
          </svg>
        </a>
        <button
          type="button"
          onClick={() => copyToClipboard(setCopied)}
          aria-label="複製連結"
          title={copied ? "已複製連結" : "複製連結"}
        >
          {copied ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11.5 4.5" />
              <path d="M14 11a5 5 0 0 0-7.07 0l-2.83 2.83a5 5 0 0 0 7.07 7.07L12.5 19.5" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
