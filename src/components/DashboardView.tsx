"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, Image as ImageIcon, X } from "lucide-react";

interface DashboardViewProps {
  onAnalyze?: (file: File, previewUrl: string) => void;
}

export default function DashboardView({ onAnalyze }: DashboardViewProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
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
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 pt-12 md:pt-24">
      <div className="text-center mb-10">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 mb-4"
        >
          Analyze Your Plant
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-lg"
        >
          Upload an image to identify species, detect diseases, and assess health.
        </motion.p>
      </div>

      <motion.div
        className={`relative w-full rounded-3xl overflow-hidden border-2 border-dashed transition-all duration-300 ease-in-out ${
          isDragging
            ? "border-emerald-500 bg-emerald-500/10 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
            : "border-white/10 bg-black/40 hover:border-emerald-500/50 hover:bg-black/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
        } backdrop-blur-xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !selectedFile && fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleInputChange}
          accept="image/*"
          className="hidden"
        />

        <div className="p-10 md:p-16 flex flex-col items-center justify-center min-h-[450px] text-center cursor-pointer relative z-10">
          <AnimatePresence mode="wait">
            {!previewUrl ? (
              <motion.div
                key="upload-prompt"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center pointer-events-none"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-8 p-6 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/5 relative group"
                >
                  <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <UploadCloud className="w-14 h-14 text-emerald-400 relative z-10" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Drag & Drop Image Here
                </h3>
                <p className="text-neutral-400 mb-8 max-w-sm leading-relaxed">
                  Support for JPG, PNG, and WebP up to 10MB. High resolution images yield better analysis results.
                </p>
                <button
                  type="button"
                  className="pointer-events-auto px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                >
                  Browse Files
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="image-preview"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-2xl flex flex-col items-center cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-black">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm">
                    <button
                      onClick={clearFile}
                      className="p-4 bg-red-500/90 hover:bg-red-500 text-white rounded-full transition-all duration-300 mb-3 hover:scale-110 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    <p className="text-white font-medium text-sm tracking-wide">Remove Image</p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 bg-white/5 px-6 py-4 rounded-2xl border border-white/10 w-full backdrop-blur-md">
                  <div className="flex items-center gap-4 flex-1 w-full sm:w-auto">
                    <div className="p-3 bg-emerald-500/20 rounded-xl">
                      <ImageIcon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="text-left overflow-hidden flex-1">
                      <p className="text-white font-medium truncate">{selectedFile?.name}</p>
                      <p className="text-neutral-400 text-sm">
                        {(selectedFile!.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      if (onAnalyze && selectedFile && previewUrl) {
                        onAnalyze(selectedFile, previewUrl);
                      }
                    }}
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 whitespace-nowrap"
                  >
                    Analyze Plant
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
