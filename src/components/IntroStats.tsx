import { Code2, Zap, TrendingUp } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { CountUp } from "@/components/CountUp";

const cards = [
  {
    icon: Code2,
    tone: "ink",
    value: siteConfig.stats.projects,
    valueLabel: siteConfig.stats.projectsLabel,
    title: "SITES DELIVERED",
    description:
      "Every site built from scratch, no templates, focused on turning visitors into enquiries.",
  },
  {
    icon: Zap,
    tone: "ink",
    value: siteConfig.stats.score,
    valueLabel: siteConfig.stats.scoreLabel,
    title: "PERFORMANCE FIRST",
    description:
      "We optimise every site for speed. A fast site keeps visitors on the page and drives results.",
  },
  {
    icon: TrendingUp,
    tone: "electric",
    value: siteConfig.stats.growth,
    valueLabel: siteConfig.stats.growthLabel,
    title: "CLIENT RESULTS",
    description:
      "Our clients see an average 64% increase in enquiries after a site rebuild.",
  },
];

export default function IntroStats() {
  return (
    <section
      className="bg-offwhite px-6 pb-20 pt-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl font-display text-3xl font-extrabold uppercase leading-[1.15] tracking-tight text-surface-950 sm:text-4xl">
          Built To Do More Than Look Good.
          <span className="text-surface-400"> Designed To Turn Visitors Into Enquiries.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const valueMatch = card.value.match(/^(\d+)(.*)$/);
            const countTo = valueMatch ? parseInt(valueMatch[1]) : 0;
            const countSuffix = valueMatch ? valueMatch[2] : "";
            return (
              <div
                key={card.title}
                className={`group flex min-h-[300px] flex-col justify-between rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10 ${
                  card.tone === "ink"
                    ? "bg-ink hover:shadow-electric-500/10"
                    : "bg-lime hover:shadow-lime/30"
                } ${i < 2 ? "relative overflow-hidden" : ""}`}
              >
                {i < 2 && (
                  <div
                    className="pointer-events-none absolute inset-0 opacity-60 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(/images/${i === 0 ? "symbol-scatter-haikei.svg" : "low-poly-grid-haikei.svg"})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                )}
                <div className={`relative z-10 flex ${i === 2 ? "flex-col gap-4" : "items-start justify-between"}`}>
                  {i !== 2 && (
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 group-hover:bg-white/30 group-hover:text-white ${
                      card.tone === "ink"
                        ? "bg-white/20 text-electric-400"
                        : "bg-ink/10 text-ink"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  )}
                  <div className={i === 2 ? "flex flex-col" : "text-right"}>
                    {i === 2 && (
                      <div className="text-sm font-semibold tracking-wide text-ink/50 uppercase">
                        {card.valueLabel}
                      </div>
                    )}
                    <div
                      className={`font-display ${
                        i === 2
                          ? "text-5xl transition-transform duration-300 group-hover:scale-110 sm:text-6xl"
                          : "text-3xl sm:text-4xl"
                      } font-extrabold ${
                        card.tone === "ink" ? "text-white" : "text-ink"
                      }`}
                    >
                      <CountUp to={countTo} suffix={countSuffix} duration={1.5} />
                    </div>
                    {i !== 2 && (
                    <div className={`text-[10px] font-semibold tracking-wide ${card.tone === "ink" ? "text-white/90" : "text-ink/50"}`}>
                      {card.valueLabel}
                    </div>
                    )}
                  </div>
                </div>

                <div className="relative z-10">
                  <h3
                    className={`font-display text-xl font-extrabold uppercase tracking-tight sm:text-2xl ${
                      card.tone === "ink" ? "text-white" : "text-ink"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed sm:text-base sm:leading-relaxed ${card.tone === "ink" ? "text-white/90" : "text-ink/60"}`}>
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
