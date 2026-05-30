"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LudzoLogo } from "@/components/ui/LudzoLogo";
import { Button } from "@/components/ui/Button";
import { ParticleField } from "@/components/ui/ParticleField";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4">
      <div className="absolute inset-0 bg-dark-400" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-bg opacity-25" />
      <ParticleField count={35} />

      <div className="relative z-10 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="text-[120px] font-display font-black leading-none gradient-text-bright opacity-20 select-none">
            404
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <LudzoLogo size="md" className="justify-center mb-6" href="/" />
          <h1 className="text-2xl font-display font-bold text-white mb-3">
            Page Not Found
          </h1>
          <p className="text-purple-200/50 mb-8 text-sm leading-relaxed">
            The page you are looking for does not exist or has been moved. Let us take you back to the game.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="primary" size="lg" href="/" icon={<Home className="w-4 h-4" />}>
              Back to Home
            </Button>
            <Button variant="ghost" size="lg" href="javascript:history.back()" icon={<ArrowLeft className="w-4 h-4" />}>
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
