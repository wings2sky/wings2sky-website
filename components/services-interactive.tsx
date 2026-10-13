import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calculator, Store } from "lucide-react"

interface Marketplace {
  name: string
  category: "Marketplace" | "Fashion" | "Beauty" | "Quick Commerce"
  description: string
  /** Logo file in /public; platforms without one show a brand-coloured initial */
  logo?: string
  /** Full-bleed square app icon in /public, shown edge to edge in the tile */
  appIcon?: string
  tile?: { background: string; color: string }
  calculatorHref?: string
}

const marketplaces: Marketplace[] = [
  {
    name: "Amazon",
    category: "Marketplace",
    description: "Seller Central setup, optimised listings, A+ content, Sponsored Ads and FBA support.",
    logo: "/amazon.svg",
    calculatorHref: "/amazon-fba",
  },
  {
    name: "Flipkart",
    category: "Marketplace",
    description: "Seller Hub onboarding, catalogue and listing quality, Flipkart Ads and sale-event planning.",
    logo: "/flipkart-icon.svg",
    calculatorHref: "/flipkart-calculator",
  },
  {
    name: "Meesho",
    category: "Marketplace",
    description: "Supplier onboarding, catalogue uploads, pricing and order management for value-focused shoppers.",
    logo: "/meesho.svg",
  },
  {
    name: "Myntra",
    category: "Fashion",
    description: "Brand onboarding, fashion cataloguing, product photoshoots and visibility campaigns.",
    logo: "/myntra.svg",
    calculatorHref: "/myntra-calculator",
  },
  {
    name: "Ajio",
    category: "Fashion",
    description: "Brand onboarding, catalogue creation and merchandising support for fashion and lifestyle labels.",
    tile: { background: "#2C4152", color: "#FFFFFF" },
  },
  {
    name: "Nykaa",
    category: "Beauty",
    description: "Brand onboarding, listings and content for beauty, personal care and fashion sellers.",
    appIcon: "/nykaa-icon.png",
    calculatorHref: "/nykaa-calculator",
  },
  {
    name: "Blinkit",
    category: "Quick Commerce",
    description: "Seller onboarding, catalogue setup, stock availability and in-app ads for quick-commerce orders.",
    appIcon: "/blinkit.svg",
    calculatorHref: "/blinkit-calculator",
  },
  {
    name: "Zepto",
    category: "Quick Commerce",
    description: "Brand listing, catalogue setup, pricing and visibility for fast-delivery shoppers.",
    appIcon: "/zepto-icon.png",
  },
  {
    name: "Swiggy Instamart",
    category: "Quick Commerce",
    description: "Onboarding, catalogue and in-app visibility for brands selling through Instamart.",
    // Instamart has no standalone mark we can source, so it uses the parent Swiggy icon
    appIcon: "/swiggy-icon.png",
  },
]

export default function ServicesInteractive() {
  return (
    <section className="bg-background px-4 sm:px-6 lg:px-8 py-14 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
            <Store size={13} />
            Marketplace Solutions
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Sell on Every Major Marketplace and{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Quick-Commerce App
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            One team to launch, manage and grow your seller accounts, from the big marketplaces to fashion, beauty and
            10-minute delivery apps.
          </p>
        </div>

        {/* Platforms */}
        <div className="scroll-row mt-8 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {marketplaces.map((marketplace) => (
            <article
              key={marketplace.name}
              className="group flex w-[84%] items-start gap-3.5 rounded-2xl border border-border bg-card p-4 transition sm:w-auto hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              {marketplace.appIcon ? (
                <Image
                  src={marketplace.appIcon}
                  alt={`${marketplace.name} logo`}
                  width={44}
                  height={44}
                  className="h-11 w-11 shrink-0 rounded-xl border border-border object-cover"
                />
              ) : marketplace.logo ? (
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-white">
                  <Image
                    src={marketplace.logo}
                    alt={`${marketplace.name} logo`}
                    width={26}
                    height={26}
                    className={`h-[26px] w-[26px] object-contain ${marketplace.name === "Meesho" ? "scale-150" : ""}`}
                  />
                </span>
              ) : (
                <span
                  aria-hidden
                  style={{ backgroundColor: marketplace.tile?.background, color: marketplace.tile?.color }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-extrabold"
                >
                  {marketplace.name.replace("Swiggy ", "").charAt(0)}
                </span>
              )}

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground transition group-hover:text-primary">
                    Sell on {marketplace.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {marketplace.category}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground leading-snug">{marketplace.description}</p>

                <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold">
                  <Link href="/contact" className="inline-flex items-center gap-1 text-primary">
                    Start selling
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  {marketplace.calculatorHref && (
                    <Link
                      href={marketplace.calculatorHref}
                      className="inline-flex items-center gap-1 text-muted-foreground transition hover:text-primary"
                    >
                      <Calculator size={14} />
                      Fee calculator
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <p className="mt-7 text-center text-sm text-muted-foreground">
          Selling on a platform that is not listed here?{" "}
          <Link
            href="/services/ecommerce-management"
            className="group inline-flex items-center gap-1 font-semibold text-primary"
          >
            See how we manage seller accounts
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </p>
      </div>
    </section>
  )
}
