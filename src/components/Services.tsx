import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const images = ["3d-2nd-service-image.png", "3d-1st-service-image.png", "3d-3rd-service-image.png"];

const services = [
  {
    title: "Speed & Performance",
    description:
      "We routinely get sites from below 60 to 90+ on PageSpeed. Image optimisation, code minification, caching — everything that makes your site feel instant.",
    tags: ["PageSpeed Audits", "Core Web Vitals", "Image Optimisation", "Caching Strategies", "Performance Tuning"],
  },
  {
    title: "Website Design & Development",
    description:
      "We design and build sites that are clean, fast, and structured around what your visitors need to see before they contact you. Custom design, not templates.",
    tags: ["Custom Design", "Mobile-First", "SEO Foundation", "Lead Capture", "CMS Integration"],
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
              className={`group relative overflow-hidden rounded-2xl p-8 shadow-sm sm:p-10 ${
                i === 1 ? "bg-lime" : "bg-surface-400"
              }`}
            >
              <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
                <div className="max-w-xl">
                  <div className="flex items-center gap-4">
                    <h3 className={`font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl ${
                      i === 1 ? "text-ink" : "text-white"
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className={`mt-4 text-sm leading-relaxed ${
                    i === 1 ? "text-ink/70" : "text-white/70"
                  }`}>
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3.5 py-1.5 text-xs font-medium ${
                          i === 1
                            ? "border-ink/10 bg-ink/5 text-ink/70"
                            : "border-white/15 bg-white/10 text-white/80"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 hidden h-40 w-40 items-center justify-center lg:flex sm:bottom-6 sm:right-6">
                <Image
                  src={`/images/${images[i]}`}
                  alt={service.title}
                  width={160}
                  height={160}
                  className="object-contain"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

              <span className="absolute right-8 top-8 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-transform group-hover:rotate-45 sm:right-10 sm:top-10">
                <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
