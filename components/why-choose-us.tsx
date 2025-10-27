"use client"

import { Briefcase, Eye, Shield, Package, Zap, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Briefcase,
    title: "Activate Seller Central",
    description:
      "Our experts have a 95% success rate in helping thousands of merchants carve their niche with store handling and setup lifecycle.",
  },
  {
    icon: Eye,
    title: "Display Your Catalog",
    description:
      "With a 90% success rate, our specialists excel in marketplace guidelines, creating engaging listings that attract buyers and boost sales.",
  },
  {
    icon: Shield,
    title: "Brand Integrity Shield",
    description:
      "We manage your seller account with a 95% success rate, covering brand registry, optimization, ads, and orders.",
  },
  {
    icon: Package,
    title: "Ecommerce Ready Package",
    description:
      "Our expert achieves a 95% success rate in packaging, labeling, compliance, and shipment for various destinations.",
  },
  {
    icon: Zap,
    title: "Ecommerce Ad Solutions",
    description:
      "Our advertising services improve efficiency by 90%, optimizing ads for better performance, higher rankings, and increased sales.",
  },
  {
    icon: TrendingUp,
    title: "Ecommerce SEO",
    description:
      "Our experts use top tools to identify keywords and develop competitive listings, boosting search visibility by up to 85%.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why You Need Our Ecommerce Services</h2>
          <p className="text-lg text-muted-foreground mb-2">Because Your Great Product Deserves the Spotlight</p>
          <p className="text-lg text-primary font-semibold">
            Let Our Marketplace Experts Put Your Product at the Top of E-Commerce Searches
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
