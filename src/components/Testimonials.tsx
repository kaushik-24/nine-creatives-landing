"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials as testimonialData } from "@/lib/content";

export default function Testimonials() {
  const items = testimonialData.map((t) => ({
    quote: t.quote,
    name: t.author,
    designation: `${t.role}, ${t.company}`,
    src: t.image || "",
  }));

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

        <div className="mt-12">
          <AnimatedTestimonials testimonials={items} autoplay />
        </div>
      </div>
    </section>
  );
}
