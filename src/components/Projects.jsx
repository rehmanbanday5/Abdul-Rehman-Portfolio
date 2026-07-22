import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";
import { GithubIcon } from "./icons";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray("[data-project-card]");
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 82%" },
          y: 44,
          opacity: 0,
          duration: 0.75,
          ease: "power2.out",
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={rootRef} className="py-24 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          index="03"
          label="Projects"
          title="A few things I've built."
          description="Placeholder projects below — swap these for your real work in src/data/projects.js."
        />

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, reversed }) {
  return (
    <div
      data-project-card
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        reversed ? "lg:[direction:rtl]" : ""
      }`}
    >
      <div className={reversed ? "[direction:ltr]" : ""}>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
          data-cursor-text="View"
          className="bracket-frame group relative block overflow-hidden bg-surface"
          aria-label={`View live demo of ${project.name}`}
        >
          <span className="bracket-tr" />
          <span className="bracket-bl" />
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            className="w-full aspect-[8/5] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-void/0 group-hover:bg-void/20 transition-colors duration-500" />
        </a>
      </div>

      <div className={reversed ? "[direction:ltr]" : ""}>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-ink-mute">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-6 bg-hairline-strong" />
          {project.featured && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-signal">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-display text-ink">
          {project.name}
        </h3>
        <p className="mt-4 text-ink-soft leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-ink-soft"
            >
              <span className="mt-2 w-1 h-1 rounded-full bg-mint shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
          {project.tech.map((tech, i) => (
            <span key={tech} className="font-mono text-xs text-ink-mute">
              {tech}
              {i < project.tech.length - 1 && (
                <span className="text-hairline-strong"> /</span>
              )}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-signal transition-colors duration-300"
          >
            Live Demo
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-signal transition-colors duration-300"
          >
            <GithubIcon size={15} />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
