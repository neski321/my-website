import { AboutMe } from "@/src/components/about-me"

export default function AboutPage() {
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20"
      style={{ 
        width: '100%', 
        overflowX: 'hidden',
        position: 'relative'
      }}
    >
      <AboutMe />
    </div>
  )
}
