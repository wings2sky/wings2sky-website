"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, X, Send, Minimize2, Maximize2 } from "lucide-react"

export default function FloatingContact() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const phoneNumber = "+919289088384"
  const whatsappNumber = "919289088384"

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a
  href={`https://wa.me/${whatsappNumber}?text=Hello%20Wings2Sky!`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg transition-all hover:scale-110"
  title="Chat on WhatsApp"
>
  <WhatsAppIcon />
</a>


        {/* Chat Button */}
        <button
          onClick={() => {
            setIsChatOpen(true)
            setIsMinimized(false)
          }}
          className="cursor-pointer flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transition-all hover:scale-110"
          title="Chat with us"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <path d="M8 10h.01"/>
            <path d="M12 10h.01"/>
            <path d="M16 10h.01"/>
          </svg>
        </button>

        {/* Phone Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all hover:scale-110"
          title="Call us"
        >
          <Phone size={24} />
        </a>
      </div>

      {/* Chat Widget */}
      {isChatOpen && (
        <ChatWidget 
          isMinimized={isMinimized}
          onMinimize={() => setIsMinimized(!isMinimized)}
          onClose={() => setIsChatOpen(false)}
        />
      )}
    </>
  )
}

// WhatsApp Icon Component
function WhatsAppIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      fill="currentColor" 
      viewBox="0 0 16 16"
    >
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
  )
}

interface ChatWidgetProps {
  isMinimized: boolean
  onMinimize: () => void
  onClose: () => void
}

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

