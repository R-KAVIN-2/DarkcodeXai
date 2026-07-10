import type { Metadata } from "next";
import { Inter, Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DarkCode X AI | Intelligent Solutions for Real-World Problems",
  description: "DarkCodeX AI builds intelligent AI-powered products, scalable software, and smart automation systems to solve real-world problems.",
  openGraph: {
    title: "DarkCode X AI | Intelligent Solutions for Real-World Problems",
    description: "DarkCodeX AI builds intelligent AI-powered products, scalable software, and smart automation systems to solve real-world problems.",
    url: "https://darkcodexai.com",
    siteName: "DarkCode X AI",
    images: [
      {
        url: "https://darkcodexai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DarkCode X AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DarkCode X AI | Intelligent Solutions for Real-World Problems",
    description: "Building the Future with Artificial Intelligence. We create intelligent AI-powered products, scalable software, smart automation systems, and data-driven solutions.",
    images: ["https://darkcodexai.com/og-image.jpg"],
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
  metadataBase: new URL("https://darkcodexai.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "DarkCode X AI",
    url: "https://darkcodexai.com",
    logo: "https://darkcodexai.com/logo.png",
    description: "Building the Future with Artificial Intelligence. We create intelligent AI-powered products, scalable software, smart automation systems, and data-driven solutions.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tiruvannamalai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-6383298805",
      contactType: "customer service",
      email: "infodarkcodexai@gmail.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/darkcodexai",
      "https://twitter.com/darkcodexai",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
