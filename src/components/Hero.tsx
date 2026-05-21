"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import { TYPING_PHRASES } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const techStack = [
  "React",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Redis",
  "RabbitMQ",
  "Docker",
  "Microservices",
];

const languages = [
  "C",
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (charIdx < phrase.length) {
        timeout = setTimeout(() => {
          setTypedText(phrase.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 90);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setTypedText(phrase.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 50);
      } else {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % TYPING_PHRASES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-12 px-6 bg-[#0f172a]"
    >
      <div className="max-w-[1250px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SECTION */}
        <div>

          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-900/60 mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-slate-300">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-[clamp(2.9rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-white"
          >
            Hi, I&apos;m
            <br />
            <span className="text-blue-400">
              Uttam Kumar Acharya
            </span>
          </motion.h1>

          <motion.div
            {...fadeUp(0.2)}
            className="mt-5 h-8 flex items-center text-blue-300 font-mono text-lg"
          >
            <span>{typedText}</span>
            <span className="w-[2px] h-[22px] bg-blue-400 ml-1 animate-pulse" />
          </motion.div>

          <motion.p
            {...fadeUp(0.3)}
            className="mt-7 text-slate-400 text-lg leading-relaxed max-w-[650px]"
          >
            CSE Student & Full Stack Developer passionate about building
            scalable web applications, backend systems, microservices
            architecture, and clean user experiences.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button
              onClick={() => handleScroll("#projects")}
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-200"
            >
              <ArrowRight size={18} />
              View Projects
            </button>

            <button
              onClick={() => handleScroll("#resume")}
              className="inline-flex items-center gap-2 border border-slate-700 hover:border-blue-500 text-slate-200 px-6 py-3 rounded-xl font-semibold transition duration-200"
            >
              <Download size={18} />
              Download CV
            </button>
          </motion.div>

          <motion.div
            {...fadeUp(0.5)}
            className="flex gap-10 mt-12 pt-10 border-t border-slate-800"
          >
            {[
              { num: "4+", label: "Projects Built" },
              { num: "4+", label: "Years Coding" },
              { num: "10+", label: "Technologies" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-bold text-white">
                  {item.num}
                </div>

                <div className="text-sm text-slate-500 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-end gap-8"
        >

          {/* PHOTO */}
          <div className="relative">

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              className="absolute inset-[-12px] rounded-full border border-blue-500/40"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 28,
                ease: "linear",
              }}
              className="absolute inset-[-24px] rounded-full border border-slate-700"
            />

            <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden border border-slate-700 bg-slate-900 shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Uttam Kumar Acharya"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* TECH STACK + LANGUAGES */}
          <div className="w-full max-w-[420px] grid md:grid-cols-2 gap-5">

            {/* TECH STACK */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">

              <h3 className="text-white font-semibold text-lg mb-5">
                Tech Stack
              </h3>

              <div className="space-y-3">
                {techStack.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <CheckCircle2
                      size={17}
                      className="text-blue-400"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* LANGUAGES */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">

              <h3 className="text-white font-semibold text-lg mb-5">
                Languages
              </h3>

              <div className="space-y-3">
                {languages.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <CheckCircle2
                      size={17}
                      className="text-blue-400"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}