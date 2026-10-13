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
    text: "Wings 2 Sky transformed our online business. Our sales increased by 150% within 3 months. Their team is professional and results-driven.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "Fashion Boutique",
    text: "Excellent service and support. They helped us optimize our marketplace listings and our visibility improved significantly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "Electronics Retailer",
    text: "The team at Wings 2 Sky is knowledgeable and dedicated. They provided strategies that directly impacted our bottom line.",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Gupta",
    company: "Beauty Products",
    text: "Outstanding results! Our order volume doubled and customer satisfaction improved. Highly recommended!",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    company: "Home Decor Store",
    text: "Professional, reliable, and results-oriented. Wings 2 Sky exceeded our expectations in every way.",
    rating: 5,
  },
]

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase()

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className="bg-background px-4 sm:px-6 lg:px-8 py-14 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
            Testimonials
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Hear from businesses that have transformed their online presence with Wings2Sky
          </p>
        </div>

        <div className="relative mt-8">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
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
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>

                  <blockquote className="mt-3 flex-grow text-sm text-foreground/90 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                    <span
                      aria-hidden
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary"
                    >
                      {getInitials(testimonial.name)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Hidden on mobile */}
          <button
            className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 cursor-pointer bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition shadow-lg -translate-x-4 hidden md:flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 cursor-pointer bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition shadow-lg translate-x-4 hidden md:flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Custom Pagination */}
        <div className="testimonial-pagination flex justify-center gap-2 mt-6 !relative" />
      </div>

      <style jsx global>{`
        .testimonial-bullet {
          width: 8px;
          height: 8px;
          background-color: var(--muted-foreground);
          opacity: 0.3;
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .testimonial-bullet-active {
          width: 24px;
          background-color: var(--primary);
          opacity: 1;
          border-radius: 8px;
        }
        
        .testimonial-pagination {
          position: relative !important;
          bottom: 0 !important;
        }

        /* Ensure all slides have the same height */
        .swiper-slide {
          height: auto;
        }
        
        .swiper-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  )
}
