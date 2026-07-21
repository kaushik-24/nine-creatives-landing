import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const images = ["1st-service-image.png", "2nd-service-image.png", "3rd-service-image.png"];

const services = [
  {
    title: "Website Design & Development",
    description:
      "We design and build sites that are clean, fast, and structured around what your visitors need to see before they contact you. Custom design, not templates.",
    tags: ["Custom Design", "Mobile-First", "SEO Foundation", "Lead Capture", " CMS"],
  },
  {
    title: "Speed & Performance",
    description:
      "We routinely get sites from below 60 to 90+ on PageSpeed. Image optimisation, code minification, caching — everything that makes your site feel instant.",
    tags: ["PageSpeed Audits", "Core Web Vitals", "Image Optimisation", "Caching", "Performance Tuning"],
  },
  {
    title: "UI/UX Design",
    description:
      "We look at how visitors move through your site and remove every point of friction between landing and getting in touch. Clean interfaces that make the right action obvious.",
    tags: ["User Flows", "Wireframes", "Visual Design", "Conversion Focus", "Component Libraries"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-offwhite px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-surface-400">
          <span className="h-px w-6 bg-surface-300" />
          Services
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-surface-950 sm:text-5xl">
            What we <span className="text-surface-400">do best</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-surface-500">
            Three things we do well for service businesses. Everything else we refer out.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-ink p-8 sm:p-10"
            >
              <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                <div className="max-w-xl">
                  <div className="flex items-center gap-4">
                    <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-surface-400">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-surface-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden shrink-0 items-center justify-center lg:flex">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/[0.03]">
                    <Image
                      src={`/images/${images[i]}`}
                      alt={service.title}
                      width={80}
                      height={80}
                      className="object-contain"
                      style={i === 1 ? { filter: "brightness(0.7)" } : undefined}
                    />
                  </div>
                </div>
              </div>

              <span className="absolute right-8 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-lime text-lime-onaccent transition-transform group-hover:rotate-45 sm:right-10 sm:top-10">
                <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
