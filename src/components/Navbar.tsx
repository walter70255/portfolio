"use client";

import Link from "next/link";
import { Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

import { motion, useScroll, useSpring } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="md:hidden text-xl font-bold tracking-tighter">
              Shamvil<span className="text-primary">&lt;/&gt;</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Social/Contact */}
          <div className="hidden md:flex items-center space-x-4">

            <Link
              href="https://www.linkedin.com/in/shamvildev/"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:shamvil.dev@gmail.com"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Hire Me</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/80 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-background border-b border-border transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                // Allows the browser to process the anchor jump before hiding the menu
                setTimeout(() => setIsOpen(false), 100);
              }}
              className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-center cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-6 py-4">

            <Link href="https://www.linkedin.com/in/shamvildev/" target="_blank">
              <Linkedin className="w-6 h-6 text-foreground/80 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
