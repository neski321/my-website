"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"

import type { ProjectType } from "../lib/projects-data"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false })

interface ProjectDetailProps {
  project: ProjectType
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const hasScreenshots = project.screenshots && project.screenshots.length > 0

  const nextImage = () => {
    if (hasScreenshots) {
      setCurrentImageIndex((prev) => (prev === project.screenshots!.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (hasScreenshots) {
      setCurrentImageIndex((prev) => (prev === 0 ? project.screenshots!.length - 1 : prev - 1))
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="overflow-hidden mb-8">
          <CardContent className="p-0">
            {hasScreenshots ? (
              <div className="relative">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={project.screenshots![currentImageIndex] || "/placeholder.svg"}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-contain bg-black/5"
                  />
                </div>
                {project.screenshots!.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                      onClick={prevImage}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </>
                )}
              </div>
            ) : (
              <div className="relative h-[300px] w-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">No screenshots available</p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="mb-8">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-4">
              {project.link && (
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.link.includes("github") ? (
                      <>
                        <Github className="mr-2 h-4 w-4" /> View on GitHub
                      </>
                    ) : (
                      <>
                        <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                      </>
                    )}
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {project.VideoDemo && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Video Demo</h2>
              <div className="aspect-video">
                <ReactPlayer url={project.VideoDemo} controls width="100%" height="100%" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {hasScreenshots && project.screenshots!.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">All Screenshots</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.screenshots!.map((screenshot, index) => (
                  <div
                    key={index}
                    className="relative h-40 cursor-pointer overflow-hidden rounded-md"
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className={`object-cover transition-all hover:scale-105 ${
                        currentImageIndex === index ? "ring-2 ring-primary" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
