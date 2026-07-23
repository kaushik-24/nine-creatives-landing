"use client";

import dynamic from "next/dynamic";
import { electricPreset } from "@/lib/presets";

const Hyperspeed = dynamic(() => import("@/components/Hyperspeed"), { ssr: false });

export default function HyperspeedWrapper() {
  return (
    <div className="absolute inset-0 -z-10">
      <Hyperspeed effectOptions={electricPreset} />
    </div>
  );
}
