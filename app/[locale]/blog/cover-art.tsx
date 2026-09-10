// Echoes the layered-chevron brand mark (public/logo/light.svg) rather than
// a generic stock "document + trend line" icon, so every post's default
// cover reads as ours at a glance instead of as a template placeholder.
export const BLOG_COVER_ART_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="150" height="150">
  <g transform="rotate(-4 100 100)">
    <path d="M46 66 L100 43 L154 66 L100 89 Z" fill="#01261c"/>
    <path d="M46 95 L100 72 L154 95 L100 118 Z" fill="#02c956"/>
    <path d="M46 124 L100 101 L154 124 L100 147 Z" fill="#028e44"/>
    <path d="M46 153 L100 130 L154 153 L100 176 Z" fill="#a3f5d1"/>
  </g>
</svg>`;

export function BlogCoverArt() {
  return (
    <span
      aria-hidden="true"
      style={{ display: "inline-block", width: 150, height: 150 }}
      dangerouslySetInnerHTML={{ __html: BLOG_COVER_ART_SVG }}
    />
  );
}
