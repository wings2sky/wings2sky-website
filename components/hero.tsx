"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import LeadModal from "./contact-modal"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasModalShown, setHasModalShown] = useState(false)

  // Auto-show modal after 40 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasModalShown) {
        setIsModalOpen(true)
        setHasModalShown(true)
      }
    }, 20000) // 20 seconds

    return () => clearTimeout(timer)
  }, [hasModalShown])
  return (
    <>
         <LeadModal
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              E-Commerce Services Delhi | Digital Marketing Agency Dwarka
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Leading <strong>ecommerce services provider in Dwarka Delhi</strong> offering comprehensive 
              <strong>e-commerce solutions</strong>, <strong>digital marketing</strong>, and 
              <strong>marketplace management</strong>. We help businesses achieve <strong>online sales increase</strong> 
              through expert <strong>website development</strong>, <strong>SEO services</strong>, and 
              <strong>ecommerce management</strong> strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                View Projects
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:block relative h-96">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop"
              alt="Digital Solutions"
              width={400}
              height={500}
              priority
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              sizes="(max-width: 768px) 0px, 400px"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
