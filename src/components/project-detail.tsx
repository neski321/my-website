"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"

import type { ProjectType } from "../lib/projects-data"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Github, ExternalLink, X } from "lucide-react"
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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const [modalImageSource, setModalImageSource] = useState<'desktop' | 'mobile'>('desktop')
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

  const openModal = (index: number, source: 'desktop' | 'mobile') => {
    setModalImageIndex(index)
    setModalImageSource(source)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextModalImage = () => {
    const currentImages = modalImageSource === 'desktop' ? project.screenshots! : project.mobileScreenshots!
    setModalImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1))
  }

  const prevModalImage = () => {
    const currentImages = modalImageSource === 'desktop' ? project.screenshots! : project.mobileScreenshots!
    setModalImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1))
  }

  // Keyboard event handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return
      
      switch (e.key) {
        case 'Escape':
          closeModal()
          break
        case 'ArrowRight':
          nextModalImage()
          break
        case 'ArrowLeft':
          prevModalImage()
          break
      }
    }

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen, modalImageSource, modalImageIndex])

  const currentModalImages = modalImageSource === 'desktop' ? project.screenshots! : project.mobileScreenshots!

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
                      onClick={() => openModal(index, 'desktop')}
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

      {project.mobileScreenshots && project.mobileScreenshots.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Mobile App Screenshots</h2>
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
                {project.mobileScreenshots.map((screenshot, index) => (
                  <SwiperSlide key={index}>
                    <div 
                      className="relative h-40 cursor-pointer overflow-hidden rounded-md"
                      onClick={() => openModal(index, 'mobile')}
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

      {/* Full-size Image Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeModal}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </Button>
            
            {currentModalImages.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevModalImage()
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextModalImage()
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}
            
            <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={currentModalImages[modalImageIndex] || "/placeholder.svg"}
                alt={`${project.title} ${modalImageSource} screenshot ${modalImageIndex + 1}`}
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-full"
              />
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {modalImageIndex + 1} / {currentModalImages.length}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
