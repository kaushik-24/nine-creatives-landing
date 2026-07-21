import Container from "./Container";
import ServiceCard from "./ServiceCard";
import HoloSphere from "./holo/HoloSphere";

export default function Services() {
  return (
    <section id="services" className="bg-mist py-16 md:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="flex flex-col lg:col-span-5">
            <h2 className="display-tight text-right text-3xl font-extrabold uppercase text-ink sm:text-4xl">
              Explore Our
              <br />
              Services
            </h2>
            <div className="mt-8 flex flex-1 items-center justify-center">
              <HoloSphere className="w-[62%] max-w-[260px] animate-float lg:w-[70%]" />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-7">
            <ServiceCard
              title="Brand Identity Creation"
              description="Crafting unique and memorable brand identities"
            />
            <ServiceCard
              title="Web & Mobile Design"
              description="Building seamless products that feel native on every screen"
              highlighted
              showIcon
            />
            <ServiceCard
              title="UX/UI Design"
              description="Ensuring intuitive and delightful user experiences"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
