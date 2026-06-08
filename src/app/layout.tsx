import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ImageProvider } from "@/context/ImageContext";

// Using Outfit for a premium, ultra-modern typographic feel
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vera | Advanced Plant Identification & Analysis",
    template: "%s | Vera"
  },
  description: "Identify botanical specimens instantly. Vera provides high-precision species identification, comprehensive cultivation protocols, ecological impact reports, and critical toxicity data.",
  keywords: ["plant identification", "mushroom identifier", "botany", "plant care", "gardening", "plant disease diagnosis", "invasive species detection", "flora taxonomy"],
  authors: [{ name: "Vera AI Team" }],
  creator: "Vera Intelligence",
  publisher: "Vera Intelligence",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vera | Advanced Plant Identification & Analysis",
    description: "Identify botanical specimens instantly. Premium, AI-powered species identification, care guides, and toxicity data.",
    url: "https://vera.ai",
    siteName: "Vera",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vera | Advanced Plant & Species Identification",
    description: "Identify botanical specimens instantly with premium AI diagnostics.",
    creator: "@vera_botany",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
