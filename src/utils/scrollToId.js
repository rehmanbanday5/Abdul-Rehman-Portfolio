export function scrollToId(id) {
  const target = document.querySelector(id);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const top = target.getBoundingClientRect().top + window.scrollY - 76;

  window.scrollTo({
    top,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}
