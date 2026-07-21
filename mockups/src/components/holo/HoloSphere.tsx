export default function HoloSphere({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Abstract chrome sphere representing the studio's services"
    >
      <defs>
        <radialGradient id="sphereBase" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#f2effd" />
          <stop offset="30%" stopColor="#8a5cff" />
          <stop offset="55%" stopColor="#2a1470" />
          <stop offset="80%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#120a33" />
        </radialGradient>
        <linearGradient id="sphereSwirl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5ee7ff" />
          <stop offset="35%" stopColor="#5b2eff" />
          <stop offset="65%" stopColor="#ff9fe8" />
          <stop offset="100%" stopColor="#c9c2ff" />
        </linearGradient>
        <linearGradient id="beltGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5b2eff" />
          <stop offset="50%" stopColor="#f2effd" />
          <stop offset="100%" stopColor="#ff9fe8" />
        </linearGradient>
        <clipPath id="sphereClip">
          <circle cx="200" cy="200" r="150" />
        </clipPath>
      </defs>

      <circle cx="200" cy="200" r="150" fill="url(#sphereBase)" />

      <g clipPath="url(#sphereClip)" opacity="0.9">
        <path
          d="M60 210C120 170 150 130 130 70C210 100 230 170 300 160C260 230 260 290 320 330C230 320 190 260 120 280C140 230 110 230 60 210Z"
          fill="url(#sphereSwirl)"
          opacity="0.55"
        />
        <circle cx="150" cy="150" r="34" fill="#f7f5ff" opacity="0.5" />
      </g>

      <ellipse
        cx="200"
        cy="205"
        rx="168"
        ry="46"
        transform="rotate(-18 200 205)"
        stroke="url(#beltGrad)"
        strokeWidth="14"
        opacity="0.95"
      />

      <circle cx="200" cy="200" r="150" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
    </svg>
  );
}
