import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import FloatingContact from "@/components/floating-contact"
import Script from "next/script"

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
        
        {/* Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
        
        {/* Google Analytics (gtag.js) */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-9KEF8KZ39Q"
        />
        <Script
          id="google-analytics-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9KEF8KZ39Q');
            `,
          }}
        />
      </head>
      <body className={`${geist.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-9KEF8KZ39Q"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {children}
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  )
}