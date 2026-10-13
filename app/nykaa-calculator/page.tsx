// app/nykaa-calculator/page.tsx
"use client"

import { useState, useEffect } from "react"
import { Calculator, TrendingUp, PieChart, Smartphone, Zap, Shield, BarChart3, CheckCircle, AlertCircle, ShoppingBag, Tag, Percent, Truck, Package, CreditCard, Info } from "lucide-react"
import CalculatorHero from "@/components/calculator-hero"
import { CtaBand } from "@/components/page-sections"
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
import { Slider } from "@/components/ui/slider"

type PlatformType = "nykaa_main" | "nykaa_fashion"
type SellerType = "new_seller" | "existing_brand"

export default function NykaaCalculatorPage() {
  // State for calculator inputs
  const [platform, setPlatform] = useState<PlatformType>("nykaa_main")
  const [sellerType, setSellerType] = useState<SellerType>("new_seller")
  const [productPrice, setProductPrice] = useState("300")
  const [commissionRate, setCommissionRate] = useState(25)

  // State for results
  const [results, setResults] = useState({
    netEarnings: 0,
    profitMargin: 0,
    commissionAmount: 0,
    shippingCharge: 0,
    productPrice: 0,
    isShippingFree: false
  })

  // Calculate all fees
  const calculateFees = () => {
    const price = parseFloat(productPrice) || 0
    
    // Calculate commission
    const commissionAmount = price * (commissionRate / 100)
    
    // Calculate shipping based on platform and seller type
    let shippingCharge = 0
    let isShippingFree = false
    
    if (platform === "nykaa_main") {
      if (sellerType === "new_seller") {
        if (price >= 299) {
          shippingCharge = 0
          isShippingFree = true
        } else {
          shippingCharge = 40 // Default shipping charge for Nykaa Main below threshold
        }
      } else { // existing_brand
        if (price >= 149) {
          shippingCharge = 0
          isShippingFree = true
        } else {
          shippingCharge = 40 // Default shipping charge for Nykaa Main below threshold
        }
      }
    } else { // nykaa_fashion
      if (price >= 800) {
        shippingCharge = 0
        isShippingFree = true
      } else {
        shippingCharge = 99 // Fixed charge for Nykaa Fashion below ₹800
      }
    }
    
    // Calculate net earnings and profit margin
    const netEarnings = price - commissionAmount - shippingCharge
    const profitMargin = price > 0 ? (netEarnings / price) * 100 : 0

    setResults({
      netEarnings,
      profitMargin,
      commissionAmount,
      shippingCharge,
      productPrice: price,
      isShippingFree
    })
  }

  // Reset form
  const resetForm = () => {
    setPlatform("nykaa_main")
    setSellerType("new_seller")
    setProductPrice("300")
    setCommissionRate(25)
    setResults({
      netEarnings: 0,
      profitMargin: 0,
      commissionAmount: 0,
      shippingCharge: 0,
      productPrice: 0,
      isShippingFree: false
    })
  }

  useEffect(() => {
    if (productPrice) {
      calculateFees()
    }
  }, [platform, sellerType, productPrice, commissionRate])

  const steps = [
    {
      number: 1,
      title: "Enter Product Price",
      description: "Enter your intended selling price",
      icon: <Tag className="h-6 w-6" />
    },
    {
      number: 2,
      title: "Select Platform",
      description: "Choose Nykaa Main or Nykaa Fashion",
      icon: <ShoppingBag className="h-6 w-6" />
    },
    {
      number: 3,
      title: "Set Commission Rate",
      description: "Select commission percentage (15-30%)",
      icon: <Percent className="h-6 w-6" />
    },
    {
      number: 4,
      title: "Calculate Earnings",
      description: "Get detailed breakdown and net profit",
      icon: <Calculator className="h-6 w-6" />
    }
  ]

  const features = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Real-time Calculation",
      description: "Instant calculation of commissions and shipping charges"
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Detailed Breakdown",
      description: "Complete fee breakdown including commission and shipping"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Free Tool",
      description: "No registration required, use instantly"
    }
  ]

  const faqs = [
    {
      question: "What commission does Nykaa charge?",
      answer: "Nykaa seller commissions typically range from 15% to 30% depending on category, partnership level, and promotions."
    },
    {
      question: "Does the calculator include shipping or delivery fees?",
      answer: "Yes. It factors thresholds for Nykaa (Main) and Nykaa Fashion, including ₹99 below ₹800 on Fashion and free shipping above thresholds."
    },
    {
      question: "Can I change the commission percentage?",
      answer: "Absolutely. Use the slider to set any rate between 15% and 30% based on your Nykaa onboarding agreement."
    },
    {
      question: "How are shipping charges calculated?",
      answer: "Shipping charges vary by platform and seller type. Nykaa Main has free shipping above ₹299 for new sellers and ₹149 for existing brands. Nykaa Fashion has free shipping above ₹800."
    },
    {
      question: "What's the difference between Nykaa Main and Nykaa Fashion?",
      answer: "Nykaa Main focuses on Beauty & Personal Care products, while Nykaa Fashion focuses on Fashion & Lifestyle products with different commission structures."
    }
  ]

  return (
    <div className="calculator-page min-h-screen bg-background">
      {/* Hero Section */}
      <CalculatorHero
        href="/nykaa-calculator"
        title="Nykaa Seller"
        highlight="Commission Calculator"
        description="Calculate your Nykaa seller commissions, shipping charges, and maximize your profit margins"
        features={[
          { icon: CheckCircle, label: "Commission Calculator" },
          { icon: TrendingUp, label: "Profit Calculator" },
          { icon: Percent, label: "15-30% Commission Range" },
        ]}
      />

      {/* Main Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Calculator */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Calculator className="h-6 w-6" />
                  Nykaa Seller Profit Calculator
                </CardTitle>
                <CardDescription>
                  Calculate your exact profit margins with accurate commission and shipping breakdowns
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Step-by-Step Guide */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">How to use our calculator:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {steps.map((step) => (
                      <div key={step.number} className="text-center">
                        <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-2">
                          <div className="text-primary">
                            {step.icon}
                          </div>
                        </div>
                        <div className="text-xs font-medium bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2">
                          {step.number}
                        </div>
                        <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Step 1: Product Price */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Step 1: Enter Product Selling Price (₹)</h3>
                    <div className="space-y-2">
                      <Input
                        type="number"
                        placeholder="Enter product price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        className="text-lg py-6"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Enter your intended selling price on Nykaa
                    </p>
                  </div>

                  {/* Step 2: Platform Selection */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Step 2: Select Platform</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div 
                        className={`border-2 rounded-2xl p-4 text-center cursor-pointer transition-all ${
                          platform === "nykaa_main" 
                            ? "border-primary bg-primary/5" 
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setPlatform("nykaa_main")}
                      >
                        <div className="font-semibold">Nykaa (Main)</div>
                        <div className="text-sm text-muted-foreground">
                          Beauty & Personal Care
                        </div>
                      </div>
                      <div 
                        className={`border-2 rounded-2xl p-4 text-center cursor-pointer transition-all ${
                          platform === "nykaa_fashion" 
                            ? "border-primary bg-primary/5" 
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setPlatform("nykaa_fashion")}
                      >
                        <div className="font-semibold">Nykaa Fashion</div>
                        <div className="text-sm text-muted-foreground">
                          Fashion & Lifestyle
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Seller Type */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Step 3: Select Seller Type</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div 
                        className={`border-2 rounded-2xl p-4 text-center cursor-pointer transition-all ${
                          sellerType === "new_seller" 
                            ? "border-primary bg-primary/5" 
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setSellerType("new_seller")}
                      >
                        <div className="font-semibold">New Seller</div>
                        <div className="text-sm text-muted-foreground">
                          Free shipping above ₹299
                        </div>
                      </div>
                      <div 
                        className={`border-2 rounded-2xl p-4 text-center cursor-pointer transition-all ${
                          sellerType === "existing_brand" 
                            ? "border-primary bg-primary/5" 
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setSellerType("existing_brand")}
                      >
                        <div className="font-semibold">Existing Brand</div>
                        <div className="text-sm text-muted-foreground">
                          Free shipping above ₹149
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Commission Rate */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Step 4: Set Commission Rate ({commissionRate}%)</h3>
                    <div className="space-y-4">
                      <Slider
                        defaultValue={[25]}
                        max={30}
                        min={15}
                        step={1}
                        value={[commissionRate]}
                        onValueChange={(value) => setCommissionRate(value[0])}
                        className="w-full"
                      />
                      <div className="flex justify-between">
                        <span className="text-sm">15%</span>
                        <span className="text-sm">25%</span>
                        <span className="text-sm">30%</span>
                      </div>
                      <div className="flex justify-center gap-2">
                        {[15, 25, 30].map((rate) => (
                          <Button
                            key={rate}
                            variant={commissionRate === rate ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCommissionRate(rate)}
                            className={commissionRate === rate ? "bg-primary hover:bg-primary/90" : ""}
                          >
                            {rate}%
                          </Button>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Use the rate agreed with Nykaa during onboarding for accurate results
                    </p>
                  </div>

                  {/* Step 5: Calculate Button */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Step 5: Calculate & Analyze</h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button onClick={calculateFees} size="lg" className="sm:flex-1 bg-primary hover:bg-primary/90">
                        Calculate Earnings
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
            {results.productPrice > 0 && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <BarChart3 className="h-6 w-6" />
                    Calculation Results
                  </CardTitle>
                  <CardDescription>
                    Complete breakdown of Nykaa seller commissions and charges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className=" p-4 rounded-lg border border-primary/20">
                      <p className="text-sm text-muted-foreground">Net Earnings</p>
                      <p className="text-3xl font-bold text-foreground">
                        ₹{results.netEarnings.toFixed(2)}
                      </p>
                    </div>
                    <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/25">
                      <p className="text-sm text-muted-foreground">Profit Margin</p>
                      <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                        {results.profitMargin.toFixed(1)}%
                      </p>
                    </div>
                  </div>

                  {/* Detailed Breakdown */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Detailed Breakdown:</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Product Price:</span>
                        <span className="font-semibold">₹{results.productPrice.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Commission ({commissionRate}%):</span>
                        <span className="text-red-600 dark:text-red-400">- ₹{results.commissionAmount.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Shipping Charge:</span>
                        <span className={results.isShippingFree ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                          {results.isShippingFree ? "Free" : `- ₹${results.shippingCharge.toFixed(2)}`}
                        </span>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex justify-between text-lg font-bold">
                        <span>Your Net Earnings:</span>
                        <span className="text-green-600 dark:text-green-400">₹{results.netEarnings.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    {/* Shipping Information */}
                    <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/25">
                      <div className="flex items-start gap-2">
                        <Info className="h-4 w-4 text-blue-700 dark:text-blue-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Shipping Information:</p>
                          <p className="text-xs text-blue-700 dark:text-blue-300">
                            {sellerType === "new_seller" 
                              ? "New Sellers: Free shipping above ₹299, charges apply below"
                              : "Existing Brands: Free shipping above ₹149, charges apply below"}
                          </p>
                        </div>
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
                      <div className="p-3 bg-primary/15 rounded-full">
                        <div className="text-primary">
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

            {/* Shipping Charges Breakdown Table */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Charges Breakdown
                </CardTitle>
                <CardDescription>
                  Complete shipping charges structure for Nykaa platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Platform</TableHead>
                      <TableHead>Seller Type</TableHead>
                      <TableHead>Order Value Threshold</TableHead>
                      <TableHead>Shipping Charge</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell rowSpan={2} className="font-medium">Nykaa (Main)</TableCell>
                      <TableCell>New Sellers</TableCell>
                      <TableCell>Below ₹299</TableCell>
                      <TableCell>Applicable</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>New Sellers</TableCell>
                      <TableCell>Above ₹299</TableCell>
                      <TableCell className="text-green-600 dark:text-green-400">Free</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell rowSpan={2} className="font-medium">Nykaa (Main)</TableCell>
                      <TableCell>Existing Brands</TableCell>
                      <TableCell>Below ₹149</TableCell>
                      <TableCell>Applicable</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Existing Brands</TableCell>
                      <TableCell>Above ₹149</TableCell>
                      <TableCell className="text-green-600 dark:text-green-400">Free</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell rowSpan={2} className="font-medium">Nykaa Fashion</TableCell>
                      <TableCell>All Sellers</TableCell>
                      <TableCell>Below ₹800</TableCell>
                      <TableCell>₹99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>All Sellers</TableCell>
                      <TableCell>Above ₹800</TableCell>
                      <TableCell className="text-green-600 dark:text-green-400">Free</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
                <div className="mt-4 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                  <h4 className="text-sm font-medium text-yellow-700 dark:text-yellow-300 mb-2">Important Notes:</h4>
                  <ul className="text-xs text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• Commission rates may vary during special promotional periods</li>
                    <li>• Shipping charges are subject to change based on Nykaa's current policies</li>
                    <li>• Additional charges may apply for returns, cancellations, and customer service</li>
                    <li>• GST and other taxes are calculated separately and not included in this calculator</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Info & Tips */}
          <div className="space-y-8">
            {/* What is Nykaa Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Why Calculate Nykaa Seller Commissions?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Understanding Nykaa seller commissions (15-30%) helps you optimize pricing strategies to maximize your Nykaa seller profit while staying competitive in the beauty and fashion marketplace.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Maximize Profit:</strong> Optimize pricing strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Accurate Calculation:</strong> Set the right selling price</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Plan Earnings:</strong> Better cash flow management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Competitive Analysis:</strong> Determine break-even points</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Nykaa Commission Structure */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Nykaa Seller Commission Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Nykaa Seller Commission Range</h4>
                    <p className="text-sm text-primary">
                      Nykaa seller commissions range from 15% to 30% on product sales, varying by category and brand partnership level.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Factors Affecting Commissions:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/15 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          1
                        </div>
                        <span>Product category (beauty, skincare, fashion)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/15 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          2
                        </div>
                        <span>Brand exclusivity and partnership level</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/15 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          3
                        </div>
                        <span>Sales volume and performance metrics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Tips Section */}
            <Card>
              <CardHeader>
                <CardTitle>Pro Tips for Nykaa Sellers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="bg-primary/15 text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      💡
                    </div>
                    <div>
                      <p className="text-sm font-medium">Use Default Commission Rate</p>
                      <p className="text-xs text-muted-foreground">Use the default 25% Nykaa seller commission rate as a starting point</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-primary/15 text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      🚚
                    </div>
                    <div>
                      <p className="text-sm font-medium">Optimize for Free Shipping</p>
                      <p className="text-xs text-muted-foreground">Consider Nykaa shipping thresholds when pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-primary/15 text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      📊
                    </div>
                    <div>
                      <p className="text-sm font-medium">Factor in Product Costs</p>
                      <p className="text-xs text-muted-foreground">Consider product cost and desired profit margin when setting prices</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features of Our Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real-time calculation of Nykaa seller commissions (15-30%)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automatic shipping charge calculation based on order value</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Instant profit margin analysis for better pricing decisions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Support for both Nykaa Main and Nykaa Fashion platforms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Free tool with no registration required</span>
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
              <CardTitle className="text-2xl">Maximize Your Nykaa Seller Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Use our Nykaa seller profit calculator to make data-driven pricing decisions. By understanding exact commission rates and shipping charges, you can set competitive prices while maintaining healthy profit margins on the Nykaa marketplace.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">15-30%</div>
                    <div className="text-sm text-muted-foreground">Commission Rate Range</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">₹149-₹299</div>
                    <div className="text-sm text-muted-foreground">Free Shipping Threshold</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">5 Steps</div>
                    <div className="text-sm text-muted-foreground">Simple Calculation Process</div>
                  </div>
                </div>
                
                <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-3 text-primary">Start Calculating Your Nykaa Seller Profit Today</h4>
                  <p className="text-sm text-primary">
                    Enter your product price above to instantly calculate Nykaa seller commissions, shipping charges, and net profit. Our calculator supports all Nykaa commission rates from 15% to 30%, helping you make informed decisions about your product pricing strategy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <CtaBand
        title="Want an expert to manage your seller account?"
        description="Our team handles listings, ads and account health so your margins keep improving. Book a free consultation."
      />
    </div>
  )
}