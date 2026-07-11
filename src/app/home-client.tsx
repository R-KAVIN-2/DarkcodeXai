"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, Globe, Database, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Hero3D } from "@/components/hero-3d";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Hero3D />
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Pioneering Next-Gen AI Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              Building the Future with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent glow-text-primary">
                Artificial Intelligence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
              We create intelligent AI-powered products, scalable software, smart automation systems, and data-driven solutions that solve real-world business problems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/services"
                className="group relative px-8 py-4 bg-primary text-background rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 glow-primary flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full glass font-semibold text-lg text-gray-900 dark:text-white hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2"
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </section>

      {/* Services Snippet */}
      <section className="py-32 bg-background relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold text-gray-900 dark:text-white mb-6">Our Core Services</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              We deliver cutting-edge technology solutions designed to elevate your business in the digital era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Image src="/home-ai-icon.png" alt="AI Icon" width={40} height={40} className="object-contain" />}
              title="Artificial Intelligence"
              description="We engineer enterprise-grade custom LLMs, sophisticated machine learning algorithms, and highly accurate predictive analytics models. Our AI solutions are purpose-built to extract deep insights from your data, enabling smarter decision-making and opening new revenue streams for modern businesses."
              href="/services#ai"
            />
            <ServiceCard
              icon={<Image src="/home-automation-icon.png" alt="Automation Icon" width={40} height={40} className="object-contain" />}
              title="Smart Automation"
              description="Deploy autonomous AI agents and robotic process automation (RPA) systems designed to eliminate repetitive manual tasks. We streamline complex operational workflows, dramatically reduce human error, and accelerate business efficiency to save your team thousands of hours annually."
              href="/services#automation"
            />
            <ServiceCard
              icon={<Globe className="w-8 h-8 text-secondary" />}
              title="Website & App Development"
              description="Architecting high-performance, infinitely scalable web platforms and applications utilizing state-of-the-art frameworks like Next.js and React. Our development focuses on flawless user experiences, advanced security, and modular codebases designed to handle massive enterprise-level traffic without degradation."
              href="/services#web"
            />
            <ServiceCard
              icon={<Database className="w-8 h-8 text-primary" />}
              title="Data Engineering"
              description="Transform raw information into actionable intelligence with our comprehensive big data engineering. We design secure, real-time data pipelines, robust cloud architectures, and scalable data lakes that power advanced reporting and keep your business infrastructure future-proof."
              href="/services#data"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, href = "/services" }: { icon: React.ReactNode, title: string, description: string, href?: string }) {
  return (
    <Link href={href} className="block h-full">
      <div className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="w-16 h-16 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6 border border-gray-200 dark:border-white/10 group-hover:border-primary/50 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
          Learn More <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
