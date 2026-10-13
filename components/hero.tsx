"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, BarChart3, ShoppingBag, Star, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import LeadModal from "./contact-modal"

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "2x", label: "Client Sales in 4 Months" },
]

const marketplaces = [
  { name: "Amazon", icon: "/amazon.svg" },
  { name: "Flipkart", icon: "/flipkart-icon.svg" },
  { name: "Myntra", icon: "/myntra.svg" },
  { name: "Meesho", icon: "/meesho.svg", className: "scale-150" },
  { name: "Shopify", icon: "/shopify-icon.svg" },
]

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
    <section className="relative overflow-hidden bg-background px-4 sm:px-6 lg:px-8 pt-10 pb-20 md:pt-16 md:pb-28">
      {/* Background: soft brand glow + faint grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="z-10 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Digital Marketing Agency in Dwarka, Delhi
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
              E-Commerce Services in Delhi, Built to{" "}
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Scale Your Sales
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              One expert team for your entire online business. We handle{" "}
              <strong className="font-semibold text-foreground">marketplace management</strong>,{" "}
              <strong className="font-semibold text-foreground">digital marketing</strong>,{" "}
              <strong className="font-semibold text-foreground">SEO</strong> and{" "}
              <strong className="font-semibold text-foreground">website development</strong>, so you can focus on
              your product while we grow your orders on Amazon, Flipkart, Myntra and Meesho.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold whitespace-nowrap text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-primary/90"
              >
                Book a Free Consultation
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 font-semibold whitespace-nowrap text-foreground backdrop-blur transition hover:border-primary/60 hover:text-primary"
              >
                See Client Results
              </Link>
            </div>

            {/* Proof points */}
            <dl className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-border">
              {stats.map((stat) => (
                <div key={stat.label} className="px-4 first:pl-0">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</dd>
                  <dd className="mt-1 text-xs sm:text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>

            {/* Marketplaces */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="w-full sm:w-auto text-sm text-muted-foreground">We grow brands on</span>
              {marketplaces.map((marketplace) => (
                <span
                  key={marketplace.name}
                  title={marketplace.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm"
                >
                  <Image src={marketplace.icon} alt={marketplace.name} width={22} height={22} className={`h-[22px] w-[22px] object-contain ${marketplace.className ?? ""}`} />
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Client results card */}
          <div className="relative mx-auto w-full max-w-md sm:mb-24 lg:mb-0 lg:max-w-none motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-1000">
            <div className="relative rounded-3xl border border-border bg-card/80 p-6 sm:p-8 shadow-2xl shadow-primary/10 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <BarChart3 size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Client Case Study</p>
                    <p className="text-xs text-muted-foreground">Marketplace revenue, 4 months</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-green-500/15 px-3 py-1 text-xs font-bold text-green-600 dark:text-green-400">
                  <TrendingUp size={14} />
                  +104.9%
                </span>
              </div>

              <p className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">₹40,83,302</p>
              <p className="mt-1 text-sm text-muted-foreground">up from ₹19,93,287 before working with us</p>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="mb-1.5 flex justify-between text-xs text-muted-foreground">
                    <span>Before</span>
                    <span>₹19.9L</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-muted">
                    <div className="h-full w-[49%] rounded-full bg-muted-foreground/50" />
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 flex justify-between text-xs">
                    <span className="font-semibold text-foreground">After 4 months</span>
                    <span className="font-semibold text-primary">₹40.8L</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-muted">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-primary to-orange-400" />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6">
                <div className="rounded-2xl bg-background/70 p-4">
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ShoppingBag size={14} /> Orders
                  </p>
                  <p className="mt-1 text-xl font-bold text-foreground">20,220</p>
                  <p className="text-xs font-semibold text-green-600 dark:text-green-400">+100%</p>
                </div>
                <div className="rounded-2xl bg-background/70 p-4">
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users size={14} /> Customers
                  </p>
                  <p className="mt-1 text-xl font-bold text-foreground">3.2K</p>
                  <p className="text-xs font-semibold text-green-600 dark:text-green-400">+50.7%</p>
                </div>
              </div>
            </div>

            {/* Floating testimonial */}
            <figure className="relative z-10 mx-4 -mt-5 sm:mx-0 sm:absolute sm:-bottom-28 sm:-left-8 sm:mt-0 sm:w-72 rounded-2xl border border-border bg-popover p-4 shadow-xl">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-2 text-sm text-popover-foreground">
                &ldquo;Our order volume doubled and customer satisfaction improved.&rdquo;
              </blockquote>
              <figcaption className="mt-3 flex items-center gap-2">
                <span
                  aria-hidden
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[11px] font-bold text-primary"
                >
                  NG
                </span>
                <span className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Neha Gupta</span> · Beauty Products
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
