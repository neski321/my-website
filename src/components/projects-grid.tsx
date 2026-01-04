"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ProjectCard } from "../components/project-card"
import type { ProjectType } from "@/src/lib/projects-data"
import { projects } from "@/src/lib/projects-data"
import { useMemo } from "react"

interface ProjectsGridProps {
  projects: ProjectType[]
}

export function ProjectsGrid({ projects: filteredProjects }: ProjectsGridProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "100px"
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.02,
      },
    },
  }

  const item = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.96
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth easing
      }
    },
  }

  // Memoize the index lookup function
  const getOriginalIndex = useMemo(() => {
    return (project: ProjectType) => {
      return projects.findIndex(p => p.title === project.title)
    }
  }, [])

  return (
    <div ref={ref} style={{ contain: "layout style paint" }}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{ willChange: inView ? "transform, opacity" : "auto" }}
      >
        {filteredProjects.map((project, index) => {
          const originalIndex = getOriginalIndex(project)
          return (
            <motion.div
              key={`${project.title}-${originalIndex}`}
              variants={item}
            >
              <ProjectCard 
                project={project} 
                index={originalIndex} 
              />
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
