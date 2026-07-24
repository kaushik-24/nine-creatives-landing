"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { canUseSmoothScroll } from "@/lib/perf";

export default function SmoothScroll() {
  useEffect(() => {
    if (!canUseSmoothScroll()) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    lenis.on("scroll", () => ScrollTrigger.update());

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      gsap.ticker.lagSmoothing(1);
    };
  }, []);

  return null;
}
