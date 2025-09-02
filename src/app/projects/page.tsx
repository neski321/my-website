"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { ProjectsGrid } from "@/src/components/projects-grid"
import { TechStackFilter } from "@/src/components/tech-stack-filter"
import { projects } from "@/src/lib/projects-data"
import type { ProjectType } from "@/src/lib/projects-data"

export default function ProjectsPage() {
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([])

  // Filter projects by tech stack
  const filterProjectsByTechStack = (projectList: ProjectType[]) => {
    if (selectedTechStacks.length === 0) {
      return projectList
    }
    
    return projectList.filter(project => {
      if (!project.techStack) return false
      return selectedTechStacks.some(tech => project.techStack!.includes(tech))
    })
  }

  // Filter projects by category
  const completedProjects = projects.filter(project => !project.inProgress && !project.collaboration)
  const projectsInProgress = projects.filter(project => project.inProgress)
  const collaborationProjects = projects.filter(project => project.collaboration)

  // Apply tech stack filters
  const filteredCompletedProjects = filterProjectsByTechStack(completedProjects)
  const filteredProjectsInProgress = filterProjectsByTechStack(projectsInProgress)
  const filteredCollaborationProjects = filterProjectsByTechStack(collaborationProjects)

  // Check if any projects match the current filters
  const hasMatchingProjects = filteredCompletedProjects.length > 0 || 
                             filteredProjectsInProgress.length > 0 || 
                             filteredCollaborationProjects.length > 0

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            My Projects
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore my portfolio of projects, from solo endeavors to collaborative ventures and works in progress.
        </p>
      </motion.div>

      {/* Tech Stack Filter */}
      <TechStackFilter
        selectedTechStacks={selectedTechStacks}
        onTechStackChange={setSelectedTechStacks}
      />

      {/* No Results Message */}
      {selectedTechStacks.length > 0 && !hasMatchingProjects && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-muted-foreground">
              No projects found
            </h3>
            <p className="text-muted-foreground mb-6">
              No projects match the selected technologies. Try adjusting your filters or explore all projects.
            </p>
            <button
              onClick={() => setSelectedTechStacks([])}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </motion.div>
      )}

      {/* Completed Projects */}
      {filteredCompletedProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Completed Projects</h2>
            {selectedTechStacks.length > 0 && (
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                {filteredCompletedProjects.length} of {completedProjects.length} projects
              </span>
            )}
          </div>
          <ProjectsGrid projects={filteredCompletedProjects} />
        </motion.div>
      )}

      {/* Collaboration Projects */}
      {filteredCollaborationProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Collaborative Projects</h2>
            {selectedTechStacks.length > 0 && (
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                {filteredCollaborationProjects.length} of {collaborationProjects.length} projects
              </span>
            )}
          </div>
          <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-teal-500/10 rounded-2xl p-8 border border-green-500/20">
            <ProjectsGrid projects={filteredCollaborationProjects} />
          </div>
        </motion.div>
      )}

      {/* Projects In Progress */}
      {filteredProjectsInProgress.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Projects In Progress</h2>
            {selectedTechStacks.length > 0 && (
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                {filteredProjectsInProgress.length} of {projectsInProgress.length} projects
              </span>
            )}
          </div>
          <div className="bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-amber-500/10 rounded-2xl p-8 border border-orange-500/20">
            <ProjectsGrid projects={filteredProjectsInProgress} />
          </div>
        </motion.div>
      )}
    </div>
  )
}
