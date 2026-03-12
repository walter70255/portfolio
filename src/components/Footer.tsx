import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              SHAMVIL <span className="text-primary">SHAHIN</span>
            </Link>
            <p className="mt-2 text-muted-foreground max-w-sm">
              Full Stack Flutter Developer specializing in multi-vendor marketplaces, real-time service platforms, and messaging solutions.
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">

            <a
              href="https://www.linkedin.com/in/shamvildev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:shamvil.dev@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-center items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shamvil Shahin M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
