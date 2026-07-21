import { siteConfig } from "@/lib/content";

export default function StatsBar() {
  return (
    <section className="bg-lime px-6 py-14 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-4">
        <StatItem
          label="Sites delivered"
          metric="Projects"
          value={siteConfig.stats.projects}
          highlight={false}
        />
        <StatItem
          label="Avg PageSpeed"
          metric="Score"
          value={siteConfig.stats.score}
          highlight={true}
        />
        <StatItem
          label="Client locations"
          metric="Countries"
          value="3"
          highlight={false}
        />
        <StatItem
          label="Reply time"
          metric="Response"
          value={siteConfig.stats.response}
          highlight={false}
        />
      </div>
    </section>
  );
}

function StatItem({
  label,
  metric,
  value,
  highlight,
}: {
  label: string;
  metric: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="border-l border-lime-onaccent/15 pl-5">
      <p className="text-xs font-medium text-lime-onaccent/50">{label}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-lime-onaccent/40">
        {metric}
      </p>
      <p
        className={`mt-1 font-display text-4xl font-black sm:text-5xl ${
          highlight ? "text-ink" : "text-lime-onaccent"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
