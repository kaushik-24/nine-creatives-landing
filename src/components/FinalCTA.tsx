"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cta-reveal",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      const btn = btnRef.current;
      if (!btn) return;
      const strength = 0.35;

      const onMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        gsap.to(btn, {
          x: relX * strength,
          y: relY * strength,
          duration: 0.4,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
      };

      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
      return () => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink px-6 py-32 text-center md:py-44"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="cta-reveal font-display text-4xl font-extrabold uppercase leading-tight text-white md:text-6xl">
          Ready for a site
          <br />
          that works harder?
        </h2>
        <p className="cta-reveal mx-auto mt-6 max-w-md text-sm leading-relaxed text-surface-400">
          Send us your current site. We&apos;ll reply within 24 hours with a
          free, honest review.
        </p>

        <a
          ref={btnRef}
          href="#contact"
          className="cta-reveal mt-10 inline-block rounded-full bg-lime px-10 py-4 text-sm font-semibold text-lime-onaccent transition-transform hover:scale-[1.03]"
        >
          Get a Free Site Review
        </a>
      </div>
    </section>
  );
}
