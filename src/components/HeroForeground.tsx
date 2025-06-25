"use client"

import { motion, easeOut, easeInOut } from "framer-motion"
import { Button } from "../components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Code, Zap } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import TrueFocus from "./true-focus"
import DecryptedText from "./decrypted-text"
import { useIsMobile } from "../hooks/use-mobile"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
}

const textRevealVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
}

const floatingIconVariants = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
}

export function HeroForeground() {
  const { resolvedTheme } = useTheme()
  const isMobile = useIsMobile()
  const isDark = resolvedTheme === "dark"

  return (
    <motion.div
      className="text-center space-y-8 max-w-4xl mx-auto px-4 relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Floating Icons */}
      {!isMobile && (
        <>
          <div className="absolute -top-10 -left-10 opacity-20">
            <motion.div variants={floatingIconVariants} animate="animate">
              <Code className="h-8 w-8 text-primary" />
            </motion.div>
          </div>
          <div className="absolute -top-5 -right-5 opacity-20">
            <motion.div variants={floatingIconVariants} animate="animate" style={{ animationDelay: "1s" }}>
              <Zap className="h-6 w-6 text-secondary" />
            </motion.div>
          </div>
          <div className="absolute -bottom-8 left-10 opacity-20">
            <motion.div variants={floatingIconVariants} animate="animate" style={{ animationDelay: "2s" }}>
              <Sparkles className="h-7 w-7 text-accent" />
            </motion.div>
          </div>
        </>
      )}

      {/* Main Title with TrueFocus */}
      <motion.div variants={textRevealVariant} className="space-y-4">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut }}
        >
          <TrueFocus 
            sentence="NESKINES OTIENO"
            manualMode={false}
            blurAmount={5}
            borderColor={isDark ? "#3b82f6" : "#1d4ed8"}
            glowColor={isDark ? "rgba(59, 130, 246, 0.6)" : "rgba(29, 78, 216, 0.6)"}
            animationDuration={2}
            pauseBetweenAnimations={1}
            textSize="text-5xl md:text-7xl lg:text-8xl"
            className="font-bold tracking-tight"
          />
        </motion.div>
      </motion.div>

      {/* Subtitle */}
      <motion.div variants={fadeUpVariant} className="space-y-2">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <DecryptedText
            text="Software Developer & Creative Technologist"
            speed={80}
            maxIterations={15}
            sequential={true}
            revealDirection="start"
            animateOn="view"
            className="text-muted-foreground"
            encryptedClassName="text-primary/60"
            parentClassName="cursor-pointer"
          />
        </motion.h2>
        <motion.div
          className="flex items-center justify-center space-x-2 text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium">Full-Stack Development</span>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        </motion.div>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeUpVariant}
        className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
      >
        Crafting innovative digital solutions with a passion for clean code, 
        <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">user-centered design</span>
, and 
        <span className="bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent drop-shadow-md"> cutting-edge technology</span>.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-4 pt-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/resume.pdf" target="_blank" download>
              Download CV <Download className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div variants={fadeUpVariant} className="flex justify-center space-x-6 pt-8">
        <motion.a href="https://github.com/Neskines" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }}>
          <Github className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
        </motion.a>
        <motion.a href="https://linkedin.com/in/otieno-neskines" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }}>
          <Linkedin className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
        </motion.a>
        <motion.a href="mailto:otienoneskines@gmail.com" whileHover={{ y: -3 }}>
          <Mail className="h-7 w-7 text-muted-foreground hover:text-primary transition-colors" />
        </motion.a>
      </motion.div>
    </motion.div>
  )
} 