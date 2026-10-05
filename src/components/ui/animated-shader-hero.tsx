"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import { Button } from "@/components/ui/Button";
import { canUseHeroShader, getShaderDpr } from "@/lib/perf";

interface HeroProps {
  trustBadge?: {
    text: string;
  };
  headline: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  buttons?: {
    primary?: {
      text: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
    };
  };
  trustProof?: {
    rating?: string;
    text?: string;
    avatars?: string[];
    highlights?: string[];
  };
  className?: string;
}

function HeroMobileBackground() {
  return (
    <div className="absolute inset-0 bg-[#030812] md:hidden" aria-hidden="true">
      <Image
        src="/images/mobile-hero-section-bg-image.webp"
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 100vw, 1px"
        className="object-cover object-right opacity-25 mix-blend-screen"
      />
    </div>
  );
}

const useShaderBackground = (active: boolean) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const pointersRef = useRef<PointerHandler | null>(null);
  const visibleRef = useRef(true);
  const runningRef = useRef(false);

  class WebGLRenderer {
    private canvas: HTMLCanvasElement;
    private gl: WebGL2RenderingContext;
    private program: WebGLProgram | null = null;
    private vs: WebGLShader | null = null;
    private fs: WebGLShader | null = null;
    private buffer: WebGLBuffer | null = null;
    private scale: number;
    private shaderSource: string;
    private mouseMove = [0, 0];
    private mouseCoords = [0, 0];
    private pointerCoords = [0, 0];
    private nbrOfPointers = 0;

    private vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

    private vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

    constructor(canvas: HTMLCanvasElement, scale: number) {
      this.canvas = canvas;
      this.scale = scale;
      this.gl = canvas.getContext("webgl2", {
        antialias: false,
        powerPreference: "high-performance",
      })!;
      this.gl.viewport(0, 0, canvas.width, canvas.height);
      this.shaderSource = defaultShaderSource;
    }

    updateShader(source: string) {
      this.reset();
      this.shaderSource = source;
      this.setup();
      this.init();
    }

    updateMove(deltas: number[]) {
      this.mouseMove = deltas;
    }

    updateMouse(coords: number[]) {
      this.mouseCoords = coords;
    }

    updatePointerCoords(coords: number[]) {
      this.pointerCoords = coords;
    }

    updatePointerCount(nbr: number) {
      this.nbrOfPointers = nbr;
    }

    updateScale(scale: number) {
      this.scale = scale;
      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    compile(shader: WebGLShader, source: string) {
      const gl = this.gl;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const error = gl.getShaderInfoLog(shader);
        console.error("Shader compilation error:", error);
      }
    }

    test(source: string) {
      let result = null;
      const gl = this.gl;
      const shader = gl.createShader(gl.FRAGMENT_SHADER)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        result = gl.getShaderInfoLog(shader);
      }
      gl.deleteShader(shader);
      return result;
    }

    reset() {
      const gl = this.gl;
      if (this.program && !gl.getProgramParameter(this.program, gl.DELETE_STATUS)) {
        if (this.vs) {
          gl.detachShader(this.program, this.vs);
          gl.deleteShader(this.vs);
        }
        if (this.fs) {
          gl.detachShader(this.program, this.fs);
          gl.deleteShader(this.fs);
        }
        gl.deleteProgram(this.program);
      }
    }

    setup() {
      const gl = this.gl;
      this.vs = gl.createShader(gl.VERTEX_SHADER)!;
      this.fs = gl.createShader(gl.FRAGMENT_SHADER)!;
      this.compile(this.vs, this.vertexSrc);
      this.compile(this.fs, this.shaderSource);
      this.program = gl.createProgram()!;
      gl.attachShader(this.program, this.vs);
      gl.attachShader(this.program, this.fs);
      gl.linkProgram(this.program);

      if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(this.program));
      }
    }

    init() {
      const gl = this.gl;
      const program = this.program!;

      this.buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

      const position = gl.getAttribLocation(program, "position");
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      (program as any).resolution = gl.getUniformLocation(program, "resolution");
      (program as any).time = gl.getUniformLocation(program, "time");
      (program as any).move = gl.getUniformLocation(program, "move");
      (program as any).touch = gl.getUniformLocation(program, "touch");
      (program as any).pointerCount = gl.getUniformLocation(program, "pointerCount");
      (program as any).pointers = gl.getUniformLocation(program, "pointers");
    }

    render(now = 0) {
      const gl = this.gl;
      const program = this.program;

      if (!program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return;

      gl.clearColor(0.012, 0.03, 0.06, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

      gl.uniform2f((program as any).resolution, this.canvas.width, this.canvas.height);
      gl.uniform1f((program as any).time, now * 1e-3);
      gl.uniform2f((program as any).move, this.mouseMove[0], this.mouseMove[1]);
      gl.uniform2f((program as any).touch, this.mouseCoords[0], this.mouseCoords[1]);
      gl.uniform1i((program as any).pointerCount, this.nbrOfPointers);
      gl.uniform2fv((program as any).pointers, this.pointerCoords);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  }

  class PointerHandler {
    private scale: number;
    private active = false;
    private pointers = new Map<number, number[]>();
    private lastCoords = [0, 0];
    private moves = [0, 0];

    constructor(element: HTMLCanvasElement, scale: number) {
      this.scale = scale;

      const map = (element: HTMLCanvasElement, scale: number, x: number, y: number) =>
        [x * scale, element.height - y * scale];

      element.addEventListener("pointerdown", (e) => {
        this.active = true;
        this.pointers.set(e.pointerId, map(element, this.getScale(), e.clientX, e.clientY));
      });

      element.addEventListener("pointerup", (e) => {
        if (this.count === 1) {
          this.lastCoords = this.first;
        }
        this.pointers.delete(e.pointerId);
        this.active = this.pointers.size > 0;
      });

      element.addEventListener("pointerleave", (e) => {
        if (this.count === 1) {
          this.lastCoords = this.first;
        }
        this.pointers.delete(e.pointerId);
        this.active = this.pointers.size > 0;
      });

      element.addEventListener("pointermove", (e) => {
        if (!this.active) return;
        this.lastCoords = [e.clientX, e.clientY];
        this.pointers.set(e.pointerId, map(element, this.getScale(), e.clientX, e.clientY));
        this.moves = [this.moves[0] + e.movementX, this.moves[1] + e.movementY];
      });
    }

    getScale() {
      return this.scale;
    }

    updateScale(scale: number) {
      this.scale = scale;
    }

    get count() {
      return this.pointers.size;
    }

    get move() {
      return this.moves;
    }

    get coords() {
      return this.pointers.size > 0
        ? Array.from(this.pointers.values()).flat()
        : [0, 0];
    }

    get first() {
      return this.pointers.values().next().value || this.lastCoords;
    }
  }

  const stopLoop = useCallback(() => {
    runningRef.current = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = 0;
    }
  }, []);

  const startLoop = useCallback(() => {
    if (runningRef.current || !visibleRef.current) return;
    runningRef.current = true;

    const loop = (now: number) => {
      if (!runningRef.current || !rendererRef.current || !pointersRef.current) return;

      rendererRef.current.updateMouse(pointersRef.current.first);
      rendererRef.current.updatePointerCount(pointersRef.current.count);
      rendererRef.current.updatePointerCoords(pointersRef.current.coords);
      rendererRef.current.updateMove(pointersRef.current.move);
      rendererRef.current.render(now);
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    if (!active || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const dpr = getShaderDpr();

    rendererRef.current = new WebGLRenderer(canvas, dpr);
    pointersRef.current = new PointerHandler(canvas, dpr);

    rendererRef.current.setup();
    rendererRef.current.init();

    const resize = () => {
      if (!canvasRef.current) return;
      const el = canvasRef.current;
      const parent = el.parentElement;
      const w = parent?.clientWidth || window.innerWidth;
      const h = parent?.clientHeight || window.innerHeight;
      const nextDpr = getShaderDpr();
      el.width = Math.max(1, Math.floor(w * nextDpr));
      el.height = Math.max(1, Math.floor(h * nextDpr));
      rendererRef.current?.updateScale(nextDpr);
      pointersRef.current?.updateScale(nextDpr);
    };

    resize();

    if (rendererRef.current.test(defaultShaderSource) === null) {
      rendererRef.current.updateShader(defaultShaderSource);
    }

    const root = canvas.parentElement;
    const observer = root
      ? new IntersectionObserver(
          ([entry]) => {
            visibleRef.current = entry.isIntersecting;
            if (entry.isIntersecting) startLoop();
            else stopLoop();
          },
          { threshold: 0.05 }
        )
      : null;

    if (root && observer) observer.observe(root);

    visibleRef.current = true;
    startLoop();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      observer?.disconnect();
      stopLoop();
      rendererRef.current?.reset();
      rendererRef.current = null;
      pointersRef.current = null;
    };
  }, [active, startLoop, stopLoop]);

  return canvasRef;
};

function ShaderCanvas() {
  const canvasRef = useShaderBackground(true);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full touch-none"
      style={{ background: "transparent" }}
    />
  );
}

