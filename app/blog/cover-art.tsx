export const BLOG_COVER_ART_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="150" height="150">
  <g transform="rotate(-7 100 96)">
    <rect x="44" y="36" width="112" height="136" rx="14" fill="#fff" stroke="#dce6e0"/>
    <rect x="62" y="60" width="58" height="9" rx="4.5" fill="#dcfce7"/>
    <rect x="62" y="80" width="76" height="6" rx="3" fill="#eef3ef"/>
    <rect x="62" y="94" width="76" height="6" rx="3" fill="#eef3ef"/>
    <rect x="62" y="108" width="50" height="6" rx="3" fill="#eef3ef"/>
    <rect x="62" y="128" width="34" height="16" rx="8" fill="#eef3ef"/>
  </g>
  <g transform="translate(92 108)">
    <circle cx="38" cy="38" r="38" fill="#fff" stroke="#dce6e0" stroke-width="1.5"/>
    <path d="M14 46 L26 30 L36 36 L52 12" fill="none" stroke="#0d7134" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="52" cy="12" r="4" fill="#0d7134"/>
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
