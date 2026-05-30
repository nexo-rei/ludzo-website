"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LudzoLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
  showTagline?: boolean;
}

const sizes = {
  sm: { w: 90, h: 28, font: 22 },
  md: { w: 120, h: 36, font: 28 },
  lg: { w: 160, h: 48, font: 38 },
  xl: { w: 220, h: 68, font: 52 },
};

export function LudzoLogo({
  size = "md",
  className,
  href = "/",
  showTagline = false,
}: LudzoLogoProps) {
  const s = sizes[size];

  const logo = (
    <div className={cn("flex flex-col items-start select-none", className)}>
      <svg
        width={s.w}
        height={s.h}
        viewBox={`0 0 ${s.w} ${s.h}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Ludzo logo"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <filter id="logoGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Geometric L icon mark */}
          <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e879f9" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        {/* Icon mark — hexagonal with L */}
        <g filter="url(#logoGlow)">
          <polygon
            points={`${s.h * 0.12},${s.h * 0.28} ${s.h * 0.5},${s.h * 0.04} ${s.h * 0.88},${s.h * 0.28} ${s.h * 0.88},${s.h * 0.72} ${s.h * 0.5},${s.h * 0.96} ${s.h * 0.12},${s.h * 0.72}`}
            fill="url(#iconGrad)"
            opacity="0.9"
          />
          {/* L shape inside hexagon */}
          <rect
            x={s.h * 0.28}
            y={s.h * 0.22}
            width={s.h * 0.1}
            height={s.h * 0.5}
            fill="white"
            rx="2"
          />
          <rect
            x={s.h * 0.28}
            y={s.h * 0.62}
            width={s.h * 0.32}
            height={s.h * 0.1}
            fill="white"
            rx="2"
          />
        </g>

        {/* LUDZO wordmark */}
        <text
          x={s.h + s.h * 0.22}
          y={s.h * 0.73}
          fontFamily="'Syne', 'Arial Black', sans-serif"
          fontWeight="800"
          fontSize={s.font}
          fill="url(#logoGrad)"
          filter="url(#logoGlow)"
          letterSpacing="2"
        >
          LUDZO
        </text>
      </svg>

      {showTagline && (
        <span
          className="text-xs font-mono tracking-[0.3em] uppercase mt-0.5"
          style={{
            color: "rgba(168,85,247,0.7)",
            paddingLeft: `${s.h + s.h * 0.22}px`,
          }}
        >
          Play. Earn. Dominate.
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus-visible:outline-none group">
        {logo}
      </Link>
    );
  }

  return logo;
}
