import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "About", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Project", href: "#project" },
  { label: "Testimony", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex items-center justify-between py-6">
        <Logo />

        <nav className="hidden items-center gap-9 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="eyebrow text-[13px] text-ink/80 transition-colors hover:text-purple"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#top"
          aria-label="Back to top"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-transform hover:scale-105"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M1.5 4H14.5M1.5 8H14.5M1.5 12H14.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </Container>
    </footer>
  );
}
