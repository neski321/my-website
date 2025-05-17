"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import type { ProjectType } from "@/lib/projects-data"
import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  project: ProjectType
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div variants={item}>
      <Link href={`/projects/${index}`}>
        <Card className="overflow-hidden project-card h-full">
          <div className="relative h-48 w-full">
            <Image
              src={
                project.screenshots && project.screenshots.length > 0
                  ? project.screenshots[0]
                  : "https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg"
              }
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground line-clamp-3 mb-4">
              {project.description || "A software development project."}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {project.link && project.link.includes("github") && (
                  <Github className="h-5 w-5 text-muted-foreground" />
                )}
                {project.link && !project.link.includes("github") && (
                  <ExternalLink className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <span className="text-sm text-primary font-medium">View Details</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
