/** Vera - Landing Page */
import Features from "@/components/Features";
import InfoSections from "@/components/InfoSections";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vera | Advanced Plant Identification & Analysis",
  description: "Capture any botanical specimen for immediate, high-precision analysis. Unlock instant species identification, comprehensive cultivation protocols, and critical toxicity data.",
  openGraph: {
    title: "Vera | Advanced Plant Identification & Analysis",
    description: "Capture any botanical specimen for immediate, high-precision analysis. Unlock instant species identification, comprehensive cultivation protocols, and critical toxicity data.",
    url: "https://vera.ai",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-8">
      <HomeClient />
      <Features />
      <InfoSections />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}
