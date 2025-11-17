"use client"

import type React from "react"
import { useState, useRef, useCallback, useMemo } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { Checkbox } from "../components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { useToast } from "../hooks/use-toast"
import { Loader2, FileText, Send, Briefcase, Handshake, Mail as MailIcon } from "lucide-react"
import { motion } from "framer-motion"
import { db } from "../lib/firebase"
import { addDoc, collection, Timestamp } from "firebase/firestore"

const SUBJECT_TEMPLATES = {
  resume: {
    label: "Request Resume",
    value: "Resume Request",
    icon: FileText,
    subject: "Resume Request - Portfolio Inquiry",
  },
  collaboration: {
    label: "Collaboration",
    value: "Collaboration",
    icon: Handshake,
    subject: "Collaboration Opportunity",
  },
  contact: {
    label: "Getting in Touch",
    value: "Getting in Touch",
    icon: MailIcon,
    subject: "Getting in Touch",
  },
  custom: {
    label: "Custom",
    value: "custom",
    icon: Briefcase,
    subject: "",
  },
}

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [subjectTemplate, setSubjectTemplate] = useState<string>("custom")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    resumeRequest: false,
  })
  const lastTemplateRef = useRef<string>("custom")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, resumeRequest: checked }))
  }

  const handleSubjectTemplateChange = useCallback((value: string) => {
    // Prevent re-entry if this is the same value
    if (value === lastTemplateRef.current) {
      return
    }
    
    lastTemplateRef.current = value
    setSubjectTemplate(value)
    
    if (value !== "custom") {
      const template = SUBJECT_TEMPLATES[value as keyof typeof SUBJECT_TEMPLATES]
      setFormData((prev) => ({ ...prev, subject: template.subject }))
    } else {
      setFormData((prev) => ({ ...prev, subject: "" }))
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save to Firestore
      await addDoc(collection(db, "messages"), {
        ...formData,
        timestamp: Timestamp.now(),
      })

      // Send email via API route
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to send email")
      }

      // Show visual success banner
      setShowBanner(true)
      setTimeout(() => setShowBanner(false), 5000)

      // Show toast with appropriate message
      toast({
        title: "✅ Message Sent",
        description: data.message || "Thanks! Your message has been saved and sent.",
        duration: 5000,
      })

      // Reset form
      setSubjectTemplate("custom")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        resumeRequest: false,
      })
    } catch (error) {
      console.error("Contact form error:", error)
      toast({
        title: "❌ Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* ✅ Visual Success Banner */}
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl shadow-2xl border border-green-400/30 backdrop-blur-sm"
        >
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl">✅</span>
            </motion.div>
            <span className="font-semibold text-lg">Message successfully sent!</span>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2 group">
            <Label htmlFor="name" className="text-sm font-semibold text-foreground">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-background/50 border-border/50 hover:border-primary/30"
            />
          </div>
          <div className="space-y-2 group">
            <Label htmlFor="email" className="text-sm font-semibold text-foreground">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-background/50 border-border/50 hover:border-primary/30"
            />
          </div>
        </div>
        <div className="space-y-2 group">
          <Label htmlFor="subject" className="text-sm font-semibold text-foreground">
            Subject
          </Label>
          <div className="flex gap-3">
            <Select 
              value={subjectTemplate} 
              onValueChange={handleSubjectTemplateChange}
            >
              <SelectTrigger className="w-[200px] transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-background/50 border-border/50 hover:border-primary/30">
                <SelectValue placeholder="Select template" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(SUBJECT_TEMPLATES).map(([key, template]) => {
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
            <Input
              id="subject"
              name="subject"
              placeholder={subjectTemplate === "custom" ? "Enter custom subject..." : "Subject"}
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={subjectTemplate !== "custom" && subjectTemplate !== ""}
              className="flex-1 transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-background/50 border-border/50 hover:border-primary/30 disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>
        </div>
        <div className="space-y-2 group">
          <Label htmlFor="message" className="text-sm font-semibold text-foreground">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project, question, or just say hello..."
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-background/50 border-border/50 hover:border-primary/30 resize-none"
          />
        </div>
        
        {/* Resume Request Option */}
        <motion.div
          className="flex items-start space-x-3 p-5 rounded-xl border-2 border-border/50 bg-gradient-to-br from-muted/40 via-muted/30 to-muted/40 hover:from-muted/50 hover:via-muted/40 hover:to-muted/50 transition-all duration-300 cursor-pointer group"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => handleCheckboxChange(!formData.resumeRequest)}
        >
          <Checkbox
            id="resumeRequest"
            checked={formData.resumeRequest}
            onCheckedChange={handleCheckboxChange}
            className="mt-1"
          />
          <div className="flex-1 space-y-2">
            <Label 
              htmlFor="resumeRequest" 
              className="text-base font-semibold cursor-pointer flex items-center space-x-2 group-hover:text-primary transition-colors"
            >
              <FileText className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <span>I would like to request a copy of your resume</span>
            </Label>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {subjectTemplate === "resume" ? (
                <span className="text-primary font-medium">💡 Tip: Don't forget to check this box to receive my resume!</span>
              ) : (
                "Check this box if you'd like me to send you my resume. I'll include a download link in my response."
              )}
            </p>
          </div>
        </motion.div>

        <Button 
          type="submit" 
          className="w-full group relative overflow-hidden" 
          disabled={isSubmitting}
          size="lg"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </>
            )}
          </span>
          {!isSubmitting && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          )}
        </Button>
      </form>
    </>
  )
}
