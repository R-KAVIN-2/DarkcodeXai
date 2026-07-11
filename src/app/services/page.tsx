import { Bot, Cpu, Globe, Database, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Services & Tech Solutions | DarkCode X AI",
  description: "Explore our premium services: Custom LLMs, Smart Automation, Web Development, and Data Engineering tailored for modern enterprises.",
  openGraph: {
    title: "AI Services & Tech Solutions | DarkCode X AI",
    description: "Explore our premium services: Custom LLMs, Smart Automation, Web Development, and Data Engineering.",
    url: "https://darkcodexai.com/services",
  }
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl font-space-grotesk font-bold text-gray-900 dark:text-white mb-6">Our Premium Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            We provide cutting-edge technology solutions that transform businesses. From advanced AI models to scalable enterprise platforms, our services are designed for the future.
          </p>
        </div>

        <div className="space-y-32">
          {/* Service 1 */}
          <ServiceSection 
            id="ai"
            title="Artificial Intelligence"
            description="Leverage the power of modern AI to extract insights, automate decisions, and create intelligent products. We specialize in building custom LLMs, computer vision systems, and predictive analytics platforms."
            icon={<Image src="/home-ai-icon.png" alt="AI Icon" width={80} height={80} className="w-full h-full object-cover" />}
            imageSrc="/services-ai-image.png"
            features={["Custom LLM Development", "Computer Vision & OCR", "Predictive Analytics", "AI Chatbots & Agents"]}
            reversed={false}
          />

          {/* Service 2 */}
          <ServiceSection 
            id="automation"
            title="Smart Automation"
            description="Eliminate repetitive tasks and streamline your workflows with our intelligent automation solutions. We build robust RPA bots and business process automation systems."
            icon={<Image src="/home-automation-icon.png" alt="Automation Icon" width={80} height={80} className="w-full h-full object-cover" />}
            imageSrc="/services-automation-image.jpg"
            features={["Workflow Automation", "CRM & HR Automation", "Robotic Process Automation", "Automated Email & Marketing"]}
            reversed={true}
          />

          {/* Service 3 */}
          <ServiceSection 
            id="web"
            title="Website & App Development"
            description="We build world-class, highly scalable web applications and SaaS platforms using modern frameworks like Next.js, React, and Node.js. Focus on performance, SEO, and premium UI/UX."
            icon={<Image src="/home-web-icon.png" alt="Web Development Icon" width={80} height={80} className="w-full h-full object-cover" />}
            imageSrc="/services-web-image.png"
            features={["Enterprise Web Apps", "SaaS Platform Development", "High-Performance Landing Pages", "Admin Dashboards"]}
            reversed={false}
          />

          {/* Service 4 */}
          <ServiceSection 
            id="data"
            title="Data Engineering"
            description="Transform your raw data into actionable business intelligence. We design robust ETL pipelines, data warehouses, and stunning interactive dashboards."
            icon={<Image src="/home-data-icon.png" alt="Data Engineering Icon" width={80} height={80} className="w-full h-full object-cover" />}
            imageSrc="/services-data-image.png"
            features={["Data Engineering & ETL", "Interactive Dashboards", "Big Data Processing", "Business Intelligence"]}
            reversed={true}
          />
        </div>
      </div>
    </div>
  );
}

function ServiceSection({ id, title, description, icon, imageSrc, features, reversed }: { id?: string, title: string, description: string, icon: React.ReactNode, imageSrc?: string, features: string[], reversed: boolean }) {
  return (
    <div id={id} className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 scroll-mt-32`}>
      <div className="flex-1 space-y-6">
        <div className="w-20 h-20 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center mb-6 overflow-hidden">
          {icon}
        </div>
        <h2 className="text-4xl font-space-grotesk font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3 pt-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="pt-6">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-primary hover:border-primary text-white transition-all group">
            Consult With Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
      <div className="flex-1 w-full relative">
        {imageSrc ? (
          <div className="aspect-[4/3] max-w-lg mx-auto rounded-3xl relative overflow-hidden glass border border-[#C084FC]/20 shadow-[0_0_40px_-10px_rgba(192,132,252,0.3)]">
            <Image 
              src={imageSrc} 
              alt={`DarkCode X AI Technology Service: ${title}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="aspect-square max-w-md mx-auto glass rounded-full relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 animate-spin-slow" />
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
