import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/Card";
import { contactPageContent, siteConfig } from "@/lib/content";
import { Mail, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <section className="bg-offwhite pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold text-surface-950 sm:text-5xl">
              {contactPageContent.hero.title}
            </h1>
            <p className="mt-4 text-lg text-surface-500 leading-relaxed">
              {contactPageContent.hero.subtitle}
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Card className="p-8">
                <ContactForm />
              </Card>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-2">
              <Card className="p-6">
                <div className="mb-3 inline-flex rounded-lg bg-electric-400/10 p-2.5 text-electric-400">
                  <Mail size={20} />
                </div>
                <h3 className="font-semibold text-surface-950">Email</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 block text-sm text-surface-500 hover:text-electric-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-surface-950 mb-3">
                  What to expect
                </h3>
                <ul className="space-y-3">
                  {contactPageContent.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-surface-600">
                      <CheckCircle size={16} className="mt-0.5 shrink-0 text-electric-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
