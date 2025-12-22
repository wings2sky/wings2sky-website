// app/nykaa-calculator/layout.tsx
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nykaa Seller Commission Calculator 2025 | Nykaa Profit Calculator | Commission Calculator",
  description: "Free Nykaa Calculator for beauty & fashion sellers. Calculate seller commissions, shipping charges, profit margins instantly. Most accurate Nykaa seller calculator with detailed breakdown of commissions (15-30%), shipping fees, and net earnings.",
  keywords: "nykaa calculator, nykaa seller calculator, nykaa commission calculator, nykaa profit calculator, nykaa earnings calculator, nykaa fees calculator, nykaa shipping calculator, nykaa seller commission, nykaa seller profit calculator, nykaa commission 15-30%, nykaa main calculator, nykaa fashion calculator, calculate nykaa fees, nykaa seller charges, nykaa profit margin calculator",
  openGraph: {
    title: "Nykaa Seller Commission Calculator 2025 | Nykaa Profit Calculator | Commission Calculator",
    description: "Free Nykaa Calculator for beauty & fashion sellers. Calculate seller commissions, shipping charges, profit margins instantly.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nykaa Seller Commission Calculator 2025 | Nykaa Profit Calculator | Commission Calculator",
    description: "Free Nykaa Calculator for beauty & fashion sellers. Calculate seller commissions, shipping charges, profit margins instantly.",
  },
}

export default function NykaaCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}