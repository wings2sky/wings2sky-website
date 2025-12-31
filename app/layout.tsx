import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import FloatingContact from "@/components/floating-contact"

const geist = Geist({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: "Wings2Sky - E-Commerce Services Delhi | Digital Marketing Agency Dwarka",
  description:
    "Best ecommerce service provider in Dwarka Delhi. Complete digital solutions including e-commerce services, digital marketing agency Delhi, website development, Amazon listing services, Flipkart product listing, SEO services, social media marketing, PPC management, marketplace management, and business growth solutions.",
  keywords: "ecommerce-services,ecommerce services Delhi, e-commerce solutions Dwarka, digital marketing agency Delhi, website development Delhi, Amazon listing services, Flipkart product listing, online store development, ecommerce management, SEO services Delhi, social media marketing Delhi, PPC management, marketplace management, ecommerce consulting, ecommerce website design, Shopify development, WooCommerce expert, product photography Delhi, catalog management, inventory management, payment gateway integration, logistics support, ecommerce SEO, Google Ads Delhi, Facebook marketing, Instagram advertising, business growth solutions, online sales increase, Delhi ecommerce agency, Dwarka digital marketing, top ecommerce company,best ecommerce service provider in Dwarka Delhi, e-commerce, digital marketing, marketplace management, business growth, online sales, ebusiness, online shopping platform, biggest ecommerce platforms, what is ecommerce, online commerce, ecommerce selling products, ecommerce products to sell, best ecommerce websites,e-commerce, digital solutions, marketplace management, business growth,Digital agency for business growth,Complete digital solutions under one roof,E-commerce and web development experts,Digital transformation partners",
  authors: [{ name: "Wings2Sky" }],
  openGraph: {
    title: "Wings2Sky - E-Commerce Services Delhi | Digital Marketing Agency Dwarka",
    description: "Best ecommerce service provider in Dwarka Delhi offering e-commerce solutions, digital marketing, website development, marketplace management, and business growth services.",
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
      </head>
      <body className={`${geist.className} antialiased`}>
        {children}
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  )
}
