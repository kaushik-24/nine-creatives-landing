/** Runtime checks for expensive visual effects. */

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isCoarsePointer(): boolean {
  return window.matchMedia("(pointer: coarse)").matches;
}

/** Full-screen WebGL hero — skip phones only; tablets/desktop keep it. */
export function canUseHeroShader(): boolean {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return false;
  // Phones only (~md breakpoint). Tablets are wide enough to run the shader.
  if (window.innerWidth < 768) return false;
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl2");
  return Boolean(gl);
}

/** Lenis is wheel-oriented; native scroll is better on touch. */
export function canUseSmoothScroll(): boolean {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return false;
  if (isCoarsePointer()) return false;
  return true;
}

/** Cap canvas resolution — fragment shaders scale with pixel count. */
export function getShaderDpr(): number {
  const raw = window.devicePixelRatio || 1;
  return Math.min(Math.max(raw * 0.5, 0.75), 1.25);
}
