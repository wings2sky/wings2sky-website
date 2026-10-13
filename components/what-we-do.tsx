import Link from "next/link"
import { ArrowRight, Users, ShoppingCart, Megaphone, Store, Tag, FileText } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Account Management",
    description: "Complete seller account setup and management on all major marketplaces with expert guidance.",
  },
  {
    icon: ShoppingCart,
    title: "Product Listing",
    description: "Optimized product listings with SEO-friendly descriptions to maximize visibility and sales.",
  },
  {
    icon: Megaphone,
    title: "Advertisement",
    description: "Strategic advertising campaigns to boost your product visibility and reach target customers.",
  },
  {
    icon: Store,
    title: "Brand Page",
    description: "Professional brand page creation to establish your brand identity and build customer trust.",
  },
  {
    icon: Tag,
    title: "Category Approval",
    description: "Expert assistance in getting category approvals for restricted product categories.",
  },
  {
    icon: FileText,
    title: "A+ Content",
    description: "Enhanced content creation with rich media to improve product presentation and conversion rates.",
  },
]

export default function WhatWeDo() {
  return (
    // Deliberately dark in both themes: a contrast band between two light sections
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0b0b0d] px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-80 w-[52rem] max-w-full -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1 text-xs font-medium text-orange-300">
            What We Do
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Everything Your Seller Account Needs,{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Handled</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            From onboarding to day-to-day operations, here is what our team takes care of for you on Amazon, Flipkart,
            Meesho and other marketplaces.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-primary/60 hover:bg-white/[0.07]"
              >
                <span aria-hidden className="absolute right-5 top-4 text-4xl font-bold tracking-tight text-white/[0.07]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-orange-500 text-white shadow-lg shadow-primary/30 transition group-hover:scale-105">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{service.description}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-9 flex justify-center">
          <Link
            href="/services/ecommerce-management"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-primary/70 hover:bg-primary/15"
          >
            See how we manage seller accounts
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
