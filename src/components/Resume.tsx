"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download } from "lucide-react";
import { TIMELINE } from "@/contents/resume";

export default function Resume() {

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="resume"
      className="bg-bg-3 section-padding"
    >
      <div className="max-w-[1200px] mx-auto">

        <div ref={ref}>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-accent font-mono mb-3"
          >
            <span className="w-5 h-px bg-accent" />
            Resume
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-12"
          >
            Education & Journey
          </motion.h2>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start">

          {/* Timeline */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >

            {TIMELINE.map((item, i) => (

              <div
                key={item.title}
                className="flex gap-6 pb-8 last:pb-0"
              >

                <div className="flex flex-col items-center">

                  <div
                    className="w-3 h-3 rounded-full border-2 border-bg-3 flex-shrink-0 mt-1"
                    style={{
                      background: item.color,
                      boxShadow: `0 0 12px ${item.color}`,
                    }}
                  />

                  {i < TIMELINE.length - 1 && (

                    <div
                      className="w-px flex-1 mt-1"
                      style={{
                        background: `linear-gradient(${item.color}50, transparent)`,
                      }}
                    />

                  )}

                </div>

                <div>

                  <div
                    className="font-mono text-xs mb-1"
                    style={{
                      color: item.color,
                    }}
                  >
                    {item.date}
                  </div>

                  <div className="font-bold text-base mb-1 text-slate-100">
                    {item.title}
                  </div>

                  <div className="text-slate-400 text-sm">
                    {item.subtitle}
                  </div>

                </div>

              </div>

            ))}

          </motion.div>

          {/* Resume Card */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            <div className="bg-surface border border-[rgba(99,120,255,0.3)] rounded-2xl p-10 text-center relative overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(99,120,255,0.06)] to-transparent pointer-events-none" />

              <div className="relative z-10">

                <span className="text-[3rem] block mb-4">
                  📄
                </span>

                <h3 className="font-display text-[1.4rem] font-extrabold mb-3">
                  Download My Resume
                </h3>

                <p className="text-slate-400 text-sm mb-7 max-w-[280px] mx-auto">
                  View my education, technical skills,
                  projects, full-stack development
                  experience, and backend engineering
                  work.
                </p>

                <a
                  href="/resume/Uttam_Kumar_Acharya_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-2 text-white px-8 py-3 rounded-lg font-bold text-[0.95rem] hover:opacity-95 transition-all duration-200"
                >
                  <Download size={18} />
                  Download Resume
                </a>

                {/* Stats */}

                <div className="mt-8 pt-8 border-t border-[rgba(99,120,255,0.15)] flex justify-center gap-8 flex-wrap">

                  {[
                    {
                      num: "4+",
                      label: "Major Projects",
                      color: "#6378ff",
                    },

                    {
                      num: "10+",
                      label: "Technologies",
                      color: "#22d3ee",
                    },

                    {
                      num: "Full-Stack",
                      label: "Development",
                      color: "#f472b6",
                    },
                  ].map((s) => (

                    <div
                      key={s.label}
                      className="text-center"
                    >

                      <div
                        className="font-display text-[1.4rem] font-extrabold"
                        style={{
                          color: s.color,
                        }}
                      >
                        {s.num}
                      </div>

                      <div className="text-xs text-slate-500 mt-0.5">
                        {s.label}
                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}