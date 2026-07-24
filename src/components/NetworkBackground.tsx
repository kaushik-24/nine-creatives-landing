'use client';

/**
 * NetworkBackground
 * ------------------
 * Animated node-and-link "constellation" background (dark navy, drifting
 * nodes, glowing highlights, faint connecting lines) — built with an HTML
 * canvas for rendering and anime.js (v4) for driving the motion.
 *
 * Usage:
 *   <section className="relative overflow-hidden">
 *     <NetworkBackground />
 *     <div className="relative z-10">...your hero content...</div>
 *   </section>
 *
 * Requires the parent element to be `relative` (or otherwise positioned)
 * since this component fills it with `absolute inset-0`.
 *
 * Install:
 *   npm install animejs
 */

import { useEffect, useRef } from 'react';
import { animate, utils, createScope, type Scope } from 'animejs';

type Node = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  r: number;
  glow: boolean;
  opacity: number;
};

interface NetworkBackgroundProps {
  className?: string;
  /** Roughly px² of area per node — lower is denser. Default 9000. */
  density?: number;
  /** Max distance (px) at which two nodes get a connecting line. */
  linkDistance?: number;
}

export default function NetworkBackground({
  className = '',
  density = 9000,
  linkDistance = 150,
}: NetworkBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    const container = containerRef.current!;
    const canvas = canvasRef.current!;

    const ctx = canvas.getContext('2d')!;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let rafId = 0;
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const mouse = { x: -9999, y: -9999 };

    function buildNodes() {
      scopeRef.current?.revert();

      const count = Math.max(30, Math.round((width * height) / density));
      nodes = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const isGlow = Math.random() > 0.82;
        const r = isGlow ? Math.random() * 1 + 1.6 : Math.random() * 1 + 0.7;
        return { x, y, baseX: x, baseY: y, r, glow: isGlow, opacity: 0 };
      });

      if (prefersReducedMotion) {
        nodes.forEach((n) => {
          n.opacity = n.glow ? 0.8 : 0.4;
        });
        return;
      }

      scopeRef.current = createScope({ root: container }).add(() => {
        nodes.forEach((node) => {
          animate(node, {
            x: node.baseX + (Math.random() - 0.5) * 90,
            y: node.baseY + (Math.random() - 0.5) * 90,
            duration: utils.random(7000, 15000),
            delay: utils.random(0, 4000),
            ease: 'inOutSine',
            loop: true,
            alternate: true,
          });

          if (node.glow) {
            animate(node, {
              opacity: 1,
              duration: utils.random(2400, 4200),
              delay: utils.random(0, 3000),
              ease: 'inOutSine',
              loop: true,
              alternate: true,
            });
          } else {
            animate(node, {
              opacity: utils.random(0.4, 0.7, 2),
              duration: utils.random(1200, 2600),
              delay: utils.random(0, 2000),
              ease: 'outQuad',
            });
          }
        });
      });
    }

    function resize() {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDistance) {
            const t = 1 - dist / linkDistance;
            ctx.strokeStyle = `rgba(123, 131, 236, ${t * 0.45})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        const dxm = node.x - mouse.x;
        const dym = node.y - mouse.y;
        const distM = Math.sqrt(dxm * dxm + dym * dym);
        const mouseBoost = distM < 130 ? (1 - distM / 130) * 0.5 : 0;
        const finalOpacity = Math.min(1, node.opacity + mouseBoost);

        if (node.glow) {
          const gradient = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            node.r * 7
          );
          gradient.addColorStop(0, `rgba(123, 131, 236, ${0.5 * finalOpacity})`);
          gradient.addColorStop(1, 'rgba(123, 131, 236, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r * 7, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.fillStyle = node.glow
          ? `rgba(180, 196, 255, ${finalOpacity})`
          : `rgba(123, 131, 236, ${finalOpacity})`;
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 150);
    }

    resize();
    draw();

    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      scopeRef.current?.revert();
    };
  }, [density, linkDistance]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden bg-ink ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_35%,rgba(91,110,225,0.2),transparent_70%)]" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
