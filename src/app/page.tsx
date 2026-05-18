import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-8">
      {/* 
        This is the main landing page content.
        The global Navbar is automatically included via src/app/layout.tsx
      */}
      
      <Features />
      
      <HowItWorks />
      
      <Footer />
    </div>
  );
}
