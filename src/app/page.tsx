"use client";

import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import DashboardView from "@/components/DashboardView";
import { useImageContext } from "@/context/ImageContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const { setSharedImageUrl } = useImageContext();
  const router = useRouter();

  const handleHeroAnalyze = (file: File, url: string) => {
    // Store the URL globally
    setSharedImageUrl(url);
    // Navigate to /analyze
    router.push("/analyze");
  };

  return (
    <div className="flex flex-col w-full gap-8">
      {/* HERO SECTION */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-8 relative pt-8 pb-8 lg:pt-10 lg:pb-10">
        {/* Background glow effects for Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Left Side: Title and Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0"
        >


          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-[4.5rem] font-bold tracking-tight text-white leading-[1.05] mb-6"
          >
            Powered by <br className="hidden lg:block" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">Nature & Intelligence</span>
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl -z-10" />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-2xl text-neutral-400 max-w-2xl font-light leading-relaxed mb-10"
          >
            Discover the world's most advanced toolkit for <strong className="text-white font-medium">botanical analysis</strong> and ecological preservation, built for the modern era.
          </motion.p>
          
          {/* System Status Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-6 text-sm text-neutral-500 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="tracking-wide">System Online</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="tracking-wide">99.9% Accuracy</div>
          </motion.div>
        </motion.div>

        {/* Right Side: Dashboard Upload Component embedded in Hero */}
        <div className="w-full lg:w-[45%] relative z-10 flex justify-center">
          <DashboardView onAnalyze={handleHeroAnalyze} hideHeader={true} />
        </div>
      </section>

      <Features />
      
      <HowItWorks />
      
      <Footer />
    </div>
  );
}
