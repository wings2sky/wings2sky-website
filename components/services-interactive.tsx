"use client"

import { useState } from "react"
import { ShoppingCart, TrendingUp, X } from "lucide-react"

interface OrderProof {
  id: string
  platform: string
  orderCount: number
  totalValue: string
  recentOrders: Array<{
    orderId: string
    date: string
    amount: string
    status: string
  }>
}

const generateRandomOrders = (platform: string): OrderProof => {
  const orderCounts = [150, 280, 195, 342, 267, 189]
  const randomCount = orderCounts[Math.floor(Math.random() * orderCounts.length)]

  const recentOrders = Array.from({ length: 5 }, (_, i) => ({
    orderId: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    amount: `₹${Math.floor(Math.random() * 50000 + 5000)}`,
    status: ["Delivered", "Processing", "Shipped"][Math.floor(Math.random() * 3)],
  }))

  return {
    id: platform,
    platform,
    orderCount: randomCount,
    totalValue: `₹${(randomCount * Math.random() * 50000).toFixed(0)}`,
    recentOrders,
  }
}

const services = [
  {
    title: "Sell On Amazon",
    description: "Start selling on India's most visited shopping destination. Trusted by 10 Lakh+ businesses.",
    platform: "Amazon",
    logo: "https://bizability.org/wp-content/uploads/2015/03/amazon-seller-central.jpg",
    color: "bg-gradient-to-r from-orange-400 to-yellow-300"
  },
  {
    title: "Sell On Flipkart",
    description: "Sell across 3000+ categories to 50crores+ customers. India's favorite shopping destination.",
    platform: "Flipkart",
    logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flipkart-icon.png",
    color: "bg-gradient-to-r from-blue-400 to-blue-600"
  },
  {
    title: "Sell On Meesho",
    description: "Sell your products online on Meesho at 0% commission. Register as a Meesho seller today.",
    platform: "Meesho",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Meesho_logo.png",
    color: "bg-gradient-to-r from-pink-500 to-pink-600"
  },
]

export default function ServicesInteractive() {
  const [selectedService, setSelectedService] = useState<OrderProof | null>(null)

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Marketplace Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on any platform to see our proven track record of successful orders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(generateRandomOrders(service.platform))}
                className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition group cursor-pointer text-left hover:shadow-lg hover:shadow-primary/10"
              >
                <div className={`w-16 h-16 mb-4 rounded-lg ${service.color} flex items-center justify-center p-3`}>
                  <img 
                    src={service.logo} 
                    alt={`${service.platform} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <TrendingUp size={18} />
                  View Order Proof
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center">
                  <img 
                    src={services.find(s => s.platform === selectedService.platform)?.logo}
                    alt={`${selectedService.platform} logo`}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{selectedService.platform} - Order Proof</h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-muted-foreground hover:text-foreground transition"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Total Orders Raised</p>
                  <p className="text-3xl font-bold text-primary">{selectedService.orderCount}</p>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Total Order Value</p>
                  <p className="text-3xl font-bold text-primary">{selectedService.totalValue}</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <ShoppingCart size={20} />
                  Recent Orders
                </h4>
                <div className="space-y-3">
                  {selectedService.recentOrders.map((order) => (
                    <div key={order.orderId} className="p-4 bg-background rounded-lg border border-border">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-foreground">{order.orderId}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-primary">{order.amount}</p>
                          <p
                            className={`text-sm font-medium ${
                              order.status === "Delivered"
                                ? "text-green-500"
                                : order.status === "Shipped"
                                  ? "text-blue-500"
                                  : "text-yellow-500"
                            }`}
                          >
                            {order.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}