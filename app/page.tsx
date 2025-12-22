import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import SalesComparisonSwiper from "@/components/sales-comparison-swiper"
import ServicesInteractive from "@/components/services-interactive"
import WhatWeDo from "@/components/what-we-do"
import WhyChooseUs from "@/components/why-choose-us"
import BusinessBoost from "@/components/business-boost"
import FAQ from "@/components/faq"
import ServicesSection from "@/components/services-section"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"
import PartnershipsWithLogos from "@/components/partners"
import Plans from "@/components/Plans"
// import PartnershipsWithLogos from "@components/partners"


export const metadata: Metadata = {
  title: "Wings2Sky - E-Commerce & Digital Solutions",
  description:
    "Transform your online business with Wings2Sky. Expert e-commerce management, digital marketing, and proven growth strategies.",
  keywords: "ecommerce, ebusiness, online shopping platform, biggest ecommerce platforms, what is ecommerce, online commerce, ecommerce selling products, ecommerce products to sell, best ecommerce websites,e-commerce, digital solutions, marketplace management, business growth,Digital agency for business growth,Complete digital solutions under one roof,E-commerce and web development experts,Digital transformation partners",
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
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
