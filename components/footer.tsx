import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import SkyLogo from "../public/new-logo.png"

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* Logo and description - full width on mobile, then adjusts */}
          <div className="md:col-span-3 lg:col-span-1">
            <div className="flex justify-center md:justify-start mb-4">
              <div className="h-16 w-40 relative">
                <Image 
                  src={SkyLogo} 
                  alt="Wings2Sky Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 160px, 200px"
                  priority
                />
              </div>
            </div>
            <p className="text-muted-foreground text-center md:text-left text-sm lg:text-base">
              Your trusted partner for e-commerce and digital solutions.
            </p>
          </div>

          {/* Quick Links and Services in a 2-column grid on mobile */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 md:col-span-2 lg:col-span-2">
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-center md:text-left">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Projects", "Contact"].map((item) => (
                  <li key={item} className="text-center md:text-left">
                    <Link 
                      href={`/${item === "Home" ? "" : item.toLowerCase()}`} 
                      className="text-muted-foreground hover:text-primary transition text-sm lg:text-base block py-1"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-center md:text-left">Services</h4>
              <ul className="space-y-2">
                {[
                  "Digital Marketing",
                  "Website Development",
                  "Social Media Marketing",
                  "E-commerce Photoshoot"
                ].map((service) => (
                  <li key={service} className="text-center md:text-left">
                    <a href="#" className="text-muted-foreground hover:text-primary transition text-sm lg:text-base block py-1">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact - full width on mobile, then adjusts */}
          <div className="md:col-span-3 lg:col-span-1">
            <h4 className="font-semibold text-foreground mb-3 text-center md:text-left">Contact</h4>
            <ul className="space-y-3">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 text-muted-foreground">
                <Mail size={16} className="flex-shrink-0" />
                <a 
                  href="mailto:contact@wings2sky.com" 
                  className="hover:text-primary transition text-sm lg:text-base text-center md:text-left break-all"
                >
                  Connect@wings2sky.com
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 text-muted-foreground">
                <Phone size={16} className="flex-shrink-0" />
                <a 
                  href="tel:+919289088384" 
                  className="hover:text-primary transition text-sm lg:text-base text-center md:text-left"
                >
                  +91-92890 88384
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 text-muted-foreground">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span className="text-sm lg:text-base text-center md:text-left">
                  Plot no. 505 Sector 19, Dwarka Delhi 110075 India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-6 space-y-4">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-sm">
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition text-xs lg:text-sm">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition text-xs lg:text-sm">
              Privacy Policy
            </Link>
          </div>
          <p className="text-center text-muted-foreground text-xs lg:text-sm">
            &copy; 2025 Wings2Sky. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}