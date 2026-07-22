// ---------------------------------------------------------------------------
// EDIT ME: Update skill levels ("Learning" | "Comfortable" | "Confident")
// as your experience grows. Add or remove entries freely — the UI adapts.
// ---------------------------------------------------------------------------

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    comment: "what the user sees",
    skills: [
      { name: "HTML5", level: "Confident" },
      { name: "CSS3", level: "Confident" },
      { name: "JavaScript (ES6+)", level: "Confident" },
      { name: "React.js", level: "Confident" },
      { name: "Tailwind CSS", level: "Confident" },
      { name: "Redux Toolkit", level: "Comfortable" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    comment: "the logic underneath",
    skills: [
      { name: "Node.js", level: "Confident" },
      { name: "Express.js", level: "Confident" },
      { name: "REST APIs", level: "Confident" },
      { name: "JWT & Auth", level: "Comfortable" },
    ],
  },
  {
    id: "database",
    label: "Database",
    comment: "where the data lives",
    skills: [
      { name: "MongoDB", level: "Confident" },
      { name: "Mongoose", level: "Confident" },
      { name: "MySQL", level: "Comfortable" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    comment: "how it all ships",
    skills: [
      { name: "Git & GitHub", level: "Confident" },
      { name: "VS Code", level: "Confident" },
      { name: "Postman", level: "Confident" },
      { name: "Vite", level: "Comfortable" },
      { name: "Figma", level: "Learning" },
      { name: "Docker", level: "Learning" },
    ],
  },
];
