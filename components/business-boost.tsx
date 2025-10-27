"use client"

import { BarChart3, TrendingUp } from "lucide-react"
import Image from "next/image"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const engagementData = [
  { month: "Jan", engagement: 40 },
  { month: "Feb", engagement: 60 },
  { month: "Mar", engagement: 45 },
  { month: "Apr", engagement: 80 },
  { month: "May", engagement: 95 },
  { month: "Jun", engagement: 110 },
]

const growthData = [
  { name: "Week 1", value: 20 },
  { name: "Week 2", value: 35 },
  { name: "Week 3", value: 50 },
  { name: "Week 4", value: 75 },
]

const chartData = [
  { name: "Organic", value: 45, fill: "#f97316" },
  { name: "Paid", value: 30, fill: "#06b6d4" },
  { name: "Direct", value: 25, fill: "#8b5cf6" },
]

export default function BusinessBoost() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Does Your Online Business Need A Boost?</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Boost your business with our E-commerce Seller Account Management Services! We don't just manage your
              store—we enhance it to attract high-quality leads. Our team uses advanced analytics and innovative
              strategies to optimize listings, increase visibility, and create compelling campaigns that turn visitors
              into loyal customers. Partner with us to drive more leads and focus on growing your success!
            </p>
            <div className="flex gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BarChart3 size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">1000</p>
                  <p className="text-sm text-muted-foreground">Active Sellers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TrendingUp size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">30.34%</p>
                  <p className="text-sm text-muted-foreground">Growth Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image with Charts */}
          <div className="hidden md:block relative h-96">
            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop"
                alt="Professional woman with phone"
                width={400}
                height={500}
                className="relative z-20 object-cover rounded-2xl shadow-2xl"
              />

              {/* Top Left - Engagement Line Chart */}
              <div className="absolute top-0 left-0 bg-white rounded-xl shadow-lg p-3 w-32 h-24 z-30">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={engagementData.slice(0, 3)}>
                    <Line type="monotone" dataKey="engagement" stroke="#f97316" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Top Right - Pie Chart */}
              <div className="absolute top-8 right-0 bg-white rounded-xl shadow-lg p-3 w-28 h-28 z-30">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={chartData} innerRadius={25} outerRadius={40} paddingAngle={2} dataKey="value">
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Bottom Left - Growth Bar Chart */}
              <div className="absolute bottom-0 left-0 bg-white rounded-xl shadow-lg p-3 w-32 h-24 z-30">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={growthData}>
                    <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Bottom Right - Stats Card */}
              <div className="absolute bottom-8 right-0 bg-white rounded-xl shadow-lg p-4 w-32 z-30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm">
                    ▶
                  </div>
                  <span className="font-bold text-sm">26,504</span>
                </div>
                <div className="text-xs text-muted-foreground">Engagement</div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-12 right-20 w-16 h-16 bg-blue-100 rounded-full opacity-40 z-10"></div>
              <div className="absolute bottom-20 left-10 w-12 h-12 bg-orange-200 rounded-full opacity-40 z-10"></div>
              <div className="absolute top-1/2 right-10 w-8 h-8 border-2 border-orange-400 rounded-full opacity-60 z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
