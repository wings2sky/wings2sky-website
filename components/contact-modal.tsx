"use client"

import { useState, useEffect } from "react"
import { X, User, Mail, Phone } from "lucide-react"
import { parsePhoneNumberFromString, AsYouType } from 'libphonenumber-js'

const services = [
  {
    value: "web-designing",
    label: "Web Designing",
  },
  {
    value: "web-development",
    label: "Web Development",
  },
  {
    value: "mobile-apps",
    label: "Mobile Apps",
  },
  {
    value: "e-commerce",
    label: "E-Commerce",
  },
  {
    value: "digital-marketing",
    label: "Digital Marketing",
  },
  {
    value: "performance",
    label: "Performance",
  },
  {
    value: "security",
    label: "Security",
  },
  {
    value: "photoshoot",
    label: "Photoshoot",
  },
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
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<{email?: string; phone?: string}>({})
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [touched, setTouched] = useState<{email?: boolean; phone?: boolean}>({})

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

  // Auto-show modal after 40 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        console.log("40 seconds passed - modal should appear")
      }
    }, 40000)

    return () => clearTimeout(timer)
  }, [isOpen])

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
    return countries.find(country => country.dialCode === formData.countryCode) || countries[1] // Default to India
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
    setTouched(prev => ({ ...prev, [field]: true }))
    
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
    
    // Mark all fields as touched
    setTouched({ email: true, phone: true })
    
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
        setErrors({})
        setTouched({})
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-background border border-border rounded-xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">Talk to an Expert</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="text-foreground" size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <User size={16} className="text-primary" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              Work Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              required
              className={`w-full px-3 py-2 bg-card border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition ${
                errors.email ? 'border-red-500' : 'border-border'
              }`}
              placeholder="john@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
            {!errors.email && touched.email && formData.email && isValidEmail(formData.email) && (
              <p className="text-green-600 text-sm mt-1">✓ Valid email address</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              Phone Number
            </label>
            
            {/* Country Code Selector */}
            <div className="mb-3 relative">
              <label className="block text-xs font-medium text-muted-foreground mb-1">
                Country Code
              </label>
              <button
                type="button"
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                className="w-full px-3 py-2 bg-card border border-border rounded-lg text-left text-sm focus:outline-none focus:border-primary/50 transition"
              >
                <span className="flex items-center gap-2">
                  {getCurrentCountry().flag}
                  {formData.countryCode} - {getCurrentCountry().name}
                  <span className="ml-auto text-muted-foreground">▼</span>
                </span>
              </button>
              
              {showCountryDropdown && (
                <div className="absolute bottom-full left-0 right-0 mb-1 max-h-48 overflow-y-auto bg-card border border-border rounded-lg shadow-lg z-10">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => handleCountrySelect(country)}
                      className={`w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 ${
                        formData.countryCode === country.dialCode ? 'bg-primary/10 text-primary' : ''
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

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              onBlur={() => handleBlur('phone')}
              className={`w-full px-3 py-2 bg-card border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition ${
                errors.phone ? 'border-red-500' : 'border-border'
              }`}
              placeholder={`e.g., ${getCurrentCountry().code === 'IN' ? '9876543210' : 'Enter phone number'}`}
              maxLength={20} // Set a reasonable max length for formatted numbers
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
            {!errors.phone && touched.phone && formData.phone && isValidPhone(formData.phone) && (
              <p className="text-green-600 text-sm mt-1">
                ✓ Valid {getCurrentCountry().name} phone number
              </p>
            )}
            {/* {!errors.phone && !formData.phone && (
              <p className="text-muted-foreground text-sm mt-1">
                {getPhoneDigitMessage()}
              </p>
            )} */}
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              What are you looking for? *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary/50 transition"
            >
              <option value="">Please Select</option>
              {services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-sm">
              Thank you! We'll contact you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
              Failed to submit. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}