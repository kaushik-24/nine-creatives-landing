"use client";

import { useCallback } from "react";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";

export default function HeroBlueprint() {
  const handleBookCall = useCallback(() => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <AnimatedShaderHero
      trustBadge={{
        text: "Strategy & Digital Growth Partner",
      }}
      headline={{
        line1: "Turn Digital Strategy",
        line2: "Into Qualified Leads",
      }}
      subtitle="Partner with us to engineer high-impact digital strategies and conversion systems that drive consistent, qualified leads and sustainable business growth."
      buttons={{
        primary: {
          text: "Book a Strategy Call",
          onClick: handleBookCall,
        },
      }}
      trustProof={{
        rating: "4.9/5",
        text: "from 20+ growing businesses",
        avatars: [
          "/images/testimonial-01-image.png",
          "/images/testimonial-02-image.png",
          "/images/testimonial-03-image.png",
        ],
        highlights: [
          "+64% avg. enquiry increase",
          "Dedicated growth strategist",
          "No lock-in contracts",
        ],
      }}
    />
  );
}
