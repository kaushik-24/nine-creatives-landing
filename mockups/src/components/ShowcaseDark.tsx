import Container from "./Container";
import LaptopShowcase from "./LaptopShowcase";

export default function ShowcaseDark() {
  return (
    <section id="project" className="bg-ink py-16 text-paper md:py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-tight max-w-2xl text-[13vw] font-extrabold uppercase sm:text-6xl lg:text-7xl">
            Discover The Power Of Infinite Design
          </h2>
          <p className="eyebrow max-w-[240px] text-[11px] leading-relaxed text-paper/50 lg:text-right">
            At our agency, we believe in breaking boundaries and pushing the
            limits of creativity. Our team of visionary designers and
            strategists is dedicated to transforming your ideas into
            extraordinary visual experiences.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <LaptopShowcase />
        </div>
      </Container>
    </section>
  );
}
