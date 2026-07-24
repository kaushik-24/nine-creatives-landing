"use client";

import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    const el = document.getElementById("nc__loader");
    if (!el) return;

    const timer = setTimeout(() => {
      el.classList.add("opacity-0");
      el.classList.add("pointer-events-none");
      setTimeout(() => el.remove(), 700);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
