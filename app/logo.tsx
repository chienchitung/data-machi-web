// Canonical Data Machi brand mark: an isometric stack — a spiral "hook"
// top layer over three solid chevron layers — per the brand identity
// spec. Every layer shares the same footprint (a true isometric stack).
// Colors: ink #0b1f17, green #16a34a, deep green #0d7134, mint #a7f3d0.
//
// Keep in sync with public/favicon.svg and app/icon.svg (same artwork,
// plus a white tile for browser-tab legibility) and public/logo-mark.png
// (transparent raster for email clients that can't render SVG).
export const BRAND_MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <path d="M15 77 L60 100 L105 77 L105 87 L60 110 L15 87 Z" fill="#a7f3d0"/>
  <path d="M15 61 L60 84 L105 61 L105 71 L60 94 L15 71 Z" fill="#0d7134"/>
  <path d="M15 45 L60 68 L105 45 L105 55 L60 78 L15 55 Z" fill="#16a34a"/>
  <g transform="translate(60,31) scale(1,0.5) rotate(45)" fill="none" stroke="#0b1f17" stroke-width="17" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 3 3 L 30 3 L 30 30 L -30 30 L -30 -30 L 30 -30 L 30 -9"/>
  </g>
</svg>`;
