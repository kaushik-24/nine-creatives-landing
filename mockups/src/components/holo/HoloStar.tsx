function starPoints(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  points: number,
  rotationDeg: number
) {
  const step = Math.PI / points;
  const rotation = (rotationDeg * Math.PI) / 180;
  const coords: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = i * step - Math.PI / 2 + rotation;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    coords.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return coords.join(" ");
}

export default function HoloStar({ className = "" }: { className?: string }) {
  const back = starPoints(200, 200, 168, 78, 7, -12);
  const front = starPoints(200, 200, 150, 66, 7, 18);

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Layered chrome starburst representing extraordinary design"
    >
      <defs>
        <linearGradient id="starBack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#120a33" />
          <stop offset="45%" stopColor="#5b2eff" />
          <stop offset="75%" stopColor="#ff9fe8" />
          <stop offset="100%" stopColor="#5ee7ff" />
        </linearGradient>
        <linearGradient id="starFront" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#e6e1ff" />
          <stop offset="65%" stopColor="#a597ff" />
          <stop offset="100%" stopColor="#5b2eff" />
        </linearGradient>
        <filter id="starGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g className="animate-spin-slower" style={{ transformOrigin: "200px 200px" }}>
        <polygon points={back} fill="#0a0a0a" stroke="url(#starBack)" strokeWidth="4" />
      </g>

      <g className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }}>
        <polygon
          points={front}
          fill="#ffffff"
          fillOpacity="0.04"
          stroke="url(#starFront)"
          strokeWidth="5"
          filter="url(#starGlow)"
        />
      </g>
    </svg>
  );
}
