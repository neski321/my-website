"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog"

import type { ProjectType } from "../lib/projects-data"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import dynamic from "next/dynamic"
import ChromaGrid from "./ChromaGrid"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false })

interface ProjectDetailProps {
  project: ProjectType
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [enlargeImage, setEnlargeImage] = useState<{
    src: string
    type: 'screenshots' | 'mobileScreenshots'
    index: number
  } | null>(null)
  const hasScreenshots = project.screenshots && project.screenshots.length > 0

  // Helper to get the correct array
  const getImageArray = (type: 'screenshots' | 'mobileScreenshots') =>
    type === 'screenshots' ? project.screenshots! : project.mobileScreenshots!

  // Dialog navigation handlers
  const handleDialogNext = () => {
    if (!enlargeImage) return
    const arr = getImageArray(enlargeImage.type)
    setEnlargeImage({
      ...enlargeImage,
      index: (enlargeImage.index + 1) % arr.length,
      src: arr[(enlargeImage.index + 1) % arr.length],
    })
  }
  const handleDialogPrev = () => {
    if (!enlargeImage) return
    const arr = getImageArray(enlargeImage.type)
    setEnlargeImage({
      ...enlargeImage,
      index: (enlargeImage.index - 1 + arr.length) % arr.length,
      src: arr[(enlargeImage.index - 1 + arr.length) % arr.length],
    })
  }

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
              <Swiper
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView={1}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                spaceBetween={20}
                speed={800}
                modules={[Autoplay]}
                className="w-full"
              >
                {project.screenshots!.map((screenshot, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="relative h-40 cursor-pointer overflow-hidden rounded-md"
                      onClick={() => setEnlargeImage({ src: screenshot, type: 'screenshots', index })}
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Mobile Screenshots Section */}
      {project.mobileScreenshots && project.mobileScreenshots.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card className="mt-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Mobile Screenshots</h2>
              <Swiper
                loop={true}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                slidesPerView={1}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                spaceBetween={20}
                speed={1400}
                modules={[Autoplay]}
                className="w-full"
              >
                {project.mobileScreenshots.map((screenshot, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-40 cursor-pointer overflow-hidden rounded-md"
                      onClick={() => setEnlargeImage({ src: screenshot, type: 'mobileScreenshots', index })}
                    >
                      <Image
                        src={screenshot || "/placeholder.svg"}
                        alt={`${project.title} mobile screenshot ${index + 1}`}
                        fill
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Image Enlargement Dialog */}
      <Dialog open={!!enlargeImage} onOpenChange={() => setEnlargeImage(null)}>
        <DialogContent className="max-w-3xl flex flex-col items-center justify-center">
          <DialogTitle className="sr-only">Enlarged Screenshot</DialogTitle>
          {enlargeImage && (
            <div className="relative w-full h-[60vh] flex items-center justify-center">
              <button
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-background/80 rounded-full p-2 hover:bg-background"
                onClick={handleDialogPrev}
                aria-label="Previous image"
                type="button"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <Image
                src={enlargeImage.src}
                alt="Enlarged screenshot"
                fill
                className="object-contain rounded-lg"
                priority
              />
              <button
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-background/80 rounded-full p-2 hover:bg-background"
                onClick={handleDialogNext}
                aria-label="Next image"
                type="button"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
