import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analyze Botanical Specimen",
  description: "Scan your plants or mushrooms for instant species identification, cultivation protocols, health diagnosis, and ecological threat assessment.",
  openGraph: {
    title: "Scan & Analyze | Vera",
    description: "Scan your plants or mushrooms for instant species identification.",
  },
};

export default function AnalyzeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
