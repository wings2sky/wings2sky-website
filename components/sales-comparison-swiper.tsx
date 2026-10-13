import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import { ArrowRight, MousePointerClick, ShoppingCart, Smartphone, TrendingUp, Users, type LucideIcon } from "lucide-react"
import salesBefore from "../public/sales-before.jpeg"
import salesAfter from "../public/sales-after.jpeg"

interface DashboardSnapshot {
  stage: "Before" | "After"
  period: string
  image: StaticImageData
  grossSales: string
  units: string
}

// Figures as shown in the client's Flipkart Seller Hub screenshots
const SNAPSHOTS: DashboardSnapshot[] = [
  { stage: "Before", period: "March 2025", image: salesBefore, grossSales: "₹19.93L", units: "3.06K units sold" },
  { stage: "After", period: "August 2025", image: salesAfter, grossSales: "₹40.83L", units: "7.79K units sold" },
]

const GROSS_SALES = { previous: 1993287, current: 4083302 }

interface ResultMetric {
  title: string
  description: string
  icon: LucideIcon
  current: number
  previous: number
  timeframe: { current: string; previous: string }
  format: (value: number) => string
}

const formatCount = (value: number) => value.toLocaleString("en-IN")
const formatPercent = (value: number) => `${value}%`
const formatLakh = (value: number) => `₹${(value / 100000).toFixed(1)}L`

const RESULT_METRICS: ResultMetric[] = [
  {
    title: "Client Acquisition Growth",
    description: "New customers won through improved marketing strategies.",
    icon: Users,
    current: 3240,
    previous: 2150,
    timeframe: { current: "Last 90 days", previous: "Previous 90 days" },
    format: formatCount,
  },
  {
    title: "Order Volume Increase",
    description: "Total orders processed with the new fulfillment system.",
    icon: ShoppingCart,
    current: 20220,
    previous: 10369,
    timeframe: { current: "Recent quarter", previous: "Previous quarter" },
    format: formatCount,
  },
  {
    title: "Conversion Rate Optimization",
    description: "Website conversion rate lifted through UX enhancements.",
    icon: MousePointerClick,
    current: 4.2,
    previous: 2.8,
    timeframe: { current: "Current period", previous: "Baseline period" },
    format: formatPercent,
  },
  {
    title: "Mobile Sales Performance",
    description: "Mobile commerce growth after a responsive redesign.",
    icon: Smartphone,
    current: 890000,
    previous: 520000,
    timeframe: { current: "Q4", previous: "Q3" },
    format: formatLakh,
  },
]

const growthPercent = (current: number, previous: number) => {
  const growth = ((current - previous) / previous) * 100
  return `+${growth.toFixed(1).replace(/\.0$/, "")}%`
}

const GrowthBadge = ({ current, previous }: { current: number; previous: number }) => (
  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-bold text-green-600 dark:text-green-400">
    <TrendingUp size={13} />
    {growthPercent(current, previous)}
  </span>
)

export default function SalesAnalyticsSwiper() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-72 w-[48rem] max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary">
            <TrendingUp size={14} />
            Sales Performance Analytics
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            How We Doubled a Flipkart Seller&apos;s{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Monthly Sales</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Real numbers from the Flipkart Seller Hub of a client account we manage. Monthly gross sales grew from{" "}
            <strong className="font-semibold text-foreground">₹19.93L</strong> to{" "}
            <strong className="font-semibold text-foreground">₹40.83L</strong>.
          </p>
        </div>

        {/* Before / After dashboards */}
        <div className="relative mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {SNAPSHOTS.map((snapshot) => {
            const isAfter = snapshot.stage === "After"

            return (
              <article
                key={snapshot.stage}
                className={`flex flex-col rounded-3xl border bg-background p-4 sm:p-5 ${
                  isAfter ? "border-primary/50 shadow-2xl shadow-primary/15" : "border-border shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between gap-3 px-1">
                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                        isAfter ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {snapshot.stage}
                    </span>
                    <span className="text-sm font-medium text-foreground">{snapshot.period}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Flipkart Seller Hub</span>
                </div>

                {/* Full dashboard screenshot - opens full size in a new tab */}
                <a
                  href={snapshot.image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open full-size screenshot"
                  className="mt-4 block overflow-hidden rounded-2xl border border-border bg-white transition hover:border-primary/50"
                >
                  <Image
                    src={snapshot.image}
                    alt={`Flipkart Seller Hub sales dashboard for ${snapshot.period}`}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 640px"
                  />
                </a>

                <div className="mt-auto flex items-end justify-between gap-4 px-1 pt-5">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Gross sales</p>
                    <p className={`mt-1 text-3xl sm:text-4xl font-bold tracking-tight ${isAfter ? "text-primary" : "text-foreground"}`}>
                      {snapshot.grossSales}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {isAfter && <GrowthBadge current={GROSS_SALES.current} previous={GROSS_SALES.previous} />}
                    <p className="text-sm text-muted-foreground">{snapshot.units}</p>
                  </div>
                </div>
              </article>
            )
          })}

          {/* Connector */}
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-card bg-primary text-primary-foreground shadow-lg lg:flex"
          >
            <ArrowRight size={22} />
          </span>
        </div>

        {/* More results */}
        <div className="mt-16">
          <h3 className="text-center text-xl sm:text-2xl font-bold text-foreground">More Results Across Our Client Work</h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {RESULT_METRICS.map((metric) => {
              const Icon = metric.icon

              return (
                <article
                  key={metric.title}
                  className="flex flex-col rounded-2xl border border-border bg-background p-5 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Icon size={20} />
                    </span>
                    <GrowthBadge current={metric.current} previous={metric.previous} />
                  </div>

                  <p className="mt-5 text-3xl font-bold tracking-tight text-foreground">{metric.format(metric.current)}</p>
                  <h4 className="mt-1 text-sm font-semibold text-foreground">{metric.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{metric.description}</p>

                  <div className="mt-auto pt-5 space-y-2.5">
                    <div>
                      <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                        <span>{metric.timeframe.previous}</span>
                        <span>{metric.format(metric.previous)}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-muted-foreground/50"
                          style={{ width: `${(metric.previous / metric.current) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="font-medium text-foreground">{metric.timeframe.current}</span>
                        <span className="font-semibold text-primary">{metric.format(metric.current)}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted">
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-primary to-orange-400" />
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
          <p className="text-lg font-medium text-foreground">Want results like these for your store?</p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold whitespace-nowrap text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-primary/90"
          >
            Book a Free Consultation
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
