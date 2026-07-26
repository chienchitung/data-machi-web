"use client";

import { useState } from "react";

export function MobileNav({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className={`mobile-nav-toggle${open ? " is-open" : ""}`}
        aria-label={open ? "關閉選單" : "開啟選單"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="menu-bar" />
      </button>

      {open && (
        <nav className="mobile-nav-panel" aria-label="行動版導覽">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
