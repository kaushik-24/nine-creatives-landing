"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const CHECKS = [
  {
    id: "01",
    label: "SPEED",
    metric: "5.4s",
    metricLabel: "avg load time",
    verdict: "FAIL",
    detail:
      "Sites we review average 5.4 seconds to load. Most visitors are gone by second three.",
  },
  {
    id: "02",
    label: "DESIGN",
    metric: "3×",
    metricLabel: "same template",
    verdict: "FAIL",
    detail:
      "Same layout, same stock photography, same font as three competitors in the same search result.",
  },
  {
    id: "03",
    label: "ACTION",
    metric: "0",
    metricLabel: "clear next steps",
    verdict: "FAIL",
    detail:
      "No obvious next step, so visitors leave without calling, booking, or asking a question.",
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".problem-left",
        { x: -24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      const rows = gsap.utils.toArray<HTMLElement>(".check-row");
      rows.forEach((row, i) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 85%" },
          }
        );

        const dash = row.querySelector(".lane-dash");
        if (dash) {
          gsap.fromTo(
            dash,
            { backgroundPositionX: "0px" },
            {
              backgroundPositionX: "-200px",
              duration: 2.4,
              delay: i * 0.1,
              ease: "none",
              scrollTrigger: { trigger: row, start: "top 85%" },
            }
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--color-bg)] px-6 py-28 md:py-36"
    >
      <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div className="problem-left md:sticky md:top-32">
          <p className="font-mono text-sm font-semibold tracking-[0.2em] text-[var(--color-accent)]">
            THE INSPECTION
          </p>
          <h2 className="mt-5 font-display text-5xl font-black uppercase leading-[1.1] text-white md:text-6xl">
            Three checks
            <br />
            most sites
            <br />
            fail
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-[var(--color-muted)]">
            We run every site through the same three checks before we
            touch a single line of code.
          </p>
        </div>

        <div>
          {CHECKS.map((check, i) => (
            <div
              key={check.id}
              className={`check-row py-8 ${
                i !== 0 ? "border-t border-white/10" : ""
              }`}
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-base text-[var(--color-muted)]">
                    {check.id}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-white">
                    {check.label}
                  </h3>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-4xl font-bold text-[var(--color-accent)]">
                    {check.metric}
                  </span>
                  <span className="font-mono text-sm uppercase tracking-wide text-[var(--color-muted)]">
                    {check.metricLabel}
                  </span>
                  <span className="rounded border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-2.5 py-1 font-mono text-xs font-bold tracking-widest text-[var(--color-accent)]">
                    {check.verdict}
                  </span>
                </div>
              </div>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--color-muted)]">
                {check.detail}
              </p>

              <div
                className="lane-dash mt-6 h-px w-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, var(--color-accent) 0 12px, transparent 12px 24px)",
                  opacity: 0.35,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
