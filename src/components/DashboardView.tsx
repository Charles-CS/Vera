"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, Image as ImageIcon, X, Sparkles, Leaf } from "lucide-react";

interface DashboardViewProps {
  onAnalyze?: (file: File, previewUrl: string) => void;
  hideHeader?: boolean;
}

type ImageOrientation = "landscape" | "portrait" | "square";

export default function DashboardView({ onAnalyze, hideHeader = false }: DashboardViewProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageOrientation, setImageOrientation] = useState<ImageOrientation>("landscape");
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setImageOrientation("landscape");
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileChange(e.target.files[0]);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setImageOrientation("landscape");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handlePreviewLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;

    if (naturalWidth > naturalHeight) {
      setImageOrientation("landscape");
      return;
    }

    if (naturalHeight > naturalWidth) {
      setImageOrientation("portrait");
      return;
    }

    setImageOrientation("square");
  };

  return (
    <div className={`w-full max-w-5xl mx-auto px-6 py-2 md:px-8 ${hideHeader ? 'pt-2' : 'pt-3 md:pt-4'}`}>
      {!hideHeader && (
        <div className="mx-auto mb-5 max-w-3xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-3"
          >
            Know your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic font-medium">plants.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-sm md:text-base text-neutral-400 leading-relaxed"
          >
            Capture any botanical specimen for immediate analysis. Upload one clear photo and move straight into the scan.
          </motion.p>
        </div>
      )}

      <motion.div
        className="relative w-full max-w-3xl mx-auto group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !selectedFile && fileInputRef.current?.click()}
      >
        {/* Animated gradient border effect */}
        <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-b transition-all duration-500 ${
          isDragging 
            ? "from-emerald-400 via-cyan-500 to-emerald-400 opacity-100 blur-md" 
            : "from-white/20 to-white/5 opacity-50 group-hover:opacity-100 group-hover:from-emerald-500/50 group-hover:to-cyan-500/50 blur-sm"
        }`} />
        
        {/* Main Card */}
        <div className={`relative w-full rounded-[2rem] overflow-hidden transition-all duration-500 backdrop-blur-2xl border border-white/10 ${
          isDragging
            ? "bg-black/60 shadow-[0_0_80px_rgba(16,185,129,0.3)]"
            : "bg-black/40 hover:bg-black/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
        }`}>
          
          {/* Ambient Glows inside card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-emerald-500/10 blur-[100px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-500/10 blur-[100px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleInputChange}
            accept="image/*"
            className="hidden"
          />

          <div className="p-6 md:p-8 flex flex-col items-center justify-center min-h-[280px] text-center cursor-pointer relative z-10">
            <AnimatePresence mode="wait">
              {!previewUrl ? (
                <motion.div
                  key="upload-prompt"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center pointer-events-none w-full"
                >
                  {/* Floating Icon Area */}
                  <div className="relative mb-6 mt-1 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-35 transition-opacity duration-500 group-hover:opacity-60" />
                    <div className="relative p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-center">
                      <UploadCloud className="w-11 h-11 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-light text-white mb-2 tracking-wide">
                    Upload a clear photo
                  </h3>
                  <p className="text-neutral-400 mb-6 max-w-md leading-relaxed text-sm md:text-base font-light">
                    Drag and drop your image here, or tap to browse. One photo is enough to begin.
                  </p>
                  
                  <button
                    type="button"
                    className="pointer-events-auto relative group/btn w-full max-w-md overflow-hidden rounded-full p-[1px] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-full opacity-90 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center gap-2 rounded-full bg-black/80 px-8 py-3.5 backdrop-blur-md transition-all duration-300 group-hover/btn:bg-black/60">
                      <span className="text-white font-medium tracking-wide text-sm uppercase">Select Image</span>
                    </div>
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="image-preview"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`w-full flex flex-col items-center cursor-default z-20 ${
                    imageOrientation === "landscape" ? "max-w-4xl" : "max-w-2xl"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={`relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-neutral-900 ${
                    imageOrientation === "landscape"
                      ? "aspect-video"
                      : imageOrientation === "portrait"
                        ? "aspect-[4/5] max-h-[72vh]"
                        : "aspect-square max-h-[68vh]"
                  }`}>
                    <img
                      src={previewUrl}
                      alt="Preview"
                      onLoad={handlePreviewLoad}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Simulated scanning laser line */}
                    <motion.div 
                      className="absolute left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)] z-10 pointer-events-none opacity-50"
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent pointer-events-none opacity-50 mix-blend-overlay" />

                    {/* Hover overlay to remove */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-md z-20">
                      <button
                        onClick={clearFile}
                        className="p-4 bg-white/10 hover:bg-red-500 text-white rounded-full transition-all duration-300 mb-3 hover:scale-110 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-white/20"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      <p className="text-white font-medium text-sm tracking-wide">Remove Image</p>
                    </div>
                  </div>
                  
                  {/* Info and action button bar */}
                  <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 bg-white/5 px-6 py-4 rounded-2xl border border-white/10 w-full backdrop-blur-xl shadow-xl relative overflow-hidden">
                    {/* Subtle glow behind the bar */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-50 pointer-events-none" />
                    
                    <div className="flex items-center gap-4 flex-1 w-full sm:w-auto relative z-10">
                      <div className="p-3 bg-white/10 border border-white/10 rounded-xl shadow-inner">
                        <ImageIcon className="w-6 h-6 text-emerald-300" />
                      </div>
                      <div className="text-left overflow-hidden flex-1">
                        <p className="text-white font-medium truncate text-sm md:text-base">{selectedFile?.name}</p>
                        <p className="text-neutral-400 text-xs md:text-sm">
                          {(selectedFile!.size / (1024 * 1024)).toFixed(2)} MB • Ready for analysis
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        if (onAnalyze && selectedFile && previewUrl) {
                          onAnalyze(selectedFile, previewUrl);
                        }
                      }}
                      className="w-full sm:w-auto relative group/analyze overflow-hidden rounded-full p-[1px] transition-transform duration-300 hover:scale-105 active:scale-95 z-10"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-500 to-emerald-400 rounded-full opacity-100" />
                      <div className="relative px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-300 group-hover/analyze:opacity-90 flex items-center justify-center gap-2">
                        <span className="text-white font-semibold tracking-wide shadow-sm">Analyze Plant</span>
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
