import "../globals.css"
import SwiperStyles from "@/components/swiper-styles"
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import FloatingContact from "@/components/floating-contact"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wings2Sky - E-Commerce & Digital Solutions",
  description:
    "Professional e-commerce management, digital marketing, and business growth strategies. Boost your online sales with Wings2Sky.",
  keywords: "e-commerce, digital marketing, marketplace management, business growth, online sales",
  authors: [{ name: "Wings2Sky" }],
  openGraph: {
    title: "Wings2Sky - E-Commerce & Digital Solutions",
    description: "Professional e-commerce management and digital marketing services",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <SwiperStyles />
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  )
}
