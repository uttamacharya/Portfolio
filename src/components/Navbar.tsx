"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        if (window.scrollY >= (section as HTMLElement).offsetTop - 120) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled &&
            "bg-bg/85 backdrop-blur-xl border-b border-[rgba(99,120,255,0.15)]"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="font-display text-[1.4rem] font-extrabold tracking-tight text-slate-100"
          >
            Uttam<span className="text-accent">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {NAV_LINKS.slice(0, -1).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-colors duration-200 group",
                    activeSection === link.href.slice(1)
                      ? "text-slate-100"
                      : "text-slate-400 hover:text-slate-100"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] bg-accent rounded-full transition-all duration-300",
                      activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Download CV button */}
          <a
            href="#resume"
            onClick={(e) => { e.preventDefault(); handleNavClick("#resume"); }}
            className="hidden md:flex items-center gap-2 bg-accent hover:bg-[#7c8fff] text-white px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:shadow-[0_4px_20px_rgba(99,120,255,0.4)] hover:-translate-y-0.5"
          >
            <Download size={14} />
            Download CV
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer z-[60]"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-slate-100 rounded-sm origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-slate-100 rounded-sm"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-slate-100 rounded-sm origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-bg/97 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-display text-4xl font-bold text-slate-100 hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
