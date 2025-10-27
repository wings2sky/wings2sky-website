import { Code, Zap, Globe, Smartphone, BarChart3, Shield } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Build modern, responsive websites that engage your audience and drive results.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Create powerful mobile applications for iOS and Android platforms.",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "Launch your online store with secure payment processing and inventory management.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Grow your business with data-driven marketing strategies and analytics.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimize your digital presence for speed, efficiency, and user experience.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Protect your business with enterprise-grade security solutions.",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
