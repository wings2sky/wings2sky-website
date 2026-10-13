"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ArrowRight, ChevronDown, CheckCircle2, Loader2 } from "lucide-react"
import SkyLogoMark from "../public/logo-mark.png"
import { parsePhoneNumberFromString, AsYouType } from 'libphonenumber-js'

const services = [
  { value: "ecommerce-account-management", label: "E-Commerce Account Management" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "seo", label: "Search Engine Optimization (SEO)" },
  { value: "paid-ads", label: "Paid Ads (Google & Meta)" },
  { value: "social-media-marketing", label: "Social Media Marketing" },
  { value: "website-development", label: "Website Development" },
  { value: "photoshoot", label: "Product Photoshoot" },
  { value: "other", label: "Something else" },
]

// Country data for phone number selection
const countries = [
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', digits: 10 },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', digits: 10 },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', digits: [10, 11] },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', digits: 10 },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', digits: 9 },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪', digits: [10, 11] },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷', digits: 9 },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹', digits: [9, 10] },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸', digits: 9 },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷', digits: [10, 11] },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵', digits: [9, 10] },
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳', digits: 11 },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷', digits: [9, 10] },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', digits: 8 },
  { code: 'AE', name: 'UAE', dialCode: '+971', flag: '🇦🇪', digits: 9 },
]

