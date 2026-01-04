"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ContactForm } from "@/src/components/contact-form"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Label } from "@/src/components/ui/label"
import { Mail, MapPin, Phone, Send, Sparkles, MessageSquare, FileText, Handshake } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select"

const EMAIL_TEMPLATES = {
  resume: {
    label: "Request Resume",
    icon: FileText,
    subject: "Resume Request - Portfolio Inquiry",
    body: "Hello Neskines,\n\nI came across your portfolio and would like to request a copy of your resume. I'm interested in learning more about your background and experience.\n\nThank you!",
  },
  collaboration: {
    label: "Collaboration Opportunity",
    icon: Handshake,
    subject: "Collaboration Opportunity",
    body: "Hello Neskines,\n\nI'd like to discuss a potential collaboration opportunity with you. I believe your skills and expertise would be a great fit for this project.\n\nLooking forward to hearing from you!",
  },
  contact: {
    label: "Getting in Touch",
    icon: MessageSquare,
    subject: "Getting in Touch",
    body: "Hello Neskines,\n\nI wanted to reach out and get in touch. I'd love to connect and discuss potential opportunities.\n\nBest regards!",
  },
}

export default function ContactPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedTemplate, setSelectedTemplate] = useState<string>("contact")

  const getEmailLink = (templateKey: string) => {
    const template = EMAIL_TEMPLATES[templateKey as keyof typeof EMAIL_TEMPLATES]
    const email = "neskineso@gmail.com"
    const subject = encodeURIComponent(template.subject)
    const body = encodeURIComponent(template.body)
    return `mailto:${email}?subject=${subject}&body=${body}`
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="relative min-h-screen py-16 md:py-24">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Floating Icons */}
        <motion.div
          className="absolute top-32 right-32 opacity-10"
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <MessageSquare className="h-16 w-16 text-primary" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-32 opacity-10"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Send className="h-12 w-12 text-secondary" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 left-20 opacity-10"
          animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Sparkles className="h-14 w-14 text-accent" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.div
              className="flex items-center justify-center space-x-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <MessageSquare className="h-8 w-8 text-primary" />
              </motion.div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
                Get In Touch
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a question, want to collaborate, or need my resume? 
              <span className="bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent"> I'd love to hear from you!</span>
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes 2 columns */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-xl hover:shadow-2xl transition-all duration-200 relative">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />
                
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["200% 0", "-200% 0"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                <CardContent className="p-8 md:p-10 relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Send a Message</h2>
                  </div>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information - Takes 1 column */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-xl hover:shadow-2xl transition-all duration-200 relative h-full">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-50" />
                
                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Contact Info</h2>
                  </div>

                  <div className="space-y-6 flex-1">
                    <motion.div
                      className="group p-4 rounded-lg border border-border/50 bg-muted/30 hover:bg-muted/50 transition-all duration-200 cursor-pointer"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-muted-foreground mb-1">Email</p>
                          <a
                            href="mailto:neskineso@gmail.com"
                            className="text-base font-medium hover:text-primary transition-colors break-all"
                          >
                            neskineso@gmail.com
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="group p-4 rounded-lg border border-border/50 bg-muted/30 hover:bg-muted/50 transition-all duration-200 cursor-pointer"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                          <Phone className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-muted-foreground mb-1">Phone</p>
                          <a
                            href="tel:+6476717323"
                            className="text-base font-medium hover:text-green-500 transition-colors"
                          >
                            (647) 671-7323
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="group p-4 rounded-lg border border-border/50 bg-muted/30 hover:bg-muted/50 transition-all duration-200"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                          <MapPin className="h-5 w-5 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-muted-foreground mb-1">Location</p>
                          <p className="text-base font-medium">Toronto, Ontario, Canada</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/50 space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-foreground">
                        Email Template
                      </Label>
                      <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                        <SelectTrigger className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-background/50 border-border/50 hover:border-primary/30">
                          <SelectValue placeholder="Select email template" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(EMAIL_TEMPLATES).map(([key, template]) => {
                            const Icon = template.icon
                            return (
                              <SelectItem key={key} value={key}>
                                <div className="flex items-center space-x-2">
                                  <Icon className="h-4 w-4" />
                                  <span>{template.label}</span>
                                </div>
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button asChild className="w-full group" size="lg">
                      <a 
                        href={getEmailLink(selectedTemplate)} 
                        className="flex items-center justify-center space-x-2"
                      >
                        <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        <span>Send Email Directly</span>
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Opens your default email client with a pre-filled template
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
