import "./globals.css"
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
  keywords: "ecommerce-services,ecommerce services Delhi, e-commerce solutions Dwarka, digital marketing agency Delhi, website development Delhi, Amazon listing services, Flipkart product listing, online store development, ecommerce management, SEO services Delhi, social media marketing Delhi, PPC management, marketplace management, ecommerce consulting, ecommerce website design, Shopify development, WooCommerce expert, product photography Delhi, catalog management, inventory management, payment gateway integration, logistics support, ecommerce SEO, Google Ads Delhi, Facebook marketing, Instagram advertising, business growth solutions, online sales increase, Delhi ecommerce agency, Dwarka digital marketing, top ecommerce company,best ecommerce service provider in Dwarka Delhi, e-commerce, digital marketing, marketplace management, business growth, online sales",
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
      <head>
      <meta name="google-site-verification" content="9-u9v3h3t_TPp_d_hEvQeMLBg89D7eWKnuacgDRdBio" />
        <link rel="stylesheet" href="https://unpkg.com/swiper@12/swiper-bundle.min.css" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  )
}
