import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Badge, CtaBand, GradientText, HeroBackdrop, PrimaryButton } from "@/components/page-sections"
import { IndustriesGrid } from "@/components/services-catalog"

export const metadata: Metadata = {
  title: "Industries We Serve | Digital Marketing by Sector | Wings2Sky",
  description:
    "Industry-specific digital marketing for healthcare, education, B2B, e-commerce, real estate, startups, manufacturing, retail, hospitality and service businesses.",
}

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative overflow-hidden bg-background px-4 sm:px-6 lg:px-8 pt-10 pb-20 md:pt-16 md:pb-24">
        <HeroBackdrop />
        <div className="relative max-w-7xl mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <Badge>Industries We Serve</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
              Digital Marketing That Fits <GradientText>Your Industry</GradientText>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              Every industry buys differently. A patient choosing a clinic, a procurement manager shortlisting
              suppliers and a shopper comparing products all need a different approach. We tailor channels, messaging
              and measurement to how your customers actually decide.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryButton href="/contact">Book a Free Consultation</PrimaryButton>
            </div>
          </div>

          <div className="mt-16">
            <IndustriesGrid />
          </div>
        </div>
      </section>

      <div className="border-t border-border">
        <CtaBand />
      </div>

      <Footer />
    </main>
  )
}
