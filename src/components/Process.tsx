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
    <section ref={sectionRef} className="bg-ink px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-surface-400">
          <span className="h-px w-6 bg-surface-600" />
          How We Work
        </div>

        <div className="problem-heading mt-4 mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            From first call
            <br />
            to live site
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-surface-400">
            A structured four-step process. No fluff, no surprises, just a clear path from review to launch.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/10 md:block" />
          <div className="process-line absolute left-0 right-0 top-8 hidden h-px bg-lime md:block" />

          <div className="grid gap-5 md:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="process-step rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-lime font-display text-sm font-bold text-lime-onaccent">
                  {step.number}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold uppercase text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-surface-400">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
