"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const projectLinks = [
  { label: "CollegeAssist", href: "#" },
  { label: "FinSight", href: "#" },
  { label: "progressify", href: "#" },
  { label: "Developer Portfolio", href: "#" },
];

const socials = [
  {
    icon: <Github size={16} />,
    href: "https://github.com/uttamacharya",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={16} />,
    href: "https://www.linkedin.com/in/uttam-acharya-270b6025b/",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={16} />,
    href: "mailto:uttamacharya520@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleScroll = (href: string) => {
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-bg-2 border-t border-[rgba(99,120,255,0.15)]">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-12"
        >

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="font-display text-[1.3rem] font-extrabold mb-3">
              Uttam<span className="text-accent">.</span>Acharya
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-[320px] mb-5">
              Full Stack Developer & CSE Student passionate about
              scalable systems, backend engineering, and building
              impactful software solutions.
            </p>

            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-surface border border-[rgba(99,120,255,0.15)] hover:border-[rgba(99,120,255,0.3)] flex items-center justify-center text-slate-400 hover:text-slate-100 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs font-bold tracking-[0.08em] uppercase text-slate-100 font-mono mb-5">
              Navigation
            </h4>

            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.href);
                    }}
                    className="text-slate-500 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs font-bold tracking-[0.08em] uppercase text-slate-100 font-mono mb-5">
              Featured Projects
            </h4>

            <ul className="flex flex-col gap-3">
              {projectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[rgba(99,120,255,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Uttam Kumar Acharya.
            Built with 💜 using Next.js & Tailwind CSS
          </p>

          <button
            onClick={() => handleScroll("#home")}
            className="flex items-center gap-1.5 bg-surface border border-[rgba(99,120,255,0.15)] hover:border-accent text-slate-400 hover:text-accent text-xs px-3 py-1.5 rounded-lg transition-all duration-200"
          >
            <ArrowUp size={13} />
            Back to Top
          </button>
        </div>

      </div>
    </footer>
  );
}