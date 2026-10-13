import { Briefcase, Eye, Shield, Package, Zap, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Briefcase,
    title: "Activate Seller Central",
    description:
      "Our experts have a 95% success rate in helping thousands of merchants carve their niche with store handling and setup lifecycle.",
  },
  {
    icon: Eye,
    title: "Display Your Catalog",
    description:
      "With a 90% success rate, our specialists excel in marketplace guidelines, creating engaging listings that attract buyers and boost sales.",
  },
  {
    icon: Shield,
    title: "Brand Integrity Shield",
    description:
      "We manage your seller account with a 95% success rate, covering brand registry, optimization, ads, and orders.",
  },
  {
    icon: Package,
    title: "Ecommerce Ready Package",
    description:
      "Our expert achieves a 95% success rate in packaging, labeling, compliance, and shipment for various destinations.",
  },
  {
    icon: Zap,
    title: "Ecommerce Ad Solutions",
    description:
      "Our advertising services improve efficiency by 90%, optimizing ads for better performance, higher rankings, and increased sales.",
  },
  {
    icon: TrendingUp,
    title: "Ecommerce SEO",
    description:
      "Our experts use top tools to identify keywords and develop competitive listings, boosting search visibility by up to 85%.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-background px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
            Because Your Great Product Deserves the Spotlight
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Why You Need Our{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Ecommerce Services
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Let Our Marketplace Experts Put Your Product at the Top of E-Commerce Searches
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <article
                key={reason.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Accent line that grows on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-6 top-0 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary to-orange-400 transition-transform duration-300 group-hover:scale-x-100"
                />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
