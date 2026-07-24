import Ecommerce from "../assets/Ecommerce.jpeg"
import Snapup from "../assets/Snapup.jpeg"
import Launch from "../assets/Launch.jpeg"
import TaskApp from "../assets/TaskApp.jpeg"
import WeatherApp from "../assets/WeatherApp.jpeg"

export const projects = [
  {
    id: "proj-01",
    name: "Noorza — E-Commerce Platform",
    description:
      "A modern e-commerce platform built to deliver a smooth and responsive online shopping experience, with product browsing, cart functionality, and a clean user interface.",
    image: Ecommerce,
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      "Responsive and modern e-commerce user interface",
      "Product browsing and shopping cart functionality",
      "Backend API built with Node.js and Express",
      "MongoDB database integration for managing application data",
    ],
    liveUrl: "https://noorza-ecommerce-frontend.vercel.app",
    githubUrl: "https://github.com/rehmanbanday5/NoorzaEcommerce",
    featured: true,
  },
  {
    id: "proj-02",
    name: "Snapup — E-Commerce Project",
    description:
      "An e-commerce website designed for a smooth online shopping experience, featuring a clean product-focused interface and essential shopping functionality.",
    image: Snapup,
    tech: ["React", "JavaScript", "Redux Toolkit", "React Router", "Sass"],
    features: [
      "Clean and responsive e-commerce user interface",
      "Product browsing and shopping experience",
      "Shopping cart functionality",
      "State management with Redux Toolkit",
    ],

    liveUrl: "https://snapup-ecommerce-project.vercel.app",
    githubUrl: "https://github.com/rehmanbanday5/Snapup-Ecommerce",
    featured: true,
  },
  {
    id: "proj-03",
    name: "Launch Landing Page",
    description:
      "A practice landing page built to explore modern website layouts and responsive front-end development, featuring a product-focused hero section, services, feature highlights, pricing plans, and a contact section.",
    image: Launch,
    tech: ["HTML", "CSS"],
    features: [
      "Responsive landing page layout with multiple content sections",
      "Product-focused hero section with clear call-to-action buttons",
      "Feature, services, and pricing sections",
      "Contact form with a clean and structured interface",
    ],

    liveUrl: "https://launch-landing-website.vercel.app",
    githubUrl: "https://github.com/rehmanbanday5/Launch-Landing-Website",
    featured: true,
  },
  {
    id: "proj-01",
    name: "Simple Task App",
    description:
      "A simple task management application built to practice interactive front-end development, allowing users to create tasks with descriptions, priority levels, and optional images.",
    image: TaskApp,
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Create tasks with title and description",
      "Set task priority from Low, Medium, or High",
      "Optional image upload for tasks",
      "Simple and user-friendly task management interface",
    ],
    liveUrl: "https://simple-task-application.vercel.app",
    githubUrl: "https://github.com/rehmanbanday5/Simple-Task-App",
    featured: true,
  },
  {
    id: "proj-05",
    name: "Weather App",
    description:
      "A weather application built to practice working with real-time weather data and API integration, allowing users to search for a location and view its current weather conditions.",
    image: WeatherApp,
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    features: [
      "Search weather conditions by location",
      "Real-time weather data fetched through an API",
      "Displays current temperature and weather conditions",
      "Clean and responsive user interface",
    ],
    liveUrl: "https://rehman-weather-app.vercel.app",
    githubUrl: "https://github.com/rehmanbanday5/Weather-App",
    featured: true,
  },
];
