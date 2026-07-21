"use client";

import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <section className="bg-offwhite px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-surface-400">
          <span className="h-px w-6 bg-surface-300" />
          Testimonials
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-surface-950 sm:text-5xl">
            Client <span className="text-surface-400">stories</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-surface-500">
            What our clients say about working with us.
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-1 overflow-hidden rounded-2xl bg-ink sm:grid-cols-[1fr_280px]">
          <div className="flex flex-col justify-between p-8 sm:p-12">
            <div className="flex items-center gap-4">
              <div className="flex gap-1 text-lime">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">4.9/5</span>
              <span className="text-xs text-white/40">Client Rating</span>
            </div>

            <p className="mt-8 max-w-lg font-display text-2xl font-extrabold uppercase leading-snug tracking-tight text-white sm:text-3xl">
              {testimonial.quote.split(".")[0]}.{" "}
              <span className="text-white/35">
                {testimonial.quote.split(".").slice(1).join(".")}
              </span>
            </p>

            <div className="mt-10 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">{testimonial.author}</p>
                <p className="text-xs text-white/40">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  aria-label="Previous testimonial"
                  onClick={() =>
                    setActive(
                      (active - 1 + testimonials.length) % testimonials.length
                    )
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-lime hover:text-lime-onaccent"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={() => setActive((active + 1) % testimonials.length)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-lime hover:text-lime-onaccent"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[280px] sm:block">
            <Image
              src={testimonial.image || ""}
              alt={testimonial.author}
              fill
              sizes="280px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ink/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
