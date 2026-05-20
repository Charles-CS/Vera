/** Vera - Landing Page */
"use client";

import Features from "@/components/Features";
import InfoSections from "@/components/InfoSections";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, Camera, Upload, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Basic file validation
    if (file && file.type.startsWith("image/")) {
      // Logic to transition to analysis can be added here
      console.log("File selected:", file.name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col w-full gap-8">
      {/* HERO SECTION */}
      <section className="w-full flex flex-col items-center justify-center max-w-5xl mx-auto px-6 lg:px-8 relative pt-8 pb-8 lg:pt-12 lg:pb-10 min-h-[70vh]">
        {/* Background glow effects for Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] text-center mb-4"
        >
          Know your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic font-medium">plants.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 text-sm md:text-base text-neutral-400 max-w-2xl text-center font-light leading-relaxed mb-8"
        >
          Capture any botanical specimen for immediate, high-precision analysis. Unlock instant species identification, comprehensive cultivation protocols, and critical toxicity data.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mb-8 w-full justify-center"
        >
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold tracking-wide text-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
          >
            <Upload className="w-4 h-4" />
            <span>UPLOAD A PHOTO</span>
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 bg-black/50 backdrop-blur-md border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 hover:text-emerald-300 font-bold tracking-wide text-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
            <Camera className="w-4 h-4" />
            <span>USE CAMERA</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative z-10 w-full max-w-xl border-2 border-dashed rounded-[2rem] p-12 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
            isDragging 
              ? "border-emerald-400 bg-emerald-500/10 scale-[1.02] shadow-[0_0_40px_rgba(16,185,129,0.2)]" 
              : "border-emerald-500/30 bg-neutral-950/40 hover:bg-emerald-500/5 hover:border-emerald-500/50 backdrop-blur-xl"
          }`}
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            className="hidden" 
          />
          
          <div className="relative mb-6 group">
            <div className="p-4 bg-emerald-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />
            </div>
            <div className="absolute -top-2 -right-2 p-1 bg-black rounded-full shadow-lg">
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-light text-emerald-400 mb-3 italic tracking-wide">
            Drop a photo here
          </h3>
          <p className="text-neutral-500 text-sm tracking-wide">
            or click to browse - JPG, PNG, WEBP up to 10MB
          </p>
        </motion.div>


      </section>

      <Features />

      <InfoSections />

      <HowItWorks />

      <Footer />
    </div>
  );
}
