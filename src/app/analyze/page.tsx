"use client";

import React, { useState, useEffect } from "react";
import DashboardView from "@/components/DashboardView";
import ScanningState from "@/components/ScanningState";
import ResultsOverview from "@/components/ResultsOverview";
import ResultsDetails from "@/components/ResultsDetails";
import { motion, AnimatePresence } from "framer-motion";
import { useImageContext } from "@/context/ImageContext";

type AppState = "IDLE" | "SCANNING" | "RESULTS";

export default function AnalyzePage() {
  const { sharedImageUrl, setSharedImageUrl } = useImageContext();
  const [appState, setAppState] = useState<AppState>(sharedImageUrl ? "SCANNING" : "IDLE");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(sharedImageUrl);
  const [mockResultType, setMockResultType] = useState<"invasive" | "crop">("invasive");

  // If a shared image comes in (e.g. from the home page), run the scan automatically.
  useEffect(() => {
    if (sharedImageUrl && appState === "SCANNING") {
      setMockResultType(Math.random() > 0.5 ? "invasive" : "crop");
      const timer = setTimeout(() => {
        setAppState("RESULTS");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [sharedImageUrl, appState]);

  const handleAnalyze = (file: File, url: string) => {
    setImageFile(file);
    setImageUrl(url);
    setAppState("SCANNING");

    // Randomize the result type for demonstration purposes
    setMockResultType(Math.random() > 0.5 ? "invasive" : "crop");
    
    // Mock a 3-second scanning process
    setTimeout(() => {
      setAppState("RESULTS");
    }, 3000);
  };

  const handleReset = () => {
    setAppState("IDLE");
    setImageFile(null);
    setImageUrl(null);
    setSharedImageUrl(null);
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-12%] left-[-10%] w-[48%] h-[48%] rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute bottom-[8%] right-[-12%] w-[42%] h-[52%] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-0 py-0">
      <AnimatePresence mode="wait">
        {/* IDLE STATE */}
        {appState === "IDLE" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <DashboardView onAnalyze={handleAnalyze} />
          </motion.div>
        )}

        {/* SCANNING STATE */}
        {appState === "SCANNING" && imageUrl && (
          <motion.div
            key="scanning"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col items-center justify-center w-full px-4"
          >
            <ScanningState imageSrc={imageUrl} />
          </motion.div>
        )}

        {/* RESULTS STATE */}
        {appState === "RESULTS" && imageUrl && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full flex flex-col items-center"
          >
            {/* The ResultsOverview component expects an image url */}
            <ResultsOverview 
              imageUrl={imageUrl} 
              commonName={mockResultType === "invasive" ? "Japanese Knotweed" : "Monstera Deliciosa"}
              scientificName={mockResultType === "invasive" ? "Reynoutria japonica" : "Monstera deliciosa Liebm."}
              confidence={Math.floor(Math.random() * 10) + 90 + Math.random()} // random 90-99.9%
            />
            
            {/* The ResultsDetails component toggles via the type prop */}
            <ResultsDetails type={mockResultType} />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-2 mb-12 flex justify-center"
            >
               <button 
                 onClick={handleReset}
                 className="px-8 py-3 rounded-full bg-white/5 text-white border border-white/20 font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-md shadow-lg"
               >
                 Scan Another Plant
               </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
