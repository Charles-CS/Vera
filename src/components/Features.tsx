"use client";

import { ScanSearch, ShieldAlert, Activity } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Instant Species Identification",
    description:
      "Instantly identify thousands of plant species with unparalleled accuracy using our advanced AI-driven visual recognition system.",
    icon: ScanSearch,
  },
  {
    title: "Invasive Alien Detection",
    description:
      "Protect local ecosystems by rapidly detecting invasive species and receiving actionable mitigation strategies.",
    icon: ShieldAlert,
  },
  {
    title: "Crop Health & Utility",
    description:
      "Monitor plant vitality, diagnose diseases early, and evaluate the overall utility and yield potential of your crops.",
    icon: Activity,
  },
];

export default function Features() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Content and List */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-12 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Powered by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Nature & Intelligence
                </span>
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl font-light max-w-xl mx-auto lg:mx-0">
                Discover the most advanced toolkit for botanical analysis and ecological preservation, built without compromise.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 group cursor-default">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20">
                      <feature.icon className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors duration-300" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed font-light group-hover:text-neutral-400 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Realistic Plant Image with Annotations */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[500px]">
            <div className="relative w-full max-w-lg aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <Image 
                src="/realistic_monstera_leaf.png"
                alt="Realistic Plant Analysis"
                fill
                className="object-cover"
                priority
              />
              
              {/* Subtle gradient overlay to darken edges slightly for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />

              {/* Overlay Annotations */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                
                {/* Annotation 1 (Top Right) */}
                <div className="absolute top-[20%] right-[10%] flex items-center flex-row-reverse">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,1)]" />
                  <div className="w-12 h-[1.5px] bg-gradient-to-l from-emerald-400/80 to-transparent" />
                  <div className="mr-3 px-4 py-2 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-emerald-500/30 text-xs font-semibold text-emerald-300 whitespace-nowrap shadow-xl">
                    99.9% Monstera Deliciosa
                  </div>
                </div>

                {/* Annotation 2 (Middle Left) */}
                <div className="absolute top-[45%] left-[8%] flex items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]" />
                  <div className="w-16 h-[1.5px] bg-gradient-to-r from-cyan-400/80 to-transparent" />
                  <div className="ml-3 px-4 py-2 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-cyan-500/30 text-xs font-semibold text-cyan-300 whitespace-nowrap shadow-xl">
                    Chlorophyll: Optimal
                  </div>
                </div>

                {/* Annotation 3 (Bottom Right) */}
                <div className="absolute bottom-[25%] right-[25%] flex items-center flex-row-reverse">
                  <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                  <div className="w-10 h-[1.5px] bg-gradient-to-l from-white/80 to-transparent" />
                  <div className="mr-3 px-4 py-2 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-neutral-300 whitespace-nowrap shadow-xl">
                    Turgor Pressure: High
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
