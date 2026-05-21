"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Info, CheckCircle2, Skull } from 'lucide-react';
import Link from 'next/link';

export default function MushroomsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 relative overflow-hidden bg-neutral-950 text-neutral-200">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 text-emerald-400 mb-4 text-sm font-medium tracking-wider uppercase">
            <Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link>
            <span>/</span>
            <span>Mushroom Guide</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Mushroom Identification Guide
          </h1>
          <p className="text-xl text-neutral-400 mb-10 leading-relaxed">
            25+ Common Mushrooms with Safety Ratings. Complete guide with key ID features, safety ratings, and dangerous lookalike warnings.
          </p>
        </motion.div>

        {/* Safety Warning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-16 backdrop-blur-sm flex gap-4 items-start"
        >
          <AlertTriangle className="text-red-500 shrink-0 mt-1" size={28} />
          <div>
            <h3 className="text-red-500 font-bold text-lg mb-2">IMPORTANT SAFETY WARNING</h3>
            <p className="text-red-200/80 leading-relaxed">
              Never eat any wild mushroom based on online identification alone. Many deadly mushrooms closely resemble edible ones. Always consult a local mycologist or mushroom expert before consuming any wild-foraged mushroom. <strong>When in doubt, throw it out.</strong>
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Edible Mushrooms Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="text-emerald-400" size={32} />
              <h2 className="text-3xl font-bold text-white">Common Edible Mushrooms</h2>
            </div>
            
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 mb-8 text-emerald-200/90 text-sm flex gap-3">
              <Info className="shrink-0" size={20} />
              <p><strong>Disclaimer:</strong> "Edible" designations are general classifications. Edibility can vary by preparation method, individual sensitivity, geographic variation, and how the mushroom is cooked. Always verify with a local expert before eating.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Chanterelle (Cantharellus cibarius)",
                  safety: "Edible — highly prized edible",
                  safetyColor: "text-emerald-400",
                  desc: "Golden-yellow to egg-yolk colored cap, 2–12 cm wide, wavy and irregularly lobed. Distinctive feature: false gills — forking ridges that run down the stem rather than true blade-like gills. Fruity, apricot-like aroma.",
                  warning: "Dangerous Lookalike: Jack O'Lantern (Omphalotus olearius) — bright orange, grows in clusters, true gills."
                },
                {
                  title: "Morel (Morchella esculenta)",
                  safety: "Edible — must be cooked",
                  safetyColor: "text-emerald-400",
                  desc: "Unmistakable honeycomb-patterned cap with deep, irregular pits and ridges. Cap is attached directly to the hollow stem. Colors range from gray to tan to yellowish.",
                  warning: "Dangerous Lookalike: False Morel (Gyromitra esculenta) — cap is wrinkled and brain-like, not pitted; stem is not fully hollow."
                },
                {
                  title: "Chicken of the Woods (Laetiporus sulphureus)",
                  safety: "Edible — cook thoroughly",
                  safetyColor: "text-emerald-400",
                  desc: "Large, shelf-like brackets in bright orange and yellow layers. No gills — underside has tiny pores. Grows on living or dead hardwoods (especially oaks).",
                },
                {
                  title: "Lion's Mane (Hericium erinaceus)",
                  safety: "Edible — also used medicinally",
                  safetyColor: "text-emerald-400",
                  desc: "Instantly recognizable: a white to cream-colored globe of cascading spines, with no cap or gills. Grows as a single mass on dead or dying hardwoods. No dangerous lookalikes.",
                }
              ].map((mushroom, i) => (
                <MushroomCard key={i} data={mushroom} />
              ))}
            </div>
          </section>

          {/* Deadly Mushrooms Section */}
          <section>
            <div className="flex items-center gap-3 mb-8 mt-12">
              <Skull className="text-red-500" size={32} />
              <h2 className="text-3xl font-bold text-white">Deadly & Poisonous Mushrooms</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Death Cap (Amanita phalloides)",
                  safety: "DEADLY — responsible for 90%+ of fatalities",
                  safetyColor: "text-red-500",
                  desc: "Pale greenish-yellow to white cap, smooth and often shiny. White gills, white ring on stem, and a distinctive cup-shaped volva at the base. Contains amatoxins that destroy the liver and kidneys.",
                  warning: "A single cap can kill an adult. There is no antidote."
                },
                {
                  title: "Destroying Angel (Amanita bisporigera)",
                  safety: "DEADLY — extremely toxic",
                  safetyColor: "text-red-500",
                  desc: "Pure white in all parts: cap, gills, stem, ring, and volva. Grows in mixed woods. Often mistaken for edible white mushrooms or puffballs by inexperienced foragers.",
                  warning: "Contains amatoxins. Symptoms delayed 6-24 hours."
                },
                {
                  title: "False Morel (Gyromitra esculenta)",
                  safety: "DEADLY/TOXIC — contains hydrazine",
                  safetyColor: "text-orange-500",
                  desc: "Brain-like or saddle-shaped reddish-brown cap, wrinkled and folded but not pitted like a true morel. Stem is irregularly chambered.",
                  warning: "Contains gyromitrin (rocket fuel component). Never eat raw."
                },
                {
                  title: "Fly Agaric (Amanita muscaria)",
                  safety: "TOXIC — causes delirium",
                  safetyColor: "text-orange-500",
                  desc: "The iconic red cap with white wart-like spots. White gills, white ring, and bulbous base. Contains muscimol and ibotenic acid.",
                  warning: "Rarely fatal in adults but dangerous. Never eat or experiment."
                }
              ].map((mushroom, i) => (
                <MushroomCard key={i} data={mushroom} />
              ))}
            </div>
          </section>

          {/* AI CTA Section */}
          <section className="pt-8">
             <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 p-10 text-center backdrop-blur-xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/30 rounded-full blur-[100px] -z-10" />
               <h2 className="text-3xl font-bold text-white mb-4">Identify Your Mushroom with AI</h2>
               <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
                 Upload a photo of your mushroom and get instant AI identification with safety warnings, edibility rating, and dangerous lookalike alerts.
               </p>
               <Link href="/analyze" className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/25">
                 Analyze a Plant or Mushroom
               </Link>
             </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
}

function MushroomCard({ data }: { data: any }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
    >
      <h3 className="text-xl font-bold text-white mb-2">{data.title}</h3>
      <p className={`text-sm font-bold mb-4 uppercase tracking-wider ${data.safetyColor}`}>
        {data.safety}
      </p>
      <p className="text-neutral-400 text-sm leading-relaxed mb-4">
        {data.desc}
      </p>
      {data.warning && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-200/90 text-sm flex gap-2">
          <AlertTriangle size={16} className="shrink-0 mt-0.5 text-red-400" />
          <p>{data.warning}</p>
        </div>
      )}
    </motion.div>
  );
}
