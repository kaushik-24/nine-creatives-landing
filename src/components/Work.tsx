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
  const [spacing, setSpacing] = useState(320);
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
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-surface-400">
          <span className="h-px w-6 bg-surface-300" />
          Portfolio
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-surface-950 sm:text-5xl">
            Selected <span className="text-surface-400">work</span>
          </h2>
          <Link
            href="/work"
          >
            <Button variant="pill" size="md">
              View All Projects
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
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
                className="absolute left-1/2 top-1/2 overflow-hidden rounded-xl bg-white shadow-lg"
                style={{
                  width: "min(620px, calc(100vw - 80px))",
                  aspectRatio: "2 / 1",
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
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-electric-500">
              {activeItem.category}
            </span>
            <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-surface-950 sm:text-3xl">
              {activeItem.title}
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-surface-500">
              {activeItem.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-surface-200 bg-white text-surface-500 transition-colors hover:bg-ink hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="min-w-[70px] text-center text-sm text-surface-500">
              {active + 1} / {count}
            </span>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-surface-200 bg-white text-surface-500 transition-colors hover:bg-ink hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
