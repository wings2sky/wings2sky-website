// components/service-modal.tsx
"use client"

import React from 'react'
import { X } from 'lucide-react'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    title: string
    icon: string
    detailedDescription: string
    whatWeDo: string[]
    whoFor?: string
    technologyFocus?: string
    platforms?: string
    results: string[]
  }
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      <div className="relative bg-background rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto m-4">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{service.icon}</span>
              <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground">
              {service.detailedDescription}
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">What we do:</h3>
              <ul className="space-y-2 pl-4">
                {service.whatWeDo.map((item, index) => (
                  <li key={index} className="text-muted-foreground list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {service.whoFor && (
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Who this is for:</h3>
                <p className="text-muted-foreground">{service.whoFor}</p>
              </div>
            )}
            
            {service.technologyFocus && (
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Technology focus:</h3>
                <p className="text-muted-foreground">{service.technologyFocus}</p>
              </div>
            )}
            
            {service.platforms && (
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Platforms we manage:</h3>
                <p className="text-muted-foreground">{service.platforms}</p>
              </div>
            )}
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Results you can expect:</h3>
              <ul className="space-y-2 pl-4">
                {service.results.map((result, index) => (
                  <li key={index} className="text-muted-foreground list-disc">
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-8 pt-6 border-t">
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Get Started with {service.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}