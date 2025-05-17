"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { ContactForm } from "../components/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 mr-3 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary">
                          nmotieno@myseneca.ca
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 mr-3 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                          (647) 671-7323
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">Toronto, Ontario, Canada</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild className="w-full">
                    <a href="mailto:nmotieno@myseneca.ca">Send Email</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
