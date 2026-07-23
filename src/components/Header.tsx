"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  bg-ink/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/og-image.jpg" alt="Nine Creatives" width={100} height={80} className="rounded" style={{ objectFit: "contain", height: "auto" }} />
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

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-lime-onaccent transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Get a Free Review
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
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-lime-onaccent"
            >
              Get a Free Review
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
