"use client";

import { motion } from "framer-motion";
import { ScanLine, Cpu, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Capture Subject",
    description:
      "Upload a high-resolution image of your specimen. Our edge-optimized interface pre-processes the visual data instantly.",
    icon: ScanLine,
  },
  {
    title: "Neural Analysis",
    description:
      "Data is routed through our proprietary AI models, cross-referencing global botanical datasets in milliseconds.",
    icon: Cpu,
  },
  {
    title: "Insight Generation",
    description:
      "Receive actionable intelligence including precise species identification, health metrics, and ecological impact.",
    icon: Sparkles,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-32 md:py-48 bg-transparent overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-8"
          >
            The Intelligence <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Pipeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-400/90 text-lg md:text-xl font-light leading-relaxed"
          >
            A seamless, state-of-the-art workflow designed for precision, speed, and actionable ecological insights.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Line Desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-1/3"
              animate={{ left: ["-50%", "150%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Central Line Mobile */}
          <div className="md:hidden absolute top-[2.5rem] bottom-[2.5rem] left-[2.5rem] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent z-0">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent h-1/3"
              animate={{ top: ["-50%", "150%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                className="group relative"
              >
                <div className="flex md:flex-col items-start md:items-center gap-8 md:gap-14">
                  {/* Node Icon */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-20 h-20 rounded-full bg-neutral-950/80 backdrop-blur-xl border border-white/5 flex items-center justify-center group-hover:border-emerald-500/40 transition-all duration-700 shadow-[0_0_40px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_60px_rgba(16,185,129,0.15)]">
                      <div className="absolute inset-0 bg-emerald-400/0 group-hover:bg-emerald-400/10 rounded-full transition-colors duration-700 blur-md" />
                      <step.icon className="w-8 h-8 text-neutral-500 group-hover:text-emerald-400 transition-colors duration-700" strokeWidth={1.5} />
                    </div>
                    {/* Concentric rings on hover */}
                    <div className="absolute inset-0 rounded-full border border-emerald-500/20 opacity-0 group-hover:opacity-100 group-hover:scale-[1.5] transition-all duration-700 ease-out pointer-events-none" />
                    <div className="absolute inset-0 rounded-full border border-cyan-500/10 opacity-0 group-hover:opacity-100 group-hover:scale-[2] transition-all duration-1000 ease-out pointer-events-none" />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col pt-3 md:pt-0 text-left md:text-center">
                    <div className="flex items-center md:justify-center gap-4 mb-4">
                      <div className="w-8 h-[1px] bg-emerald-500/30 md:hidden" />
                      <span className="text-emerald-500/80 font-mono text-xs tracking-[0.2em] uppercase">
                        Phase 0{index + 1}
                      </span>
                      <div className="w-8 h-[1px] bg-emerald-500/30 md:hidden" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-5 tracking-wide group-hover:text-emerald-300 transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400/80 font-light leading-relaxed max-w-sm md:mx-auto text-base md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
