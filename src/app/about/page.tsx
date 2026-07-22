import Image from "next/image";
import { Compass, Target, Gem, HandshakeIcon } from "lucide-react";
import { aboutPageContent } from "@/lib/content";
import Footer from "@/components/Footer";

const valueIcons = [Target, Gem, HandshakeIcon];
const valueTones = ["ink", "ink", "lime"] as const;

export default function AboutPage() {
  const founder = aboutPageContent.team[0];

  return (
    <>
      <section className="bg-offwhite px-6 pt-32 pb-16 lg:px-10 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-surface-400">
            <span className="h-px w-6 bg-surface-300" />
            About
          </div>

          <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-surface-950 sm:text-5xl lg:text-6xl">
              Nine worlds.{" "}
              <span className="text-surface-400">One studio.</span>
            </h1>
            <p className="max-w-sm text-sm leading-relaxed text-surface-500">
              {aboutPageContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-offwhite px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink sm:aspect-[16/11] lg:aspect-auto lg:min-h-[560px]">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url(/images/low-poly-grid-haikei.svg)",
                }}
              />
              <Image
                src="/images/me-potrait-shadow-image.png"
                alt={founder.name}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain"
                style={{
                  filter: "grayscale(0.3) contrast(1.05)",
                  objectPosition: "right bottom",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

              <div className="absolute left-7 top-7 z-10 rounded-full bg-lime px-4 py-1.5 text-xs font-semibold text-lime-onaccent">
                Developer &rarr; Designer
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-white sm:text-2xl">
                  {founder.name}
                </h2>
                <p className="mt-1 text-sm text-white/60">{founder.role}</p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                  {founder.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative flex-1 overflow-hidden rounded-2xl bg-ink p-8 sm:p-10">
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                  style={{
                    backgroundImage: "url(/images/big-stars-bg-image.svg)",
                  }}
                />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500/15">
                      <Compass className="h-5 w-5 text-electric-500" />
                    </div>
                    <h2 className="mt-6 font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                      {aboutPageContent.mission.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                      {aboutPageContent.mission.body}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-8 rounded-2xl bg-lime p-8 sm:flex-row sm:items-end sm:p-10">
                <div>
                  <p className="font-display text-4xl font-black text-lime-onaccent sm:text-5xl">
                    100%
                  </p>
                  <p className="mt-2 text-xs font-medium text-lime-onaccent/60">
                    On-time delivery
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl font-black text-lime-onaccent sm:text-5xl">
                    24/7
                  </p>
                  <p className="mt-2 text-xs font-medium text-lime-onaccent/60">
                    Dedicated support
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl font-black text-lime-onaccent sm:text-5xl">
                    3
                  </p>
                  <p className="mt-2 text-xs font-medium text-lime-onaccent/60">
                    Countries served
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-offwhite px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-surface-400">
            <span className="h-px w-6 bg-surface-300" />
            Values
          </div>

          <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-surface-950 sm:text-5xl">
              How we <span className="text-surface-400">work</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-surface-500">
              A focused studio with one person at the core and a trusted network
              of specialists around him.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {aboutPageContent.values.map((value, i) => {
              const Icon = valueIcons[i] || Target;
              const tone = valueTones[i];
              const isLime = tone === "lime";

              return (
                <div
                  key={value.title}
                  className={`group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10 ${
                    isLime
                      ? "bg-lime hover:shadow-lime/30"
                      : "bg-ink hover:shadow-electric-500/10"
                  }`}
                >
                  {!isLime && (
                    <div
                      className="pointer-events-none absolute inset-0 opacity-50 transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(/images/${
                          i === 0
                            ? "symbol-scatter-haikei.svg"
                            : "low-poly-grid-haikei.svg"
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-lg ${
                      isLime
                        ? "bg-ink/10 text-ink"
                        : "bg-white/20 text-electric-400"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>

                  <div className="relative z-10">
                    <h3
                      className={`font-display text-xl font-extrabold uppercase tracking-tight sm:text-2xl ${
                        isLime ? "text-ink" : "text-white"
                      }`}
                    >
                      {value.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        isLime ? "text-ink/60" : "text-white/80"
                      }`}
                    >
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
