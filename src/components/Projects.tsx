"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/contents/project";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentImage, setCurrentImage] =
    useState(0);

  useEffect(() => {

    if (
      !project.images ||
      project.images.length <= 1
    )
      return;

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        (prev + 1) %
        project.images.length
      );

    }, 2500);

    return () => clearInterval(interval);

  }, [project.images]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : {}
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group bg-surface border border-[rgba(99,120,255,0.15)] rounded-2xl overflow-hidden hover:border-[rgba(99,120,255,0.3)] hover:-translate-y-1 transition-all duration-300"
      whileHover={{
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.4),0 0 40px rgba(99,120,255,0.1)",
      }}
    >

      {/* IMAGE SLIDER */}

      <div className="relative h-[220px] overflow-hidden">

        {project.images?.length ? (

          <AnimatePresence mode="wait">

            <motion.div
              key={currentImage}
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -40,
              }}
              transition={{
                duration: 0.45,
              }}
              className="absolute inset-0"
            >

              <Image
                src={
                  project.images[
                    currentImage
                  ]
                }
                alt={project.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

            </motion.div>

          </AnimatePresence>

        ) : (

          <div
            className="h-full flex items-center justify-center text-[4rem]"
            style={{
              background:
                project.color,
            }}
          >
            {project.emoji}
          </div>

        )}

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Dots */}

        {(project.images?.length ?? 0) > 1 && (

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">

            {project.images?.map((_, i) => (

                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImage === i
                      ? "w-6 bg-white"
                      : "w-2 bg-white/40"
                  }`}
                />

              )
            )}

          </div>

        )}

      </div>

      {/* CONTENT */}

      <div className="p-6">

        {/* TECH STACK */}

        <div className="flex flex-wrap gap-2 mb-4">

          {project.technologies.map(
            (tech) => (

              <span
                key={tech}
                className="bg-[rgba(99,120,255,0.1)] border border-[rgba(99,120,255,0.2)] text-accent px-2.5 py-1 rounded-full text-[0.72rem] font-mono"
              >
                {tech}
              </span>

            )
          )}

        </div>

        {/* TITLE */}

        <h3 className="font-display text-[1.15rem] font-bold mb-3">

          {project.title}

        </h3>

        {/* DESCRIPTION */}

        <p className="text-slate-400 text-sm leading-relaxed mb-6">

          {project.description}

        </p>

        {/* BUTTONS */}

        <div className="flex gap-3">

          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-[#7c8fff] text-white px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>

          <a
            href={
              project.githubLink
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[rgba(99,120,255,0.3)] text-slate-400 hover:text-slate-100 hover:border-accent px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200"
          >
            <Github size={14} />
            GitHub
          </a>

        </div>

      </div>

    </motion.div>
  );
}

export default function Projects() {

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="projects"
      className="bg-bg-2 section-padding"
    >

      <div className="max-w-[1200px] mx-auto">

        <div ref={ref}>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-accent font-mono mb-3"
          >
            <span className="w-5 h-px bg-accent" />
            Portfolio
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.1,
            }}
            className="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold mb-3"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.2,
            }}
            className="text-slate-400 text-[1.05rem] max-w-[620px] mb-12"
          >
            Projects focused on
            full-stack development,
            scalable architecture,
            backend systems, and
            practical problem solving.
          </motion.p>

        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6">

          {projects.map(
            (
              project,
              index
            ) => (

              <ProjectCard
                key={
                  project.title
                }
                project={
                  project
                }
                index={
                  index
                }
              />

            )
          )}

        </div>

      </div>

    </section>
  );
}