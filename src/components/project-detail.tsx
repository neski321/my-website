"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog"
import { 
  ChevronLeft, 
  ChevronRight, 
  Github, 
  ExternalLink, 
  Download, 
  Layout, 
  Brain, 
  Zap, 
  Smartphone, 
  Server, 
  Database, 
  RefreshCw, 
  Shield, 
  Code, 
  Globe, 
  Clock, 
  BarChart3, 
  MessageSquare, 
  UploadCloud, 
  Search, 
  FileText, 
  Mic, 
  Link as LinkIcon, 
  CheckCircle2, 
  Target, 
  Cpu, 
  Timer, 
  CloudOff, 
  Package, 
  MapPin, 
  Plug, 
  Monitor,
  ArrowLeft,
  ArrowRight,
  Users,
  Sparkles
} from "lucide-react"
import type { ProjectType } from "../lib/projects-data"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/pagination"

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

interface ProjectDetailProps {
  project: ProjectType
  projectIndex: number
  totalProjects: number
}

// Icon mapping helper
const getIcon = (iconName: string | undefined) => {
  const icons: Record<string, any> = {
    Layout, Brain, Zap, Smartphone, Server, Database, RefreshCw, 
    Shield, Code, Globe, Clock, BarChart3, MessageSquare, UploadCloud, 
    Search, FileText, Mic, LinkIcon, CheckCircle2, Target, Cpu, 
    Timer, CloudOff, Package, MapPin, Plug, Monitor
  }
  const IconComponent = iconName ? icons[iconName] : Code
  return IconComponent ? <IconComponent className="h-5 w-5" /> : <Code className="h-5 w-5" />
}

