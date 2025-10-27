"use client"

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const salesData = [
  { month: "Jan", sales: 40000, growth: 0 },
  { month: "Feb", sales: 65000, growth: 62.5 },
  { month: "Mar", sales: 95000, growth: 46.2 },
  { month: "Apr", sales: 135000, growth: 42.1 },
  { month: "May", sales: 185000, growth: 37 },
  { month: "Jun", sales: 250000, growth: 35.1 },
]

const clientStats = [
  { name: "E-Commerce Stores", increment: "150%", clients: 120 },
  { name: "Fashion Brands", increment: "180%", clients: 85 },
  { name: "Electronics Retailers", increment: "165%", clients: 95 },
  { name: "Beauty Products", increment: "200%", clients: 70 },
]

export default function SalesIncrement() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Client Sales Growth</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our clients have achieved remarkable sales increments with our strategic solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Sales Growth Chart */}
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle>Average Sales Growth Trajectory</CardTitle>
              <CardDescription>6-month performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  sales: {
                    label: "Sales",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="sales" fill="var(--color-sales)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Growth Rate Chart */}
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle>Monthly Growth Rate</CardTitle>
              <CardDescription>Percentage increase month-over-month</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  growth: {
                    label: "Growth %",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="growth" stroke="var(--color-growth)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Client Category Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientStats.map((stat, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">{stat.name}</p>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.increment}</div>
                  <p className="text-xs text-muted-foreground">{stat.clients} Clients</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
