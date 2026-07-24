import { useEffect, useRef, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks} from "../data/profile";
import { scrollToId } from "../utils/scrollToId";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [darkMode, setDarkMode] = useState(true);
  const menuRef = useRef(null);


  useEffect(() => {
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
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
        <button
          type="button"
          data-cursor="hover"
          onClick={() => setDarkMode((prev) => !prev)}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-hairline-strong text-ink hover:border-signal hover:text-signal transition-colors duration-300"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span
            className={`transition-transform duration-500 ease-out ${
              darkMode ? "rotate-180" : "rotate-0"
            }`}
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </span>
        </button>

        
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
                className={`relative inline-block py-2 transition-all duration-300 hover:scale-105 ${
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
        
        </ul>
      </div>
    </header>
  );
}

