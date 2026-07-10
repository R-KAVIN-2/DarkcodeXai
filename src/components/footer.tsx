import Link from "next/link";
import { Code, Camera, Briefcase, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-background pt-16 pb-8 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-32 bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="DarkCode X AI Logo" className="h-12 w-auto bg-white p-1 rounded-lg" />
              <span className="font-space-grotesk text-xl font-bold tracking-tighter text-gray-900 dark:text-white">
                DarkCode <span className="text-primary">X</span> AI
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Building the Future with Artificial Intelligence. We create intelligent
              AI-powered products, scalable software, and smart automation systems.
            </p>
            <a href="mailto:infodarkcodexai@gmail.com" className="text-primary hover:text-white transition-colors text-sm font-medium mt-2">
              infodarkcodexai@gmail.com
            </a>
            <div className="flex items-center gap-4 mt-4">
              <SocialLink href="#" icon={<MessageSquare className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Briefcase className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Code className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Camera className="w-5 h-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/projects">Portfolio</FooterLink>
              <FooterLink href="/research">AI Research</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Services</h3>
            <ul className="flex flex-col gap-3">
              <FooterLink href="/services/ai">Artificial Intelligence</FooterLink>
              <FooterLink href="/services/automation">Smart Automation</FooterLink>
              <FooterLink href="/services/web">Website Development</FooterLink>
              <FooterLink href="/services/data">Data Solutions</FooterLink>
              <FooterLink href="/services/consulting">AI Consulting</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to get the latest AI insights and product updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 text-sm text-gray-900 dark:text-white outline-none focus:border-primary transition-colors flex-1"
                required
              />
              <button
                type="submit"
                className="bg-primary text-background px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} DarkCode X AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-background transition-all"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
      >
        <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all" />
        {children}
      </Link>
    </li>
  );
}
