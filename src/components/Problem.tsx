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
        ".problem-heading",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
            { width: 0 },
            {
              width: "100%",
              duration: 1.2,
              delay: i * 0.15,
              ease: "power2.out",
              scrollTrigger: { trigger: row, start: "top 85%" },
            }
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-ink px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-surface-400">
          <span className="h-px w-6 bg-surface-600" />
          The Inspection
        </div>

        <div className="problem-heading mt-4 mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            Three checks
            <br />
            most sites
            <br />
            fail
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-surface-400">
            We run every site through the same three checks before we touch a
            single line of code.
          </p>
        </div>

        <div className="space-y-5">
          {CHECKS.map((check, i) => (
            <div
              key={check.id}
              className="check-row rounded-2xl bg-white p-8 sm:p-10"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-surface-400">
                    {check.id}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-surface-950">
                    {check.label}
                  </h3>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-3xl font-bold text-electric-500">
                    {check.metric}
                  </span>
                  <span className="text-xs uppercase tracking-wide text-surface-400">
                    {check.metricLabel}
                  </span>
                  <span className="rounded-md border border-electric-500/40 bg-electric-500/15 px-3 py-1 font-mono text-xs font-bold tracking-widest text-electric-500">
                    {check.verdict}
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-surface-500">
                {check.detail}
              </p>
              <div className="lane-dash mt-6 h-px bg-electric-500/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
