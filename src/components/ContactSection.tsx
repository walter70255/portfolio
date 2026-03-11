"use client";

import { Section } from "./Section";
import { Copy, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "shamvil.dev@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" className="bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-3xl border border-border shadow-xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to start your next <span className="text-primary">project?</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-2xl mx-auto font-normal">
              I&apos;m currently available for ongoing freelance projects and fixed-price contracts. Let&apos;s build something great together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href={`mailto:${email}`}
                className="group flex items-center justify-center h-14 px-8 w-full sm:w-auto rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Say Hello
              </Link>
              <button
                onClick={handleCopy}
                className="group flex items-center justify-center h-14 px-8 w-full sm:w-auto rounded-full bg-secondary text-secondary-foreground font-medium border border-border hover:bg-muted transition-all"
              >
                <Copy className="mr-2 h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                {copied ? "Address Copied!" : "Copy Email"}
              </button>
            </div>

            <div className="pt-8 border-t border-border flex flex-wrap justify-center gap-8 md:gap-16 text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span>India (Flexible Timezones)</span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="https://www.linkedin.com/in/shamvildev/" target="_blank" className="hover:text-primary transition-colors flex items-center">
                  <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                </Link>

              </div>
            </div>
          </div>
        </div>
    </Section>
  );
}
