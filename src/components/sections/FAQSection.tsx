"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";

export function FAQSection() {
  const { t } = useLanguage();
  const { ref, inView } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-400" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-mono text-purple-400/70 tracking-[0.3em] uppercase mb-4 border border-purple-500/20 px-4 py-1.5 rounded-full glass">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
            {t.faq.title}
          </h2>
          <p className="text-purple-200/55">{t.faq.subtitle}</p>
        </motion.div>

        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div
                className={cn(
                  "glass rounded-2xl border transition-all duration-300 overflow-hidden",
                  openIndex === i
                    ? "border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.1)]"
                    : "border-purple-500/10 hover:border-purple-500/25"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span
                    className={cn(
                      "text-sm font-semibold transition-colors",
                      openIndex === i ? "text-purple-200" : "text-purple-200/75"
                    )}
                  >
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300",
                      openIndex === i
                        ? "bg-purple-500/25 text-purple-300 rotate-0"
                        : "bg-white/5 text-purple-400/50 rotate-0"
                    )}
                  >
                    {openIndex === i ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-sm text-purple-200/55 leading-relaxed border-t border-purple-500/10 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
