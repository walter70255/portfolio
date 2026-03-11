"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Smartphone, Code, Rocket } from "lucide-react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-24 md:justify-center md:pt-0 overflow-hidden w-full bg-grid-white">
      {/* Background radial highlight (simplified) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0,transparent_70%)] pointer-events-none" />

      <div className="z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary mb-6 md:mb-12"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          Available for Freelance Projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-9xl font-bold tracking-tight mb-6 md:mb-8 leading-[0.85]"
        >
          Crafting Digital <br />
          <span className="text-primary italic">Masterpieces</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl font-normal leading-relaxed"
        >
          <div className="text-foreground font-bold mb-2 h-[1.5em] flex justify-center gap-1.5">
            <span>Hey,</span>
            <Typewriter
              options={{
                strings: ["I'm Shamvil.", "I'm a Flutter Developer.", "I can build mobile apps"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                wrapperClassName: "text-white"
              }}
            />
          </div>
          Scaling businesses with Cross-Platform Apps & high-performance backends.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-[280px] sm:max-w-none sm:w-auto"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center h-14 w-full sm:w-56 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95"
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>

          <a
            href="mailto:shamvil.dev@gmail.com"
            className="inline-flex items-center justify-center h-14 w-full sm:w-56 rounded-full bg-white/5 text-foreground font-semibold border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-95"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
