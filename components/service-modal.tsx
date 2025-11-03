// components/service-modal.tsx
"use client"

import React from 'react'
import { X, Check } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    icon: string
    title: string
    description: string
  }
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  const router = useRouter()
  
  if (!isOpen) return null

  // Service-specific features (shorter list)
  const getServiceFeatures = (title: string) => {
    const features: { [key: string]: string[] } = {
      "Digital Marketing": [
        "Social Media Marketing",
        "Google & Facebook Ads",
        "Content Marketing",
        "Email Campaigns",
        "Analytics & Reporting",
        "Conversion Optimization"
      ],
      "Website Development": [
        "Modern UI/UX Design",
        "Mobile Responsive",
        "SEO Optimization",
        "Fast Performance",
        "Free Hosting (3 Months)",
        "24/7 Support"
      ],
      "Search Engine Marketing": [
        "PPC Campaign Management",
        "Keyword Research",
        "Landing Page Optimization",
        "Competitor Analysis",
        "ROI Tracking",
        "Ad Copy Creation"
      ],
      "Social Media": [
        "Content Calendar",
        "Community Management",
        "Influencer Collaboration",
        "Social Media Analytics",
        "Engagement Strategy",
        "Brand Monitoring"
      ],
      "E-Commerce Photoshoot": [
        "Product Photography",
        "Image Retouching",
        "Background Removal",
        "Multiple Angle Shots",
        "Brand Styling",
        "Fast Turnaround"
      ],
      "Graphics Designing": [
        "Brand Identity Design",
        "Marketing Materials",
        "Social Media Graphics",
        "Custom Illustrations",
        "Logo Design",
        "Print Design"
      ]
    }

    return features[title] || [
      "Customized Solutions",
      "Quality Assurance",
      "Professional Execution",
      "Timely Delivery",
      "Ongoing Support",
      "Best Practices"
    ]
  }

  const serviceFeatures = getServiceFeatures(service.title)

  const handleContactClick = () => {
    onClose()
    router.push('/contact')
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl max-w-2xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-4">
            <div className="text-3xl">{service.icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm">{service.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X  size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Service Features */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              What's Included
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={18} className="text-green-500 flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="pt-4 border-t border-border">
            <button 
              onClick={handleContactClick}
              className="cursor-pointer w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition text-center"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}