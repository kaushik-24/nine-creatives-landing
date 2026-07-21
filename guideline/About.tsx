"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealOnScroll } from "@/lib/gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      revealOnScroll(".about-reveal", { trigger: sectionRef.current! });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--color-bg)] px-6 py-28 md:py-36"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div className="about-reveal">
          <div className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)]">
            <span className="h-px w-8 bg-[var(--color-accent)]/50" />
            ABOUT
          </div>
          <h2 className="font-display text-4xl font-black uppercase leading-[1.1] text-white md:text-5xl">
            A small studio.
            <br />
            Serious about speed.
          </h2>
        </div>

        <div className="about-reveal space-y-5 text-lg leading-relaxed text-[var(--color-muted)]">
          <p>
            Nine Studio is a small team, not a big agency. That means
            fewer handoffs, faster replies, and one person who actually
            knows your project from first call to launch.
          </p>
          <p>
            We work with service businesses across Australia and the UK.
            Electricians, lawyers, architects, plumbers. Different
            industries, same goal: a site that brings in work instead of
            just sitting online.
          </p>
          <p>
            Every project ships fast, loads fast, and gets checked
            against a simple standard: would this make someone pick up
            the phone?
          </p>
        </div>
      </div>
    </section>
  );
}
