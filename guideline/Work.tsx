"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealOnScroll } from "@/lib/gsap";
import Image from "next/image";

// Swap src/alt/stat for real project details as they're ready.
const PROJECTS = [
  {
    name: "Harbor Electrical",
    category: "Conversion Site",
    stat: "+64% enquiries",
    src: "/work/harbor-electrical.jpg",
  },
  {
    name: "Marlow & Co Legal",
    category: "Signature Build",
    stat: "98 PageSpeed",
    src: "/work/marlow-legal.jpg",
  },
  {
    name: "Coastline Plumbing",
    category: "Conversion Site",
    stat: "3 week turnaround",
    src: "/work/coastline-plumbing.jpg",
  },
  {
    name: "Reeve Architecture",
    category: "Signature Build",
    stat: "+40% time on site",
    src: "/work/reeve-architecture.jpg",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      revealOnScroll(".work-reveal", { trigger: sectionRef.current!, stagger: 0.12 });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--color-bg)] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="work-reveal mb-6 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)]">
          <span className="h-px w-8 bg-[var(--color-accent)]/50" />
          OUR WORK
          <span className="h-px w-8 bg-[var(--color-accent)]/50" />
        </div>
        <h2 className="work-reveal font-display text-4xl font-black uppercase leading-[1.1] text-white md:text-6xl">
          Sites we've shipped
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <a
            key={project.name}
            href="#"
            className="work-reveal group relative block overflow-hidden rounded-2xl border border-white/10"
          >
            <div className="relative aspect-[4/3] w-full bg-[var(--color-bg-elevated)]">
              <Image
                src={project.src}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs font-semibold tracking-[0.15em] text-[var(--color-accent)]">
                {project.category.toUpperCase()}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-white">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {project.stat}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
