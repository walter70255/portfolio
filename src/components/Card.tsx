"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInVariant } from "./Section";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true }: CardProps) {
  return (
    <motion.div
      variants={fadeInVariant}
      whileHover={hoverEffect ? { y: -8, scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-card text-card-foreground border border-border p-6 rounded-2xl shadow-lg",
        hoverEffect && "hover:border-primary/50 transition-colors",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
