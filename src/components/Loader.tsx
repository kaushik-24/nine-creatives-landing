"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1200);
    return () => clearTimeout(fadeTimer);
  }, []);

  useEffect(() => {
    if (!fading) return;
    const removeTimer = setTimeout(() => setVisible(false), 700);
    return () => clearTimeout(removeTimer);
  }, [fading]);

  if (!visible) return null;

  return (
    <div
      id="nc__loader"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink transition-opacity duration-700 ${
        fading ? "opacity-0 pointer-events-none" : ""
      }`}
      aria-hidden={fading}
    >
      <img
        src="/images/nine-creatives-logo-image.png"
        alt="Nine Creatives"
        className="h-28 w-auto animate-float"
      />
    </div>
  );
}
