"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function StatsSection() {
  const { t } = useLanguage();
  const { ref, inView } = useScrollAnimation(0.3);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient band */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-violet-900/20 to-purple-900/30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Animated background glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-radial from-purple-700/20 via-transparent to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
            {t.stats.title}
          </h2>
          <p className="text-purple-200/55">{t.stats.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.stats.items.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center group"
            >
              {/* Card */}
              <div className="glass rounded-2xl p-8 border border-purple-500/15 hover:border-purple-400/30 transition-all duration-300 hover:shadow-neon">
                {/* Top glow line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent rounded-t-2xl" />

                <div className="text-4xl sm:text-5xl font-display font-black gradient-text-bright mb-2">
                  {inView ? (
                    <>
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        delay={i * 0.15}
                        separator=","
                        useEasing
                      />
                      {stat.suffix}
                    </>
                  ) : (
                    "0"
                  )}
                </div>
                <div className="text-sm text-purple-200/55 font-medium">{stat.label}</div>

                {/* Hover particle */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-neon-sm"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
