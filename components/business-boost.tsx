import Link from "next/link"
import Image from "next/image"
import boostPhoto from "../public/business-boost.jpg"
import { ArrowRight, BarChart3, LineChart, Megaphone, Search, TrendingUp, UserCheck } from "lucide-react"

const stats = [
  { icon: BarChart3, value: "1000", label: "Active Sellers" },
  { icon: TrendingUp, value: "30.34%", label: "Growth Rate" },
]

// The four things the paragraph promises, shown as a simple flow beside the photo
const boostSteps = [
  {
    icon: Search,
    title: "Optimize listings",
  },
  {
    icon: TrendingUp,
    title: "Increase visibility",
  },
  {
    icon: Megaphone,
    title: "Run compelling campaigns",
  },
  {
    icon: UserCheck,
    title: "Build loyal customers",
  },
]

export default function BusinessBoost() {
  return (
    <section className="relative overflow-hidden bg-background px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="min-w-0">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
              Seller Account Management
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Does Your Online Business Need{" "}
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">A Boost?</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Boost your business with our E-commerce Seller Account Management Services! We don&apos;t just manage your
              store—we enhance it to attract high-quality leads. Our team uses advanced analytics and innovative
              strategies to optimize listings, increase visibility, and create compelling campaigns that turn visitors
              into loyal customers. Partner with us to drive more leads and focus on growing your success!
            </p>

            <dl className="mt-7 flex flex-wrap gap-3">
              {stats.map((stat) => {
                const Icon = stat.icon

                return (
                  <div key={stat.label} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Icon size={22} />
                    </span>
                    <div>
                      <dd className="text-xl font-bold leading-tight text-foreground">{stat.value}</dd>
                      <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                    </div>
                  </div>
                )
              })}
            </dl>

            <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold whitespace-nowrap text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-primary/90"
              >
                Boost My Store
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services/ecommerce-management"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 font-semibold whitespace-nowrap text-foreground transition hover:border-primary/60 hover:text-primary"
              >
                How Account Management Works
              </Link>
            </div>
          </div>

          {/* Right Side - photo with the "how we boost your store" steps */}
          <div className="relative min-w-0 lg:pb-10 lg:pl-10">
            <div className="relative ml-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/15 lg:max-w-none lg:w-[78%]">
              <Image
                src={boostPhoto}
                alt="Happy online seller"
                fill
                placeholder="blur"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="relative mt-4 rounded-3xl border border-border bg-card/90 p-5 sm:p-6 shadow-2xl shadow-primary/10 backdrop-blur lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:w-[19rem]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <LineChart size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">How we boost your store</p>
                  <p className="text-xs text-muted-foreground">Analytics-led, step by step</p>
                </div>
              </div>

              <ol className="mt-5">
                {boostSteps.map((step, index) => {
                  const Icon = step.icon
                  const isLast = index === boostSteps.length - 1

                  return (
                    <li key={step.title} className="relative flex items-center gap-3 pb-3.5 last:pb-0">
                      {/* Connector between steps */}
                      {!isLast && <span aria-hidden className="absolute left-4 top-8 bottom-0 w-px bg-border" />}
                      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange-500 text-white shadow-md shadow-primary/30">
                        <Icon size={15} />
                      </span>
                      <p className="text-sm font-semibold text-foreground">{step.title}</p>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
