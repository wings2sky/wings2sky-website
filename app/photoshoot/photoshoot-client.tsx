"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const photoshootServices = [
  {
    title: "Amazon Photoshoot",
    description: "High quality white background images to sell on Amazon",
    image: "/white-background-product-photography.jpg",
  },
  {
    title: "Flipkart Photoshoot",
    description: "India's largest e-commerce platform to sell your product online",
    image: "/flipkart-product-photography.jpg",
  },
  {
    title: "Myntra Photoshoot",
    description: "Get the gray background product images for myntra On-boarding",
    image: "/gray-background-fashion-photography.jpg",
  },
  {
    title: "Website Photoshoot",
    description: "Product or services photoshoot for your own website",
    image: "/professional-website-product-photography.jpg",
  },
  {
    title: "Catalog Photoshoot",
    description: "Create your catalog to send your product at customer or wholesalers",
    image: "/catalog-product-photography.jpg",
  },
  {
    title: "Creative Images",
    description: "Images with additional creative ideas for e-commerce",
    image: "/creative-ecommerce-photography.jpg",
  },
]

const portfolioCategories = [
  {
    title: "Female Model Photoshoot",
    image: "/professional-female-model-photoshoot-fashion.jpg",
  },
  {
    title: "Male Model Photoshoot",
    image: "/professional-male-model-photoshoot-fashion.jpg",
  },
  {
    title: "Product Photoshoot",
    image: "/professional-product-photography-studio.jpg",
  },
  {
    title: "Outdoor Photoshoot",
    image: "/outdoor-fashion-photoshoot-location.jpg",
  },
]

export default function PhotoshootClient() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">E-Commerce Photoshoot Services</h1>
          <p className="text-xl text-muted-foreground mb-8">Professional Studio Photography for Your Products</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Why Photoshoot Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Premium Quality Images</h2>
              <p className="text-lg text-muted-foreground mb-4">
                <span className="font-semibold text-primary">Full Creative Value:</span> Premium quality images help
                provide better visibility of your products. If products look good, they sell great.
              </p>
              <p className="text-lg text-muted-foreground">
                <span className="font-semibold text-primary">Award-Winning:</span> For more than 10+ years, we are
                helping brands grow with good quality images. Over 100+ product categories we have shot around the
                globe.
              </p>
            </div>
            <img
              src="/professional-product-photography-studio-setup.jpg"
              alt="Photography Studio"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Photoshoot Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {photoshootServices.map((service, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Carousel with Swiper */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Portfolio</h2>

          <div className="relative">
            <Swiper
              modules={[SwiperNavigation, Pagination, Autoplay]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={0}
              slidesPerView={1}
              onSwiper={setSwiperInstance}
              className="h-96 rounded-lg overflow-hidden"
            >
              {portfolioCategories.map((category, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <h3 className="text-4xl font-bold text-white text-center px-4">{category.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Custom Pagination */}
            <div className="swiper-pagination flex justify-center gap-2 mt-6"></div>
          </div>
        </div>
      </section>

      {/* Video Photoshoot Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Video Photoshoot</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Enhance visibility of your product with High-Quality video shoot.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}