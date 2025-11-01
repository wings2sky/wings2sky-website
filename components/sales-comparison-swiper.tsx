"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign, ShoppingCart } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, FreeMode, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'

interface SalesAnalytics {
  id: number
  title: string
  image: string
  description: string
  thumbnail?: string
  metrics: {
    current: number | string
    previous: number | string
    growth: number | string
    type: 'revenue' | 'customers' | 'orders' | 'conversion'
    currency?: string
  }
  timeframe: {
    current: string
    previous: string
  }
  charts?: {
    monthlyData: number[]
    labels: string[]
  }
}

// Static sales analytics data
const SALES_ANALYTICS_DATA: SalesAnalytics[] = [
  {
    id: 1,
    title: "Sales Before Our Service",
    image: "",
    description: "Increased Sales To Double in 4 months from 20lakhs to 40lakhs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop",
    metrics: {
      current: "40,83,302",
      previous: "19,93,287",
      growth: "100.1%",
      type: 'revenue',
      currency: '₹'
    },
    timeframe: {
      current: "After 4 Months",
      previous: "Previous March"
    },
    charts: {
      monthlyData: [105, 112, 128, 156],
      labels: ['', '', '', '']
    }
  },
  {
    id: 2,
    title: "Sales After Our Service",
    image: "",
    description: "Increased Sales To Double in 4 months from 20lakhs to 40lakhs",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop",
    metrics: {
      current: "40,83,302",
      previous: "19,93,287",
      growth: "100.1",
      type: 'revenue',
      currency: '₹'
    },
    timeframe: {
      current: "After 4 Months",
      previous: "Previous March"
    },
    charts: {
      monthlyData: [105, 112, 128, 156],
      labels: ['', '', '', '']
    }
  },
  {
    id: 11,
    title: "Client Acquisition Growth",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
    description: "New Client acquisition with improved marketing strategies",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=150&fit=crop",
    metrics: {
      current: 3240,
      previous: 2150,
      growth: 50.7,
      type: 'customers'
    },
    timeframe: {
      current: "Last 90 Days",
      previous: "Previous 90 Days"
    },
    charts: {
      monthlyData: [1800, 1950, 2150, 3240],
      labels: ['', '', '', '']
    }
  },
  {
    id: 3,
    title: "Order Volume Increase",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    description: "Total orders processed with new fulfillment system",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=150&fit=crop",
    metrics: {
      current: "20220",
      previous: "10369",
      growth: "100",
      type: 'orders'
    },
    timeframe: {
      current: "Recent Quarter",
      previous: "Previous Quarter"
    },
    charts: {
      monthlyData: [5200, 5800, 6200, 8560],
      labels: ['', '', '', '']
    }
  },
  {
    id: 4,
    title: "Conversion Rate Optimization",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=500&fit=crop",
    description: "Website conversion rate improvements through UX enhancements",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=150&fit=crop",
    metrics: {
      current: 4.2,
      previous: 2.8,
      growth: 50.0,
      type: 'conversion'
    },
    timeframe: {
      current: "Current Period",
      previous: "Baseline Period"
    },
    charts: {
      monthlyData: [2.5, 2.8, 3.2, 4.2],
      labels: ['', '', '', '']
    }
  },
  {
    id: 6,
    title: "Mobile Sales Performance",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    description: "Mobile commerce growth with responsive design implementation",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=150&fit=crop",
    metrics: {
      current: 890000,
      previous: 520000,
      growth: 71.2,
      type: 'revenue',
      currency: '₹'
    },
    timeframe: {
      current: "Mobile Revenue Q4",
      previous: "Mobile Revenue Q3"
    },
    charts: {
      monthlyData: [45000, 52000, 68000, 89000],
      labels: ['', '', '', '']
    }
  }
]

const MetricIcon = ({ type }: { type: SalesAnalytics['metrics']['type'] }) => {
  const iconProps = { size: 20, className: "text-green-500" }
  
  switch (type) {
    case 'revenue':
      return <DollarSign {...iconProps} />
    case 'customers':
      return <Users {...iconProps} />
    case 'orders':
      return <ShoppingCart {...iconProps} />
    case 'conversion':
      return <TrendingUp {...iconProps} />
    default:
      return <TrendingUp {...iconProps} />
  }
}

