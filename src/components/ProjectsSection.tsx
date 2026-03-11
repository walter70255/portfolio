"use client";
import { Section } from "./Section";
import { PlayCircle, X } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAssetPath } from "@/lib/utils";

export function ProjectsSection() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const categories = [
    {
      name: "Lakmart – Multi-Vendor Ecosystem",
      description: "Scalable marketplace handling 100+ stores & real-time logistics.",
      projects: [
        {
          id: "lakmart-user",
          title: "Lakmart User App",
          description: "Customer-facing application featuring personalized product feeds, integrated payment gateways, and real-time order tracking via Google Maps API.",
          tags: ["Flutter", "GetX", "Firebase"],
          videoUrl: "https://www.youtube.com/embed/l9QzFfkOXEo",
          image: "/lakmart_user_3Screen.png",
          highlight: "B2C"
        },
        {
          id: "lakmart-vendor",
          title: "Lakmart Vendor Dashboard",
          description: "Comprehensive management tool empowering 100+ vendors to manage their own stores, track inventory, and process incoming orders autonomously.",
          tags: ["Flutter", "REST API", "FCM"],
          videoUrl: "https://www.youtube.com/embed/4CaHfj5tT5Q",
          image: "/lakmart_partner_landscape.png",
          highlight: "B2B"
        },
        {
          id: "lakmart-delivery",
          title: "Lakmart Delivery Boy App",
          description: "Logistics solution for delivery personnel featuring real-time location streaming, optimized routing, and instantaneous order assignments.",
          tags: ["Flutter", "Maps", "Location"],
          videoUrl: "https://www.youtube.com/embed/1X5SWKzcPjU",
          image: "/lakmart_delivery_man_landscape.png",
          highlight: "Logistics"
        }
      ]
    },
    {
      name: "Other Featured Projects",
      description: "Proven solutions delivering real-world impact across diverse industries.",
      projects: [
        {
          id: "barber-queue",
          title: "Barber Shop Queue System",
          description: "Digitized queue management for a stylist chain. Reduced average customer wait time from 45 minutes to 15 minutes. Enabled remote queue joining (60% usage).",
          tags: ["Flutter", "Firebase DB", "FCM"],
          videoUrl: "https://www.youtube.com/embed/qWKPbxtJJNM",
          image: "/queue_landscape.png",
          highlight: "Service Tech"
        },
        {
          id: "whatsapp-clone",
          title: "WhatsApp-Style Messaging App",
          description: "A one-to-one text messaging application with a clean UI and real-time chat. Features push notifications for new messages and smooth, reliable delivery.",
          tags: ["Flutter", "Firestore", "FCM"],
          videoUrl: "https://www.youtube.com/embed/yDc2to7Zy2Q",
          image: "/whatsapp_clone_landscape.png",
          highlight: "Real-time"
        },
        {
          id: "gaming-platform",
          title: "Gaming Account Selling Platform",
          description: "A specialized e-commerce platform for buying and selling gaming accounts. Features secure user authentication and a streamlined browsing experience.",
          tags: ["Flutter", "Auth", "Firestore"],
          videoUrl: "https://www.youtube.com/embed/ngWzBdmwdlk",
          image: "/bgmi_landscape.png",
          highlight: "E-Commerce"
        }
      ]
    }
  ];

  return (
    <Section id="projects" className="bg-background">
      <div className="mb-24">
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6">
          Selected <span className="text-primary">Works</span>
        </h2>
        <div className="w-20 h-1 bg-primary mb-8" />
        <p className="text-muted-foreground max-w-2xl text-lg md:text-xl font-normal">
          Building high-performance digital products for scale.
        </p>
      </div>

      <div className="space-y-32">
        {categories.map((category, catIdx) => (
          <div key={catIdx}>
            <div className="mb-12 border-b border-border pb-8">
              <h3 className="text-2xl font-bold mb-2 tracking-tight">{category.name}</h3>
              <p className="text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.projects.map((project: any, idx) => {
                const isPlaying = playingVideo === project.id;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative bg-[#050505] rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] cursor-pointer"
                    onClick={() => !isPlaying && setPlayingVideo(project.id)}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      {isPlaying ? (
                        <div className="absolute inset-0">
                          <iframe
                            src={`${project.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                            title={project.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlayingVideo(null);
                            }}
                            className="absolute top-2 right-2 z-10 p-1.5 bg-black/60 hover:bg-black/90 rounded-full text-white transition-colors border border-white/10"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ) : (
                        <>
                          {project.image ? (
                            <Image
                              src={getAssetPath(project.image)}
                              alt={`${project.title} Preview`}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                              <div className="text-white">
                                <FaWhatsapp size={48} />
                              </div>
                            </div>
                          )}

                          {/* Play Icon - Unobtrusive but clear */}
                          <div className="absolute inset-0 z-10 pointer-events-none transition-colors duration-300 group-hover:bg-black/20">
                            <div
                              className="absolute bottom-4 right-4 pointer-events-auto text-white bg-black/60 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer drop-shadow-lg"
                              onClick={() => setPlayingVideo(project.id)}
                            >
                              <PlayCircle size={48} strokeWidth={1.5} />
                            </div>
                          </div>

                          <div className="absolute top-4 left-4">
                            <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-[9px] font-bold text-primary uppercase tracking-widest">
                              {project.highlight}
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6 font-normal leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string, tIdx: number) => (
                          <span key={tIdx} className="px-2 py-1 bg-white/5 rounded-md text-[10px] text-muted-foreground font-mono uppercase tracking-tighter border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
