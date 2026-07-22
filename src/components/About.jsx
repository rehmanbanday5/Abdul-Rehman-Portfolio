import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const focusPoints = [
  {
    n: "01",
    title: "What I focus on",
    description:
      "End-to-end features — from MongoDB schema design to a polished, responsive React interface.",
  },
  {
    n: "02",
    title: "My approach",
    description:
      "Understand the problem first, plan the data flow, then build in small, testable pieces.",
  },
  {
    n: "03",
    title: "Currently learning",
    description:
      "System design fundamentals, automated testing, and deployment pipelines.",
  },
];

export default function About() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-about-copy]", {
        scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });

      const rows = gsap.utils.toArray("[data-focus-row]");
      rows.forEach((row, i) => {
        gsap.from(row, {
          scrollTrigger: { trigger: row, start: "top 88%" },
          y: 20,
          opacity: 0,
          duration: 0.55,
          delay: i * 0.05,
          ease: "power2.out",
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={rootRef} className="py-24 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          index="01"
          label="About"
          title="A developer who likes building the whole thing."
        />

        <div className="mt-16 grid lg:grid-cols-[1fr_0.9fr] gap-16 lg:gap-24 items-start">
          <div data-about-copy className="space-y-6">
            {profile.aboutParagraphs.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed ${
                  i === 0
                    ? "text-xl sm:text-2xl font-display text-ink"
                    : "text-ink-soft text-base sm:text-lg"
                }`}
              >
                {para}
              </p>
            ))}
          </div>

          <div className="divide-y divide-hairline border-t border-hairline">
            {focusPoints.map((point) => (
              <div
                key={point.n}
                data-focus-row
                data-cursor="hover"
                className="group flex items-baseline gap-5 py-6"
              >
                <span className="font-mono text-xs text-ink-mute shrink-0 mt-1">
                  {point.n}
                </span>
                <div>
                  <h3 className="font-display text-lg text-ink transition-colors duration-300 group-hover:text-signal">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
