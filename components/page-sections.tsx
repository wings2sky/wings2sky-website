import Link from "next/link"
import { ArrowRight, Check, ChevronDown, ChevronRight, Phone, type LucideIcon } from "lucide-react"

// Shared building blocks for the services and industries pages

/** Soft brand glow and faint grid used behind page heroes */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-[-30%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
    </div>
  )
}

export function Badge({ icon: Icon, children }: { icon?: LucideIcon; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary">
      {Icon && <Icon size={14} />}
      {children}
    </span>
  )
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}: {
  badge?: string
  title: React.ReactNode
  description?: string
  align?: "center" | "left"
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {badge && <Badge>{badge}</Badge>}
      <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight ${badge ? "mt-5" : ""}`}>
        {title}
      </h2>
      {description && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  )
}

export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">{children}</span>
  )
}

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold whitespace-nowrap text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-primary/90"
    >
      {children}
      <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

export function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 font-semibold whitespace-nowrap text-foreground backdrop-blur transition hover:border-primary/60 hover:text-primary"
    >
      {children}
    </Link>
  )
}

interface Crumb {
  label: string
  href?: string
}

/** Two-column hero for a single service or industry */
export function DetailHero({
  breadcrumbs,
  badge,
  badgeIcon,
  title,
  intro,
  secondaryCta,
  cardTitle,
  cardItems,
}: {
  breadcrumbs: Crumb[]
  badge: string
  badgeIcon?: LucideIcon
  title: React.ReactNode
  intro: string
  secondaryCta?: { label: string; href: string }
  cardTitle: string
  cardItems: string[]
}) {
  return (
    <section className="relative overflow-hidden bg-background px-4 sm:px-6 lg:px-8 pt-6 pb-16 md:pt-10 md:pb-24">
      <HeroBackdrop />

      <div className="relative max-w-7xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight size={14} />}
              {crumb.href ? (
                <Link href={crumb.href} className="transition hover:text-primary">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-foreground">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
            <Badge icon={badgeIcon}>{badge}</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-foreground leading-[1.1]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-4">
              <PrimaryButton href="/contact">Book a Free Consultation</PrimaryButton>
              {secondaryCta && <SecondaryButton href={secondaryCta.href}>{secondaryCta.label}</SecondaryButton>}
            </div>
          </div>

          <aside className="rounded-3xl border border-border bg-card/80 p-6 sm:p-8 shadow-2xl shadow-primary/10 backdrop-blur motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-1000">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{cardTitle}</p>
            <ul className="mt-5 space-y-4">
              {cardItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

/** Card that links to a service or industry page */
export function LinkCard({
  href,
  title,
  description,
  icon: Icon,
}: {
  href: string
  title: string
  description?: string
  icon?: LucideIcon
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-border bg-background p-5 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {Icon && (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Icon size={20} />
            </span>
          )}
          <h3 className="font-semibold text-foreground transition group-hover:text-primary">{title}</h3>
        </div>
        <ArrowRight
          size={18}
          className="mt-0.5 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary"
        />
      </div>
      {description && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>}
    </Link>
  )
}

export function FaqList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-2xl border border-border bg-background px-5 py-4 transition open:border-primary/40 open:shadow-md"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
            {faq.question}
            <ChevronDown size={18} className="shrink-0 text-primary transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-3 text-muted-foreground leading-relaxed">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}

export function ProcessSteps({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title} className="relative rounded-2xl border border-border bg-background p-6">
          <span className="text-4xl font-bold tracking-tight text-primary/25">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
        </li>
      ))}
    </ol>
  )
}

export function CtaBand({
  title = "Ready to grow your business online?",
  description = "Tell us about your goals and a Wings2Sky expert will suggest the right plan for your business.",
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="bg-background px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-orange-500 px-6 py-12 sm:px-12 sm:py-16 text-center text-white shadow-2xl shadow-primary/20">
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">{title}</h2>
          <p className="mt-4 text-lg text-white/90 leading-relaxed">{description}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold whitespace-nowrap text-primary shadow-lg transition hover:bg-white/90"
            >
              Book a Free Consultation
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+919289088384"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 font-semibold whitespace-nowrap text-white transition hover:bg-white/10"
            >
              <Phone size={18} />
              +91-92890 88384
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
