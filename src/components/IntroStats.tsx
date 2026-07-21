import { Code2, Zap, TrendingUp } from "lucide-react";
import { siteConfig } from "@/lib/content";

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
    value: siteConfig.stats.response,
    valueLabel: siteConfig.stats.responseLabel,
    title: "FAST RESPONSE",
    description:
      "We reply fast because we know you do not have time to wait. Clear answers, no runaround.",
  },
];

export default function IntroStats() {
  return (
    <section className="bg-offwhite px-6 pb-20 pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl font-display text-3xl font-extrabold uppercase leading-[1.15] tracking-tight text-surface-950 sm:text-4xl">
          Your website should be working harder
          <span className="text-surface-400">
            {" "}
            — we build sites that bring in enquiries, not just sit online.
          </span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`flex min-h-[240px] flex-col justify-between rounded-2xl p-7 ${
                  card.tone === "ink"
                    ? "bg-ink"
                    : "bg-electric-500"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      card.tone === "ink"
                        ? "bg-white/10 text-electric-400"
                        : "bg-white/10 text-lime"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div className="text-right">
                    <div
                      className={`font-display text-2xl font-extrabold ${
                        card.tone === "ink" ? "text-white" : "text-white"
                      }`}
                    >
                      {card.value}
                    </div>
                    <div className="text-[10px] font-semibold tracking-wide text-white/40">
                      {card.valueLabel}
                    </div>
                  </div>
                </div>

                <div>
                  <h3
                    className={`font-display text-lg font-extrabold uppercase tracking-tight ${
                      card.tone === "ink" ? "text-white" : "text-white"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/45">
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
