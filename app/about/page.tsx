import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import About from "@/components/about"

export const metadata: Metadata = {
  title: "About Us - Wings2Sky",
  description:
    "Learn about Wings2Sky, a leading digital solutions consultancy with over a decade of experience in e-commerce and digital marketing.",
  keywords: "about, company, team, experience, digital solutions, e-commerce",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <About />
      <Footer />
    </main>
  )
}
