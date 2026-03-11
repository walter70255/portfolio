import { Section } from "./Section";
import Image from "next/image";
// import { getAssetPath } from "@/lib/utils"; // Removed to rely on Next.js basePath

export function AboutSection() {
  return (
    <Section id="about" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              With 3 years of experience as a full-stack Flutter developer, I specialize in building complete, scalable cross‑platform applications. My true passion lies in turning complex concepts into seamless, high-performance mobile experiences.
            </p>
            <p>
              I take pride in handling the entire lifecycle of an app—from responsive UIs with GetX and Provider to powerful, secure backend architectures using Firebase (Auth, Firestore, Realtime DB, Cloud Functions).
            </p>
            <p>
              Whether it&apos;s a multi-vendor marketplace handling 100+ stores or a real-time messaging application, I focus on delivering reliable, beautifully designed solutions that directly drive business value.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="border-l-2 border-primary pl-4">
              <div className="text-3xl font-bold text-foreground">3+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Years Exp.</div>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <div className="text-3xl font-bold text-foreground">6+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Apps Shipped</div>
            </div>
          </div>
        </div>

        {/* Right: Graphic/Image */}
        <div className="relative">
          <div className="aspect-square max-w-md mx-auto relative rounded-3xl overflow-hidden bg-muted/20 border border-border/50 group">
            {/* Developer Profile Photo */}
            <Image
              src="/shamvil_enhanced_1773252661729.png"
              alt="Shamvil Shahin M - Full Stack Flutter Developer"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            {/* Subtle gradient overlay to ensure it blends well with dark mode */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/0 to-transparent pointer-events-none" />
          </div>
          
          {/* Decorative elements behind the image block */}
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10 animate-pulse lg:opacity-50" />
        </div>
      </div>
    </Section>
  );
}
