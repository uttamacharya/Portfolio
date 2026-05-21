import type { Skill, Project, TimelineItem, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  { name: "React", icon: "⚛️", category: "frontend", percentage: 90 },
  { name: "Next.js", icon: "▲", category: "frontend", percentage: 85 },
  { name: "TypeScript", icon: "🔷", category: "frontend", percentage: 82 },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend", percentage: 88 },
  { name: "JavaScript", icon: "🟨", category: "frontend", percentage: 92 },
  { name: "Node.js", icon: "🟢", category: "backend", percentage: 84 },
  { name: "Express.js", icon: "🚂", category: "backend", percentage: 80 },
  { name: "Microservices", icon: "🔧", category: "backend", percentage: 72 },
  { name: "JWT Auth", icon: "🔑", category: "backend", percentage: 78 },
  { name: "REST APIs", icon: "🔗", category: "backend", percentage: 86 },
  { name: "PostgreSQL", icon: "🐘", category: "database", percentage: 76 },
  { name: "MongoDB", icon: "🍃", category: "database", percentage: 80 },
  { name: "Redis", icon: "🔴", category: "database", percentage: 65 },
  { name: "Docker", icon: "🐳", category: "tools", percentage: 70 },
  { name: "Git", icon: "🔀", category: "tools", percentage: 90 },
  { name: "RabbitMQ", icon: "🐰", category: "tools", percentage: 60 },
  { name: "VS Code", icon: "💙", category: "tools", percentage: 95 },
];

export const PROJECTS: Project[] = [
  {
    title: "College Management System",
    description:
      "Full-featured web app for managing students, faculty, courses, attendance, and grades with role-based access control.",
    tech: ["Next.js", "PostgreSQL", "Node.js", "JWT"],
    emoji: "🏫",
    color: "rgba(99,120,255,0.15)",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Notice Management System",
    description:
      "Real-time notice board for institutions with category filtering, priority levels, email notifications, and admin dashboard.",
    tech: ["React", "Express", "MongoDB", "Socket.io"],
    emoji: "📢",
    color: "rgba(34,211,238,0.12)",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Authentication Microservice",
    description:
      "Production-ready auth service with JWT, refresh tokens, OAuth2, rate limiting, and RabbitMQ event publishing.",
    tech: ["Node.js", "RabbitMQ", "Redis", "Docker"],
    emoji: "🔐",
    color: "rgba(16,185,129,0.12)",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern developer portfolio with dark mode, smooth animations, particles, and responsive design built with Next.js 15.",
    tech: ["Next.js", "Framer Motion", "TypeScript", "Tailwind"],
    emoji: "🌐",
    color: "rgba(244,114,182,0.12)",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    date: "2022 – Present",
    title: "B.Tech Computer Science",
    subtitle: "AKTU University • Delhi, India",
    color: "#6378ff",
  },
  {
    date: "2024 (6 months)",
    title: "Full Stack Developer Intern",
    subtitle: "TechStart Pvt. Ltd. • Remote",
    color: "#22d3ee",
  },
  {
    date: "2023",
    title: "Open Source Contributor",
    subtitle: "GitHub • Various Projects",
    color: "#10b981",
  },
  {
    date: "2022",
    title: "Started Coding Journey",
    subtitle: "DSA, Web Dev, System Design",
    color: "#f472b6",
  },
];

export const TYPING_PHRASES = [
  "Full Stack Developer",
  "Problem Solver",
  "CSE Student",
  "Open Source Enthusiast",
  "Backend Architect",
];
