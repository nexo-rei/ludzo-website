"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Bell, CheckCircle, XCircle, Sparkles } from "lucide-react";

export function WaitlistSection() {
  const { t } = useLanguage();
  const { ref, inView } = useScrollAnimation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [newsletter, setNewsletter] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newsletter }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    // Reset after 5s
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="waitlist" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-200" />

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-700/15 via-transparent to-transparent" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center shadow-neon"
          >
            <Bell className="w-7 h-7 text-white" />
          </motion.div>

          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400/70 tracking-[0.3em] uppercase mb-4 border border-purple-500/20 px-4 py-1.5 rounded-full glass">
            <Sparkles className="w-3 h-3" />
            Early Access
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t.waitlist.title}
          </h2>
          <p className="text-purple-200/55 mb-8 leading-relaxed">
            {t.waitlist.subtitle}
          </p>

          <GlassCard strong className="p-6 sm:p-8">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 py-4"
              >
                <CheckCircle className="w-12 h-12 text-emerald-400" />
                <p className="text-emerald-300 font-semibold">{t.waitlist.success}</p>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 py-4"
              >
                <XCircle className="w-12 h-12 text-red-400" />
                <p className="text-red-300 font-semibold">{t.waitlist.error}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.waitlist.placeholder}
                    required
                    className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder-purple-300/35 text-sm focus:outline-none focus:border-purple-400/60 focus:bg-white/8 transition-all"
                  />
                  <Button
                    variant="primary"
                    size="md"
                    type="submit"
                    loading={status === "loading"}
                    icon={<Bell className="w-4 h-4" />}
                    className="sm:flex-shrink-0"
                  >
                    {t.waitlist.submit}
                  </Button>
                </div>

                {/* Newsletter checkbox */}
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <div
                    onClick={() => setNewsletter(!newsletter)}
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                      newsletter
                        ? "bg-purple-600 border-purple-500"
                        : "border-purple-500/30 bg-white/5"
                    }`}
                  >
                    {newsletter && (
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-purple-300/50 group-hover:text-purple-300/70 transition-colors">
                    Also subscribe to newsletter for updates and gaming tips
                  </span>
                </label>

                <p className="text-xs text-purple-300/30">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
