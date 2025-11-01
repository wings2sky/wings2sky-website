import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import SkyLogo from "../public/new-logo.png"

export default function Footer() {
  const socialMediaLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/wings2sky_/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100091567551858",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      url: "https://x.com/wings2sky",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCrAsyExzIpr4kV-CXXmkQ-Q",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/wings2sky-e-solution-private-limited",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ]

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
            <p className="text-muted-foreground text-center md:text-left text-sm lg:text-base mb-4">
              Your trusted partner for e-commerce and digital solutions.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              {socialMediaLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
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