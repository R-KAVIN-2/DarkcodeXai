"use client";

import { motion, useScroll, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Brain, Bot, Code, Database, Zap, Shield, Target, Rocket, Lightbulb, Users, ChevronRight, Play, ArrowRight,
  Globe, Laptop, Server, Cpu, Microscope, BookOpen, GitPullRequest, FileText, Download, Building, Star, Share2,
  Calendar, CheckCircle2, ChevronDown, Activity, Workflow, MessageSquare, BarChart3
} from "lucide-react";

// Counter Component
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
        duration: duration,
        onUpdate(value) {
          if (nodeRef.current) nodeRef.current.textContent = Math.round(value).toString() + suffix;
        },
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
    <div className="border border-white/10 rounded-2xl mb-4 overflow-hidden glass hover:border-[#00E5FF]/30 transition-colors">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
        <span className="font-bold text-lg text-gray-200">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#00E5FF] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} className="overflow-hidden">
        <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">{answer}</div>
      </motion.div>
    </div>
  );
};

export default function ResearchClient() {
  const containerRef = useRef(null);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <div className="bg-[#030712] min-h-screen text-white overflow-hidden" ref={containerRef}>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#00E5FF]/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#8B5CF6]/10 blur-[150px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-32 px-6 z-10 flex flex-col items-center text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-5xl mx-auto relative">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#8B5CF6]/30 mb-8 text-sm font-medium text-[#8B5CF6]">
            <Microscope size={16} /> DarkCode X AI Research
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-space-grotesk font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 leading-tight">
            Pioneering the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#2563EB] to-[#8B5CF6]">Artificial Intelligence</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            At DarkCode X AI, research drives innovation. We explore emerging AI technologies, develop intelligent systems, and transform cutting-edge ideas into practical solutions that solve real-world business challenges.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#research-areas" className="w-full sm:w-auto px-10 py-5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#2563EB] text-white font-bold text-lg hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.5)] transition-all flex items-center justify-center gap-2">
              Explore Research <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-xl glass border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all">
              Collaborate With Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 1 - OUR RESEARCH PHILOSOPHY */}
      <section className="py-24 px-6 relative z-10 bg-white/5 border-y border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative">
              <div className="aspect-square rounded-full glass border border-white/10 p-2 overflow-hidden flex items-center justify-center group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 to-[#00E5FF]/20 mix-blend-overlay" />
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-[#8B5CF6]/30 rounded-full scale-[0.8]" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dotted border-[#00E5FF]/30 rounded-full scale-[0.6]" />
                <Brain className="w-40 h-40 text-[#8B5CF6] opacity-90 z-10 group-hover:scale-110 transition-transform duration-700" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-space-grotesk font-bold">Innovation Through Research</motion.h2>
              <motion.div variants={fadeInUp} className="w-20 h-1 bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] rounded-full" />
              <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed font-medium">Research is at the core of everything we build.</motion.p>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed">
                We continuously explore Artificial Intelligence, Machine Learning, Data Science, and Intelligent Automation to create scalable, ethical, and impactful solutions.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed">
                Our research combines academic principles with practical engineering to deliver technologies that solve real-world business problems and shape the future.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - RESEARCH AREAS */}
      <section id="research-areas" className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Research Areas</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Pushing the boundaries of what is possible in computer science.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Artificial Intelligence", icon: <Brain />, apps: "AGI, Enterprise AI" },
              { title: "Machine Learning", icon: <Cpu />, apps: "Predictive Models, Classifiers" },
              { title: "Deep Learning", icon: <Activity />, apps: "Neural Networks, Transformers" },
              { title: "Large Language Models", icon: <MessageSquare />, apps: "Custom LLMs, Fine-tuning" },
              { title: "Natural Language Processing", icon: <FileText />, apps: "Sentiment Analysis, Translation" },
              { title: "Computer Vision", icon: <Target />, apps: "Object Detection, Facial Recognition" },
              { title: "Generative AI", icon: <Zap />, apps: "Image Synthesis, Code Generation" },
              { title: "AI Agents", icon: <Bot />, apps: "Autonomous Task Resolution" },
              { title: "Autonomous Systems", icon: <Rocket />, apps: "Robotics, Smart Navigation" },
              { title: "Predictive Analytics", icon: <BarChart3 />, apps: "Forecasting, Risk Analysis" },
              { title: "Recommendation Systems", icon: <Users />, apps: "Personalization, Content Matching" },
              { title: "Data Science", icon: <Database />, apps: "Big Data, Statistical Modeling" },
              { title: "Edge AI", icon: <Laptop />, apps: "IoT Integration, On-device ML" },
              { title: "Responsible AI", icon: <Shield />, apps: "Bias Mitigation, Fairness" },
              { title: "Explainability in AI", icon: <Lightbulb />, apps: "Model Interpretability" },
            ].map((area, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass p-6 rounded-2xl border border-white/10 group hover:border-[#8B5CF6]/50 transition-all hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="scale-[3]">{area.icon}</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center mb-4 text-[#8B5CF6] border border-[#8B5CF6]/20">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-400 text-sm mb-4">Focus: {area.apps}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - CURRENT RESEARCH PROJECTS */}
      <section className="py-24 px-6 relative z-10 bg-white/5 border-y border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Current Research Projects</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Active experiments and developments in our innovation labs.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { title: "Enterprise AI Assistant", goal: "Automate internal knowledge retrieval", tech: ["LLMs", "RAG", "Vector DBs"], progress: 85 },
              { title: "Medical Diagnosis AI", goal: "High-accuracy radiology scanning", tech: ["Computer Vision", "PyTorch"], progress: 60 },
              { title: "Smart Agriculture Platform", goal: "Crop yield prediction", tech: ["Edge AI", "IoT Data", "TensorFlow"], progress: 40 },
              { title: "Vision-Based Defect Detection", goal: "Real-time manufacturing QA", tech: ["CNNs", "OpenCV"], progress: 95 },
            ].map((project, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass rounded-3xl border border-white/10 overflow-hidden flex flex-col group">
                <div className="h-48 bg-[#0a0f1c] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/20 to-transparent mix-blend-overlay opacity-50" />
                  <Microscope className="w-20 h-20 text-white/10 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-[#00E5FF]">Active Research</div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-1">Goal: {project.goal}</p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Research Progress</span>
                      <span className="text-[#00E5FF] font-bold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} whileInView={{ width: `${project.progress}%` }} viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="bg-gradient-to-r from-[#00E5FF] to-[#2563EB] h-full rounded-full" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">{t}</span>
                    ))}
                  </div>

                  <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-semibold text-sm flex items-center justify-center gap-2">
                    View Project Details <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - OUR RESEARCH PROCESS */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Our Research Process</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">From theoretical concept to production-ready deployment.</p>
          </div>

          <div className="relative">
            <div className="absolute left-[28px] md:left-[50px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00E5FF] via-[#8B5CF6] to-transparent opacity-30" />
            
            {[
              "Research Idea", "Literature Review", "Problem Identification", "Data Collection",
              "Model Design", "Model Training", "Evaluation", "Optimization", "Deployment", "Continuous Improvement"
            ].map((step, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative flex items-center gap-8 mb-8"
              >
                <div className="w-14 h-14 rounded-full glass border border-[#00E5FF]/30 flex items-center justify-center shrink-0 z-10 relative bg-[#030712]">
                  <span className="font-bold text-[#00E5FF]">{i + 1}</span>
                </div>
                <div className="glass p-6 rounded-2xl border border-white/10 flex-1 hover:border-[#00E5FF]/30 transition-colors">
                  <h3 className="text-xl font-bold">{step}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - PUBLICATIONS & INSIGHTS */}
      <section className="py-24 px-6 relative z-10 bg-white/5 border-y border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Publications & Insights</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Sharing our discoveries with the global AI community.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Optimizing LLM Inference on Edge Devices", cat: "Machine Learning", date: "Oct 2025" },
              { title: "Advancements in Vision-Language Models for Robotics", cat: "Computer Vision", date: "Sep 2025" },
              { title: "Ethical Alignment in Autonomous AI Agents", cat: "Responsible AI", date: "Aug 2025" },
            ].map((pub, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass rounded-2xl border border-white/10 overflow-hidden group flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-center mb-4 text-xs text-gray-400">
                    <span className="px-3 py-1 bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-full font-medium">{pub.cat}</span>
                    <span>{pub.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#00E5FF] transition-colors">{pub.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">An in-depth analysis of methodologies and experimental results validating our approach to scalable artificial intelligence systems.</p>
                </div>
                <div className="p-6 border-t border-white/5 bg-white/5 flex gap-4">
                  <button className="flex-1 py-2 bg-[#2563EB]/20 text-[#2563EB] hover:bg-[#2563EB]/30 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                    <BookOpen size={16} /> Read Paper
                  </button>
                  <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 transition-colors">
                    <Download size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 10 - RESEARCH STATISTICS */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Research Projects", value: 120 },
              { label: "AI Models Built", value: 450 },
              { label: "Publications", value: 35 },
              { label: "Innovation Awards", value: 12 },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 glass rounded-3xl border border-white/5 hover:border-[#8B5CF6]/30 transition-colors">
                <div className="text-4xl md:text-5xl font-space-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] mb-4">
                  <AnimatedCounter to={stat.value} duration={2} />
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 - FUTURE ROADMAP */}
      <section className="py-24 px-6 relative z-10 bg-white/5 border-y border-white/10">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-16">Future Roadmap</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {[
              { year: "2026", goal: "Advanced AI Agents & Enterprise Platforms" },
              { year: "2027", goal: "Multimodal AI & Autonomous Automation" },
              { year: "2028", goal: "Healthcare AI & Smart Manufacturing" },
              { year: "2029", goal: "Global AI Products & Ecosystems" },
            ].map((node, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                className="flex-1 glass p-6 rounded-2xl border border-white/10 relative group"
              >
                <div className="text-[#00E5FF] font-black text-3xl mb-2">{node.year}</div>
                <p className="text-sm text-gray-300 font-medium">{node.goal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 - FAQ */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">Research FAQ</h2>
          </div>
          <div className="space-y-4">
            <FAQItem question="How does DarkCode X AI handle AI ethics and bias?" answer="We implement strict alignment protocols, adversarial testing, and diverse dataset curation to ensure our models are fair, unbiased, and ethically responsible." />
            <FAQItem question="How can my company collaborate on a research project?" answer="We partner with enterprises to develop custom AI models tailored to their proprietary data. Contact our research team via the collaboration form to begin." />
            <FAQItem question="Are your research publications open-access?" answer="Most of our non-proprietary foundational research is published on arXiv to contribute back to the global AI community." />
            <FAQItem question="What infrastructure do you use for model training?" answer="We utilize highly scalable cloud GPU clusters across AWS and Azure, alongside customized Kubernetes orchestration for distributed training." />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 px-6 relative z-10 text-center">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass p-16 rounded-[4rem] border border-[#8B5CF6]/30 relative overflow-hidden shadow-[0_0_100px_-20px_rgba(139,92,246,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 via-transparent to-[#00E5FF]/20 pointer-events-none" />
            <h2 className="text-5xl md:text-7xl font-space-grotesk font-bold mb-8 relative z-10 text-white">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto relative z-10">
              Partner with DarkCode X AI to explore innovative research, build intelligent AI systems, and create next-generation digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <Link href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#00E5FF] text-white font-bold text-xl hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)] hover:scale-105 transition-all">
                Start a Research Project
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-2xl glass border border-white/20 text-white font-bold text-xl hover:bg-white/10 hover:scale-105 transition-all">
                Become a Research Partner
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
