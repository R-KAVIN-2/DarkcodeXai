"use client";

import { motion, AnimatePresence, useScroll, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Brain, Bot, Code, Database, Zap, Shield, Target, Rocket, Lightbulb, Users, ChevronRight, Play, ArrowRight,
  Globe, Laptop, Server, Activity, Workflow, ChevronDown, CheckCircle2, MessageSquare, BarChart3, Star,
  Briefcase, Building, ShoppingCart, GraduationCap, HeartPulse, FileText, Cpu, Monitor, LayoutDashboard, Microscope, Calendar
} from "lucide-react";

// Animated Counter
const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "+" }: { from?: number, to: number, duration?: number, suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold: 0.5 });
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) { if (nodeRef.current) nodeRef.current.textContent = Math.round(value).toString() + suffix; },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView, suffix]);

  return <span ref={nodeRef} className="font-bold">{from}{suffix}</span>;
};

// FAQ Accordion
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 dark:border-white/10 rounded-2xl mb-4 overflow-hidden glass hover:border-[#C084FC]/30 transition-colors">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
        <span className="font-bold text-lg text-gray-200">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#C084FC] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} className="overflow-hidden">
        <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-200 dark:border-white/5 pt-4">{answer}</div>
      </motion.div>
    </div>
  );
};

// Sample Projects
const ALL_PROJECTS = [
  { id: 1, title: "AI Customer Support Chatbot", category: "Artificial Intelligence", client: "E-Commerce Enterprise", tech: ["LLMs", "LangChain", "Next.js"], desc: "An intelligent autonomous agent resolving 85% of customer queries instantly.", icon: <MessageSquare /> },
  { id: 2, title: "Smart Business Automation Platform", category: "Automation", client: "Logistics Corp", tech: ["Python", "FastAPI", "RPA"], desc: "End-to-end workflow automation reducing manual data entry by 92%.", icon: <Workflow /> },
  { id: 3, title: "Hospital Management Portal", category: "Web Development", client: "City Health Network", tech: ["React", "Node.js", "PostgreSQL"], desc: "A secure, HIPAA-compliant patient and doctor management dashboard.", icon: <HeartPulse /> },
  { id: 4, title: "AI Resume Screening System", category: "Machine Learning", client: "Global Tech HR", tech: ["TensorFlow", "NLP", "Python"], desc: "Automated candidate ranking system based on skill matching and NLP.", icon: <Briefcase /> },
  { id: 5, title: "Business Analytics Dashboard", category: "Data Analytics", client: "FinTech Startup", tech: ["Next.js", "MongoDB", "D3.js"], desc: "Real-time interactive dashboard visualizing complex financial data streams.", icon: <BarChart3 /> },
  { id: 6, title: "School Management System", category: "Enterprise Software", client: "EduTech Academy", tech: ["TypeScript", "AWS", "React"], desc: "Comprehensive portal for attendance, grading, and parent communication.", icon: <GraduationCap /> },
  { id: 7, title: "Inventory Management Dashboard", category: "Dashboards", client: "Retail Chain", tech: ["Next.js", "Supabase", "Tailwind"], desc: "Real-time stock tracking with predictive AI restocking alerts.", icon: <LayoutDashboard /> },
  { id: 8, title: "Real Estate Property Platform", category: "Web Development", client: "Luxury Estates", tech: ["React", "Node.js", "PostGIS"], desc: "High-performance property search engine with AI-driven recommendations.", icon: <Building /> },
  { id: 9, title: "CRM Automation Platform", category: "Cloud Solutions", client: "B2B Sales Org", tech: ["Azure", "Python", "React"], desc: "Cloud-native CRM with automated lead scoring and email sequencing.", icon: <Globe /> },
  { id: 10, title: "AI Document Processing System", category: "Artificial Intelligence", client: "Legal Firm", tech: ["Computer Vision", "OCR", "AWS"], desc: "Extracts and categorizes data from thousands of unstructured legal documents.", icon: <FileText /> },
  { id: 11, title: "HR Management System", category: "Enterprise Software", client: "Manufacturing Inc", tech: ["Next.js", "PostgreSQL", "Docker"], desc: "Centralized employee portal for payroll, benefits, and performance reviews.", icon: <Users /> },
  { id: 12, title: "Next-Gen E-Commerce Website", category: "Web Development", client: "Fashion Brand", tech: ["Next.js", "Stripe", "Tailwind"], desc: "Headless e-commerce storefront with lightning-fast load times.", icon: <ShoppingCart /> },
];

