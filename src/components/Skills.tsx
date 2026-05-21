"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILLS } from "@/contents/skills";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "tools", label: "Tools" },
];

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof SKILLS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
      }}
      className="group bg-surface border border-[rgba(99,120,255,0.15)] rounded-xl p-5 hover:border-[rgba(99,120,255,0.3)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
    >

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow:
            "0 0 40px rgba(99,120,255,0.08) inset",
        }}
      />

      <div className="text-[1.8rem] mb-4">
        {skill.icon}
      </div>

      <h3 className="font-semibold text-[0.95rem] text-slate-100">
        {skill.name}
      </h3>

      <div className="mt-3 text-[0.72rem] uppercase tracking-wider text-accent font-mono">
        {skill.category}
      </div>

    </motion.div>
  );
}

export default function Skills() {

  const [activeCategory, setActiveCategory] =
    useState("all");

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredSkills =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter(
          (skill) =>
            skill.category === activeCategory
        );

  return (
    <section
      id="skills"
      className="section-padding"
    >

      <div
        ref={ref}
        className="max-w-[1200px] mx-auto"
      >

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : {}
          }
          className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-accent font-mono mb-3"
        >
          <span className="w-5 h-px bg-accent" />
          Technical Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ delay: 0.1 }}
          className="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold mb-3"
        >
          My Skill Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-[1.05rem] max-w-[620px] mb-10"
        >
          Technologies, frameworks, databases,
          and tools I use to build scalable
          full-stack applications and backend
          systems.
        </motion.p>

        {/* Filters */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ delay: 0.3 }}
          className="flex gap-2 mb-10 flex-wrap"
        >

          {CATEGORIES.map((cat) => (

            <button
              key={cat.key}
              onClick={() =>
                setActiveCategory(cat.key)
              }
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-accent border-accent text-white"
                  : "bg-transparent border-[rgba(99,120,255,0.15)] text-slate-400 hover:border-[rgba(99,120,255,0.3)]"
              }`}
            >
              {cat.label}
            </button>

          ))}

        </motion.div>

        {/* Grid */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeCategory}
            className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-4"
          >

            {filteredSkills.map(
              (skill, index) => (

                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                />

              )
            )}

          </motion.div>

        </AnimatePresence>

      </div>

    </section>
  );
}