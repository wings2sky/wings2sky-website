// app/flipkart-calculator/page.tsx
"use client"

import { useState, useEffect } from "react"
import { Calculator, TrendingUp, PieChart, Smartphone, Zap, Shield, BarChart3, CheckCircle, AlertCircle, ShoppingBag, Truck, Package, CreditCard, Percent } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
  commissionPercent: number
  collectionFee: number
}

type FulfillmentType = "fbf" | "nfbf"

type ShippingZone = "local" | "regional" | "national"

export default function FlipkartCalculatorPage() {
  // State for calculator inputs
  const [fulfillmentType, setFulfillmentType] = useState<FulfillmentType>("fbf")
  const [shippingZone, setShippingZone] = useState<ShippingZone>("local")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [sellingPrice, setSellingPrice] = useState("500")
  const [weight, setWeight] = useState("10")

  // State for results
  const [results, setResults] = useState({
    shippingFee: 0,
    collectionFee: 0,
    commissionFee: 0,
    fixedFee: 0,
    gstOnFees: 0,
    totalFees: 0,
    settlementAmount: 0,
    netMarginPercent: 0,
    revenue: 0
  })

  // Sample categories data
  const categories: CategoryType[] = [
    { name: "Clothing & Accessories", commissionPercent: 15, collectionFee: 2.5 },
    { name: "Food & Nutrition", commissionPercent: 12, collectionFee: 2.5 },
    { name: "Kitchen Cookware & Serveware", commissionPercent: 18, collectionFee: 2.5 },
    { name: "Edible Oil", commissionPercent: 10, collectionFee: 2.5 },
    { name: "Health & Beauty", commissionPercent: 20, collectionFee: 2.5 },
    { name: "Footwear", commissionPercent: 16, collectionFee: 2.5 },
    { name: "Painting & Posters", commissionPercent: 22, collectionFee: 2.5 },
    { name: "Artificial Jewelry", commissionPercent: 25, collectionFee: 2.5 },
    { name: "Soap", commissionPercent: 12, collectionFee: 2.5 },
    { name: "Cosmetic", commissionPercent: 20, collectionFee: 2.5 },
    { name: "Health & Wellness", commissionPercent: 18, collectionFee: 2.5 },
    { name: "Clothing & Apparels", commissionPercent: 15, collectionFee: 2.5 }
  ]

  // Calculate all fees
  const calculateFees = () => {
    const price = parseFloat(sellingPrice) || 0
    const weightInGrams = parseFloat(weight) || 10
    
    // Find selected category
    const category = categories.find(cat => cat.name === selectedCategory)
    
    // Base commission fee (default 15% if no category selected)
    const commissionPercent = category?.commissionPercent || 15
    const commissionFee = price * (commissionPercent / 100)

    // Collection fee (default ₹2.5 if no category selected)
    const collectionFee = category?.collectionFee || 2.5

    // Shipping fee calculation based on shipping zone
    let shippingFee = 0
    if (fulfillmentType === "fbf") {
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
    } else {
      // NFBF shipping fees are lower
      switch (shippingZone) {
        case "local":
          shippingFee = 35
          break
        case "regional":
          shippingFee = 55
          break
        case "national":
          shippingFee = 75
          break
      }
    }

    // Add weight-based adjustment
    if (weightInGrams > 500) {
      const additionalWeight = Math.ceil((weightInGrams - 500) / 500)
      shippingFee += additionalWeight * 10
    }

    // Fixed fee (varies by fulfillment type)
    const fixedFee = fulfillmentType === "fbf" ? 14 : 10

    // GST on marketplace fees (18%)
    const totalFeesBeforeGST = commissionFee + collectionFee + shippingFee + fixedFee
    const gstOnFees = totalFeesBeforeGST * 0.18

    // Calculate totals
    const totalFees = totalFeesBeforeGST + gstOnFees
    const settlementAmount = price - totalFees
    const netMarginPercent = price > 0 ? (settlementAmount / price) * 100 : 0

    setResults({
      shippingFee,
      collectionFee,
      commissionFee,
      fixedFee,
      gstOnFees,
      totalFees,
      settlementAmount,
      netMarginPercent,
      revenue: price
    })
  }

  // Reset form
  const resetForm = () => {
    setFulfillmentType("fbf")
    setShippingZone("local")
    setSelectedCategory("")
    setSellingPrice("500")
    setWeight("10")
    setResults({
      shippingFee: 0,
      collectionFee: 0,
      commissionFee: 0,
      fixedFee: 0,
      gstOnFees: 0,
      totalFees: 0,
      settlementAmount: 0,
      netMarginPercent: 0,
      revenue: 0
    })
  }

  useEffect(() => {
    if (sellingPrice && selectedCategory) {
      calculateFees()
    }
  }, [fulfillmentType, shippingZone, selectedCategory, sellingPrice, weight])

  const steps = [
    {
      number: 1,
      title: "Select Fulfillment Type",
      description: "Choose between Fulfillment by Flipkart (FBF) or Non-FBF (NFBF)",
      icon: <Package className="h-6 w-6" />
    },
    {
      number: 2,
      title: "Choose Shipping Zone",
      description: "Select Local, Regional, or National shipping",
      icon: <Truck className="h-6 w-6" />
    },
    {
      number: 3,
      title: "Select Product Category",
      description: "Choose the category your product belongs to",
      icon: <ShoppingBag className="h-6 w-6" />
    },
    {
      number: 4,
      title: "Enter Selling Price",
      description: "Enter your product's selling price",
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      number: 5,
      title: "Calculate & Analyze",
      description: "Get detailed fee breakdown and profit analysis",
      icon: <Calculator className="h-6 w-6" />
    }
  ]

  const features = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "All-in-One Calculator",
      description: "Combines commission, profit, ROI, revenue, and fee calculations in one tool"
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Detailed Breakdown",
      description: "See complete fee breakdown including commission, collection, and shipping fees"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "User-Friendly",
      description: "Simple step-by-step interface for easy calculations"
    }
  ]

  const faqs = [
    {
      question: "How to calculate profit on Flipkart?",
      answer: "Use our Flipkart calculator to subtract all fees (commission, collection, shipping, GST) from your selling price to determine net profit."
    },
    {
      question: "How to check commission rate of products on Flipkart?",
      answer: "Select your product category in our calculator to see the specific commission rate applied by Flipkart."
    },
    {
      question: "How much does Flipkart take from sellers as a commission?",
      answer: "Commission rates vary by category from 10% to 25%. Our calculator shows the exact rate for your product category."
    },
    {
      question: "How to calculate the Delivery charges on Flipkart?",
      answer: "Delivery charges depend on fulfillment type, shipping zone, and package weight. Our calculator automatically computes these."
    },
    {
      question: "How to decide the selling price of a product on Flipkart?",
      answer: "Use our calculator to find the optimal selling price that covers all fees and gives you desired profit margins."
    }
  ]

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Flipkart Seller Calculator
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Calculate commission, profit, ROI, revenue, and fees for Flipkart sellers
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <CheckCircle className="h-4 w-4 mr-2" />
                Commission Calculator
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
                  Flipkart Seller Profit Calculator
                </CardTitle>
                <CardDescription>
                  Calculate your Flipkart seller profits with accurate fee breakdowns
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Step-by-Step Guide */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">How to use our calculator:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {steps.map((step) => (
                      <div key={step.number} className="text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <div className="text-orange-600">
                            {step.icon}
                          </div>
                        </div>
                        <div className="text-xs font-medium bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2">
                          {step.number}
                        </div>
                        <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Step 1: Fulfillment Type */}
                  <div className="cursor-pointer">
                    <h3 className="cursor-pointer text-lg font-semibold mb-4">Step 1: Select Fulfillment Type</h3>
                    <RadioGroup 
                      value={fulfillmentType} 
                      onValueChange={(value) => setFulfillmentType(value as FulfillmentType)}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div>
                        <RadioGroupItem value="fbf" id="fbf" className="peer sr-only" />
                        <Label
                          htmlFor="fbf"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <Package className="mb-3 h-6 w-6" />
                          <div className="text-center">
                            <div className="font-semibold">Fulfillment by Flipkart (FBF)</div>
                            <div className="text-sm text-muted-foreground">
                              Flipkart handles packaging, shipping, and delivery
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="nfbf" id="nfbf" className="peer sr-only" />
                        <Label
                          htmlFor="nfbf"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <Truck className="mb-3 h-6 w-6" />
                          <div className="text-center">
                            <div className="font-semibold">Non-FBF</div>
                            <div className="text-sm text-muted-foreground">
                              You handle packaging and shipping
                            </div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Step 2: Shipping Zone */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Step 2: Select Shipping Zone</h3>
                    <RadioGroup 
                      value={shippingZone} 
                      onValueChange={(value) => setShippingZone(value as ShippingZone)}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div>
                        <RadioGroupItem value="local" id="local" className="peer sr-only" />
                        <Label
                          htmlFor="local"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <div className="text-center">
                            <div className="font-semibold">Local (Intracity)</div>
                            <div className="text-sm text-muted-foreground">
                              Item shipped within a city
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="regional" id="regional" className="peer sr-only" />
                        <Label
                          htmlFor="regional"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <div className="text-center">
                            <div className="font-semibold">Regional (Intrazone)</div>
                            <div className="text-sm text-muted-foreground">
                              Item shipped within a zone
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="national" id="national" className="peer sr-only" />
                        <Label
                          htmlFor="national"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <div className="text-center">
                            <div className="font-semibold">National (Interzone)</div>
                            <div className="text-sm text-muted-foreground">
                              Item shipped across zones
                            </div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Step 3: Product Category */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Step 3: Select Product Category</h3>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose product category from the list" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.name} value={category.name}>
                            <div className="flex justify-between items-center w-full">
                              <span>{category.name}</span>
                              <span className="text-xs text-muted-foreground">
                                {category.commissionPercent}% commission
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground mt-2">
                      Choose Product Category From the List
                    </p>
                  </div>

                  {/* Step 4: Selling Price & Weight */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Step 4: Enter Product Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sellingPrice">Selling Price (₹)</Label>
                        <Input
                          id="sellingPrice"
                          type="number"
                          placeholder="Enter selling price"
                          value={sellingPrice}
                          onChange={(e) => setSellingPrice(e.target.value)}
                        />
                        <p className="text-sm text-muted-foreground">
                          Enter Your Selling Price
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight (grams)</Label>
                        <Input
                          id="weight"
                          type="number"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Calculate Button */}
                  <div>
                    <h3 className="cursor-pointer text-lg font-semibold mb-4">Step 5: Calculate & Analyze</h3>
                    <div className="flex gap-4">
                      <Button onClick={calculateFees} size="lg" className="cursor-pointer flex-1 bg-orange-600 hover:bg-orange-700">
                        Calculate Profit
                      </Button>
                      <Button className="cursor-pointer" onClick={resetForm} variant="outline" size="lg">
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
                    Detailed Fee Analysis
                  </CardTitle>
                  <CardDescription>
                    Complete breakdown of all charges applicable on your product
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                      <p className="text-sm text-muted-foreground">Settlement Amount</p>
                      <p className="text-2xl font-bold text-green-600">
                        ₹{results.settlementAmount.toFixed(2)}
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                      <p className="text-sm text-muted-foreground">Net Margin %</p>
                      <p className="text-2xl font-bold text-green-600">
                        {results.netMarginPercent.toFixed(2)}%
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                      <p className="text-sm text-muted-foreground">Total Flipkart Fees</p>
                      <p className="text-2xl font-bold text-foreground">
                        ₹{results.totalFees.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Detailed Fee Breakdown */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Charges List applicable on the products category and pricing</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Shipping Fees:</span>
                        <span>₹{results.shippingFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Collection Fees:</span>
                        <span>₹{results.collectionFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Commission Fees ({selectedCategory || "General"}):</span>
                        <span>₹{results.commissionFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fixed Fees:</span>
                        <span>₹{results.fixedFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GST on Marketplace Fees (18%):</span>
                        <span>₹{results.gstOnFees.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold">
                        <span>Total Flipkart Fees:</span>
                        <span>₹{results.totalFees.toFixed(2)}</span>
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
                      <div className="p-3 bg-orange-100 rounded-full">
                        <div className="text-orange-600">
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
            {/* What is Flipkart Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  What is Flipkart Calculator?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  A Flipkart Calculator is a versatile tool that empowers sellers to accurately assess 
                  their product revenues, calculate fees, commissions, and profits while also determining 
                  the ideal selling price to achieve success on the Flipkart platform.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Flipkart Commission Calculator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Flipkart Profit Calculator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Flipkart ROI Calculator on Products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Flipkart Revenue Calculator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Flipkart Product Fees Calculator</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Flipkart Fees Guide */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Flipkart Fees Applicable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="commission">
                    <AccordionTrigger>1. Commission Fee</AccordionTrigger>
                    <AccordionContent>
                      Flipkart charges a Commission fee for each item sold. The fee is a percentage of 
                      the item's sale price, and it varies by category. These fees help cover the cost 
                      of using Flipkart's marketplace and services.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="collection">
                    <AccordionTrigger>2. Collection Fee</AccordionTrigger>
                    <AccordionContent>
                      Some categories may have an additional collection fee. This fee is per-item and 
                      applies to specific product categories.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="fulfillment">
                    <AccordionTrigger>3. Fulfillment Fees</AccordionTrigger>
                    <AccordionContent>
                      If you use Fulfillment by Flipkart (FBF), you will be charged fees for storage, 
                      picking, packing, and shipping your products. These fees depend on the size and 
                      weight of your items.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="other">
                    <AccordionTrigger>4. Other Fees</AccordionTrigger>
                    <AccordionContent>
                      Additional fees may include subscription fees for professional sellers, 
                      high-volume listing fees, refund administration fees, and more.
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
                    <span className="text-sm">Make informed pricing decisions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Maximize profitability</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Understand all fee components</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Attract more customers with optimal pricing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="#calculator">Start Calculating</a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="#fees">Fee Structure</a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="#faq">FAQs</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mt-12">
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

        {/* How Our Calculator Works Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">How Our Flipkart Calculator Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      1
                    </div>
                    <h4 className="font-semibold">Calculate Commission Fees</h4>
                    <p className="text-sm text-muted-foreground">
                      Determine commission fees based on product category and sale price percentage.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      2
                    </div>
                    <h4 className="font-semibold">Find Collection Fees</h4>
                    <p className="text-sm text-muted-foreground">
                      Identify additional collection fees applicable to specific product categories.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      3
                    </div>
                    <h4 className="font-semibold">Calculate Shipping Fees</h4>
                    <p className="text-sm text-muted-foreground">
                      Compute shipping costs based on fulfillment type, shipping zone, and weight.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      4
                    </div>
                    <h4 className="font-semibold">Calculate Total Fees</h4>
                    <p className="text-sm text-muted-foreground">
                      Sum all fees (commission, collection, shipping) to get total expenses.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      5
                    </div>
                    <h4 className="font-semibold">Calculate Profit</h4>
                    <p className="text-sm text-muted-foreground">
                      Subtract total fees from selling price to determine your net profit.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </>
  )
}