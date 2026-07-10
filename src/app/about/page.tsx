import { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About Us | DarkCode X AI - Innovating with Artificial Intelligence",
  description: "Learn about DarkCodeX AI's mission, our core values, and our commitment to building the future with state-of-the-art AI technology.",
};

export default function AboutPage() {
  return <AboutClient />;
}
