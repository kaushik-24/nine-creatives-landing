import { ContactForm } from "@/components/ContactForm";
import { contactPageContent, siteConfig } from "@/lib/content";
import { Mail, Check } from "lucide-react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <section className="bg-offwhite px-6 pt-32 pb-16 lg:px-10 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-surface-400">
            <span className="h-px w-6 bg-surface-300" />
            Contact
          </div>

          <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-surface-950 sm:text-5xl lg:text-6xl">
              Let&apos;s talk.{" "}
              <span className="text-surface-400">No pitch.</span>
            </h1>
            <p className="max-w-sm text-sm leading-relaxed text-surface-500">
              {contactPageContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-offwhite px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="relative overflow-hidden rounded-2xl bg-ink p-8 sm:p-10 lg:col-span-3">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage: "url(/images/big-stars-bg-image.svg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-white sm:text-2xl">
                  Send a message
                </h2>
                <p className="mt-2 text-sm text-white/50">
                  We reply within 24 hours.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-lime p-8 transition-transform hover:scale-[1.01] sm:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink/10 text-ink">
                  <Mail className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div className="mt-10">
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                    Email
                  </h3>
                  <p className="mt-2 text-sm text-ink/60 transition-colors group-hover:text-ink">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <div className="relative overflow-hidden rounded-2xl bg-ink p-8 sm:p-10">
                <div
                  className="pointer-events-none absolute inset-0 opacity-60"
                  style={{
                    backgroundImage: "url(/images/low-poly-grid-haikei.svg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-white">
                    What to expect
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {contactPageContent.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm text-white/80"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-lime"
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
