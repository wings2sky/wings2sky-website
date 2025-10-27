"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Why Choose Us?",
    answer:
      "We have 10+ years of experience in e-commerce management with a 95% success rate. Our team of experts specializes in marketplace optimization, account management, and sales growth strategies tailored to your business needs.",
  },
  {
    question: "Is there any monthly, quarterly or Yearly plan?",
    answer:
      "Yes, we offer flexible pricing plans. You can choose monthly, quarterly, or yearly subscriptions based on your business requirements. Each plan includes different levels of support and services.",
  },
  {
    question: "How to book an appointment?",
    answer:
      "You can book an appointment through our website contact form, call us directly at +91-92890 88384, or message us on WhatsApp. Our team will get back to you within 24 hours to confirm your appointment.",
  },
  {
    question: "Can you provide digital services?",
    answer:
      "Yes, we provide comprehensive digital services including digital marketing, social media management, content creation, SEO optimization, and paid advertising campaigns for your e-commerce business.",
  },
  {
    question: "What are the promotions going on?",
    answer:
      "We regularly offer special promotions and discounts for new clients. Contact us to learn about current offers, seasonal discounts, and package deals that can help you save on our services.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-card/80 transition text-left"
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-primary transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
