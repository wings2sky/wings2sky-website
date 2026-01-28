// app/services/[serviceId]/page.tsx
import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { notFound } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

// Service data - match with the IDs from ServicesSection
const serviceData: Record<string, any> = {
  "digital-marketing": {
    title: "Digital Marketing Services",
    icon: "📊",
    description: "Strategies built to deliver consistent growth across all digital channels.",
    detailedDescription: "Our digital marketing services are built to deliver consistent growth across channels. We do not follow templates. Every strategy is customized based on your business goals, audience behavior, and competitive landscape.",
    whatWeDo: [
      "Digital marketing strategy & planning",
      "Lead generation and funnel optimization",
      "Brand positioning and online visibility",
      "Conversion rate optimization",
      "Monthly reporting and performance analysis"
    ],
    whoFor: "Businesses looking to increase traffic, generate high‑quality leads, and improve ROI across digital channels.",
    results: [
      "Stronger brand presence",
      "Higher engagement and conversions",
      "Scalable growth backed by data"
    ]
  },
  "seo": {
    title: "Search Engine Optimization (SEO)",
    icon: "🔍",
    description: "Rank higher on Google with ethical, long‑term SEO practices.",
    detailedDescription: "Our SEO services are designed to help your website rank higher on Google, attract relevant traffic, and convert visitors into customers. We follow ethical, long‑term SEO practices aligned with Google guidelines.",
    whatWeDo: [
      "In‑depth keyword research for Indian and global markets",
      "Technical SEO audits and fixes",
      "On‑page SEO optimization",
      "Content optimization and SEO copywriting",
      "Local SEO and Google Business Profile optimization",
      "Monthly SEO reports and tracking"
    ],
    whoFor: "E‑commerce, service‑based businesses, startups, local businesses, and international brands.",
    results: [
      "Improved keyword rankings",
      "Increased organic traffic",
      "Higher lead quality",
      "Long‑term visibility and authority"
    ]
  },
  "paid-ads": {
    title: "Search Engine Marketing (Paid Ads)",
    icon: "🎯",
    description: "ROI‑focused paid advertising for immediate traffic and sales.",
    detailedDescription: "We manage ROI‑focused paid advertising campaigns across Google and other platforms to drive immediate traffic and sales.",
    whatWeDo: [
      "Google Ads setup and management",
      "Search, display, and remarketing campaigns",
      "Landing page optimization",
      "Budget optimization and A/B testing",
      "Conversion tracking and reporting"
    ],
    whoFor: "Businesses that want faster results, product sales, or lead generation at scale.",
    results: [
      "High‑intent traffic",
      "Faster lead generation",
      "Controlled ad spend with measurable ROI"
    ]
  },
  "website-development": {
    title: "Website Development Services",
    icon: "💻",
    description: "Fast, responsive, SEO‑friendly, and conversion‑focused websites.",
    detailedDescription: "We design and develop websites that are fast, responsive, SEO‑friendly, and conversion‑focused. Your website is the foundation of your digital presence, and we ensure it performs as a growth asset.",
    whatWeDo: [
      "Business and corporate websites",
      "E‑commerce websites",
      "Mobile‑friendly UI/UX design",
      "Website speed optimization",
      "SEO‑ready structure and clean code"
    ],
    technologyFocus: "WordPress, custom development, and scalable frameworks.",
    results: [
      "Professional brand presence",
      "Better user experience",
      "Higher engagement and conversions"
    ]
  },
  "social-media": {
    title: "Social Media Marketing",
    icon: "📱",
    description: "Build trust, engage audiences, and convert followers into customers.",
    detailedDescription: "Our social media marketing services help brands build trust, engage audiences, and convert followers into customers.",
    whatWeDo: [
      "Social media strategy and planning",
      "Content calendars and creatives",
      "Instagram, Facebook, LinkedIn management",
      "Paid social media campaigns",
      "Community engagement and growth"
    ],
    whoFor: "Brands looking to build awareness, credibility, and long‑term engagement.",
    results: [
      "Consistent brand voice",
      "Increased reach and engagement",
      "Better audience trust"
    ]
  },
  "ecommerce-photoshoot": {
    title: "E‑Commerce Photoshoot Services",
    icon: "📸",
    description: "High‑quality product images that drive conversions.",
    detailedDescription: "High‑quality product images play a major role in conversions. Our e‑commerce photography services are designed for marketplaces and websites.",
    whatWeDo: [
      "Professional product photography",
      "Image editing, retouching, and color correction",
      "Marketplace‑compliant images",
      "Lifestyle and white‑background shots"
    ],
    platforms: "Amazon, Flipkart, Meesho, Shopify, and website product listings.",
    results: [
      "Higher click‑through rates",
      "Improved product presentation",
      "Better conversion performance"
    ]
  },
  "ecommerce-management": {
    title: "E‑Commerce Account Management",
    icon: "🛒",
    description: "Complete marketplace account management for scalable growth.",
    detailedDescription: "We offer complete marketplace account management so you can focus on scaling your business while we handle operations.",
    platforms: "Amazon, Flipkart, Meesho, and other marketplaces.",
    whatWeDo: [
      "Product listing optimization",
      "Account health monitoring",
      "Ads and promotions management",
      "Inventory and performance tracking",
      "Sales growth strategy"
    ],
    results: [
      "Improved sales performance",
      "Optimized listings",
      "Reduced operational stress"
    ]
  }
}

