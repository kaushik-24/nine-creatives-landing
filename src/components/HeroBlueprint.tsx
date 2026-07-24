"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";

export default function HeroBlueprint() {
  const router = useRouter();

  const handleSeeWork = useCallback(() => router.push("/work"), [router]);
  const handleBookCall = useCallback(() => router.push("/contact"), [router]);

  return (
    <AnimatedShaderHero
      trustBadge={{
        text: "Service Businesses in Australia & UK",
      }}
      headline={{
        line1: "Your Website",
        line2: "Should Be Your Best Employee",
      }}
      subtitle="We build fast, professional websites that turn visitors into enquiries. No fluff. No templates."
      buttons={{
        primary: {
          text: "See the work",
          onClick: handleSeeWork,
        },
        secondary: {
          text: "Book a call",
          onClick: handleBookCall,
        },
      }}
    />
  );
}
