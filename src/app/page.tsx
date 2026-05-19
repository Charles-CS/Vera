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
      <section className="w-full flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-8 relative pt-8 pb-8 lg:pt-10 lg:pb-10">
        {/* Background glow effects for Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Left Side: Title and Text */}
        <div className="relative z-10 w-full lg:w-[50%] space-y-8 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Powered by <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Nature & Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto lg:mx-0 font-light">
            Discover the most advanced toolkit for botanical analysis and ecological preservation.
          </p>
        </div>

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
