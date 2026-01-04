"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, useScroll, useSpring } from "framer-motion"
import { HeroSection } from "../components/hero-section"
import { AboutSection } from "../components/about-section"
import { ProjectsSection } from "../components/projects-section"
import { CollaborationSection } from "../components/collaboration-section"
import { ProjectsInProgressSection } from "../components/projects-in-progress-section"
import { ContactSection } from "../components/contact-section"
import dynamic from "next/dynamic"

const Prism = dynamic(() => import("../components/prism").then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => <div className="w-full h-full" />
})

function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50 origin-left"
      style={{ 
        scaleX,
        willChange: 'transform'
      }}
    />
  )
}

export default function Home() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    // Smooth scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0 }
  }

  // Removed sectionVariants - sections handle their own animations via IntersectionObserver

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative"
    >
      {/* Prism Background - Only render on home page */}
      {isHomePage && (
        <div 
          className="fixed inset-0 -z-10 w-full"
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            zIndex: -10,
            height: '100vh',
            minHeight: '100vh',
            width: '100vw'
          }}
        >
          <Prism
            animationType="rotate"
            timeScale={0.4}
            height={5.5}
            baseWidth={5.5}
            scale={2.6}
            hueShift={-0.54}
            colorFrequency={0.8}
            noise={0}
            glow={0.3}
            suspendWhenOffscreen={true}
          />
        </div>
      )}

      {/* Hero Section */}
      <div>
        <HeroSection />
      </div>

      {/* About Section */}
      <div>
        <AboutSection />
      </div>

      {/* Projects Section */}
      <div>
        <ProjectsSection />
      </div>

      {/* Collaboration Section */}
      <div>
        <CollaborationSection />
      </div>

      {/* Projects In Progress Section */}
      <div>
        <ProjectsInProgressSection />
      </div>

      {/* Contact Section */}
      <div>
        <ContactSection />
      </div>

      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
    </motion.div>
  )
}
