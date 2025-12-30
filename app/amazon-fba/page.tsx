"use client"

import { useState, useEffect } from "react"
import { Calculator, TrendingUp, PieChart, Smartphone, Zap, Shield, BarChart3, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
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
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

// Define types
type CategoryType = {
  name: string
  subcategories: {
    name: string
    priceRanges: {
      min: number
      max: number
      feePercent: number
    }[]
  }[]
}

export default function AmazonFBACalculatorPage() {
  // State for calculator inputs
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedSubcategory, setSelectedSubcategory] = useState("")
  const [sellingPrice, setSellingPrice] = useState("")
  const [costPrice, setCostPrice] = useState("")
  const [packageWeight, setPackageWeight] = useState("500")
  const [dimensions, setDimensions] = useState({ length: "20", width: "15", height: "5" })
  const [fulfillmentMethod, setFulfillmentMethod] = useState("fba")
  const [shippingRegion, setShippingRegion] = useState("local")
  const [stepLevel, setStepLevel] = useState("standard")
  const [gstPercent, setGstPercent] = useState("18")
  const [additionalCosts, setAdditionalCosts] = useState("")

  // State for results
  const [results, setResults] = useState({
    referralFee: 0,
    closingFee: 0,
    shippingFee: 0,
    pickPackFee: 0,
    storageFee: 0,
    gstAmount: 0,
    totalFees: 0,
    profit: 0,
    margin: 0,
    revenue: 0
  })

  // Complete categories data with all categories and subcategories
// Update the categories with exact fee percentages from PDF
const categories: CategoryType[] = [
  {
    name: "Automotive",
    subcategories: [
      {
        name: "Helmets & Riding Gloves",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 1000, feePercent: 6.5 },
          { min: 1001, max: Infinity, feePercent: 8.5 }
        ]
      },
      {
        name: "Tyres & Rims",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 5 },
          { min: 501, max: Infinity, feePercent: 7 }
        ]
      },
      {
        name: "Vehicles – 2-Wheelers, 4-Wheelers & Electric Vehicles",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 50000, feePercent: 5 },
          { min: 50001, max: Infinity, feePercent: 2 }
        ]
      },
      {
        name: "Car & Bike Parts, Brakes, Engine, Exhaust, Suspension, Wipers, Body Fittings",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 14 },
          { min: 501, max: 1000, feePercent: 15 },
          { min: 1001, max: Infinity, feePercent: 16 }
        ]
      },
      {
        name: "Cleaning Kits, Car Interior/Exterior Care, Lighting & Paints",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 11 },
          { min: 501, max: Infinity, feePercent: 13 }
        ]
      },
      {
        name: "Accessories (Floor Mats, Covers, Riding Gear)",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 14 }
        ]
      },
      {
        name: "Vehicle Tools & Appliances",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 8 },
          { min: 501, max: Infinity, feePercent: 8.5 }
        ]
      },
      {
        name: "Oils, Lubricants",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 10.5 },
          { min: 501, max: Infinity, feePercent: 11.5 }
        ]
      },
      {
        name: "Batteries & Air Fresheners",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 8.5 }
        ]
      },
      {
        name: "Car Electronics – Devices",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 7.5 },
          { min: 501, max: 1000, feePercent: 9.5 },
          { min: 1001, max: Infinity, feePercent: 12 }
        ]
      },
      {
        name: "Car Electronics – Accessories",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 10.5 },
          { min: 501, max: 1000, feePercent: 11 },
          { min: 1001, max: Infinity, feePercent: 15 }
        ]
      }
    ]
  },
  {
    name: "Baby Products, Toys & Education",
    subcategories: [
      {
        name: "Baby Hardlines (Swings, Bouncers, Carriers, Safety, Décor, Furniture, Car Seats & Accessories)",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 10 },
          { min: 501, max: 1000, feePercent: 9 },
          { min: 1001, max: Infinity, feePercent: 6.5 }
        ]
      },
      {
        name: "Baby Strollers",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 6 },
          { min: 501, max: 1000, feePercent: 8 },
          { min: 1001, max: Infinity, feePercent: 9 }
        ]
      },
      {
        name: "Baby Diapers",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 5.5 },
          { min: 501, max: Infinity, feePercent: 9.5 }
        ]
      },
      {
        name: "Toys – Drones",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 30 }
        ]
      },
      {
        name: "Toys – Party Supplies (Balloons, Banners, Masks, Confetti, etc.)",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 1000, feePercent: 8.5 },
          { min: 1001, max: Infinity, feePercent: 12.5 }
        ]
      },
      {
        name: "Toys – Games & Puzzles, Board Games, Adult Games, Building Sets",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 1000, feePercent: 8.5 },
          { min: 1001, max: Infinity, feePercent: 12.5 }
        ]
      },
      {
        name: "Toys – Infant & Pre-school Toys (Electronic/Non-Electronic)",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 1000, feePercent: 8.5 },
          { min: 1001, max: Infinity, feePercent: 11.5 }
        ]
      },
      {
        name: "Toys – Outdoor, Activity & Sports Toys",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 9.5 },
          { min: 501, max: Infinity, feePercent: 10.5 }
        ]
      },
      {
        name: "Toys – Plush Toys, Action Figures & Dolls",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 10.5 }
        ]
      },
      {
        name: "Toys – Remote & Non-Remote Controlled Vehicles & Vehicle Sets",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 8.5 },
          { min: 501, max: 1000, feePercent: 10.5 },
          { min: 1001, max: Infinity, feePercent: 12.5 }
        ]
      },
      {
        name: "Toys – STEM, Art & Craft, Learning & Development",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 1000, feePercent: 8.5 },
          { min: 1001, max: Infinity, feePercent: 11.5 }
        ]
      },
      {
        name: "Baby & Kids Furniture and Home Décor",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 8.5 },
          { min: 501, max: 1000, feePercent: 6 },
          { min: 1001, max: Infinity, feePercent: 8.5 }
        ]
      },
      {
        name: "Baby Walker",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 9.5 },
          { min: 501, max: 1000, feePercent: 7 },
          { min: 1001, max: Infinity, feePercent: 5 }
        ]
      }
    ]
  },
  {
    name: "Books, Music, Movies, Video Games & Entertainment",
    subcategories: [
      {
        name: "Books",
        priceRanges: [
          { min: 0, max: 250, feePercent: 3 },
          { min: 251, max: 500, feePercent: 4.5 },
          { min: 501, max: 1000, feePercent: 9 },
          { min: 1001, max: Infinity, feePercent: 13.5 }
        ]
      },
      {
        name: "School Textbook Bundles",
        priceRanges: [
          { min: 0, max: 250, feePercent: 2 },
          { min: 251, max: 1000, feePercent: 3 },
          { min: 1001, max: 1500, feePercent: 4 },
          { min: 1501, max: Infinity, feePercent: 4.5 }
        ]
      },
      {
        name: "Movies",
        priceRanges: [
          { min: 0, max: Infinity, feePercent: 6.5 }
        ]
      },
      {
        name: "Music",
        priceRanges: [
          { min: 0, max: Infinity, feePercent: 6.5 }
        ]
      },
      {
        name: "Email Gift Cards",
        priceRanges: [
          { min: 0, max: Infinity, feePercent: 0 }
        ]
      },
      {
        name: "Musical Instruments – Guitars",
        priceRanges: [
          { min: 0, max: 500, feePercent: 10 },
          { min: 501, max: 1000, feePercent: 8 },
          { min: 1001, max: Infinity, feePercent: 10 }
        ]
      },
      {
        name: "Musical Instruments – Keyboards",
        priceRanges: [
          { min: 0, max: 500, feePercent: 8 },
          { min: 501, max: 1000, feePercent: 12 },
          { min: 1001, max: Infinity, feePercent: 8 }
        ]
      },
      {
        name: "Musical Instruments – Microphones",
        priceRanges: [
          { min: 0, max: 1000, feePercent: 9.5 },
          { min: 1001, max: Infinity, feePercent: 11.5 }
        ]
      },
      {
        name: "Musical Instruments – Others",
        priceRanges: [
          { min: 0, max: 300, feePercent: 10 },
          { min: 301, max: 500, feePercent: 7 },
          { min: 501, max: 1000, feePercent: 10.5 },
          { min: 1001, max: Infinity, feePercent: 11 }
        ]
      },
      {
        name: "Musical Instruments – DJ & VJ Equipment, Recording, Computer, Cables, PA & Stage",
        priceRanges: [
          { min: 0, max: 300, feePercent: 6 },
          { min: 301, max: 500, feePercent: 4.5 },
          { min: 501, max: 1000, feePercent: 5.5 },
          { min: 1001, max: Infinity, feePercent: 11 }
        ]
      },
      {
        name: "Video Games – Online Game Services",
        priceRanges: [
          { min: 0, max: 1000, feePercent: 0 },
          { min: 1001, max: 2000, feePercent: 2 },
          { min: 2001, max: Infinity, feePercent: 3 }
        ]
      },
      {
        name: "Video Games – Accessories",
        priceRanges: [
          { min: 0, max: 500, feePercent: 10.5 },
          { min: 501, max: 1000, feePercent: 12.5 },
          { min: 1001, max: Infinity, feePercent: 13.5 }
        ]
      },
      {
        name: "Video Games – Consoles",
        priceRanges: [
          { min: 0, max: 500, feePercent: 7 },
          { min: 501, max: 1000, feePercent: 5 },
          { min: 1001, max: Infinity, feePercent: 9 }
        ]
      },
      {
        name: "Video Games – Other Products",
        priceRanges: [
          { min: 0, max: 500, feePercent: 9 },
          { min: 501, max: 1000, feePercent: 10 },
          { min: 1001, max: Infinity, feePercent: 12 }
        ]
      }
    ]
  },
  {
    name: "Industrial, Medical, Scientific Supplies & Office Products",
    subcategories: [
      {
        name: "Business & Industrial - Scientific Supplies",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 15000, feePercent: 11.5 },
          { min: 15001, max: Infinity, feePercent: 7 }
        ]
      },
      {
        name: "OTC Medicine",
        priceRanges: [
          { min: 0, max: 500, feePercent: 12 },
          { min: 501, max: Infinity, feePercent: 15 }
        ]
      },
      {
        name: "Masks",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 8 }
        ]
      },
      {
        name: "Weighing Scales & Fat Analyzers",
        priceRanges: [
          { min: 0, max: 300, feePercent: 11 },
          { min: 301, max: 500, feePercent: 10.5 },
          { min: 501, max: Infinity, feePercent: 13.5 }
        ]
      },
      {
        name: "Business & Industrial - Electrical Testing Equipment",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 6 }
        ]
      },
      {
        name: "Business & Industrial - Commercial Food Equipment",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 5.5 }
        ]
      },
      {
        name: "Body Support - Wearables and Soft Aids",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 6 }
        ]
      },
      {
        name: "Stethoscopes",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 10.5 }
        ]
      },
      {
        name: "Packing Materials",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 5 }
        ]
      },
      {
        name: "Power & Hand Tools and Water Dispenser",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 8 },
          { min: 501, max: Infinity, feePercent: 10 }
        ]
      },
      {
        name: "Office Products - Office Supplies",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 10 },
          { min: 501, max: 1000, feePercent: 12 },
          { min: 1001, max: Infinity, feePercent: 13 }
        ]
      },
      {
        name: "Office Furniture - Study Table, Office & Gaming Chairs",
        priceRanges: [
          { min: 0, max: 1000, feePercent: 16.5 },
          { min: 1001, max: 15000, feePercent: 15.5 },
          { min: 15001, max: Infinity, feePercent: 11 }
        ]
      },
      {
        name: "Office Products - Electronic Devices",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 4.5 },
          { min: 501, max: 1000, feePercent: 10.5 },
          { min: 1001, max: Infinity, feePercent: 11.5 }
        ]
      },
      {
        name: "Office Products - Arts and Crafts",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 2 },
          { min: 501, max: Infinity, feePercent: 5 }
        ]
      },
      {
        name: "Office Products - Writing Instruments",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 1000, feePercent: 11 },
          { min: 1001, max: Infinity, feePercent: 14 }
        ]
      }
    ]
  },
  {
    name: "Clothing, Fashion, Jewellery, Luggage & Shoes",
    subcategories: [
      {
        name: "Apparel – Accessories",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 13 },
          { min: 501, max: 1000, feePercent: 17 },
          { min: 1001, max: Infinity, feePercent: 19 }
        ]
      },
      {
        name: "Apparel – Sweat Shirts and Jackets",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 14 },
          { min: 501, max: Infinity, feePercent: 18 }
        ]
      },
      {
        name: "Apparel – Shorts",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 2 },
          { min: 501, max: 1000, feePercent: 19.5 },
          { min: 1001, max: Infinity, feePercent: 24 }
        ]
      },
      {
        name: "Apparel – Baby",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 7 }
        ]
      },
      {
        name: "Apparel – Ethnic Wear",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 1 },
          { min: 501, max: 1000, feePercent: 10 },
          { min: 1001, max: Infinity, feePercent: 16.5 }
        ]
      },
      {
        name: "Watches",
        priceRanges: [
          { min: 0, max: 300, feePercent: 14 },
          { min: 301, max: 500, feePercent: 8 },
          { min: 501, max: Infinity, feePercent: 15 }
        ]
      }
    ]
  },
  {
    name: "Electronics (Camera, Mobile, PC, Wireless) & Accessories",
    subcategories: [
      {
        name: "Mobile Phones",
        priceRanges: [
          { min: 0, max: Infinity, feePercent: 5 }
        ]
      },
      {
        name: "Laptops",
        priceRanges: [
          { min: 0, max: 70000, feePercent: 6 },
          { min: 70001, max: Infinity, feePercent: 7 }
        ]
      },
      {
        name: "Headphones & Earphones",
        priceRanges: [
          { min: 0, max: 500, feePercent: 18 },
          { min: 501, max: Infinity, feePercent: 18 }
        ]
      },
      {
        name: "Power Banks & Chargers",
        priceRanges: [
          { min: 0, max: 1000, feePercent: 20 }
        ]
      },
      {
        name: "Cases & Covers",
        priceRanges: [
          { min: 0, max: Infinity, feePercent: 25 }
        ]
      }
    ]
  },
  {
    name: "Grocery, Food & Pet Supplies",
    subcategories: [
      {
        name: "Grocery - Herbs and Spices",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 1000, feePercent: 5.5 },
          { min: 1001, max: Infinity, feePercent: 8 }
        ]
      },
      {
        name: "Grocery & Gourmet - Oils",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 1.5 },
          { min: 501, max: 1000, feePercent: 7.5 },
          { min: 1001, max: Infinity, feePercent: 9 }
        ]
      },
      {
        name: "Grocery - Dried Fruits and Nuts",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 6 },
          { min: 501, max: 1000, feePercent: 8 },
          { min: 1001, max: Infinity, feePercent: 9 }
        ]
      },
      {
        name: "Grocery - Hampers and Gifting",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 5 },
          { min: 501, max: 1000, feePercent: 9 },
          { min: 1001, max: Infinity, feePercent: 11.5 }
        ]
      },
      {
        name: "Grocery & Gourmet - Beverages",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 6 },
          { min: 501, max: 1000, feePercent: 7 },
          { min: 1001, max: Infinity, feePercent: 10 }
        ]
      },
      {
        name: "Pet Food",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 1000, feePercent: 11.5 },
          { min: 1001, max: Infinity, feePercent: 12.5 }
        ]
      },
      {
        name: "Pet - Aquatics Supplies",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 10.5 },
          { min: 501, max: Infinity, feePercent: 14 }
        ]
      },
      {
        name: "Pet Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 2 },
          { min: 301, max: 500, feePercent: 10.5 },
          { min: 501, max: Infinity, feePercent: 12 }
        ]
      },
      {
        name: "Pet Comforters (Bed, Feeder, Cages, Carriers, Crates, Kennels, Doors)",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 10.5 },
          { min: 501, max: 1000, feePercent: 11 },
          { min: 1001, max: Infinity, feePercent: 12.5 }
        ]
      },
      {
        name: "Pet Essentials (Health Care, Grooming, Bath Supplies, Supplements, Tick/Flea, Dental)",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 12.5 },
          { min: 501, max: 1000, feePercent: 13 },
          { min: 1001, max: Infinity, feePercent: 14 }
        ]
      },
      {
        name: "Pet Accessories (Apparel, Collar, Leash, Harness)",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 11 },
          { min: 501, max: Infinity, feePercent: 12.5 }
        ]
      }
    ]
  },
  {
    name: "Health, Beauty, Personal Care & Personal  Appliances",
    subcategories: [
      {
        name: "Beauty - Fragrance",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 12.5 },
          { min: 501, max: Infinity, feePercent: 14 }
        ]
      },
      {
        name: "Beauty - Haircare, Bath and Shower",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 5 },
          { min: 501, max: Infinity, feePercent: 8 }
        ]
      },
      {
        name: "Beauty - Makeup",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 2 },
          { min: 501, max: 1000, feePercent: 3.5 },
          { min: 1001, max: Infinity, feePercent: 7 }
        ]
      },
      {
        name: "Face Wash",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 5 },
          { min: 501, max: 1000, feePercent: 9 },
          { min: 1001, max: Infinity, feePercent: 9.5 }
        ]
      },
      {
        name: "Moisturizer Cream",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 6.5 },
          { min: 501, max: 1000, feePercent: 9 },
          { min: 1001, max: Infinity, feePercent: 9.5 }
        ]
      },
      {
        name: "Sunscreen",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 6 },
          { min: 501, max: 1000, feePercent: 9 },
          { min: 1001, max: Infinity, feePercent: 9.5 }
        ]
      },
      {
        name: "Deodorants",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 1000, feePercent: 6.5 },
          { min: 1001, max: Infinity, feePercent: 7 }
        ]
      },
      {
        name: "Facial Steamers",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 2.5 },
          { min: 501, max: Infinity, feePercent: 7 }
        ]
      },
      {
        name: "Health & Personal Care - Ayurvedic, Oral Care, Sanitizers, Pooja Supplies",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 6 },
          { min: 501, max: Infinity, feePercent: 7 }
        ]
      },
      {
        name: "Health & Household - Sports Nutrition & Meal Replacement Shakes",
        priceRanges: [
          { min: 0, max: Infinity, feePercent: 9 }
        ]
      },
      {
        name: "Health & Household - Cleaning, Laundry, Air Fresheners, Hygiene",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 4.5 },
          { min: 501, max: Infinity, feePercent: 6 }
        ]
      }
    ]
  },
  {
    name: "Home, Décor, Furniture, Outdoor, Lawn & Garden",
    subcategories: [
      {
        name: "Bean Bags & Inflatables",
        priceRanges: [
          { min: 0, max: Infinity, feePercent: 8 }
        ]
      },
      {
        name: "Mattresses",
        priceRanges: [
          { min: 0, max: 1000, feePercent: 25.5 },
          { min: 1001, max: 20000, feePercent: 16 },
          { min: 20001, max: Infinity, feePercent: 13.5 }
        ]
      },
      {
        name: "Rugs and Doormats",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 2 },
          { min: 501, max: Infinity, feePercent: 9 }
        ]
      },
      {
        name: "Clocks",
        priceRanges: [
          { min: 0, max: 500, feePercent: 0 },
          { min: 501, max: 1000, feePercent: 9 },
          { min: 1001, max: Infinity, feePercent: 10 }
        ]
      },
      {
        name: "Wall Art",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 11 },
          { min: 501, max: Infinity, feePercent: 13.5 }
        ]
      },
      {
        name: "Home - Fragrance & Candles",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 6 },
          { min: 501, max: Infinity, feePercent: 12.5 }
        ]
      },
      {
        name: "Bedsheets, Blankets and Covers",
        priceRanges: [
          { min: 0, max: 500, feePercent: 0 },
          { min: 501, max: 1000, feePercent: 7 },
          { min: 1001, max: Infinity, feePercent: 8.5 }
        ]
      },
      {
        name: "Home Furnishing (Excluding Curtain and Accessories)",
        priceRanges: [
          { min: 0, max: 500, feePercent: 0 },
          { min: 501, max: 1000, feePercent: 7 },
          { min: 1001, max: Infinity, feePercent: 11 }
        ]
      },
      {
        name: "Containers, Boxes, Bottles & Kitchen Storage",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 5 },
          { min: 501, max: Infinity, feePercent: 12 }
        ]
      },
      {
        name: "Home Improvement - Accessories",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 2.5 },
          { min: 501, max: Infinity, feePercent: 13.5 }
        ]
      },
      {
        name: "Home Decor Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 3 },
          { min: 501, max: 1000, feePercent: 12 },
          { min: 1001, max: Infinity, feePercent: 17 }
        ]
      },
      {
        name: "Indoor Lighting",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 6 },
          { min: 501, max: 1000, feePercent: 14.5 },
          { min: 1001, max: Infinity, feePercent: 12.5 }
        ]
      },
      {
        name: "Curtains and Accessories",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 16.5 },
          { min: 501, max: 1000, feePercent: 11.5 },
          { min: 1001, max: Infinity, feePercent: 16.5 }
        ]
      },
      {
        name: "Lawn & Garden - Plants, Seeds & Bulbs",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 9.5 },
          { min: 501, max: 1000, feePercent: 11.5 },
          { min: 1001, max: Infinity, feePercent: 11 }
        ]
      }
    ]
  },
  {
    name: "Kitchen, Large & Small Appliances",
    subcategories: [
      {
        name: "Kitchen - Glassware & Ceramicware",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 4 },
          { min: 501, max: 1000, feePercent: 11 },
          { min: 1001, max: Infinity, feePercent: 12.5 }
        ]
      },
      {
        name: "Kitchen - Gas Stoves & Pressure Cookers",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 1500, feePercent: 6 },
          { min: 1501, max: Infinity, feePercent: 10 }
        ]
      },
      {
        name: "Cookware, Tableware & Dinnerware",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 5 },
          { min: 501, max: 1000, feePercent: 9 },
          { min: 1001, max: Infinity, feePercent: 12.5 }
        ]
      },
      {
        name: "Kitchen Tools & Supplies - Choppers, Knives, Bakeware & Accessories",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 5 },
          { min: 501, max: Infinity, feePercent: 12.5 }
        ]
      },
      {
        name: "Large Appliances (excl. Accessories, Refrigerators and Chimneys)",
        priceRanges: [
          { min: 0, max: Infinity, feePercent: 5.5 }
        ]
      },
      {
        name: "Large Appliances - Accessories",
        priceRanges: [
          { min: 0, max: Infinity, feePercent: 16 }
        ]
      },
      {
        name: "Large Appliances - Chimneys",
        priceRanges: [
          { min: 0, max: Infinity, feePercent: 9.5 }
        ]
      },
      {
        name: "Large Appliances – Refrigerators",
        priceRanges: [
          { min: 0, max: Infinity, feePercent: 5 }
        ]
      },
      {
        name: "Small Appliances",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 1000, feePercent: 6.5 },
          { min: 1001, max: 5000, feePercent: 4.5 },
          { min: 5001, max: Infinity, feePercent: 8 }
        ]
      },
      {
        name: "Fans and Robotic Vacuums",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 3000, feePercent: 6.5 },
          { min: 3001, max: Infinity, feePercent: 8 }
        ]
      }
    ]
  },
  {
    name: "Sports, Gym & Sporting Equipment",
    subcategories: [
      {
        name: "Bicycles",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 1000, feePercent: 5.5 },
          { min: 1001, max: Infinity, feePercent: 6 }
        ]
      },
      {
        name: "Gym Equipments",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 6 },
          { min: 501, max: 1000, feePercent: 10 },
          { min: 1001, max: 35000, feePercent: 12 },
          { min: 35001, max: Infinity, feePercent: 10 }
        ]
      },
      {
        name: "Sports - Cricket & Badminton Equipments, Tennis, Table Tennis, Squash, Football, Volleyball, Basketball, Throwball, Swimming",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 6 },
          { min: 501, max: 1000, feePercent: 8 },
          { min: 1001, max: Infinity, feePercent: 8.5 }
        ]
      },
      {
        name: "Sports Collectibles",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 17 }
        ]
      },
      {
        name: "Sports - Cricket Bats, Badminton Racquets, Tennis Racquets, Pickleball Paddles, Squash Racquets & TT Tables",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 5 },
          { min: 501, max: 1000, feePercent: 7 },
          { min: 1001, max: Infinity, feePercent: 7.5 }
        ]
      },
      {
        name: "Sports & Outdoors - Footwear",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 12.5 },
          { min: 501, max: 1000, feePercent: 14.5 },
          { min: 1001, max: Infinity, feePercent: 16 }
        ]
      }
    ]
  },
  {
    name: "Others",
    subcategories: [
      {
        name: "Coin Collectibles",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 15 }
        ]
      },
      {
        name: "Silver Coins & Bars",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 5 }
        ]
      },
      {
        name: "Furniture - Other Products",
        priceRanges: [
          { min: 0, max: 1000, feePercent: 13.5 },
          { min: 1001, max: 15000, feePercent: 15.5 },
          { min: 15001, max: Infinity, feePercent: 11 }
        ]
      },
      {
        name: "Toys - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 1000, feePercent: 9.5 },
          { min: 1001, max: Infinity, feePercent: 11.5 }
        ]
      },
      {
        name: "Grocery & Gourmet - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 1000, feePercent: 7 },
          { min: 1001, max: Infinity, feePercent: 9 }
        ]
      },
      {
        name: "Office - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 10 },
          { min: 501, max: 1000, feePercent: 10.5 },
          { min: 1001, max: Infinity, feePercent: 11.5 }
        ]
      },
      {
        name: "Personal Care Appliances - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 7.5 },
          { min: 301, max: 500, feePercent: 10.5 },
          { min: 501, max: 1000, feePercent: 11 },
          { min: 1001, max: Infinity, feePercent: 7.5 }
        ]
      },
      {
        name: "Beauty - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 7 },
          { min: 501, max: Infinity, feePercent: 9 }
        ]
      },
      {
        name: "Health & Personal Care - Other Household Supplies",
        priceRanges: [
          { min: 0, max: 500, feePercent: 4.5 },
          { min: 501, max: Infinity, feePercent: 6.5 }
        ]
      },
      {
        name: "Health & Household - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: Infinity, feePercent: 11.5 }
        ]
      },
      {
        name: "Business & Industrial Supplies - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 15000, feePercent: 8 },
          { min: 15001, max: Infinity, feePercent: 5 }
        ]
      },
      {
        name: "Kitchen - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 5 },
          { min: 501, max: 1000, feePercent: 11.5 },
          { min: 1001, max: Infinity, feePercent: 12.5 }
        ]
      },
      {
        name: "Lawn & Garden - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 9 },
          { min: 301, max: 15000, feePercent: 10 },
          { min: 15001, max: Infinity, feePercent: 5 }
        ]
      },
      {
        name: "Luggage - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 9 },
          { min: 501, max: Infinity, feePercent: 8 }
        ]
      },
      {
        name: "Baby - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 6.5 },
          { min: 501, max: 1000, feePercent: 8 },
          { min: 1001, max: Infinity, feePercent: 7.5 }
        ]
      },
      {
        name: "Pet - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 10.5 },
          { min: 501, max: Infinity, feePercent: 12 }
        ]
      },
      {
        name: "Apparel - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 4.5 },
          { min: 501, max: 1000, feePercent: 11 },
          { min: 1001, max: Infinity, feePercent: 19 }
        ]
      },
      {
        name: "Home - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 5 },
          { min: 501, max: 1000, feePercent: 13 },
          { min: 1001, max: Infinity, feePercent: 18 }
        ]
      },
      {
        name: "Home Improvement - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 4.5 },
          { min: 501, max: Infinity, feePercent: 13.5 }
        ]
      },
      {
        name: "Indoor Lighting - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 8.5 },
          { min: 501, max: 1000, feePercent: 10.5 },
          { min: 1001, max: Infinity, feePercent: 16 }
        ]
      },
      {
        name: "Sports - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 9 },
          { min: 501, max: Infinity, feePercent: 13 }
        ]
      },
      {
        name: "Automotive - Other Products",
        priceRanges: [
          { min: 0, max: 300, feePercent: 0 },
          { min: 301, max: 500, feePercent: 15.5 },
          { min: 501, max: Infinity, feePercent: 16 }
        ]
      },
      {
        name: "Consumable Physical Gift Card",
        priceRanges: [
          { min: 0, max: Infinity, feePercent: 5 }
        ]
      },
      {
        name: "Warranty Services",
        priceRanges: [
          { min: 0, max: 300, feePercent: 10 },
          { min: 301, max: 500, feePercent: 29 },
          { min: 501, max: Infinity, feePercent: 30 }
        ]
      }
    ]
  }
]

  // Calculate all fees
  const calculateFees = () => {
    const selling = parseFloat(sellingPrice) || 0
    const cost = parseFloat(costPrice) || 0
    const weight = parseFloat(packageWeight) || 500
    const additional = parseFloat(additionalCosts) || 0
    const gst = parseFloat(gstPercent) || 18

    // Find referral fee percentage
    let referralFeePercent = 0
    const category = categories.find(cat => cat.name === selectedCategory)
    const subcategory = category?.subcategories.find(sub => sub.name === selectedSubcategory)
    
    if (subcategory) {
      const priceRange = subcategory.priceRanges.find(range => 
        selling >= range.min && selling <= range.max
      )
      referralFeePercent = priceRange?.feePercent || 0
    }

    // Calculate referral fee
    const referralFee = selling * (referralFeePercent / 100)

    // Calculate closing fee based on price range
    let closingFee = 0
    if (fulfillmentMethod === "fba") {
      if (selling <= 300) closingFee = 26
      else if (selling <= 500) closingFee = 21
      else if (selling <= 1000) closingFee = 26
      else closingFee = 51
    } else if (fulfillmentMethod === "easy-ship") {
      if (selling <= 300) closingFee = 6
      else if (selling <= 500) closingFee = 11
      else if (selling <= 1000) closingFee = 34
      else closingFee = 65
    } else {
      if (selling <= 300) closingFee = 45
      else if (selling <= 500) closingFee = 35
      else if (selling <= 1000) closingFee = 50
      else closingFee = 100
    }

    // Calculate shipping fee
    let shippingFee = 0
    const weightInKg = weight / 1000
    let baseFee = 0
    
    if (shippingRegion === "local") {
      if (stepLevel === "premium") baseFee = 37
      else if (stepLevel === "standard") baseFee = 39
      else baseFee = 42
    } else if (shippingRegion === "regional") {
      if (stepLevel === "premium") baseFee = 63
      else if (stepLevel === "standard") baseFee = 65
      else baseFee = 69
    } else {
      if (stepLevel === "premium") baseFee = 298
      else if (stepLevel === "standard") baseFee = 300
      else baseFee = 304
    }

    shippingFee = baseFee
    if (weightInKg > 2) {
      const additionalWeight = Math.ceil(weightInKg - 2)
      shippingFee += additionalWeight * 24
    }

    // Calculate pick & pack fee (FBA only)
    const pickPackFee = fulfillmentMethod === "fba" ? (weightInKg <= 1 ? 17 : 17 + Math.ceil((weightInKg - 1)) * 5) : 0

    // Calculate storage fee (FBA only, simplified)
    const storageFee = fulfillmentMethod === "fba" ? 15 : 0

    // Calculate GST
    const totalAmazonFees = referralFee + closingFee + shippingFee + pickPackFee + storageFee
    const gstAmount = totalAmazonFees * (gst / 100)

    // Calculate totals
    const totalFees = totalAmazonFees + gstAmount + additional
    const revenue = selling
    const profit = revenue - cost - totalFees
    const margin = revenue > 0 ? (profit / revenue) * 100 : 0

    setResults({
      referralFee,
      closingFee,
      shippingFee,
      pickPackFee,
      storageFee,
      gstAmount,
      totalFees,
      profit,
      margin,
      revenue
    })
  }

  // Reset form
  const resetForm = () => {
    setSelectedCategory("")
    setSelectedSubcategory("")
    setSellingPrice("")
    setCostPrice("")
    setPackageWeight("500")
    setDimensions({ length: "20", width: "15", height: "5" })
    setFulfillmentMethod("fba")
    setShippingRegion("local")
    setStepLevel("standard")
    setGstPercent("18")
    setAdditionalCosts("")
    setResults({
      referralFee: 0,
      closingFee: 0,
      shippingFee: 0,
      pickPackFee: 0,
      storageFee: 0,
      gstAmount: 0,
      totalFees: 0,
      profit: 0,
      margin: 0,
      revenue: 0
    })
  }

  // Reset subcategory when category changes
  useEffect(() => {
    setSelectedSubcategory("")
  }, [selectedCategory])

  useEffect(() => {
    if (sellingPrice && costPrice && selectedCategory && selectedSubcategory) {
      calculateFees()
    }
  }, [sellingPrice, costPrice, selectedCategory, selectedSubcategory, fulfillmentMethod, shippingRegion, stepLevel, gstPercent, additionalCosts, packageWeight])

  const features = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Accurate Calculations",
      description: "Based on latest Amazon India fee structure with all categories and subcategories included."
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Visual Breakdown",
      description: "Interactive charts and graphs to visualize your profit margins and fee breakdowns."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile First",
      description: "Optimized for mobile devices so you can calculate profits on the go."
    }
  ]

  const tips = [
    "Choose Low-Fee Categories: Focus on categories with lower referral fees like Books (3-4.5%), Large Appliances (5-5.5%), or Mobile Phones (5%).",
    "Optimize Package Weight: Keep items under 500g when possible, and avoid crossing weight thresholds that trigger higher shipping fees.",
    "Bundle Products Strategically: Create bundles to increase average order value and spread fixed costs like closing fees across multiple items.",
    "Improve Your STEP Level: Work towards Premium/Advanced STEP levels to get lower shipping rates and other benefits.",
    "Monitor Storage Costs: Avoid long-term storage fees by managing inventory turnover efficiently.",
    "Calculate Break-Even Points: Always know your minimum selling price to cover all costs and achieve desired profit margins.",
    "Use FBA for Prime Benefits: FBA products get Prime badging, leading to higher conversion rates that can justify the additional fees.",
    "Factor in Return Costs: Account for return processing costs and potential inventory loss in your profit calculations.",
    "Seasonal Fee Adjustments: Plan for peak season surcharges and adjust pricing accordingly during high-demand periods.",
    "Regular Profit Analysis: Use our calculator monthly to analyze profitability and identify optimization opportunities."
  ]
