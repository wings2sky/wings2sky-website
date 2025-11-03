"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

// Country data for phone number selection
const countries = [
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', pattern: /^\d{10}$/, placeholder: '1234567890', digits: 10 },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', pattern: /^\d{10}$/, placeholder: '9876543210', digits: 10 },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', pattern: /^\d{10,11}$/, placeholder: '7123456789', digits: [10, 11] },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', pattern: /^\d{10}$/, placeholder: '1234567890', digits: 10 },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', pattern: /^\d{9}$/, placeholder: '412345678', digits: 9 },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪', pattern: /^\d{10,11}$/, placeholder: '15123456789', digits: [10, 11] },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷', pattern: /^\d{9}$/, placeholder: '612345678', digits: 9 },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹', pattern: /^\d{9,10}$/, placeholder: '3123456789', digits: [9, 10] },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸', pattern: /^\d{9}$/, placeholder: '612345678', digits: 9 },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷', pattern: /^\d{10,11}$/, placeholder: '11987654321', digits: [10, 11] },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵', pattern: /^\d{9,10}$/, placeholder: '9012345678', digits: [9, 10] },
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳', pattern: /^\d{11}$/, placeholder: '13123456789', digits: 11 },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷', pattern: /^\d{9,10}$/, placeholder: '1023456789', digits: [9, 10] },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', pattern: /^\d{8}$/, placeholder: '91234567', digits: 8 },
  { code: 'AE', name: 'UAE', dialCode: '+971', flag: '🇦🇪', pattern: /^\d{9}$/, placeholder: '501234567', digits: 9 },
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91", // Default to India
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<{email?: string; phone?: string}>({})
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)

  // Validation functions
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidPhone = (phone: string): boolean => {
    const currentCountry = getCurrentCountry()
    const digitsOnly = phone.replace(/\D/g, '')
    return currentCountry.pattern.test(digitsOnly)
  }

  const getCurrentCountry = () => {
    return countries.find(country => country.dialCode === formData.countryCode) || countries[1] // Default to India
  }

  const getPhoneValidationMessage = (): string => {
    const currentCountry = getCurrentCountry()
    const countryName = currentCountry.name
    const digits = currentCountry.digits
    
    if (Array.isArray(digits)) {
      return `${digits[0]} to ${digits[1]} digits required`
    } else {
      return `Exactly ${digits} digits required`
    }
  }

  const formatPhoneInput = (input: string): string => {
    const digitsOnly = input.replace(/\D/g, '')
    const currentCountry = getCurrentCountry()
    const maxDigits = Array.isArray(currentCountry.digits) ? currentCountry.digits[1] : currentCountry.digits
    return digitsOnly.slice(0, maxDigits)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleCountrySelect = (country: typeof countries[0]) => {
    setFormData(prev => ({ ...prev, countryCode: country.dialCode }))
    setShowCountryDropdown(false)
    // Clear phone input when country changes
    setFormData(prev => ({ ...prev, phone: "" }))
  }

  const validateForm = (): boolean => {
    const newErrors: {email?: string; phone?: string} = {}

    // Email validation
    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation (only if phone is provided)
    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = `Invalid ${getCurrentCountry().name} phone number. ${getPhoneValidationMessage()}`
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate form before submission
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '203aa19b-7eb3-4b02-ba59-699b8c0d81bf',
          name: formData.name,
          email: formData.email,
          phone: formData.phone ? `${formData.countryCode} ${formData.phone}` : "",
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: "+91",
          subject: "",
          message: "",
        })
        setErrors({})
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 bg-card border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-border'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
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
              className="w-full px-3 py-2 bg-card border border-border rounded-lg text-left text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            className={`w-full px-4 py-3 bg-card border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.phone ? 'border-red-500' : 'border-border'
            }`}
            placeholder={`e.g., ${getCurrentCountry().placeholder}`}
            maxLength={Array.isArray(getCurrentCountry().digits) ? getCurrentCountry().digits[1] : getCurrentCountry().digits}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
          {!errors.phone && formData.phone && (
            <p className="text-green-600 text-sm mt-1">
              ✓ Valid {getCurrentCountry().name} phone number
            </p>
          )}
          {!errors.phone && !formData.phone && (
            <p className="text-muted-foreground text-sm mt-1">
              {getPhoneValidationMessage()}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Project inquiry"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>

        {submitStatus === "success" && (
          <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
            Failed to send message. Please try again.
          </div>
        )}
      </form>

      <div className="space-y-4 pt-8 border-t border-border">
        <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>

        <div className="flex items-start gap-4">
          <Mail className="text-primary mt-1" size={20} />
          <div>
            <p className="font-medium text-foreground">Email</p>
            <a href="mailto:contact@wings2sky.com" className="text-muted-foreground hover:text-primary transition">
              Connect@wings2sky.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="text-primary mt-1" size={20} />
          <div>
            <p className="font-medium text-foreground">Phone</p>
            <a href="tel:+919289088384" className="text-muted-foreground hover:text-primary transition">
              +91-92890 88384
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="text-primary mt-1" size={20} />
          <div>
            <p className="font-medium text-foreground">Address</p>
            <p className="text-muted-foreground">
            Plot no. 505 Sector 19, Dwarka Delhi 110075 India
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}