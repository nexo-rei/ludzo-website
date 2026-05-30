"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LudzoLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
  showTagline?: boolean;
}

export function LudzoLogo({ size = "md", className, href = "/", showTagline = false }: LudzoLogoProps) {
  const fontSize = { xs: 16, sm: 20, md: 26, lg: 34, xl: 46 }[size];
  const iconSize = { xs: 18, sm: 22, md: 28, lg: 36, xl: 48 }[size];
  const gap      = { xs: 7,  sm: 8,  md: 10, lg: 12, xl: 14 }[size];

  const content = (
    <div className={cn("flex flex-col gap-0.5", className)}>
      <div className="flex items-center" style={{ gap }}>
        {/* Hexagon icon mark */}
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ flexShrink: 0 }}
        >
          <defs>
            <linearGradient id="llogo-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <polygon points="20,2 37,11 37,29 20,38 3,29 3,11" fill="url(#llogo-g)" />
          {/* L letter */}
          <rect x="13" y="11" width="5" height="18" rx="1.5" fill="white" />
          <rect x="13" y="24" width="14" height="5" rx="1.5" fill="white" />
        </svg>

        {/* Wordmark — fixed width so it never clips */}
        <span
          style={{
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            fontWeight: 700,
            fontSize,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            background: "linear-gradient(135deg, #e2d9ff 0%, #8B5CF6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            whiteSpace: "nowrap",
            display: "inline-block",
            minWidth: `${fontSize * 3.2}px`,
          }}
          aria-label="Ludzo"
        >
          Ludzo
        </span>
      </div>

      {showTagline && (
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: Math.max(9, fontSize * 0.38),
            letterSpacing: "0.2em",
            color: "rgba(167,139,250,0.6)",
            textTransform: "uppercase",
            paddingLeft: iconSize + gap,
            whiteSpace: "nowrap",
          }}
        >
          Play · Earn · Dominate
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus-visible:outline-none" aria-label="Ludzo home">
        {content}
      </Link>
    );
  }
  return content;
}
