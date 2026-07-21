"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealOnScroll } from "@/lib/gsap";

const PAIN_POINTS = [
  {
    label: "Slow",
    detail: "Pages that take five seconds to load lose the visitor before they read a word.",
  },
  {
    label: "Generic",
    detail: "Same template, same stock photos, same layout as three other businesses in the same search results.",
  },
  {
    label: "Passive",
    detail: "No clear next step, so visitors leave without calling, booking, or enquiring.",
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      revealOnScroll(".problem-reveal", { trigger: sectionRef.current! });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--color-bg)] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="problem-reveal mb-6 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)]">
          <span className="h-px w-8 bg-[var(--color-accent)]/50" />
          THE PROBLEM
          <span className="h-px w-8 bg-[var(--color-accent)]/50" />
        </div>

        <h2 className="problem-reveal font-display text-4xl font-black uppercase leading-[1.1] text-white md:text-6xl">
          Most service business
          <br />
          websites do nothing for you
        </h2>

        <p className="problem-reveal mx-auto mt-6 max-w-xl text-lg text-[var(--color-muted)]">
          They load slow. They look like every competitor. They sit there
          instead of bringing in work.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 md:grid-cols-3">
        {PAIN_POINTS.map((point) => (
          <div
            key={point.label}
            className="problem-reveal bg-[var(--color-bg)] p-8"
          >
            <div className="font-display text-2xl font-bold uppercase text-[var(--color-accent)]">
              {point.label}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              {point.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
