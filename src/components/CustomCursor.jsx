import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Elegant dot + trailing-ring cursor.
 * - Disabled entirely on touch devices and when prefers-reduced-motion is set.
 * - Ring eases behind the pointer for a soft trailing feel; the dot tracks tightly.
 * - Hovering any element with `data-cursor="hover"` (or a, button, [role="button"],
 *   input, textarea) scales the ring into a soft filled circle.
 * - Hovering an element with `data-cursor-text="..."` shows a short label inside the ring.
 * - Hovering text inputs collapses the ring into a thin caret-like bar.
 *
 * IMPORTANT: the dot/ring elements are always rendered (never conditionally
 * unmounted) so their refs are attached before any GSAP call runs. Visibility
 * for disabled/touch cases is handled by never adding the "cursor-ready" class
 * and by keeping the elements at opacity: 0 until enabled.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const isFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isFinePointer || prefersReducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-ready");

    let hasMoved = false;

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    const onMove = (e) => {
      if (!hasMoved) {
        hasMoved = true;
        gsap.set([dot, ring], { x: e.clientX, y: e.clientY });
        gsap.to([dot, ring], { opacity: 1, duration: 0.25 });
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onDown = () => {
      gsap.to(ring, { scale: 0.85, duration: 0.2, ease: "power2.out" });
      gsap.to(dot, { scale: 0.6, duration: 0.2, ease: "power2.out" });
    };
    const onUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(dot, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    const hoverSelector =
      'a, button, [role="button"], input, textarea, [data-cursor]';

    const onOver = (e) => {
      const target = e.target.closest?.(hoverSelector);
      if (!target) return;

      const isTextField =
        target.tagName === "INPUT" || target.tagName === "TEXTAREA";
      const text = target.getAttribute("data-cursor-text");

      ring.dataset.state = isTextField ? "text" : "hover";
      gsap.to(dot, { opacity: 0, duration: 0.15 });

      if (text) setLabel(text);
    };

    const onOut = (e) => {
      const target = e.target.closest?.(hoverSelector);
      if (!target) return;
      const related = e.relatedTarget;
      if (related && target.contains(related)) return;
      ring.dataset.state = "default";
      gsap.to(dot, { opacity: 1, duration: 0.15 });
      setLabel("");
    };

    const onLeaveWindow = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };
    const onEnterWindow = () => {
      if (hasMoved) gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    return () => {
      document.documentElement.classList.remove("cursor-ready");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-signal pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        data-state="default"
        className="cursor-ring fixed top-0 left-0 pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-ink/40 transition-[width,height,background-color,border-color] duration-200 ease-out"
        style={{ opacity: 0 }}
        aria-hidden="true"
      >
        {enabled && label && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-void whitespace-nowrap">
            {label}
          </span>
        )}
      </div>
    </>
  );
}
