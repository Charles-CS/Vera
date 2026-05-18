"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Info } from "lucide-react";

interface ResultsOverviewProps {
  imageUrl?: string;
  commonName?: string;
  scientificName?: string;
  confidence?: number;
}

export default function ResultsOverview({
  imageUrl = "https://images.unsplash.com/photo-1550184658-ff6132a71714?q=80&w=1000&auto=format&fit=crop", // Fallback placeholder
  commonName = "Monstera Deliciosa",
  scientificName = "Monstera deliciosa Liebm.",
  confidence = 98.4,
}: ResultsOverviewProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (confidence / 100) * circumference;

  if (!mounted) return null;

  return (
    <div className="w-full max-w-6xl mx-auto p-6 pt-12 md:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Side: Uploaded Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden group bg-black/50 border border-white/10 shadow-2xl"
        >
          {/* Subtle glow behind image */}
          <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full scale-90 group-hover:scale-100 transition-transform duration-700" />
          
          <img
            src={imageUrl}
            alt="Analyzed plant"
            className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Scanning/Overlay effect purely for aesthetic framing */}
          <div className="absolute inset-0 z-20 pointer-events-none rounded-[2rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-300">Verified Match</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Luxury Results Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col relative"
        >
          {/* Glow blob behind card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 bg-black/40 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-start mb-8 gap-6">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3"
                >
                  {commonName}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-neutral-400 italic font-light"
                >
                  {scientificName}
                </motion.p>
              </div>

              {/* Confidence Gauge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative shrink-0 w-28 h-28 md:w-32 md:h-32 flex items-center justify-center"
              >
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="transparent"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="8"
                  />
                  <motion.circle
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeLinecap="round"
                    className="text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">
                    {confidence}%
                  </span>
                  <span className="text-[10px] md:text-xs text-neutral-400 font-medium uppercase tracking-widest mt-0.5">
                    Match
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2 text-neutral-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-medium">Status</span>
                  </div>
                  <p className="text-white font-semibold">Healthy</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2 text-neutral-400">
                    <Info className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">Toxicity</span>
                  </div>
                  <p className="text-white font-semibold">Mildly Toxic</p>
                </div>
              </div>

              {/* A brief taxonomy or descriptive text placeholder */}
              <p className="text-neutral-300 leading-relaxed text-sm md:text-base font-light">
                This is a classic tropical houseplant known for its distinctive natural leaf holes. It thrives in bright, indirect sunlight and requires moderate watering, making it an excellent addition to indoor spaces.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
