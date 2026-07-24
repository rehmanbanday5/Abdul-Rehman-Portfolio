import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategories } from "../data/skills";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const levelWidth = {
  Confident: "85%",
  Comfortable: "62%",
  Learning: "34%",
};

export default function Skills() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const groups = gsap.utils.toArray("[data-skill-group]");
      groups.forEach((group, i) => {
        gsap.from(group, {
          scrollTrigger: { trigger: group, start: "top 85%" },
          y: 24,
          opacity: 0,
          duration: 0.6,
          delay: (i % 2) * 0.08,
          ease: "power2.out",
        });

        gsap.from(group.querySelectorAll("[data-bar-fill]"), {
          scrollTrigger: { trigger: group, start: "top 80%" },
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.9,
          stagger: 0.08,
          ease: "power2.out",
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={rootRef} className="py-24 md:py-36 bg-surface/40">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          label="Skills"
          title="Tools I reach for, organized by layer."
          description="Levels are self-assessed and reflect where I am today — they'll keep shifting as I build more."
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-x-12 gap-y-14">
          {skillCategories.map((category) => (
            <div key={category.id} data-skill-group>
              <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-hairline">
                <h3 className="font-display text-xl text-ink">
                  {category.label}
                </h3>
                <span className="font-mono text-[11px] text-ink-mute">
                  {String(category.skills.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="space-y-5">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-ink">{skill.name}</span>
                      <span className="font-mono text-[10px] uppercase tracking-wide text-ink-mute">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-[3px] w-full bg-hairline rounded-full overflow-hidden">
                      <div
                        data-bar-fill
                        className="h-full rounded-full bg-signal"
                        style={{ width: levelWidth[skill.level] }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
