"use client"

import { Users, ShoppingCart, Megaphone, Store, Tag, FileText } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Account Management",
    description: "Complete seller account setup and management on all major marketplaces with expert guidance.",
  },
  {
    icon: ShoppingCart,
    title: "Product Listing",
    description: "Optimized product listings with SEO-friendly descriptions to maximize visibility and sales.",
  },
  {
    icon: Megaphone,
    title: "Advertisement",
    description: "Strategic advertising campaigns to boost your product visibility and reach target customers.",
  },
  {
    icon: Store,
    title: "Brand Page",
    description: "Professional brand page creation to establish your brand identity and build customer trust.",
  },
  {
    icon: Tag,
    title: "Category Approval",
    description: "Expert assistance in getting category approvals for restricted product categories.",
  },
  {
    icon: FileText,
    title: "A+ Content",
    description: "Enhanced content creation with rich media to improve product presentation and conversion rates.",
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What We Do!</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            While working on your on-boarding account for Amazon, Flipkart & Meesho, there are several things we used to
            do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-white rounded-full">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
