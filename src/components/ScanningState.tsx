import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Zap } from 'lucide-react';

interface ScanningStateProps {
  imageSrc: string;
}

const SCAN_MESSAGES = [
  "Isolating leaf geometry...",
  "Cross-referencing global invasive databases...",
  "Analyzing chlorophyll concentration...",
  "Identifying morphological traits...",
  "Synthesizing botanical profile...",
];

export function ScanningState({ imageSrc }: ScanningStateProps) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % SCAN_MESSAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-8">
      {/* Scanning Image Container */}
      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
        {/* Blurred Image Background */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={imageSrc} 
            alt="Scanning subject" 
            className="w-full h-full object-cover blur-[4px] opacity-70"
          />
        </motion.div>

        {/* Scanning Laser */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-green-400 z-10"
          style={{
            boxShadow: '0 0 20px 4px rgba(74, 222, 128, 0.6), 0 0 40px 8px rgba(74, 222, 128, 0.4)'
          }}
          animate={{
            top: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Overlay grid / tech patterns for luxury feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] mix-blend-overlay pointer-events-none" />

        {/* Corner Brackets */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-green-400/60 rounded-tl-lg" />
        <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-green-400/60 rounded-tr-lg" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-green-400/60 rounded-bl-lg" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-green-400/60 rounded-br-lg" />
      </div>

      {/* Status Indicator */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="w-4 h-4 text-green-400" />
          </motion.div>
          <span className="text-xs font-semibold tracking-widest uppercase text-green-400 flex items-center gap-2">
            <Zap className="w-3 h-3" fill="currentColor" />
            Vera Engine Active
          </span>
        </div>

        <div className="h-6 relative w-72 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={messageIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-neutral-300 font-medium absolute w-full text-center"
            >
              {SCAN_MESSAGES[messageIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default ScanningState;
