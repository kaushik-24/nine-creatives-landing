import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";
import { XIcon, InstagramIcon, LinkedInIcon } from "./SocialIcons";
import { siteConfig } from "@/lib/content";

const socials = [
  { icon: XIcon, label: "X" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: LinkedInIcon, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink px-6 pt-20 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-0 h-[420px] w-[420px] rounded-full bg-electric-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-surface-500">
          <span className="h-px w-6 bg-surface-700" />
          Let&apos;s Talk
        </div>

        <div className="mt-5 flex flex-col justify-between gap-8 border-b border-white/10 pb-16 lg:flex-row lg:items-end">
          <h2 className="max-w-2xl font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready for a site that brings in enquiries?
          </h2>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-lime-onaccent transition-transform hover:scale-[1.03]"
            >
              Get a Free Review
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <Image src="/images/og-image.jpg" alt="Nine Creatives" width={100} height={80} className="rounded" />
             
            </div>
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-surface-500">
              A web design and development studio helping service businesses build fast, professional websites.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <span
                  key={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-surface-400"
                >
                  <s.icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-surface-500">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              <li><Link href="/services" className="text-sm text-surface-400 hover:text-white">Web Design</Link></li>
              <li><Link href="/services" className="text-sm text-surface-400 hover:text-white">Development</Link></li>
              <li><Link href="/services" className="text-sm text-surface-400 hover:text-white">Optimisation</Link></li>
              <li><Link href="/services" className="text-sm text-surface-400 hover:text-white">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-surface-500">
              Company
            </p>
            <ul className="mt-5 space-y-3">
              <li><Link href="/work" className="text-sm text-surface-400 hover:text-white">Our Work</Link></li>
              <li><Link href="/about" className="text-sm text-surface-400 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-sm text-surface-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-surface-500">
              Newsletter
            </p>
            <p className="mt-5 text-sm text-surface-500">
              Get design insights and updates delivered monthly.
            </p>
            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full min-w-0 rounded-full border border-surface-700 bg-surface-800 px-4 py-2.5 text-sm text-white placeholder:text-surface-500 focus:border-electric-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime text-lime-onaccent"
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="relative select-none overflow-hidden">
          <p className="translate-y-[0.12em] text-center font-display text-[16vw] font-black uppercase leading-none tracking-tight text-white/5 sm:text-[12vw]">
            NINE CREATIVES
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-[16px] text-surface-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Nine Creatives. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
