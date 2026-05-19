"use client";

import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-8">
      {/* HERO SECTION */}
      <section className="w-full flex flex-col lg:flex-row items-stretch justify-between max-w-7xl mx-auto px-6 lg:px-8 relative pt-10 pb-8 lg:pt-12 lg:pb-10 min-h-[400px]">
        {/* Background glow effects for Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Left Side: Title and Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0"
        >


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-[4.5rem] font-bold tracking-tight text-white leading-[1.05] mb-6"
          >
            Powered by <br className="hidden lg:block" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">Nature & Intelligence</span>
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl -z-10" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-2xl text-neutral-400 max-w-2xl font-light leading-relaxed mb-10"
          >
            Discover the world's most advanced toolkit for <strong className="text-white font-medium">botanical analysis</strong> and ecological preservation, built for the modern era.
          </motion.p>

          {/* System Status Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-6 text-sm text-neutral-500 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="tracking-wide">System Online</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="tracking-wide">99.9% Accuracy</div>
          </motion.div>
        </motion.div>

        {/* Right Side: Holographic Visual */}
        <div className="w-full lg:w-[45%] relative z-10 flex justify-center items-stretch py-4 lg:py-0">
          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-md h-full rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center overflow-visible group min-h-[400px] lg:min-h-0"
          >
            {/* Inner holographic glow */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-t from-emerald-500/20 to-transparent opacity-50 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-cyan-400/20 blur-[80px] rounded-full mix-blend-screen" />

            {/* Animated Laser Scanning Line */}
            <motion.div
              className="absolute left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,1)] z-20 opacity-80"
              animate={{ top: ['10%', '90%', '10%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />

            {/* Central Icon */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 p-10 rounded-full bg-black/50 border border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(16,185,129,0.2)]"
            >
              <Leaf className="w-20 h-20 text-emerald-400" strokeWidth={1} />
            </motion.div>

            {/* Mock Data Overlay */}
            <div className="absolute bottom-10 left-8 right-8 z-10 bg-black/60 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-neutral-400 font-medium tracking-widest uppercase">System Scan</span>
                <span className="text-xs text-emerald-400 font-bold tracking-wider">ACTIVE</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Floating Widget 1 */}
            <motion.div
              animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 top-24 bg-black/70 backdrop-blur-2xl px-5 py-3 rounded-2xl border border-white/10 flex items-center gap-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-30"
            >
              <div className="p-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Health</span>
                <span className="text-sm font-bold text-white tracking-wide">Optimal</span>
              </div>
            </motion.div>

            {/* Floating Widget 2 */}
            <motion.div
              animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -right-16 bottom-40 bg-black/70 backdrop-blur-2xl px-5 py-3 rounded-2xl border border-white/10 flex items-center gap-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-30"
            >
              <div className="p-2.5 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                <Leaf className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Target</span>
                <span className="text-sm font-bold text-white tracking-wide">Identified</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Features />

      <HowItWorks />

      <Footer />
    </div>
  );
}
