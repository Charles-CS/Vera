import { ArrowRight, Leaf, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full pt-16 pb-8 overflow-hidden bg-transparent border-t border-white/5 mt-16">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* CTA Banner / Glowing Pod */}
        <div className="relative rounded-[2rem] p-10 md:p-16 mb-24 overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl group">
          {/* Subtle animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-vera-emerald/10 via-transparent to-vera-emerald/5 opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
                Ready to protect your local biome?
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Join our network of ecologists, farmers, and enthusiasts. Start by scanning your first plant today.
              </p>
            </div>
            
            <button className="shrink-0 flex items-center gap-3 px-8 py-4 rounded-full bg-white text-vera-black font-medium hover:bg-vera-emerald hover:text-white transition-all duration-300 hover:shadow-glow-emerald group/btn">
              <span>Scan Now</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-vera-emerald" />
            <span className="text-white text-xl font-medium tracking-wide">Vera</span>
          </div>

          <div className="flex items-center gap-6 text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors duration-300">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500 font-light">
          <p>© {new Date().getFullYear()} Vera Intelligence. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
