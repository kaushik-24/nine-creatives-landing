"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealOnScroll } from "@/lib/gsap";
import { CountUp } from "@/components/CountUp";
import Hyperspeed, { electricPreset } from "@/components/Hyperspeed";

export function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (statsRef.current) {
        revealOnScroll(statsRef.current.children, { trigger: statsRef.current, stagger: 0.15 });
      }
    },
    { scope: statsRef }
  );

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Hyperspeed effectOptions={electricPreset} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-ink/60" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-ink" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-24 pb-20">
        <div className="w-full text-center">
          <div className="mb-6 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-electric-400">
            <span className="h-px w-6 bg-electric-400/40" />
            Service Businesses
            <span className="h-px w-6 bg-electric-400/40" />
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Your Website Should Be Working{" "}
            <span className="text-electric-400">Harder for Your Business</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-300">
            We build fast, professional websites for service businesses in Australia &amp; the UK that turn visitors into enquiries. No fluff. No templates.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg">
                Get a Free Site Review
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="secondary" size="lg">
                View Our Work
              </Button>
            </Link>
          </div>

          <div
            ref={statsRef}
            className="hero-stats mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-10"
          >
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">
                <CountUp to={20} suffix="+" duration={1.5} />
              </p>
              <p className="mt-1 text-xs text-surface-400 uppercase tracking-wider">
                Sites Delivered
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-lime sm:text-3xl">
                <CountUp to={90} suffix="+" duration={1.5} />
              </p>
              <p className="mt-1 text-xs text-surface-400 uppercase tracking-wider">
                Avg PageSpeed Score
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">
                <CountUp to={24} suffix=" hrs" duration={1.5} />
              </p>
              <p className="mt-1 text-xs text-surface-400 uppercase tracking-wider">
                Reply Within
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
