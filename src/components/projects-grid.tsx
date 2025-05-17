"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "../components/project-card"
import type { ProjectType } from "@/lib/projects-data"

interface ProjectsGridProps {
  projects: ProjectType[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </motion.div>
  )
}
