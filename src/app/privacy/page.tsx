import Link from "next/link";
import Footer from "@/components/Footer";
import PrivacyClient from "@/components/PrivacyClient";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Vera collects, processes, and protects your plant and mushroom scans. We take data security and privacy seriously.",
  openGraph: {
    title: "Privacy Policy | Vera",
    description: "Learn how Vera collects, processes, and protects your plant and mushroom scans.",
  },
};

export default function PrivacyPage() {
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

        <PrivacyClient />
      </section>

      <Footer />
    </div>
  );
}