function ChatWidget({ isMinimized, onMinimize, onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; timestamp: Date }>>([
    {
      text: "Welcome to Wings2Sky services! I'm here to help you. Could you please provide me with your name?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [currentInput, setCurrentInput] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91", // Default to India
    subject: "",
    message: "",
  })
  const [currentStep, setCurrentStep] = useState<"name" | "email" | "phone" | "subject" | "message" | "complete">("name")
  const [isLoading, setIsLoading] = useState(false)
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Get current country details
  const getCurrentCountry = () => {
    return countries.find(country => country.dialCode === formData.countryCode) || countries[1] // Default to India
  }

  // Validation functions
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidPhone = (phone: string): boolean => {
    const currentCountry = getCurrentCountry()
    const digitsOnly = phone.replace(/\D/g, '')
    
    // Check if the digits match the country's pattern
    return currentCountry.pattern.test(digitsOnly)
  }

  const getPhoneValidationMessage = (): string => {
    const currentCountry = getCurrentCountry()
    const countryName = currentCountry.name
    const digits = currentCountry.digits
    
    if (Array.isArray(digits)) {
      return `Please enter a valid ${countryName} phone number (${digits[0]} to ${digits[1]} digits)`
    } else {
      return `Please enter a valid ${countryName} phone number (exactly ${digits} digits)`
    }
  }

  const getPhonePlaceholder = (): string => {
    const currentCountry = getCurrentCountry()
    return currentCountry.placeholder
  }

  const formatPhoneInput = (input: string): string => {
    // Remove all non-digits and limit to maximum expected digits
    const digitsOnly = input.replace(/\D/g, '')
    const currentCountry = getCurrentCountry()
    const maxDigits = Array.isArray(currentCountry.digits) ? currentCountry.digits[1] : currentCountry.digits
    
    return digitsOnly.slice(0, maxDigits)
  }

  const handleSendMessage = async () => {
    if (!currentInput.trim()) return

    const userMessage = {
      text: currentInput,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setCurrentInput("")
    setIsLoading(true)

    // Update form data based on current step
    const updatedFormData = { ...formData }
    let validationError = ""

    switch (currentStep) {
      case "name":
        updatedFormData.name = currentInput
        setFormData(updatedFormData)
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            {
              text: "Thank you! What's your email address?",
              isUser: false,
              timestamp: new Date(),
            },
          ])
          setCurrentStep("email")
          setIsLoading(false)
        }, 1000)
        break

      case "email":
        if (!isValidEmail(currentInput)) {
          validationError = "Please enter a valid email address (e.g., name@example.com)"
        } else {
          updatedFormData.email = currentInput
          setFormData(updatedFormData)
          setTimeout(() => {
            setMessages(prev => [
              ...prev,
              {
                text: "Great! What's your phone number? You can select your country code.",
                isUser: false,
                timestamp: new Date(),
              },
            ])
            setCurrentStep("phone")
            setIsLoading(false)
          }, 1000)
        }
        break

      case "phone":
        const formattedPhone = formatPhoneInput(currentInput)
        if (!isValidPhone(formattedPhone)) {
          validationError = getPhoneValidationMessage()
        } else {
          updatedFormData.phone = formattedPhone
          setFormData(updatedFormData)
          setTimeout(() => {
            setMessages(prev => [
              ...prev,
              {
                text: "What subject would you like to discuss?",
                isUser: false,
                timestamp: new Date(),
              },
            ])
            setCurrentStep("subject")
            setIsLoading(false)
          }, 1000)
        }
        break

      case "subject":
        updatedFormData.subject = currentInput
        setFormData(updatedFormData)
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            {
              text: "Please share your message or project details:",
              isUser: false,
              timestamp: new Date(),
            },
          ])
          setCurrentStep("message")
          setIsLoading(false)
        }, 1000)
        break

      case "message":
        updatedFormData.message = currentInput
        setFormData(updatedFormData)
        
        // Send the form data to Web3Forms using the same key
        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              access_key: '203aa19b-7eb3-4b02-ba59-699b8c0d81bf', // Same key as contact form
              name: updatedFormData.name,
              email: updatedFormData.email,
              phone: `${updatedFormData.countryCode} ${updatedFormData.phone}`,
              subject: updatedFormData.subject,
              message: updatedFormData.message,
              source: 'chat-widget',
            }),
          })

          const data = await response.json()

          if (data.success) {
            setMessages(prev => [
              ...prev,
              {
                text: "Thank you for providing all the information! We've received your details and will get back to you soon.",
                isUser: false,
                timestamp: new Date(),
              },
            ])
          } else {
            setMessages(prev => [
              ...prev,
              {
                text: "Thank you for the information! There was an issue sending your details. Please try contacting us via email or phone.",
                isUser: false,
                timestamp: new Date(),
              },
            ])
          }
        } catch (error) {
          console.error("Error sending chat data:", error)
          setMessages(prev => [
            ...prev,
            {
              text: "Thank you for the information! There was an error processing your request. Please try contacting us via email or phone.",
              isUser: false,
              timestamp: new Date(),
            },
          ])
        } finally {
          setCurrentStep("complete")
          setIsLoading(false)
        }
        break

      default:
        setIsLoading(false)
        break
    }

    // Handle validation errors
    if (validationError) {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            text: validationError,
            isUser: false,
            timestamp: new Date(),
          },
        ])
        setIsLoading(false)
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleCountrySelect = (country: typeof countries[0]) => {
    setFormData(prev => ({ ...prev, countryCode: country.dialCode }))
    setShowCountryDropdown(false)
    // Clear phone input when country changes
    setCurrentInput("")
  }

  const handlePhoneInputChange = (value: string) => {
    // Format phone input based on country
    const formattedValue = formatPhoneInput(value)
    setCurrentInput(formattedValue)
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl border border-border">
        <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-lg">
          <h3 className="font-semibold">Wings2Sky Chat</h3>
          <div className="flex gap-2">
            <button onClick={onMinimize} className="hover:bg-primary/80 rounded p-1">
              <Maximize2 size={16} />
            </button>
            <button onClick={onClose} className="hover:bg-primary/80 rounded p-1">
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-card rounded-lg shadow-2xl border border-border flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-lg">
        <h3 className="font-semibold">Wings2Sky Chat</h3>
        <div className="flex gap-2">
          <button onClick={onMinimize} className="hover:bg-primary/80 rounded p-1">
            <Minimize2 size={16} />
          </button>
          <button onClick={onClose} className="hover:bg-primary/80 rounded p-1">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-secondary">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-3 py-2 ${
                  message.isUser
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-muted text-muted-foreground rounded-bl-none"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${message.isUser ? "text-primary-foreground/70" : "text-muted-foreground/70"}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted text-muted-foreground rounded-lg rounded-bl-none px-3 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      {currentStep !== "complete" && (
        <div className="p-4 border-t border-border">
          {/* Country selector for phone step */}
          {currentStep === "phone" && (
            <div className="mb-3 relative">
              <label className="block text-xs font-medium text-muted-foreground mb-1">
                Country Code
              </label>
              <button
                type="button"
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-left text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <span className="flex items-center gap-2">
                  {getCurrentCountry().flag}
                  {formData.countryCode} - {getCurrentCountry().name}
                  <span className="ml-auto text-muted-foreground">▼</span>
                </span>
              </button>
              
              {showCountryDropdown && (
                <div className="absolute bottom-full left-0 right-0 mb-1 max-h-48 overflow-y-auto bg-background border border-border rounded-lg shadow-lg z-10">
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
          )}

          <div className="flex gap-2">
            <input
              type={currentStep === "email" ? "email" : currentStep === "phone" ? "tel" : "text"}
              value={currentInput}
              onChange={(e) => currentStep === "phone" ? handlePhoneInputChange(e.target.value) : setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                currentStep === "name" ? "Your full name..." :
                currentStep === "email" ? "your@email.com..." :
                currentStep === "phone" ? `e.g., ${getPhonePlaceholder()}` :
                currentStep === "subject" ? "Subject of your inquiry..." :
                "Tell us about your project..."
              }
              maxLength={currentStep === "phone" ? getCurrentCountry().digits : undefined}
              className="flex-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!currentInput.trim() || isLoading}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <Send size={18} />
            </button>
          </div>
          
          {/* Input hints */}
          {currentStep === "email" && (
            <p className="text-xs text-muted-foreground mt-1">
              Please enter a valid email address
            </p>
          )}
          {currentStep === "phone" && (
            <p className="text-xs text-muted-foreground mt-1">
              {getPhoneValidationMessage()}
            </p>
          )}
        </div>
      )}
    </div>
  )
}