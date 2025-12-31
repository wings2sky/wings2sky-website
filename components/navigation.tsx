"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import SkyLogo from "../public/new-logo.png"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCalculatorsOpen, setIsCalculatorsOpen] = useState(false)
  const [isMobileCalculatorsOpen, setIsMobileCalculatorsOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCalculatorsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  const calculatorLinks = [
    {
      href: "/amazon-fba",
      label: "Amazon FBA Calculator",
      tag: "POPULAR",
      description: "Calculate fees, profits and pricing for Amazon India marketplace"
    },
    {
      href: "/flipkart-calculator",
      label: "Flipkart Calculator",
      tag: "HOT",
      description: "Determine commission fees and profit margins for Flipkart"
    },
    {
      href: "/myntra-calculator",
      label: "Myntra Calculator",
      description: "Fashion marketplace fee calculator and profit analyzer"
    },
    // {
    //   href: "/ajio-calculator",
    //   label: "Ajio Calculator",
    //   description: "Calculate selling fees and revenues for Ajio platform"
    // },
    {
      href: "/blinkit-calculator",
      label: "Blinkit Calculator",
      tag: "NEW",
      description: "Quick commerce fee calculator for instant delivery"
    },
    {
      href: "/nykaa-calculator",
      label: "Nykaa Calculator",
      tag: "HOT",
      description: "Calculate Nykaa seller commissions, shipping charges, and profit margins"
    }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-secondary/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Button - positioned to the left */}
          <div className="flex md:hidden flex-1">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo - centered on mobile, left on desktop */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link 
              href="/" 
              className="flex items-center"
              onClick={() => {
                setIsOpen(false)
                // If already on homepage, scroll to top
                if (pathname === "/") {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
              <div className="h-16 w-48 relative">
                <Image 
                  src={SkyLogo} 
                  alt="Wings2Sky Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu - pushed more to the right */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
            <Link
              href="/"
              className={`transition ${isActive("/") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
              onClick={() => {
                // If already on homepage, scroll to top
                if (pathname === "/") {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition ${isActive("/about") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`transition ${isActive("/services") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
            >
              Services
            </Link>
            
            {/* Seller Calculators Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button 
                onClick={() => setIsCalculatorsOpen(!isCalculatorsOpen)}
                onMouseEnter={() => setIsCalculatorsOpen(true)}
                className={`cursor-pointer flex items-center gap-1 transition ${isCalculatorsOpen || calculatorLinks.some(link => pathname === link.href) ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
              >
                Calculators
                <ChevronDown size={16} className={`transition-transform ${isCalculatorsOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isCalculatorsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-popover border border-border rounded-lg shadow-lg z-50 overflow-hidden"
                  onMouseEnter={() => setIsCalculatorsOpen(true)}
                  onMouseLeave={() => setIsCalculatorsOpen(false)}
                >
                  <div className="p-4 border-b border-border">
                    <h3 className="font-semibold text-lg">Marketplace Fee Calculators</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Calculate your selling fees and profit margins across different platforms
                    </p>
                  </div>
                  
                  <div className="max-h-96 overflow-y-auto">
                    {calculatorLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                        className="flex items-start gap-3 p-4 hover:bg-primary/5 transition border-b border-border last:border-b-0"
                        onClick={() => setIsCalculatorsOpen(false)}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{link.label}</span>
                            {link.tag && (
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                link.tag === "POPULAR" ? "bg-blue-100 text-blue-800" :
                                link.tag === "HOT" ? "bg-red-100 text-red-800" :
                                "bg-green-100 text-green-800"
                              }`}>
                                {link.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/photoshoot"
              className={`transition ${isActive("/photoshoot") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
            >
              Photoshoot
            </Link>
            <Link
              href="/projects"
              className={`transition ${isActive("/projects") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className={`transition ${isActive("/blogs") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className={`transition ${isActive("/contact") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
            >
              Contact
            </Link>
          </div>

          {/* Spacer for mobile to balance the hamburger menu */}
          <div className="flex md:hidden flex-1 justify-end">
            {/* Empty div for spacing balance */}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className={`block px-4 py-2 rounded transition ${isActive("/") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"}`}
              onClick={() => {
                setIsOpen(false)
                // If already on homepage, scroll to top
                if (pathname === "/") {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-4 py-2 rounded transition ${isActive("/about") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`block px-4 py-2 rounded transition ${isActive("/services") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"}`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>

            {/* Mobile Seller Calculators */}
            <div className="px-4 py-2">
              <button
                onClick={() => setIsMobileCalculatorsOpen(!isMobileCalculatorsOpen)}
                className="flex items-center justify-between w-full text-foreground hover:text-primary transition"
              >
                <span>Seller Calculators</span>
                <ChevronDown size={16} className={`transition-transform ${isMobileCalculatorsOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isMobileCalculatorsOpen && (
                <div className="mt-2 ml-4 space-y-2 border-l border-border pl-4">
                  <div className="mb-2">
                    <h4 className="font-medium text-sm">Marketplace Fee Calculators</h4>
                    <p className="text-xs text-muted-foreground">
                      Calculate your selling fees and profit margins across different platforms
                    </p>
                  </div>
                  
                  {calculatorLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      className="block py-2 hover:text-primary transition"
                      onClick={() => {
                        setIsOpen(false)
                        setIsMobileCalculatorsOpen(false)
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{link.label}</span>
                        {link.tag && (
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            link.tag === "POPULAR" ? "bg-blue-100 text-blue-800" :
                            link.tag === "HOT" ? "bg-red-100 text-red-800" :
                            "bg-green-100 text-green-800"
                          }`}>
                            {link.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{link.description}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/photoshoot"
              className={`block px-4 py-2 rounded transition ${isActive("/photoshoot") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"}`}
              onClick={() => setIsOpen(false)}
            >
              Photoshoot
            </Link>
            <Link
              href="/projects"
              className={`block px-4 py-2 rounded transition ${isActive("/projects") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"}`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className={`block px-4 py-2 rounded transition ${isActive("/blogs") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"}`}
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-2 rounded transition ${isActive("/contact") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}