export default function IconScissors({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="scissorsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4f3f7" />
          <stop offset="45%" stopColor="#c9c2ff" />
          <stop offset="80%" stopColor="#5b2eff" />
          <stop offset="100%" stopColor="#120a33" />
        </linearGradient>
      </defs>
      <g transform="rotate(-18 60 70)">
        <circle cx="40" cy="100" r="12" stroke="url(#scissorsGrad)" strokeWidth="6" />
        <circle cx="78" cy="100" r="12" stroke="url(#scissorsGrad)" strokeWidth="6" />
        <path d="M48 92L96 24" stroke="url(#scissorsGrad)" strokeWidth="7" strokeLinecap="round" />
        <path d="M70 92L22 24" stroke="url(#scissorsGrad)" strokeWidth="7" strokeLinecap="round" />
        <circle cx="59" cy="90" r="5" fill="#0a0a0a" />
      </g>
    </svg>
  );
}
