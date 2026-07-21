"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register once, guarded so Next.js fast-refresh / multiple imports don't double-register.
if (typeof window !== "undefined" && !(gsap as any)._nineStudioRegistered) {
  gsap.registerPlugin(ScrollTrigger);
  (gsap as any)._nineStudioRegistered = true;
}

export { gsap, ScrollTrigger };

/**
 * Standard "reveal" used across every section below: elements start
 * slightly down + faded, settle into place as they cross into view.
 * Kept as one shared function so every section animates in sync —
 * no section should invent its own timing.
 */
export function revealOnScroll(
  targets: gsap.TweenTarget,
  opts: { trigger: Element | string; stagger?: number; start?: string }
) {
  return gsap.fromTo(
    targets,
    { y: 32, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger: opts.stagger ?? 0.08,
      scrollTrigger: {
        trigger: opts.trigger,
        start: opts.start ?? "top 78%",
        toggleActions: "play none none reverse",
      },
    }
  );
}
