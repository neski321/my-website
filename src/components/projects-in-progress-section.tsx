"use client"

import { useInView } from "react-intersection-observer"
import { motion, easeOut } from "framer-motion"
import { Button } from "../components/ui/button"
import { ArrowRight, Clock, Wrench, Zap, Sparkles } from "lucide-react"
import Link from "next/link"
import { ProjectCard } from "../components/project-card"
import { projects } from "../lib/projects-data"

export function ProjectsInProgressSection() {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: easeOut,
      },
    },
  }

  // Filter projects that are in progress
  const projectsInProgress = projects.filter(project => project.inProgress)

  return (
    <section ref={ref} id="projects-in-progress" className="relative py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">

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
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent drop-shadow-md">
                Projects
              </span>
              <br />
              <span className="text-foreground">In Progress</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          </motion.div>

          <motion.div
            variants={descriptionVariants}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Currently working on exciting new projects that showcase 
              <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent drop-shadow-md"> cutting-edge technologies</span> and 
              <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent drop-shadow-md"> innovative solutions</span>.
            </p>
            
            {/* Stats */}
            <motion.div
              className="flex justify-center items-center space-x-8 mt-8 pt-8 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {[
                { label: "In Progress", value: projectsInProgress.length, icon: Clock },
                { label: "Technologies", value: "10+", icon: Wrench },
                { label: "Innovation", value: "100%", icon: Sparkles },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <stat.icon className="h-5 w-5 text-orange-500" />
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
          className={`grid gap-8 mb-16 ${
            projectsInProgress.length === 1 
              ? 'grid-cols-1 justify-items-center' 
              : projectsInProgress.length === 2 
              ? 'grid-cols-1 md:grid-cols-2 justify-items-center' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {projectsInProgress.map((project, index) => {
            // Find the actual index of this project in the main projects array
            const actualProjectIndex = projects.findIndex(p => p.title === project.title)
            
            return (
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
                className={projectsInProgress.length < 3 ? 'w-full max-w-sm lg:max-w-md' : ''}
              >
                <div className="relative">
                  {/* In Progress Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 shadow-lg">
                      <Clock className="h-3 w-3" />
                      <span>In Progress</span>
                    </div>
                  </div>
                  <ProjectCard project={project} index={actualProjectIndex} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-amber-500/10 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                Stay Updated
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Follow my progress on these exciting projects and be the first to know when they launch. 
              Each project represents the latest in technology and innovation.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/projects">
                <ArrowRight className="mr-2 h-5 w-5" />
                View All Projects
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 