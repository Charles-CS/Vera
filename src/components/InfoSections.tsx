"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Heart, 
  ShieldAlert, 
  Sprout, 
  Flower2, 
  Leaf, 
  Camera, 
  Cpu, 
  BookOpen 
} from "lucide-react";

export default function InfoSections() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-32 py-20 relative z-10">
      
      {/* What you get Section */}
      <section className="w-full max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            What you <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic">get</span>
          </h2>
          <p className="text-neutral-400 text-lg font-light tracking-wide">
            Every identification includes all of this. Free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <Search className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide italic">Instant ID</h3>
            <p className="text-neutral-500 font-light leading-relaxed">
              Name, species, family, and confidence level in seconds.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              <Heart className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide italic">Care Guide</h3>
            <p className="text-neutral-500 font-light leading-relaxed">
              Light, water, soil, temperature, and difficulty rating.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
              <ShieldAlert className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide italic">Toxicity Alerts</h3>
            <p className="text-neutral-500 font-light leading-relaxed">
              Safety rating for humans and pets. Never guess again.
            </p>
          </div>
        </div>
      </section>

      {/* Browse our guides Section */}
      <section className="w-full max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Browse our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic">guides</span>
          </h2>
          <p className="text-neutral-400 text-lg font-light tracking-wide">
            Curated identification guides for popular categories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full">
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <Sprout className="w-10 h-10 text-emerald-400/80 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide italic">Mushroom Guide</h3>
            <p className="text-neutral-500 font-light leading-relaxed">
              25+ species with safety ratings and lookalike warnings.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <Flower2 className="w-10 h-10 text-pink-400/80 drop-shadow-[0_0_15px_rgba(244,114,182,0.5)]" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide italic">Pink Flowers</h3>
            <p className="text-neutral-500 font-light leading-relaxed">
              30+ common pink flowers with photos and care tips.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <Leaf className="w-10 h-10 text-cyan-400/80 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide italic">White Flowers</h3>
            <p className="text-neutral-500 font-light leading-relaxed">
              30+ common white flowers identified and explained.
            </p>
          </div>
        </div>
      </section>

      {/* Three steps Section */}
      <section className="w-full max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Three <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic">steps</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full relative">
          {/* Optional connecting line for large screens */}
          <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent z-0" />
          
          <div className="flex flex-col items-center text-center relative z-10 group">
            <div className="w-12 h-12 rounded-full bg-neutral-950 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-400 font-mono text-lg group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
              1
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide italic">Snap</h3>
            <p className="text-neutral-500 font-light leading-relaxed">
              Take a photo or upload one from your gallery.
            </p>
          </div>

          <div className="flex flex-col items-center text-center relative z-10 group">
            <div className="w-12 h-12 rounded-full bg-neutral-950 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-400 font-mono text-lg group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
              2
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide italic">Identify</h3>
            <p className="text-neutral-500 font-light leading-relaxed">
              AI analyzes the image and matches it to known species.
            </p>
          </div>

          <div className="flex flex-col items-center text-center relative z-10 group">
            <div className="w-12 h-12 rounded-full bg-neutral-950 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-400 font-mono text-lg group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
              3
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide italic">Learn</h3>
            <p className="text-neutral-500 font-light leading-relaxed">
              Get the name, care guide, toxicity info, and fun facts.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