const getDisplayName = (name: string) => {
  const maxLength = 40; // Adjust based on your design
  if (name.length <= maxLength) return name;
  return name.substring(0, maxLength - 3) + '...';
}
  return (
      <>
      <Navigation />
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Amazon FBA Calculator India
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Calculate your Amazon seller profits, fees, and margins instantly
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <CheckCircle className="h-4 w-4 mr-2" />
                All Amazon Fees Included
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <TrendingUp className="h-4 w-4 mr-2" />
                Real-time Calculations
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Smartphone className="h-4 w-4 mr-2" />
                Mobile Optimized
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
                  Amazon FBA Profit Calculator
                </CardTitle>
                <CardDescription>
                  Calculate your Amazon seller profits with accurate fee breakdowns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Product Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Product Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category *</Label>
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category.name} value={category.name}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subcategory">Subcategory *</Label>
                        <Select 
                          value={selectedSubcategory} 
                          onValueChange={setSelectedSubcategory}
                          disabled={!selectedCategory}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select subcategory" />
                          </SelectTrigger>
                          <SelectContent>
                            {selectedCategory && categories
                              .find(cat => cat.name === selectedCategory)
                              ?.subcategories.map((sub) => (
                                <SelectItem key={sub.name} value={sub.name}>
                                  {sub.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sellingPrice">Selling Price (₹) *</Label>
                        <Input
                          id="sellingPrice"
                          type="number"
                          placeholder="Enter selling price"
                          value={sellingPrice}
                          onChange={(e) => setSellingPrice(e.target.value)}
                        />
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

                  {/* Package Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Package Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="weight">Package Weight (grams)</Label>
                        <Input
                          id="weight"
                          type="number"
                          value={packageWeight}
                          onChange={(e) => setPackageWeight(e.target.value)}
                        />
                      </div>
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
                  </div>

                  {/* Fulfillment Options */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Fulfillment Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Fulfillment Method</Label>
                        <RadioGroup value={fulfillmentMethod} onValueChange={setFulfillmentMethod}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="fba" id="fba" />
                            <Label htmlFor="fba">Fulfillment by Amazon (FBA)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="easy-ship" id="easy-ship" />
                            <Label htmlFor="easy-ship">Easy Ship</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="self-ship" id="self-ship" />
                            <Label htmlFor="self-ship">Self Ship</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label>Shipping Region</Label>
                        <RadioGroup value={shippingRegion} onValueChange={setShippingRegion}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="local" id="local" />
                            <Label htmlFor="local">Local (Same City)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="regional" id="regional" />
                            <Label htmlFor="regional">Regional</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="national" id="national" />
                            <Label htmlFor="national">National</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label>STEP Level</Label>
                        <Select value={stepLevel} onValueChange={setStepLevel}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select STEP level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="premium">Premium</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="standard">Standard</SelectItem>
                            <SelectItem value="basic">Basic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Costs */}
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="gst">GST % (on Amazon fees)</Label>
                        <Input
                          id="gst"
                          type="number"
                          value={gstPercent}
                          onChange={(e) => setGstPercent(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="additional">Additional Costs (₹) - Optional</Label>
                        <Input
                          id="additional"
                          type="number"
                          placeholder="Packaging, marketing, etc."
                          value={additionalCosts}
                          onChange={(e) => setAdditionalCosts(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button onClick={calculateFees} size="lg" className="flex-1">
                      Calculate Profit
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
                    Profit Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Net Profit</p>
                      <p className={`text-2xl font-bold ${results.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{results.profit.toFixed(2)}
                      </p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Profit Margin</p>
                      <p className={`text-2xl font-bold ${results.margin >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {results.margin.toFixed(2)}%
                      </p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Total Fees</p>
                      <p className="text-2xl font-bold text-foreground">
                        ₹{results.totalFees.toFixed(2)}
                      </p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Revenue</p>
                      <p className="text-2xl font-bold text-foreground">
                        ₹{results.revenue.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Fee Breakdown */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Fee Breakdown</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Referral Fee:</span>
                        <span>₹{results.referralFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Closing Fee:</span>
                        <span>₹{results.closingFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping Fee:</span>
                        <span>₹{results.shippingFee.toFixed(2)}</span>
                      </div>
                      {fulfillmentMethod === "fba" && (
                        <>
                          <div className="flex justify-between">
                            <span>Pick & Pack Fee:</span>
                            <span>₹{results.pickPackFee.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Storage Fee:</span>
                            <span>₹{results.storageFee.toFixed(2)}</span>
                          </div>
                        </>
                      )}
                      <div className="flex justify-between">
                        <span>GST (18%):</span>
                        <span>₹{results.gstAmount.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold">
                        <span>Total Fees:</span>
                        <span>₹{results.totalFees.toFixed(2)}</span>
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
                      <div className="p-3 bg-primary/10 rounded-full">
                        {feature.icon}
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
            {/* Why Use Our Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Why Use Our Amazon FBA Calculator?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive fee coverage including all Amazon charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Real-time calculations with instant updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Compare all fulfillment methods side-by-side</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Accurate 2025 fee structures for Amazon India</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Expert Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  10 Expert Tips to Maximize Profits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {tips.slice(0, 5).map((tip, index) => (
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

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="#fee-guide">Complete Fee Guide</a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="#categories">Category Fees</a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="#faq">FAQs</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Fee Guide Section */}
        <div id="fee-guide" className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Complete Amazon FBA Fee Guide for Indian Sellers 2025</CardTitle>
              <CardDescription>
                Understanding Amazon seller fees is crucial for building a profitable business on Amazon India.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="fees">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="fees">Key Fees</TabsTrigger>
                  <TabsTrigger value="referral">Referral Fees</TabsTrigger>
                  <TabsTrigger value="closing">Closing Fees</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping Fees</TabsTrigger>
                </TabsList>
                
                <TabsContent value="fees">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">1. Referral Fees (Commission)</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Category-based: Varies by product type</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Range: 0% to 30% of selling price</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Price-dependent: Different rates for price ranges</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">2. Closing Fees</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Price-based: Fixed fee per order</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Range: ₹6 to ₹100 per order</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="referral">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Category</TableHead>
                        <TableHead>Price Range</TableHead>
                        <TableHead>Fee %</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Mobile Phones</TableCell>
                        <TableCell>All Prices</TableCell>
                        <TableCell>5.0%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Laptops</TableCell>
                        <TableCell>≤ ₹70,000</TableCell>
                        <TableCell>6.0%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Books</TableCell>
                        <TableCell>≤ ₹250</TableCell>
                        <TableCell>3.0%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
                
                <TabsContent value="closing">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Fulfillment Method</TableHead>
                        <TableHead>Price Range</TableHead>
                        <TableHead>Closing Fee</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>FBA</TableCell>
                        <TableCell>₹0 - ₹300</TableCell>
                        <TableCell>₹26</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Easy Ship</TableCell>
                        <TableCell>₹0 - ₹300</TableCell>
                        <TableCell>₹6</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Self Ship</TableCell>
                        <TableCell>Above ₹1000</TableCell>
                        <TableCell>₹100</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
                
                <TabsContent value="shipping">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>STEP Level</TableHead>
                        <TableHead>Distance</TableHead>
                        <TableHead>First 500g</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Premium & Advanced</TableCell>
                        <TableCell>Local</TableCell>
                        <TableCell>₹37</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Standard</TableCell>
                        <TableCell>Regional</TableCell>
                        <TableCell>₹65</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Basic</TableCell>
                        <TableCell>National</TableCell>
                        <TableCell>₹304</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="accuracy">
                  <AccordionTrigger>How accurate is this Amazon FBA calculator for India?</AccordionTrigger>
                  <AccordionContent>
                    Our Amazon FBA calculator is based on the latest Amazon India fee structure (2025) and includes all major fees: referral fees (0% to 30%), closing fees (₹6 to ₹100), shipping fees, pick & pack fees (₹17-₹26), storage fees (₹45/cubic foot), and 18% GST.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="fees-included">
                  <AccordionTrigger>What Amazon seller fees are included in the calculation?</AccordionTrigger>
                  <AccordionContent>
                    The calculator includes: Referral fees (category-based 0-30%), Closing fees (fulfillment method-based ₹6-₹100), Weight handling fees (₹37-₹304), Pick & pack fees (FBA only ₹17-₹26), Storage fees (FBA only ₹45/cubic foot/month), and GST (18% on all Amazon fees).
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="gst">
                  <AccordionTrigger>How does Amazon GST calculation work for sellers?</AccordionTrigger>
                  <AccordionContent>
                    Amazon charges 18% GST on all seller fees (referral, closing, shipping, pick & pack, storage). GST is calculated as: (Total Amazon Fees) × 18%. This GST is in addition to the product GST you collect from customers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}