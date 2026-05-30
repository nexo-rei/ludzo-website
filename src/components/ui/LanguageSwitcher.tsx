"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "flex items-center gap-0 rounded-lg overflow-hidden border border-purple-500/20 bg-white/5",
        className
      )}
    >
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200",
          language === "en"
            ? "bg-purple-600/80 text-white"
            : "text-purple-300/70 hover:text-purple-200 hover:bg-white/5"
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("hi")}
        className={cn(
          "px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200",
          language === "hi"
            ? "bg-purple-600/80 text-white"
            : "text-purple-300/70 hover:text-purple-200 hover:bg-white/5"
        )}
        aria-label="Switch to Hindi"
      >
        हिं
      </button>
    </div>
  );
}
