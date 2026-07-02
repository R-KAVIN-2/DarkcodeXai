import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | DarkCode X AI",
  description: "Explore our portfolio of AI-powered applications, automation systems, web platforms, and data-driven solutions built to solve real-world business challenges.",
  openGraph: {
    title: "Portfolio | DarkCode X AI",
    description: "Showcasing Innovation Through Intelligent Solutions.",
    url: "https://darkcodex.ai/projects",
    siteName: "DarkCode X AI",
    images: [
      {
        url: "https://darkcodex.ai/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "DarkCode X AI Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | DarkCode X AI",
    description: "Showcasing Innovation Through Intelligent Solutions.",
    images: ["https://darkcodex.ai/og-portfolio.jpg"],
  },
  alternates: {
    canonical: "https://darkcodex.ai/projects",
  }
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}