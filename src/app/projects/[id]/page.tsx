import { ProjectDetail } from "@/src/components/project-detail"
import { projects } from "@/src/lib/projects-data"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return projects.map((project, index) => ({
    id: index.toString(),
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectIndex = Number.parseInt(params.id, 10)
  const project = projects[projectIndex]

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <ProjectDetail project={project} />
    </div>
  )
}
