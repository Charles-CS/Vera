"use client";

import { motion } from "framer-motion";
import { Upload, Cpu, AlertTriangle } from "lucide-react";

const steps = [
  {
    title: "Upload Image",
    description:
      "Simply snap a photo or upload an image of any plant, leaf, or bark. Our system instantly prepares it for high-fidelity analysis.",
    icon: Upload,
  },
  {
    title: "AI Multi-Engine Analysis",
    description:
      "The image is processed through our proprietary neural networks, cross-referencing thousands of botanical and ecological databases in milliseconds.",
    icon: Cpu,
  },
  {
    title: "Biome Threat Assessment",
    description:
      "Receive a comprehensive report on species identification, health metrics, and potential invasive threats to the surrounding ecosystem.",
    icon: AlertTriangle,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6"
          >
            How{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-vera-emerald to-emerald-200">
              Vera
            </span>{" "}
            Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 text-lg md:text-xl font-light"
          >
            A seamless intelligence workflow designed for precision, speed, and actionable insights.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical connecting line container */}
          <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
            {/* Animated glowing line */}
            <motion.div
              className="w-full h-full bg-gradient-to-b from-vera-emerald via-emerald-400 to-vera-emerald origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-16 md:space-y-32">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center justify-between group"
                >
                  {/* Left/Right Content Block */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-[45%] pl-24 md:pl-0 ${
                      isEven ? "md:text-right md:pr-16" : "md:order-2 md:pl-16"
                    }`}
                  >
                    <div className="p-8 rounded-3xl backdrop-blur-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-all duration-500 hover:shadow-glow-emerald hover:-translate-y-1 relative overflow-hidden">
                      {/* Subtle gradient hover effect inside the card */}
                      <div className="absolute inset-0 bg-gradient-to-b from-vera-emerald/0 to-transparent opacity-0 group-hover:from-vera-emerald/[0.05] group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div
                          className={`inline-block mb-4 text-vera-emerald/80 font-mono text-sm tracking-wider ${
                            isEven ? "md:mr-0" : ""
                          }`}
                        >
                          STEP 0{index + 1}
                        </div>
                        <h3 className="text-2xl font-medium text-white mb-4 tracking-tight group-hover:text-vera-emerald transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-white/50 leading-relaxed font-light text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Center Node Badge */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                    className="absolute left-10 md:left-1/2 w-16 h-16 -translate-x-1/2 rounded-full backdrop-blur-md bg-vera-black border border-white/10 flex items-center justify-center z-10 group-hover:border-vera-emerald/50 group-hover:shadow-glow-emerald transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/[0.02] flex items-center justify-center group-hover:bg-vera-emerald/20 transition-colors duration-500">
                      <step.icon
                        className="w-6 h-6 text-white/50 group-hover:text-vera-emerald transition-colors duration-500 drop-shadow-[0_0_10px_rgba(16,185,129,0)] group-hover:drop-shadow-[0_0_12px_rgba(16,185,129,1)]"
                        strokeWidth={1.5}
                      />
                    </div>
                  </motion.div>

                  {/* Empty spacer for the other side of the zig-zag on desktop */}
                  <div className={`hidden md:block w-[45%] ${isEven ? "md:order-2" : ""}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
