"use client";

import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import DashboardView from "@/components/DashboardView";
import { useImageContext } from "@/context/ImageContext";
import { useRouter } from "next/navigation";

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
      <section className="w-full min-h-[80vh] flex flex-col items-center justify-center pt-20 pb-10 text-center relative">
        {/* Background glow effects for Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 space-y-6 mb-12 mt-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Nature & Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto font-light">
            Discover the most advanced toolkit for botanical analysis and ecological preservation.
          </p>
        </div>

        {/* Dashboard Upload Component embedded in Hero */}
        <div className="w-full relative z-10">
          <DashboardView onAnalyze={handleHeroAnalyze} />
        </div>
      </section>

      <Features />
      
      <HowItWorks />
      
      <Footer />
    </div>
  );
}
