"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  // Light page heroes need a solid bar — logo + nav are light-on-dark only.
  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-ink/90 md:bg-ink/80 md:backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-[110px] h-[110px]">
            <Image
              src="/images/nine-creatives-logo-image.png"
              alt="Nine Creatives"
              fill
              sizes="100px"
              loading="eager"
              className="rounded object-contain"
            />
          </div>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.slice(1).map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[16px] font-medium uppercase transition-colors ${
                    isActive
                      ? "text-electric-400"
                      : "text-offwhite hover:text-surface-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link href="/contact" className="hidden md:inline-flex">
          <Button variant="pill" size="md">
            Get a Free Review
          </Button>
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-surface-400 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-ink md:hidden">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-electric-400 bg-electric-400/10"
                      : "text-surface-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex md:hidden"
            >
              <Button variant="pill" size="md" className="w-full">
                Get a Free Review
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
