// app/blinkit-calculator/page.tsx
"use client"

import { useState, useEffect } from "react"
import { Calculator, TrendingUp, PieChart, Smartphone, Zap, Shield, BarChart3, CheckCircle, AlertCircle, Package, Truck, Clock, DollarSign, Percent, Box, Warehouse } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type CommissionTier = {
  minPrice: number
  maxPrice: number
  commissionRate: number
}

type StorageTier = {
  days: string
  unitFee: number
  volumeFee: number
}

export default function BlinkitCalculatorPage() {
  // State for calculator inputs
  const [sellingPrice, setSellingPrice] = useState("500")
  const [inventoryDays, setInventoryDays] = useState<number[]>([30])
  const [units, setUnits] = useState("100")
  const [unitsSold, setUnitsSold] = useState("10") // Add units sold
  const [dimensions, setDimensions] = useState({
    length: "20",
    width: "15",
    height: "10"
  })
  const [costPrice, setCostPrice] = useState("300") // Add cost price

  // State for results
  const [results, setResults] = useState({
    inwardingFee: 0,
    storageFee: 0,
    platformCommission: 0,
    fulfillmentFee: 0,
    gstOnFees: 0,
    totalFees: 0,
    revenue: 0,
    costOfGoods: 0,
    grossProfit: 0,
    netProfit: 0,
    netMarginPercent: 0,
    settlementAmount: 0
  })

  // Commission tiers based on price
  const commissionTiers: CommissionTier[] = [
    { minPrice: 0, maxPrice: 500, commissionRate: 2 },
    { minPrice: 501, maxPrice: 700, commissionRate: 6 },
    { minPrice: 701, maxPrice: 900, commissionRate: 13 },
    { minPrice: 901, maxPrice: 1200, commissionRate: 16 },
    { minPrice: 1201, maxPrice: Infinity, commissionRate: 18 }
  ]

  // Storage fee tiers
  const storageTiers: StorageTier[] = [
    { days: "First 30 days", unitFee: 1, volumeFee: 6 },
    { days: "31-60 days", unitFee: 1.25, volumeFee: 6.25 },
    { days: "Beyond 60 days", unitFee: 1.5, volumeFee: 6.55 }
  ]

  // Calculate all fees
  const calculateFees = () => {
    const price = parseFloat(sellingPrice) || 0
    const cost = parseFloat(costPrice) || 0
    const totalUnits = parseInt(units) || 0
    const soldUnits = parseInt(unitsSold) || 0
    const daysInInventory = inventoryDays[0] || 0
    
    const length = parseFloat(dimensions.length) || 0
    const width = parseFloat(dimensions.width) || 0
    const height = parseFloat(dimensions.height) || 0

    // Calculate total revenue
    const revenue = price * soldUnits
    const costOfGoods = cost * soldUnits

    // 1. Inwarding Fee: ₹7.50 per unit (for all units in inventory)
    const inwardingFee = totalUnits * 7.5

    // 2. Storage Fee Calculation
    let storageFee = 0
    
    // Calculate volume in cubic feet
    const volumeCm3 = length * width * height
    const volumeCubicFeet = volumeCm3 / 28316
    
    // For simplicity, calculate storage for all units for the entire period
    if (daysInInventory <= 30) {
      storageFee = Math.max(
        totalUnits * storageTiers[0].unitFee * daysInInventory,
        volumeCubicFeet * storageTiers[0].volumeFee * daysInInventory
      )
    } else if (daysInInventory <= 60) {
      const tier1Days = 30
      const tier2Days = daysInInventory - 30
      const tier1Fee = Math.max(
        totalUnits * storageTiers[0].unitFee * tier1Days,
        volumeCubicFeet * storageTiers[0].volumeFee * tier1Days
      )
      const tier2Fee = Math.max(
        totalUnits * storageTiers[1].unitFee * tier2Days,
        volumeCubicFeet * storageTiers[1].volumeFee * tier2Days
      )
      storageFee = tier1Fee + tier2Fee
    } else {
      const tier1Fee = Math.max(
        totalUnits * storageTiers[0].unitFee * 30,
        volumeCubicFeet * storageTiers[0].volumeFee * 30
      )
      const tier2Fee = Math.max(
        totalUnits * storageTiers[1].unitFee * 30,
        volumeCubicFeet * storageTiers[1].volumeFee * 30
      )
      const tier3Days = daysInInventory - 60
      const tier3Fee = Math.max(
        totalUnits * storageTiers[2].unitFee * tier3Days,
        volumeCubicFeet * storageTiers[2].volumeFee * tier3Days
      )
      storageFee = tier1Fee + tier2Fee + tier3Fee
    }

    // 3. Platform Commission (for sold units only)
    let platformCommissionRate = 0
    for (const tier of commissionTiers) {
      if (price >= tier.minPrice && price <= tier.maxPrice) {
        platformCommissionRate = tier.commissionRate
        break
      }
    }
    const platformCommission = price * soldUnits * (platformCommissionRate / 100)

    // 4. Fulfillment Fee: ₹25 per unit (for sold units only)
    const fulfillmentFee = 25 * soldUnits

    // Calculate GST (18% on all fees)
    const totalFeesBeforeGST = platformCommission + fulfillmentFee
    const gstOnFees = totalFeesBeforeGST * 0.18

    // One-time fees (inwarding) and periodic fees (storage) are business expenses
    // They should be considered separately from per-unit transaction fees
    const transactionFees = totalFeesBeforeGST + gstOnFees
    const businessExpenses = inwardingFee + storageFee

    // Calculate profits
    const grossProfit = revenue - costOfGoods - businessExpenses
    const netProfit = grossProfit - transactionFees
    const netMarginPercent = revenue > 0 ? (netProfit / revenue) * 100 : 0
    const settlementAmount = revenue - transactionFees // What you actually receive from Blinkit
    const totalFees = transactionFees + businessExpenses

    setResults({
      inwardingFee,
      storageFee,
      platformCommission,
      fulfillmentFee,
      gstOnFees,
      totalFees,
      revenue,
      costOfGoods,
      grossProfit,
      netProfit,
      netMarginPercent,
      settlementAmount
    })
  }

  // Reset form
  const resetForm = () => {
    setSellingPrice("500")
    setInventoryDays([30])
    setUnits("100")
    setUnitsSold("10")
    setCostPrice("300")
    setDimensions({
      length: "20",
      width: "15",
      height: "10"
    })
    setResults({
      inwardingFee: 0,
      storageFee: 0,
      platformCommission: 0,
      fulfillmentFee: 0,
      gstOnFees: 0,
      totalFees: 0,
      revenue: 0,
      costOfGoods: 0,
      grossProfit: 0,
      netProfit: 0,
      netMarginPercent: 0,
      settlementAmount: 0
    })
  }

  useEffect(() => {
    if (sellingPrice && units && unitsSold) {
      calculateFees()
    }
  }, [sellingPrice, inventoryDays, units, unitsSold, dimensions, costPrice])

  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Quick Commerce Focused",
      description: "Specialized calculator for Blinkit's 10-minute delivery model"
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Complete Fee Breakdown",
      description: "Includes inwarding, storage, commission, and fulfillment fees"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Profit Optimization",
      description: "Helps you price strategically around commission tiers"
    }
  ]

  const optimizationTips = [
    "Optimize Product Dimensions: Smaller, lighter products incur lower storage fees.",
    "Price Strategically Around Commission Tiers: Adjust prices to lower commission brackets.",
    "Manage Inventory Efficiently: Monitor sell-through rates to avoid long-term storage fees.",
    "Quality Control: Minimize returns by ensuring product quality and accurate descriptions.",
    "Calculate All Costs Before Listing: Use our calculator to determine minimum profitable pricing."
  ]

  const faqs = [
    {
      question: "How does Blinkit calculate seller commissions?",
      answer: "Blinkit commissions are calculated as a percentage of the order value based on selling price tiers, ranging from 2% to 18%."
    },
    {
      question: "What factors affect my earnings as a Blinkit seller?",
      answer: "Your earnings depend on order volume, average order value, storage duration, product dimensions, and seller performance metrics."
    },
    {
      question: "How often does Blinkit pay its sellers?",
      answer: "Blinkit typically processes seller payments on a weekly basis, with funds transferred directly to your registered bank account."
    },
    {
      question: "What is the inwarding fee?",
      answer: "A one-time fee of ₹7.50 per unit charged when your inventory is received at Blinkit's fulfillment center."
    },
    {
      question: "How can I reduce storage fees?",
      answer: "Optimize packaging to reduce cubic feet volume and maintain good inventory turnover to avoid long-term storage rates."
    }
  ]

  // Get current commission tier
  const getCurrentCommissionTier = () => {
    const price = parseFloat(sellingPrice) || 0
    for (const tier of commissionTiers) {
      if (price >= tier.minPrice && price <= tier.maxPrice) {
        return tier
      }
    }
    return commissionTiers[0]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blinkit Seller Commission Calculator 2025
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Calculate your quick commerce profits, fees, and commissions instantly
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <CheckCircle className="h-4 w-4 mr-2" />
                10-Minute Delivery Model
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <TrendingUp className="h-4 w-4 mr-2" />
                Commission Calculator
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Clock className="h-4 w-4 mr-2" />
                Quick Commerce
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Calculator Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Calculator */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Calculator className="h-6 w-6" />
                  Blinkit Commission Calculator
                </CardTitle>
                <CardDescription>
                  Calculate your Blinkit seller profits with complete fee breakdown for quick commerce
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Product Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Product Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sellingPrice">Selling Price (₹) *</Label>
                        <Input
                          id="sellingPrice"
                          type="number"
                          placeholder="Enter selling price"
                          value={sellingPrice}
                          onChange={(e) => setSellingPrice(e.target.value)}
                        />
                        <div className="text-xs text-muted-foreground">
                          Current commission rate: <span className="font-semibold">{getCurrentCommissionTier().commissionRate}%</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="costPrice">Cost Price (₹) *</Label>
                        <Input
                          id="costPrice"
                          type="number"
                          placeholder="Enter cost price"
                          value={costPrice}
                          onChange={(e) => setCostPrice(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Inventory Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Inventory Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="units">Total Units in Inventory *</Label>
                        <Input
                          id="units"
                          type="number"
                          placeholder="Total units"
                          value={units}
                          onChange={(e) => setUnits(e.target.value)}
                        />
                        <div className="text-xs text-muted-foreground">
                          Inwarding Fee: ₹7.50 × {units} = ₹{(parseInt(units) || 0) * 7.5}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="unitsSold">Units Sold *</Label>
                        <Input
                          id="unitsSold"
                          type="number"
                          placeholder="Units sold"
                          value={unitsSold}
                          onChange={(e) => setUnitsSold(e.target.value)}
                        />
                        <div className="text-xs text-muted-foreground">
                          Revenue: ₹{sellingPrice} × {unitsSold} = ₹{(parseFloat(sellingPrice) || 0) * (parseInt(unitsSold) || 0)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Inventory Duration */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Inventory Duration</h3>
                    <div className="space-y-4">
                      <div>
                        <Label className="flex justify-between mb-2">
                          <span>Days in Inventory: <span className="font-semibold">{inventoryDays[0]} days</span></span>
                          <span className="text-sm text-muted-foreground">
                            {inventoryDays[0] <= 30 ? "First 30 days rate" : 
                             inventoryDays[0] <= 60 ? "31-60 days rate" : 
                             "Beyond 60 days rate"}
                          </span>
                        </Label>
                        <Slider
                          value={inventoryDays}
                          onValueChange={setInventoryDays}
                          max={90}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>1 day</span>
                          <span>30 days</span>
                          <span>60 days</span>
                          <span>90 days</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        {storageTiers.map((tier, index) => (
                          <div key={index} className={`p-3 rounded-lg border ${
                            (inventoryDays[0] <= 30 && index === 0) ||
                            (inventoryDays[0] > 30 && inventoryDays[0] <= 60 && index === 1) ||
                            (inventoryDays[0] > 60 && index === 2)
                              ? "border-green-500"
                              : "border-gray-200"
                          }`}>
                            <div className="font-semibold">{tier.days}</div>
                            <div className="text-sm text-muted-foreground">
                              ₹{tier.unitFee}/unit/day
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Package Dimensions */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Package Dimensions (cm)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="length">Length (cm)</Label>
                        <Input
                          id="length"
                          type="number"
                          value={dimensions.length}
                          onChange={(e) => setDimensions({...dimensions, length: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="width">Width (cm)</Label>
                        <Input
                          id="width"
                          type="number"
                          value={dimensions.width}
                          onChange={(e) => setDimensions({...dimensions, width: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="height">Height (cm)</Label>
                        <Input
                          id="height"
                          type="number"
                          value={dimensions.height}
                          onChange={(e) => setDimensions({...dimensions, height: e.target.value})}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Volume per unit: {(parseFloat(dimensions.length) * parseFloat(dimensions.width) * parseFloat(dimensions.height) / 28316).toFixed(3)} cubic feet
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button onClick={calculateFees} size="lg" className="flex-1 bg-green-600 hover:bg-green-700">
                      Calculate Commission & Profit
                    </Button>
                    <Button onClick={resetForm} variant="outline" size="lg">
                      Reset
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            {results.revenue > 0 && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <BarChart3 className="h-6 w-6" />
                    Commission & Profit Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className=" p-4 rounded-lg border border-green-100">
                      <p className="text-sm text-muted-foreground">Revenue</p>
                      <p className="text-2xl font-bold text-foreground">
                        ₹{results.revenue.toFixed(2)}
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <p className="text-sm text-muted-foreground">Net Profit</p>
                      <p className={`text-2xl font-bold ${results.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{results.netProfit.toFixed(2)}
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <p className="text-sm text-muted-foreground">Net Margin</p>
                      <p className={`text-2xl font-bold ${results.netMarginPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {results.netMarginPercent.toFixed(2)}%
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <p className="text-sm text-muted-foreground">Settlement Amount</p>
                      <p className={`text-2xl font-bold ${results.settlementAmount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{results.settlementAmount.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Detailed Fee Breakdown */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Transaction Breakdown</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Total Revenue:</span>
                          <span className="font-semibold">₹{results.revenue.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cost of Goods:</span>
                          <span className="text-red-600">-₹{results.costOfGoods.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span>Gross Profit:</span>
                          <span className={`font-semibold ${results.grossProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            ₹{results.grossProfit.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Blinkit Fees & Expenses</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Platform Commission ({getCurrentCommissionTier().commissionRate}%):</span>
                          <span>₹{results.platformCommission.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fulfillment Fee (₹25/unit):</span>
                          <span>₹{results.fulfillmentFee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>GST on Fees (18%):</span>
                          <span>₹{results.gstOnFees.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-semibold">
                          <span>Transaction Fees:</span>
                          <span>₹{(results.platformCommission + results.fulfillmentFee + results.gstOnFees).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Inwarding Fee (₹7.50/unit):</span>
                          <span>₹{results.inwardingFee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Storage Fee ({inventoryDays[0]} days):</span>
                          <span>₹{results.storageFee.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-bold">
                          <span>Total Business Expenses:</span>
                          <span>₹{(results.inwardingFee + results.storageFee).toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-bold text-lg">
                          <span>Net Profit:</span>
                          <span className={results.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}>
                            ₹{results.netProfit.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                          <span>Settlement Amount (Revenue - Transaction Fees):</span>
                          <span className={results.settlementAmount >= 0 ? 'text-green-600' : 'text-red-600'}>
                            ₹{results.settlementAmount.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Commission Tiers Table */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Percent className="h-5 w-5" />
                  Blinkit Commission Tiers 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Selling Price Range</TableHead>
                      <TableHead>Commission Rate</TableHead>
                      <TableHead>Commission per Unit</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {commissionTiers.map((tier, index) => {
                      const currentPrice = parseFloat(sellingPrice) || 0
                      const isCurrentTier = currentPrice >= tier.minPrice && currentPrice <= tier.maxPrice
                      const commissionPerUnit = currentPrice * (tier.commissionRate / 100)
                      
                      return (
                        <TableRow key={index} className={isCurrentTier ? "bg-green-50" : ""}>
                          <TableCell>
                            {tier.minPrice === 0 ? "Up to " : "₹" + tier.minPrice + " – "}
                            {tier.maxPrice === Infinity ? "Above ₹1200" : "₹" + tier.maxPrice}
                          </TableCell>
                          <TableCell>
                            <span className={`font-semibold ${isCurrentTier ? "text-green-600" : ""}`}>
                              {tier.commissionRate}%
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className={isCurrentTier ? "font-semibold text-green-600" : "text-muted-foreground"}>
                              {isCurrentTier ? `₹${commissionPerUnit.toFixed(2)}` : "-"}
                            </span>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Features Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 bg-green-100 rounded-full">
                        <div className="text-green-600">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Info & Tips */}
          <div className="space-y-8">
            {/* Understanding Blinkit Fees */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Understanding Blinkit Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Warehouse className="h-4 w-4" />
                      1. Inwarding Fee (₹7.50 per unit)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      One-time fee charged when inventory is received at Blinkit's fulfillment center.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      2. Storage Fee (Tiered Pricing)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Daily charges based on units and cubic feet. Rates increase after 30 and 60 days.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Percent className="h-4 w-4" />
                      3. Platform Commission
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Progressive commission from 2% to 18% based on selling price tiers.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      4. Fulfillment Fee (₹25 per unit)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Covers picking, packing, and 10-minute last-mile delivery for sold units.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profit Optimization Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Maximize Profitability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {optimizationTips.map((tip, index) => (
                    <AccordionItem key={index} value={`tip-${index}`}>
                      <AccordionTrigger>Tip {index + 1}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm">{tip}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Why Blinkit? */}
            <Card>
              <CardHeader>
                <CardTitle>Why Blinkit Quick Commerce?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">10-minute delivery promise increases customer satisfaction</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Built-in customer base of urban convenience shoppers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Simplified logistics with Blinkit managing storage & delivery</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Exposure in India's $5.5 billion quick commerce market</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Fees */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Fees to Consider</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Inventory Removal Fee:</span>
                    <span className="font-semibold text-sm">₹5 per unit</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Customer Return Fee:</span>
                    <span className="font-semibold text-sm">₹50 per unit</span>
                  </div>
                  <Separator />
                  <p className="text-xs text-muted-foreground mt-2">
                    *All fees are subject to 18% GST as per current regulations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {faq.question}
                    </h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Warning Note */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">Important Notice</h4>
              <p className="text-sm text-yellow-700">
                This calculator provides estimates for planning purposes only. Commission rates and fees 
                may vary based on product category, seller tier, and Blinkit's current policies. For the 
                most accurate and up-to-date commission calculations, always verify with official Blinkit 
                seller resources before making business decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}