"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

interface CountUpProps {
  from?: number;
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ from = 0, to, suffix = "", duration = 2, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const obj = { value: from };
      gsap.to(obj, {
        value: to,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${Math.round(obj.value)}${suffix}`;
          }
        },
      });
    }, ref);
    return () => ctx.revert();
  }, [to, duration, suffix, from]);

  return <span ref={ref} className={className}>{from}{suffix}</span>;
}
