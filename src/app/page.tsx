"use client"

import { useEffect } from "react"
import { motion, easeOut } from "framer-motion"
import { HeroSection } from "../components/hero-section"
import { AboutSection } from "../components/about-section"
import { ProjectsSection } from "../components/projects-section"
import { ContactSection } from "../components/contact-section"

export default function Home() {
  useEffect(() => {
    // Smooth scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    },
    exit: { opacity: 0 }
  }

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative"
    >
      {/* Hero Section */}
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>

      {/* About Section */}
      <motion.div 
        variants={sectionVariants}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />
        <AboutSection />
      </motion.div>

      {/* Projects Section */}
      <motion.div 
        variants={sectionVariants}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-transparent" />
        <ProjectsSection />
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        variants={sectionVariants}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
        <ContactSection />
      </motion.div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50 origin-left"
        style={{
          scaleX: 0,
          transformOrigin: "0%"
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  )
}
