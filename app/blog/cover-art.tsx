export function BlogCoverArt() {
  return (
    <svg viewBox="0 0 200 200" width="150" height="150" aria-hidden="true">
      <g transform="rotate(-7 100 96)">
        <rect x="44" y="36" width="112" height="136" rx="14" fill="#fff" stroke="var(--line)" />
        <rect x="62" y="60" width="58" height="9" rx="4.5" fill="var(--green-light)" />
        <rect x="62" y="80" width="76" height="6" rx="3" fill="#eef3ef" />
        <rect x="62" y="94" width="76" height="6" rx="3" fill="#eef3ef" />
        <rect x="62" y="108" width="50" height="6" rx="3" fill="#eef3ef" />
        <rect x="62" y="128" width="34" height="16" rx="8" fill="#eef3ef" />
      </g>
      <g transform="translate(92 108)">
        <circle cx="38" cy="38" r="38" fill="#fff" stroke="var(--line)" strokeWidth="1.5" />
        <path
          d="M14 46 L26 30 L36 36 L52 12"
          fill="none"
          stroke="var(--green-dark)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="52" cy="12" r="4" fill="var(--green-dark)" />
      </g>
    </svg>
  );
}
