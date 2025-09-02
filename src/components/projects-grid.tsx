"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "../components/project-card"
import type { ProjectType } from "@/src/lib/projects-data"
import { projects } from "@/src/lib/projects-data"

interface ProjectsGridProps {
  projects: ProjectType[]
}

export function ProjectsGrid({ projects: filteredProjects }: ProjectsGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // Function to find the original index of a project in the main projects array
  const getOriginalIndex = (project: ProjectType) => {
    return projects.findIndex(p => p.title === project.title)
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {filteredProjects.map((project, index) => {
        const originalIndex = getOriginalIndex(project)
        return (
          <ProjectCard 
            key={`${project.title}-${originalIndex}`} 
            project={project} 
            index={originalIndex} 
          />
        )
      })}
    </motion.div>
  )
}
