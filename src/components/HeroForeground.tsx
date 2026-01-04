"use client"

import { motion, easeOut } from "framer-motion"
import { Button } from "../components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import TrueFocus from "./true-focus"
//import DecryptedText from "./decrypted-text"
import { useIsMobile } from "../hooks/use-mobile"

import { useRef } from "react"
import VariableProximity from "./VariableProximity"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
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
      duration: 0.5,
      ease: easeOut,
    },
  },
}

export function HeroForeground() {
  const { resolvedTheme } = useTheme()
  const isMobile = useIsMobile()
  const isDark = resolvedTheme === "dark"
  const containerRef = useRef(null)

  return (
    <motion.div
      className="text-center space-y-8 max-w-4xl mx-auto px-4 relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Title with TrueFocus */}
      <motion.div variants={textRevealVariant} className="space-y-4">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
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
        <div
          ref={containerRef}
          style={{ position: "relative" }}
        >
          <VariableProximity
            label={"Software Developer & Creative Technologist"}
            className={"variable-proximity-demo font-roboto-flex text-3xl md:text-4xl lg:text-5xl font-semibold text-black dark:text-white"}
            fromFontVariationSettings="'wght' 500, 'opsz' 9"
            toFontVariationSettings="'wght' 1200, 'opsz' 40"
            containerRef={containerRef}
            radius={250}
            falloff="linear"
          />
        </div>
      {/* Subtitle */}
      {/*<motion.div variants={fadeUpVariant} className="space-y-2">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
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
        </motion.div>*/}
        <motion.div
          className="flex items-center justify-center space-x-2 text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium">Full-Stack Development</span>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        </motion.div>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeUpVariant}
        className="text-lg md:text-xl lg:text-2xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed"
      >
        Crafting innovative digital solutions with a passion for clean code, 
        user-centered design, and 
         cutting-edge technology
      </motion.p>

      {/* CTA Buttons */}
      <motion.div variants={fadeUpVariant} className="flex flex-col items-center gap-4 pt-6">
        {/* Top row: View My Work and Resume buttons */}
        <div className="flex flex-wrap justify-center gap-4">
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
              <Link href="/contact">
                Request Resume
              </Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Bottom row: Get In Touch button centered */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              Get In Touch
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
            transition={{ delay: 0.4 + index * 0.05 }}
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
    </motion.div>
  )
} 