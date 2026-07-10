import { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "DarkCode X AI | Enterprise AI & Smart Automation Solutions",
  description: "Discover how DarkCodeX AI empowers businesses with custom LLMs, intelligent automation, predictive analytics, and robust cloud architectures.",
};

export default function Home() {
  return <HomeClient />;
}
