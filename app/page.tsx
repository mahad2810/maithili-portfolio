"use client"

import { motion } from "framer-motion"
import { Home, Play, Layers, Mail, Clapperboard, Scissors, PenTool, Rocket, Heart, X, MousePointer2, Film } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function PortfolioPage() {
  const [emailCopied, setEmailCopied] = useState(false)

  const skills = ["Visual Narratives (Video)", "Interface Design (UI/UX)", "Motion Graphics", "Brand Identity", "Figma", "Canva"]

  const videoProjects = [
    { id: 1, title: "The Plot: Visual Diary", tags: ["Lifestyle Vlogging", "Color Grading"], featured: true, video: "/video-main.mp4" },
    { id: 2, title: "Soul of Kashi", tags: ["Travel Cinematography", "Sound Design"], video: "/video-2.mp4" },
    { id: 3, title: "Campus Chronicles: KGP", tags: ["Short-Form Storytelling", "Documentary"], video: "/video-3.mp4" },
    { id: 4, title: "Kolkata: The Night Peak", tags: ["Event Videography", "Low Light"], video: "/video-4.mp4" },
    { id: 5, title: "The Summer Arc: Lab Life", tags: ["Corporate Vlogging", "Pacing"], video: "/video-5.mp4" },
    { id: 6, title: "Dot & Key: Commercial", tags: ["Product Cinematography", "Motion Text"], video: "/video-ui-ux.mp4" },
  ]

  const uiProjects = [
    { 
      id: 7, 
      title: "Savory: Mobile Menu", 
      tags: ["Mobile App Design", "UX Research"], 
      skillRating: 5, 
      image: "/menu-1.jpg",
      images: ["/menu-1.jpg", "/menu-2.jpg"]
    },
    { id: 8, title: "Soil & Sage: E-Commerce", tags: ["Web Design", "Branding"], skillRating: 5, image: "/menu-3.jpg" },
  ]

  const processSteps = [
    { icon: Clapperboard, title: "Filming", description: "Capture the vision" },
    { icon: Scissors, title: "Editing", description: "Craft the story" },
    { icon: PenTool, title: "Designing", description: "Perfect the pixels" },
    { icon: Rocket, title: "Launch", description: "Deliver excellence" },
  ]

  const copyEmail = () => {
    navigator.clipboard.writeText("maithilikumar58261@gmail.com")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#F3C5D1" }} id="home">
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(144, 51, 69, 0.05)" }}
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(144, 51, 69, 0.05)" }}
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Grain Texture Overlay */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[15%] left-[5%] w-24 h-24 rounded-full border-2 border-[#903345]/10 hidden md:block"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-32 h-32 rounded-full border border-[#903345]/10 hidden md:block"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <svg className="absolute top-[20%] right-[45%] w-12 h-12 text-[#903345]/10 hidden lg:block" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 pb-32">
        {/* Hero Section */}
        <motion.section
          className="min-h-[90vh] flex items-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Elements */}
          <motion.div
            className="absolute top-0 left-0 md:top-10 md:left-10 text-[#903345]/10 hidden lg:block pointer-events-none"
            animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Film className="w-32 h-32" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-[40%] text-[#903345]/10 hidden lg:block pointer-events-none"
            animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          >
            <MousePointer2 className="w-24 h-24" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full relative z-10">
            {/* Left Side */}
            <div className="space-y-8">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#903345]">
                    <img src="/profile-photo.jpg" alt="Maithili Kumar" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xl font-medium" style={{ color: "#903345" }}>Maithili Kumar</span>
                </div>
                <h1
                  className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-balance leading-[1.1]"
                  style={{ color: "#903345" }}
                >
                  Visual Storyteller & Interface Architect
                </h1>
              </motion.div>

              <motion.p
                className="text-xl text-pretty"
                style={{ color: "#903345" }}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                A hybrid creator merging cinematic storytelling with interface design. Making brands move and interfaces
                sing.
              </motion.p>

              {/* Skills Ticker */}
              <motion.div
                className="overflow-hidden"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="flex flex-wrap gap-4 items-center py-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-2 whitespace-nowrap px-3 py-1 rounded-full border border-[#903345]/20 bg-[#903345]/5"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <Heart className="w-4 h-4 fill-current" style={{ color: "#903345" }} />
                      <span className="text-sm font-medium" style={{ color: "#903345" }}>
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side - Showreel Container */}
            <motion.div
              initial={{ y: 60, opacity: 0, rotateY: -15 }}
              animate={{ y: 0, opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              <div className="relative group">
                <div
                  className="absolute -inset-4 rounded-[30px] blur-2xl group-hover:opacity-30 transition-opacity"
                  style={{ backgroundColor: "rgba(144, 51, 69, 0.2)", opacity: 0.2 }}
                />

                <div
                  className="relative rounded-[30px] overflow-hidden transform rotate-1 group-hover:rotate-0 transition-transform duration-300"
                  style={{
                    backgroundColor: "#FDF1DC",
                    border: "3px solid #FDF1DC",
                    boxShadow: "0 20px 40px rgba(144, 51, 69, 0.15)",
                  }}
                >
                  <video
                    src="/hero-video.mp4"
                    className="w-full aspect-video object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/50 rounded-tr-xl" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/50 rounded-bl-xl" />
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: "#903345" }}>Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#903345] to-transparent" />
          </motion.div>
        </motion.section>

        {/* Video Editing Section */}
        <motion.section
          id="video-work"
          className="py-24 relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Film Strip Decoration Left */}
          <div className="absolute -left-4 top-24 bottom-24 w-8 flex flex-col justify-between opacity-10 pointer-events-none hidden xl:flex">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-4 h-6 bg-[#903345] rounded-sm" />
            ))}
          </div>
          {/* Film Strip Decoration Right */}
          <div className="absolute -right-4 top-24 bottom-24 w-8 flex flex-col justify-between opacity-10 pointer-events-none hidden xl:flex items-end">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-4 h-6 bg-[#903345] rounded-sm" />
            ))}
          </div>

          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight" style={{ color: "#903345" }}>
              Video Editing
            </h2>
            <div className="h-px flex-1 bg-[#903345]/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative rounded-[30px] overflow-hidden hover:shadow-xl transition-all aspect-video cursor-pointer"
                style={{
                  backgroundColor: "#FDF1DC",
                  border: "2px solid #903345",
                  boxShadow: "0 8px 20px rgba(144, 51, 69, 0.08)",
                }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-full h-full relative">
                      {project.video ? (
                        <>
                          <video
                            src={project.video}
                            className="w-full h-full object-cover"
                            muted
                            loop
                            autoPlay
                            playsInline
                          />
                        </>
                      ) : (
                        <>
                          <img
                          src={`/.jpg?height=400&width=600&query=${project.title.toLowerCase().replace(/\s+/g, "+")}`}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </>
                      )}
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-[2px]">
                        <div className="w-14 h-14 rounded-full bg-[#903345]/90 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <Play className="w-6 h-6 text-[#FDF1DC] fill-[#FDF1DC] ml-1" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                        <h3 className="font-bold text-white text-sm mb-1">{project.title}</h3>
                        <div className="flex gap-1">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30 text-xs backdrop-blur-sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl p-0 bg-black border-none">
                    {project.video && (
                      <video src={project.video} className="w-full h-auto max-h-[80vh]" controls autoPlay />
                    )}
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* UI/UX Design Section */}
        <motion.section
          id="ui-work"
          className="py-24 relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Grid Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: `linear-gradient(#903345 1px, transparent 1px), linear-gradient(90deg, #903345 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} 
          />

          <div className="flex items-center gap-3 mb-8 md:mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight" style={{ color: "#903345" }}>
              UI/UX Design
            </h2>
            <div className="h-px flex-1 bg-[#903345]/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {uiProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative rounded-[30px] overflow-hidden hover:shadow-xl transition-all aspect-square cursor-pointer"
                style={{
                  backgroundColor: "#FDF1DC",
                  border: "2px solid #903345",
                  boxShadow: "0 8px 20px rgba(144, 51, 69, 0.08)",
                }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-full h-full flex flex-col">
                      <div className="relative w-full h-3/5 overflow-hidden bg-gray-100">
                        {project.images ? (
                          <div className="w-full h-full">
                            <Carousel opts={{ loop: true }} className="w-full h-full group/carousel">
                              <CarouselContent className="h-full ml-0">
                                {project.images.map((img, i) => (
                                  <CarouselItem key={i} className="h-full pl-0">
                                    <img
                                      src={img}
                                      alt={`${project.title} - ${i + 1}`}
                                      className="w-full h-full object-cover"
                                    />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                              <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                                <div className="pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                                  <CarouselPrevious className="relative left-0 translate-y-0 h-8 w-8 bg-white/80 hover:bg-white text-[#903345] border-none opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                                </div>
                                <div className="pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                                  <CarouselNext className="relative right-0 translate-y-0 h-8 w-8 bg-white/80 hover:bg-white text-[#903345] border-none opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                                </div>
                              </div>
                            </Carousel>
                          </div>
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                          />
                        )}
                      </div>
                      <div className="p-6 h-2/5 flex flex-col justify-between bg-[#FDF1DC] relative z-10">
                        <div>
                          <h3 className="font-bold text-lg mb-2" style={{ color: "#903345" }}>
                            {project.title}
                          </h3>
                          <div className="flex gap-2 flex-wrap mb-3">
                            {project.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs"
                                style={{ borderColor: "#903345", color: "#903345" }}
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {/* Heart skill rating */}
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Heart
                              key={i}
                              className={`w-4 h-4 ${i < project.skillRating ? "fill-current" : ""}`}
                              style={{ color: i < project.skillRating ? "#903345" : "rgba(144, 51, 69, 0.2)" }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
                    <div className="relative w-full">
                      <DialogClose className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors">
                        <X className="w-5 h-5" />
                      </DialogClose>
                      {project.images ? (
                        <Carousel opts={{ loop: true }} className="w-full max-h-[85vh]">
                          <CarouselContent>
                            {project.images.map((img, i) => (
                              <CarouselItem key={i} className="flex items-center justify-center">
                                <img
                                  src={img}
                                  alt={`${project.title} - ${i + 1}`}
                                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-4 bg-white/80 hover:bg-white text-[#903345] border-none" />
                          <CarouselNext className="right-4 bg-white/80 hover:bg-white text-[#903345] border-none" />
                        </Carousel>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                        />
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="py-24 rounded-[30px]"
          style={{ backgroundColor: "#FDF1DC" }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-12 md:mb-16 text-center" style={{ color: "#903345" }}>
            The Creative Process
          </h2>

          <div className="relative px-6">
            <svg className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 hidden lg:block" style={{ zIndex: 0 }}>
              <motion.line
                x1="10%"
                y1="50%"
                x2="90%"
                y2="50%"
                stroke="#903345"
                strokeWidth="2"
                strokeDasharray="10 5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="flex flex-col items-center text-center space-y-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div
                      className="absolute inset-0 rounded-full blur-xl"
                      style={{ backgroundColor: "rgba(144, 51, 69, 0.3)", opacity: 0.3 }}
                    />
                    <div
                      className="relative rounded-full p-8"
                      style={{
                        backgroundColor: "#2C2C34",
                        border: "3px solid #F3C5D1",
                        boxShadow: "0 10px 30px rgba(144, 51, 69, 0.2)",
                      }}
                    >
                      <step.icon className="w-12 h-12" style={{ color: "#F3C5D1" }} />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: "#903345" }}>
                      {step.title}
                    </h3>
                    <p style={{ color: "#903345" }}>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <footer id="contact" className="relative z-10 py-24" style={{ backgroundColor: "#2C2C34" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-balance"
              style={{ color: "#F3C5D1" }}
            >
              Let's Talk
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: "#F3C5D1" }}>
              Ready to bring your vision to life? Whether it's video, design, or both — let's make it happen.
            </p>
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg" style={{ color: "#F3C5D1" }}>maithilikumar58261@gmail.com</p>
              <p className="text-lg" style={{ color: "#F3C5D1" }}>+91 9831455224</p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-[30px] transition-colors"
                style={{
                  backgroundColor: "#2C2C34",
                  color: "#FDF1DC",
                  border: "2px solid #F3C5D1",
                }}
                onClick={copyEmail}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#903345"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#2C2C34"
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                {emailCopied ? "Copied!" : "Copy Email"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-[30px] bg-transparent"
                style={{
                  borderColor: "#F3C5D1",
                  color: "#F3C5D1",
                  backgroundColor: "transparent",
                }}
              >
                View Resume
              </Button>
            </div>
          </motion.div>

          <div className="mt-16 pt-8 border-t text-center" style={{ borderColor: "#F3C5D1", color: "#F3C5D1" }}>
            <p>&copy; 2025 Maithili Kumar. Crafted with precision.</p>
          </div>
        </div>
      </footer>

      <motion.nav
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <div
          className="backdrop-blur-md rounded-[30px] px-6 py-4"
          style={{
            backgroundColor: "#2C2C34",
            border: "2px solid #F3C5D1",
            boxShadow: "0 10px 40px rgba(144, 51, 69, 0.2)",
          }}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 mr-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#F3C5D1]">
                <img src="/profile-photo.jpg" alt="Maithili" className="w-full h-full object-cover" />
              </div>
              <span className="text-[#F3C5D1] font-medium hidden md:block whitespace-nowrap">Maithili Kumar</span>
            </div>
            <div className="w-[1px] h-8 bg-[#F3C5D1]/20 mx-1" />
            {[
              { icon: Home, label: "Home", id: "home" },
              { icon: Play, label: "Video Work", id: "video-work" },
              { icon: Layers, label: "UI Work", id: "ui-work" },
              { icon: Mail, label: "Contact", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.label}
                className="relative group p-3 rounded-2xl transition-colors"
                style={{ backgroundColor: "transparent" }}
                whileHover={{ y: -8, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(243, 197, 209, 0.2)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                }}
              >
                <item.icon className="w-6 h-6" style={{ color: "#FDF1DC" }} />

                {/* Tooltip */}
                <motion.div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{ backgroundColor: "#903345", color: "#FDF1DC" }}
                  initial={{ y: 5 }}
                  whileHover={{ y: 0 }}
                >
                  {item.label}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rotate-45"
                    style={{ backgroundColor: "#903345" }}
                  />
                </motion.div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  )
}
