import { ProjectsGrid } from "@/src/components/projects-grid"
import { projects } from "@/src/lib/projects-data"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <ProjectsGrid projects={projects} />
    </div>
  )
}
