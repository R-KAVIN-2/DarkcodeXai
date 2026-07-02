import { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "Solutions | DarkCode X AI",
  description: "Explore our premium AI solutions. We build intelligent software, automate operations, and unlock the full potential of Artificial Intelligence for enterprises and startups.",
  openGraph: {
    title: "AI Solutions | DarkCode X AI",
    description: "Transforming Businesses with Intelligent AI Solutions.",
    url: "https://darkcodex.ai/solutions",
    siteName: "DarkCode X AI",
    images: [
      {
        url: "https://darkcodex.ai/og-solutions.jpg",
        width: 1200,
        height: 630,
        alt: "DarkCode X AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions | DarkCode X AI",
    description: "Transforming Businesses with Intelligent AI Solutions.",
    images: ["https://darkcodex.ai/og-solutions.jpg"],
  },
  alternates: {
    canonical: "https://darkcodex.ai/solutions",
  }
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}