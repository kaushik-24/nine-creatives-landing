export default function IconTablet({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tabletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#dcd7ff" />
          <stop offset="75%" stopColor="#8a5cff" />
          <stop offset="100%" stopColor="#2a1470" />
        </linearGradient>
      </defs>
      <g transform="rotate(-10 60 70)">
        <rect x="22" y="18" width="76" height="104" rx="14" fill="url(#tabletGrad)" />
        <rect x="22" y="18" width="76" height="104" rx="14" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5" />
        <circle cx="60" cy="30" r="3.2" fill="#0a0a0a" opacity="0.6" />
        <rect x="34" y="46" width="52" height="6" rx="3" fill="#ffffff" opacity="0.55" />
        <rect x="34" y="60" width="36" height="6" rx="3" fill="#ffffff" opacity="0.4" />
        <rect x="34" y="92" width="52" height="18" rx="9" fill="#0a0a0a" opacity="0.55" />
      </g>
    </svg>
  );
}
