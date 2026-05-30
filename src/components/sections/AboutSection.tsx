"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/utils";
import { Send, Shield, Zap, Globe } from "lucide-react";

const pillars = [
  { icon: Zap, label: "Lightning Fast", desc: "Instant gameplay, zero lag" },
  { icon: Shield, label: "Fully Secure", desc: "End-to-end encrypted" },
  { icon: Globe, label: "Global Ready", desc: "50+ countries supported" },
];

export function AboutSection() {
  const { t } = useLanguage();
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-300" />

      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] orb bg-purple-800/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-mono text-purple-400/70 tracking-[0.3em] uppercase mb-4 border border-purple-500/20 px-4 py-1.5 rounded-full glass">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              {t.about.title}
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-purple-200/65 leading-relaxed">
                {t.about.paragraph1}
              </p>
              <p className="text-purple-200/65 leading-relaxed">
                {t.about.paragraph2}
              </p>
              <p className="text-purple-200/65 leading-relaxed">
                {t.about.paragraph3}
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              href={siteConfig.telegram.channel}
              target="_blank"
              icon={<Send className="w-4 h-4" />}
            >
              Join Our Community
            </Button>
          </motion.div>

          {/* Right — Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Main visual */}
            <GlassCard strong className="p-8 relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-radial from-purple-600/10 via-transparent to-transparent" />

              <div className="relative z-10 text-center">
                {/* Large icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 mx-auto mb-6 rounded-full border border-purple-500/20 flex items-center justify-center relative"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-violet-800 flex items-center justify-center shadow-neon">
                    {/* Controller icon */}
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
                      <rect x="2" y="7" width="20" height="12" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M6 13h4M8 11v4M15 12h2M15 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  {/* Orbit dots */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full -translate-x-1/2 -translate-y-1" />
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-violet-400 rounded-full" />
                  </motion.div>
                </motion.div>

                <div className="text-4xl font-display font-black gradient-text mb-1">
                  LUDZO
                </div>
                <div className="text-xs font-mono text-purple-400/60 tracking-[0.3em] uppercase">
                  Gaming Platform
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

                <div className="text-sm text-purple-200/55 font-mono">
                  Launching <span className="text-purple-300 font-semibold">Q3 2025</span>
                </div>
              </div>
            </GlassCard>

            {/* Pillars */}
            <div className="grid grid-cols-3 gap-3">
              {pillars.map(({ icon: Icon, label, desc }) => (
                <GlassCard key={label} className="p-4 text-center">
                  <Icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                  <div className="text-xs font-semibold text-white mb-0.5">{label}</div>
                  <div className="text-xs text-purple-300/40">{desc}</div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
