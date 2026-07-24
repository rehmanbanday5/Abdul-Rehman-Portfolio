import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

export const EASE_QUART = CustomEase.create(
  "easeOutQuart",
  "M0,0 C0.25,1 0.5,1 1,1"
);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Magnetic hover: the element gently drifts toward the cursor while
 * hovered, within a small clamped radius, and eases back to rest on
 * leave. Used for primary buttons/links to add a premium tactile feel
 * without changing their resting position or size.
 *
 * @param {HTMLElement} el
 * @param {{ strength?: number }} [options] 
 * @returns {() => void} 
 */
export function magnetic(el, { strength = 10 } = {}) {
  if (!el || prefersReducedMotion()) return () => {};

  const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
  const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });

  const onMove = (e) => {
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    xTo((relX / rect.width) * strength * 2);
    yTo((relY / rect.height) * strength * 2);
  };

  const onLeave = () => {
    xTo(0);
    yTo(0);
  };

  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);

  return () => {
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
    gsap.killTweensOf(el);
  };
}

/**
 * Tactile "press punch": a quick scale-down/scale-back on mousedown/up,
 * layered on top of whatever CSS hover transform the element already has.
 * Uses clearProps on completion so it never leaves a lingering inline
 * transform that would fight with a CSS :hover rule (e.g. hover:-translate-y-0.5).
 */
export function pressPunch(el, { scale = 0.94 } = {}) {
  if (!el || prefersReducedMotion()) return () => {};

  const onDown = () => {
    gsap.to(el, { scale, duration: 0.12, ease: "power2.out" });
  };
  const onRelease = () => {
    gsap.to(el, {
      scale: 1,
      duration: 0.3,
      ease: "back.out(2.5)",
      onComplete: () => gsap.set(el, { clearProps: "scale" }),
    });
  };

  el.addEventListener("mousedown", onDown);
  el.addEventListener("mouseup", onRelease);
  el.addEventListener("mouseleave", onRelease);

  return () => {
    el.removeEventListener("mousedown", onDown);
    el.removeEventListener("mouseup", onRelease);
    el.removeEventListener("mouseleave", onRelease);
    gsap.killTweensOf(el);
  };
}

/**
 * Subtle continuous "breathing" loop for status dots and other small live
 * indicators. Intentionally slow and low-amplitude so it reads as "alive"
 * rather than distracting.
 *
 * By default animates both scale and opacity. Pass `animateScale: false`
 * for elements that already have a CSS hover:scale transform, so the
 * GSAP-driven inline transform doesn't fight with — and cancel out — the
 * CSS-driven one.
 */
export function breathe(
  el,
  { scale = 1.35, duration = 2.2, animateScale = true } = {}
) {
  if (!el || prefersReducedMotion()) return () => {};

  const vars = {
    opacity: 0.55,
    duration,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    transformOrigin: "50% 50%",
  };
  if (animateScale) vars.scale = scale;

  const tween = gsap.to(el, vars);

  return () => tween.kill();
}
