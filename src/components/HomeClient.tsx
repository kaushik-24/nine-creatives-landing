"use client";

import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

export function HomeClient() {
  return <SmoothScroll />;
}
