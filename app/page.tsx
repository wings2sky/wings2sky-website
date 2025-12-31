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
  keywords: "ecommerce-services,ecommerce services Delhi, e-commerce solutions Dwarka, digital marketing agency Delhi, website development Delhi, Amazon listing services, Flipkart product listing, online store development, ecommerce management, SEO services Delhi, social media marketing Delhi, PPC management, marketplace management, ecommerce consulting, ecommerce website design, Shopify development, WooCommerce expert, product photography Delhi, catalog management, inventory management, payment gateway integration, logistics support, ecommerce SEO, Google Ads Delhi, Facebook marketing, Instagram advertising, business growth solutions, online sales increase, Delhi ecommerce agency, Dwarka digital marketing, top ecommerce company,best ecommerce service provider in Dwarka Delhi, e-commerce, digital marketing, marketplace management, business growth, online sales, ebusiness, online shopping platform, biggest ecommerce platforms, what is ecommerce, online commerce, ecommerce selling products, ecommerce products to sell, best ecommerce websites,e-commerce, digital solutions, marketplace management, business growth,Digital agency for business growth,Complete digital solutions under one roof,E-commerce and web development experts,Digital transformation partners",
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
