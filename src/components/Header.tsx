"use client";

import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = ["overview", "services", "work", "about", "testimonials", "contact"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPos = window.scrollY + 160;
      let current = "";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      if (!id) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setActiveSection(href);
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-xl border-b border-white/10 shadow-xl"
          : "bg-ink/40 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#"
          onClick={(e) => handleAnchorClick(e, "#")}
          className="flex items-center gap-2 transition-transform hover:scale-105"
          aria-label="Nine Creatives Home"
        >
          <div className="relative w-[110px] h-[110px]">
            <Image
              src="/images/nine-creatives-logo-image.png"
              alt="Nine Creatives"
              fill
              sizes="110px"
              loading="eager"
              className="rounded object-contain"
            />
          </div>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`relative text-[15px] font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-lime"
                      : "text-offwhite/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-lime animate-pulse" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleAnchorClick(e, "#contact")}
          className="hidden md:inline-flex"
        >
          <Button variant="pill" size="md">
            Book a Strategy Call
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-surface-300 hover:text-white md:hidden transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur-2xl md:hidden px-6 py-5 shadow-2xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "bg-lime/15 text-lime"
                      : "text-offwhite/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3 mt-1 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, "#contact")}
                className="flex"
              >
                <Button variant="pill" size="md" className="w-full justify-center">
                  Book a Strategy Call
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

