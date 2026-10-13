import type { LucideIcon } from "lucide-react"

export interface Project {
  id: number
  title: string
  description: string
  icon: LucideIcon
  tags: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
      {/* Visual header */}
      <div className="relative h-32 overflow-hidden border-b border-border bg-gradient-to-br from-primary/20 via-primary/5 to-transparent">
        <div
          aria-hidden
          className="absolute inset-0 opacity-50 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
        <span className="absolute left-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition group-hover:scale-105">
          <Icon size={26} />
        </span>
        <span aria-hidden className="absolute right-6 top-1/2 -translate-y-1/2 text-5xl font-bold tracking-tight text-primary/15">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-foreground transition group-hover:text-primary">{project.title}</h3>
        <p className="mt-2 text-muted-foreground leading-relaxed">{project.description}</p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
