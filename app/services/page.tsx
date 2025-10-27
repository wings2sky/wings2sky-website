import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServicesSection from "@/components/services-section"

export const metadata: Metadata = {
  title: "Services - Wings2Sky",
  description:
    "Explore our comprehensive e-commerce and digital marketing services. From marketplace optimization to business growth strategies.",
  keywords: "services, e-commerce, digital marketing, marketplace management, business solutions",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicesSection />
      <Footer />
    </main>
  )
}
