import { ReactNode } from "react";

export default function ApproachCard({
  icon,
  title,
  description,
  highlighted = false,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-8 rounded-[24px] border p-7 sm:p-8 ${
        highlighted
          ? "border-purple bg-purple text-paper"
          : "border-line bg-paper text-ink"
      }`}
    >
      <div className="flex items-start justify-between">
        <h3 className="font-display text-lg font-extrabold uppercase leading-[1.05] sm:text-xl">
          {title}
        </h3>
        <div className="h-14 w-14 shrink-0">{icon}</div>
      </div>
      <p
        className={`eyebrow text-[10.5px] leading-relaxed ${
          highlighted ? "text-paper/75" : "text-ink/50"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
