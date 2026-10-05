"use client";

import Image from "next/image";
import { Mail, ArrowUpRight, ArrowUp, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { XIcon, InstagramIcon, LinkedInIcon } from "./SocialIcons";
import { siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/Button";

const socials = [
  { icon: XIcon, label: "X", href: siteConfig.social.twitter || "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", href: siteConfig.social.linkedin || "#" },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-ink px-6 pt-20 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(91,110,225,0.16),transparent_55%)] md:hidden" />
        <div className="absolute -top-20 right-0 hidden h-[420px] w-[420px] rounded-full bg-electric-500/10 blur-[130px] md:block" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4f8fe6]">
          <span className="h-px w-6 bg-[#4f8fe6]/50" />
          Let&apos;s Talk
        </div>

        <div className="mt-5 flex flex-col justify-between gap-8 border-b border-white/10 pb-16 lg:flex-row lg:items-end">
          <div>
            <h2 className="max-w-2xl font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to turn digital strategy into qualified leads?
            </h2>
            <p className="mt-3 text-sm text-surface-400 max-w-xl">
              Schedule a direct consultation with our growth strategists. We analyze your market positioning, conversion friction, and growth opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}?subject=Direct%20Enquiry%20-%20Nine%20Creatives`}
            >
              <Button variant="pill-ghost" size="md">
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </Button>
            </a>
            <a
              href={`mailto:${siteConfig.email}?subject=Book%20a%20Strategy%20Call%20-%20Nine%20Creatives&body=Hi%20Nine%20Creatives%20team,%0A%0AI%20would%20like%20to%20book%20a%20strategy%20session%20for%20our%20business.%0A%0ACompany%20Name:%20%0ACurrent%20Website:%20%0APrimary%20Goal:%20`}
            >
              <Button variant="pill" size="md">
                Book a Strategy Call
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <div className="relative w-[160px] h-[160px]">
                <Image
                  src="/images/nine-creatives-logo-image.png"
                  alt="Nine Creatives"
                  fill
                  sizes="160px"
                  className="rounded object-contain"
                />
              </div>
            </div>
            <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-surface-400">
              A digital strategy and growth partner helping businesses engineer high-converting web platforms and predictable client pipelines.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-surface-400 hover:bg-white/20 hover:text-white transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4f8fe6]">
              Growth Capabilities
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="#services" className="text-sm text-surface-400 hover:text-white transition-colors">
                  Digital Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-surface-400 hover:text-white transition-colors">
                  Web Platforms
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-surface-400 hover:text-white transition-colors">
                  Conversion Rate Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-surface-400 hover:text-white transition-colors">
                  Client Acquisition Funnels
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4f8fe6]">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="#overview" className="text-sm text-surface-400 hover:text-white transition-colors">
                  Overview & Impact
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-surface-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-sm text-surface-400 hover:text-white transition-colors">
                  Proof of Work
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-surface-400 hover:text-white transition-colors">
                  About Leadership
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-surface-400 hover:text-white transition-colors">
                  Client Results
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4f8fe6]">
              Growth Insights
            </p>
            <p className="mt-5 text-sm text-surface-400">
              Actionable advice on buyer intent mapping, CRO, and digital growth delivered monthly.
            </p>
            {subscribed ? (
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-lime/30 bg-lime/10 px-4 py-2.5 text-xs text-lime">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Thank you! You are subscribed to growth insights.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full min-w-0 rounded-full border border-surface-700 bg-surface-800/80 px-4 py-2.5 text-sm text-white placeholder:text-surface-500 focus:border-electric-400 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime text-ink transition-transform hover:scale-105"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-surface-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Nine Creatives. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-surface-400 hover:text-lime transition-colors"
            >
              Back to Top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

