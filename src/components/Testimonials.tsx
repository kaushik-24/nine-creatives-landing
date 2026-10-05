"use client";

import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Working with Nine Creatives completely transformed our pipeline. We saw high-value client enquiries jump within the first 60 days.",
    quoteSecondary:
      "They didn't just redesign our site — they built a strategic conversion funnel that positions us as the market authority.",
    name: "Michael Thompson",
    role: "Managing Director, Thompson Building Group",
    image: "/images/testimonial-03-image.png",
  },
  {
    quote: "Nine rebuilt our digital platform and our qualified lead conversion rate more than doubled.",
    quoteSecondary:
      "PageSpeed hit 92, and the enquiry form is generating high-intent calls every single week without increasing ad spend.",
    name: "Sarah Mitchell",
    role: "Founder, Mitchell Auto Detailing",
    image: "/images/testimonial-01-image.png",
  },
  {
    quote: "Nine gave our business a complete digital strategy overhaul with zero fluff and maximum commercial focus.",
    quoteSecondary:
      "The clarity of the messaging and frictionless customer journey has made closing new contracts significantly faster.",
    name: "James Carter",
    role: "Director, Carter Commercial Services",
    image: "/images/testimonial-02-image.png",
  },
];

export default function TestimonialCard() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section id="testimonials" className="bg-offwhite px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4f8fe6]">
          <span className="h-px w-6 bg-[#4f8fe6]/50" />
          Client Proof & ROI
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl">
            What Our Partners{" "}
            <span className="bg-gradient-to-r from-[#23c17c] via-[#3ebd9e] to-[#4f8fe6] bg-clip-text text-transparent">
              Achieve
            </span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-ink/70">
            Measurable pipeline growth and ROI from businesses we have partnered with.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl bg-ink sm:grid-cols-[1fr_320px] lg:grid-cols-[1fr_420px]">
          <div className="flex min-h-[320px] flex-col justify-between p-8 lg:min-h-[420px]">
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5 text-lime">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="text-right">
                <div className="text-xl font-semibold text-lime">4.9/5</div>
                <div className="text-xs text-white/40">Client satisfaction</div>
              </div>
            </div>

            <p className="mt-6 text-lg font-semibold leading-snug text-white">
              {t.quote}{" "}
              <span className="font-normal text-white/40">{t.quoteSecondary}</span>
            </p>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/40">{t.role}</p>
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Previous testimonial"
                  onClick={() =>
                    setActive((active - 1 + testimonials.length) % testimonials.length)
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark text-white transition-colors hover:bg-white/10"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={() => setActive((active + 1) % testimonials.length)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-lime text-[#1f2a05] transition-transform hover:scale-105"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative hidden h-full min-h-[320px] bg-brand sm:block lg:min-h-[420px]">
            <Image
              src={t.image}
              alt={t.name}
              fill
              sizes="(min-width: 1024px) 420px, 320px"
              className="object-contain object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-brand-dark/35" />
          </div>
        </div>
      </div>
    </section>
  );
}
