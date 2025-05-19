"use client"

import { motion } from "framer-motion"

import {Card, CardContent} from "../components/ui/card"
import { BookOpen, Code, Coffee } from "lucide-react"

export function AboutMe() {
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
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Card className="overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">Hello there!!</h2>
            <div className="space-y-4 text-lg">
              <p>
                I'm Neskines Otieno, a dedicated student on a journey into the dynamic world of software development at
                Seneca College. My path is marked by a curious mind, a passion for coding, and a talent for crafting
                innovative solutions.
              </p>
              <p>
                Currently, I'm exploring opportunities for growth and excited to apply my skills in software
                development. I'm driven to contribute to innovative projects and collaborate with teams that push the
                boundaries of technology.
              </p>
              <p>
                When I'm not immersed in lines of code, you'll likely find me engrossed in a captivating book. I firmly
                believe in the power of words to broaden perspectives and ignite creativity.
              </p>
              <p>
                I thrive in the exhilarating atmosphere of hackathons, where challenges become opportunities and
                collaboration is the key to success. The adrenaline rush of solving problems on the spot fuels my
                enthusiasm for coding.
              </p>
              <p>
                Being socially active isn't just a checkbox for me, it's a genuine commitment to connecting with
                like-minded individuals, learning from diverse perspectives, and building meaningful connections. Let's
                exchange ideas and inspire each other!
              </p>
              <p>
                Whether I'm unraveling the mysteries of code or brainstorming at a hackathon, I find joy in the process
                of learning and creating. Join me on this exciting journey of exploration and growth!
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
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
            <Coffee className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Passion</h3>
            <p className="text-muted-foreground">
              Driven by a genuine love for problem-solving and creating meaningful solutions.
            </p>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Python</li>
                  <li>Flask</li>
                  <li>C/C++</li>
                  <li>Django</li>
                  <li>PostgressSql</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
