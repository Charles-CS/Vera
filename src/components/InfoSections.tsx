"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Heart, 
  ShieldAlert, 
} from "lucide-react";

export default function InfoSections() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-40 py-24 relative z-10">
      
      {/* What you get Section - Split Layout */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Left Side: Title and Subtitle */}
        <div className="lg:col-span-5 text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 pb-2">
            What you <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic px-2 inline-block">get</span>
          </h2>
          <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-md">
            Every identification includes all of this. Free, forever, and continuously updated with new botanical discoveries.
          </p>
          {/* Subtle line accent */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mt-8 opacity-60" />
        </div>
        
        {/* Right Side: Clean Vertical stack */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          
          {/* Item 1 */}
          <div className="flex gap-6 items-start p-6 rounded-2xl bg-neutral-950/20 border border-white/5 hover:border-emerald-500/20 hover:bg-emerald-500/[0.01] transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Search className="w-6 h-6 text-emerald-400" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">Instant ID</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Name, species, family, and confidence level in seconds. Fast, precise, and continually learning.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-6 items-start p-6 rounded-2xl bg-neutral-950/20 border border-white/5 hover:border-cyan-500/20 hover:bg-cyan-500/[0.01] transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 h-6 text-cyan-400" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">Care Guide</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Light, water, soil, temperature, and difficulty rating. Everything you need to keep your plant thriving.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-6 items-start p-6 rounded-2xl bg-neutral-950/20 border border-white/5 hover:border-amber-500/20 hover:bg-amber-500/[0.01] transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <ShieldAlert className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors">Toxicity Alerts</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Safety rating for humans and pets. Never guess again when it comes to the well-being of your loved ones.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* Three steps Section - Staggered Offset Layout */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 pb-2">
            Three <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic px-2 inline-block">steps</span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-20 w-full relative">
          
          <div className="flex flex-col items-start relative z-10 group w-full md:w-1/3 mt-0 md:mt-0">
            <div className="text-[8rem] leading-none font-bold text-neutral-900/60 absolute -top-12 -left-8 z-0 pointer-events-none group-hover:text-emerald-950/60 transition-colors duration-700 font-serif italic">
              1
            </div>
            <div className="relative z-10 pt-12">
              <h3 className="text-3xl font-semibold text-white mb-4 tracking-wide">Snap</h3>
              <p className="text-neutral-400 font-light leading-relaxed text-lg">
                Take a photo or upload one from your gallery.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start relative z-10 group w-full md:w-1/3 mt-12 md:mt-24">
            <div className="text-[8rem] leading-none font-bold text-neutral-900/60 absolute -top-12 -left-8 z-0 pointer-events-none group-hover:text-cyan-950/60 transition-colors duration-700 font-serif italic">
              2
            </div>
            <div className="relative z-10 pt-12">
              <h3 className="text-3xl font-semibold text-white mb-4 tracking-wide">Identify</h3>
              <p className="text-neutral-400 font-light leading-relaxed text-lg">
                AI analyzes the image and matches it to known species.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start relative z-10 group w-full md:w-1/3 mt-24 md:mt-48">
            <div className="text-[8rem] leading-none font-bold text-neutral-900/60 absolute -top-12 -left-8 z-0 pointer-events-none group-hover:text-amber-950/60 transition-colors duration-700 font-serif italic">
              3
            </div>
            <div className="relative z-10 pt-12">
              <h3 className="text-3xl font-semibold text-white mb-4 tracking-wide">Learn</h3>
              <p className="text-neutral-400 font-light leading-relaxed text-lg">
                Get the name, care guide, toxicity info, and fun facts.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

