import { Code2, Zap, TrendingUp } from "lucide-react";
import { siteConfig } from "@/lib/content";

const cards = [
  {
    icon: Code2,
    tone: "ink",
    value: siteConfig.stats.projects,
    valueLabel: siteConfig.stats.projectsLabel,
    title: "GROWTH PLATFORMS",
    description:
      "Bespoke conversion platforms engineered from the ground up, built to capture high-intent buyers and turn visitors into pipeline.",
  },
  {
    icon: Zap,
    tone: "ink",
    value: siteConfig.stats.score,
    valueLabel: siteConfig.stats.scoreLabel,
    title: "SPEED & CONVERSION",
    description:
      "Sub-second load times and frictionless buyer journeys designed to capture attention and eliminate drop-off.",
  },
  {
    icon: TrendingUp,
    tone: "electric",
    value: siteConfig.stats.growth,
    valueLabel: siteConfig.stats.growthLabel,
    title: "QUALIFIED LEADS",
    description:
      "Our clients experience an average 64% surge in qualified client enquiries within the first 90 days.",
  },
];

export default function IntroStats() {
  return (
    <section
      id="overview"
      className="bg-offwhite px-6 pb-20 pt-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4f8fe6]">
          <span className="h-px w-6 bg-[#4f8fe6]/50" />
          Strategic Impact
        </div>

        <h2 className="mt-4 max-w-4xl font-display text-3xl font-extrabold uppercase leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Engineered For Predictable Growth.{" "}
          <span className="bg-gradient-to-r from-[#23c17c] via-[#3ebd9e] to-[#4f8fe6] bg-clip-text text-transparent">
            Structured To Generate Qualified Client Leads.
          </span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
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
                      {card.value}
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
