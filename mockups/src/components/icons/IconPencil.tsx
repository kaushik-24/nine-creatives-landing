export default function IconPencil({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="pencilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4f3f7" />
          <stop offset="45%" stopColor="#c9c2ff" />
          <stop offset="75%" stopColor="#5b2eff" />
          <stop offset="100%" stopColor="#120a33" />
        </linearGradient>
      </defs>
      <g transform="rotate(28 60 70)">
        <rect x="46" y="12" width="28" height="92" rx="6" fill="url(#pencilGrad)" />
        <rect x="46" y="12" width="28" height="18" rx="6" fill="#0a0a0a" opacity="0.85" />
        <path d="M46 104L60 128L74 104Z" fill="#ffe08a" />
        <path d="M55 104L60 122L65 104Z" fill="#3d2a13" />
        <line x1="46" y1="40" x2="74" y2="40" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.4" />
      </g>
    </svg>
  );
}
