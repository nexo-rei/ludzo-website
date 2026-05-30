"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Check, Clock, Rocket, Circle } from "lucide-react";

const statusConfig = {
  completed: {
    icon: Check,
    label: "Completed",
    color: "text-emerald-400",
    bg: "bg-emerald-500/15",
    border: "border-emerald-500/30",
    glow: "shadow-[0_0_15px_rgba(52,211,153,0.3)]",
    lineColor: "bg-emerald-500/50",
  },
  current: {
    icon: Rocket,
    label: "In Progress",
    color: "text-purple-400",
    bg: "bg-purple-500/20",
    border: "border-purple-500/50",
    glow: "shadow-neon",
    lineColor: "bg-purple-500",
  },
  upcoming: {
    icon: Circle,
    label: "Upcoming",
    color: "text-purple-300/40",
    bg: "bg-white/5",
    border: "border-white/10",
    glow: "",
    lineColor: "bg-purple-500/20",
  },
};

export function RoadmapSection() {
  const { t } = useLanguage();
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="roadmap" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-300" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-purple-400/70 tracking-[0.3em] uppercase mb-4 border border-purple-500/20 px-4 py-1.5 rounded-full glass">
            Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t.roadmap.title}
          </h2>
          <p className="text-base text-purple-200/55 max-w-lg mx-auto">
            {t.roadmap.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {t.roadmap.phases.map((phase, i) => {
              const status = phase.status as keyof typeof statusConfig;
              const config = statusConfig[status];
              const Icon = config.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={cn(
                    "lg:grid lg:grid-cols-2 lg:gap-8 mb-8 lg:mb-16",
                    isLeft ? "" : "lg:direction-rtl"
                  )}
                >
                  {/* Content card */}
                  <div className={cn(isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:col-start-2")}>
                    <div
                      className={cn(
                        "rounded-2xl p-6 border transition-all duration-300",
                        "glass",
                        config.border,
                        config.glow,
                        status === "current" && "ring-1 ring-purple-500/30"
                      )}
                    >
                      {/* Header */}
                      <div
                        className={cn(
                          "flex items-center gap-3 mb-4",
                          isLeft ? "lg:flex-row-reverse" : ""
                        )}
                      >
                        <div
                          className={cn(
                            "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0",
                            config.bg,
                            `border ${config.border}`
                          )}
                        >
                          <Icon className={cn("w-4 h-4", config.color)} />
                        </div>
                        <div className={cn(isLeft ? "lg:text-right" : "")}>
                          <div className={cn("text-xs font-mono tracking-widest uppercase", config.color)}>
                            {phase.phase}
                          </div>
                          <div className="text-lg font-display font-bold text-white">
                            {phase.title}
                          </div>
                        </div>
                        <div className="ml-auto lg:ml-0">
                          <span className="text-xs font-mono text-purple-300/50 border border-purple-500/20 px-2 py-1 rounded-full">
                            {phase.period}
                          </span>
                        </div>
                      </div>

                      {/* Items */}
                      <ul className={cn("space-y-2", isLeft ? "lg:items-end" : "")}>
                        {phase.items.map((item) => (
                          <li
                            key={item}
                            className={cn(
                              "flex items-center gap-2 text-sm text-purple-200/60",
                              isLeft ? "lg:flex-row-reverse" : ""
                            )}
                          >
                            <div
                              className={cn(
                                "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                status === "completed"
                                  ? "bg-emerald-400"
                                  : status === "current"
                                  ? "bg-purple-400"
                                  : "bg-purple-400/25"
                              )}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {status === "current" && (
                        <div className="mt-4 flex items-center gap-2">
                          <motion.div
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                            className="w-2 h-2 bg-purple-400 rounded-full"
                          />
                          <span className="text-xs font-mono text-purple-400">
                            Active Development
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center dot on desktop */}
                  <div
                    className={cn(
                      "hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2",
                      `mt-6`
                    )}
                    style={{ top: `${i * 160 + 24}px` }}
                  >
                    <div
                      className={cn(
                        "w-4 h-4 rounded-full border-2 z-10",
                        status === "completed"
                          ? "bg-emerald-400 border-emerald-400"
                          : status === "current"
                          ? "bg-purple-500 border-purple-400 shadow-neon-sm"
                          : "bg-dark-300 border-purple-500/30"
                      )}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
