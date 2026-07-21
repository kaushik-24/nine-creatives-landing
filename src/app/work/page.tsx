import Image from "next/image";
import { portfolioItems } from "@/lib/content";
import { TrendingUp } from "lucide-react";
import Footer from "@/components/Footer";

export default function WorkPage() {
  return (
    <>
      <section className="bg-offwhite pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold text-surface-950 sm:text-5xl">
              Our <span className="text-electric-400">Work</span>
            </h1>
            <p className="mt-4 text-lg text-surface-500 leading-relaxed">
              A selection of projects we have built for our clients. Each one
              designed to drive results.
            </p>
          </div>
        </div>

        <div className="mt-16">
          {portfolioItems.map((item) => (
            <div key={item.title} className="group">
              <div className="bg-white rounded-2xl overflow-hidden">
                {item.image && (
                  <div className="relative aspect-[16/9] w-full bg-ink">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="px-8 pb-8 pt-10 lg:px-12 lg:pb-12 lg:pt-14">
                  <div className="flex items-center">
                    <div className="mx-auto w-full max-w-6xl px-6">
                      <span className="text-xs font-medium uppercase tracking-wider text-electric-400">
                        {item.category}
                      </span>
                      <h2 className="mt-3 text-3xl font-extrabold text-surface-950 sm:text-4xl lg:text-5xl max-w-xl">
                        {item.title}
                      </h2>
                      <p className="mt-4 max-w-lg text-base text-surface-500 leading-relaxed">
                        {item.description}
                      </p>
                      {item.result && (
                        <div className="mt-6 flex gap-4">
                          <div className="rounded-lg bg-electric-400/10 px-4 py-2.5 text-center">
                            <p className="text-lg font-bold text-electric-400">
                              {item.result.metric1}
                            </p>
                            <p className="text-xs text-surface-500">
                              {item.result.metric1Label}
                            </p>
                          </div>
                          <div className="rounded-lg bg-electric-400/10 px-4 py-2.5 text-center">
                            <p className="text-lg font-bold text-electric-400">
                              {item.result.metric2}
                            </p>
                            <p className="text-xs text-surface-500">
                              {item.result.metric2Label}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-ink/5 px-3 py-1 text-xs text-surface-600 border border-surface-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  {item.problem && (
                    <div className="rounded-xl border border-surface-200 bg-white p-6">
                      <p className="text-xs font-medium uppercase tracking-wider text-surface-500 mb-2">
                        The Problem
                      </p>
                      <p className="text-sm text-surface-600 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>
                  )}
                  <div className="rounded-xl border border-surface-200 bg-white p-6 flex items-center gap-4">
                    <TrendingUp
                      size={20}
                      className="shrink-0 text-electric-400"
                    />
                    <p className="text-sm text-surface-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
