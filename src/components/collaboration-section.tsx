"use client"

import { useInView } from "react-intersection-observer"
import { motion, easeOut } from "framer-motion"
import { Button } from "../components/ui/button"
import { ArrowRight, Users, Handshake, Heart, Sparkles } from "lucide-react"
import Link from "next/link"
import { ProjectCard } from "../components/project-card"
import { projects } from "../lib/projects-data"

export function CollaborationSection() {
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

  // Filter projects that are collaborations and limit to 3
  const collaborationProjects = projects.filter(project => project.collaboration).slice(0, 3)

  return (
    <section ref={ref} id="collaborations" className="relative py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">

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
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-green-500 via-blue-500 to-teal-500 bg-clip-text text-transparent drop-shadow-md">
                Collaborative
              </span>
              <br />
              <span className="text-foreground">Projects</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          </motion.div>

          <motion.div
            variants={descriptionVariants}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Projects built through 
              <span className="bg-gradient-to-r from-green-500 via-blue-500 to-teal-500 bg-clip-text text-transparent drop-shadow-md"> teamwork and collaboration</span>, showcasing the power of 
              <span className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 bg-clip-text text-transparent drop-shadow-md"> collective innovation</span>.
            </p>
            
            {/* Stats */}
            <motion.div
              className="flex justify-center items-center space-x-8 mt-8 pt-8 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {[
                { label: "Collaborations", value: collaborationProjects.length, icon: Users },
                { label: "Team Members", value: "2+", icon: Handshake },
                { label: "Success Rate", value: "100%", icon: Sparkles },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <stat.icon className="h-5 w-5 text-green-500" />
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
            collaborationProjects.length === 1 
              ? 'grid-cols-1 justify-items-center' 
              : collaborationProjects.length === 2 
              ? 'grid-cols-1 md:grid-cols-2 justify-items-center' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {collaborationProjects.map((project, index) => {
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
                className={collaborationProjects.length < 3 ? 'w-full max-w-sm lg:max-w-md' : ''}
              >
                <div className="relative">
                  {/* Collaboration Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 shadow-lg">
                      <Users className="h-3 w-3" />
                      <span>Collaboration</span>
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
          <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-teal-500/10 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                Let's Collaborate
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              I believe in the power of collaboration and teamwork. If you have an exciting project idea or would like to work together, 
              I'd love to hear from you and explore how we can create something amazing together.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">
                <ArrowRight className="mr-2 h-5 w-5" />
                Start a Collaboration
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