const AnimatedShaderHero: React.FC<HeroProps> = ({
  trustBadge,
  headline,
  subtitle,
  buttons,
  trustProof,
  className = "",
}) => {
  const [useShader, setUseShader] = useState(false);

  useEffect(() => {
    setUseShader(canUseHeroShader());
  }, []);

  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-[#040a14] ${className}`}>
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>

      <HeroMobileBackground />
      {useShader && <ShaderCanvas />}

      <AnimatedHeroBackground className="z-[1]" />

      {/* Deep dark gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[#02060d]/75 via-transparent to-[#02060d]/90"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-screen w-full flex-col justify-center px-6 py-28 text-white sm:py-32 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="w-full text-left">
            {trustBadge && (
              <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-surface-400 animate-fade-in-down sm:mb-4">
                <span className="h-px w-6 bg-surface-600" />
                <span>{trustBadge.text}</span>
              </div>
            )}

            <div className="space-y-1 sm:space-y-2">
              <h1 className="animate-fade-in-up animation-delay-200 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                {headline.line1}
              </h1>
              <h1 className="animate-fade-in-up animation-delay-400 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="bg-gradient-to-r from-[#23c17c] via-[#3ebd9e] to-[#4f8fe6] bg-clip-text text-transparent">
                  {headline.line2}
                </span>
              </h1>
            </div>

            <div className="mt-6 max-w-2xl animate-fade-in-up animation-delay-600 sm:mt-7">
              <p className="text-lg leading-relaxed text-surface-300/90 md:text-xl lg:text-2xl">
                {subtitle}
              </p>
            </div>

            {buttons && (
              <div className="mt-12 flex animate-fade-in-up flex-col items-start justify-start gap-4 animation-delay-800 sm:mt-14 sm:flex-row sm:items-center lg:mt-16">
                {buttons.primary && (
                  <Button variant="pill" size="lg" onClick={buttons.primary.onClick}>
                    {buttons.primary.text}
                  </Button>
                )}
                {buttons.secondary && (
                  <Button variant="pill-outline" size="lg" onClick={buttons.secondary.onClick}>
                    {buttons.secondary.text}
                  </Button>
                )}
              </div>
            )}

            {trustProof && (
              <div className="mt-8 flex animate-fade-in-up flex-col items-start justify-start gap-3.5 animation-delay-800 sm:mt-10">
                <div className="inline-flex max-w-full items-center gap-3.5 rounded-2xl border border-[#4f8fe6]/20 bg-[#4f8fe6]/[0.06] p-3 backdrop-blur-md transition-colors hover:border-[#4f8fe6]/40 sm:rounded-full sm:px-4.5 sm:py-2.5">
                  {trustProof.avatars && trustProof.avatars.length > 0 && (
                    <div className="flex -space-x-2 shrink-0">
                      {trustProof.avatars.map((avatar, idx) => (
                        <div
                          key={idx}
                          className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-black ring-1 ring-[#4f8fe6]/30"
                        >
                          <Image
                            src={avatar}
                            alt="Client review"
                            fill
                            sizes="32px"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col justify-center text-left sm:flex-row sm:items-center sm:gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="flex gap-0.5 text-[#23c17c]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-[#23c17c] text-[#23c17c] sm:h-4 sm:w-4" />
                        ))}
                      </div>
                      {trustProof.rating && (
                        <span className="text-sm font-bold text-white">
                          {trustProof.rating}
                        </span>
                      )}
                    </div>
                    {trustProof.text && (
                      <span className="text-[13px] text-surface-300 sm:text-sm">
                        {trustProof.text}
                      </span>
                    )}
                  </div>
                </div>

                {trustProof.highlights && trustProof.highlights.length > 0 && (
                  <div className="flex flex-col gap-2 text-sm text-surface-300 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:text-surface-400">
                    {trustProof.highlights.map((item, idx) => (
                      <span key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#23c17c]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const defaultShaderSource = `#version 300 es
/*********
* made by Matthias Hurrle (@atzedent)
*
*	To explore strange new worlds, to seek out new life
*	and new civilizations, to boldly go where no man has
*	gone before.
*/
precision mediump float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
float rnd(vec2 p) {
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}
float noise(in vec2 p) {
  vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
  float
  a=rnd(i),
  b=rnd(i+vec2(1,0)),
  c=rnd(i+vec2(0,1)),
  d=rnd(i+1.);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}
float fbm(vec2 p) {
  float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
  for (int i=0; i<4; i++) {
    t+=a*noise(p);
    p*=2.*m;
    a*=.5;
  }
  return t;
}
float clouds(vec2 p) {
	float d=1., t=.0;
	for (float i=.0; i<3.; i++) {
		float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
		t=mix(t,d,a);
		d=a;
		p*=2./(i+1.);
	}
	return t;
}
void main(void) {
	// 1. Full-screen cloud background spanning the entire hero section
	vec2 cloudUV = (FC - 0.5 * R) / MN;
	vec2 cloudST = cloudUV * vec2(1.8, 1.0);
	float bg = clouds(vec2(cloudST.x + T * 0.25, -cloudST.y));

	// Deep, dark midnight navy tones (based on #0d2b52, much darker & moodier, NO green)
	vec3 cDeepNavy = vec3(0.015, 0.045, 0.09); // Deep dark midnight
	vec3 cNavy     = vec3(0.035, 0.11, 0.22);  // Moody muted #0d2b52
	vec3 cBlue     = vec3(0.26, 0.52, 0.88);   // Luminous line blue
	vec3 cSky      = vec3(0.40, 0.66, 0.96);   // Ice/Sapphire line highlights

	// Subtle, moody cloud wisps over a deep pitch-dark background
	float cloudHue = sin(T * 0.2 + cloudST.x * 0.5) * 0.5 + 0.5;
	vec3 cloudColor = mix(cDeepNavy, cNavy, cloudHue) * pow(bg, 1.35) * 0.80;
	vec3 col = cloudColor;

	// 2. Lines positioned and moving forward towards the right section (dimmed to not compete with content)
	vec2 lineCenter = R.x > R.y ? vec2(R.x * 0.80, R.y * 0.50) : vec2(R.x * 0.72, R.y * 0.56);
	vec2 uv = (FC - lineCenter) / MN;
	uv *= 1.0 - 0.35 * (sin(T * 0.25) * 0.5 + 0.5);

	vec3 lineAccum = vec3(0.0);
	for (float i = 1.0; i < 10.0; i++) {
		uv += 0.11 * cos(i * vec2(0.12 + 0.01 * i, 0.75) + i * i + T * 0.65 + 0.15 * uv.x);
		vec2 p = uv;
		float d = length(p);
		float blend = sin(i * 0.8 + T * 0.45) * 0.5 + 0.5;
		vec3 waveColor = mix(cBlue * 0.85, cSky * 0.6, blend);

		// Soft, refined head glow
		lineAccum += (0.00062 / max(d, 0.003)) * waveColor;

		// Refined trailing filaments with sapphire color tint
		float b = noise(i + p + bg * 1.731);
		float lineCore = 0.00055 * b / max(length(max(p, vec2(b * p.x * 0.02, p.y))), 0.0026);
		lineAccum += lineCore * mix(cBlue * 0.9, cSky * 0.65, blend);
	}

	// Add lines with balanced opacity (~54% intensity)
	col += lineAccum * 0.54;

	// Smoothly blend lines into the deep dark cloud atmosphere
	col = mix(col, cloudColor, clamp(length(uv) * 0.5, 0.0, 0.85));

	O = vec4(col, 1.0);
}`;

export default AnimatedShaderHero;
