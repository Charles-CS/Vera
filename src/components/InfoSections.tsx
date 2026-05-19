"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Heart, 
  ShieldAlert, 
  Sprout, 
  Flower2, 
  Leaf, 
} from "lucide-react";

export default function InfoSections() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-40 py-24 relative z-10">
      
      {/* What you get Section - Bento Box Style Layout */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-16 w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
              What you <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic">get</span>
            </h2>
            <p className="text-neutral-500 text-lg font-light tracking-wide">
              Every identification includes all of this. Free.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full">
          {/* Large Feature */}
          <div className="lg:col-span-3 flex flex-col justify-between p-10 md:p-12 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-500 group relative overflow-hidden min-h-[300px]">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-emerald-500/20" />
            <Search className="w-12 h-12 text-emerald-400 mb-12 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
            <div>
              <h3 className="text-3xl font-semibold text-white mb-4 tracking-wide italic">Instant ID</h3>
              <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-md">
                Name, species, family, and confidence level in seconds. Fast, precise, and continually learning.
              </p>
            </div>
          </div>

          {/* Two Smaller Features Stacked */}
          <div className="lg:col-span-2 flex flex-col gap-6 w-full">
            <div className="flex flex-col justify-center p-8 md:p-10 rounded-[2rem] bg-cyan-500/5 border border-cyan-500/10 hover:border-cyan-500/20 transition-all duration-500 group relative overflow-hidden h-full min-h-[180px]">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none" />
              <div className="flex items-center gap-6 mb-4">
                <Heart className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-white tracking-wide italic">Care Guide</h3>
              </div>
              <p className="text-neutral-400 font-light leading-relaxed">
                Light, water, soil, temperature, and difficulty rating.
              </p>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10 rounded-[2rem] bg-amber-500/5 border border-amber-500/10 hover:border-amber-500/20 transition-all duration-500 group relative overflow-hidden h-full min-h-[180px]">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-500/10 blur-[60px] rounded-full pointer-events-none" />
              <div className="flex items-center gap-6 mb-4">
                <ShieldAlert className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-white tracking-wide italic">Toxicity Alerts</h3>
              </div>
              <p className="text-neutral-400 font-light leading-relaxed">
                Safety rating for humans and pets. Never guess again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse our guides Section - List Layout with Borders */}
      <section className="w-full max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Browse our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic">guides</span>
          </h2>
          <p className="text-neutral-500 text-lg font-light tracking-wide">
            Curated identification guides for popular categories.
          </p>
        </div>
        
        <div className="flex flex-col w-full">
          {/* List Item 1 */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 group border-b border-white/5 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center gap-8 md:w-1/2 mb-4 md:mb-0">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-500 shrink-0">
                <Sprout className="w-8 h-8 text-emerald-400/80 group-hover:text-emerald-400 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white italic group-hover:text-emerald-300 transition-colors">Mushroom Guide</h3>
            </div>
            <p className="text-neutral-400 font-light md:w-1/2 md:text-right text-lg leading-relaxed">
              25+ species with safety ratings and lookalike warnings.
            </p>
          </div>

          {/* List Item 2 */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 group border-b border-white/5 hover:border-pink-500/30 transition-all duration-300">
            <div className="flex items-center gap-8 md:w-1/2 mb-4 md:mb-0">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:border-pink-500/50 group-hover:bg-pink-500/10 transition-all duration-500 shrink-0">
                <Flower2 className="w-8 h-8 text-pink-400/80 group-hover:text-pink-400 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white italic group-hover:text-pink-300 transition-colors">Pink Flowers</h3>
            </div>
            <p className="text-neutral-400 font-light md:w-1/2 md:text-right text-lg leading-relaxed">
              30+ common pink flowers with photos and care tips.
            </p>
          </div>

          {/* List Item 3 */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 group border-b border-white/5 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center gap-8 md:w-1/2 mb-4 md:mb-0">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-500 shrink-0">
                <Leaf className="w-8 h-8 text-cyan-400/80 group-hover:text-cyan-400 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white italic group-hover:text-cyan-300 transition-colors">White Flowers</h3>
            </div>
            <p className="text-neutral-400 font-light md:w-1/2 md:text-right text-lg leading-relaxed">
              30+ common white flowers identified and explained.
            </p>
          </div>
        </div>
      </section>

      {/* Three steps Section - Staggered Offset Layout */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Three <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic">steps</span>
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

