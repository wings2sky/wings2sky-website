import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* <Link
          href={project.link}
          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition font-semibold"
        >
          View Project
          <ArrowRight size={18} />
        </Link> */}
      </div>
    </div>
  )
}
