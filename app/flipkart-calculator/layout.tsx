// app/flipkart-calculator/layout.tsx
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Flipkart Seller Calculator 2025 | Flipkart Profit Calculator | Commission Calculator",
  description: "Free Flipkart Calculator for sellers. Calculate commission, profit, ROI, revenue, and all fees instantly. Most accurate Flipkart seller calculator with detailed breakdown of commission, collection, shipping, and GST fees.",
  keywords: "flipkart calculator, flipkart seller calculator, flipkart commission calculator, flipkart profit calculator, flipkart roi calculator, flipkart revenue calculator, flipkart fees calculator, flipkart seller profit calculator, flipkart pricing calculator, kitna milega flipkart",
  openGraph: {
    title: "Flipkart Seller Calculator 2025 | Flipkart Profit Calculator | Commission Calculator",
    description: "Free Flipkart Calculator for sellers. Calculate commission, profit, ROI, revenue, and all fees instantly.",
    type: "website",
  },
//   twitter: {
//     card: "summary_large_image",
//     title: "Flipkart Seller Calculator 2025 | Flipkart Profit Calculator | Commission Calculator",
//     description: "Free Flipkart Calculator for sellers. Calculate commission, profit, ROI, revenue, and all fees instantly.",
//   },
}

export default function FlipkartCalculatorLayout({
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