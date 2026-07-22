import Image from "next/image";
import { Compass } from "lucide-react";
import { aboutPageContent } from "@/lib/content";

export default function About() {
  const founder = aboutPageContent.team[0];

  return (
    <section id="about" className="bg-offwhite px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-surface-400">
          <span className="h-px w-6 bg-surface-300" />
          About
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-surface-950 sm:text-5xl">
            Man behind <span className="text-surface-400">the work</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-surface-500">
            A focused studio with one person at the core and a trusted network of specialists around him.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink sm:aspect-[16/11] lg:aspect-auto">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/images/low-poly-grid-haikei.svg)" }}
            />
            <Image
              src="/images/kaushik-with-trekking-gears-image.png"
              alt={founder.name}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain"
              style={{ filter: "grayscale(0.3) contrast(1.05)", objectPosition: "right bottom" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

            <div className="absolute left-7 top-7 z-10 rounded-full bg-lime px-4 py-1.5 text-xs font-semibold text-lime-onaccent">
              Developer &rarr; Designer
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-7">
              <div>
                <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-white">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm text-white/60">{founder.role}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-2xl bg-ink p-8">
              <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{ backgroundImage: "url(/images/big-stars-bg-image.svg)" }}
              />
              <div className="relative z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500/15">
                  <Compass className="h-5 w-5 text-electric-500" />
                </div>
                <h3 className="mt-4 font-display text-lg font-extrabold uppercase tracking-tight text-white">
                  {aboutPageContent.mission.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {aboutPageContent.mission.body}
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-6 rounded-2xl bg-lime p-8">
              <div>
                <p className="font-display text-3xl font-black text-lime-onaccent sm:text-4xl">
                  100%
                </p>
                <p className="mt-2 text-xs font-medium text-lime-onaccent/60">
                  On-time delivery
                </p>
              </div>
              <div className="flex justify-between gap-6">
                <div>
                  <p className="font-display text-3xl font-black text-lime-onaccent sm:text-4xl">
                    24/7
                  </p>
                  <p className="mt-2 text-xs font-medium text-lime-onaccent/60">
                    Dedicated support
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl font-black text-lime-onaccent sm:text-4xl">
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
      </div>
    </section>
  );
}
