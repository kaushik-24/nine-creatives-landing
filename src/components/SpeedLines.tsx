"use client";

import { useEffect, useRef } from "react";

interface SpeedLinesProps {
  accentColor?: string;
  secondaryColor?: string;
  className?: string;
}

interface Line {
  angle: number;
  ca: number;
  sa: number;
  progress: number;
  speed: number;
  tail: number;
  thick: number;
  alpha: number;
  layer: number;
  r: number;
  g: number;
  b: number;
  rgba: string;
  headRgba: string;
}

const COUNT = [30, 40, 50];

export default function SpeedLines({
  accentColor = "#7b83ec",
  secondaryColor = "#cbef4c",
  className = "",
}: SpeedLinesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const ca = cv.current!;
    const ctx = ca.getContext("2d")!;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const accent = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(accentColor)!;
    const accR = parseInt(accent[1], 16);
    const accG = parseInt(accent[2], 16);
    const accB = parseInt(accent[3], 16);

    const sec = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(secondaryColor)!;
    const secR = parseInt(sec[1], 16);
    const secG = parseInt(sec[2], 16);
    const secB = parseInt(sec[3], 16);

    let w = 0;
    let h = 0;
    let raf = 0;
    let rt: ReturnType<typeof setTimeout>;
    const mouse = { x: 0.5, y: 0.5 };
    const sm = { x: 0.5, y: 0.5 };

    // Pre-compute rgba strings for quick reuse
    function rgba(r: number, g: number, b: number, a: number) {
      return "rgba(" + r + "," + g + "," + b + "," + a.toFixed(3) + ")";
    }

    function resize() {
      const r = el.getBoundingClientRect();
      const d = Math.min(devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      ca.width = w * d;
      ca.height = h * d;
      ca.style.width = w + "px";
      ca.style.height = h + "px";
      ctx.setTransform(d, 0, 0, d, 0, 0);
    }

    const lines: Line[] = [];
    for (let layer = 0; layer < 3; layer++) {
      const n = COUNT[layer];
      const baseSpeed = [0.18, 0.35, 0.7][layer];
      const baseThick = [0.5, 1.2, 3][layer];
      const baseAlpha = [0.06, 0.12, 0.22][layer];
      const baseTail = [0.55, 0.45, 0.3][layer];

      for (let i = 0; i < n; i++) {
        const angle = Math.random() * Math.PI * 2;
        const mix = Math.random();
        const r = Math.round(accR + (secR - accR) * mix);
        const g = Math.round(accG + (secG - accG) * mix);
        const b = Math.round(accB + (secB - accB) * mix);
        const alpha = baseAlpha * (0.5 + Math.random());
        const tail = baseTail * (0.5 + Math.random());

        lines.push({
          angle,
          ca: Math.cos(angle),
          sa: Math.sin(angle),
          progress: Math.random(),
          speed: baseSpeed * (0.6 + 0.8 * Math.random()),
          tail,
          thick: baseThick * (0.5 + Math.random()),
          alpha,
          layer,
          r,
          g,
          b,
          rgba: rgba(r, g, b, alpha),
          headRgba: rgba(r, g, b, Math.min(alpha * 2, 0.5)),
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      const max = Math.max(w, h) * 1.5;
      sm.x += (mouse.x - sm.x) * 0.06;
      sm.y += (mouse.y - sm.y) * 0.06;

      // Vanishing point
      const cx = w * (0.5 + (sm.x - 0.5) * 0.08);
      const cy = h * (0.55 + (sm.y - 0.5) * 0.08);

      ctx.lineCap = "round";

      for (const l of lines) {
        l.progress += l.speed * 0.008;
        if (l.progress > 1 + l.tail) {
          l.progress = -Math.random() * l.tail * 0.5;
          l.angle = Math.random() * Math.PI * 2;
          l.ca = Math.cos(l.angle);
          l.sa = Math.sin(l.angle);
        }

        const p = l.progress;
        const headFrac = p > 1 ? 1 : p;
        const tailFrac = p - l.tail > 0 ? p - l.tail : 0;
        const hd = headFrac * max;
        const td = tailFrac * max;

        const hx = cx + l.ca * hd;
        const hy = cy + l.sa * hd;
        const tx = cx + l.ca * td;
        const ty = cy + l.sa * td;

        // Off-screen skip
        if (hx < -80 || hx > w + 80 || hy < -80 || hy > h + 80)
          if (tx < -80 || tx > w + 80 || ty < -80 || ty > h + 80) continue;

        // Near-fade
        const nf = (headFrac - tailFrac) * 3;
        if (nf < 0.05) continue;

        const lw = l.thick * (1 + l.layer * 0.25);

        // Body
        ctx.strokeStyle = l.rgba;
        ctx.lineWidth = lw;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.stroke();

        // Head dot (one cheap circle replaces the gradient + glow pass)
        if (l.layer >= 1) {
          ctx.fillStyle = l.headRgba;
          ctx.beginPath();
          ctx.arc(hx, hy, lw * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    }

    function mm(e: MouseEvent) {
      const r = el.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) / r.width;
      mouse.y = (e.clientY - r.top) / r.height;
    }
    function ml() {
      mouse.x = 0.5;
      mouse.y = 0.5;
    }
    function rsz() {
      clearTimeout(rt);
      rt = setTimeout(resize, 150);
    }

    resize();
    draw();

    addEventListener("resize", rsz);
    addEventListener("mousemove", mm);
    addEventListener("mouseleave", ml);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(rt);
      removeEventListener("resize", rsz);
      removeEventListener("mousemove", mm);
      removeEventListener("mouseleave", ml);
    };
  }, [accentColor, secondaryColor]);

  return (
    <div
      ref={ref}
      className={"absolute inset-0 overflow-hidden " + className}
      aria-hidden="true"
    >
      <canvas ref={cv} className="absolute inset-0" />
    </div>
  );
}
