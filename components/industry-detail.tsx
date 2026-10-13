import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Industry } from "@/lib/industries-data"
import { getCatalogService, sharedServiceFaqs, type CatalogService } from "@/lib/services-catalog"
import { CtaBand, DetailHero, FaqList, GradientText, LinkCard, SectionHeading } from "@/components/page-sections"
import { IndustriesGrid } from "@/components/services-catalog"

export default function IndustryDetail({ industry }: { industry: Industry }) {
  const recommendedServices = industry.services
    .map((slug) => getCatalogService(slug))
    .filter((service): service is CatalogService => Boolean(service))

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <DetailHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
        badge="Industries"
        badgeIcon={industry.icon}
        title={
          <>
            Digital Marketing for <GradientText>{industry.name}</GradientText>
          </>
        }
        intro={industry.intro}
        secondaryCta={{ label: "See How We Help", href: "#approach" }}
        cardTitle="Common growth challenges"
        cardItems={industry.challenges}
      />

      {/* Approach */}
      <section id="approach" className="scroll-mt-24 border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="How We Help"
            title={`Our approach for ${industry.name}`}
            description={industry.summary}
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {industry.approach.map((item, index) => (
              <article
                key={item.title}
                className="flex gap-5 rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-sm font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended services */}
      <section className="bg-background px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Recommended Services"
            title={`Services that work for ${industry.name}`}
            description="A starting point, not a fixed package. We adjust the mix to your goals and budget."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedServices.map((service) => (
              <LinkCard
                key={service.slug}
                href={`/services/${service.slug}`}
                title={service.name}
                description={service.summary}
                icon={service.category.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading badge="FAQs" title="Frequently asked questions" />
          <div className="mt-12">
            <FaqList faqs={[...industry.faqs, ...sharedServiceFaqs]} />
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="bg-background px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Other industries we serve" />
          <div className="mt-10">
            <IndustriesGrid exclude={industry.slug} />
          </div>
        </div>
      </section>

      <CtaBand description="Book a free consultation and we will review where you are today and what it would take to grow." />

      <Footer />
    </main>
  )
}
