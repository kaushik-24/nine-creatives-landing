import Link from "next/link";
import { ArrowUpRight, Target, Layers, Zap } from "lucide-react";

const services = [
  {
    icon: Target,
    step: "01",
    title: "Digital Strategy & Conversion Funnels",
    description:
      "We engineer full-funnel customer acquisition pathways that attract high-intent buyers, articulate your unique value proposition, and funnel qualified leads directly into your sales pipeline.",
    tags: ["Growth Strategy", "Buyer Intent Mapping", "Lead Funnel Design", "Value Positioning", "Lead Capture Automation"],
  },
  {
    icon: Layers,
    step: "02",
    title: "High-Performance Web Platforms",
    description:
      "Custom web platforms built on modern frameworks, engineered from the ground up to establish market authority and turn casual visitors into committed, high-value client enquiries.",
    tags: ["Custom Architecture", "Mobile-First UX", "Lead Generation Engines", "Authority Positioning", "Zero-Bloat Code"],
  },
  {
    icon: Zap,
    step: "03",
    title: "Conversion Rate Optimization & Velocity",
    description:
      "Data-driven performance tuning, Core Web Vitals optimization, and continuous conversion rate optimization (CRO) to eliminate drop-off and lower your customer acquisition cost.",
    tags: ["PageSpeed 90+", "Core Web Vitals", "A/B Testing & CRO", "Drop-Off Elimination", "Pipeline Tracking"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-offwhite px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4f8fe6]">
          <span className="h-px w-6 bg-[#4f8fe6]/50" />
          Growth Capabilities
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl">
            How We Drive{" "}
            <span className="bg-gradient-to-r from-[#23c17c] via-[#3ebd9e] to-[#4f8fe6] bg-clip-text text-transparent">
              Your Growth
            </span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-ink/70">
            Three integrated capabilities engineered to position your business as the market authority and drive consistent, qualified client enquiries.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 sm:p-10 ${
                  i === 1
                    ? "bg-lime shadow-lime/20"
                    : "border border-white/5 bg-ink shadow-ink/20"
                }`}
              >
                <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                  <div className="max-w-xl">
                    {/* Sleek Minimalist Glassmorphic Icon Badge */}
                    <div
                      className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl ${
                        i === 1
                          ? "border border-ink/15 bg-ink/10 text-ink shadow-[0_0_20px_rgba(15,19,48,0.08)]"
                          : "border border-white/15 bg-white/[0.06] text-[#4f8fe6] backdrop-blur-md shadow-[0_0_25px_rgba(79,143,230,0.18)] group-hover:border-[#4f8fe6]/50 group-hover:shadow-[0_0_35px_rgba(79,143,230,0.3)]"
                      }`}
                    >
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} />
                    </div>

                    <div className="flex items-center gap-4">
                      <h3
                        className={`font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl ${
                          i === 1 ? "text-ink" : "text-white"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        i === 1 ? "text-ink/70" : "text-white/70"
                      }`}
                    >
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

                {/* Right-Side Glowing Glassmorphic Emblem */}
                <div className="absolute bottom-6 right-6 hidden h-32 w-32 items-center justify-center sm:h-36 sm:w-36 md:flex lg:bottom-8 lg:right-10 lg:h-40 lg:w-40">
                  <div
                    className={`absolute inset-0 rounded-3xl blur-2xl transition-all duration-500 group-hover:scale-110 ${
                      i === 1
                        ? "bg-ink/15 group-hover:bg-ink/25"
                        : "bg-[#4f8fe6]/20 group-hover:bg-[#4f8fe6]/35"
                    }`}
                  />
                  <div
                    className={`relative flex h-full w-full flex-col items-center justify-center rounded-3xl backdrop-blur-xl transition-all duration-500 group-hover:scale-105 ${
                      i === 1
                        ? "border border-ink/15 bg-ink/[0.08] shadow-[0_8px_32px_rgba(15,19,48,0.1)] group-hover:border-ink/25"
                        : "border border-white/15 bg-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:border-white/30"
                    }`}
                  >
                    <Icon
                      className={`h-12 w-12 transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14 ${
                        i === 1 ? "text-ink" : "text-[#4f8fe6]"
                      }`}
                      strokeWidth={1.8}
                    />
                    <span
                      className={`mt-2 font-mono text-[10px] font-bold tracking-widest uppercase ${
                        i === 1 ? "text-ink/40" : "text-white/40"
                      }`}
                    >
                      {service.step}
                    </span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className={`absolute right-8 top-8 z-20 flex h-10 w-10 items-center justify-center rounded-full transition-all group-hover:rotate-45 sm:right-10 sm:top-10 ${
                    i === 1
                      ? "bg-ink text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  aria-label={`Inquire about ${service.title}`}
                >
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
