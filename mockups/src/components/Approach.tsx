import Container from "./Container";
import ApproachCard from "./ApproachCard";
import IconPencil from "./icons/IconPencil";
import IconTablet from "./icons/IconTablet";
import IconScissors from "./icons/IconScissors";

export default function Approach() {
  return (
    <section id="approach" className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <p className="eyebrow max-w-[280px] text-[11px] leading-relaxed text-ink/55">
            Our approach is rooted in a commitment to pushing the limits of
            creativity and delivering solutions that are as unique as your
            brand
          </p>
          <h2 className="display-tight text-right text-3xl font-extrabold uppercase text-ink sm:text-4xl">
            Our Excellent
            <br />
            Approach
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <ApproachCard
            icon={<IconPencil className="h-full w-full" />}
            title="Deep Discovery"
            description="We begin by immersing ourselves in your brand. Through thorough research and comprehensive discussions, we gain a deep understanding of your vision, goals, and target audience. This foundation allows us to create designs that truly resonate."
          />
          <ApproachCard
            icon={<IconTablet className="h-full w-full" />}
            title="Creative Ideation"
            description="Our team of talented designers and strategists brainstorm and explore a multitude of ideas. We believe in the power of collaboration and the limitless potential of collective creativity. Every concept is carefully considered."
            highlighted
          />
          <ApproachCard
            icon={<IconScissors className="h-full w-full" />}
            title="Tailored Design"
            description="We craft bespoke designs that reflect the unique identity of your brand. Whether it's a sleek website, an eye-catching logo, or engaging marketing materials, our designs are tailored to captivate and inspire your audience."
          />
        </div>
      </Container>
    </section>
  );
}
