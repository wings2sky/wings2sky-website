import type React from "react"
import { TrendingUp } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <button className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition group cursor-pointer text-left hover:shadow-lg hover:shadow-primary/10">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex items-center gap-2 text-primary font-semibold">
        <TrendingUp size={18} />
        Learn More
      </div>
    </button>
  )
}
