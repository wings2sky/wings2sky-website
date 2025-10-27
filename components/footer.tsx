import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import SkyLogo from "../public/new-logo.png"

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-16 w-40 relative"> {/* Increased height from h-12 to h-16 and width from w-32 to w-40 */}
                <Image 
                  src={SkyLogo} 
                  alt="Wings2Sky Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 160px, 200px"
                />
              </div>
            </div>
            <p className="text-muted-foreground">Your trusted partner for e-commerce and digital solutions.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Sell on Amazon
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Sell on Flipkart
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Sell on Meesho
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  E-commerce Photoshoot
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} />
                <a href="mailto:contact@wings2sky.com" className="hover:text-primary transition">
                  Connect@wings2sky.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} />
                <a href="tel:+919289088384" className="hover:text-primary transition">
                  +91-92890 88384
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>
                Plot no. 505 Sector 19, Dwarka Delhi 110075 India
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition">
              Privacy Policy
            </Link>
          </div>
          <p className="text-center text-muted-foreground">&copy; 2025 Wings2Sky. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}