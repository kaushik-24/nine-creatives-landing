"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined" && !(gsap as any)._nineStudioRegistered) {
  gsap.registerPlugin(ScrollTrigger);
  (gsap as any)._nineStudioRegistered = true;
}

export { gsap, ScrollTrigger };

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
