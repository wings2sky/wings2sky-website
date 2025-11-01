import { Building2 } from "lucide-react"

const partners = [
  { name: "Amazon", icon: "/amazon.svg", color: "#232F3E" },
  { name: "Flipkart", icon: "/flipkart-icon.svg", color: "#2874F0" },
  { name: "Shopify", icon: "/shopify-icon.svg", color: "#95BF47" },
  { name: "Myntra", icon: "/myntra.svg", color: "#E21A70" },
  { name: "Instagram", icon: "/instagram.svg", color: "#E1306C" },
  { name: "Meta", icon: "/meta.svg", color: "#1877F2" },
  { name: "Meesho", icon: "/meesho.svg", color: "#FF0066" },
]

export default function Partnerships() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our Proud <span className="text-primary">Partnerships</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center h-32 w-full"
            >
              <div className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <img 
                  src={partner.icon} 
                  alt={partner.name}
                  className="h-9 w-auto"
                  style={{ color: partner.color }}
                />
              </div>
              <p className="mt-3 text-sm font-medium text-muted-foreground group-hover:text-primary transition">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Badge */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Trusted by Industry Leaders
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}