const formatMetric = (metric: SalesAnalytics['metrics']) => {
  const { current, previous, type, currency } = metric
  
  if (type === 'conversion') {
    return {
      current: `${current}%`,
      previous: `${previous}%`,
      display: `${current}%`
    }
  }
  
  if (type === 'revenue') {
    const formatRevenue = (value: number | string) => {
      if (typeof value === 'string') {
        return `${currency}${value}`
      }
      
      if (value >= 10000000) {
        return `${currency}${(value / 10000000).toFixed(1)}Cr`
      } else if (value >= 100000) {
        return `${currency}${(value / 100000).toFixed(1)}L`
      } else if (value >= 1000) {
        return `${currency}${(value / 1000).toFixed(1)}K`
      }
      return `${currency}${value}`
    }
    
    return {
      current: formatRevenue(current),
      previous: formatRevenue(previous),
      display: formatRevenue(current)
    }
  }
  
  // For customers and orders
  const formatCount = (value: number | string) => {
    if (typeof value === 'string') {
      return value
    }
    
    if (value >= 10000000) {
      return `${(value / 10000000).toFixed(1)}Cr`
    } else if (value >= 100000) {
      return `${(value / 100000).toFixed(1)}L`
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`
    }
    return value.toString()
  }
  
  return {
    current: formatCount(current),
    previous: formatCount(previous),
    display: formatCount(current)
  }
}

export default function SalesAnalyticsSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Sales Performance Analytics</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real data from the last three months showing significant growth across all key metrics
          </p>
        </div>

        <div className="relative">
          {/* Main Swiper */}
          <Swiper
            modules={[Navigation, Thumbs, Autoplay]}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            spaceBetween={10}
            className="mb-6 rounded-xl overflow-hidden border border-border bg-background h-96 md:h-[500px]"
          >
            {SALES_ANALYTICS_DATA.map((item) => {
              const formattedMetric = formatMetric(item.metrics)
              
              return (
                <SwiperSlide key={item.id}>
                  <div className="relative w-full h-full">
                    <img
                      src={item?.id == 1 ? "./sales-before.jpeg" : item?.id === 2 ? "./sales-after.jpeg"  :item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Enhanced overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6">
                      <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-end">
                        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
                          <h3 className="text-xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                            {item.title}
                          </h3>
                          <p className="text-white/90 mb-4 drop-shadow-md text-sm md:text-base">{item.description}</p>
                          
                          {/* Progress Bar Visualization */}
                          <div className="mb-4">
                            <div className="flex flex-col md:flex-row md:justify-between gap-2 text-white text-sm mb-2 drop-shadow-md">
                              <span className="font-semibold bg-black/50 px-2 py-1 rounded text-xs md:text-sm">
                                {item.timeframe.previous}: {formattedMetric.previous}
                              </span>
                              <span className="font-semibold bg-black/50 px-2 py-1 rounded text-xs md:text-sm">
                                {item.timeframe.current}: {formattedMetric.current}
                              </span>
                            </div>
                            <div className="w-full bg-white/30 rounded-full h-2 md:h-3">
                              <div 
                                className="bg-green-500 h-2 md:h-3 rounded-full transition-all duration-1000 ease-out shadow-lg"
                                style={{ width: `${Math.min(100, (Number(item.metrics.current) / Number(item.metrics.previous)) * 50)}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Metrics Card - Hidden on mobile */}
                        <div className="hidden md:block bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-xl">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="text-white font-semibold drop-shadow-md">
                                {item.metrics.type.charAt(0).toUpperCase() + item.metrics.type.slice(1)}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 bg-green-600 px-3 py-1 rounded-full shadow-lg">
                              <TrendingUp size={14} className="text-white" />
                              <span className="text-white text-sm font-bold">+{item.metrics.growth}%</span>
                            </div>
                          </div>
                          
                          <div className="text-2xl font-bold text-white mb-1 drop-shadow-md">
                            {formattedMetric.display}
                          </div>
                          
                          <div className="flex justify-between text-white/90 text-sm font-medium">
                            <span>Previous: {formattedMetric.previous}</span>
                            <span>Growth: +{item.metrics.growth}%</span>
                          </div>
                          
                          {/* Mini Chart Visualization - No labels */}
                          <div className="flex items-end justify-between h-12 mt-3 gap-1">
                            {item.charts?.monthlyData.map((value, index) => (
                              <div key={index} className="flex flex-col items-center flex-1">
                                <div 
                                  className="bg-green-500 w-full rounded-t transition-all duration-500 shadow-md"
                                  style={{ 
                                    height: `${(value / Math.max(...item.charts!.monthlyData)) * 100}%`,
                                    maxHeight: '32px'
                                  }}
                                ></div>
                                {/* Empty span - no labels */}
                                <span className="text-transparent text-xs mt-1">.</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* Thumbnail Swiper - Hidden on mobile */}
          <div className="hidden md:block">
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[Thumbs, FreeMode]}
              watchSlidesProgress
              freeMode={true}
              spaceBetween={12}
              slidesPerView={4}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                }
              }}
              className="thumb-swiper max-w-4xl mx-auto"
            >
              {SALES_ANALYTICS_DATA.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary opacity-60 hover:opacity-100 group">
                    <div className="relative">
                      <img
                        src={item?.id == 1 ? "./sales-before.jpeg" : item?.id === 2 ? "./sales-after.jpeg"  :item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-20 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
                      <div className="absolute bottom-1 left-1 right-1">
                        <div className="flex items-center justify-between">
                          <span className="text-white text-xs font-bold bg-green-600 px-2 py-0.5 rounded shadow-md">
                            +{item.metrics.growth}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Navigation Buttons - Hidden on mobile */}
          <button
            className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hidden md:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hidden md:flex"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {SALES_ANALYTICS_DATA.slice(0, 4).map((item) => (
            <div key={item.id} className="bg-background border border-border rounded-lg p-3 md:p-4 text-center shadow-sm">
              <div className="text-lg md:text-2xl font-bold text-foreground">
                {formatMetric(item.metrics).display}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground capitalize">{item.metrics.type}</div>
              <div className="text-green-600 text-xs md:text-sm font-semibold flex items-center justify-center gap-1 mt-1">
                <TrendingUp size={12} />
                +{item.metrics.growth}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}