"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

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
      "20 Inactive/Blocked/Search Supressed Listings",
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Plans & Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect Wings2Sky plan to scale your eCommerce business
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`p-8 rounded-xl border bg-card border-border relative group shadow-sm hover:shadow-md transition flex flex-col ${
                plan.highlight ? "border-[#FF7F00]/60" : "border-border"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF7F00] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  Most Popular
                </span>
              )}

              {/* Title & Price */}
              <h3 className="text-2xl font-semibold text-foreground mb-1 mt-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground mb-4">{plan.tagline}</p>
              <p className="text-3xl font-bold text-[#FF7F00] mb-6">{plan.price}</p>

              {/* Features */}
              <ul className="space-y-3 text-left mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="text-[#FF7F00] shrink-0 mt-1" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button - Now uniform height and alignment */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                className={`inline-flex items-center justify-center w-full py-3 font-semibold rounded-lg transition min-h-[48px] ${
                  plan.highlight
                    ? "bg-[#FF7F00] text-white hover:bg-[#e46f00]"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}