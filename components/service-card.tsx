// components/service-card.tsx
import React from 'react'
import { TrendingUp } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  onViewMore: () => void
}

export default function ServiceCard({ icon, title, description, onViewMore }: ServiceCardProps) {
  return (
    <div className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition group cursor-pointer hover:shadow-lg hover:shadow-primary/10">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      {/* View More Button */}
      <button 
        onClick={onViewMore}
        className="cursor-pointer flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
      >
        <TrendingUp size={18} />
        View Details
      </button>
    </div>
  )
}