"use client"

import { useInView } from "react-intersection-observer"
import { motion, easeOut } from "framer-motion"
import { Sparkles, Code, Zap } from "lucide-react"
import { ProjectCard } from "../components/project-card"
import { projects } from "../lib/projects-data"

export function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  }

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: easeOut,
      },
    },
  }

  // Display only the first 3 projects on the homepage
  const featuredProjects = projects.slice(0, 3)

  return (
    <section ref={ref} id="projects" className="relative py-20 md:py-32 bg-gradient-to-b from-muted/30 via-background to-muted/20 overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={titleVariants}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
                Featured
              </span>
              <br />
              <span className="text-foreground">Projects</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </motion.div>

          <motion.div
            variants={descriptionVariants}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A curated selection of my recent work showcasing 
              <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md"> innovative solutions</span> and 
              <span className="bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent drop-shadow-md"> cutting-edge technologies</span>.
            </p>
            
            {/* Stats */}
            <motion.div
              className="flex justify-center items-center space-x-8 mt-8 pt-8 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {[
                { label: "Projects", value: projects.length, icon: Code },
                { label: "Technologies", value: "15+", icon: Zap },
                { label: "Experience", value: "3+ Years", icon: Sparkles },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <stat.icon className="h-5 w-5 text-primary" />
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                delay: 0.3 + index * 0.2, 
                duration: 0.6,
                ease: easeOut
              }}
              whileHover={{ y: -5 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
