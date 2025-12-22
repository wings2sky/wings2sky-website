// app/blinkit-calculator/layout.tsx
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blinkit Seller Calculator 2025 | Blinkit Commission Calculator | Quick Commerce Profit Calculator",
  description: "Free Blinkit Commission Calculator for quick commerce sellers. Calculate inwarding fees, storage costs, commissions, and fulfillment fees for Blinkit's 10-minute delivery model. Most accurate Blinkit seller profit calculator.",
  keywords: "blinkit calculator, blinkit commission calculator, blinkit seller calculator, blinkit profit calculator, blinkit fees calculator, blinkit quick commerce calculator, blinkit delivery calculator, blinkit seller commission, blinkit inwarding fee, blinkit storage fee, quick commerce calculator",
  openGraph: {
    title: "Blinkit Seller Calculator 2025 | Blinkit Commission Calculator | Quick Commerce Profit Calculator",
    description: "Free Blinkit Commission Calculator for quick commerce sellers. Calculate inwarding fees, storage costs, commissions, and fulfillment fees.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blinkit Seller Calculator 2025 | Blinkit Commission Calculator | Quick Commerce Profit Calculator",
    description: "Free Blinkit Commission Calculator for quick commerce sellers. Calculate inwarding fees, storage costs, commissions, and fulfillment fees.",
  },
}

export default function BlinkitCalculatorLayout({
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