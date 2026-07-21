import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services, servicesPageContent } from "@/lib/content";
import { Code2, Terminal, Zap, Palette, LucideIcon, Check } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Terminal,
  Zap,
  Palette,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-offwhite pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold text-surface-950 sm:text-5xl">
              {servicesPageContent.hero.title}
            </h1>
            <p className="mt-4 text-lg text-surface-500 leading-relaxed">
              {servicesPageContent.hero.subtitle}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <Card key={service.title} className="p-8">
                  <div className="mb-5 inline-flex rounded-lg bg-electric-400/10 p-3 text-electric-400">
                    <Icon size={28} />
                  </div>
                  <h2 className="text-xl font-semibold text-surface-950 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-surface-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-surface-600"
                      >
                        <Check size={16} className="mt-0.5 shrink-0 text-electric-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-offwhite pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-electric-400/20 bg-ink px-8 py-12 text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Not Sure What You Need?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-surface-400">
            Book a free 30-minute site review. No pitch. No pressure. Just a
            clear picture of what is working and what needs attention.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button size="lg">
                Book a Free Site Review
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
