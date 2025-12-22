// app/myntra-calculator/layout.tsx
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Myntra Seller Calculator 2025 | Myntra Profit Calculator | Commission Calculator",
  description: "Free Myntra Calculator for fashion sellers. Calculate marketplace fees, profit, ROI, revenue, GST, and all fees instantly. Most accurate Myntra seller calculator with detailed breakdown of marketplace fees, GST, shipping, and fixed charges.",
  keywords: "myntra calculator, myntra seller calculator, myntra commission calculator, myntra profit calculator, myntra roi calculator, myntra revenue calculator, myntra fees calculator, myntra marketplace fee calculator, myntra pricing calculator, myntra seller profit calculator, kitna milega myntra",
  openGraph: {
    title: "Myntra Seller Calculator 2025 | Myntra Profit Calculator | Commission Calculator",
    description: "Free Myntra Calculator for fashion sellers. Calculate marketplace fees, profit, ROI, revenue, GST, and all fees instantly.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Myntra Seller Calculator 2025 | Myntra Profit Calculator | Commission Calculator",
    description: "Free Myntra Calculator for fashion sellers. Calculate marketplace fees, profit, ROI, revenue, GST, and all fees instantly.",
  },
}

export default function MyntraCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return <>
  <Navigation />
  {children}
  <Footer />
  </>
}