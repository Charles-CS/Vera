"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
    >
      <div className="flex items-center justify-between px-6 py-3.5 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 shadow-glass glass-shine">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:shadow-glow-emerald group-hover:scale-105 transition-all duration-300">
            <Leaf size={18} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-semibold tracking-wide text-white group-hover:text-emerald-50 transition-colors">Vera</span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {['Home', 'Analyze', 'Database'].map((item) => (
            <li key={item}>
              <Link 
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="hover:text-emerald-400 hover:text-shadow-sm transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link 
          href="/app"
          className="relative px-6 py-2.5 rounded-full overflow-hidden group bg-emerald-500/90 text-white font-medium text-sm transition-all duration-300 hover:shadow-glow-emerald hover:-translate-y-0.5 border border-emerald-400/50"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center gap-2">
            Launch App
          </span>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
