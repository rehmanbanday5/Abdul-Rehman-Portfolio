import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { journey } from "../data/journey";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const typeStyles = {
  education: "text-sand border-sand/25 bg-sand/10",
  milestone: "text-signal border-signal/25 bg-signal-soft",
  experience: "text-mint border-mint/25 bg-mint-soft",
};

export default function Journey() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-journey-item]", {
        scrollTrigger: { trigger: rootRef.current, start: "top 72%" },
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={rootRef} className="py-24 md:py-36 bg-surface/40">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          label="Journey"
          title="Development journey."
          description="A running log of how I got here — updated as new milestones happen."
        />

        <div className="mt-16 border-t border-hairline">
          {journey.map((item) => (
            <div
              key={item.id}
              data-journey-item
              data-cursor="hover"
              className="group grid sm:grid-cols-[110px_140px_1fr] gap-3 sm:gap-8 py-7 border-b border-hairline transition-colors duration-300 hover:bg-surface/60 sm:px-4 sm:-mx-4"
            >
              <span className="font-mono text-sm text-ink-mute">
                {item.date}
              </span>
              <span
                className={`self-start font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border w-fit ${typeStyles[item.type]}`}
              >
                {item.type}
              </span>
              <div>
                <h3 className="font-display text-lg text-ink transition-colors duration-300 group-hover:text-signal">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
