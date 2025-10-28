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


export const metadata: Metadata = {
  title: "Wings2Sky - E-Commerce & Digital Solutions",
  description:
    "Transform your online business with Wings2Sky. Expert e-commerce management, digital marketing, and proven growth strategies.",
  keywords: "e-commerce, digital solutions, marketplace management, business growth",
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
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
