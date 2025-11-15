import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration and inventory management.",
    image: "/ecommerce-dashboard.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Analytics dashboard for tracking business metrics and performance indicators.",
    image: "/analytics-dashboard.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"],
    link: "#",
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Cross-platform mobile application for task management and collaboration.",
    image: "/mobile-app-interface.jpg",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
  },
  {
    id: 4,
    title: "AI Chat Application",
    description: "Real-time chat application powered by artificial intelligence.",
    image: "/ai-chatbot-interface.jpg",
    tags: ["Next.js", "OpenAI", "WebSocket", "Tailwind"],
    link: "#",
  },
  {
    id: 5,
    title: "Content Management System",
    description: "Headless CMS for managing digital content across multiple platforms.",
    image: "/content-management-system.jpg",
    tags: ["Next.js", "Strapi", "GraphQL"],
    link: "#",
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description: "Tool for tracking and analyzing social media performance metrics.",
    image: "/social-media-analytics-dashboard.jpg",
    tags: ["React", "Python", "PostgreSQL", "Chart.js"],
    link: "#",
  },
]

export const metadata: Metadata = {
  title: "Projects - Wings2Sky",
  description:
    "View our portfolio of successful projects and case studies. See how we've helped businesses achieve their goals.",
  keywords: "projects, portfolio, case studies, web development, e-commerce solutions,Digital marketing campaign results",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful projects and case studies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
