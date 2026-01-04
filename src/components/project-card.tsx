"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import type { ProjectType } from "../lib/projects-data"
import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, ArrowRight } from "lucide-react"

interface ProjectCardProps {
  project: ProjectType
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const imageVariants = {
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="group"
      style={{ willChange: "transform" }}
    >
      <Link href={`/projects/${index}`}>
        <Card className="overflow-hidden project-card h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-200 relative">
          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          
          {/* Image Container */}
          <div className="relative h-48 w-full overflow-hidden">
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="relative h-full w-full"
            >
              <Image
                src={
                  project.screenshots && project.screenshots.length > 0
                    ? project.screenshots[0]
                    : project.inProgress
                    ? "https://img.freepik.com/free-vector/abstract-orange-geometric-background_1319-2422.jpg"
                    : "https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg"
                }
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
                loading={index < 3 ? "eager" : "lazy"}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              
              {/* Image Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              
              {/* Floating Action Button */}
              <motion.div
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
              >
                <div className="bg-background/90 backdrop-blur-sm rounded-full p-2 border border-border/50">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <CardContent className="p-6 relative z-10">
            <div>
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                {project.description || "A software development project."}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-border/30">
                <div className="flex space-x-2">
                  {project.link && project.link.includes("github") && (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  )}
                  {project.link && !project.link.includes("github") && (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  )}
                </div>
                
                <motion.span 
                  className="text-sm text-primary font-medium flex items-center space-x-1 group-hover:space-x-2 transition-all duration-200"
                  whileHover={{ x: 2 }}
                >
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.span>
              </div>
            </div>
          </CardContent>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </Card>
      </Link>
    </motion.div>
  )
}
