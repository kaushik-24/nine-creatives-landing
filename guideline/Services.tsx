"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { revealOnScroll } from "@/lib/gsap";

const TIERS = [
  {
    name: "Conversion Sites",
    tagline: "Built to bring in enquiries, fast.",
    price: "For businesses that need results this quarter",
    features: [
      "Live in 2–3 weeks",
      "Fast, clean, mobile-first build",
      "One clear call to action per page",
      "90+ PageSpeed score, guaranteed",
    ],
    highlighted: false,
  },
  {
    name: "Signature Builds",
    tagline: "Built around your brand, from the ground up.",
    price: "For businesses ready to stand apart",
    features: [
      "Fully custom design system",
      "Motion and interaction throughout",
      "Copy, photography direction, and structure",
      "Ongoing support after launch",
    ],
    highlighted: true,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      revealOnScroll(".services-reveal", { trigger: sectionRef.current! });

      // subtle hover lift, GSAP-driven rather than CSS so it can be
      // eased consistently with the rest of the page's motion feel
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");
      cards.forEach((card) => {
        const onEnter = () =>
          gsap.to(card, { y: -6, duration: 0.35, ease: "power2.out" });
        const onLeave = () =>
          gsap.to(card, { y: 0, duration: 0.35, ease: "power2.out" });
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--color-bg-elevated)] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="services-reveal mb-6 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] text-[var(--color-accent)]">
          <span className="h-px w-8 bg-[var(--color-accent)]/50" />
          SERVICES
          <span className="h-px w-8 bg-[var(--color-accent)]/50" />
        </div>
        <h2 className="services-reveal font-display text-4xl font-black uppercase leading-[1.1] text-white md:text-6xl">
          Two ways to get a site
          <br />
          that works
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`service-card services-reveal rounded-2xl border p-8 ${
              tier.highlighted
                ? "border-[var(--color-accent)] bg-gradient-to-b from-[var(--color-accent)]/10 to-transparent"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <h3 className="font-display text-2xl font-bold uppercase text-white">
              {tier.name}
            </h3>
            <p className="mt-2 text-[var(--color-accent)]">{tier.tagline}</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              {tier.price}
            </p>

            <ul className="mt-6 space-y-3">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-[var(--color-muted)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full rounded-lg py-3 text-sm font-semibold transition-colors ${
                tier.highlighted
                  ? "bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent)]/90"
                  : "border border-white/20 text-white hover:border-[var(--color-accent)]"
              }`}
            >
              Talk about {tier.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
