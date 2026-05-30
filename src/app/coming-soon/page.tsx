"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ParticleField } from "@/components/ui/ParticleField";
import { Button } from "@/components/ui/Button";
import { LudzoLogo } from "@/components/ui/LudzoLogo";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/utils";
import { Send, Clock } from "lucide-react";

// Target: 1 August 2026 00:00:00 UTC
const TARGET = new Date("2026-08-01T00:00:00Z").getTime();

function getTimeLeft() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

function Countdown() {
  const [time, setTime] = useState(getTimeLeft);
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Tick every second using setTimeout for accuracy
    const tick = () => {
      setTime(getTimeLeft());
      rafRef.current = setTimeout(tick, 1000);
    };
    rafRef.current = setTimeout(tick, 1000);
    return () => {
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, []);

  const units = [
    { v: time.d, l: "Days" },
    { v: time.h, l: "Hours" },
    { v: time.m, l: "Mins" },
    { v: time.s, l: "Secs" },
  ];

  return (
    <div className="flex items-center justify-center gap-3 my-10">
      {units.map(({ v, l }) => (
        <div
          key={l}
          className="rounded-xl border border-white/8 bg-white/3 px-4 py-4 text-center"
          style={{ minWidth: "72px" }}
        >
          <div className="text-3xl font-display font-bold grad-text tabular-nums leading-none">
            {String(v).padStart(2, "0")}
          </div>
          <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mt-1.5">
            {l}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ComingSoonPage() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0B0615]">
        <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(139,92,246,0.13)_0%,transparent_70%)]" />
        <div className="absolute inset-0 grid-pattern" />
        <ParticleField count={40} />

        <div className="relative z-10 text-center px-5 max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <LudzoLogo size="md" href="/" showTagline />
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="badge mb-6 inline-flex"
          >
            <Clock className="w-3 h-3" /> Launching July 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-display font-bold text-white mb-4 leading-tight"
          >
            Something Epic
            <br />
            <span className="grad-text">Is Coming</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-white/45 text-sm mb-0 leading-relaxed"
          >
            Ludzo is launching July 2026. Join the waitlist for early access
            and exclusive rewards.
          </motion.p>

          <Countdown />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button
              variant="telegram"
              size="lg"
              href={siteConfig.telegram.channel}
              target="_blank"
              icon={<Send className="w-4 h-4" />}
            >
              Join Telegram
            </Button>
            <Button variant="secondary" size="lg" href="/">
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
