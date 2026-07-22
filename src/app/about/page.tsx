import { Card } from "@/components/ui/Card";
import { aboutPageContent } from "@/lib/content";
import { Target, Gem, HandshakeIcon } from "lucide-react";
import Footer from "@/components/Footer";

const valueIcons = [Target, Gem, HandshakeIcon];

export default function AboutPage() {
  return (
    <>
      <section className="bg-offwhite pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold text-surface-950 sm:text-5xl">
              {aboutPageContent.hero.title}
            </h1>
            <p className="mt-4 text-lg text-surface-500 leading-relaxed">
              {aboutPageContent.hero.subtitle}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <Card className="p-8 text-center">
              <h2 className="text-2xl font-extrabold text-surface-950">
                {aboutPageContent.mission.title}
              </h2>
              <p className="mt-4 text-surface-500 leading-relaxed">
                {aboutPageContent.mission.body}
              </p>
            </Card>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {aboutPageContent.values.map((value, i) => {
              const Icon = valueIcons[i] || Target;
              return (
                <Card key={value.title}>
                  <div className="mb-4 inline-flex rounded-lg bg-electric-400/10 p-3 text-electric-400">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-surface-950 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-surface-500 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-offwhite pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-surface-950 sm:text-4xl">
              About{" "}
              <span className="text-electric-400">the Founder</span>
            </h2>
            <p className="mt-4 text-surface-500">
              Nine Creatives is not a big agency. It is a focused studio with
              one person at the core and a trusted network of specialists around
              him.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {aboutPageContent.team.map((member) => (
              <div
                key={member.name}
                className="grid gap-10 lg:grid-cols-2 items-center"
              >
                <div className="aspect-[4/3] lg:aspect-auto lg:h-[500px] rounded-2xl bg-ink flex items-center justify-center">
                  <span className="text-6xl font-bold text-surface-600">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-surface-950">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-base text-electric-400">
                    {member.role}
                  </p>
                  <p className="mt-4 text-surface-500 leading-relaxed max-w-lg">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
