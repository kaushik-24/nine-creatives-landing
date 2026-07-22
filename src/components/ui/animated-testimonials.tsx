"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const wordsContainerRef = useRef<HTMLParagraphElement>(null);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const isActive = index === active;

      gsap.to(card, {
        opacity: isActive ? 1 : 0.7,
        scale: isActive ? 1 : 0.95,
        z: isActive ? 0 : -100,
        rotateY: isActive ? 0 : randomRotateY(),
        zIndex: isActive ? 999 : testimonials.length - index,
        y: isActive ? 0 : 0,
        duration: 0.4,
        ease: "power2.inOut",
        onStart: () => {
          if (isActive) {
            gsap.to(card, {
              y: -80,
              duration: 0.2,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(card, {
                  y: 0,
                  duration: 0.2,
                  ease: "power2.in",
                });
              },
            });
          }
        },
      });
    });
  }, [active, testimonials.length]);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
    );
  }, [active]);

  useEffect(() => {
    if (!wordsContainerRef.current) return;

    const words = wordsContainerRef.current.querySelectorAll<HTMLSpanElement>(".word");

    if (words.length === 0) return;

    gsap.fromTo(
      words,
      { filter: "blur(10px)", opacity: 0, y: 5 },
      {
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.02,
        ease: "power2.out",
      }
    );
  }, [active]);

  return (
    <div className={cn("mx-auto md:max-w-4xl md:px-8 lg:px-12", className)}>
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full" style={{ perspective: "1000px" }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.src}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="absolute inset-0 origin-bottom"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <div ref={textRef}>
            <h3 className="text-2xl font-bold text-surface-950">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-surface-400">
              {testimonials[active].designation}
            </p>
            <p
              ref={wordsContainerRef}
              className="mt-8 text-lg text-surface-500"
            >
              {testimonials[active].quote.split(" ").map((word, index) => (
                <span key={`${active}-${index}`} className="word inline-block">
                  {word}&nbsp;
                </span>
              ))}
            </p>
          </div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-surface-200 transition-colors hover:bg-ink"
            >
              <ChevronLeft className="h-5 w-5 text-surface-500 transition-transform duration-300 group-hover/button:rotate-12 group-hover/button:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-surface-200 transition-colors hover:bg-ink"
            >
              <ChevronRight className="h-5 w-5 text-surface-500 transition-transform duration-300 group-hover/button:-rotate-12 group-hover/button:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
