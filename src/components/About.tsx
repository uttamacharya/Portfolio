"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section id="about" className="bg-bg-2 section-padding">
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start"
      >
        {/* Avatar */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="w-full max-w-[340px] aspect-square rounded-2xl bg-gradient-to-br from-surface to-surface-2 border border-[rgba(99,120,255,0.3)] flex items-center justify-center text-[8rem] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(99,120,255,0.1)] to-transparent" />
            🧑‍💻
          </div>

          <div className="absolute -bottom-4 -right-4 bg-surface-2 border border-[rgba(99,120,255,0.3)] rounded-[10px] px-4 py-3 flex items-center gap-2 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
            Open to Work
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-6"
        >
          <div>
            <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-accent font-mono mb-3">
              <span className="w-5 h-px bg-accent" />
              About Me
            </p>

            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
              Full Stack Developer <br />
              & Backend Enthusiast
            </h2>
          </div>

          <p className="text-slate-400 leading-[1.9]">
            I’m Uttam Kumar Acharya, a Computer Science & Engineering
            student at{" "}
            <span className="text-slate-200 font-medium">
              IIIT Bhubaneswar
            </span>
            . I’m passionate about building scalable web applications,
            backend systems, and real-world software solutions that
            create meaningful impact.
          </p>

          <p className="text-slate-400 leading-[1.9]">
            My interests revolve around full-stack development,
            microservices architecture, distributed systems, and
            cloud-ready applications. I enjoy working across the entire
            stack — from creating responsive user interfaces to
            developing secure APIs, database logic, and scalable backend
            services.
          </p>

          <p className="text-slate-400 leading-[1.9]">
            Outside development, I continuously explore modern
            technologies, system design principles, and efficient coding
            practices to build clean, maintainable, and production-grade
            software.
          </p>

          {/* Details Row */}
          <div className="flex flex-wrap gap-4 pt-2 text-sm text-slate-400">
            <span>🎓 B.Tech CSE</span>
            <span>🏛️ IIIT Bhubaneswar</span>
            <span>📍 Darbhanga, Bihar</span>
            <span>📅 2026</span>
          </div>

          {/* Career Objective */}
          <div className="bg-gradient-to-br from-[rgba(99,120,255,0.08)] to-[rgba(167,139,250,0.05)] border border-[rgba(99,120,255,0.3)] rounded-xl p-6">
            <p className="text-slate-400 text-[0.95rem] leading-relaxed italic">
              "My goal is to contribute to impactful products through
              full-stack engineering, backend development, and scalable
              system design while continuously growing as a software
              engineer."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}