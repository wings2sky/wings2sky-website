import type { Metadata } from "next"
import Image from "next/image"
import { BarChart3, Bot, FileText, Share2, ShoppingCart, Smartphone, TrendingUp } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProjectCard, { type Project } from "@/components/project-card"
import { Badge, CtaBand, GradientText, HeroBackdrop, PrimaryButton, SectionHeading } from "@/components/page-sections"
import salesBefore from "../../public/sales-before.jpeg"
import salesAfter from "../../public/sales-after.jpeg"

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration and inventory management.",
    icon: ShoppingCart,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Analytics dashboard for tracking business metrics and performance indicators.",
    icon: BarChart3,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"],
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Cross-platform mobile application for task management and collaboration.",
    icon: Smartphone,
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    id: 4,
    title: "AI Chat Application",
    description: "Real-time chat application powered by artificial intelligence.",
    icon: Bot,
    tags: ["Next.js", "OpenAI", "WebSocket", "Tailwind"],
  },
  {
    id: 5,
    title: "Content Management System",
    description: "Headless CMS for managing digital content across multiple platforms.",
    icon: FileText,
    tags: ["Next.js", "Strapi", "GraphQL"],
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description: "Tool for tracking and analyzing social media performance metrics.",
    icon: Share2,
    tags: ["React", "Python", "PostgreSQL", "Chart.js"],
  },
]

// Figures as shown in the client's Flipkart Seller Hub screenshots (values in ₹ lakh, units in thousands)
const caseStudyMetrics = [
  { label: "Gross sales", before: 19.93, after: 40.83, format: (value: number) => `₹${value}L` },
  { label: "Units sold", before: 3.06, after: 7.79, format: (value: number) => `${value}K` },
  { label: "Sales after cancellations", before: 15.21, after: 29.74, format: (value: number) => `₹${value}L` },
  { label: "Net sales", before: 13.27, after: 26.48, format: (value: number) => `₹${value}L` },
]

const caseStudyScreens = [
  { stage: "Before", period: "March 2025", image: salesBefore },
  { stage: "After", period: "August 2025", image: salesAfter },
]

const growthPercent = (before: number, after: number) => `+${(((after - before) / before) * 100).toFixed(1)}%`

export const metadata: Metadata = {
  title: "Projects & Case Studies | Ecommerce & Marketplace Growth",
  description:
    "Explore Wings2Sky projects showcasing ecommerce growth, Amazon services, website development, and digital marketing work delivered with measurable results.",
  keywords: "projects, portfolio, case studies, web development, e-commerce solutions,Digital marketing campaign results",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-20">
        <HeroBackdrop />
        <div className="relative mx-auto max-w-4xl text-center">
          <Badge>Projects & Case Studies</Badge>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
            Our <GradientText>Projects</GradientText>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Explore our portfolio of successful projects and case studies
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/contact">Start Your Project</PrimaryButton>
          </div>
        </div>
      </section>

      {/* Featured case study */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
          <div className="min-w-0">
            <Badge icon={TrendingUp}>Featured Case Study</Badge>
            <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Doubling a Flipkart seller&apos;s <GradientText>monthly sales</GradientText>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              A marketplace seller account we manage on Flipkart. Every figure below is taken from the seller&apos;s own
              Flipkart Seller Hub dashboard, comparing March 2025 with August 2025.
            </p>

            <dl className="mt-8 divide-y divide-border rounded-2xl border border-border bg-background">
              {caseStudyMetrics.map((metric) => (
                <div key={metric.label} className="flex flex-col gap-1.5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <dt className="text-sm font-medium text-muted-foreground">{metric.label}</dt>
                  <dd className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-sm text-muted-foreground line-through decoration-muted-foreground/40">
                      {metric.format(metric.before)}
                    </span>
                    <span className="text-lg font-bold text-foreground">{metric.format(metric.after)}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-bold text-green-600 dark:text-green-400">
                      <TrendingUp size={12} />
                      {growthPercent(metric.before, metric.after)}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="min-w-0 space-y-4">
            {caseStudyScreens.map((screen) => {
              const isAfter = screen.stage === "After"

              return (
                <figure
                  key={screen.stage}
                  className={`rounded-3xl border bg-background p-4 ${
                    isAfter ? "border-primary/50 shadow-2xl shadow-primary/15" : "border-border shadow-sm"
                  }`}
                >
                  <figcaption className="flex items-center justify-between gap-3 px-1">
                    <span className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                          isAfter ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {screen.stage}
                      </span>
                      <span className="text-sm font-medium text-foreground">{screen.period}</span>
                    </span>
                    <span className="text-xs text-muted-foreground">Flipkart Seller Hub</span>
                  </figcaption>
                  <a
                    href={screen.image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open full-size screenshot"
                    className="mt-3 block overflow-hidden rounded-2xl border border-border bg-white transition hover:border-primary/50"
                  >
                    <Image
                      src={screen.image}
                      alt={`Flipkart Seller Hub sales dashboard for ${screen.period}`}
                      className="h-auto w-full"
                      sizes="(max-width: 1024px) 100vw, 640px"
                    />
                  </a>
                </figure>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-background px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Portfolio"
            title={
              <>
                More of <GradientText>our work</GradientText>
              </>
            }
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a project in mind?"
        description="Tell us what you want to build or grow, and a Wings2Sky expert will suggest the right plan."
      />

      <Footer />
    </main>
  )
}
