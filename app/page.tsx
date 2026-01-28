import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"

// Dynamically import below-the-fold components for better initial load performance
const SalesComparisonSwiper = dynamic(() => import("@/components/sales-comparison-swiper"), {
  loading: () => <div className="py-20 px-4 sm:px-6 lg:px-8 bg-card" />,
})
const ServicesInteractive = dynamic(() => import("@/components/services-interactive"))
const WhatWeDo = dynamic(() => import("@/components/what-we-do"))
const WhyChooseUs = dynamic(() => import("@/components/why-choose-us"))
const BusinessBoost = dynamic(() => import("@/components/business-boost"))
const FAQ = dynamic(() => import("@/components/faq"))
const ServicesSection = dynamic(() => import("@/components/services-section"))
const Footer = dynamic(() => import("@/components/footer"))
const Testimonials = dynamic(() => import("@/components/testimonials"))
const PartnershipsWithLogos = dynamic(() => import("@/components/partners"))
const Plans = dynamic(() => import("@/components/Plans"))
const SEOContent = dynamic(() => import("@/components/seo-content"))


export const metadata: Metadata = {
  title: "Wings2Sky - E-Commerce Services Delhi | Digital Marketing Agency Dwarka",
  description:
    "Best ecommerce service provider in Dwarka Delhi. Expert e-commerce solutions, digital marketing agency Delhi, website development, Amazon listing services, Flipkart product listing, SEO services, social media marketing, PPC management, marketplace management, and business growth solutions.",
  keywords: "ecommerce services, ecommerce services Delhi, e-commerce solutions Dwarka, digital marketing agency Delhi, website development Delhi, Amazon listing services, Flipkart product listing, online store development, ecommerce management, SEO services Delhi, social media marketing Delhi, ecommerce website design, Shopify development, WooCommerce expert, product photography Delhi, ecommerce SEO, Google Ads Delhi, Facebook marketing, business growth solutions, Dwarka digital marketing, top ecommerce company,best ecommerce service provider in Dwarka Delhi, e-commerce, digital marketing, business growth",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SalesComparisonSwiper />
      <ServicesInteractive />
      <WhatWeDo />
      <WhyChooseUs />
      <BusinessBoost />
      <ServicesSection />
      <Plans />
      <PartnershipsWithLogos />
      <SEOContent />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
