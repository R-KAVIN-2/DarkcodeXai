import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | DarkCode X AI",
  description: "Tell us about your project, and our experts will get back to you with the best solution tailored to your business goals. Start your project with DarkCode X AI today.",
  openGraph: {
    title: "Contact Us | DarkCode X AI",
    description: "Tell us about your project, and our experts will get back to you.",
    url: "https://darkcodex.ai/contact",
    siteName: "DarkCode X AI",
    images: [
      {
        url: "https://darkcodex.ai/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact DarkCode X AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://darkcodex.ai/contact",
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
