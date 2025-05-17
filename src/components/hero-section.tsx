"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-24 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 max-w-3xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-primary">NESKINES OTIENO</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">Software Developer</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Crafting innovative solutions with a passion for clean code and user-centered design.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
        <div className="flex justify-center space-x-4 pt-6">
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
            <a href="mailto:contact@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
