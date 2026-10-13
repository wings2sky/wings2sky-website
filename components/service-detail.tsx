import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { categoryContent, getServiceSummary, sharedServiceFaqs, type CatalogService } from "@/lib/services-catalog"
import { CtaBand, DetailHero, FaqList, LinkCard, ProcessSteps, SectionHeading } from "@/components/page-sections"

export default function ServiceDetail({ service }: { service: CatalogService }) {
  const { category } = service
  const process = categoryContent[category.slug]?.process ?? []
  const relatedServices = category.services.filter((link) => link.slug !== service.slug)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <DetailHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: category.name, href: `/services#${category.slug}` },
          { label: service.name },
        ]}
        badge={category.name}
        badgeIcon={category.icon}
        title={service.name}
        intro={service.intro}
        secondaryCta={{ label: "See What's Included", href: "#included" }}
        cardTitle="What you can expect"
        cardItems={service.outcomes}
      />

      {/* What's included */}
      <section id="included" className="scroll-mt-24 border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="What's Included"
            title={`What our ${service.name} service covers`}
            description={service.summary}
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.includes.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-sm font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            ))}

            <Link
              href="/contact"
              className="group flex flex-col justify-between rounded-2xl bg-gradient-to-br from-primary to-orange-500 p-6 text-white shadow-lg shadow-primary/20 transition hover:-translate-y-1"
            >
              <div>
                <h3 className="text-lg font-semibold">Need something specific?</h3>
                <p className="mt-2 text-sm text-white/90 leading-relaxed">
                  Every business is different. Tell us what you need and we will shape the plan around it.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                Talk to an expert
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      {process.length > 0 && (
        <section className="bg-background px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              badge="How We Work"
              title="A clear process from day one"
              description="You always know what we are doing, why we are doing it and what comes next."
            />
            <div className="mt-14">
              <ProcessSteps steps={process} />
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading badge="FAQs" title="Frequently asked questions" />
          <div className="mt-12">
            <FaqList faqs={[...service.faqs, ...sharedServiceFaqs]} />
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="bg-background px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title={`More ${category.name} services`} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((link) => (
                <LinkCard
                  key={link.slug}
                  href={link.href}
                  title={link.label}
                  description={getServiceSummary(link.slug)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`Let's talk about ${service.name}`}
        description="Book a free consultation and we will review where you are today and what it would take to grow."
      />

      <Footer />
    </main>
  )
}
