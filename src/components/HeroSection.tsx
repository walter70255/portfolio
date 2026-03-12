"use client";
import { motion } from "framer-motion";
import { SiApple, SiAndroid, SiFlutter } from "react-icons/si";
import { ArrowRight, Mail } from "lucide-react";
import Typewriter from "typewriter-effect";

const FloatingIcon = ({ icon: Icon, color, bgColor, delay, initialX, initialY, duration = 3 }: { icon: any, color: string, bgColor: string, delay: number, initialX: string, initialY: string, duration?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.7, 1, 0.7],
      scale: 1,
      y: [0, -15, 0],
      x: [0, 5, 0]
    }}
    transition={{ 
      opacity: { duration, repeat: Infinity, ease: "easeInOut" },
      y: { duration, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 },
      x: { duration: duration * 1.2, repeat: Infinity, ease: "easeInOut", delay: delay * 0.3 },
      scale: { duration: 0.5, delay }
    }}
    className={`absolute ${initialX} ${initialY} z-0 pointer-events-none`}
  >
    <div 
      className="p-2 md:p-4 rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl flex items-center justify-center transition-all duration-300 hover:border-white/20"
      style={{ 
        boxShadow: `0 0 20px ${color}22`,
        background: `linear-gradient(135deg, ${bgColor} 0%, rgba(255,255,255,0) 100%)`,
        backgroundColor: bgColor
      }}
    >
      <Icon className="text-xl md:text-5xl" style={{ color, filter: `drop-shadow(0 0 8px ${color}88)` }} />
    </div>
  </motion.div>
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 md:py-0 overflow-hidden w-full bg-grid-white">
      {/* Background radial highlight (simplified) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0,transparent_70%)] pointer-events-none" />

      <div className="z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary mb-6 md:mb-12"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          Available for Freelance Projects
        </motion.div>

        <div className="relative mb-6 md:mb-8 w-full max-w-4xl mx-auto flex items-center justify-center min-h-[160px] md:min-h-[220px]">
          <FloatingIcon 
            icon={SiFlutter} 
            color="#02569B" 
            bgColor="rgba(2, 86, 155, 0.15)"
            delay={0.2} 
            initialX="-left-4 md:-left-40" 
            initialY="top-0 md:top-4" 
          />
          <FloatingIcon 
            icon={SiApple} 
            color="#FFFFFF" 
            bgColor="rgba(255, 255, 255, 0.1)"
            delay={0.4} 
            initialX="-right-4 md:-right-40" 
            initialY="top-4 md:top-8" 
            duration={4}
          />
          <FloatingIcon 
            icon={SiAndroid} 
            color="#34A853" 
            bgColor="rgba(52, 168, 83, 0.15)"
            delay={0.6} 
            initialX="-left-2 md:-left-24" 
            initialY="bottom-0" 
            duration={3.5}
          />
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-8xl font-bold tracking-tight leading-[1.1] relative z-20 pointer-events-none"
          >
            Turn Your Ideas<br />
            <span className="text-primary italic">Into Apps</span>
          </motion.h1>
        </div>

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
