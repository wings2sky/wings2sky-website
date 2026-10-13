import Link from "next/link"
import Image from "next/image"
import { Calculator, type LucideIcon } from "lucide-react"
import { Badge, GradientText, HeroBackdrop } from "@/components/page-sections"

interface CalculatorLink {
  name: string
  href: string
  /** Logo file in /public; platforms without one show a brand-coloured initial */
  logo?: string
  tile?: { background: string; color: string }
}

export const calculators: CalculatorLink[] = [
  { name: "Amazon FBA", href: "/amazon-fba", logo: "/amazon.svg" },
  { name: "Flipkart", href: "/flipkart-calculator", logo: "/flipkart-icon.svg" },
  { name: "Myntra", href: "/myntra-calculator", logo: "/myntra.svg" },
  { name: "Blinkit", href: "/blinkit-calculator", tile: { background: "#F8CB46", color: "#000000" } },
  { name: "Nykaa", href: "/nykaa-calculator", tile: { background: "#FC2779", color: "#FFFFFF" } },
]

const markSizes = {
  sm: { box: "h-7 w-7 rounded-lg text-xs", logo: 16 },
  md: { box: "h-10 w-10 rounded-xl text-base", logo: 24 },
  lg: { box: "h-16 w-16 rounded-2xl text-2xl", logo: 38 },
}

export function PlatformMark({ calculator, size }: { calculator: CalculatorLink; size: keyof typeof markSizes }) {
  const { box, logo: logoSize } = markSizes[size]

  if (calculator.logo) {
    return (
      <span className={`flex shrink-0 items-center justify-center border border-border bg-white shadow-sm ${box}`}>
        <Image src={calculator.logo} alt="" width={logoSize} height={logoSize} style={{ width: logoSize, height: logoSize }} className="object-contain" />
      </span>
    )
  }

  return (
    <span
      aria-hidden
      style={{ backgroundColor: calculator.tile?.background, color: calculator.tile?.color }}
      className={`flex shrink-0 items-center justify-center font-extrabold shadow-sm ${box}`}
    >
      {calculator.name.charAt(0)}
    </span>
  )
}

/** Shared hero for the marketplace fee calculator pages */
export default function CalculatorHero({
  href,
  title,
  highlight,
  description,
  features,
}: {
  /** Path of the current calculator, used to pick its logo and mark it in the switcher */
  href: string
  title: string
  highlight: string
  description: string
  features: { icon: LucideIcon; label: string }[]
}) {
  const current = calculators.find((calculator) => calculator.href === href)

  return (
    <section className="relative overflow-hidden bg-background px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-14 md:pb-14">
      <HeroBackdrop />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="flex flex-col items-center gap-5">
          {current && <PlatformMark calculator={current} size="lg" />}
          <Badge icon={Calculator}>Free Seller Calculator</Badge>
        </div>

        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
          {title} <GradientText>{highlight}</GradientText>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">{description}</p>

        <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <li
                key={feature.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-medium text-foreground backdrop-blur"
              >
                <Icon size={16} className="text-primary" />
                {feature.label}
              </li>
            )
          })}
        </ul>

        {/* Switch between calculators */}
        <nav aria-label="Seller calculators" className="mt-9 flex flex-wrap items-center justify-center gap-2">
          {calculators.map((calculator) => {
            const isCurrent = calculator.href === href

            return (
              <Link
                key={calculator.href}
                href={calculator.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`inline-flex items-center gap-2 rounded-full border py-1 pl-1 pr-3.5 text-sm font-medium transition ${
                  isCurrent
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background/70 text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                <PlatformMark calculator={calculator} size="sm" />
                {calculator.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </section>
  )
}
