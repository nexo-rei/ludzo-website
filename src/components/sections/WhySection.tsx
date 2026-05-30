"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Rocket,
  Coins,
  Users,
  Eye,
  RefreshCw,
  Globe,
} from "lucide-react";

const icons = [Rocket, Coins, Users, Eye, RefreshCw, Globe];

export function WhySection() {
  const { t } = useLanguage();
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="why" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-200" />
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 orb bg-purple-900/15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-purple-400/70 tracking-[0.3em] uppercase mb-4 border border-purple-500/20 px-4 py-1.5 rounded-full glass">
            Why Ludzo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t.why.title}
          </h2>
          <p className="text-base text-purple-200/55 max-w-lg mx-auto">
            {t.why.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard hover className="p-6 h-full group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/25 transition-all duration-300">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-sm mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-purple-200/55 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
