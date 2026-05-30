"use client";

import { motion } from "framer-motion";
import { ParticleField } from "@/components/ui/ParticleField";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";
import { siteConfig } from "@/lib/utils";
import { Send, Bell, ChevronDown, Zap } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-dark-400" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Particles */}
      <ParticleField count={70} />

      {/* Floating orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] orb bg-purple-700/20 -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] orb bg-violet-800/20"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] orb bg-purple-600/10 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-400/30 mb-8"
        >
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"
          />
          <Zap className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-sm font-mono text-purple-300 tracking-wide">
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Main title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="mb-6"
        >
          <h1
            className="font-display font-extrabold leading-none tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white"
            >
              {t.hero.title}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl neon-text"
            >
              {t.hero.titleAccent}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl gradient-text-bright"
            >
              {t.hero.titleEnd}
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="text-base sm:text-lg md:text-xl text-purple-200/60 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            variant="telegram"
            size="xl"
            href={siteConfig.telegram.channel}
            target="_blank"
            icon={<Send className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            {t.hero.ctaJoin}
          </Button>
          <Button
            variant="primary"
            size="xl"
            onClick={scrollToWaitlist}
            icon={<Bell className="w-5 h-5" />}
            className="w-full sm:w-auto btn-pulse"
          >
            {t.hero.ctaNotify}
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.85}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: "12K+", label: t.hero.stats.waitlist },
            { value: "6", label: t.hero.stats.games },
            { value: "Daily", label: t.hero.stats.rewards },
            { value: "50+", label: t.hero.stats.countries },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-4 border border-purple-500/15"
            >
              <div className="text-2xl font-display font-bold gradient-text-bright">
                {stat.value}
              </div>
              <div className="text-xs text-purple-300/50 mt-0.5 font-mono tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link href="/#features" aria-label="Scroll to features">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-purple-400/40 hover:text-purple-400/70 transition-colors cursor-pointer"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
