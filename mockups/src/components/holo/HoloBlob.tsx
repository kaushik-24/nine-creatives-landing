export default function HoloBlob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#c9c2ff" />
          <stop offset="70%" stopColor="#5b2eff" />
          <stop offset="100%" stopColor="#120a33" />
        </linearGradient>
      </defs>
      <path
        d="M50 8C68 8 82 18 88 34C94 50 88 62 74 72C60 82 46 94 30 88C14 82 6 64 8 46C10 28 32 8 50 8Z"
        fill="url(#blobGrad)"
      />
      <path
        d="M50 8C68 8 82 18 88 34C94 50 88 62 74 72"
        stroke="#ffffff"
        strokeOpacity="0.5"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
