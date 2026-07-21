export default function LaptopShowcase() {
  return (
    <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-neutral-800 via-neutral-900 to-black px-4 py-12 sm:px-10 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 46px)",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        {/* screen */}
        <div className="rounded-t-2xl border-[6px] border-b-0 border-neutral-700 bg-black p-1.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
          <div className="relative aspect-video overflow-hidden rounded-md bg-gradient-to-br from-[#0d0d0d] via-[#141414] to-[#0a0a0a]">
            {/* basketball accent */}
            <svg
              viewBox="0 0 200 200"
              className="absolute -bottom-10 -right-10 h-[70%] w-[70%] opacity-90 sm:opacity-100"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="ballGrad" cx="35%" cy="30%" r="75%">
                  <stop offset="0%" stopColor="#ffce54" />
                  <stop offset="55%" stopColor="#e8892c" />
                  <stop offset="100%" stopColor="#7a3e10" />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="86" fill="url(#ballGrad)" />
              <path d="M14 100H186M100 14V186" stroke="#1a1005" strokeWidth="3" opacity="0.7" />
              <path
                d="M28 44C55 70 55 130 28 156M172 44C145 70 145 130 172 156"
                stroke="#1a1005"
                strokeWidth="3"
                fill="none"
                opacity="0.7"
              />
            </svg>

            <div className="relative flex h-full flex-col justify-between p-5 sm:p-8">
              <div>
                <p className="font-display text-2xl font-black uppercase leading-[0.95] text-[#f4e04d] sm:text-4xl">
                  Elite Court
                  <br />
                  Supplies
                </p>
                <p className="eyebrow mt-3 max-w-[220px] text-[9px] leading-relaxed text-paper/50 sm:text-[10px]">
                  Discover the best in basketball gear and equipment to
                  elevate your game
                </p>
              </div>

              <div>
                <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-[#f4e04d] px-3 py-1.5 text-[9px] text-ink">
                  ⌂ Home
                </span>
              </div>
            </div>

            {/* play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                aria-label="Play project showreel"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-purple shadow-[0_0_0_10px_rgba(91,46,255,0.18)] transition-transform hover:scale-105 sm:h-20 sm:w-20"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M6 3.5L18 11L6 18.5V3.5Z" fill="#ffffff" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* keyboard deck */}
        <div className="relative h-4 rounded-b-2xl bg-gradient-to-b from-neutral-500 to-neutral-700 sm:h-5">
          <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-md bg-neutral-800 sm:w-24" />
        </div>
        <div className="mx-auto h-2 w-[70%] rounded-b-xl bg-neutral-800/80" />
      </div>
    </div>
  );
}
