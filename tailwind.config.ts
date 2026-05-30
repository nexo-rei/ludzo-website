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
          50:  "#f5f0ff",
          100: "#ede8ff",
          200: "#d9d0ff",
          300: "#bfb0ff",
          400: "#a380ff",
          500: "#8B5CF6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        surface: {
          50:  "#2a1f3d",
          100: "#1f1630",
          200: "#1A102C",
          300: "#130d21",
          400: "#0e0918",
          500: "#0B0615",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-inter)", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(139,92,246,0.18) 0%, transparent 70%)",
        "card-border": "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.05) 100%)",
        "purple-subtle": "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(109,40,217,0.04) 100%)",
      },
      boxShadow: {
        "card":       "0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(139,92,246,0.08)",
        "card-hover": "0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.18)",
        "btn":        "0 2px 8px rgba(0,0,0,0.35)",
        "btn-purple": "0 2px 12px rgba(139,92,246,0.3)",
        "subtle":     "0 1px 8px rgba(0,0,0,0.3)",
      },
      animation: {
        "fade-up":    "fadeUp 0.55s ease-out forwards",
        "fade-in":    "fadeIn 0.4s ease-out forwards",
        "float":      "float 7s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "spin-slow":  "spin 12s linear infinite",
        "blink":      "blink 1.4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-14px)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0.3" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
