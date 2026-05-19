"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Analyze', path: '/analyze' },
    { name: 'Database', path: '/database' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-1/2 z-50 w-full max-w-5xl transition-all duration-500 top-[26px] ${
        isScrolled ? "px-4" : "px-6"
      }`}
    >
      <div className="relative flex items-center justify-between px-6 py-3 rounded-full bg-neutral-950/70 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden group/nav">
        
        {/* Subtle animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Leaf size={20} className="text-emerald-400 relative z-10 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Vera<span className="text-emerald-400">.</span>
          </span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/5 shadow-inner">
          {links.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/' && pathname?.startsWith(item.path));
            return (
              <li key={item.name}>
                <Link 
                  href={item.path}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center ${
                    isActive 
                      ? "text-white" 
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10 shadow-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <Link 
          href="/analyze"
          className="relative z-10 hidden md:flex items-center justify-center px-6 py-2.5 overflow-hidden rounded-full group/btn transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-500 to-emerald-400 opacity-80 group-hover/btn:opacity-100 transition-opacity duration-300 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]" />
          <div className="absolute inset-[1px] bg-neutral-950 rounded-full transition-colors duration-300 group-hover/btn:bg-neutral-900/80" />
          
          <span className="relative z-10 flex items-center gap-2 text-sm font-semibold text-white tracking-wide">
            Start Analysis
          </span>
        </Link>
        
        {/* Mobile Menu Button (Placeholder) */}
        <button className="md:hidden relative z-10 p-2 text-neutral-400 hover:text-white transition-colors">
          <div className="w-5 h-0.5 bg-current mb-1.5 rounded-full" />
          <div className="w-4 h-0.5 bg-current rounded-full" />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
