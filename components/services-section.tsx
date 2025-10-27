import ServiceCard from "@/components/service-card"

export default function ServicesSection() {
  const services = [
    {
      icon: "📢",
      title: "Digital Marketing",
      description:
        "Promotion of brands to connect with potential customers using the internet and digital communication.",
    },
    {
      icon: "💻",
      title: "Website Development",
      description: "We are working in website development since 2020 and have been awarded as Best Web Development.",
    },
    {
      icon: "🔍",
      title: "Search Engine Marketing",
      description: "They provide search advertising opportunities that help marketers gain higher search visibility",
    },
    {
      icon: "📱",
      title: "Social Media",
      description:
        "Social media platforms like Instagram, Twitter and Facebook to promote your brand & sell product online.",
    },
    {
      icon: "📸",
      title: "E-Commerce Photoshoot",
      description: "All ecommerce photography with images editing, retouch, color correction and enhance the images.",
    },
    {
      icon: "🎨",
      title: "Graphics Designing",
      description: "Graphic design is a craft where professionals create visual content to communicate messages.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to help your business grow
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
