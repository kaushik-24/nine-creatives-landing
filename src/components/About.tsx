import Image from "next/image";
import { Award, Briefcase } from "lucide-react";
import { aboutPageContent, siteConfig } from "@/lib/content";

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
            <Image
              src="/images/me-potrait-shadow-image.png"
              alt={founder.name}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain"
              style={{ filter: "grayscale(0.3) contrast(1.05)", objectPosition: "center bottom" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-7">
              <div>
                <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-white">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm text-white/60">{founder.role}</p>
              </div>
            </div>

            <div className="absolute left-7 top-7 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-lime/15 px-3 py-1.5 text-xs font-medium text-lime backdrop-blur">
                <Award className="h-3.5 w-3.5" /> {siteConfig.stats.projects} Projects
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
                <Briefcase className="h-3.5 w-3.5" /> 90+ PageSpeed
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-ink p-8">
              <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-white">
                {aboutPageContent.mission.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-surface-400">
                {aboutPageContent.mission.body}
              </p>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-6 rounded-2xl bg-lime p-8">
              <div>
                <p className="font-display text-3xl font-black text-lime-onaccent sm:text-4xl">
                  {siteConfig.stats.projects}
                </p>
                <p className="mt-2 text-xs font-medium text-lime-onaccent/60">
                  Sites delivered
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="font-display text-3xl font-black text-lime-onaccent sm:text-4xl">
                    24 hrs
                  </p>
                  <p className="mt-2 text-xs font-medium text-lime-onaccent/60">
                    Reply time
                  </p>
                </div>
              </div>
              <div>
                <p className="font-display text-3xl font-black text-lime-onaccent sm:text-4xl">
                  90+
                </p>
                <p className="mt-2 text-xs font-medium text-lime-onaccent/60">
                  Avg PageSpeed score
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
