"use client";

import { motion } from "framer-motion";
import { ScanSearch, ShieldAlert, Activity } from "lucide-react";

const features = [
  {
    title: "Instant Species Identification",
    description:
      "Instantly identify thousands of plants species with unparalleled accuracy using our advanced AI-driven visual recognition system.",
    icon: ScanSearch,
  },
  {
    title: "Invasive Alien Detection",
    description:
      "Protect local ecosystems by rapidly detecting invasive species and receiving actionable mitigation strategies.",
    icon: ShieldAlert,
  },
  {
    title: "Crop Health & Utility Assessment",
    description:
      "Monitor plant vitality, diagnose diseases early, and evaluate the overall utility and yield potential of your crops.",
    icon: Activity,
  },
];

export default function Features() {
  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6"
          >
            Powered by{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-vera-emerald to-emerald-200">
              Nature & Intelligence
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 text-lg md:text-xl font-light"
          >
            Discover the most advanced toolkit for botanical analysis and ecological preservation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative rounded-3xl p-8 backdrop-blur-xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-emerald hover:bg-white/[0.06]"
            >
              {/* Subtle inner top glow effect on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-vera-emerald/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-8 inline-flex p-4 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:bg-vera-emerald/10 group-hover:border-vera-emerald/20 transition-colors duration-500">
                  <feature.icon
                    className="w-8 h-8 text-vera-emerald transition-all duration-500 group-hover:scale-110 group-hover:brightness-125 drop-shadow-[0_0_12px_rgba(16,185,129,0.7)] group-hover:drop-shadow-[0_0_20px_rgba(16,185,129,1)]"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-white/50 leading-relaxed font-light text-lg">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
