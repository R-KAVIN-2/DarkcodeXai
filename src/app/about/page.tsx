"use client";

import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Brain, Bot, Code, Database, Zap, Shield, Target, Rocket, Lightbulb, Users, CheckCircle2, ChevronRight, Play, ArrowRight,
  Globe, Laptop, Server, Smartphone, Monitor
} from "lucide-react";

// Counter Component
const AnimatedCounter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString() + "+";
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef} className="font-bold">{from}+</span>;
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const stats = [
    { label: "Projects Completed", value: 150 },
    { label: "Happy Clients", value: 85 },
    { label: "AI Solutions Delivered", value: 45 },
    { label: "Business Automations", value: 120 },
    { label: "Countries Served", value: 12 },
    { label: "Hours of Development", value: 50000 },
  ];

  const technologies = [
    { name: "Python", icon: <Code /> },
    { name: "TensorFlow", icon: <Brain /> },
    { name: "PyTorch", icon: <Zap /> },
    { name: "OpenAI APIs", icon: <Bot /> },
    { name: "LangChain", icon: <Globe /> },
    { name: "Next.js", icon: <Monitor /> },
    { name: "React", icon: <Laptop /> },
    { name: "TypeScript", icon: <Code /> },
    { name: "Node.js", icon: <Server /> },
    { name: "FastAPI", icon: <Zap /> },
    { name: "Docker", icon: <Server /> },
    { name: "AWS", icon: <Globe /> },
    { name: "Azure", icon: <Globe /> },
    { name: "PostgreSQL", icon: <Database /> },
    { name: "MongoDB", icon: <Database /> },
    { name: "Redis", icon: <Database /> },
    { name: "Tailwind CSS", icon: <Monitor /> },
    { name: "Framer Motion", icon: <Play /> },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-white dark:bg-[#0A0514] min-h-screen text-gray-900 dark:text-white overflow-hidden" ref={containerRef}>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#C084FC]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#D946EF]/10 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 z-10 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gray-200 dark:border-white/10 mb-6 text-sm font-medium text-[#C084FC]">
            <Brain size={16} /> About DarkCode X AI
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-space-grotesk font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
            Building the Future with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#9333EA]">Artificial Intelligence</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            We are an AI-first technology company dedicated to building intelligent software, AI-powered solutions, smart automation systems, and modern digital products that solve real-world business challenges.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#C084FC] to-[#9333EA] text-white font-bold text-lg hover:shadow-[0_0_30px_-5px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center gap-2">
              Explore Our Services <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-xl glass border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold text-lg hover:bg-white/5 transition-all">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 1 - WHO WE ARE */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl glass border border-gray-200 dark:border-white/10 p-2 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C084FC]/20 to-[#D946EF]/20 mix-blend-overlay z-10" />
                <div className="w-full h-full bg-[#0a0f1c] rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src="/about-image.jpg" 
                    alt="AI Technology" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold">Who We Are</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#C084FC] to-[#9333EA] rounded-full" />
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                DarkCode X AI is an innovative technology startup specializing in Artificial Intelligence, Machine Learning, Smart Automation, Modern Web Development, and Data-Driven Solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Our mission is to help businesses transform ideas into intelligent digital products that improve efficiency, automate workflows, and create meaningful business impact.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                We combine cutting-edge AI technologies with modern software engineering to build scalable, secure, and user-friendly solutions for startups, enterprises, educational institutions, and organizations worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - MISSION & VISION */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInUp}
              className="glass p-10 rounded-3xl border border-gray-200 dark:border-white/10 hover:border-[#C084FC]/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-32 h-32 text-[#C084FC]" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#C084FC]/10 flex items-center justify-center mb-6 border border-[#C084FC]/20">
                <Target className="text-[#C084FC] w-7 h-7" />
              </div>
              <h3 className="text-3xl font-space-grotesk font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg relative z-10">
                To empower businesses with intelligent AI solutions, modern software, and automation technologies that simplify operations, accelerate growth, and solve real-world challenges through innovation.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInUp}
              className="glass p-10 rounded-3xl border border-gray-200 dark:border-white/10 hover:border-[#D946EF]/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Lightbulb className="w-32 h-32 text-[#D946EF]" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#D946EF]/10 flex items-center justify-center mb-6 border border-[#D946EF]/20">
                <Lightbulb className="text-[#D946EF] w-7 h-7" />
              </div>
              <h3 className="text-3xl font-space-grotesk font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg relative z-10">
                To become a globally recognized AI technology company that builds intelligent digital solutions that transform industries and shape the future through responsible innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - WHAT WE DO */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Comprehensive technology solutions designed for the modern era.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { title: "Artificial Intelligence & Machine Learning", icon: <Brain />, color: "from-[#C084FC] to-[#9333EA]", desc: "Design intelligent AI models, predictive analytics, NLP systems, computer vision applications, recommendation engines, and AI-powered chatbots." },
              { title: "Smart Automation", icon: <Zap />, color: "from-[#D946EF] to-[#D946EF]", desc: "Develop AI agents, workflow automation, CRM automation, HR automation, robotic process automation, and business process optimization." },
              { title: "Website & Software Development", icon: <Code />, color: "from-[#F59E0B] to-[#EF4444]", desc: "Build high-performance business websites, SaaS applications, enterprise platforms, dashboards, e-commerce solutions, and custom software." },
              { title: "Data Solutions", icon: <Database />, color: "from-[#10B981] to-[#3B82F6]", desc: "Deliver business intelligence dashboards, data analytics, ETL pipelines, visualization systems, and data-driven decision support." }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/10 group hover:border-white/20 transition-all">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-6`}>
                  <div className="w-full h-full bg-white dark:bg-[#0A0514] rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - OUR CORE VALUES */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Innovation", desc: "Continuously exploring new technologies and AI advancements.", icon: <Lightbulb /> },
              { title: "Excellence", desc: "Delivering high-quality, scalable, and reliable solutions.", icon: <Target /> },
              { title: "Integrity", desc: "Building trust through transparency and ethical AI practices.", icon: <Shield /> },
              { title: "Collaboration", desc: "Working closely with clients to create meaningful digital products.", icon: <Users /> },
              { title: "Continuous Learning", desc: "Adopting the latest technologies and continuously improving.", icon: <Brain /> },
              { title: "Customer Success", desc: "Every solution we build is focused on delivering measurable business value.", icon: <Rocket /> },
            ].map((value, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:bg-white/5 transition-colors">
                <div className="text-[#C084FC] mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - WHY CHOOSE US */}
      <section className="py-24 px-6 relative z-10 bg-gray-100 dark:bg-white/5 border-y border-gray-200 dark:border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Why Choose Us</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                We are more than just an agency; we are your technical partner. We blend deep expertise in AI with world-class engineering to deliver unmatched results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "AI-First Development", "Experienced Engineering Team", "Scalable Architecture", "Enterprise Security",
                  "Fast Delivery", "Modern Technology Stack", "Future-Ready Solutions", "Long-Term Support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 glass rounded-xl border border-gray-200 dark:border-white/5 group hover:border-[#C084FC]/30 transition-colors">
                    <CheckCircle2 className="text-[#C084FC] shrink-0" size={20} />
                    <span className="font-medium text-sm text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass border border-[#C084FC]/20 shadow-[0_0_40px_-10px_rgba(192,132,252,0.3)]">
              <Image
                src="/about-bottom-image.jpg"
                alt="AI Network Ecosystem"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - DEVELOPMENT APPROACH */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">Our Development Approach</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">A systematic, proven methodology for delivering excellence.</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-white/10 -translate-y-1/2 hidden lg:block" />
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative z-10"
            >
              {[
                "Research", "Planning", "Design", "Development", "Testing", "Deployment", "Support"
              ].map((step, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full glass border border-gray-300 dark:border-white/20 flex items-center justify-center mb-4 group-hover:border-[#C084FC] group-hover:shadow-[0_0_20px_-5px_rgba(0,229,255,0.5)] transition-all">
                    <span className="text-xl font-bold text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors">{i + 1}</span>
                  </div>
                  <h3 className="font-bold mb-2">{step}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - COMPANY STATISTICS */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-8 glass rounded-3xl border border-gray-200 dark:border-white/5 hover:bg-white/5 transition-colors">
                <div className="text-4xl md:text-5xl font-space-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#9333EA] mb-2">
                  <AnimatedCounter to={stat.value} />
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - TECHNOLOGY STACK */}
      <section className="py-24 px-6 relative z-10 bg-gray-100 dark:bg-white/5 border-y border-gray-200 dark:border-white/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-16">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 glass rounded-full border border-gray-200 dark:border-white/10 hover:border-[#D946EF]/50 hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)] transition-all cursor-default"
              >
                <span className="text-gray-600 dark:text-gray-400">{tech.icon}</span>
                <span className="font-medium text-gray-200">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - OUR COMMITMENT & CTA */}
      <section className="py-32 px-6 relative z-10 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">Building Intelligent Solutions That Make a Difference</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              At DarkCode X AI, we don't simply develop software—we create intelligent ecosystems that empower businesses to innovate, automate, and grow. Every project is built with creativity, technical excellence, scalability, and a passion for solving real-world challenges through Artificial Intelligence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="glass p-12 rounded-[3rem] border border-[#C084FC]/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#C084FC]/10 to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-8 relative z-10">Let's Build the Future Together</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#C084FC] to-[#9333EA] text-white font-bold text-lg hover:shadow-[0_0_30px_-5px_rgba(0,229,255,0.4)] transition-all">
                Start Your Project
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-xl glass border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold text-lg hover:bg-white/10 transition-all">
                Book a Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}