interface LeadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    service: "",
  })
  const [countryIso, setCountryIso] = useState("IN")
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<{email?: string; phone?: string}>({})
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // Validation functions
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidPhone = (phone: string): boolean => {
    if (!phone) return false
    
    // Remove all non-digit characters for digit count check
    const digitsOnly = phone.replace(/\D/g, '')
    const currentCountry = getCurrentCountry()
    
    // Check digit length first
    const isValidLength = Array.isArray(currentCountry.digits) 
      ? digitsOnly.length >= currentCountry.digits[0] && digitsOnly.length <= currentCountry.digits[1]
      : digitsOnly.length === currentCountry.digits
    
    if (!isValidLength) return false
    
    // Then validate with libphonenumber
    const phoneNumber = parsePhoneNumberFromString(phone, getCurrentCountry().code)
    return phoneNumber ? phoneNumber.isValid() : false
  }

  const getCurrentCountry = () => {
    return countries.find(country => country.code === countryIso) || countries[1] // Default to India
  }

  const getPhoneDigitMessage = (): string => {
    const currentCountry = getCurrentCountry()
    const digits = currentCountry.digits
    
    if (Array.isArray(digits)) {
      return `${digits[0]} to ${digits[1]} digits required`
    } else {
      return `Exactly ${digits} digits required`
    }
  }

  const getMaxPhoneLength = (): number => {
    const currentCountry = getCurrentCountry()
    return Array.isArray(currentCountry.digits) ? currentCountry.digits[1] : currentCountry.digits
  }

  const formatPhoneInput = (value: string): string => {
    // First, remove any non-digit characters and limit to max length
    const digitsOnly = value.replace(/\D/g, '')
    const maxLength = getMaxPhoneLength()
    const limitedDigits = digitsOnly.slice(0, maxLength)
    
    // Then format with libphonenumber
    const asYouType = new AsYouType(getCurrentCountry().code as any)
    return asYouType.input(limitedDigits)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear errors when user starts typing
    if (name === "email" && errors.email) {
      setErrors(prev => ({ ...prev, email: undefined }))
    }
    if (name === "phone" && errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }))
    }
  }

  const handlePhoneChange = (value: string) => {
    const formattedValue = formatPhoneInput(value)
    setFormData(prev => ({
      ...prev,
      phone: formattedValue,
    }))
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }))
    }
  }

  const handleBlur = (field: string) => {
    // Validate on blur
    if (field === 'email' && formData.email) {
      if (!isValidEmail(formData.email)) {
        setErrors(prev => ({ ...prev, email: "Please enter a valid email address" }))
      }
    }
    
    if (field === 'phone' && formData.phone) {
      if (!isValidPhone(formData.phone)) {
        const currentCountry = getCurrentCountry()
        setErrors(prev => ({ 
          ...prev, 
          phone: `Invalid ${currentCountry.name} phone number. ${getPhoneDigitMessage()}` 
        }))
      }
    }
  }

  const handleCountrySelect = (country: typeof countries[0]) => {
    setCountryIso(country.code)
    setFormData(prev => ({ 
      ...prev, 
      countryCode: country.dialCode,
      phone: "" // Clear phone when country changes
    }))
    setShowCountryDropdown(false)
    setErrors(prev => ({ ...prev, phone: undefined }))
  }

  const validateForm = (): boolean => {
    const newErrors: {email?: string; phone?: string} = {}

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation (only if phone is provided)
    if (formData.phone && !isValidPhone(formData.phone)) {
      const currentCountry = getCurrentCountry()
      newErrors.phone = `Invalid ${currentCountry.name} phone number. ${getPhoneDigitMessage()}`
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      // Get the selected service label for the subject
      const selectedService = services.find(s => s.value === formData.service)?.label || formData.service
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '203aa19b-7eb3-4b02-ba59-699b8c0d81bf', // Your Web3Forms access key
          name: formData.name,
          email: formData.email,
          phone: formData.phone ? `${formData.countryCode} ${formData.phone}` : "",
          subject: `Lead Form: ${selectedService} Inquiry`,
          message: "", // Empty message as requested
          service: selectedService,
          from_name: formData.name,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: "+91",
          service: "",
        })
        setCountryIso("IN")
        setErrors({})
        // Auto-close after success
        setTimeout(() => {
          onClose()
          setSubmitStatus("idle")
        }, 3000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("Error sending form:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  const fieldClass =
    "w-full h-11 px-3.5 bg-background border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/70 transition focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
  const labelClass = "block text-sm font-medium text-foreground mb-1.5"

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md max-h-[calc(100dvh-2rem)] overflow-y-auto bg-card border border-border rounded-3xl shadow-2xl motion-safe:animate-in motion-safe:zoom-in-95 motion-safe:duration-200"
      >
        {/* Brand glow */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-36 rounded-t-3xl bg-gradient-to-b from-primary/15 to-transparent" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground transition hover:text-foreground hover:border-primary/50"
        >
          <X size={18} />
        </button>

        {submitStatus === "success" ? (
          <div className="relative px-6 py-14 sm:px-8 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 text-green-600 dark:text-green-400">
              <CheckCircle2 size={28} />
            </span>
            <h2 id="lead-modal-title" className="mt-5 text-2xl font-bold tracking-tight text-foreground">
              Thank you!
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We have received your details. Our team will contact you soon.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="relative px-6 pt-7 sm:px-8 sm:pt-8">
              <div className="flex items-center gap-2 pr-10">
                <Image src={SkyLogoMark} alt="" className="h-7 w-auto" sizes="44px" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Free Consultation</span>
              </div>
              <h2 id="lead-modal-title" className="mt-4 text-2xl sm:text-[1.7rem] font-bold tracking-tight leading-tight text-foreground">
                Let&apos;s grow your online sales
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Share a few details and a Wings2Sky expert will reach out to understand your business and suggest the right plan.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="relative px-6 pt-6 pb-6 sm:px-8 sm:pb-8 space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="lead-name" className={labelClass}>
                  Full name
                </label>
                <input
                  id="lead-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className={`${fieldClass} border-border`}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="lead-email" className={labelClass}>
                  Email address
                </label>
                <input
                  id="lead-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  required
                  autoComplete="email"
                  className={`${fieldClass} ${errors.email ? 'border-red-500' : 'border-border'}`}
                  placeholder="name@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="lead-phone" className={labelClass}>
                  Phone number <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <div className="relative">
                  <div
                    className={`flex h-11 bg-background border rounded-xl transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 ${
                      errors.phone ? 'border-red-500' : 'border-border'
                    }`}
                  >
                    {/* Country Code Selector */}
                    <button
                      type="button"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      aria-label="Select country code"
                      aria-expanded={showCountryDropdown}
                      className="flex shrink-0 cursor-pointer items-center gap-1.5 pl-3.5 pr-2.5 border-r border-border text-sm text-foreground rounded-l-xl focus:outline-none"
                    >
                      <span className="text-base leading-none">{getCurrentCountry().flag}</span>
                      {formData.countryCode}
                      <ChevronDown size={14} className={`text-muted-foreground transition-transform ${showCountryDropdown ? "rotate-180" : ""}`} />
                    </button>
                    <input
                      id="lead-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      autoComplete="tel-national"
                      className="min-w-0 flex-1 px-3 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 rounded-r-xl focus:outline-none"
                      placeholder="Mobile number"
                      maxLength={20} // Set a reasonable max length for formatted numbers
                    />
                  </div>

                  {showCountryDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 max-h-48 overflow-y-auto bg-popover border border-border rounded-xl shadow-lg z-20">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => handleCountrySelect(country)}
                          className={`w-full px-3.5 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 ${
                            countryIso === country.code ? 'bg-primary/10 text-primary' : 'text-popover-foreground'
                          }`}
                        >
                          <span className="text-base">{country.flag}</span>
                          <span className="flex-1">{country.name}</span>
                          <span className="text-muted-foreground">{country.dialCode}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>
                )}
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="lead-service" className={labelClass}>
                  What do you need help with?
                </label>
                <div className="relative">
                  <select
                    id="lead-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={`${fieldClass} border-border appearance-none pr-10 cursor-pointer ${formData.service ? "" : "text-muted-foreground/70"}`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              {submitStatus === "error" && (
                <div role="alert" className="px-4 py-3 bg-red-500/10 border border-red-500/40 rounded-xl text-red-600 dark:text-red-400 text-sm">
                  Something went wrong while sending your details. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="group w-full h-12 mt-2 inline-flex cursor-pointer items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Get My Free Consultation
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting, you agree to our{" "}
                <Link href="/privacy" className="underline underline-offset-2 hover:text-primary">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
