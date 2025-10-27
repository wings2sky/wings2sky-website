import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import ContactMap from "@/components/contact-map"

export const metadata: Metadata = {
  title: "Contact Us - Wings2Sky",
  description:
    "Get in touch with Wings2Sky. Contact us for e-commerce solutions, digital marketing, and business growth strategies.",
  keywords: "contact, support, e-commerce help, digital marketing consultation",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as
              possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactMap />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
