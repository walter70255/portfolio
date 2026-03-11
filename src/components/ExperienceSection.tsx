"use client";
import { Section } from "./Section";
import { Briefcase, Calendar, MapPin, CheckCircle2, Milestone } from "lucide-react";
import { motion } from "framer-motion";

export function ExperienceSection() {
  const experiences = [
    {
      role: "Freelance Full Stack Flutter Developer",
      company: "Self-Employed",
      period: "2022 – Present",
      location: "Remote",
      achievements: [
        "Delivered 6+ complete Flutter applications for clients in e‑commerce, service, and messaging industries.",
        "Built a multi‑vendor marketplace platform (3 apps: User, Vendor, Delivery) handling 100+ vendors.",
        "Developed a digital queue management system for stylist chains, reducing wait times by 60%.",
        "Reduced app crash rate by 30% through Firebase monitoring and proactive optimization.",
        "Maintained 95% client satisfaction through clear communication and on‑time delivery."
      ]
    }
  ];

  return (
    <Section id="experience" className="bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 rounded-full" />
      
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Professional <span className="text-primary italic">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-normal">
            A focused look at my high-impact contributions.
          </p>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto relative px-4">
        {/* The Roadmap Line */}
        <div className="absolute left-8 md:left-8 top-0 bottom-12 w-px bg-gradient-to-b from-primary/40 via-primary/10 to-transparent" />

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative mb-8 last:mb-0">
            {/* Roadmap Marker */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute left-8 md:left-8 top-6 -translate-x-1/2 z-20"
            >
              <div className="w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
            </motion.div>

            <div className="pl-16">
              {/* Card Section */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="group relative p-6 bg-[#050505] rounded-2xl border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                        <Briefcase className="w-3.5 h-3.5" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1.5">
                      <span className="px-2.5 py-0.5 bg-primary/10 rounded-full text-[9px] font-bold text-primary uppercase tracking-wider border border-primary/20 w-fit">
                        {exp.period}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {exp.achievements.map((achievement, aIdx) => (
                      <div key={aIdx} className="flex gap-2.5 text-[13px] text-muted-foreground leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary/50 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

