"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Code, Sparkles } from "lucide-react"
import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion"
import { Button } from "../components/ui/button"
import { ThemeToggle } from "../components/theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { href: "/", label: "Home", icon: Sparkles },
    { href: "/about", label: "About", icon: Code },
    { href: "/projects", label: "Projects", icon: Code },
    { href: "/contact", label: "Contact", icon: Code },
  ]

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: easeOut }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  }

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: easeOut }
    },
    hover: { 
      y: -2,
      transition: { duration: 0.2 }
    }
  }

  const mobileMenuVariants = {
    initial: { opacity: 0, height: 0 },
    animate: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: easeInOut
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.3,
        ease: easeInOut
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: easeOut }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "bg-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="relative"
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-lg blur-sm"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative bg-primary/10 rounded-lg p-2 border border-primary/20">
                  <Code className="h-6 w-6 text-primary" />
                </div>
              </div>
              <span className="text-xl font-bold text-muted-foreground drop-shadow-md">
                Neskines Otieno
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.div
                  key={link.href}
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 group ${
                      pathname === link.href 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <Icon className="h-4 w-4" />
                      <span>{link.label}</span>
                    </span>
                    {pathname === link.href && (
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                        layoutId="activeTab"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <motion.div
                      className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              )
            })}
            <motion.div
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.25 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
            >
              <ThemeToggle />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="relative p-2 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5 text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 text-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="px-2 pt-2 pb-4 space-y-2 bg-background/95 backdrop-blur-xl shadow-xl rounded-xl mt-2 border border-border/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                          pathname === link.href 
                            ? "text-primary bg-primary/10 border border-primary/20" 
                            : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{link.label}</span>
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
