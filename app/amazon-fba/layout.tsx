// app/amazon-fba-calculator/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Amazon FBA Calculator 2025 | Amazon Profit Calculator | Revenue Calculator 2025",
  description: "Free Amazon FBA Calculator for India sellers. Calculate profit, revenue, fees, and margins instantly. Most accurate Amazon seller calculator with all fee breakdowns including referral, closing, shipping, GST, and storage fees.",
  keywords: "amazon fba calculator, amazon revenue calculator, amazon profit calculator, amazon seller calculator, amazon fee calculator, fba calculator india, amazon commission calculator, kitna milega calculator",
  openGraph: {
    title: "Amazon FBA Calculator 2025 | Amazon Profit Calculator | Revenue Calculator 2025",
    description: "Free Amazon FBA Calculator for India sellers. Calculate profit, revenue, fees, and margins instantly.",
    type: "website",
  },
//   twitter: {
//     card: "summary_large_image",
//     title: "Amazon FBA Calculator 2025 | Amazon Profit Calculator | Revenue Calculator 2025",
//     description: "Free Amazon FBA Calculator for India sellers. Calculate profit, revenue, fees, and margins instantly.",
//   },
}

export default function AmazonFBACalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
  {children}</>
}