const CATEGORIES = ["All", "Artificial Intelligence", "Machine Learning", "Automation", "Web Development", "Enterprise Software", "Data Analytics", "Dashboards", "Cloud Solutions"];

export default function PortfolioClient() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === activeCategory);

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <div className="bg-white dark:bg-[#0A0514] min-h-screen text-gray-900 dark:text-white overflow-hidden" ref={containerRef}>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-[#9333EA]/10 blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-[#C084FC]/10 blur-[150px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 px-6 z-10 flex flex-col items-center text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-5xl mx-auto relative">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#C084FC]/30 mb-8 text-sm font-medium text-[#C084FC]">
            <Star size={16} /> Our Portfolio
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-space-grotesk font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500 leading-tight">
            Showcasing Innovation Through <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#D946EF]">Intelligent Solutions</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of AI-powered applications, automation systems, web platforms, and data-driven solutions built to solve real-world business challenges.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#projects" className="w-full sm:w-auto px-10 py-5 rounded-xl bg-gradient-to-r from-[#C084FC] to-[#9333EA] text-white font-bold text-lg hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.5)] transition-all flex items-center justify-center gap-2">
              View Projects <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-xl glass border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold text-lg hover:bg-white/10 transition-all">
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECT FILTER & GRID SECTION */}
      <section id="projects" className="py-24 px-6 relative z-10 border-t border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                  activeCategory === cat 
                    ? "bg-[#C084FC]/20 border-[#C084FC] text-[#C084FC] shadow-[0_0_15px_-3px_rgba(0,229,255,0.4)]" 
                    : "glass border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-3xl border border-gray-200 dark:border-white/10 overflow-hidden group hover:border-[#C084FC]/50 transition-colors flex flex-col"
                >
                  <div className="h-48 bg-[#0a0f1c] relative overflow-hidden flex items-center justify-center border-b border-gray-200 dark:border-white/5 group-hover:bg-[#C084FC]/5 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C084FC]/10 to-transparent mix-blend-overlay" />
                    <div className="w-20 h-20 rounded-2xl glass border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl text-[#C084FC]">
                      {project.icon}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="text-xs font-bold text-[#D946EF] uppercase tracking-wider mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold font-space-grotesk mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 text-sm leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, j) => (
                        <span key={j} className="text-xs px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-700 dark:text-gray-300">{t}</span>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-gray-200 dark:border-white/5 flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">Client: {project.client}</span>
                      <button className="text-[#C084FC] hover:text-white transition-colors text-sm font-bold flex items-center gap-1">
                        View Details <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Deep dives into how we solve complex enterprise challenges.</p>
          </div>

          <div className="space-y-12">
            {[
              { title: "Global Logistics AI Optimization", prob: "High fuel costs and inefficient routing.", sol: "Custom AI predictive routing model.", res: "30% reduction in fuel costs, 40% faster delivery times.", color: "from-[#C084FC] to-[#9333EA]" },
              { title: "Healthcare Data Automation", prob: "Manual entry causing compliance risks.", sol: "OCR & NLP automated document processing.", res: "99.9% accuracy rate, 5,000+ hours saved monthly.", color: "from-[#D946EF] to-[#D946EF]" }
            ].map((study, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="glass rounded-3xl border border-gray-200 dark:border-white/10 overflow-hidden flex flex-col md:flex-row">
                <div className={`w-full md:w-2/5 bg-gradient-to-br ${study.color} p-12 flex flex-col justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[#0A0514]/40" />
                  <h3 className="text-3xl font-space-grotesk font-bold relative z-10 mb-4">{study.title}</h3>
                  <button className="relative z-10 px-6 py-3 bg-gray-200 dark:bg-white/10 hover:bg-white/20 border border-gray-300 dark:border-white/20 rounded-xl font-semibold backdrop-blur-md transition-colors w-fit flex items-center gap-2">
                    Read Full Case Study <ArrowRight size={16} />
                  </button>
                </div>
                <div className="w-full md:w-3/5 p-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[#C084FC] font-bold mb-2 flex items-center gap-2"><Target size={18} /> The Problem</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{study.prob}</p>
                  </div>
                  <div>
                    <h4 className="text-[#D946EF] font-bold mb-2 flex items-center gap-2"><Lightbulb size={18} /> The Solution</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{study.sol}</p>
                  </div>
                  <div className="sm:col-span-2 pt-6 border-t border-gray-200 dark:border-white/5">
                    <h4 className="text-[#9333EA] font-bold mb-2 flex items-center gap-2"><Activity size={18} /> Business Results</h4>
                    <p className="text-gray-900 dark:text-white font-medium text-lg">{study.res}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 relative z-10 bg-gray-100 dark:bg-white/5 border-y border-gray-200 dark:border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">How we turn complex requirements into elegant solutions.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Discovery", icon: <Target /> }, { title: "Research", icon: <Microscope /> },
              { title: "Planning", icon: <Calendar /> }, { title: "UI/UX Design", icon: <Monitor /> },
              { title: "Development", icon: <Code /> }, { title: "Testing", icon: <Shield /> },
              { title: "Deployment", icon: <Rocket /> }, { title: "Support", icon: <Users /> }
            ].map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="glass p-6 rounded-2xl border border-gray-200 dark:border-white/10 flex flex-col items-center text-center group hover:border-[#C084FC]/50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center mb-4 text-[#C084FC] group-hover:scale-110 group-hover:bg-[#C084FC]/10 transition-all">
                  {step.icon}
                </div>
                <h3 className="font-bold">{step.title}</h3>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-500 font-medium">Step 0{i + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT STATISTICS */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: 350 },
              { label: "AI Solutions Delivered", value: 120 },
              { label: "Client Satisfaction", value: 99, suffix: "%" },
              { label: "Hours of Development", value: 150000 },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 glass rounded-3xl border border-gray-200 dark:border-white/5 hover:border-[#C084FC]/30 transition-colors">
                <div className="text-4xl md:text-5xl font-space-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#9333EA] mb-4">
                  <AnimatedCounter to={stat.value} duration={2} suffix={stat.suffix || "+"} />
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR PROJECTS STAND OUT */}
      <section className="py-24 px-6 relative z-10 bg-gray-100 dark:bg-white/5 border-y border-gray-200 dark:border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Why Our Projects Stand Out</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Custom Solutions", icon: <Code />, desc: "Tailored specifically to your unique business requirements." },
              { title: "AI-Powered Innovation", icon: <Brain />, desc: "Integrating the latest AI models for maximum efficiency." },
              { title: "Scalable Architecture", icon: <Server />, desc: "Built to handle millions of users effortlessly." },
              { title: "Modern UI/UX", icon: <Monitor />, desc: "Stunning designs that users love to interact with." },
              { title: "Enterprise Security", icon: <Shield />, desc: "Bank-grade encryption and secure data handling." },
              { title: "Long-Term Support", icon: <Zap />, desc: "Dedicated maintenance and continuous optimization." },
            ].map((feat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-[#C084FC] mb-6">{feat.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            <FAQItem question="How long does a typical project take?" answer="A standard web application or MVP usually takes 4-8 weeks. Complex enterprise solutions or custom AI models may take 3-6 months depending on the requirements." />
            <FAQItem question="Can projects be fully customized?" answer="Yes. We do not use templates. Every solution we build is entirely custom-coded from the ground up to perfectly match your business logic and brand guidelines." />
            <FAQItem question="Do you provide post-launch support?" answer="Absolutely. We offer SLA-based support and maintenance contracts to ensure your application remains secure, up-to-date, and fully optimized." />
            <FAQItem question="Can AI be integrated into my existing systems?" answer="Yes! We specialize in building secure APIs and middleware to connect modern AI tools (like custom LLMs) with legacy ERP or CRM systems." />
            <FAQItem question="How do you ensure enterprise security?" answer="We follow DevSecOps practices, utilizing end-to-end encryption, role-based access controls, and regular penetration testing to ensure compliance with enterprise standards." />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 px-6 relative z-10 text-center">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass p-16 rounded-[4rem] border border-[#9333EA]/30 relative overflow-hidden shadow-[0_0_100px_-20px_rgba(37,99,235,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA]/20 via-transparent to-[#C084FC]/20 pointer-events-none" />
            <h2 className="text-5xl md:text-7xl font-space-grotesk font-bold mb-8 relative z-10 text-gray-900 dark:text-white">
              Ready to Build Your Next Digital Solution?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto relative z-10">
              Whether you need an AI-powered application, intelligent automation, a modern web platform, or a custom enterprise solution, DarkCode X AI is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <Link href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-[#C084FC] to-[#9333EA] text-white font-bold text-xl hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.6)] hover:scale-105 transition-all">
                Start Your Project
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-2xl glass border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold text-xl hover:bg-white/10 hover:scale-105 transition-all">
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