// Generate static params for better performance
export async function generateStaticParams() {
  return Object.keys(serviceData).map((id) => ({
    serviceId: id,
  }))
}

// Add metadata for better SEO - FIXED: params is now a Promise
export async function generateMetadata({ params }: { params: Promise<{ serviceId: string }> }) {
  const { serviceId } = await params
  const service = serviceData[serviceId]
  
  if (!service) {
    return {
      title: 'Service Not Found | Wings2Sky',
      description: 'The requested service page could not be found.'
    }
  }
  
  return {
    title: `${service.title} | Wings2Sky Digital Marketing Services`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ serviceId: string }> }) {
  const { serviceId } = await params
  const service = serviceData[serviceId]

  if (!service) {
    notFound()
  }

  return (
      <>
  <Navigation />    
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/services" 
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Services
        </Link>

        {/* Service Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <h1 className="text-4xl font-bold text-foreground">{service.title}</h1>
              <p className="text-xl text-muted-foreground mt-2">{service.description}</p>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl">
            {service.detailedDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What We Do */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">What we do</h2>
              <ul className="space-y-3">
                {service.whatWeDo.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who For / Technology / Platforms */}
            <div className="grid md:grid-cols-2 gap-6">
              {service.whoFor && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Who this is for</h3>
                  <p className="text-muted-foreground">{service.whoFor}</p>
                </div>
              )}
              
              {service.technologyFocus && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Technology focus</h3>
                  <p className="text-muted-foreground">{service.technologyFocus}</p>
                </div>
              )}
              
              {service.platforms && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Platforms we manage</h3>
                  <p className="text-muted-foreground">{service.platforms}</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Results & CTA */}
          <div className="space-y-6">
            {/* Results */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Results you can expect</h3>
              <ul className="space-y-3">
                {service.results.map((result: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Get Started</h3>
              <p className="mb-6 opacity-90">
                Ready to transform your business with {service.title.toLowerCase()}?
              </p>
              <Button 
                variant="secondary" 
                className="w-full"
                asChild
              >
                <Link href="/contact">
                  Book Free Consultation
                </Link>
              </Button>
              <p className="text-sm opacity-80 mt-4 text-center">
                No commitment required
              </p>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-16 pt-8 border-t">
          <h2 className="text-2xl font-bold text-foreground mb-6">Explore Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(serviceData)
              .filter(([id]) => id !== serviceId)
              .slice(0, 3)
              .map(([id, serviceItem]: [string, any]) => (
                <Link 
                  key={id}
                  href={`/services/${id}`}
                  className="block p-4 border border-border rounded-lg hover:border-primary transition-colors hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{serviceItem.icon}</span>
                    <h3 className="font-semibold text-foreground">{serviceItem.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{serviceItem.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}