export function ProjectDetail({ project, projectIndex, totalProjects }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeSection, setActiveSection] = useState("overview")
  const [enlargeImage, setEnlargeImage] = useState<{
    src: string
    type: 'screenshots' | 'mobileScreenshots'
    index: number
  } | null>(null)
  
  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({})
  const hasScreenshots = project.screenshots && project.screenshots.length > 0

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      
      const sections = [
        "overview", "features", "tech-stack", "architecture", 
        "challenges", "role", "screenshots", "video", "learnings"
      ]
      
      for (const section of sections) {
        const element = sectionsRef.current[section]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextImage = () => {
    if (hasScreenshots) {
      setCurrentImageIndex((prev) => (prev === project.screenshots!.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (hasScreenshots) {
      setCurrentImageIndex((prev) => (prev === 0 ? project.screenshots!.length - 1 : prev - 1))
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Adjust based on sticky nav height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  // Prev/Next Projects
  const prevProjectIndex = (projectIndex - 1 + totalProjects) % totalProjects
  const nextProjectIndex = (projectIndex + 1) % totalProjects

  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* 1. Breadcrumbs & Header Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/projects" className="hover:text-primary transition-colors flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" /> Projects
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{project.title}</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
            <Link href={`/projects/${prevProjectIndex}`}>
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous
            </Link>
          </Button>
          <span className="text-xs text-muted-foreground">
            {projectIndex + 1} / {totalProjects}
          </span>
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
            <Link href={`/projects/${nextProjectIndex}`}>
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>

      {/* 2. Project Hero Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex flex-wrap gap-2 mb-4">
          {project.category && (
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
              {project.category}
            </Badge>
          )}
          {project.status && (
            <Badge variant="secondary" className="capitalize">
              {project.status.replace('-', ' ')}
            </Badge>
          )}
          {project.duration && (
            <Badge variant="ghost" className="text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" /> {project.duration}
            </Badge>
          )}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{project.title}</h1>
        {project.tagline && (
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        )}

        <div className="flex flex-wrap gap-4">
          {project.link && (
            <Button size="lg" asChild className="px-8 shadow-lg shadow-primary/20">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link.includes("github") ? (
                  <>
                    <Github className="mr-2 h-5 w-5" /> View Repo
                  </>
                ) : (
                  <>
                    <ExternalLink className="mr-2 h-5 w-5" /> Visit Live Project
                  </>
                )}
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button size="lg" variant="outline" asChild className="px-8">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> GitHub Code
              </a>
            </Button>
          )}
          {project.androidApkLink && (
            <Button size="lg" variant="secondary" asChild className="px-8">
              <a href={project.androidApkLink} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" /> Download APK
              </a>
            </Button>
          )}
        </div>
      </motion.div>

      {/* 3. Visual Showcase (Main Screenshots) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
        className="mb-12 relative group"
      >
        <Card className="overflow-hidden border-border/50 shadow-2xl bg-black/5">
          <CardContent className="p-0">
            {hasScreenshots ? (
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={project.screenshots![currentImageIndex]}
                      alt={`${project.title} hero`}
                      fill
                      className="object-contain"
                      priority
                      quality={100}
                    />
                  </motion.div>
                </AnimatePresence>
                
                {project.screenshots!.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="black"
                      size="icon"
                      className="rounded-full bg-background/80 hover:bg-background"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="black"
                      size="icon"
                      className="rounded-full bg-background/80 hover:bg-background"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="aspect-[21/9] w-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground flex items-center">
                  <Monitor className="h-5 w-5 mr-3" /> Visual preview not available
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* 4. Sticky Section Nav */}
      <div className="sticky-section-nav px-4 flex overflow-x-auto no-scrollbar scroll-smooth items-center gap-6">
        {[
          { id: "overview", label: "Overview" },
          { id: "features", label: "Features", condition: !!project.keyFeatures },
          { id: "tech-stack", label: "Stack", condition: !!project.techStack },
          { id: "architecture", label: "Architecture", condition: !!project.architecture },
          { id: "challenges", label: "Challenges", condition: !!project.challengesAndSolutions },
          { id: "role", label: "My Role", condition: !!project.myRole },
          { id: "screenshots", label: "Gallery", condition: hasScreenshots },
          { id: "video", label: "Demo", condition: !!project.VideoDemo },
          { id: "learnings", label: "Learnings", condition: !!project.learnings }
        ].filter(s => s.condition !== false).map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`text-sm py-2 px-1 whitespace-nowrap transition-all duration-300 ${
              activeSection === section.id 
                ? "nav-link-active" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-24">
          
          {/* Overview Section */}
          <section id="overview" ref={el => sectionsRef.current["overview"] = el} className="section-anchor">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Layout className="h-7 w-7 text-primary" /> Project Overview
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              {project.overview ? (
                <p>{project.overview}</p>
              ) : (
                <p>{project.description}</p>
              )}
            </div>

            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="metric-card">
                    <div className="text-primary mb-2 opacity-80">
                      {getIcon(metric.icon)}
                    </div>
                    <div className="text-2xl font-bold mb-1">{metric.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Key Features Section */}
          {project.keyFeatures && (
            <section id="features" ref={el => sectionsRef.current["features"] = el} className="section-anchor">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Zap className="h-7 w-7 text-primary" /> Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.keyFeatures.map((feature, i) => (
                  <div key={i} className="feature-card group">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(feature.icon)}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Architecture Section */}
          {project.architecture && (
            <section id="architecture" ref={el => sectionsRef.current["architecture"] = el} className="section-anchor">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Smartphone className="h-7 w-7 text-primary" /> System Architecture
              </h2>
              <p className="text-muted-foreground mb-10 text-lg">{project.architecture.description}</p>
              
              <div className="space-y-6">
                {project.architecture.layers?.map((layer, i) => (
                  <div key={i} className="architecture-layer">
                    <div className="md:flex justify-between items-start">
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-bold text-foreground mb-1">{layer.name}</h4>
                        <p className="text-sm text-muted-foreground">{layer.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {layer.technologies.map((tech, ti) => (
                          <Badge key={ti} variant="secondary" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges & Solutions */}
          {project.challengesAndSolutions && (
            <section id="challenges" ref={el => sectionsRef.current["challenges"] = el} className="section-anchor">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Brain className="h-7 w-7 text-primary" /> Engineering Challenges
              </h2>
              <div className="space-y-6">
                {project.challengesAndSolutions.map((item, i) => (
                  <div key={i} className="challenge-card">
                    <div className="challenge-header">
                      <div className="bg-red-500/10 text-red-500 p-2 rounded-lg mt-1">
                        <Target className="h-4 w-4" />
                      </div>
                      <p className="text-foreground font-medium">{item.challenge}</p>
                    </div>
                    <div className="solution-body">
                      <div className="flex gap-3">
                        <div className="bg-green-500/10 text-green-500 p-2 rounded-lg h-fit">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Screenshots Gallery Section */}
          {hasScreenshots && (
            <section id="screenshots" ref={el => sectionsRef.current["screenshots"] = el} className="section-anchor">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Layout className="h-7 w-7 text-primary" /> Screenshot Gallery
              </h2>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                {project.screenshots!.map((screenshot, i) => (
                  <SwiperSlide key={i}>
                    <div 
                      className="relative aspect-video cursor-pointer"
                      onClick={() => setEnlargeImage({ src: screenshot, type: 'screenshots', index: i })}
                    >
                      <Image
                        src={screenshot}
                        alt="Screenshot gallery"
                        fill
                        className="object-cover transition-hover hover:scale-105 duration-500"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {project.mobileScreenshots && project.mobileScreenshots.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6 text-muted-foreground uppercase tracking-widest text-sm">Mobile Experience</h3>
                  <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                    {project.mobileScreenshots.map((ms, i) => (
                      <div 
                        key={i} 
                        className="flex-shrink-0 w-48 h-96 relative rounded-2xl overflow-hidden border-4 border-border/10 cursor-pointer shadow-lg hover:border-primary/30 transition-all"
                        onClick={() => setEnlargeImage({ src: ms, type: 'mobileScreenshots', index: i })}
                      >
                        <Image src={ms} alt="Mobile scale" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Video Section */}
          {project.VideoDemo && (
            <section id="video" ref={el => sectionsRef.current["video"] = el} className="section-anchor">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Smartphone className="h-7 w-7 text-primary" /> Video Walkthrough
              </h2>
              <Card className="overflow-hidden border-border/50 shadow-2xl">
                <div className="aspect-video bg-black">
                  <ReactPlayer url={project.VideoDemo} controls width="100%" height="100%" />
                </div>
              </Card>
            </section>
          )}

          {/* Learnings Section */}
          {project.learnings && (
            <section id="learnings" ref={el => sectionsRef.current["learnings"] = el} className="section-anchor">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <BarChart3 className="h-7 w-7 text-primary" /> Key Takeaways
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.learnings.map((learning, i) => (
                  <div key={i} className="p-5 rounded-xl bg-primary/5 border border-primary/10 flex gap-4 items-start">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{learning}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Tech Stack Card */}
          <Card className="sticky top-32 border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="bg-muted px-3 py-1 text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* My Role Section in Sidebar */}
              {project.myRole && (
                <div id="role" ref={el => sectionsRef.current["role"] = el} className="mt-12 pt-8 border-t border-border/30">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" /> My Role
                  </h3>
                  <div className="text-primary font-bold mb-4 text-sm uppercase tracking-wider">{project.myRole.title}</div>
                  <ul className="space-y-3">
                    {project.myRole.contributions.map((contribution, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="mt-12 pt-8 border-t border-border/30">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">Continue Exploring</h3>
                <div className="space-y-3">
                   <Button variant="outline" asChild className="w-full justify-between h-auto py-4">
                     <Link href={`/projects/${nextProjectIndex}`}>
                       <div className="text-left">
                         <div className="text-[10px] uppercase text-muted-foreground">Up Next</div>
                         <div className="text-sm font-bold truncate max-w-[180px]">Next Project</div>
                       </div>
                       <ArrowRight className="h-5 w-5 text-primary" />
                     </Link>
                   </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Image Enlargement Dialog */}
      <Dialog open={!!enlargeImage} onOpenChange={() => setEnlargeImage(null)}>
        <DialogContent className="max-w-5xl h-[80vh] flex flex-col p-0 border-0 bg-transparent shadow-none">
          <DialogTitle className="sr-only">Detailed Screenshot</DialogTitle>
          {enlargeImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={enlargeImage.src}
                alt="Enlarged screenshot"
                fill
                className="object-contain"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}
