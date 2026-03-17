"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import Image from "next/image"
import Orb from "./orb"
import { 
  BookOpen, 
  Code, 
  Coffee, 
  Database, 
  Cloud, 
  Shield, 
  Brain, 
  Globe, 
  Zap,
  Users,
  Award,
  Terminal,
  Server,
  Lock,
  BarChart3,
  Cpu,
  GitBranch,
  Languages,
  Sparkles
} from "lucide-react"
import { useIsMobile } from "../hooks/use-mobile"

export function AboutMe() {
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Python", "C/C++", "JavaScript", "C#", "Kotlin", "Swift", "PHP"],
      color: "bg-blue-500/10 text-blue-400 border-blue-200"
    },
    {
      title: "Backend Frameworks & Tools",
      icon: <Server className="w-6 h-6" />,
      skills: ["Laravel", "React", "Django", "Flask", "Firebase", "Streamlit", "Unreal Engine (Blueprints)"],
      color: "bg-green-500/10 text-green-500 border-green-200"
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS (S3, RDS, EC2)", "Render", "Streamlit Cloud", "Docker", "Docker Compose", "Nginx", "RabbitMQ"],
      color: "bg-purple-500/10 text-purple-400 border-purple-200"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Firestore"],
      color: "bg-orange-500/10 text-orange-400 border-orange-200"
    },
    {
      title: "Development Practices",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "JIRA", "Agile Methodologies", "Unit/Regression Testing"],
      color: "bg-red-500/10 text-red-400 border-red-200"
    },
    {
      title: "Data Science & ML",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["scikit-learn", "pandas", "matplotlib", "seaborn", "RFM analysis", "Clustering (KMeans)"],
      color: "bg-pink-500/10 text-pink-500 border-pink-200"
    },
    {
      title: "Authentication & Security",
      icon: <Shield className="w-6 h-6" />,
      skills: ["JWT", "OAuth 2.0", "SAML2", "Two-Factor Authentication", "API Security", "Rate Limiting"],
      color: "bg-indigo-500/10 text-indigo-400 border-indigo-200"
    },
    {
      title: "Research & Analysis",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Technical Research", "Data Analysis", "Accessibility (AODA)", "Risk Mitigation", "System Design"],
      color: "bg-teal-500/10 text-teal-500 border-teal-200"
    },
    {
      title: "Technologies & Tools",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Microsoft Office Suite", "Power BI", "SharePoint", "Visual Studio", "Android Studio"],
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-200"
    }
  ]

  const coreStrengths = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with modern frameworks and best practices"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Strong understanding of algorithms, data structures, and optimization techniques"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Thriving in team environments with Agile methodologies and effective communication"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Passionate about staying current with emerging technologies and industry trends"
    }
  ]

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Image Section - Left with Orb */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center md:justify-start md:col-span-4 relative"
          >
            <div 
              ref={imageContainerRef}
              style={{ width: '100%', maxWidth: '400px', height: '400px', position: 'relative', cursor: 'pointer' }}
            >
              {/* Orb Background */}
              <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
                {!isMobile ? (
                  <Orb
                    hoverIntensity={2}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                    radius={0.8}
                    containerRef={imageContainerRef}
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] animate-pulse-slow"></div>
                )}
              </div>
              {/* Circular Image - Centered within Orb */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10, width: '70%', maxWidth: '280px', aspectRatio: '1', pointerEvents: 'none' }}>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-primary/20 dark:border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5">
                  <Image
                    src="/static/About/myimage.webp"
                    alt="Neskines Otieno"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 200px, 280px"
                  />
                  {/* Gradient overlay for better visual effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content - Right */}
          <div className="md:col-span-8 text-center md:text-left md:pl-8 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
                Neskines Otieno
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground dark:text-muted-foreground/90 mb-6">
                Software Developer & Problem Solver
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Globe className="w-4 h-4 mr-2" />
                  Fluent in English & Swahili
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Award className="w-4 h-4 mr-2" />
                  Bachelor of Technology in Software Development
                </Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Personal Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mb-16"
      >
        <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-card to-card/80 dark:from-card/90 dark:to-card/70">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              My Journey
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground dark:text-muted-foreground/90">
                Hello there! I'm <span className="font-semibold text-foreground dark:text-foreground">Neskines Otieno</span>, a proactive developer 
                on an exciting journey into the dynamic world of software development. My path is marked 
                by a curious mind, a passion for coding, and a talent for crafting innovative solutions that make a real impact.
              </p>
              <p className="text-muted-foreground dark:text-muted-foreground/90">
                Currently, I'm exploring opportunities for growth and excited to apply my comprehensive skill set in software 
                development. I'm driven to contribute to innovative projects and collaborate with teams that push the boundaries 
                of technology while maintaining the highest standards of code quality and user experience.
              </p>
              <p className="text-muted-foreground dark:text-muted-foreground/90">
                When I'm not immersed in lines of code, you'll likely find me engrossed in a captivating book or participating 
                in hackathons. I firmly believe in the power of continuous learning and the thrill of solving complex problems 
                under pressure. The adrenaline rush of hackathons fuels my enthusiasm for coding and collaboration.
              </p>
              <p className="text-muted-foreground dark:text-muted-foreground/90">
                Being socially active isn't just a checkbox for me, it's a genuine commitment to connecting with like-minded 
                individuals, learning from diverse perspectives, and building meaningful professional relationships. Let's 
                exchange ideas and inspire each other to create amazing things!
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Core Strengths */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Core Strengths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreStrengths.map((strength, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full text-center p-6 hover:shadow-lg transition-all duration-200 border-0 bg-gradient-to-br from-card to-card/80 dark:from-card/90 dark:to-card/70">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary">
                    {strength.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground dark:text-foreground">{strength.title}</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground/90 text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-200 border-0 bg-gradient-to-br from-card to-card/80 dark:from-card/90 dark:to-card/70">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-lg ${category.color} dark:opacity-90 flex items-center justify-center mr-3`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground dark:text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className={`text-xs ${category.color} dark:opacity-90 hover:scale-105 transition-transform`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-center"
      >
        <Card className="border-0 shadow-xl bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/15">
         <CardContent className="p-12 md:p-16 relative">
               <div className="flex items-center justify-center mb-8">
                 <Sparkles className="w-8 h-8 text-purple-500 mr-4" />
                 <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground">Ready to Build Something Amazing?</h2>
                 <Sparkles className="w-8 h-8 text-blue-500 ml-4" />
               </div>

               <p className="text-xl text-muted-foreground dark:text-muted-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                 Whether I'm unraveling the mysteries of code or brainstorming at a hackathon, I find joy in the process
                 of learning and creating. Let's connect and explore the endless possibilities of technology together!
               </p>

              <div className="flex flex-wrap justify-center gap-6">
                <Badge className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 border-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-white font-medium">
                  <Zap className="w-5 h-5 mr-3" />
                  Always Learning
                </Badge>
                <Badge className="px-8 py-4 text-lg bg-purple-600 hover:bg-purple-700 border-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-white font-medium">
                  <Users className="w-5 h-5 mr-3" />
                  Team Player
                </Badge>
                <Badge className="px-8 py-4 text-lg bg-emerald-600 hover:bg-emerald-700 border-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 text-white font-medium">
                  <Award className="w-5 h-5 mr-3" />
                  Quality Focused
                </Badge>
              </div>
            </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
