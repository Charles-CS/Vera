import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ImageProvider } from "@/context/ImageContext";

// Using Outfit for a premium, ultra-modern typographic feel
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vera | Advanced Plant Identification",
  description: "Premium, AI-powered plant identification and invasive species detection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.className} bg-mesh-dark min-h-screen relative overflow-x-hidden text-slate-50 antialiased`}>
        <ImageProvider>
          {/* Global Floating Navigation */}
          <Navbar />
          
          {/* Main Content Area */}
          <main className="relative z-10 pt-4 px-6 pb-12 max-w-7xl mx-auto min-h-screen">
            {children}
          </main>
        </ImageProvider>
      </body>
    </html>
  );
}
