"use client";

import { motion } from "framer-motion";
import { ParticleField } from "@/components/ui/ParticleField";
import { Button } from "@/components/ui/Button";
import { LudzoLogo } from "@/components/ui/LudzoLogo";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/utils";
import { Send, Clock } from "lucide-react";
import { useEffect, useState } from "react";

function Countdown() {
  const target = new Date("2025-09-01T00:00:00Z");
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5 my-10">
      {[
        { v: time.d, l: "Days" },
        { v: time.h, l: "Hours" },
        { v: time.m, l: "Mins" },
        { v: time.s, l: "Secs" },
      ].map(({ v, l }) => (
        <div key={l} className="glass rounded-2xl px-5 py-4 text-center border border-purple-500/20 min-w-[72px]">
          <div className="text-3xl sm:text-4xl font-display font-black gradient-text-bright tabular-nums">
            {String(v).padStart(2, "0")}
          </div>
          <div className="text-xs font-mono text-purple-400/50 uppercase tracking-widest mt-1">{l}</div>
        </div>
      ))}
    </div>
  );
}

export default function ComingSoonPage() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-dark-400" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <ParticleField count={50} />

        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <LudzoLogo size="lg" href="/" showTagline />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 mb-6"
          >
            <Clock className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-mono text-purple-300">Launching Q3 2025</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl sm:text-6xl font-display font-black text-white mb-4"
          >
            Something Epic<br />
            <span className="neon-text">Is Coming</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-purple-200/55 mb-2 leading-relaxed"
          >
            Ludzo — the next-generation Telegram gaming platform — is almost ready. Join the waitlist for early access and exclusive rewards.
          </motion.p>

          <Countdown />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button variant="telegram" size="lg" href={siteConfig.telegram.channel} target="_blank" icon={<Send className="w-4 h-4" />}>
              Join Telegram Channel
            </Button>
            <Button variant="outline" size="lg" href="/">
              Back to Home
            </Button>
          </motion.div>
        </div>
      </main>
      <WaitlistSection />
      <Footer />
    </>
  );
}
