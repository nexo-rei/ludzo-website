import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6d28d9",
          900: "#5b21b6",
          950: "#3b0764",
        },
        neon: "#bf5fff",
        glow: "#8b5cf6",
        dark: {
          100: "#1a1025",
          200: "#120d1e",
          300: "#0d0816",
          400: "#08040f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.4) 0%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(109,40,217,0.05) 100%)",
        "neon-gradient":
          "linear-gradient(90deg, #7c3aed 0%, #a855f7 50%, #7c3aed 100%)",
      },
      boxShadow: {
        neon: "0 0 20px rgba(168,85,247,0.5), 0 0 60px rgba(168,85,247,0.2)",
        "neon-sm": "0 0 10px rgba(168,85,247,0.4)",
        "neon-lg":
          "0 0 40px rgba(168,85,247,0.6), 0 0 120px rgba(168,85,247,0.2)",
        glass:
          "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        pulse_glow: "pulse_glow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse_glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(168,85,247,0.4)" },
          "50%": {
            boxShadow:
              "0 0 40px rgba(168,85,247,0.8), 0 0 80px rgba(168,85,247,0.3)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
