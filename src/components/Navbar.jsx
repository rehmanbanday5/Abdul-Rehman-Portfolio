import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/profile";
import { scrollToId } from "../utils/scrollToId";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section for nav highlighting
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    scrollToId(href);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-void/85 backdrop-blur-md border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-px mx-auto max-w-7xl flex items-center justify-between h-[72px]">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2.5 group"
          aria-label="Go to top"
          data-cursor="hover"
        >
          <span className="w-2 h-2 rounded-full bg-signal transition-transform duration-300 group-hover:scale-125" />
          <span className="font-display text-lg text-ink tracking-tight">
            {profile.firstName} <span className="text-ink-mute">Rehman</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor="hover"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative py-2 transition-colors duration-200 ${
                  activeSection === link.href
                    ? "text-ink"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-signal transition-all duration-300 ${
                    activeSection === link.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
          data-cursor="hover"
          className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-md border border-hairline-strong text-ink hover:border-signal hover:text-signal transition-colors duration-200"
        >
          Let&rsquo;s talk
          <span className="text-signal">&rarr;</span>
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          data-cursor="hover"
          className="md:hidden text-ink p-2 -mr-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-x-0 top-[72px] bottom-0 bg-void/98 backdrop-blur-md border-t border-hairline transition-all duration-300 ease-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-1 p-6 text-2xl font-display">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`flex items-center gap-4 py-4 border-b border-hairline ${
                  activeSection === link.href ? "text-signal" : "text-ink-soft"
                }`}
              >
                <span className="font-mono text-xs text-ink-mute">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="inline-flex items-center justify-center w-full font-body text-base px-4 py-3.5 rounded-md bg-signal text-void font-medium"
            >
              Let&rsquo;s talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
