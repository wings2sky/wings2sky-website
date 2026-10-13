import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Camera,
  Check,
  ChevronDown,
  Code,
  LayoutGrid,
  Search,
  Share2,
  ShoppingCart,
  Target,
  type LucideIcon,
} from "lucide-react"

interface ServiceItem {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    id: "digital-marketing",
    icon: BarChart3,
    title: "Digital Marketing Services",
    description: "Strategies built to deliver consistent growth across all digital channels.",
  },
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Rank higher on Google with ethical, long‑term SEO practices.",
  },
  {
    id: "paid-ads",
    icon: Target,
    title: "Search Engine Marketing (Paid Ads)",
    description: "ROI‑focused paid advertising for immediate traffic and sales.",
  },
  {
    id: "website-development",
    icon: Code,
    title: "Website Development Services",
    description: "Fast, responsive, SEO‑friendly, and conversion‑focused websites.",
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build trust, engage audiences, and convert followers into customers.",
  },
  {
    id: "ecommerce-photoshoot",
    icon: Camera,
    title: "E‑Commerce Photoshoot Services",
    description: "High‑quality product images that drive conversions.",
  },
  {
    id: "ecommerce-management",
    icon: ShoppingCart,
    title: "E‑Commerce Account Management",
    description: "Complete marketplace account management for scalable growth.",
  },
]

const whyChooseUs = [
  "Experienced team with multi‑industry exposure",
  "Transparent processes and reporting",
  "Customized strategies for India and global markets",
  "Performance‑focused execution",
  "Long‑term partnership mindset",
]

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long‑term strategy. Initial improvements are usually visible within 3–4 months, with stronger growth over 6–9 months.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with clients across India and global markets with region‑specific strategies.",
  },
  {
    q: "Do you provide reports?",
    a: "Yes. Monthly performance reports are included with all services.",
  },
  {
    q: "Is there a minimum contract period?",
    a: "Project and retainer models are available based on service type.",
  },
]

const cardClass =
  "group flex items-start gap-3.5 rounded-2xl border border-border bg-card p-4 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"

export default function ServicesSection() {
  return (
    <section className="bg-background px-4 sm:px-6 lg:px-8 py-14 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
            Our Services
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Grow Your Business Online with Result‑Driven{" "}
            <span className="sm:whitespace-nowrap bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Digital Marketing Services
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
            Wings2Sky is a full‑service digital marketing agency helping businesses in India and across global markets
            build visibility, generate qualified leads, and scale revenue. Whether you are a startup, a growing brand,
            or an established business, our strategies are data‑driven, transparent, and focused on measurable outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Link key={service.id} href={`/services/${service.id}`} className={cardClass}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold leading-snug text-foreground transition group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-snug">{service.description}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View details
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}

          <Link
            href="/services"
            className="group flex items-start gap-3.5 rounded-2xl bg-gradient-to-br from-primary to-orange-500 p-4 text-white shadow-lg shadow-primary/20 transition hover:shadow-xl"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
              <LayoutGrid size={20} />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold leading-snug">All Services</h3>
              <p className="mt-1 text-sm text-white/90 leading-snug">
                SEO, paid media, social, web, retention and AI in one catalogue.
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold">
                Browse the catalogue
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>

        {/* Why Choose Us + FAQ */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h3 className="text-xl font-bold text-foreground">Why Choose Wings2Sky</h3>
            <ul className="mt-4 space-y-2">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-2.5 text-sm">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground">Frequently Asked Questions</h3>
            <div className="mt-4 space-y-2">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-border bg-card px-4 py-2.5 text-sm transition open:border-primary/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <ChevronDown size={16} className="shrink-0 text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-lg font-semibold text-foreground">
              Ready to grow your business online with a trusted digital partner?
            </p>
            <p className="text-sm text-muted-foreground">Book your free consultation with Wings2Sky today.</p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold whitespace-nowrap text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-primary/90"
          >
            Book Your Free Consultation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
