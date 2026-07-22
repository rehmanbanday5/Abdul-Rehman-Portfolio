import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    n: "01",
    title: "Problem-first thinking",
    description:
      "I spend time understanding the actual problem before writing code, so the solution fits — not just compiles.",
  },
  {
    n: "02",
    title: "Clean, maintainable code",
    description:
      "Readable structure, sensible naming, and components that are easy for the next person — often future me — to pick up.",
  },
  {
    n: "03",
    title: "Responsive by default",
    description:
      "Every interface I build is designed to hold up from a small phone screen to a wide desktop monitor.",
  },
  {
    n: "04",
    title: "User-focused development",
    description:
      "Features are only done when they feel right to use, not just when the logic works.",
  },
  {
    n: "05",
    title: "Continuous learning",
    description:
      "The MERN ecosystem moves fast. I stay in the habit of reading docs, shipping small projects, and picking up new patterns.",
  },
  {
    n: "06",
    title: "Modern practices",
    description:
      "Component-driven UI, RESTful APIs, environment-based config — the habits that keep a project scalable.",
  },
];

export default function WhyWorkWithMe() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-value-row]", {
        scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
        y: 20,
        opacity: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: "power2.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const [left, right] = [values.slice(0, 3), values.slice(3)];

  return (
    <section ref={rootRef} className="py-24 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          index="05"
          label="Why work with me"
          title="What I bring to a team."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-x-16">
          <div className="divide-y divide-hairline border-t border-hairline md:border-t-0">
            {left.map((v) => (
              <ValueRow key={v.n} value={v} />
            ))}
          </div>
          <div className="divide-y divide-hairline border-t border-hairline md:border-t-0">
            {right.map((v) => (
              <ValueRow key={v.n} value={v} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueRow({ value }) {
  return (
    <div
      data-value-row
      data-cursor="hover"
      className="group flex items-baseline gap-5 py-7"
    >
      <span className="font-mono text-xs text-ink-mute shrink-0 mt-1">
        {value.n}
      </span>
      <div>
        <h3 className="font-display text-lg text-ink transition-colors duration-300 group-hover:text-signal">
          {value.title}
        </h3>
        <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
          {value.description}
        </p>
      </div>
    </div>
  );
}
