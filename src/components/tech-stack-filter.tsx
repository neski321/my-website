"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { X, Filter, Sparkles } from "lucide-react"
import { projects } from "@/src/lib/projects-data"
import type { ProjectType } from "@/src/lib/projects-data"

interface TechStackFilterProps {
  selectedTechStacks: string[]
  onTechStackChange: (techStacks: string[]) => void
}

export function TechStackFilter({ selectedTechStacks, onTechStackChange }: TechStackFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Get all unique tech stacks from all projects
  const allTechStacks = useMemo(() => {
    const techStacks = new Set<string>()
    projects.forEach(project => {
      if (project.techStack) {
        project.techStack.forEach(tech => techStacks.add(tech))
      }
    })
    return Array.from(techStacks).sort()
  }, [])

  // Get tech stack counts
  const techStackCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    projects.forEach(project => {
      if (project.techStack) {
        project.techStack.forEach(tech => {
          counts[tech] = (counts[tech] || 0) + 1
        })
      }
    })
    return counts
  }, [])

  const toggleTechStack = (tech: string) => {
    if (selectedTechStacks.includes(tech)) {
      onTechStackChange(selectedTechStacks.filter(t => t !== tech))
    } else {
      onTechStackChange([...selectedTechStacks, tech])
    }
  }

  const clearAllFilters = () => {
    onTechStackChange([])
  }

  const getTechStackColor = (tech: string) => {
    const colors = [
      "bg-blue-500/10 text-blue-700 border-blue-200 hover:bg-blue-500/20",
      "bg-green-500/10 text-green-700 border-green-200 hover:bg-green-500/20",
      "bg-purple-500/10 text-purple-700 border-purple-200 hover:bg-purple-500/20",
      "bg-orange-500/10 text-orange-700 border-orange-200 hover:bg-orange-500/20",
      "bg-pink-500/10 text-pink-700 border-pink-200 hover:bg-pink-500/20",
      "bg-teal-500/10 text-teal-700 border-teal-200 hover:bg-teal-500/20",
      "bg-indigo-500/10 text-indigo-700 border-indigo-200 hover:bg-indigo-500/20",
      "bg-red-500/10 text-red-700 border-red-200 hover:bg-red-500/20",
      "bg-yellow-500/10 text-yellow-700 border-yellow-200 hover:bg-yellow-500/20",
      "bg-cyan-500/10 text-cyan-700 border-cyan-200 hover:bg-cyan-500/20",
    ]
    
    const hash = tech.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
    
    return colors[Math.abs(hash) % colors.length]
  }

  const getSelectedTechStackColor = (tech: string) => {
    const colors = [
      "bg-blue-500 text-white border-blue-500 hover:bg-blue-600",
      "bg-green-500 text-white border-green-500 hover:bg-green-600",
      "bg-purple-500 text-white border-purple-500 hover:bg-purple-600",
      "bg-orange-500 text-white border-orange-500 hover:bg-orange-600",
      "bg-pink-500 text-white border-pink-500 hover:bg-pink-600",
      "bg-teal-500 text-white border-teal-500 hover:bg-teal-600",
      "bg-indigo-500 text-white border-indigo-500 hover:bg-indigo-600",
      "bg-red-500 text-white border-red-500 hover:bg-red-600",
      "bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600",
      "bg-cyan-500 text-white border-cyan-500 hover:bg-cyan-600",
    ]
    
    const hash = tech.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
    
    return colors[Math.abs(hash) % colors.length]
  }

  return (
    <div className="w-full max-w-6xl mx-auto mb-12">
      {/* Filter Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-8 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <h2 className="text-2xl md:text-3xl font-bold flex items-center space-x-2">
            <Filter className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Filter by Technology
            </span>
          </h2>
          <div className="w-8 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore projects by the technologies used. Select one or more technologies to filter your view.
        </p>
      </motion.div>

      {/* Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="flex flex-col items-center space-y-4"
      >
        {/* Selected Filters Display */}
        {selectedTechStacks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-4"
          >
            <span className="text-sm text-muted-foreground mr-2">Active filters:</span>
            {selectedTechStacks.map((tech) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                <Badge
                  variant="secondary"
                  className={`${getSelectedTechStackColor(tech)} cursor-pointer transition-all duration-150 flex items-center space-x-1 px-3 py-1`}
                  onClick={() => toggleTechStack(tech)}
                >
                  <span>{tech}</span>
                  <X className="h-3 w-3" />
                </Badge>
              </motion.div>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-muted-foreground hover:text-foreground ml-2"
            >
              Clear all
            </Button>
          </motion.div>
        )}

        {/* Expand/Collapse Button */}
        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 px-6 py-2 border-primary/20 hover:border-primary/40 transition-all duration-200"
        >
          <Sparkles className="h-4 w-4" />
          <span>{isExpanded ? 'Hide' : 'Show'} All Technologies</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Filter className="h-4 w-4" />
          </motion.div>
        </Button>
      </motion.div>

      {/* Tech Stack Grid */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 p-6 bg-gradient-to-br from-muted/30 via-background to-muted/20 rounded-2xl border border-border/50"
            >
              {allTechStacks.map((tech, index) => {
                const isSelected = selectedTechStacks.includes(tech)
                const count = techStackCounts[tech]
                
                return (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.01 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant="outline"
                      className={`${isSelected ? getSelectedTechStackColor(tech) : getTechStackColor(tech)} cursor-pointer transition-all duration-150 flex items-center justify-between space-x-2 px-3 py-2 w-full text-sm font-medium border-2`}
                      onClick={() => toggleTechStack(tech)}
                    >
                      <span className="truncate">{tech}</span>
                      <span className="text-xs opacity-70">({count})</span>
                    </Badge>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Filter Suggestions */}
      {selectedTechStacks.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-6"
        >
          <p className="text-center text-sm text-muted-foreground mb-3">Popular technologies:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['React', 'Python', 'JavaScript', 'TypeScript', 'Firebase', 'Node.js'].map((tech) => {
              if (allTechStacks.includes(tech)) {
                return (
                  <Button
                    key={tech}
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleTechStack(tech)}
                    className="text-xs hover:bg-primary/10 transition-all duration-150"
                  >
                    {tech}
                  </Button>
                )
              }
              return null
            })}
          </div>
        </motion.div>
      )}
    </div>
  )
}
