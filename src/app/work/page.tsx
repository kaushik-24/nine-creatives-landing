"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Lock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Gauge,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { portfolioItems } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import Footer from "@/components/Footer";

const filters = [
  { key: "all", label: "All Projects" },
  { key: "trades", label: "Plumbing & Trades" },
  { key: "automotive", label: "Driver Training" },
  { key: "commercial", label: "Property Maintenance" },
  { key: "cleaning", label: "Commercial Cleaning" },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.filterKey === activeFilter);

  return (
    <>
      <main className="min-h-screen bg-offwhite">
        {/* Top Header & Intro Hero */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-ink/5">
          {/* Subtle Ambient Light Gradients */}
          <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-[#4f8fe6]/10 blur-[120px]" />
          <div className="pointer-events-none absolute top-20 left-10 h-80 w-80 rounded-full bg-[#23c17c]/10 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            {/* Breadcrumb Navigation */}
            <div className="mb-8">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink/70 backdrop-blur-sm transition-all hover:bg-ink hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Overview
              </Link>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#4f8fe6]/30 bg-[#4f8fe6]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#4f8fe6]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Engineered Growth Case Studies
                </div>
                <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  Proven Platforms.{" "}
                  <span className="bg-gradient-to-r from-[#23c17c] via-[#3ebd9e] to-[#4f8fe6] bg-clip-text text-transparent">
                    Measurable Commercial Growth.
                  </span>
                </h1>
                <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-ink/75">
                  Explore how we engineer custom web platforms for service
                  businesses across the UK and Australia. Every system is
                  crafted to eliminate friction, dominate search intent, and
                  predictably generate qualified client leads.
                </p>
              </div>

              {/* Quick Strategy Consultation CTA */}
              <div className="shrink-0">
                <a href="/#contact">
                  <Button variant="pill" size="md">
                    Book a Strategy Call
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* High-Impact Proof Metric Bar */}
            <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-ink/10 bg-white/80 p-6 shadow-sm backdrop-blur-md sm:grid-cols-4 lg:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#23c17c]/15 text-[#23c17c]">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-2xl font-black text-ink sm:text-3xl">
                    +64%
                  </p>
                  <p className="text-xs font-medium text-ink/65">
                    Avg. Enquiry Lift
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4f8fe6]/15 text-[#4f8fe6]">
                  <Gauge className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-2xl font-black text-ink sm:text-3xl">
                    90+
                  </p>
                  <p className="text-xs font-medium text-ink/65">
                    Core Web Vitals & Speed
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#23c17c]/15 text-[#23c17c]">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-2xl font-black text-ink sm:text-3xl">
                    24 hrs
                  </p>
                  <p className="text-xs font-medium text-ink/65">
                    Rapid Strategy Response
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4f8fe6]/15 text-[#4f8fe6]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-2xl font-black text-ink sm:text-3xl">
                    100%
                  </p>
                  <p className="text-xs font-medium text-ink/65">
                    On-Schedule Deployment
                  </p>
                </div>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-10 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-ink/50 mr-2">
                Filter:
              </span>
              {filters.map((f) => {
                const isActive = activeFilter === f.key;
                return (
                  <button
                    key={f.key}
                    onClick={() => setActiveFilter(f.key)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                      isActive
                        ? "bg-ink text-white shadow-md scale-105"
                        : "border border-ink/10 bg-white/70 text-ink/70 hover:bg-white hover:text-ink"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies Showcase List */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-16 lg:gap-20">
            {filteredItems.map((item, index) => {
              const isEven = index % 2 === 1;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
                    {/* Visual Preview Side (Desktop Browser Window) */}
                    <div
                      className={`relative lg:col-span-7 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="overflow-hidden rounded-2xl border border-ink/15 bg-ink shadow-2xl">
                        {/* Browser Chrome Header */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-ink/90 px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                          </div>
                          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono text-white/70">
                            <Lock className="h-3 w-3 text-[#23c17c]" />
                            <span>https://{item.domain || "client-platform.com"}</span>
                          </div>
                          <div className="w-12" />
                        </div>

                        {/* Showcase Screenshot with Smooth Hover Zoom */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
                          <Image
                            src={item.image}
                            alt={`${item.title} web platform preview`}
                            fill
                            sizes="(min-width: 1024px) 55vw, 100vw"
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                      </div>

                      {/* Floating Key Result Callout */}
                      {item.result && (
                        <div className="absolute -bottom-4 right-4 sm:bottom-4 sm:right-6 z-20 flex items-center gap-2.5 rounded-2xl border border-white/20 bg-ink/95 px-4 py-2.5 text-white shadow-xl backdrop-blur-md">
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#23c17c] text-ink font-bold">
                            <TrendingUp className="h-4 w-4" />
                          </div>
                          <div>
                            <span className="block font-display text-lg font-black text-[#23c17c] leading-none">
                              {item.result.metric1}
                            </span>
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                              {item.result.metric1Label}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content & Case Study Narrative Side */}
                    <div
                      className={`flex flex-col lg:col-span-5 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      {/* Category & Geography Badge */}
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#23c17c] animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#4f8fe6]">
                          {item.category}
                        </span>
                      </div>

                      <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
                        {item.title}
                      </h2>

                      <p className="mt-3 text-sm leading-relaxed text-ink/75 sm:text-base">
                        {item.description}
                      </p>

                      {/* Challenge & Solution Architecture Boxes */}
                      <div className="mt-6 flex flex-col gap-3">
                        {item.problem && (
                          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                              The Bottleneck
                            </div>
                            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink/80">
                              {item.problem}
                            </p>
                          </div>
                        )}

                        {item.solution && (
                          <div className="rounded-xl border border-[#23c17c]/25 bg-[#23c17c]/10 p-4">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1ea76a]">
                              <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                              Engineered Growth Solution
                            </div>
                            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink/80">
                              {item.solution}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Result Metric Badges */}
                      {item.result && (
                        <div className="mt-6 grid grid-cols-2 gap-3">
                          <div className="rounded-xl border border-[#23c17c]/20 bg-[#23c17c]/10 p-3.5 text-center">
                            <p className="font-display text-2xl font-black text-[#23c17c]">
                              {item.result.metric1}
                            </p>
                            <p className="text-[11px] font-semibold text-ink/70">
                              {item.result.metric1Label}
                            </p>
                          </div>
                          <div className="rounded-xl border border-[#4f8fe6]/20 bg-[#4f8fe6]/10 p-3.5 text-center">
                            <p className="font-display text-2xl font-black text-[#4f8fe6]">
                              {item.result.metric2}
                            </p>
                            <p className="text-[11px] font-semibold text-ink/70">
                              {item.result.metric2Label}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Deliverables / Capabilities Tags */}
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-[11px] font-medium text-ink/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action CTA */}
                      <div className="mt-8 pt-6 border-t border-ink/10 flex items-center justify-between">
                        <a
                          href="/#contact"
                          className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:text-[#4f8fe6]"
                        >
                          Request Similar System
                          <ArrowUpRight className="h-4 w-4" />
                        </a>

                        <span className="text-xs font-mono font-semibold text-ink/40">
                          CASE STUDY 0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* High-Conversion Bottom Banner */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
            {/* Background Aesthetic Glows */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4f8fe6]/20 blur-[130px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#23c17c]/20 blur-[130px]" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#23c17c]">
                <Sparkles className="h-3.5 w-3.5" />
                Turn Digital Traffic Into Predictable Revenue
              </div>
              <h2 className="mt-6 font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl">
                Ready to build a platform that generates qualified enquiries
                every week?
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-surface-300">
                Book a 30-minute growth strategy consultation. We will audit
                your current conversion barriers, benchmark your competitors,
                and present an actionable deployment roadmap.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href="/#contact">
                  <Button variant="pill" size="lg">
                    Book a Strategy Call
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
                <Link href="/#services">
                  <Button variant="pill-ghost" size="lg">
                    Explore All Capabilities
                  </Button>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-surface-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#23c17c]" />
                  Average response under 24 hours
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#23c17c]" />
                  Direct 1-on-1 growth strategist
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#23c17c]" />
                  Zero lock-in contracts
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
