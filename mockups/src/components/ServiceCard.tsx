import ArrowLink from "./ArrowLink";
import HoloBlob from "./holo/HoloBlob";

export default function ServiceCard({
  title,
  description,
  highlighted = false,
  showIcon = false,
}: {
  title: string;
  description: string;
  highlighted?: boolean;
  showIcon?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-6 rounded-[22px] border px-6 py-7 transition-colors sm:px-8 ${
        highlighted
          ? "border-purple bg-purple text-paper"
          : "border-line bg-paper text-ink hover:border-ink/20"
      }`}
    >
      <div className="flex items-center gap-5">
        {showIcon && <HoloBlob className="hidden h-12 w-12 shrink-0 sm:block" />}
        <h3 className="font-display text-xl font-extrabold uppercase leading-[1.05] sm:text-2xl">
          {title}
        </h3>
      </div>

      <div className="flex max-w-[150px] shrink-0 flex-col items-end gap-3 text-right">
        <p
          className={`eyebrow text-[9.5px] leading-tight ${
            highlighted ? "text-paper/75" : "text-ink/45"
          }`}
        >
          {description}
        </p>
        <ArrowLink href="#contact" tone={highlighted ? "paper" : "ink"}>
          <span className="sr-only">Learn more about {title}</span>
        </ArrowLink>
      </div>
    </div>
  );
}
