"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "E-Commerce Store",
    image: "/professional-man-avatar.jpg",
    text: "Wings 2 Sky transformed our online business. Our sales increased by 150% within 3 months. Their team is professional and results-driven.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "Fashion Boutique",
    image: "/professional-woman-avatar.jpg",
    text: "Excellent service and support. They helped us optimize our marketplace listings and our visibility improved significantly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "Electronics Retailer",
    image: "/professional-man-avatar-2.jpg",
    text: "The team at Wings 2 Sky is knowledgeable and dedicated. They provided strategies that directly impacted our bottom line.",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Gupta",
    company: "Beauty Products",
    image: "/professional-woman-avatar-2.jpg",
    text: "Outstanding results! Our order volume doubled and customer satisfaction improved. Highly recommended!",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    company: "Home Decor Store",
    image: "/professional-man-avatar-3.jpg",
    text: "Professional, reliable, and results-oriented. Wings 2 Sky exceeded our expectations in every way.",
    rating: 5,
  },
  
]

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses that have transformed their online presence with Wings2Sky
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
              bulletClass: 'testimonial-bullet',
              bulletActiveClass: 'testimonial-bullet-active',
            }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            loop={true}
            speed={800}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 ease-in-out hover:shadow-lg h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.text}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-110 shadow-lg -translate-x-4"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-110 shadow-lg translate-x-4"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Custom Pagination */}
          <div className="testimonial-pagination flex justify-center gap-2 mt-8 !relative" />
        </div>

      </div>

      <style jsx global>{`
        .testimonial-bullet {
          width: 8px;
          height: 8px;
          background-color: hsl(var(--muted-foreground));
          opacity: 0.3;
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .testimonial-bullet-active {
          width: 24px;
          background-color: hsl(var(--primary));
          opacity: 1;
          border-radius: 8px;
        }
        
        .testimonial-pagination {
          position: relative !important;
          bottom: 0 !important;
        }
      `}</style>
    </section>
  )
}