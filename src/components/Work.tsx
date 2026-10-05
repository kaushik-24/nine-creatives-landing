"use client";

import { portfolioItems } from "@/lib/content";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/Button";

function wrap(index: number, length: number) {
  return (index + length) % length;
}

function getSpacing() {
  if (typeof window === "undefined") return 680;
  if (window.innerWidth < 480) return 300;
  if (window.innerWidth < 768) return 380;
  if (window.innerWidth < 1024) return 500;
  return 680;
}

export default function Work() {
  const [active, setActive] = useState(0);
  const [spacing, setSpacing] = useState(680);
  const wheelLock = useRef(false);

  const projects = portfolioItems.slice(0, 4);
  const count = projects.length;

  const activeItem = projects[wrap(active, count)];

  const updateSpacing = useCallback(() => {
    setSpacing(getSpacing());
  }, []);

  useEffect(() => {
    updateSpacing();
    window.addEventListener("resize", updateSpacing);
    return () => window.removeEventListener("resize", updateSpacing);
  }, [updateSpacing]);

  const goTo = useCallback((offset: number) => {
    setActive((prev) => wrap(prev + offset, count));
  }, [count]);

  const next = useCallback(() => goTo(1), [goTo]);
  const prev = useCallback(() => goTo(-1), [goTo]);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (wheelLock.current) return;
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 20) {
        delta > 0 ? next() : prev();
        wheelLock.current = true;
        setTimeout(() => {
          wheelLock.current = false;
        }, 400);
      }
    },
    [next, prev]
  );

  const offsets = [-2, -1, 0, 1, 2];

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-offwhite px-6 py-24 lg:px-10 select-none"
      tabIndex={0}
      onWheel={handleWheel}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4f8fe6]">
          <span className="h-px w-6 bg-[#4f8fe6]/50" />
          Proof Of Work & Client Results
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl">
              Proven Impact.{" "}
              <span className="bg-gradient-to-r from-[#23c17c] via-[#3ebd9e] to-[#4f8fe6] bg-clip-text text-transparent">
                Real Client Results.
              </span>
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">
              High-converting platforms engineered to capture demand, eliminate friction, and predictably generate qualified client leads.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/work">
              <Button variant="pill" size="md">
                View All Case Studies
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mx-6 mt-10 h-full px-6 pt-8 lg:-mx-10 lg:px-10">
        <div
          className="relative mx-auto"
          style={{ perspective: "1340px", height: "400px", maxWidth: "1200px" }}
        >
          {offsets.map((offset) => {
            const index = wrap(active + offset, count);
            const item = projects[index];
            const x = offset * spacing;
            const scale = offset === 0 ? 1 : 0.85;
            const rotateY = offset * -18;

            return (
              <div
                key={offset}
                className="absolute left-1/2 top-1/2 overflow-hidden rounded-2xl bg-white shadow-xl border border-black/5"
                style={{
                  width: "min(620px, calc(100vw - 80px))",
                  aspectRatio: "16 / 9",
                  transform: `translate(-50%,-50%) translateX(${x}px) rotateY(${rotateY}deg) scale(${scale})`,
                  transition: "transform 0.9s cubic-bezier(0.22, 0.61, 0.36, 1)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (offset !== 0) {
                    setActive(wrap(active + offset, count));
                  }
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-8 rounded-2xl border border-black/5 bg-white/70 p-8 backdrop-blur-md shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#4f8fe6]">
                {activeItem.category}
              </span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
              {activeItem.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/70">
              {activeItem.description}
            </p>

            {/* Results & Conversion Lift Badges */}
            {activeItem.result && (
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-[#23c17c]/20 bg-[#23c17c]/10 px-4 py-2">
                  <span className="font-display text-lg font-black text-[#23c17c]">
                    {activeItem.result.metric1}
                  </span>
                  <span className="text-xs font-medium text-ink/70">
                    {activeItem.result.metric1Label}
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-[#4f8fe6]/20 bg-[#4f8fe6]/10 px-4 py-2">
                  <span className="font-display text-lg font-black text-[#4f8fe6]">
                    {activeItem.result.metric2}
                  </span>
                  <span className="text-xs font-medium text-ink/70">
                    {activeItem.result.metric2Label}
                  </span>
                </div>
              </div>
            )}

            {/* Capability Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {activeItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs font-medium text-ink/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4f8fe6] hover:text-[#23c17c] transition-colors"
              >
                Read In-Depth Case Study
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition-colors hover:bg-ink hover:text-white shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="min-w-[60px] text-center font-mono text-xs font-semibold text-ink/60">
              0{active + 1} / 0{count}
            </span>
            <button
              onClick={next}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#23c17c] text-white transition-transform hover:scale-105 shadow-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
