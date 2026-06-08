"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText, ChevronRight, ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      icon: <Eye className="w-5 h-5 text-emerald-400" />,
      title: "Information We Collect",
      content: (
        <div className="space-y-4 text-zinc-400">
          <p>
            To provide our AI-powered plant and mushroom identification services, we collect information you interact with on Vera. This includes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Uploaded Images:</strong> Photos you upload or snap within the app to scan plants, trees, or mushrooms.
            </li>
            <li>
              <strong>Metadata (EXIF Data):</strong> Camera data, resolution, and optional geolocation details embedded within your photos.
            </li>
            <li>
              <strong>Usage Information:</strong> Device details, browser version, and how you navigate our guide sections.
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Shield className="w-5 h-5 text-cyan-400" />,
      title: "How We Use Your Data",
      content: (
        <div className="space-y-4 text-zinc-400">
          <p>
            Vera processes your information to deliver and continuously optimize the identification experience:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Identification & Analysis:</strong> Running your images through our computer vision model to recognize species, health issues, and safety profiles.
            </li>
            <li>
              <strong>Localization & Safety:</strong> Using location data to suggest whether a species is invasive or native to your region, and providing local toxicity warnings.
            </li>
            <li>
              <strong>Model Training:</strong> Anonymized scans help train our AI to be more accurate, though you can opt out of sharing your images for training in settings.
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
      title: "Data Protection & Security",
      content: (
        <p className="text-zinc-400 leading-relaxed">
          We take data security seriously. All uploads are encrypted in transit using SSL/TLS. Your images and metadata are processed securely and stored on isolated cloud servers with restricted access controls. We do not sell or monetize your images, location data, or personal details to any third-party advertisers.
        </p>
      ),
    },
    {
      icon: <FileText className="w-5 h-5 text-cyan-400" />,
      title: "Your Rights & Controls",
      content: (
        <div className="space-y-4 text-zinc-400">
          <p>
            You maintain full ownership and control over the photos you upload to Vera. You can:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Request the absolute erasure of your uploaded images and scanning history from our servers.</li>
            <li>Opt out of metadata collection (such as precise geolocation tags) by stripping EXIF data before upload.</li>
            <li>Disable the use of your scans for machine learning model optimization.</li>
          </ul>
          <p className="pt-2">
            If you wish to submit a deletion request, please reach out via our{" "}
            <Link href="/contact" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4">
              contact form
            </Link>{" "}
            or email us at support@vera.ai.
          </p>
        </div>
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
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-zinc-400 max-w-2xl text-base md:text-lg"
            >
              Last Updated: June 8, 2026. Learn how we collect, process, and protect your plant and mushroom scans.
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
            If you have any questions regarding this policy, please contact our privacy compliance officer at privacy@vera.ai.
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
