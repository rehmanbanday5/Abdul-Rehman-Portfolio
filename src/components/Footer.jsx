import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { profile, navLinks } from "../data/profile";
import { scrollToId } from "../utils/scrollToId";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline">
      <div className="container-px mx-auto max-w-7xl pt-16 pb-10">
        <button
          onClick={() => scrollToId("#home")}
          data-cursor="hover"
          className="group block text-left"
        >
          <span className="font-display text-[13vw] sm:text-6xl md:text-7xl leading-none text-ink transition-colors duration-300 group-hover:text-signal">
            Let&rsquo;s talk.
          </span>
        </button>

        <div className="mt-14 grid sm:grid-cols-[1.2fr_1fr_1fr] gap-10">
          <p className="text-sm text-ink-soft leading-relaxed max-w-xs">
            {profile.title} building modern, responsive, and scalable web
            applications with the MERN stack.
          </p>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink-mute mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-cursor="hover"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(link.href);
                    }}
                    className="text-sm text-ink-soft hover:text-ink transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink-mute mb-4">
              Elsewhere
            </p>
            <div className="flex items-center gap-4">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                data-cursor="hover"
                className="text-ink-soft hover:text-ink transition-colors duration-300"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-cursor="hover"
                className="text-ink-soft hover:text-ink transition-colors duration-300"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                data-cursor="hover"
                className="text-ink-soft hover:text-ink transition-colors duration-300"
              >
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-ink-mute">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-ink-mute">
            Built with React, Tailwind CSS &amp; GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
