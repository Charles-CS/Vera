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
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            The Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Pipeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-400 text-lg md:text-xl font-light"
          >
            A seamless, state-of-the-art workflow designed for precision, speed, and actionable ecological insights.
          </motion.p>
        </div>

        <div className="relative">
          {/* Animated Data Stream (Desktop Only) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-white/5 z-0">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
              animate={{ left: ["-50%", "150%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ width: "30%" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                className="relative group"
              >
                {/* Node Card */}
                <div className="relative h-full p-8 md:p-10 rounded-[2.5rem] bg-neutral-950/60 backdrop-blur-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl">
                  {/* Subtle hover gradient inside */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:to-cyan-500/5 transition-colors duration-500 pointer-events-none" />

                  {/* Step Number Watermark */}
                  <div className="absolute -top-6 -right-4 text-9xl font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500 select-none pointer-events-none">
                    {index + 1}
                  </div>

                  {/* Icon Container */}
                  <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner overflow-hidden">
                    <div className="absolute inset-0 bg-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                    <step.icon className="w-7 h-7 text-emerald-400 relative z-10" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Phase 0{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-wide group-hover:text-emerald-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed font-light">
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
