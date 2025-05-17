import { ResumeViewer } from "@/src/components/resume-viewer"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">My Resume</h1>
      <ResumeViewer />
    </div>
  )
}
