export default function HoloRings({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Abstract chrome rings representing limitless design"
    >
      <defs>
        <linearGradient id="ringA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9c2ff" />
          <stop offset="22%" stopColor="#5b2eff" />
          <stop offset="48%" stopColor="#120a33" />
          <stop offset="72%" stopColor="#ff9fe8" />
          <stop offset="100%" stopColor="#5ee7ff" />
        </linearGradient>
        <linearGradient id="ringB" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5ee7ff" />
          <stop offset="30%" stopColor="#120a33" />
          <stop offset="55%" stopColor="#8a5cff" />
          <stop offset="80%" stopColor="#ffe3fb" />
          <stop offset="100%" stopColor="#5b2eff" />
        </linearGradient>
        <linearGradient id="ringC" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#120a33" />
          <stop offset="40%" stopColor="#c9c2ff" />
          <stop offset="70%" stopColor="#5b2eff" />
          <stop offset="100%" stopColor="#ff9fe8" />
        </linearGradient>
        <filter id="ringGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g style={{ transformOrigin: "210px 210px" }} className="animate-spin-slower">
        <ellipse
          cx="210"
          cy="210"
          rx="175"
          ry="62"
          transform="rotate(-32 210 210)"
          stroke="url(#ringA)"
          strokeWidth="22"
          filter="url(#ringGlow)"
        />
      </g>

      <g style={{ transformOrigin: "210px 210px" }} className="animate-spin-slow">
        <ellipse
          cx="210"
          cy="210"
          rx="175"
          ry="62"
          transform="rotate(38 210 210)"
          stroke="url(#ringB)"
          strokeWidth="22"
          filter="url(#ringGlow)"
        />
      </g>

      <ellipse
        cx="210"
        cy="210"
        rx="150"
        ry="150"
        transform="rotate(4 210 210)"
        stroke="url(#ringC)"
        strokeWidth="10"
        opacity="0.85"
      />

      <circle cx="210" cy="210" r="16" fill="url(#ringA)" opacity="0.9" />
    </svg>
  );
}
