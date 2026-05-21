"use client";

import React from "react";
import { Leaf } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  size?: number;
  compact?: boolean;
  className?: string;
}

export default function Logo({ size = 36, compact = false, className = "" }: LogoProps) {
  const iconSize = Math.round(size * 0.5);
  return (
    <Link href="/" aria-label="Vera home" className={`flex items-center gap-3 group ${className}`}>
      <div
        style={{ width: size, height: size }}
        className={`rounded-lg flex items-center justify-center border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 overflow-hidden`}
      >
        <Leaf size={iconSize} className="text-emerald-400" strokeWidth={2.2} />
      </div>
      {!compact && (
        <span className="text-xl font-bold tracking-tight text-white">
          Vera<span className="text-emerald-400">.</span>
        </span>
      )}
    </Link>
  );
}
