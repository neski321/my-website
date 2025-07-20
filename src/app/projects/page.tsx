import { ProjectsGrid } from "@/src/components/projects-grid"
import { projects } from "@/src/lib/projects-data"

export default function ProjectsPage() {
  // Filter projects
  const completedProjects = projects.filter(project => !project.inProgress)
  const projectsInProgress = projects.filter(project => project.inProgress)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      
      {/* Completed Projects */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Completed Projects</h2>
        <ProjectsGrid projects={completedProjects} />
      </div>

      {/* Projects In Progress */}
      {projectsInProgress.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects In Progress</h2>
          <div className="bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-amber-500/10 rounded-2xl p-8 border border-orange-500/20">
            <ProjectsGrid projects={projectsInProgress} />
          </div>
        </div>
      )}
    </div>
  )
}
