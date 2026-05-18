"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  ShieldAlert, 
  Sprout, 
  Droplets, 
  Sun, 
  Wind,
  CheckCircle2,
  Leaf
} from "lucide-react";

export interface ResultsDetailsProps {
  /** Determines which card to display */
  type?: "invasive" | "crop";

  /* --- Invasive Threat Props --- */
  threatLevel?: number; // 0 to 100
  impactDescription?: string;
  actionSteps?: string[];

  /* --- Crop Utility Props --- */
  soilConditions?: string;
  harvestCycle?: string;
  benefits?: string;
}

export default function ResultsDetails({
  type = "crop",
  
  // Default Invasive Data
  threatLevel = 85,
  impactDescription = "Highly aggressive spreader that outcompetes native flora for nutrients and sunlight. Can severely disrupt local ecosystems if not contained.",
  actionSteps = [
    "Do not compost or dispose of in open environment",
    "Carefully uproot, ensuring all rhizomes are removed",
    "Bag securely and dispose of in municipal trash",
  ],

  // Default Crop Data
  soilConditions = "Well-draining, loamy soil with a pH between 6.0 and 7.0. Benefits from organic compost enrichment.",
  harvestCycle = "Typically ready for harvest 60-80 days post-germination. Optimal during late summer to early autumn.",
  benefits = "Improves soil structure through deep root systems and attracts beneficial pollinators during flowering phase.",
}: ResultsDetailsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full max-w-6xl mx-auto p-6 md:p-12 pb-24">
      {/* 
        We use an AnimatePresence or a simple conditional to render the correct card.
        For now, we just switch based on the `type` prop.
      */}
      {type === "invasive" && (
        <InvasiveThreatCard 
          threatLevel={threatLevel} 
          impactDescription={impactDescription} 
          actionSteps={actionSteps} 
        />
      )}

      {type === "crop" && (
        <CropUtilityCard 
          soilConditions={soilConditions} 
          harvestCycle={harvestCycle} 
          benefits={benefits} 
        />
      )}
    </div>
  );
}

// ==========================================
// INVASIVE THREAT ALERT CARD
// ==========================================
function InvasiveThreatCard({ threatLevel, impactDescription, actionSteps }: any) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (threatLevel / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-red-950/40 to-black/60 backdrop-blur-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(220,38,38,0.15)] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row gap-10 md:gap-16">
        {/* Left Side: Threat Level & Overview */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-500/20 rounded-xl border border-red-500/30">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Invasive Threat Detected</h2>
          </div>

          <p className="text-red-200/80 leading-relaxed text-lg mb-8 font-light">
            {impactDescription}
          </p>

          {/* Threat Dial */}
          <div className="flex items-center gap-6 p-6 rounded-2xl bg-black/40 border border-red-500/10 w-fit">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="50%" cy="50%" r={radius} fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                <motion.circle
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  cx="50%" cy="50%" r={radius} fill="transparent" stroke="currentColor" strokeWidth="6"
                  strokeDasharray={circumference} strokeLinecap="round"
                  className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-white">{threatLevel}</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-red-400 font-semibold uppercase tracking-widest mb-1">Threat Level</p>
              <p className="text-white font-medium text-lg">Critical Risk</p>
            </div>
          </div>
        </div>

        {/* Right Side: Immediate Action Steps */}
        <div className="flex-1 bg-red-950/30 rounded-3xl p-8 border border-red-500/10">
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-semibold text-white">Recommended Action</h3>
          </div>
          <ul className="space-y-4">
            {actionSteps.map((step: string, idx: number) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 shrink-0 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                <span className="text-neutral-300 leading-relaxed font-light">{step}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================
// CROP UTILITY CARD
// ==========================================
function CropUtilityCard({ soilConditions, harvestCycle, benefits }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 backdrop-blur-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(16,185,129,0.1)] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
            <Sprout className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Cultivation & Utility</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Soil Conditions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors duration-300 rounded-3xl p-6 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/20">
                <Droplets className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Soil & Hydration</h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">{soilConditions}</p>
            </div>
          </motion.div>

          {/* Harvest Cycles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors duration-300 rounded-3xl p-6 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 border border-cyan-500/20">
                <Sun className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Harvest Cycle</h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">{harvestCycle}</p>
            </div>
          </motion.div>

          {/* Ecological Benefits */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors duration-300 rounded-3xl p-6 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/20">
                <Wind className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ecological Impact</h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">{benefits}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
