import Container from "./Container";
import ArrowLink from "./ArrowLink";
import HoloRings from "./holo/HoloRings";

const STATS = [
  { value: "300", label: "Success Project" },
  { value: "200", label: "Product Launches" },
  { value: "100", label: "Startup Raised" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-20 md:pt-10 md:pb-28">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-8">
          <p className="eyebrow max-w-[170px] text-[11px] leading-relaxed text-ink/55">
            Unleashing boundless creativity for your brand
          </p>

          <dl className="flex gap-8 sm:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                  <span className="align-super text-sm text-purple">+</span>
                  {stat.value}
                </dt>
                <dd className="eyebrow mt-1 max-w-[70px] text-[9.5px] leading-tight text-ink/45">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 grid gap-x-6 gap-y-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-[68%] sm:w-[46%] lg:w-full lg:max-w-[420px]">
              <HoloRings className="w-full animate-float" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="mb-5 flex justify-end">
              <ArrowLink>Reach Out</ArrowLink>
            </div>
            <h1 className="display-tight text-right text-[15vw] font-extrabold uppercase text-ink sm:text-[68px] lg:text-[80px] xl:text-[92px]">
              Limitless
              <br />
              Design
              <br />
              Solutions
            </h1>
          </div>
        </div>

        <p className="eyebrow mt-10 max-w-[280px] text-[11px] leading-relaxed text-ink/55">
          Visionary designers dedicated to transforming your ideas into visual
          experiences.
        </p>
      </Container>
    </section>
  );
}
