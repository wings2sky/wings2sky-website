import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

const plans = [
  {
    name: "Silver",
    price: "₹9,999/month",
    tagline: "Perfect for new sellers getting started on Amazon & Flipkart",
    features: [
      "4 POA File",
      "Negative Feedback Remove",
      "Buyer Message Reply",
      "Upto 10 A+ Listings",
      "20 Inactive/Blocked/Search Suppressed Listings",
      "Advertisement/Promotion",
      "Daily 10 Buyer Feedback For Rating",
    ],
    highlight: false,
  },
  {
    name: "Gold",
    price: "₹24,999/quarter",
    tagline: "Ideal for growing eCommerce brands looking to scale",
    features: [
      "Brand Registry/Brand Approval",
      "Infringement File",
      "Video Uploading",
      "Upto 100-150 A+ Listings",
      "Brand Protection",
      "Upto 5 POA File",
      "Unlimited Listings",
      "Sale Boost",
    ],
    highlight: true,
  },
  {
    name: "Platinum",
    price: "₹79,000/year",
    tagline: "Complete support for established brands with premium growth tools",
    features: [
      "Easy Ship Prime Enrol",
      "Brand Registry/Brand Approval",
      "Infringement File",
      "Video Uploading",
      "Upto 100-150 A+ Listings",
      "Brand Protection",
      "Upto 5 POA File",
      "Unlimited Listings",
      "Sale Boost",
      "FBA Registration",
    ],
    highlight: false,
  },
]

export default function Plans() {
  return (
    <section className="bg-background px-4 sm:px-6 lg:px-8 py-14 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
            Plans & Pricing
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Our Plans &{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Choose the perfect Wings2Sky plan to scale your eCommerce business
          </p>
        </div>

        {/* Plans Grid */}
        <div className="scroll-row mt-6 pt-4 md:mx-0 md:mt-10 md:grid md:grid-cols-3 md:items-stretch md:gap-4 md:overflow-visible md:px-0 md:pb-0">
          {plans.map((plan) => {
            const [amount, period] = plan.price.split("/")

            return (
              <article
                key={plan.name}
                className={`relative flex w-[85%] flex-col rounded-2xl border bg-card p-5 transition md:w-auto hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${
                  plan.highlight ? "border-primary shadow-lg shadow-primary/15" : "border-border"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-orange-500 px-3 py-1 text-xs font-semibold whitespace-nowrap text-white shadow-md">
                    Most Popular
                  </span>
                )}

                {/* Title & Price */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground leading-snug">{plan.tagline}</p>
                  </div>
                </div>
                <p className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight text-primary">{amount}</span>
                  <span className="text-sm text-muted-foreground">/ {period}</span>
                </p>

                {/* Features */}
                <ul className="mt-4 mb-5 flex-grow space-y-1.5 border-t border-border pt-4 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-foreground/90">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90"
                      : "border border-border bg-background text-foreground hover:border-primary/60 hover:text-primary"
                  }`}
                >
                  Get Started
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            )
          })}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Need something different?{" "}
          <Link href="/contact" className="font-semibold text-primary hover:underline underline-offset-4">
            Ask us for a custom plan
          </Link>
        </p>
      </div>
    </section>
  )
}
