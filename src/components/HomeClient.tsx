"use client";

import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });
const Problem = dynamic(() => import("@/components/Problem"), { ssr: false });
const Process = dynamic(() => import("@/components/Process"), { ssr: false });
const FinalCTA = dynamic(() => import("@/components/FinalCTA"), { ssr: false });
const ScrollSpine = dynamic(() => import("@/components/ScrollSpine"), { ssr: false });

export function HomeClient() {
  return (
    <>
      <SmoothScroll />
      <Problem />
      <Process />
      <ScrollSpine />
      <FinalCTA />
    </>
  );
}
