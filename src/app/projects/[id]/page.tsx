import { ProjectDetail } from "@/src/components/project-detail"
import { projects } from "@/src/lib/projects-data"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic" // Enforce dynamic SSR

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const projectIndex = Number(params.id)
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
