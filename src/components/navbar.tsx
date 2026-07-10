"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Portfolio", href: "/projects" },

  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="DarkCode X AI Logo" className="h-12 w-auto bg-white p-1 rounded-lg" />
          <span className="font-space-grotesk text-xl font-bold tracking-tighter text-gray-900 dark:text-white hidden sm:block">
            DarkCode <span className="text-primary">X</span> AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/admin/login"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-white transition-colors"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full bg-primary text-background font-semibold text-sm hover:bg-primary/90 transition-colors glow-primary"
          >
            Book Meeting
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-900 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass absolute top-20 left-0 right-0 p-6 flex flex-col gap-4 border-t border-gray-200 dark:border-white/10"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-gray-200 dark:bg-white/10 my-2" />
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300 font-medium">Theme</span>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-white transition-colors"
            >
              <Sun className="h-5 w-5 hidden dark:block" />
              <Moon className="h-5 w-5 block dark:hidden" />
            </button>
          </div>
          <Link
            href="/admin/login"
            className="w-full text-center px-5 py-3 mt-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-semibold hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Admin Login
          </Link>
          <Link
            href="/contact"
            className="w-full text-center px-5 py-3 mt-2 rounded-lg bg-primary text-background font-semibold hover:bg-primary/90 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Meeting
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
