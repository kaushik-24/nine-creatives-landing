import Image from "next/image";
import { Check } from "lucide-react";
import { services, servicesPageContent } from "@/lib/content";
import Footer from "@/components/Footer";

const serviceMeta = [
  {
    image: "3d-2nd-service-image.png",
    tone: "lime" as const,
    number: "01",
  },
  {
    image: "3d-1st-service-image.png",
    tone: "ink" as const,
    number: "02",
  },
  {
    image: "3d-3rd-service-image.png",
    tone: "surface" as const,
    number: "03",
  },
];

export default function ServicesPage() {
  const [featured, ...rest] = services;
  const featuredMeta = serviceMeta[0];

  return (
    <>
      <section className="bg-offwhite px-6 pt-32 pb-16 lg:px-10 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-surface-400">
            <span className="h-px w-6 bg-surface-300" />
            Services
          </div>

          <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-surface-950 sm:text-5xl lg:text-6xl">
              What we{" "}
              <span className="text-surface-400">do best</span>
            </h1>
            <p className="max-w-sm text-sm leading-relaxed text-surface-500">
              {servicesPageContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-offwhite px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5">
            <div className="group relative grid overflow-hidden rounded-2xl bg-lime lg:grid-cols-[1.2fr_0.8fr]">
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                <div>
                  <div className="mb-5 h-24 w-24 sm:h-28 sm:w-28 lg:hidden">
                    <Image
                      src={`/images/${featuredMeta.image}`}
                      alt=""
                      width={112}
                      height={112}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="font-display text-sm font-bold tracking-widest text-ink/40">
                    {featuredMeta.number}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl lg:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/70">
                    {featured.description}
                  </p>
                </div>

                <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                  {featured.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-ink/80"
                    >
                      <Check size={15} className="mt-0.5 shrink-0 text-ink" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative hidden min-h-[280px] items-end justify-center lg:flex">
                <Image
                  src={`/images/${featuredMeta.image}`}
                  alt={featured.title}
                  width={280}
                  height={280}
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {rest.map((service, i) => {
                const meta = serviceMeta[i + 1];
                const isInk = meta.tone === "ink";

                return (
                  <div
                    key={service.title}
                    className={`group relative flex flex-col overflow-hidden rounded-2xl p-8 sm:p-10 lg:min-h-[420px] ${
                      isInk ? "bg-ink" : "bg-surface-400"
                    }`}
                  >
                    {isInk && (
                      <div
                        className="pointer-events-none absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            "url(/images/symbol-scatter-haikei.svg)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    )}

                    <div className="relative z-10 flex flex-1 flex-col">
                      <div className="mb-5 h-24 w-24 sm:h-28 sm:w-28 lg:hidden">
                        <Image
                          src={`/images/${meta.image}`}
                          alt=""
                          width={112}
                          height={112}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <span className="font-display text-sm font-bold tracking-widest text-white/30">
                        {meta.number}
                      </span>
                      <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-white/70">
                        {service.description}
                      </p>

                      <ul className="mt-8 space-y-3 w-[90%]">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm text-white/80"
                          >
                            <Check
                              size={15}
                              className="mt-0.5 shrink-0 text-lime"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pointer-events-none absolute -bottom-4 -right-4 hidden h-36 w-36 opacity-80 transition-transform duration-500 group-hover:scale-110 sm:h-44 sm:w-44 lg:block">
                      <Image
                        src={`/images/${meta.image}`}
                        alt=""
                        width={176}
                        height={176}
                        className="object-contain"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
