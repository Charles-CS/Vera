"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Mushrooms', path: '/mushrooms' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full z-50 bg-neutral-900/70 backdrop-blur-xl"
    >
      <div className="w-[90%] mx-auto flex items-center justify-between py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 overflow-hidden">
            <Leaf size={18} className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Vera<span className="text-emerald-400">.</span>
          </span>
        </Link>

        {/* Right Side: Links & CTA */}
        <div className="flex items-center gap-8">
          {/* Links */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map((item) => {
              const isActive = pathname === item.path || (item.path !== '/' && pathname?.startsWith(item.path));
              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${isActive
                        ? "text-emerald-400"
                        : "text-neutral-400 hover:text-white"
                      }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-[19px] left-0 right-0 h-[2px] bg-emerald-400"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <Link
            href="/analyze"
            className="hidden md:flex items-center justify-center px-5 py-2 rounded-full bg-emerald-500 text-sm font-semibold text-neutral-950 tracking-wide hover:bg-emerald-400 transition-colors duration-300 hover:scale-105 active:scale-95 transform"
          >
            Upload Photo
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors">
            <div className="w-5 h-0.5 bg-current mb-1.5 rounded-full" />
            <div className="w-4 h-0.5 bg-current rounded-full" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
