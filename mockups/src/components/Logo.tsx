import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  const ringColor = dark ? "#ffffff" : "#0a0a0a";
  return (
    <Link
      href="#top"
      aria-label="Nine Creatives home"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border"
      style={{ borderColor: ringColor }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke={ringColor} strokeWidth="1.3" />
        <circle cx="10" cy="10" r="3.4" fill="var(--color-purple)" />
      </svg>
    </Link>
  );
}
