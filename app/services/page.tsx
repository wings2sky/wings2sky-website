import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { serviceCategories } from "@/lib/site-menu"
import {
  Badge,
  CtaBand,
  FaqList,
  GradientText,
  HeroBackdrop,
  PrimaryButton,
  SectionHeading,
} from "@/components/page-sections"
import { FeaturedServices, IndustriesSection, ServicesCatalog } from "@/components/services-catalog"

export const metadata: Metadata = {
  title: " Ecommerce, Amazon & Digital Marketing Services | Wings2Sky",
  description:
    "Explore our comprehensive e-commerce and digital marketing services. From marketplace optimization to business growth strategies.",
  keywords: "services, e-commerce, digital marketing, marketplace management, business solutions,Digital marketing services for businesses,SEO optimization services,Performance-driven marketing solutions,Full-stack web development services,E-commerce platform setup",
}

const whyChooseUs = [
  "Experienced team with multi‑industry exposure",
  "Transparent processes and reporting",
  "Customized strategies for India and global markets",
  "Performance‑focused execution",
  "Long‑term partnership mindset",
]

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long‑term strategy. Initial improvements are usually visible within 3–4 months, with stronger growth over 6–9 months.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients across India and global markets with region‑specific strategies.",
  },
  {
    question: "Do you provide reports?",
    answer: "Yes. Monthly performance reports are included with all services.",
  },
  {
    question: "Is there a minimum contract period?",
    answer: "Project and retainer models are available based on service type.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-20">
        <HeroBackdrop />
        <div className="relative mx-auto max-w-4xl text-center">
          <Badge>Our Services</Badge>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
            Grow Your Business Online with Result‑Driven <GradientText>Digital Marketing Services</GradientText>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Wings2Sky is a full‑service digital marketing agency helping businesses in India and across global markets
            build visibility, generate qualified leads, and scale revenue. Whether you are a startup, a growing brand,
            or an established business, our strategies are data‑driven, transparent, and focused on measurable outcomes.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/contact">Book a Free Strategy Consultation</PrimaryButton>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-2.5">
            {serviceCategories.map((category) => {
              const Icon = category.icon

              return (
                <li key={category.slug}>
                  <Link
                    href={`#${category.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-medium text-foreground backdrop-blur transition hover:border-primary/60 hover:text-primary"
                  >
                    <Icon size={16} className="text-primary" />
                    {category.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Core e-commerce services */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="E-Commerce Growth"
            title="Our core marketplace services"
            description="End-to-end support for sellers on Amazon, Flipkart, Myntra and Meesho."
          />
          <div className="mt-12">
            <FeaturedServices />
          </div>
        </div>
      </section>

      {/* Full catalogue */}
      <section className="bg-background px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Service Catalogue"
            title={
              <>
                Every channel your business needs, <GradientText>under one roof</GradientText>
              </>
            }
            description="Pick a single service or combine several into one plan. Each one is run by specialists and reported on monthly."
          />
          <div className="mt-16">
            <ServicesCatalog />
          </div>
        </div>
      </section>

      <div className="border-t border-border">
        <IndustriesSection />
      </div>

      {/* Why choose us */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading badge="Why Wings2Sky" title="Why Choose Wings2Sky" />
          <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-background p-5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-background px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading badge="FAQs" title="Frequently Asked Questions" />
          <div className="mt-12">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to grow your business online with a trusted digital partner?"
        description="Book your free consultation with Wings2Sky today."
      />

      <Footer />
    </main>
  )
}
