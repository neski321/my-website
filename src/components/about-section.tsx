"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { BookOpen, Code, Users, Award } from "lucide-react"

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section ref={ref} id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated student on a journey into the dynamic world of software development.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div variants={item}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-4">
                  I'm Neskines Otieno, a dedicated student on a journey into the dynamic world of software development
                  at Seneca College. My path is marked by a curious mind, a passion for coding, and a talent for
                  crafting innovative solutions.
                </p>
                <p className="text-muted-foreground">
                  Currently, I'm exploring opportunities for growth and excited to apply my skills in software
                  development. I'm driven to contribute to innovative projects and collaborate with teams that push the
                  boundaries of technology.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Beyond Coding</h3>
                <p className="text-muted-foreground mb-4">
                  When I'm not immersed in lines of code, you'll likely find me engrossed in a captivating book. I
                  firmly believe in the power of words to broaden perspectives and ignite creativity.
                </p>
                <p className="text-muted-foreground">
                  I thrive in the exhilarating atmosphere of hackathons, where challenges become opportunities and
                  collaboration is the key to success. The adrenaline rush of solving problems on the spot fuels my
                  enthusiasm for coding.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div variants={item}>
            <Card className="text-center p-6 h-full">
              <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-muted-foreground">
                Passionate about creating clean, efficient, and user-friendly applications.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="text-center p-6 h-full">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Learning</h3>
              <p className="text-muted-foreground">
                Continuously expanding my knowledge and staying updated with the latest technologies.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="text-center p-6 h-full">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                Thriving in team environments and contributing to collective success.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="text-center p-6 h-full">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Achievement</h3>
              <p className="text-muted-foreground">
                Driven by challenges and committed to delivering high-quality results.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
