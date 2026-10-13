"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import SkyLogoMark from "../public/logo-mark.png"
import ThemeToggle from "./theme-toggle"
import { featuredServices, industryLinks, serviceCategories } from "@/lib/site-menu"
import { calculators, PlatformMark } from "./calculator-hero"

type MenuKey = "services" | "industries" | "calculators"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null)
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null)
  const [mobileCategory, setMobileCategory] = useState<string | null>(null)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null)
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
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

  const scrollTopIfHome = () => {
    // If already on homepage, scroll to top
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const closeMobileMenu = () => {
    setIsOpen(false)
    setMobileSection(null)
    setMobileCategory(null)
  }

  const desktopLinkClass = (active: boolean) =>
    `transition whitespace-nowrap ${active ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`

  const mobileLinkClass = (active: boolean) =>
    `block px-4 py-2 rounded-full transition ${active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"}`

  const calculatorTagClass = (tag: string) =>
    tag === "POPULAR" ? "bg-blue-100 text-blue-800" :
    tag === "HOT" ? "bg-red-100 text-red-800" :
    "bg-green-100 text-green-800"

  const servicesActive = isActive("/services") || isActive("/photoshoot")
  const industriesActive = isActive("/industries")
  const calculatorsActive = calculatorLinks.some(link => pathname === link.href)

  const desktopMenuTrigger = (key: MenuKey, label: string, active: boolean) => (
    <button
      type="button"
      onClick={() => setOpenMenu(key)}
      onMouseEnter={() => setOpenMenu(key)}
      aria-expanded={openMenu === key}
      aria-haspopup="true"
      className={`cursor-pointer flex items-center gap-1 ${desktopLinkClass(openMenu === key || active)}`}
    >
      {label}
      <ChevronDown size={16} className={`transition-transform ${openMenu === key ? "rotate-180" : ""}`} />
    </button>
  )

  const mobileSectionTrigger = (key: MenuKey, label: string) => (
    <button
      type="button"
      onClick={() => setMobileSection(mobileSection === key ? null : key)}
      aria-expanded={mobileSection === key}
      className="flex items-center justify-between w-full px-4 py-2 text-foreground hover:text-primary transition"
    >
      <span>{label}</span>
      <ChevronDown size={16} className={`transition-transform ${mobileSection === key ? "rotate-180" : ""}`} />
    </button>
  )

  return (
    <header className="sticky top-0 z-50 px-3 py-3 sm:px-6 sm:py-4 pointer-events-none">
      {/* Floating pill */}
      <nav
        ref={navRef}
        onMouseLeave={() => setOpenMenu(null)}
        className="pointer-events-auto relative max-w-7xl mx-auto rounded-full border border-border bg-secondary/85 backdrop-blur-md shadow-lg shadow-primary/10"
      >
        <div className="flex items-center gap-2 min-[360px]:gap-3 h-16 pl-3 min-[360px]:pl-4 pr-2.5 lg:pl-6 lg:pr-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => {
              closeMobileMenu()
              scrollTopIfHome()
            }}
          >
            <Image
              src={SkyLogoMark}
              alt="Wings2Sky Logo"
              className="h-8 min-[360px]:h-10 w-auto"
              priority
              sizes="56px"
            />
            <span className="text-base min-[360px]:text-lg sm:text-xl font-bold tracking-tight text-foreground">
              Wings<span className="text-primary">2</span>Sky
            </span>
          </Link>

          {/* Theme switch - beside the logo on desktop, beside the menu button on mobile */}
          <ThemeToggle className="ml-auto lg:ml-2" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-8 text-[15px] xl:text-base">
            <Link href="/" className={desktopLinkClass(isActive("/"))} onClick={scrollTopIfHome} onMouseEnter={() => setOpenMenu(null)}>
              Home
            </Link>
            <Link href="/about" className={desktopLinkClass(isActive("/about"))} onMouseEnter={() => setOpenMenu(null)}>
              About
            </Link>

            {/* Services mega menu - the panel itself is rendered below, spanning the pill */}
            {desktopMenuTrigger("services", "Services", servicesActive)}

            {/* Industries Dropdown */}
            <div className="relative">
              {desktopMenuTrigger("industries", "Industries", industriesActive)}

              {openMenu === "industries" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[36rem] z-50">
                  <div className="bg-popover text-popover-foreground border border-border rounded-3xl shadow-2xl p-4">
                    <div className="grid grid-cols-2 gap-1">
                      {industryLinks.map((industry) => {
                        const Icon = industry.icon

                        return (
                          <Link
                            key={industry.slug}
                            href={industry.href}
                            className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground/90 transition hover:bg-primary/10 hover:text-primary"
                            onClick={() => setOpenMenu(null)}
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              <Icon size={16} />
                            </span>
                            {industry.name}
                          </Link>
                        )
                      })}
                    </div>
                    <Link
                      href="/industries"
                      className="group mt-3 flex items-center justify-between border-t border-border px-3 pt-4 pb-1 text-sm font-semibold text-primary"
                      onClick={() => setOpenMenu(null)}
                    >
                      View all industries
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Seller Calculators Dropdown */}
            <div className="relative">
              {desktopMenuTrigger("calculators", "Calculators", calculatorsActive)}

              {openMenu === "calculators" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[27rem] z-50">
                  <div className="max-h-[calc(100vh-7.5rem)] overflow-y-auto bg-popover text-popover-foreground border border-border rounded-3xl shadow-2xl p-3">
                    <div className="px-3 pt-2 pb-3">
                      <h3 className="font-semibold text-foreground">Marketplace Fee Calculators</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Calculate your selling fees and profit margins across different platforms
                      </p>
                    </div>

                    <div className="space-y-0.5">
                      {calculatorLinks.map((link) => {
                        const platform = calculators.find((calculator) => calculator.href === link.href)
                        const isCurrent = pathname === link.href

                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : "_self"}
                            aria-current={isCurrent ? "page" : undefined}
                            className={`group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition hover:bg-primary/10 ${isCurrent ? "bg-primary/10" : ""}`}
                            onClick={() => setOpenMenu(null)}
                          >
                            {platform && <PlatformMark calculator={platform} size="md" />}
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className={`text-sm font-semibold transition group-hover:text-primary ${isCurrent ? "text-primary" : "text-foreground"}`}>
                                  {link.label}
                                </span>
                                {link.tag && (
                                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${calculatorTagClass(link.tag)}`}>
                                    {link.tag}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{link.description}</p>
                            </div>
                            <ArrowRight size={16} className="shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/projects" className={desktopLinkClass(isActive("/projects"))} onMouseEnter={() => setOpenMenu(null)}>
              Projects
            </Link>
            <Link href="/blogs" className={desktopLinkClass(isActive("/blogs"))} onMouseEnter={() => setOpenMenu(null)}>
              Blogs
            </Link>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            onMouseEnter={() => setOpenMenu(null)}
            className="hidden lg:inline-flex shrink-0 items-center rounded-full bg-primary px-5 xl:px-6 py-2.5 font-semibold text-primary-foreground shadow-md shadow-primary/30 transition hover:bg-primary/90 whitespace-nowrap"
          >
            <span className="xl:hidden">Contact Us</span>
            <span className="hidden xl:inline">Get a Free Consultation</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => (isOpen ? closeMobileMenu() : setIsOpen(true))}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-primary/40 text-foreground transition hover:bg-primary/10"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Services mega menu */}
        {openMenu === "services" && (
          <div className="hidden lg:block absolute inset-x-0 top-full pt-3 z-50">
            <div className="max-h-[calc(100vh-7.5rem)] overflow-y-auto bg-popover text-popover-foreground border border-border rounded-3xl shadow-2xl p-6 xl:p-8">
              <div className="grid grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-8">
                {serviceCategories.map((category) => {
                  const Icon = category.icon

                  return (
                    <div key={category.slug}>
                      <Link
                        href={`/services#${category.slug}`}
                        className="flex items-center gap-2 text-sm font-bold text-primary hover:underline underline-offset-4"
                        onClick={() => setOpenMenu(null)}
                      >
                        <Icon size={16} />
                        {category.name}
                      </Link>
                      <ul className="mt-3 space-y-0.5">
                        {category.services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={service.href}
                              className="block -mx-2 rounded-lg px-2 py-1.5 text-sm text-foreground/80 transition hover:bg-primary/10 hover:text-primary"
                              onClick={() => setOpenMenu(null)}
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>

              {/* Core e-commerce services */}
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-border pt-5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">E-Commerce Growth</span>
                {featuredServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="rounded-full border border-border px-3.5 py-1.5 text-sm font-medium text-foreground transition hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                    onClick={() => setOpenMenu(null)}
                  >
                    {service.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="group ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  onClick={() => setOpenMenu(null)}
                >
                  View all services
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu - floats over the page below the pill */}
      {isOpen && (
        <div className="pointer-events-auto lg:hidden absolute inset-x-3 sm:inset-x-6 top-full -mt-1 max-h-[calc(100vh-6.5rem)] overflow-y-auto rounded-3xl border border-border bg-secondary/95 backdrop-blur-md shadow-lg p-3 space-y-1">
          <Link
            href="/"
            className={mobileLinkClass(isActive("/"))}
            onClick={() => {
              closeMobileMenu()
              scrollTopIfHome()
            }}
          >
            Home
          </Link>
          <Link href="/about" className={mobileLinkClass(isActive("/about"))} onClick={closeMobileMenu}>
            About
          </Link>

          {/* Mobile Services */}
          <div>
            {mobileSectionTrigger("services", "Services")}

            {mobileSection === "services" && (
              <div className="mt-1 ml-4 border-l border-border pl-3 pb-2">
                {serviceCategories.map((category) => {
                  const Icon = category.icon
                  const isCategoryOpen = mobileCategory === category.slug

                  return (
                    <div key={category.slug}>
                      <button
                        type="button"
                        onClick={() => setMobileCategory(isCategoryOpen ? null : category.slug)}
                        aria-expanded={isCategoryOpen}
                        className="flex items-center justify-between w-full py-2 text-sm font-semibold text-primary"
                      >
                        <span className="flex items-center gap-2">
                          <Icon size={15} />
                          {category.name}
                        </span>
                        <ChevronDown size={14} className={`transition-transform ${isCategoryOpen ? "rotate-180" : ""}`} />
                      </button>

                      {isCategoryOpen && (
                        <ul className="pb-2 pl-6">
                          {category.services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={service.href}
                                className="block py-1.5 text-sm text-foreground/90 hover:text-primary transition"
                                onClick={closeMobileMenu}
                              >
                                {service.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                })}

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">E-Commerce Growth</p>
                {featuredServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-1.5 text-sm text-foreground/90 hover:text-primary transition"
                    onClick={closeMobileMenu}
                  >
                    {service.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  onClick={closeMobileMenu}
                >
                  View all services
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Industries */}
          <div>
            {mobileSectionTrigger("industries", "Industries")}

            {mobileSection === "industries" && (
              <div className="mt-1 ml-4 border-l border-border pl-3 pb-2">
                {industryLinks.map((industry) => {
                  const Icon = industry.icon

                  return (
                    <Link
                      key={industry.slug}
                      href={industry.href}
                      className="flex items-center gap-2.5 py-1.5 text-sm text-foreground/90 hover:text-primary transition"
                      onClick={closeMobileMenu}
                    >
                      <Icon size={15} className="text-primary" />
                      {industry.name}
                    </Link>
                  )
                })}
                <Link
                  href="/industries"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  onClick={closeMobileMenu}
                >
                  View all industries
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Seller Calculators */}
          <div>
            {mobileSectionTrigger("calculators", "Seller Calculators")}

            {mobileSection === "calculators" && (
              <div className="mt-1 ml-4 border-l border-border pl-3 pb-2">
                {calculatorLinks.map((link) => {
                  const platform = calculators.find((calculator) => calculator.href === link.href)

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      className="flex items-center gap-2.5 py-1.5 text-sm text-foreground/90 hover:text-primary transition"
                      onClick={closeMobileMenu}
                    >
                      {platform && <PlatformMark calculator={platform} size="sm" />}
                      {link.label}
                      {link.tag && (
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${calculatorTagClass(link.tag)}`}>
                          {link.tag}
                        </span>
                      )}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          <Link href="/projects" className={mobileLinkClass(isActive("/projects"))} onClick={closeMobileMenu}>
            Projects
          </Link>
          <Link href="/blogs" className={mobileLinkClass(isActive("/blogs"))} onClick={closeMobileMenu}>
            Blogs
          </Link>
          <Link
            href="/contact"
            className="block mt-2 px-4 py-2.5 rounded-full text-center font-semibold bg-primary text-primary-foreground shadow-md shadow-primary/30 transition hover:bg-primary/90"
            onClick={closeMobileMenu}
          >
            Get a Free Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
