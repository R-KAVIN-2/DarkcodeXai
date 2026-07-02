import { Metadata } from "next";
import ResearchClient from "./ResearchClient";

export const metadata: Metadata = {
  title: "Research & Innovation | DarkCode X AI",
  description: "Pioneering the Future of Artificial Intelligence. Explore emerging AI technologies, intelligent systems, and cutting-edge research at DarkCode X AI.",
  openGraph: {
    title: "Research & Innovation | DarkCode X AI",
    description: "Pioneering the Future of Artificial Intelligence.",
    url: "https://darkcodex.ai/research",
    siteName: "DarkCode X AI",
    images: [
      {
        url: "https://darkcodex.ai/og-research.jpg",
        width: 1200,
        height: 630,
        alt: "DarkCode X AI Research",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research & Innovation | DarkCode X AI",
    description: "Pioneering the Future of Artificial Intelligence.",
    images: ["https://darkcodex.ai/og-research.jpg"],
  },
  alternates: {
    canonical: "https://darkcodex.ai/research",
  }
};

export default function ResearchPage() {
  return <ResearchClient />;
}