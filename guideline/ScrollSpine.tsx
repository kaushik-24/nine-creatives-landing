"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * The hero's road lines don't end at the hero — this is why.
 * A single line runs down the edge of the page for the full scroll,
 * drawing itself as you go, with a glowing "headlight" dot that
 * travels along it. It's the one continuous thread tying every
 * section back to the hero's "the road keeps going" idea.
 *
 * Desktop only — on mobile it would just compete with content in a
 * narrow viewport, so it's hidden below the md breakpoint.
 */
export default function ScrollSpine() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useGSAP(
    () => {
      const path = pathRef.current;
      const dot = dotRef.current;
      if (!path || !dot) return;

      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#page-root",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      tl.to(path, { strokeDashoffset: 0, ease: "none" });

      // Move the dot along the same path progress the line is drawing.
      const onUpdate = (self: ScrollTrigger) => {
        const point = path.getPointAtLength(length * self.progress);
        gsap.set(dot, { attr: { cx: point.x, cy: point.y } });
      };

      ScrollTrigger.create({
        trigger: "#page-root",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        onUpdate,
      });
    },
    { scope: wrapRef }
  );

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-6 z-40 hidden w-8 md:block"
    >
      <svg
        viewBox="0 0 32 1000"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {/* faint full-length guide, always visible */}
        <path
          d="M16 0 C 24 120, 8 240, 16 360 S 24 600, 16 720 S 8 900, 16 1000"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* the animated draw-on line, same path */}
        <path
          ref={pathRef}
          d="M16 0 C 24 120, 8 240, 16 360 S 24 600, 16 720 S 8 900, 16 1000"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          ref={dotRef}
          r="4"
          fill="var(--color-accent)"
          style={{ filter: "drop-shadow(0 0 6px var(--color-accent))" }}
        />
      </svg>
    </div>
  );
}
