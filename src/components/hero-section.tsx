"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, easeOut, easeInOut } from "framer-motion"
import { Button } from "../components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Code, Zap } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import TrueFocus from "./true-focus"
import DecryptedText from "./decrypted-text"

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

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const { scrollY } = useScroll()
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const y3 = useTransform(scrollY, [0, 500], [0, 50])
  
  // Smooth spring animations
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 })
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 })
  const springY3 = useSpring(y3, { stiffness: 100, damping: 30 })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <section className="relative py-24 md:py-32 flex flex-col items-center justify-center min-h-[90vh] w-full overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
        {/* Primary Blob */}
        <motion.div
          style={{ y: springY1 }}
          className={`absolute top-[15%] left-[-25%] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] rounded-full filter blur-3xl 
            ${isDark
              ? "bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-pink-600/30 shadow-[0_0_120px_60px_rgba(168,85,247,0.2)]"
              : "bg-gradient-to-br from-purple-400/30 via-blue-400/20 to-pink-400/30 shadow-[0_0_120px_60px_rgba(192,132,252,0.3)]"}`}
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: easeInOut }}
        />

        {/* Secondary Blob */}
        <motion.div
          style={{ y: springY2 }}
          className={`absolute bottom-[10%] right-[-20%] w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] md:w-[650px] md:h-[650px] rounded-full filter blur-3xl 
            ${isDark
              ? "bg-gradient-to-br from-emerald-600/25 via-teal-600/20 to-cyan-600/25 shadow-[0_0_100px_50px_rgba(5,150,105,0.15)]"
              : "bg-gradient-to-br from-emerald-400/25 via-teal-400/20 to-cyan-400/25 shadow-[0_0_100px_50px_rgba(52,211,153,0.2)]"}`}
          animate={{ 
            x: [0, -40, 0], 
            y: [0, -20, 20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: easeInOut }}
        />

        {/* Accent Blob */}
        <motion.div
          style={{ y: springY3 }}
          className={`absolute top-[40%] left-[60%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full filter blur-3xl 
            ${isDark
              ? "bg-gradient-to-br from-orange-600/20 via-red-600/15 to-pink-600/20 shadow-[0_0_80px_40px_rgba(251,146,60,0.15)]"
              : "bg-gradient-to-br from-orange-400/20 via-red-400/15 to-pink-400/20 shadow-[0_0_80px_40px_rgba(251,146,60,0.2)]"}`}
          animate={{ 
            x: [0, 30, -30, 0], 
            y: [0, -30, 30, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: easeInOut }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              isDark ? "bg-primary/40" : "bg-primary/60"
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: easeInOut,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <motion.div
        className="text-center space-y-8 max-w-4xl mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating Icons */}
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
              blurAmount={3}
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
          <span className="bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent drop-shadow-md"> user-centered design</span>, and 
          <span className="bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent drop-shadow-md"> cutting-edge technology</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-4 pt-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="group relative overflow-hidden">
              <Link href="/projects">
                <span className="relative z-10 flex items-center">
                  View My Work 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/contact">
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  className="absolute inset-0 bg-primary/10 rounded-md"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={fadeUpVariant} className="flex justify-center space-x-4 pt-8">
          {[
            { href: "https://github.com/neski321", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/neskines-o-5205b3177/", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:neskineso@gmail.com", icon: Mail, label: "Email" },
          ].map((social, index) => (
            <motion.div
              key={social.label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <Button variant="ghost" size="icon" asChild className="group">
                <a 
                  href={social.href} 
                  target={social.href.startsWith('mailto:') ? undefined : "_blank"} 
                  rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"} 
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 transition-colors group-hover:text-primary" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
