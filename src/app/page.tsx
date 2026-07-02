"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, Globe, Database, ArrowUpRight } from "lucide-react";
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
              <span className="text-sm font-medium text-gray-300">Pioneering Next-Gen AI Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold tracking-tight text-white mb-6 leading-tight">
              Building the Future with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent glow-text-primary">
                Artificial Intelligence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
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
                className="px-8 py-4 rounded-full glass font-semibold text-lg text-white hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2"
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
          <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </section>

      {/* Services Snippet */}
      <section className="py-32 bg-background relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold text-white mb-6">Our Core Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We deliver cutting-edge technology solutions designed to elevate your business in the digital era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Bot className="w-8 h-8 text-primary" />}
              title="Artificial Intelligence"
              description="Custom LLMs, Machine Learning models, and predictive analytics tailored for your needs."
            />
            <ServiceCard
              icon={<Cpu className="w-8 h-8 text-accent" />}
              title="Smart Automation"
              description="AI agents and robotic process automation to streamline your workflows."
            />
            <ServiceCard
              icon={<Globe className="w-8 h-8 text-secondary" />}
              title="Website Development"
              description="High-performance, scalable web applications built with modern frameworks."
            />
            <ServiceCard
              icon={<Database className="w-8 h-8 text-primary" />}
              title="Data Solutions"
              description="Big data engineering, real-time analytics, and secure data pipelines."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-primary/50 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed mb-6">
        {description}
      </p>
      <Link href="/services" className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
        Learn More <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
