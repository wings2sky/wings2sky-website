import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { featuredServices, industryLinks, serviceCategories } from "@/lib/site-menu"
import { categoryContent, getServiceSummary } from "@/lib/services-catalog"
import { industryContent } from "@/lib/industries-data"
import { GradientText, LinkCard, SectionHeading } from "@/components/page-sections"

/** Compact overview of the six service categories, used on the home page */
export function ServiceCategoriesOverview() {
  return (
    <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-14 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
            Full-Service Digital Agency
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
            One Team for Every <GradientText>Growth Channel</GradientText>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Beyond marketplaces, Wings2Sky covers the full digital stack: search, paid media, social, web, customer
            retention and AI.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => {
            const Icon = category.icon

            return (
              <article
                key={category.slug}
                className="rounded-2xl border border-border bg-background p-4 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold leading-tight text-foreground">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">{category.tagline}</p>
                  </div>
                  <Link
                    href={`/services#${category.slug}`}
                    aria-label={`Explore ${category.name}`}
                    className="group inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-primary"
                  >
                    Explore
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {category.services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={service.href}
                        className="inline-block rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/80 transition hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/** Full catalogue grouped by category, used on the /services page */
export function ServicesCatalog() {
  return (
    <div className="space-y-20">
      {serviceCategories.map((category) => {
        const Icon = category.icon

        return (
          <section key={category.slug} id={category.slug} className="scroll-mt-28">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_2fr] lg:gap-12">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon size={24} />
                </span>
                <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{category.name}</h2>
                <p className="mt-1 text-sm font-medium text-primary">{category.tagline}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{categoryContent[category.slug]?.description}</p>
                {category.hubHref && (
                  <Link
                    href={category.hubHref}
                    className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    {category.name} overview
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {category.services.map((service) => (
                  <LinkCard
                    key={service.slug}
                    href={service.href}
                    title={service.label}
                    description={getServiceSummary(service.slug)}
                  />
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}

/** Wings2Sky's core e-commerce services */
export function FeaturedServices() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {featuredServices.map((service) => (
        <LinkCard key={service.href} href={service.href} title={service.label} description={service.description} />
      ))}
    </div>
  )
}

export function IndustriesGrid({ exclude }: { exclude?: string }) {
  const items = industryLinks.filter((industry) => industry.slug !== exclude)

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((industry) => (
        <LinkCard
          key={industry.slug}
          href={industry.href}
          title={industry.name}
          description={industryContent[industry.slug]?.summary}
          icon={industry.icon}
        />
      ))}
      <LinkCard
        href="/contact"
        title="Don't see your industry?"
        description="Tell us about your business and we will suggest the right approach."
        icon={MessageCircle}
      />
    </div>
  )
}

/** Industries block with heading, used on the home and services pages */
export function IndustriesSection() {
  return (
    <section className="bg-background px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Industries We Serve"
          title={
            <>
              Marketing That Fits <GradientText>Your Industry</GradientText>
            </>
          }
          description="Every industry buys differently. We tailor channels, messaging and measurement to how your customers actually decide."
        />
        <div className="mt-14">
          <IndustriesGrid />
        </div>
      </div>
    </section>
  )
}
