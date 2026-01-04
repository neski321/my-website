"use client"

import { useIsMobile } from "../hooks/use-mobile";
import { motion, useScroll, useTransform, useSpring, easeInOut } from "framer-motion"
import { useTheme } from "next-themes"

export function HeroBackground() {
  const isMobile = useIsMobile();
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
  
  const isDark = resolvedTheme === "dark"

  if (isMobile) {
    return (
      <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
        <div className={`absolute top-0 left-0 w-full h-full ${isDark ? "bg-gray-900" : "bg-gray-100"}`} />
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
      {/* Primary Blob */}
      <motion.div
        style={{ 
          y: springY1,
          willChange: "transform",
          transform: "translateZ(0)"
        }}
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
        style={{ 
          y: springY2,
          willChange: "transform",
          transform: "translateZ(0)"
        }}
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
        style={{ 
          y: springY3,
          willChange: "transform",
          transform: "translateZ(0)"
        }}
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
  )
} 