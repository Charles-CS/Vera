"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Scale, AlertTriangle, UserCheck, ShieldAlert, ArrowLeft } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      icon: <UserCheck className="w-5 h-5 text-emerald-400" />,
      title: "1. Acceptance of Terms",
      content: (
        <p className="text-zinc-400 leading-relaxed">
          By accessing or using Vera, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not access or use our plant and mushroom identification services.
        </p>
      ),
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      title: "2. Crucial Identification Disclaimer",
      content: (
        <div className="space-y-4 text-zinc-400">
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm">
            <strong>WARNING:</strong> Mushroom and plant identification models are probabilistic and not 100% accurate. Foraging or consuming wild mushrooms or plants based solely on AI scans poses extreme health risks, including severe poisoning or death.
          </div>
          <p>
            Vera is designed strictly for educational and informational purposes. Do not rely on Vera as a final authority for determining the safety or edibility of any wild organism. Always consult a certified professional mycologist or botanist before handling or consuming unknown species. You assume all risks associated with foraging and ingestion.
          </p>
        </div>
      ),
    },
    {
      icon: <Scale className="w-5 h-5 text-cyan-400" />,
      title: "3. Acceptable Use",
      content: (
        <div className="space-y-4 text-zinc-400">
          <p>
            When interacting with Vera's services, you agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Upload malicious, offensive, or copyrighted materials that you do not own or have permission to use.</li>
            <li>Use automated scrapers, bots, or reverse-engineering tools to extract database guides or AI models.</li>
            <li>Deceive or submit intentionally false reports of invasive species or toxic flora to our public Guides database.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-emerald-400" />,
      title: "4. Limitation of Liability",
      content: (
        <p className="text-zinc-400 leading-relaxed">
          To the maximum extent permitted by law, Vera and its intelligence team shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your reliance on plant or mushroom identification results, database listings, or safety warnings provided through our platform.
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Back to Home Navigation */}
      <div className="relative z-10 max-w-4xl mx-auto w-full pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>
      </div>

      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950/50 backdrop-blur-xl px-6 py-14 md:px-12 lg:px-16 max-w-4xl mx-auto w-full">
        {/* Glow Effects */}
        <div className="absolute -top-16 right-[-60px] h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-[-80px] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-10">
          {/* Header */}
          <div className="space-y-4 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-white md:text-5xl"
            >
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-zinc-400 max-w-2xl text-base md:text-lg"
            >
              Last Updated: June 8, 2026. Please read our terms carefully before using the Vera identification platform.
            </motion.p>
          </div>

          <hr className="border-white/10" />

          {/* Content Sections */}
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
                className="glass-panel glass-shine p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex-shrink-0">
                  {section.icon}
                </div>
                <div className="space-y-3 flex-grow">
                  <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    {section.title}
                  </h2>
                  <div className="text-zinc-300 leading-relaxed text-sm md:text-base">
                    {section.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center pt-4 text-xs text-zinc-500"
          >
            Questions regarding our terms? Feel free to contact our legal operations team at legal@vera.ai.
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
