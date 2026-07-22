"use client";

import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Nine rebuilt our site and our PageSpeed score went from 43 to 91.",
    quoteSecondary:
      "We are getting more calls through the site than we were before.",
    name: "Sarah Mitchell",
    role: "Owner, Mitchell Auto Detailing",
    image: "/images/testimonial-01-image.png",
  },
  {
    quote: "Nine gave our website a complete overhaul and made it much easier for customers to find what they need.",
    quoteSecondary:
      "The site feels faster, looks far more professional, and we have noticed more enquiries coming through.",
    name: "James Carter",
    role: "Director, Carter Property Services",
    image: "/images/testimonial-02-image.png",
  },
  {
    quote: "We had a clear idea of what we wanted, and Nine turned it into a website that actually feels like our business.",
    quoteSecondary:
      "The whole process was straightforward, and the new site has made a much stronger first impression with potential clients.",
    name: "Michael Thompson",
    role: "Owner, Thompson Building Services",
    image: "/images/testimonial-03-image.png",
  },
];

export default function TestimonialCard() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="bg-offwhite px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-surface-400">
          <span className="h-px w-6 bg-surface-300" />
          Testimonials
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-surface-950 sm:text-5xl">
            What our clients <span className="text-surface-400">say</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-surface-500">
            Real results from service businesses we have built sites for.
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
