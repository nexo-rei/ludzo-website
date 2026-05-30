"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Gamepad2,
  CheckSquare,
  Users,
  Trophy,
  Wallet,
  Smartphone,
} from "lucide-react";

const icons = [Gamepad2, CheckSquare, Users, Trophy, Wallet, Smartphone];
const iconColors = [
  "text-purple-400",
  "text-violet-400",
  "text-fuchsia-400",
  "text-purple-300",
  "text-violet-300",
  "text-fuchsia-300",
];
const glowColors = [
  "rgba(168,85,247,0.2)",
  "rgba(139,92,246,0.2)",
  "rgba(232,121,249,0.2)",
  "rgba(192,132,252,0.2)",
  "rgba(167,139,250,0.2)",
  "rgba(240,171,252,0.2)",
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function FeaturesSection() {
  const { t } = useLanguage();
  const { ref, inView } = useScrollAnimation();

  const features = Object.values(t.features.items);

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-200" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Top fade */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-dark-400 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-purple-400/70 tracking-[0.3em] uppercase mb-4 border border-purple-500/20 px-4 py-1.5 rounded-full glass">
            Core Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t.features.title}
          </h2>
          <p className="text-base text-purple-200/55 max-w-xl mx-auto leading-relaxed">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={feature.title} variants={item}>
                <GlassCard hover glow className="p-6 h-full group">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle, ${glowColors[i]}, transparent)`,
                      boxShadow: `0 0 20px ${glowColors[i]}`,
                      border: `1px solid ${glowColors[i].replace("0.2", "0.4")}`,
                    }}
                  >
                    <Icon className={`w-5 h-5 ${iconColors[i]}`} />
                  </div>

                  <h3 className="text-base font-display font-bold text-white mb-2 group-hover:neon-text-sm transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-purple-200/55 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom line accent */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${glowColors[i].replace("0.2", "0.8")}, transparent)`,
                    }}
                  />
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
