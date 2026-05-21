import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#050810",
          2: "#090d1a",
          3: "#0d1220",
        },
        surface: {
          DEFAULT: "#111827",
          2: "#1a2235",
        },
        accent: {
          DEFAULT: "#6378ff",
          2: "#a78bfa",
        },
        brand: {
          cyan: "#22d3ee",
          green: "#10b981",
          pink: "#f472b6",
        },
        border: {
          DEFAULT: "rgba(99,120,255,0.15)",
          2: "rgba(99,120,255,0.30)",
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        blink: "blink 0.75s step-end infinite",
        "fade-in": "fadeIn 0.7s ease forwards",
        "slide-up": "slideUp 0.7s ease forwards",
      },
      keyframes: {
        "pulse-dot": {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.3)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(99,120,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(99,120,255,0.03) 1px,transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(99,120,255,0.15),transparent)",
        "accent-gradient": "linear-gradient(135deg,#6378ff,#a78bfa,#22d3ee)",
      },
    },
  },
  plugins: [],
};

export default config;
