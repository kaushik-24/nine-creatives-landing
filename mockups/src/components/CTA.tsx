import Container from "./Container";
import HoloStar from "./holo/HoloStar";

export default function CTA() {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-24">
      <Container>
        <div className="flex justify-end">
          <p className="eyebrow max-w-[300px] text-right text-[11px] leading-relaxed text-ink/55">
            Let&apos;s collaborate and create something extraordinary. Contact
            us today to explore limitless design solutions tailored to your
            vision.
          </p>
        </div>

        <div className="relative mt-2">
          <div className="relative z-10 flex justify-center lg:justify-start">
            <HoloStar className="w-[62%] max-w-[380px] animate-float lg:w-[42%]" />
          </div>

          <h2 className="display-tight relative z-0 -mt-16 text-center text-[16vw] font-extrabold uppercase text-ink sm:text-7xl md:-mt-24 lg:-mt-28 lg:text-left lg:text-8xl">
            Reach Out
            <br />
            Now
          </h2>
        </div>
      </Container>
    </section>
  );
}
