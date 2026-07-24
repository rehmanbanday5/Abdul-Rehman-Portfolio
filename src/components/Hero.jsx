import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "../data/profile";
import { scrollToId } from "../utils/scrollToId";
import { GithubIcon, LinkedinIcon } from "./icons";
import StackGraph from "./StackGraph";


export default function Hero() {
  const rootRef = useRef(null);


  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero-eyebrow]", { y: 14, opacity: 0, duration: 0.6 })
        .from(
          "[data-hero-name] .word",
          { y: "110%", duration: 0.8, stagger: 0.08 },
          "-=0.3"
        )
        .from(
          "[data-hero-role]",
          { y: 20, opacity: 0, duration: 0.6 },
          "-=0.45"
        )
        .from(
          "[data-hero-desc]",
          { y: 16, opacity: 0, duration: 0.6 },
          "-=0.4"
        )
        .from(
          "[data-hero-cta] > *",
          { y: 14, opacity: 0, duration: 0.5, stagger: 0.1 },
          "-=0.35"
        )
        .from(
          "[data-hero-social] > *",
          { y: 10, opacity: 0, duration: 0.4, stagger: 0.08 },
          "-=0.3"
        )
        .from(
          "[data-hero-graph]",
          { opacity: 0, scale: 0.94, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        );

      if (!prefersReducedMotion) {
        gsap.to("[data-hero-orbit]", {
          rotate: 360,
          duration: 60,
          repeat: -1,
          ease: "none",
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative min-h-screen flex items-center pt-28 pb-24 overflow-hidden grain radial-veil"
    >
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-10 items-center relative z-10">
        <div className="min-w-0">
          <p
            data-hero-eyebrow
            className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute mb-8 border border-hairline rounded-full px-3.5 py-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-mint" />
            Open to new opportunities
          </p>

          <h1
            data-hero-name
            className="font-display font-medium text-[13vw] sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[0.98] text-ink -ml-0.5"
          >
            <span className="block overflow-hidden">
              <span className="word inline-block italic">
                {profile.firstName}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="word inline-block italic -ml-1 text-ink-mute">
                Rehman
              </span>
            </span>
          </h1>

          <p
            data-hero-role
            className="mt-6 font-mono text-sm sm:text-base tracking-wide text-signal"
          >
            {profile.title} <span className="text-ink-mute"></span>
          </p>

          <p
            data-hero-desc
            className="mt-6 max-w-lg text-ink-soft text-base sm:text-lg leading-relaxed"
          >
            {profile.heroDescription}
          </p>

          <div
            data-hero-cta
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              data-cursor="hover"
              onClick={() => scrollToId("#contact")}
              className="group inline-flex items-center gap-2 bg-transparent text-ink font-medium px-6 py-3.5 rounded-lg border border-hairline-strong transition-colors duration-500 hover:border-signal hover:text-signal"
            >
              <span className="inline-block transition-transform duration-850 ease-out group-hover:[transform:rotateX(360deg)]">
                Contact Me
              </span>
            </button>

            <a
              data-cursor="hover"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink-soft text-sm px-2 py-3.5 hover:text-ink transition-colors duration-300"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>

        <div data-hero-graph className="relative mx-auto w-full max-w-sm">
          <StackGraph />
        </div>
      </div>
    </section>
  );
}
