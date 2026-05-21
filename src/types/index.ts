export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools";
  percentage: number;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  emoji: string;
  color: string;
  liveUrl: string;
  githubUrl: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  color: string;
}

export interface NavLink {
  label: string;
  href: string;
}
