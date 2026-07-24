import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const initialForm = { name: "", email: "", message: "" };

const links = [
  { label: "GitHub", value: "github.com", href: profile.social.github, Icon: GithubIcon },
  { label: "LinkedIn", value: "linkedin.com", href: profile.social.linkedin, Icon: LinkedinIcon },
  { label: "Instagram", value: "instagram.com", href: profile.social.instagram, Icon: InstagramIcon },
];

export default function Contact() {
  const rootRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sent

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-contact-reveal]", {
        scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

 const handleSubmit = (e) => {
   e.preventDefault();

   const subject = encodeURIComponent(`Portfolio Message From ${form.name}`);

   const body = encodeURIComponent(
     `${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`,
   );

   const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${body}`;

   window.open(gmailUrl, "_blank");

   setStatus("sent");
   setForm(initialForm);
 };
  return (
    <section id="contact" ref={rootRef} className="py-24 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          index="06"
          label="Contact"
          title="Let's build something together."
          description="Have a role, project, or just want to talk MERN stack? My inbox is open."
        />

        <div className="mt-16 grid lg:grid-cols-[0.75fr_1.25fr] gap-16">
          <div
            data-contact-reveal
            className="space-y-1 border-t border-hairline"
          >
            {links.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="group flex items-center justify-between gap-4 py-5 border-b border-hairline transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  {Icon && (
                    <Icon
                      size={16}
                      className="text-ink-mute transition-colors duration-300 group-hover:text-signal"
                    />
                  )}
                  <span className="text-sm text-ink-soft">{label}</span>
                </div>
                <span className="font-mono text-xs text-ink-mute group-hover:text-ink transition-colors duration-300 truncate max-w-[140px] sm:max-w-none">
                  {value}
                </span>
              </a>
            ))}
          </div>

          <form data-contact-reveal onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              <Field
                label="Name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Abdul Rehman"
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="rehmanbanday5@gmail.com"
                required
              />
            </div>

            <div className="mt-8">
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase tracking-wide text-ink-mute mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                data-cursor="hover"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about the role or project..."
                className="w-full bg-transparent border-0 border-b border-hairline-strong focus:border-signal outline-none pb-3 text-base text-ink placeholder:text-ink-mute transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              data-cursor="hover"
              className="mt-10 group inline-flex items-center gap-2 bg-signal text-void font-medium px-6 py-3.5 rounded-md transition-transform duration-300 hover:-translate-y-0.5"
            >
              Send Message
              <Send
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, ...props }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-mono uppercase tracking-wide text-ink-mute mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        data-cursor="hover"
        className="w-full bg-transparent border-0 border-b border-hairline-strong focus:border-signal outline-none pb-3 text-base text-ink placeholder:text-ink-mute transition-colors duration-300"
        {...props}
      />
    </div>
  );
}
