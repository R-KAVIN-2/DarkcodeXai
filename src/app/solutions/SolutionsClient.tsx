"use client";

import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Brain, Bot, Code, Database, Zap, Shield, Target, Rocket, Lightbulb, Users, CheckCircle2, ChevronRight, Play, ArrowRight,
  Globe, Laptop, Server, Smartphone, Monitor, ChevronDown, Activity, Settings, Workflow, HeartPulse, GraduationCap,
  Briefcase, ShoppingCart, Factory, Building, Tractor, Truck, Building2, TerminalSquare, MessageSquare, BarChart3,
  Cpu, LayoutDashboard
} from "lucide-react";

// Counter Component
const AnimatedCounter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
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
          if (nodeRef.current) nodeRef.current.textContent = Math.round(value).toString() + "+";
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef} className="font-bold">{from}+</span>;
};

// Accordion Item Component
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 dark:border-white/10 rounded-2xl mb-4 overflow-hidden glass hover:border-[#C084FC]/30 transition-colors">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-bold text-lg text-gray-200">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#C084FC] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-200 dark:border-white/5 pt-4">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default function SolutionsClient() {
  const containerRef = useRef(null);
  
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
        <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] rounded-full bg-[#C084FC]/10 blur-[150px]" />
        <div className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] rounded-full bg-[#D946EF]/10 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-[#9333EA]/5 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-32 px-6 z-10 flex flex-col items-center text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-5xl mx-auto">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gray-200 dark:border-white/10 mb-8 text-sm font-medium text-[#D946EF]">
            <Zap size={16} /> Enterprise Grade Solutions
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-space-grotesk font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400 leading-tight">
            Transforming Businesses with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#D946EF]">Intelligent AI Solutions</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            We build AI-powered solutions that help businesses automate processes, improve decision-making, increase efficiency, and accelerate digital transformation.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#overview" className="w-full sm:w-auto px-10 py-5 rounded-xl bg-gradient-to-r from-[#C084FC] to-[#9333EA] text-white font-bold text-lg hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.5)] transition-all flex items-center justify-center gap-2">
              Explore Solutions <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-xl glass border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold text-lg hover:bg-white/10 transition-all">
              Book a Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 1 - SOLUTIONS OVERVIEW */}
      <section id="overview" className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Innovative Solutions for Every Business</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              DarkCode X AI delivers intelligent technology solutions that combine Artificial Intelligence, Automation, Data Analytics, and Modern Software Development to solve complex business challenges.
            </p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Artificial Intelligence", icon: <Brain />, color: "from-[#C084FC] to-[#9333EA]", desc: "Develop custom AI models, intelligent assistants, recommendation systems, NLP, computer vision, predictive analytics, and AI-powered business applications." },
              { title: "Business Automation", icon: <Workflow />, color: "from-[#D946EF] to-[#D946EF]", desc: "Automate repetitive workflows using AI agents, RPA, CRM automation, HR automation, finance automation, and intelligent business processes." },
              { title: "Modern Software Solutions", icon: <Laptop />, color: "from-[#F59E0B] to-[#EF4444]", desc: "Develop enterprise web applications, SaaS platforms, customer portals, dashboards, ERP systems, and cloud-native applications." },
              { title: "Data Intelligence", icon: <Database />, color: "from-[#10B981] to-[#3B82F6]", desc: "Transform business data into actionable insights using business intelligence, analytics dashboards, data engineering, and visualization." }
            ].map((sol, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass p-10 rounded-3xl border border-gray-200 dark:border-white/10 group hover:border-white/30 transition-all hover:bg-white/5 overflow-hidden relative">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${sol.color} opacity-5 blur-[100px] group-hover:opacity-20 transition-opacity`} />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sol.color} p-[1px] mb-8`}>
                  <div className="w-full h-full bg-white dark:bg-[#0A0514] rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors">
                    {sol.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 font-space-grotesk">{sol.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - INDUSTRY SOLUTIONS */}
      <section className="py-24 px-6 relative z-10 bg-gray-100 dark:bg-white/5 border-y border-gray-200 dark:border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Industry Solutions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Tailored AI and automation solutions designed for specific industry challenges.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Healthcare", icon: <HeartPulse />, items: ["AI Diagnostics", "Medical Record Automation", "Appointment Systems"] },
              { title: "Education", icon: <GraduationCap />, items: ["AI Learning Platforms", "Student Analytics", "Online Examination Systems"] },
              { title: "Finance", icon: <Briefcase />, items: ["Fraud Detection", "Risk Analysis", "AI Banking Solutions"] },
              { title: "Retail", icon: <ShoppingCart />, items: ["Smart Inventory", "Recommendation Engine", "Customer Analytics"] },
              { title: "Manufacturing", icon: <Factory />, items: ["Predictive Maintenance", "Quality Inspection", "Smart Factory Automation"] },
              { title: "Real Estate", icon: <Building />, items: ["Property Management", "AI Lead Generation", "Market Analytics"] },
              { title: "Agriculture", icon: <Tractor />, items: ["Crop Monitoring", "AI Yield Prediction", "Smart Farming"] },
              { title: "Logistics", icon: <Truck />, items: ["Fleet Tracking", "Route Optimization", "Warehouse Automation"] },
              { title: "Government", icon: <Building2 />, items: ["Smart Governance", "Citizen Service Portals", "Data Analytics"] },
              { title: "Startups", icon: <Rocket />, items: ["MVP Development", "SaaS Platforms", "AI Product Development"] },
            ].map((ind, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass p-6 rounded-2xl border border-gray-200 dark:border-white/10 group hover:border-[#C084FC]/50 transition-all hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-4 text-[#C084FC] group-hover:scale-110 transition-transform">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{ind.title}</h3>
                <ul className="space-y-2 mb-6">
                  {ind.items.map((item, j) => (
                    <li key={j} className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#D946EF] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 - OUR SOLUTION PROCESS */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Our Solution Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">A rigorous, proven methodology for delivering enterprise-grade solutions.</p>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-1 bg-gradient-to-b from-[#C084FC] via-[#D946EF] to-[#9333EA] md:-translate-x-1/2 opacity-30 rounded-full" />
            
            {[
              { step: "Step 1", title: "Business Discovery", desc: "Understand business goals and challenges." },
              { step: "Step 2", title: "Research & Analysis", desc: "Identify opportunities and technical feasibility." },
              { step: "Step 3", title: "Solution Architecture", desc: "Design scalable, secure, and robust systems." },
              { step: "Step 4", title: "UI/UX Design", desc: "Create intuitive and premium user experiences." },
              { step: "Step 5", title: "Development", desc: "Build using modern technologies and best practices." },
              { step: "Step 6", title: "AI Model Training", desc: "Train, validate, and optimize AI systems." },
              { step: "Step 7", title: "Testing & QA", desc: "Ensure quality, performance, and enterprise security." },
              { step: "Step 8", title: "Deployment", desc: "Launch seamlessly on cloud infrastructure." },
              { step: "Step 9", title: "Support & Optimization", desc: "Continuous monitoring, maintenance, and improvement." },
            ].map((phase, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-1/2 hidden md:block" />
                <div className="absolute left-[20px] md:left-1/2 w-5 h-5 rounded-full bg-white dark:bg-[#0A0514] border-4 border-[#C084FC] md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,229,255,1)]" />
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <div className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/10 hover:border-[#D946EF]/50 transition-colors">
                    <span className="text-[#C084FC] font-bold text-sm tracking-wider uppercase mb-2 block">{phase.step}</span>
                    <h3 className="text-2xl font-bold font-space-grotesk mb-3">{phase.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{phase.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - SUCCESS METRICS */}
      <section className="py-24 px-6 relative z-10 bg-gray-100 dark:bg-white/5 border-y border-gray-200 dark:border-white/10">
        <div className="absolute inset-0 bg-[#0A0514]/90 backdrop-blur-sm" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { label: "Projects Delivered", value: 250 },
              { label: "AI Models Built", value: 85 },
              { label: "Automations Created", value: 320 },
              { label: "Hours Saved", value: 100000 },
              { label: "Clients Served", value: 150 },
              { label: "Countries Reached", value: 24 },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 glass rounded-3xl border border-gray-200 dark:border-white/5 hover:border-[#C084FC]/30 transition-colors">
                <div className="text-4xl md:text-6xl font-space-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#D946EF] mb-4">
                  <AnimatedCounter to={stat.value} duration={2.5} />
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - TECHNOLOGY STACK */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Built on modern, scalable, and secure technologies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: "Artificial Intelligence", techs: ["OpenAI", "Claude", "Gemini", "Llama", "LangChain", "TensorFlow", "PyTorch", "Python"] },
              { category: "Web", techs: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "FastAPI"] },
              { category: "Cloud", techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"] },
              { category: "Database", techs: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Supabase"] }
            ].map((group, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-[#C084FC] border-b border-gray-200 dark:border-white/10 pb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.techs.map((tech, j) => (
                    <span key={j} className="px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 hover:bg-white/10 hover:border-[#D946EF]/50 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 - FAQ */}
      <section className="py-24 px-6 relative z-10 bg-gray-100 dark:bg-white/5 border-y border-gray-200 dark:border-white/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Everything you need to know about partnering with us.</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem question="How do you implement AI into existing business workflows?" answer="We conduct a thorough analysis of your current workflows, identify bottlenecks, and integrate specialized AI models (like custom LLMs or predictive algorithms) through seamless API integrations without disrupting your existing operations." />
            <FAQItem question="What is your typical project duration?" answer="Project timelines vary based on complexity. MVP development usually takes 4-8 weeks, while enterprise-grade AI software or complex automation systems can take 3-6 months from discovery to deployment." />
            <FAQItem question="How do you ensure data security and privacy?" answer="We adhere to enterprise-grade security standards including SOC2 compliance, end-to-end encryption, and role-based access control. We also offer local deployment options for highly sensitive data models." />
            <FAQItem question="Do you provide ongoing support and maintenance?" answer="Yes! We offer comprehensive SLA-based support, continuous monitoring, model retraining, and system optimizations long after the initial launch." />
            <FAQItem question="What is your pricing model?" answer="We offer flexible pricing models including fixed-bid for well-defined projects, and time-and-materials for ongoing agile development. Contact us for a custom quote based on your specific needs." />
            <FAQItem question="Can you work with our existing technology stack?" answer="Absolutely. Our engineers are experts in modernizing legacy systems and building APIs to seamlessly connect our cutting-edge AI solutions with your existing ERP, CRM, or custom software." />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 px-6 relative z-10 text-center">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="glass p-16 rounded-[4rem] border border-[#C084FC]/30 relative overflow-hidden shadow-[0_0_100px_-20px_rgba(0,229,255,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C084FC]/20 via-transparent to-[#D946EF]/20 pointer-events-none" />
            <h2 className="text-5xl md:text-7xl font-space-grotesk font-bold mb-8 relative z-10 text-gray-900 dark:text-white">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto relative z-10">
              Partner with DarkCode X AI to build intelligent software, automate operations, and unlock the full potential of Artificial Intelligence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <Link href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-[#C084FC] to-[#9333EA] text-white font-bold text-xl hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.6)] hover:scale-105 transition-all">
                Start Your Project
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-2xl glass border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold text-xl hover:bg-white/10 hover:scale-105 transition-all">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
