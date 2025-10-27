"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import SkyLogo from "../public/new-logo.png"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <nav className="sticky top-0 z-50 bg-secondary/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Increased height */}
          <Link href="/" className="flex items-center">
            <div className="h-16 w-48 relative"> {/* Larger container */}
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`transition ${isActive("/") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
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
              href="/contact"
              className={`transition ${isActive("/contact") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className={`block px-4 py-2 rounded transition ${isActive("/") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"}`}
              onClick={() => setIsOpen(false)}
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