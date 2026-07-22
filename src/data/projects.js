// ---------------------------------------------------------------------------
// EDIT ME: Replace with your real projects. Add as many objects as you like —
// the Projects section renders every entry in this array automatically.
// `image` accepts any path inside /public or an external URL.
// ---------------------------------------------------------------------------

export const projects = [
  {
    id: "proj-01",
    name: "ShopStack — E-Commerce Platform",
    description:
      "A full-featured e-commerce application with product catalog, cart, and checkout flow. Built to explore secure authentication and real-world state management at scale.",
    image: "/projects/placeholder-1.svg",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux Toolkit"],
    features: [
      "JWT-based authentication with role-based access",
      "Cart and order flow with persisted state",
      "Admin dashboard for product & order management",
      "Stripe test-mode checkout integration",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/shopstack",
    featured: true,
  },
  {
    id: "proj-02",
    name: "TaskFlow — Team Task Manager",
    description:
      "A collaborative task board inspired by Trello, with drag-and-drop boards, real-time updates, and per-project team access.",
    image: "/projects/placeholder-2.svg",
    tech: ["React", "Express", "MongoDB", "Socket.IO", "Tailwind CSS"],
    features: [
      "Drag-and-drop kanban board with optimistic UI",
      "Real-time updates via WebSockets",
      "Project-level permissions and invites",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/taskflow",
    featured: true,
  },
  {
    id: "proj-03",
    name: "DevNotes — Markdown Knowledge Base",
    description:
      "A personal knowledge base for developers, supporting markdown notes, tagging, and full-text search.",
    image: "/projects/placeholder-3.svg",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "Live markdown preview with syntax highlighting",
      "Full-text search across notes and tags",
      "Offline-friendly local draft caching",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/devnotes",
    featured: false,
  },
];
