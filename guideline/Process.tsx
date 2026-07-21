"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const STEPS = [
  {
    number: "01",
    title: "Review",
    detail: "We look at your current site and tell you exactly what's costing you enquiries.",
  },
  {
    number: "02",
    title: "Design",
    detail: "You see real pages, not mood boards. Feedback shapes the design before a line of code is written.",
  },
  {
    number: "03",
    title: "Build",
    detail: "Fast, clean code. No page builders slowing things down. Every page tested on real devices.",
  },
  {
    number: "04",
    title: "Launch",
    detail: "Site goes live, connected to your domain and analytics, with a plain-English handover.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Steps draw in one at a time along a connecting line, since this
      // is a real sequence — the animation should read left to right in
      // the same order the work actually happens.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".process-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "power2.inOut", transformOrigin: "left" }
      ).fromTo(
        ".process-step",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out" },
        "-=0.9"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--color-bg-elevated)] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)]">
          <span className="h-px w-8 bg-[var(--color-accent)]/50" />
          HOW WE WORK
          <span className="h-px w-8 bg-[var(--color-accent)]/50" />
        </div>
        <h2 className="font-display text-4xl font-black uppercase leading-[1.1] text-white md:text-6xl">
          From first call
          <br />
          to live site
        </h2>
      </div>

      <div className="relative mx-auto mt-20 max-w-5xl">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 md:block" />
        <div className="process-line absolute left-0 right-0 top-6 hidden h-px bg-[var(--color-accent)] md:block" />

        <div className="grid gap-10 md:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number} className="process-step relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-bg-elevated)] font-display text-sm font-bold text-[var(--color-accent)]">
                {step.number}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
