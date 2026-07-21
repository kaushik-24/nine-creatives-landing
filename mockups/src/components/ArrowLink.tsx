import Link from "next/link";

export default function ArrowLink({
  href = "#contact",
  children,
  tone = "purple",
  className = "",
}: {
  href?: string;
  children: React.ReactNode;
  tone?: "purple" | "ink" | "paper";
  className?: string;
}) {
  const toneClass =
    tone === "purple"
      ? "text-purple hover:text-purple-dim"
      : tone === "paper"
      ? "text-paper hover:text-cyan"
      : "text-ink hover:text-purple";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 eyebrow text-[13px] transition-colors ${toneClass} ${className}`}
    >
      <span>{children}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <path
          d="M3 11L11 3M11 3H4.5M11 3V9.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
