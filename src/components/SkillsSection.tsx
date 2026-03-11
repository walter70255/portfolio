"use client";
import { Section } from "./Section";
import { 
  Smartphone, 
  Server, 
  Database, 
  Settings, 
  Code2, 
  Layers, 
  Globe, 
  GitBranch,
  Cpu,
  ShieldCheck,
  Zap,
  Layout
} from "lucide-react";
import { 
  SiFlutter, 
  SiDart, 
  SiFirebase, 
  SiGooglemaps, 
  SiPostman, 
  SiGithub, 
  SiJavascript, 
  SiJson, 
  SiAuth0 
} from "react-icons/si";
import { motion } from "framer-motion";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Smartphone className="w-10 h-10 text-primary" />,
      description: "Building reactive, high-performance UIs.",
      skills: [
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
        { name: "Dart", icon: <SiDart className="text-[#0175C2]" /> },
        { name: "GetX", icon: <Zap className="text-yellow-500" /> },
        { name: "Provider", icon: <Layers className="text-blue-400" /> },
        { name: "Responsive UI", icon: <Layout className="text-green-400" /> },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-10 h-10 text-primary" />,
      description: "Scale-ready cloud architectures.",
      skills: [
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: "Auth", icon: <SiAuth0 className="text-[#EB5424]" /> },
        { name: "Firestore", icon: <Database className="text-[#FFCA28]" /> },
        { name: "FCM", icon: <Zap className="text-orange-500" /> },
        { name: "Functions", icon: <Code2 className="text-[#039BE5]" /> },
      ],
    },
    {
      title: "APIs & Core Tech",
      icon: <Cpu className="w-10 h-10 text-primary" />,
      description: "Deep technical integrations.",
      skills: [
        { name: "REST API", icon: <Globe className="text-blue-400" /> },
        { name: "Google Maps", icon: <SiGooglemaps className="text-[#4285F4]" /> },
        { name: "Payments", icon: <ShieldCheck className="text-emerald-400" /> },
        { name: "JSON", icon: <SiJson className="text-foreground" /> },
      ],
    },
    {
      title: "Workflow & Tools",
      icon: <Settings className="w-10 h-10 text-primary" />,
      description: "Optimized development lifecycle.",
      skills: [
        { name: "Git", icon: <GitBranch className="text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="text-foreground" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      ],
    },
  ];

  return (
    <Section id="skills" className="bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-normal">
            Precision engineering across the full stack.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-6 bg-[#050505] rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-200 group/skill"
                  title={skill.name}
                >
                  <span className="text-base group-hover/skill:scale-110 transition-transform duration-200">
                    {skill.icon}
                  </span>
                  <span className="text-[11px] font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors uppercase tracking-tight">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

