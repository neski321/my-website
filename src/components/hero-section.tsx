"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <section className="relative py-24 md:py-32 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">

      {/* 🔮 Animated Glowing Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className={`absolute top-[-150px] left-[-150px] w-[400px] h-[400px] rounded-full filter blur-3xl 
            ${isDark ? "bg-purple-700/30 shadow-[0_0_80px_40px_rgba(168,85,247,0.3)]" 
                    : "bg-purple-400/30 shadow-[0_0_80px_40px_rgba(192,132,252,0.4)]"}`}
          animate={{ x: [0, 60, 0], y: [0, 60, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full filter blur-3xl 
            ${isDark ? "bg-pink-700/30 shadow-[0_0_80px_40px_rgba(236,72,153,0.25)]"
                    : "bg-pink-400/30 shadow-[0_0_80px_40px_rgba(244,114,182,0.3)]"}`}
          animate={{ x: [0, -60, 0], y: [0, -50, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute top-[30%] left-[25%] w-[300px] h-[300px] rounded-full filter blur-3xl 
            ${isDark ? "bg-blue-700/20 shadow-[0_0_80px_40px_rgba(96,165,250,0.2)]"
                    : "bg-blue-400/20 shadow-[0_0_80px_40px_rgba(147,197,253,0.3)]"}`}
          animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 🔤 Foreground Content */}
      <motion.div
        className="relative z-10 text-center space-y-6 max-w-3xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeUpVariant}
          className="text-4xl md:text-6xl font-bold tracking-tight text-primary"
        >
          NESKINES OTIENO
        </motion.h1>
        <motion.h2
          variants={fadeUpVariant}
          className="text-2xl md:text-3xl font-medium text-muted-foreground"
        >
          Software Developer
        </motion.h2>
        <motion.p
          variants={fadeUpVariant}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Crafting innovative solutions with a passion for clean code and user-centered design.
        </motion.p>

        <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-4 pt-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="flex justify-center space-x-4 pt-6">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/neski321" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:nmotieno@myseneca.ca" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
