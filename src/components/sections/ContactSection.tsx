"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { siteConfig } from "@/lib/utils";
import { Mail, Send, MessageSquare, CheckCircle, XCircle } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();
  const { ref, inView } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder-purple-300/35 text-sm focus:outline-none focus:border-purple-400/60 focus:bg-white/7 transition-all";

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-300" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-mono text-purple-400/70 tracking-[0.3em] uppercase mb-4 border border-purple-500/20 px-4 py-1.5 rounded-full glass">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-purple-200/55 max-w-lg mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <GlassCard className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-purple-400/60 font-mono uppercase tracking-wide">Support</div>
                  <a
                    href={`mailto:${siteConfig.email.support}`}
                    className="text-sm text-white hover:text-purple-300 transition-colors"
                  >
                    {siteConfig.email.support}
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-purple-400/60 font-mono uppercase tracking-wide">General</div>
                  <a
                    href={`mailto:${siteConfig.email.contact}`}
                    className="text-sm text-white hover:text-purple-300 transition-colors"
                  >
                    {siteConfig.email.contact}
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#229ED9]/15 border border-[#229ED9]/25 flex items-center justify-center">
                  <Send className="w-4 h-4 text-[#229ED9]" />
                </div>
                <div>
                  <div className="text-xs text-purple-400/60 font-mono uppercase tracking-wide">Telegram</div>
                  <a
                    href={siteConfig.telegram.channel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-[#229ED9] transition-colors"
                  >
                    {siteConfig.telegram.bot}
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-purple-400/60 font-mono uppercase tracking-wide">Response Time</div>
                  <p className="text-sm text-white">Within 24 hours</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <GlassCard strong className="p-6 sm:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-emerald-400" />
                  <div>
                    <p className="text-lg font-semibold text-white mb-1">{t.contact.form.success}</p>
                    <p className="text-sm text-purple-200/50">We will respond to {form.email || "your email"} shortly.</p>
                  </div>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-4 py-12 text-center"
                >
                  <XCircle className="w-16 h-16 text-red-400" />
                  <p className="text-red-300 font-semibold">{t.contact.form.error}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-purple-400/60 uppercase tracking-wide mb-1.5">
                        {t.contact.form.name}
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-purple-400/60 uppercase tracking-wide mb-1.5">
                        {t.contact.form.email}
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-purple-400/60 uppercase tracking-wide mb-1.5">
                      {t.contact.form.subject}
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Partnership / Support / Feedback"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-purple-400/60 uppercase tracking-wide mb-1.5">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry..."
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={status === "loading"}
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                    className="w-full"
                  >
                    {t.contact.form.submit}
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
