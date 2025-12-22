// app/myntra-calculator/page.tsx
"use client"

import { useState, useEffect } from "react"
import { Calculator, TrendingUp, PieChart, Smartphone, Zap, Shield, BarChart3, CheckCircle, AlertCircle, ShoppingBag, Tag, Percent, Truck, Package, CreditCard } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

type CategoryType = {
  name: string
  marketplaceFeePercent: number
  gstPercent: number
}

type ShippingZone = "local" | "regional" | "national"

export default function MyntraCalculatorPage() {
  // State for calculator inputs
  const [shippingZone, setShippingZone] = useState<ShippingZone>("local")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [mrp, setMrp] = useState("500")
  const [discountPercent, setDiscountPercent] = useState("10")

  // State for results
  const [results, setResults] = useState({
    sellingPrice: 0,
    discountAmount: 0,
    overallGst: 0,
    gmv: 0,
    shippingFee: 0,
    fixedFee: 0,
    marketplaceFee: 0,
    totalMyntraFees: 0,
    settlementAmount: 0,
    netMarginPercent: 0,
    revenue: 0
  })

  // Sample categories data
  const categories: CategoryType[] = [
    { name: "Clothing & Accessories", marketplaceFeePercent: 15, gstPercent: 12 },
    { name: "Food & Nutrition", marketplaceFeePercent: 12, gstPercent: 5 },
    { name: "Kitchen Cookware & Serveware", marketplaceFeePercent: 18, gstPercent: 18 },
    { name: "Edible Oil", marketplaceFeePercent: 10, gstPercent: 5 },
    { name: "Health & Beauty", marketplaceFeePercent: 20, gstPercent: 18 },
    { name: "Footwear", marketplaceFeePercent: 16, gstPercent: 18 },
    { name: "Painting & Posters", marketplaceFeePercent: 22, gstPercent: 12 },
    { name: "Artificial Jewelry", marketplaceFeePercent: 25, gstPercent: 3 },
    { name: "Men's Fashion", marketplaceFeePercent: 18, gstPercent: 12 },
    { name: "Women's Ethnic Wear", marketplaceFeePercent: 17, gstPercent: 12 },
    { name: "Sportswear", marketplaceFeePercent: 19, gstPercent: 12 },
    { name: "Accessories", marketplaceFeePercent: 14, gstPercent: 12 }
  ]

  // Calculate all fees
  const calculateFees = () => {
    const mrpValue = parseFloat(mrp) || 0
    const discount = parseFloat(discountPercent) || 0
    
    // Calculate selling price
    const discountAmount = mrpValue * (discount / 100)
    const sellingPrice = mrpValue - discountAmount

    // Find selected category
    const category = categories.find(cat => cat.name === selectedCategory)
    
    // Marketplace fee (default 15% if no category selected)
    const marketplaceFeePercent = category?.marketplaceFeePercent || 15
    const marketplaceFee = sellingPrice * (marketplaceFeePercent / 100)

    // GST calculation (default 12% if no category selected)
    const gstPercent = category?.gstPercent || 12
    const overallGst = sellingPrice * (gstPercent / 100)

    // GMV (Gross Merchandise Value)
    const gmv = sellingPrice * 0.02 // 2% of selling price as per PDF example

    // Shipping fee calculation based on shipping zone
    let shippingFee = 0
    switch (shippingZone) {
      case "local":
        shippingFee = 47
        break
      case "regional":
        shippingFee = 67
        break
      case "national":
        shippingFee = 97
        break
    }

    // Fixed fee
    const fixedFee = 18

    // Calculate totals
    const totalMyntraFees = marketplaceFee + overallGst + gmv + shippingFee + fixedFee
    const settlementAmount = sellingPrice - totalMyntraFees
    const netMarginPercent = sellingPrice > 0 ? (settlementAmount / sellingPrice) * 100 : 0

    setResults({
      sellingPrice,
      discountAmount,
      overallGst,
      gmv,
      shippingFee,
      fixedFee,
      marketplaceFee,
      totalMyntraFees,
      settlementAmount,
      netMarginPercent,
      revenue: sellingPrice
    })
  }

  // Reset form
  const resetForm = () => {
    setShippingZone("local")
    setSelectedCategory("")
    setMrp("500")
    setDiscountPercent("10")
    setResults({
      sellingPrice: 0,
      discountAmount: 0,
      overallGst: 0,
      gmv: 0,
      shippingFee: 0,
      fixedFee: 0,
      marketplaceFee: 0,
      totalMyntraFees: 0,
      settlementAmount: 0,
      netMarginPercent: 0,
      revenue: 0
    })
  }

  useEffect(() => {
    if (mrp && selectedCategory) {
      calculateFees()
    }
  }, [shippingZone, selectedCategory, mrp, discountPercent])

  const steps = [
    {
      number: 1,
      title: "Select Product Category",
      description: "Choose the category your product belongs to",
      icon: <ShoppingBag className="h-6 w-6" />
    },
    {
      number: 2,
      title: "Enter MRP & Discount",
      description: "Enter MRP and discount percentage",
      icon: <Tag className="h-6 w-6" />
    },
    {
      number: 3,
      title: "Select Shipping Zone",
      description: "Choose Local, Regional, or National shipping",
      icon: <Truck className="h-6 w-6" />
    },
    {
      number: 4,
      title: "Calculate & Analyze",
      description: "Get detailed fee breakdown and profit analysis",
      icon: <Calculator className="h-6 w-6" />
    }
  ]

  const features = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "All-in-One Calculator",
      description: "Combines marketplace fee, profit, ROI, revenue, and all fee calculations"
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Detailed Breakdown",
      description: "Complete fee breakdown including GST, shipping, and marketplace fees"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Easy to Use",
      description: "Simple interface for quick calculations and profit analysis"
    }
  ]

  const faqs = [
    {
      question: "How to calculate profit on Myntra?",
      answer: "Use our Myntra calculator to subtract all fees (marketplace fee, GST, shipping, fixed fee) from your selling price to determine net profit."
    },
    {
      question: "How to check commission rate of products on Myntra?",
      answer: "Select your product category in our calculator to see the specific marketplace fee rate applied by Myntra."
    },
    {
      question: "How much does Myntra take from sellers as a commission?",
      answer: "Marketplace fee rates vary by category from 10% to 25%. Our calculator shows the exact rate for your product category."
    },
    {
      question: "How to calculate the Delivery charges on Myntra?",
      answer: "Delivery charges depend on shipping zone (Local, Regional, National). Our calculator automatically computes these."
    },
    {
      question: "How to decide the selling price of a product on Myntra?",
      answer: "Use our calculator to find the optimal MRP and discount that covers all fees and gives you desired profit margins."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Myntra Seller Calculator
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Calculate marketplace fees, profit, ROI, revenue, and GST for Myntra sellers
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <CheckCircle className="h-4 w-4 mr-2" />
                Marketplace Fee Calculator
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <TrendingUp className="h-4 w-4 mr-2" />
                Profit Calculator
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Percent className="h-4 w-4 mr-2" />
                ROI Calculator
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
                  Myntra Seller Profit Calculator
                </CardTitle>
                <CardDescription>
                  Calculate your Myntra seller profits with accurate fee breakdowns including GST and marketplace fees
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Step-by-Step Guide */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">How to use our calculator:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {steps.map((step) => (
                      <div key={step.number} className="text-center">
                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <div className="text-pink-600">
                            {step.icon}
                          </div>
                        </div>
                        <div className="text-xs font-medium bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2">
                          {step.number}
                        </div>
                        <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Step 1: Product Category */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Step 1: Select Product Category</h3>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Your Product Category from the List" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.name} value={category.name}>
                            <div className="flex justify-between items-center w-full">
                              <span>{category.name}</span>
                              <span className="text-xs text-muted-foreground">
                                {category.marketplaceFeePercent}% fee
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground mt-2">
                      Select Your Product Category from the List
                    </p>
                  </div>

                  {/* Step 2: MRP and Discount */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Step 2: Enter MRP and Discount</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="mrp">MRP (₹)</Label>
                        <Input
                          id="mrp"
                          type="number"
                          placeholder="Enter MRP"
                          value={mrp}
                          onChange={(e) => setMrp(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="discount">Discount (%)</Label>
                        <Input
                          id="discount"
                          type="number"
                          placeholder="Enter discount percentage"
                          value={discountPercent}
                          onChange={(e) => setDiscountPercent(e.target.value)}
                        />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Enter Your MRP and Discount
                    </p>
                  </div>

                  {/* Step 3: Shipping Zone */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Step 3: Select Shipping Zone</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div 
                        className={`border-2 rounded-md p-4 text-center cursor-pointer transition-all ${
                          shippingZone === "local" 
                            ? "border-pink-500" 
                            : "border-gray-200 hover:border-pink-300"
                        }`}
                        onClick={() => setShippingZone("local")}
                      >
                        <div className="font-semibold">Local</div>
                        <div className="text-sm text-muted-foreground">
                          Same city delivery
                        </div>
                      </div>
                      <div 
                        className={`border-2 rounded-md p-4 text-center cursor-pointer transition-all ${
                          shippingZone === "regional" 
                            ? "border-pink-500" 
                            : "border-gray-200 hover:border-pink-300"
                        }`}
                        onClick={() => setShippingZone("regional")}
                      >
                        <div className="font-semibold">Regional</div>
                        <div className="text-sm text-muted-foreground">
                          Within zone delivery
                        </div>
                      </div>
                      <div 
                        className={`border-2 rounded-md p-4 text-center cursor-pointer transition-all ${
                          shippingZone === "national" 
                            ? "border-pink-500" 
                            : "border-gray-200 hover:border-pink-300"
                        }`}
                        onClick={() => setShippingZone("national")}
                      >
                        <div className="font-semibold">National</div>
                        <div className="text-sm text-muted-foreground">
                          Across zones delivery
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Calculate Button */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Step 4: Calculate & Analyze</h3>
                    <div className="flex gap-4">
                      <Button onClick={calculateFees} size="lg" className="flex-1 bg-pink-600 hover:bg-pink-700">
                        Calculate Profit
                      </Button>
                      <Button onClick={resetForm} variant="outline" size="lg">
                        Reset
                      </Button>
                    </div>
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
                    Detailed Analysis
                  </CardTitle>
                  <CardDescription>
                    Myntra Seller Fees and Costs - Complete breakdown of all charges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                      <p className="text-sm text-muted-foreground">Selling Price</p>
                      <p className="text-2xl font-bold text-foreground">
                        ₹{results.sellingPrice.toFixed(2)}
                      </p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                      <p className="text-sm text-muted-foreground">Settlement Amount</p>
                      <p className="text-2xl font-bold text-green-600">
                        ₹{results.settlementAmount.toFixed(2)}
                      </p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                      <p className="text-sm text-muted-foreground">Net Margin %</p>
                      <p className="text-2xl font-bold text-green-600">
                        {results.netMarginPercent.toFixed(2)}%
                      </p>
                    </div>
                  </div>

                  {/* Detailed Fee Breakdown */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Complete Fee Breakdown:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>MRP:</span>
                        <span>₹{parseFloat(mrp).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Discount ({discountPercent}%):</span>
                        <span className="text-green-600">-₹{results.discountAmount.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold">
                        <span>Selling Price:</span>
                        <span>₹{results.sellingPrice.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span>Overall GST ({selectedCategory ? `${categories.find(c => c.name === selectedCategory)?.gstPercent || 12}%` : "12%"}):</span>
                        <span>₹{results.overallGst.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GMV (Gross Merchandise Value):</span>
                        <span>₹{results.gmv.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping Fees ({shippingZone}):</span>
                        <span>₹{results.shippingFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fixed Fees:</span>
                        <span>₹{results.fixedFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Marketplace Fees ({selectedCategory ? `${categories.find(c => c.name === selectedCategory)?.marketplaceFeePercent || 15}%` : "15%"}):</span>
                        <span>₹{results.marketplaceFee.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold">
                        <span>Total Myntra Fees:</span>
                        <span>₹{results.totalMyntraFees.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Settlement Amount:</span>
                        <span className="text-green-600">₹{results.settlementAmount.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Features Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 bg-pink-100 rounded-full">
                        <div className="text-pink-600">
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
            {/* What is Myntra Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  What is Myntra Calculator?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  A Myntra Calculator is a versatile tool that empowers sellers to accurately assess 
                  their product revenues, calculate fees, commissions, and profits while also determining 
                  the ideal selling price to achieve success on the Myntra platform.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Myntra Commission Calculator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Myntra Profit Calculator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Myntra ROI Calculator on Products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Myntra Revenue Calculator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Myntra Product Fees Calculator</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Myntra Fees Guide */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Myntra Fees Applicable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="marketplace">
                    <AccordionTrigger>1. Marketplace Fee</AccordionTrigger>
                    <AccordionContent>
                      Myntra charges a Marketplace fee for each item sold. The fee is a percentage of 
                      the item's sale price, and it varies by category. These fees help cover the cost 
                      of using Myntra's marketplace and services.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="gst">
                    <AccordionTrigger>2. Overall GST</AccordionTrigger>
                    <AccordionContent>
                      This is the GST charged by the government on the value of the product, 
                      which is added to the purchase price. GST rates vary by product category.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="gmv">
                    <AccordionTrigger>3. Gross Merchandise Value (GMV)</AccordionTrigger>
                    <AccordionContent>
                      GMV represents the total value of products sold on the platform. 
                      It's typically a small percentage of the selling price.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="fixed">
                    <AccordionTrigger>4. Fixed Fees</AccordionTrigger>
                    <AccordionContent>
                      Myntra charges fixed fees for using its platform to sell products. 
                      These are standard charges applied to all transactions.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <Card>
              <CardHeader>
                <CardTitle>How Sellers Benefit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Make informed pricing decisions with MRP and discounts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Understand GST implications on different categories</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Maximize profitability with accurate fee calculations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Attract more customers with optimal pricing strategy</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How Calculator Works */}
            <Card>
              <CardHeader>
                <CardTitle>How Our Calculator Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </div>
                    <span className="text-sm">Calculate Marketplace Fees based on category</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </div>
                    <span className="text-sm">Calculate Overall GST based on product category</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </div>
                    <span className="text-sm">Calculate Shipping Fees based on zone</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      4
                    </div>
                    <span className="text-sm">Sum all fees to get total expenses</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      5
                    </div>
                    <span className="text-sm">Calculate profit after all deductions</span>
                  </div>
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

        {/* Detailed How It Works Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">How Myntra Seller Calculator Helps You</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Understanding the profit margin on a product before listing it on Myntra is not just advisable; 
                  it's a critical step for any seller. The Myntra Seller Calculator simplifies this process, 
                  allowing you to assess potential profitability by considering Marketplace fees, Fixed Fees, 
                  Gross merchandise volume (GMV), shipping costs, and more.
                </p>
                
                <div className="border border-pink rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Seller Success Story:</h4>
                  <p className="text-sm">
                    Meet Mukesh Sharma, an experienced Myntra seller who used our Myntra Net Revenue Calculator 
                    to figure out the perfect price for a new product. With our tool, Mukesh could easily work 
                    out how much money he'd make after considering all the fees involved. By adjusting his price 
                    based on these calculations, he not only attracted more customers but also made more money.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-pink-600">10-25%</div>
                    <div className="text-sm text-muted-foreground">Marketplace Fee Range</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-pink-600">5-18%</div>
                    <div className="text-sm text-muted-foreground">GST Rate Range</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-pink-600">3 Steps</div>
                    <div className="text-sm text-muted-foreground">Simple Calculation Process</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}