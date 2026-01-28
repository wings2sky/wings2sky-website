"use client"

import React from 'react'
import ServiceCard from "@/components/service-card"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ServicesSection() {
  const router = useRouter()

  const services = [
    {
      id: "digital-marketing",
      icon: "📊",
      title: "Digital Marketing Services",
      description: "Strategies built to deliver consistent growth across all digital channels.",
    },
    {
      id: "seo",
      icon: "🔍",
      title: "Search Engine Optimization (SEO)",
      description: "Rank higher on Google with ethical, long‑term SEO practices.",
    },
    {
      id: "paid-ads",
      icon: "🎯",
      title: "Search Engine Marketing (Paid Ads)",
      description: "ROI‑focused paid advertising for immediate traffic and sales.",
    },
    {
      id: "website-development",
      icon: "💻",
      title: "Website Development Services",
      description: "Fast, responsive, SEO‑friendly, and conversion‑focused websites.",
    },
    {
      id: "social-media",
      icon: "📱",
      title: "Social Media Marketing",
      description: "Build trust, engage audiences, and convert followers into customers.",
    },
    {
      id: "ecommerce-photoshoot",
      icon: "📸",
      title: "E‑Commerce Photoshoot Services",
      description: "High‑quality product images that drive conversions.",
    },
    {
      id: "ecommerce-management",
      icon: "🛒",
      title: "E‑Commerce Account Management",
      description: "Complete marketplace account management for scalable growth.",
    }
  ]

  const handleViewMore = (serviceId: string) => {
    router.push(`/services/${serviceId}`)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - New Content */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Grow Your Business Online with Result‑Driven Digital Marketing Services
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Wings2Sky is a full‑service digital marketing agency helping businesses in India and across 
              global markets build visibility, generate qualified leads, and scale revenue. We specialize 
              in SEO, performance marketing, website development, and end‑to‑end e‑commerce solutions 
              designed for sustainable growth.
            </p>
            
            <p className="text-lg text-foreground mb-8 font-medium">
              Whether you are a Startup, a growing Brand, or an established Business, our strategies 
              are data‑driven, transparent, and focused on measurable outcomes.
            </p>
            
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Book a Free Strategy Consultation
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to help your business grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              onClick={() => handleViewMore(service.id)}
              className="cursor-pointer"
            >
              <ServiceCard 
                icon={<span>{service.icon}</span>}
                title={service.title} 
                description={service.description}
                onViewMore={() => handleViewMore(service.id)}
              />
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Why Choose Wings2Sky</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Experienced team with multi‑industry exposure",
              "Transparent processes and reporting",
              "Customized strategies for India and global markets",
              "Performance‑focused execution",
              "Long‑term partnership mindset"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4">
                <span className="text-primary">✓</span>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Q1. How long does SEO take to show results?",
                a: "SEO is a long‑term strategy. Initial improvements are usually visible within 3–4 months, with stronger growth over 6–9 months."
              },
              {
                q: "Q2. Do you work with international clients?",
                a: "Yes, we work with clients across India and global markets with region‑specific strategies."
              },
              {
                q: "Q3. Do you provide reports?",
                a: "Yes. Monthly performance reports are included with all services."
              },
              {
                q: "Q4. Is there a minimum contract period?",
                a: "Project and retainer models are available based on service type."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Ready to grow your business online with a trusted digital partner?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your free consultation with Wings2Sky today.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Book Your Free Consultation Now
          </Link>
        </div>
      </div>
    </section>
  )
}