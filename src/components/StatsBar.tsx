import { siteConfig } from "@/lib/content";

export default function StatsBar() {
  return (
    <section className="bg-lime px-6 py-14 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-4">
        <StatItem
          label="Strategic experience"
          metric="Track Record"
          value={siteConfig.stats.experience}
        />
        <StatItem
          label="Client satisfaction"
          metric="Partner Rating"
          value={siteConfig.stats.satisfaction}
        />
        <StatItem
          label="Avg lead increase"
          metric="Conversion Lift"
          value={siteConfig.stats.growth}
        />
        <StatItem
          label="Speed & Core Vitals"
          metric="Benchmark Score"
          value={siteConfig.stats.score}
        />
      </div>
    </section>

  );
}

function StatItem({
  label,
  metric,
  value,
}: {
  label: string;
  metric: string;
  value: string;
}) {
  return (
    <div className="pl-5">
      <p className="text-sm font-medium text-lime-onaccent/60">{label}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-lime-onaccent/40">
        {metric}
      </p>
      <p className="mt-1 font-display text-5xl font-black text-lime-onaccent sm:text-6xl">
        {value}
      </p>
    </div>
  );
}
