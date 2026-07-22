# Abdul Rehman — MERN Stack Developer Portfolio

A premium, dark-themed developer portfolio built with React, Vite, Tailwind CSS, and GSAP.

## Tech stack

- **React 19** + **Vite** — app shell and build tooling
- **Tailwind CSS v4** — styling, using a custom design-token theme (see `src/index.css`)
- **GSAP + ScrollTrigger** — entrance animations and scroll-triggered reveals
- **lucide-react** — icon set (brand icons for GitHub/LinkedIn/X are custom SVGs in `src/components/icons.jsx`, since lucide no longer ships logo icons)

## Running it locally

```bash
npm install
npm run dev       # starts a local dev server, usually http://localhost:5173
```

Other useful commands:

```bash
npm run build      # production build, output in dist/
npm run preview    # preview the production build locally
npm run lint        # run oxlint
```

## Project structure

```
src/
  data/
    profile.js      # EDIT: your name, title, bio, email, resume path, social links
    skills.js        # EDIT: skill categories and levels
    projects.js       # EDIT: your real projects
    journey.js        # EDIT: your learning/education/experience timeline
  components/
    Navbar.jsx, Hero.jsx, About.jsx, Skills.jsx, Projects.jsx,
    Journey.jsx, WhyWorkWithMe.jsx, Contact.jsx, Footer.jsx, icons.jsx
  App.jsx
  index.css          # design tokens: colors, fonts, global styles
```

## Where to update your information

| What | File |
|---|---|
| Name, title, bio, tagline | `src/data/profile.js` → `profile` object |
| Email address | `src/data/profile.js` → `profile.email` |
| Resume file | `src/data/profile.js` → `profile.resumeUrl` (see below) |
| GitHub / LinkedIn / Twitter links | `src/data/profile.js` → `profile.social` |
| Skills & skill levels | `src/data/skills.js` |
| Projects | `src/data/projects.js` |
| Learning journey / education / experience | `src/data/journey.js` |
| Navigation labels | `src/data/profile.js` → `navLinks` |

Everything else (layout, animation, styling) reads from these files, so most updates never require touching component code.

### Adding your resume

`profile.resumeUrl` currently points to `/resume.pdf`, which does not exist yet. Drop your resume PDF into the `public/` folder as `resume.pdf` (or update the path in `profile.js` to point wherever you host it) and the "Resume" link in the hero section will work.

### Adding real project images

Project thumbnails live in `public/projects/` as placeholder SVGs. Replace them with real screenshots (JPG/PNG/WebP work fine) and update the `image` path in `src/data/projects.js`.

### Connecting the contact form

The contact form currently opens the visitor's email client via a `mailto:` link pre-filled with their message — it does **not** send anything to a backend. To collect messages directly, open `src/components/Contact.jsx` and replace the `handleSubmit` logic with a call to a service like Formspree, EmailJS, or your own API endpoint.

## Design notes

- **Visual identity**: an editorial, warm-dark aesthetic — Fraunces (serif display) paired with Inter (body) and JetBrains Mono (labels/code accents), a near-black "void" background, and a signal-orange accent color. Section headings use a small bracketed index (`01 — About`) rather than icon-heavy cards, and the hero's signature visual is an abstract SVG node-graph of the MERN stack instead of a literal terminal window.
- **Custom cursor**: `src/components/CustomCursor.jsx` renders a small dot + trailing ring that follows the pointer, enlarges over links/buttons/cards (anything with `data-cursor="hover"`, or native `a`/`button`/`input`/`textarea`), and collapses into a thin bar over text fields. It's automatically disabled on touch devices and when the user has `prefers-reduced-motion` enabled — the native cursor is used as a fallback in both cases. Pointer events pass straight through it, so it never interferes with clicking.
- Color system, fonts, and spacing tokens are defined once in `src/index.css` under `@theme`, and used as Tailwind utility classes (`text-signal`, `bg-surface`, `font-mono`, etc.) throughout the app.
- Animations respect `prefers-reduced-motion` — GSAP entrance/scroll animations are skipped or shortened for users who have that setting enabled.
- All GSAP animations are scoped with `gsap.context()` and cleaned up on unmount to avoid leaks when navigating in a larger app.

## Manual steps still needed

1. Add your real `resume.pdf` to `public/`.
2. Replace placeholder project data, images, and links in `src/data/projects.js`.
3. Update `src/data/profile.js` with your real email and social URLs.
4. Wire up the contact form to a real email/backend service if you want to receive messages directly instead of via `mailto:`.
5. Deploy — this is a static Vite build, so it works well on Vercel, Netlify, GitHub Pages, or any static host (`npm run build`, then deploy the `dist/` folder).
